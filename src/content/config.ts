import { defineCollection, z } from 'astro:content';

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    suburb: z.string(),
    mainImage: z.string(),
    thumbnail: z.string().optional(),
    address: z.string().optional(),
    location: z.string().optional(),
    courseMap: z.string().optional(),
  }),
});

export const collections = {
  courses,
};
