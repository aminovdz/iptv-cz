import { defineCollection, z } from 'astro:content';

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('IPTV-CZ Tým'),
    image: z.string().optional(),
    tags: z.array(z.string()).default(['IPTV CZ', 'Návod'])
  })
});

export const collections = {
  'guides': guides,
};
