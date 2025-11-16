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
  schema: ({ image }) => z.object({
    name: z.string(),
    role: z.string().optional(),
    photo: image().optional(),
  }),
});

const discLibraries = defineCollection({
  type: 'data',
  schema: z.object({
    council: z.string(),
    location: z.string(),
    url: z.string(),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().optional(),
    expiryDate: z.date().optional(),
  }),
});

export const collections = {
  courses,
  board,
  discLibraries,
  news,
};
