import { defineCollection, z } from 'astro:content';

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featuredImage: z.string(),
    address: z.string().optional(),
    location: z.string().optional(),
    thumbnail: z.string().optional(),
    courseMap: z.string().optional(),
  }),
});

export const collections = {
  courses,
};
