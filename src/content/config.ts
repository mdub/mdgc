import { defineCollection, z, reference } from 'astro:content';

const courses = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    suburb: z.string(),
    mainImage: image(),
    thumbnail: image().optional(),
    address: z.string().optional(),
    location: z.string().optional(), // GeoJSON string from map widget
    googleMapsUrl: z.string().optional(), // Google Maps place link (e.g. https://maps.app.goo.gl/...)
    courseMap: image().optional(),
    featured: z.boolean().optional().default(false),
    discLibrary: reference('discLibraries').optional(),
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

const discLibraries = defineCollection({
  type: 'data',
  schema: z.object({
    council: z.string(),
    url: z.string(),
  }),
});

export const collections = {
  courses,
  board,
  discLibraries,
};
