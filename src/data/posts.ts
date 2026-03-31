/**
 * Utility functions for sorting and slicing blog posts.
 */

export interface PostLike {
    data: { date: Date; published?: boolean };
}

/** Filter out unpublished posts. */
export function filterPublished<T extends PostLike>(posts: T[]): T[] {
    return posts.filter((p) => p.data.published !== false);
}

/** Sort posts by date descending (newest first). Returns a new array. */
export function sortPostsByDateDesc<T extends PostLike>(posts: T[]): T[] {
    return [...filterPublished(posts)].sort(
        (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
    );
}

/** Sort posts by date descending and return at most `limit` posts. */
export function getLatestPosts<T extends PostLike>(posts: T[], limit: number): T[] {
    return sortPostsByDateDesc(posts).slice(0, limit);
}

/** Build the URL path for a blog post given its slug. */
export function getPostUrl(slug: string): string {
    return `/blog/${slug.toLowerCase()}`;
}

export interface BlogFrontmatter {
    title: string;
    date: Date;
    description: string;
    tags: string[];
}

/** Build an array of display strings from blog frontmatter. */
export function getFrontmatterDisplayFields(fm: BlogFrontmatter): string[] {
    return [
        fm.title,
        fm.date.toLocaleDateString(),
        fm.description,
        ...fm.tags,
    ];
}

/** The AI attribution text appended to every blog post. */
export const AI_ATTRIBUTION = 'Human written, AI assisted.';

/** Append the AI attribution to blog post content. */
export function appendAttribution(content: string): string {
    return `${content}\n\n${AI_ATTRIBUTION}`;
}

/** Check whether a blog post body contains a references section. */
export function hasReferencesSection(body: string | undefined | null): boolean {
    return body?.includes('## References') ?? false;
}
