import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        tags: z.array(z.string()),
        published: z.boolean().default(true),
        image: z.string().optional(),
        // Optional link to the matching Dev.to article. When set, the post
        // page pulls that article's comments and shows a "join in on Dev.to"
        // link. Posts without it simply have no comments section.
        devtoUrl: z.string().url().optional(),
    }),
});

export const collections = { blog };
