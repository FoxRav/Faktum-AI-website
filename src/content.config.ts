import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  author: z.string().default('Faktum AI'),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  status: z.enum(['draft', 'published']).default('draft'),
  readingTime: z.string().optional(),
  heroImage: z.string().optional(),
  heroAlt: z.string().optional(),
  heroCaption: z.string().optional(),
  sources: z
    .array(
      z.object({
        title: z.string(),
        url: z.string().url().optional(),
        publisher: z.string().optional(),
        date: z.string().optional(),
      }),
    )
    .default([]),
  keyClaims: z.array(z.string()).default([]),
  keyMetrics: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
        description: z.string().optional(),
      }),
    )
    .default([]),
  chartData: z
    .array(
      z.object({
        label: z.string(),
        value: z.number(),
      }),
    )
    .default([]),
  imageRequestsCompleted: z.boolean().default(false),
  needsFactCheck: z.boolean().default(true),
  featured: z.boolean().default(false),
});

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
  schema: articleSchema,
});

const analysis = defineCollection({
  loader: glob({ base: './src/content/analysis', pattern: '**/*.{md,mdx}' }),
  schema: articleSchema,
});

const interviews = defineCollection({
  loader: glob({ base: './src/content/interviews', pattern: '**/*.{md,mdx}' }),
  schema: articleSchema,
});

const tools = defineCollection({
  loader: glob({ base: './src/content/tools', pattern: '**/*.{md,mdx}' }),
  schema: articleSchema,
});

export const collections = { news, analysis, interviews, tools };

export type ArticleCollection = keyof typeof collections;
