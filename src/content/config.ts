// @ts-check
import { defineCollection, z } from 'astro:content';

const faqItem = z.object({
  q: z.string(),
  a: z.string(),
});

const city = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    region: z.enum(['North', 'East', 'South', 'Southwest']),
    heroImage: z.string().optional(),
    heroSubtitle: z.string().optional(),
    costIndex: z.number().min(1).max(5).default(3),
    internetScore: z.number().min(1).max(5).default(4),
    nomadScore: z.number().min(1).max(5).default(4),
    tags: z.array(z.string()).default([]),
    faq: z.array(faqItem).default([]),
  }),
});

const guide = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.enum(['connectivity', 'payment', 'visa', 'safety', 'other']),
    heroImage: z.string().optional(),
    heroSubtitle: z.string().optional(),
    affiliate: z
      .object({
        program: z.string(),
        url: z.string().default('#'),
      })
      .optional(),
    tags: z.array(z.string()).default([]),
    faq: z.array(faqItem).default([]),
  }),
});

export const collections = { city, guide };
