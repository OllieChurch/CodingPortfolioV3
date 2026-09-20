// Feature: portfolio-v3, Property 5: AI attribution on every post
import { describe, it, expect } from 'vitest';
import { AI_ATTRIBUTION } from '../src/data/posts';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

/**
 * **Validates: Requirements 5.3**
 *
 * Property 5: AI attribution on every post
 * For any blog post, the rendered output contains "Human written, AI assisted."
 *
 * The attribution lives in the shared blog post template, not in the markdown
 * files — so the template is what makes the property true for every post.
 * Vitest can't render Astro, so we check the template emits the attribution and
 * that a single catch-all route renders every post.
 */

const blogPages = join(__dirname, '..', 'src', 'pages', 'blog');
const POST_TEMPLATE = '[...slug].astro';

describe('AI attribution on every post (Property 5)', () => {
    it('the shared blog post template renders the attribution', () => {
        const template = readFileSync(join(blogPages, POST_TEMPLATE), 'utf-8');
        expect(template).toContain(AI_ATTRIBUTION);
    });

    it('that template is the only route rendering posts, so every post gets it', () => {
        const postRoutes = readdirSync(blogPages)
            .filter((f) => f.endsWith('.astro') && f !== 'index.astro');
        expect(postRoutes).toEqual([POST_TEMPLATE]);

        const posts = readdirSync(join(__dirname, '..', 'src', 'content', 'blog'))
            .filter((f) => f.endsWith('.md'));
        expect(posts.length).toBeGreaterThan(0);
    });
});
