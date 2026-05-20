import { getCollection, type CollectionEntry } from 'astro:content';
import type { ArticleCollection } from '../content.config';

export type ArticleEntry = CollectionEntry<ArticleCollection> & {
  collection: ArticleCollection;
};

export const COLLECTION_LABELS: Record<ArticleCollection, string> = {
  news: 'Uutiset',
  analysis: 'Analyysit',
  interviews: 'Haastattelut',
  tools: 'Työkalut',
};

export const COLLECTION_PATHS: Record<ArticleCollection, string> = {
  news: '/uutiset',
  analysis: '/analyysit',
  interviews: '/haastattelut',
  tools: '/tyokalut',
};

/** Newest first: `updated` if set, else `date`; tie-break by slug descending. */
export function compareArticlesByRecency(a: ArticleEntry, b: ArticleEntry): number {
  const aTime = (a.data.updated ?? a.data.date).getTime();
  const bTime = (b.data.updated ?? b.data.date).getTime();
  if (bTime !== aTime) return bTime - aTime;
  return b.id.localeCompare(a.id);
}

export async function getAllArticles(): Promise<ArticleEntry[]> {
  const [news, analysis, interviews, tools] = await Promise.all([
    getCollection('news'),
    getCollection('analysis'),
    getCollection('interviews'),
    getCollection('tools'),
  ]);

  const all: ArticleEntry[] = [
    ...news.map((e) => ({ ...e, collection: 'news' as const })),
    ...analysis.map((e) => ({ ...e, collection: 'analysis' as const })),
    ...interviews.map((e) => ({ ...e, collection: 'interviews' as const })),
    ...tools.map((e) => ({ ...e, collection: 'tools' as const })),
  ];

  return all
    .filter((a) => a.data.status === 'published')
    .sort(compareArticlesByRecency);
}

export async function getArticlesByCollection(
  collection: ArticleCollection,
): Promise<ArticleEntry[]> {
  const articles = await getAllArticles();
  return articles.filter((a) => a.collection === collection);
}

export function getArticleUrl(article: ArticleEntry): string {
  const base = COLLECTION_PATHS[article.collection];
  const slug = article.id.replace(/\.mdx?$/, '');
  return `${base}/${slug}/`;
}

export function getCategoryLabel(article: ArticleEntry): string {
  return article.data.category || COLLECTION_LABELS[article.collection];
}
