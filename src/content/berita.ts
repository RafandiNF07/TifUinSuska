import { defineCollection, z } from "astro:content";

export const beritaCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    image: z.string().url(),
    excerpt: z.string(),
    draft: z.boolean().optional(),
  }),
});
