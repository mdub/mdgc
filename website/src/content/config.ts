import { defineCollection, z } from 'astro:content';

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    location: z.string().optional(),
    address: z.string().optional(),
    featuredImage: z.string(),
    courseMap: z.string().optional(),
    thumbnail: z.string(),
    holes: z.number(),
    par: z.number(),
    length: z.number(),
    teeType: z.string(),
    targetType: z.string(),
    designer: z.string().optional(),
    established: z.string().optional(),
    cost: z.string(),
    facilities: z.array(z.string()),
    parking: z.string(),
    publicTransport: z.string(),
    contact: z.string().optional(),
    website: z.string().optional(),
  }),
});

export const collections = {
  courses,
};