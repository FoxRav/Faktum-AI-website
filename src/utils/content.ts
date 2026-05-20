import { getCollection, type CollectionEntry } from 'astro:content';
import type { ArticleCollection } from '../content.config';
import type { Locale } from '../i18n/config';
import { categoryPath } from '../i18n/paths';

export type ArticleEntry = CollectionEntry<ArticleCollection> & {
  collection: ArticleCollection;
  locale: Locale;
};

const FI_COLLECTIONS = ['news', 'analysis', 'interviews', 'tools'] as const;
const EN_COLLECTIONS = ['newsEn', 'analysisEn', 'interviewsEn', 'toolsEn'] as const;

type FiCollection = (typeof FI_COLLECTIONS)[number];
type EnCollection = (typeof EN_COLLECTIONS)[number];

const COLLECTION_MAP: Record<FiCollection, EnCollection> = {
  news: 'newsEn',
  analysis: 'analysisEn',
  interviews: 'interviewsEn',
  tools: 'toolsEn',
};

export const COLLECTION_LABELS: Record<Locale, Record<FiCollection, string>> = {
  fi: {
    news: 'Uutiset',
    analysis: 'Analyysit',
    interviews: 'Haastattelut',
    tools: 'Työkalut',
  },
  en: {
    news: 'News',
    analysis: 'Analysis',
    interviews: 'Interviews',
    tools: 'Tools',
  },
};

const CATEGORY_KEYS: Record<FiCollection, 'news' | 'analysis' | 'interviews' | 'tools'> = {
  news: 'news',
  analysis: 'analysis',
  interviews: 'interviews',
  tools: 'tools',
};

/** Newest first: `updated` if set, else `date`; tie-break by slug descending. */
export function compareArticlesByRecency(a: ArticleEntry, b: ArticleEntry): number {
  const aTime = (a.data.updated ?? a.data.date).getTime();
  const bTime = (b.data.updated ?? b.data.date).getTime();
  if (bTime !== aTime) return bTime - aTime;
  return b.id.localeCompare(a.id);
}

async function loadFiArticles(): Promise<ArticleEntry[]> {
  const [news, analysis, interviews, tools] = await Promise.all([
    getCollection('news'),
    getCollection('analysis'),
    getCollection('interviews'),
    getCollection('tools'),
  ]);

  return [
    ...news.map((e) => ({ ...e, collection: 'news' as const, locale: 'fi' as const })),
    ...analysis.map((e) => ({ ...e, collection: 'analysis' as const, locale: 'fi' as const })),
    ...interviews.map((e) => ({ ...e, collection: 'interviews' as const, locale: 'fi' as const })),
    ...tools.map((e) => ({ ...e, collection: 'tools' as const, locale: 'fi' as const })),
  ];
}

async function loadEnArticles(): Promise<ArticleEntry[]> {
  const [newsEn, analysisEn, interviewsEn, toolsEn] = await Promise.all([
    getCollection('newsEn'),
    getCollection('analysisEn'),
    getCollection('interviewsEn'),
    getCollection('toolsEn'),
  ]);

  return [
    ...newsEn.map((e) => ({ ...e, collection: 'news' as const, locale: 'en' as const })),
    ...analysisEn.map((e) => ({ ...e, collection: 'analysis' as const, locale: 'en' as const })),
    ...interviewsEn.map((e) => ({ ...e, collection: 'interviews' as const, locale: 'en' as const })),
    ...toolsEn.map((e) => ({ ...e, collection: 'tools' as const, locale: 'en' as const })),
  ];
}

export async function getAllArticles(locale: Locale = 'fi'): Promise<ArticleEntry[]> {
  const all = locale === 'en' ? await loadEnArticles() : await loadFiArticles();
  return all.filter((a) => a.data.status === 'published').sort(compareArticlesByRecency);
}

export async function getArticlesByCollection(
  collection: FiCollection,
  locale: Locale = 'fi',
): Promise<ArticleEntry[]> {
  const articles = await getAllArticles(locale);
  return articles.filter((a) => a.collection === collection);
}

export function getArticleUrl(article: ArticleEntry): string {
  const base = categoryPath(article.locale, CATEGORY_KEYS[article.collection]);
  const slug = article.id.replace(/\.mdx?$/, '');
  return `${base}${slug}/`;
}

export function getCategoryLabel(article: ArticleEntry): string {
  return article.data.category || COLLECTION_LABELS[article.locale][article.collection];
}

export function getCategoryHref(article: ArticleEntry): string {
  return categoryPath(article.locale, CATEGORY_KEYS[article.collection]);
}

export function getEnCollectionName(fiCollection: FiCollection): EnCollection {
  return COLLECTION_MAP[fiCollection];
}

export type { FiCollection };
