import { defineCollection, z } from 'astro:content';

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    suburb: z.string(),
    mainImage: z.string(),
    thumbnail: z.string().optional(),
    address: z.string().optional(),
    location: z.string().optional(), // GeoJSON string from map widget
    googleMapsUrl: z.string().optional(), // Google Maps place link (e.g. https://maps.app.goo.gl/...)
    courseMap: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

const board = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  courses,
  board,
};
