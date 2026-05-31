import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string().optional(),
    author: z.string().optional(),
    originalUrl: z.string().optional(),
    type: z.string().optional(),
    draft: z.boolean().default(false),
    excerpt: z.string().optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    originalUrl: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, pages };
