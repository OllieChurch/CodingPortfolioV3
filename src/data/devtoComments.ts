// Fetches comments for a Dev.to article at request time (this runs server-side
// on the on-demand blog post route, so there are no CORS concerns).
//
// Two short-lived, in-memory caches keep us kind to the Dev.to API:
//   - article IDs rarely change, so they're cached for the life of the process
//   - comments are cached for 5 minutes, so a burst of visits or crawlers
//     doesn't trigger a fetch on every single request
// The caches live in a warm serverless instance and reset on cold start, which
// is all we need. Any failure returns null so the page still renders fine.

const COMMENTS_TTL_MS = 5 * 60 * 1000; // 5 minutes
const FETCH_TIMEOUT_MS = 5000;

export interface DevtoComment {
  id: string;
  author: string;
  authorUsername: string;
  avatar: string;
  createdAt: string;
  bodyHtml: string;
  replies: DevtoComment[];
}

export interface DevtoComments {
  articleUrl: string;
  count: number;
  comments: DevtoComment[];
}

const idCache = new Map<string, number>();
const commentsCache = new Map<number, { expires: number; data: DevtoComment[] }>();

/** Turn a Dev.to article URL into its "username/slug" API path. */
function articlePath(devtoUrl: string): string | null {
  try {
    const parts = new URL(devtoUrl).pathname.split('/').filter(Boolean);
    return parts.length >= 2 ? `${parts[0]}/${parts[1]}` : null;
  } catch {
    return null;
  }
}

async function fetchJson(url: string): Promise<any | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

async function resolveArticleId(path: string): Promise<number | null> {
  const cached = idCache.get(path);
  if (cached !== undefined) return cached;

  const article = await fetchJson(`https://dev.to/api/articles/${path}`);
  const id = typeof article?.id === 'number' ? article.id : null;
  if (id !== null) idCache.set(path, id);
  return id;
}

function normalise(raw: any): DevtoComment {
  const user = raw?.user ?? {};
  return {
    id: String(raw?.id_code ?? ''),
    author: user.name ?? 'Someone',
    authorUsername: user.username ?? '',
    avatar: user.profile_image_90 ?? user.profile_image ?? '',
    createdAt: raw?.created_at ?? '',
    bodyHtml: raw?.body_html ?? '',
    replies: Array.isArray(raw?.children) ? raw.children.map(normalise) : [],
  };
}

function countAll(comments: DevtoComment[]): number {
  return comments.reduce((total, c) => total + 1 + countAll(c.replies), 0);
}

export async function getDevtoComments(devtoUrl: string): Promise<DevtoComments | null> {
  const path = articlePath(devtoUrl);
  if (!path) return null;

  const id = await resolveArticleId(path);
  if (id === null) return null;

  const cached = commentsCache.get(id);
  let comments: DevtoComment[];

  if (cached && cached.expires > Date.now()) {
    comments = cached.data;
  } else {
    const raw = await fetchJson(`https://dev.to/api/comments?a_id=${id}`);
    if (!Array.isArray(raw)) return null;
    comments = raw.map(normalise);
    commentsCache.set(id, { expires: Date.now() + COMMENTS_TTL_MS, data: comments });
  }

  return { articleUrl: devtoUrl, count: countAll(comments), comments };
}

// --- Comment counts for listing pages -------------------------------------
// The blog index is statically prerendered, so it can't read the SSR
// function's in-memory comment cache. Instead we fetch counts at build time
// from the articles-list endpoint (one request returns `comments_count` for
// every article), which means the card counts refresh on each deploy. That's
// the "last fetched" moment for a static page, and a little staleness is fine.

const countsByUrl = new Map<string, number>();
const fetchedUsernames = new Set<string>();

function usernameFromUrl(devtoUrl: string): string | null {
  try {
    return new URL(devtoUrl).pathname.split('/').filter(Boolean)[0] ?? null;
  } catch {
    return null;
  }
}

/**
 * Given a list of Dev.to article URLs, return a map of URL -> comment count.
 * Missing entries simply mean we couldn't get a count (offline, etc.).
 */
export async function getDevtoCommentCounts(
  devtoUrls: string[],
): Promise<Map<string, number>> {
  const usernames = new Set(
    devtoUrls.map(usernameFromUrl).filter((u): u is string => u !== null),
  );

  for (const username of usernames) {
    if (fetchedUsernames.has(username)) continue;
    fetchedUsernames.add(username);

    const articles = await fetchJson(
      `https://dev.to/api/articles?username=${username}&per_page=100`,
    );
    if (!Array.isArray(articles)) continue;
    for (const article of articles) {
      if (typeof article?.url === 'string' && typeof article?.comments_count === 'number') {
        countsByUrl.set(article.url, article.comments_count);
      }
    }
  }

  const result = new Map<string, number>();
  for (const url of devtoUrls) {
    const count = countsByUrl.get(url);
    if (typeof count === 'number') result.set(url, count);
  }
  return result;
}
