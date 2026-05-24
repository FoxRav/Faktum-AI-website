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
  aiAssistance: z.enum(['none', 'assisted', 'substantial']).default('assisted'),
  commercialDisclosure: z
    .enum(['none', 'sponsored', 'affiliate', 'partner', 'advertisement'])
    .default('none'),
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

const newsEn = defineCollection({
  loader: glob({ base: './src/content/en/news', pattern: '**/*.{md,mdx}' }),
  schema: articleSchema,
});

const analysisEn = defineCollection({
  loader: glob({ base: './src/content/en/analysis', pattern: '**/*.{md,mdx}' }),
  schema: articleSchema,
});

const interviewsEn = defineCollection({
  loader: glob({ base: './src/content/en/interviews', pattern: '**/*.{md,mdx}' }),
  schema: articleSchema,
});

const toolsEn = defineCollection({
  loader: glob({ base: './src/content/en/tools', pattern: '**/*.{md,mdx}' }),
  schema: articleSchema,
});

export const collections = {
  news,
  analysis,
  interviews,
  tools,
  newsEn,
  analysisEn,
  interviewsEn,
  toolsEn,
};

export type ArticleCollection = 'news' | 'analysis' | 'interviews' | 'tools';
