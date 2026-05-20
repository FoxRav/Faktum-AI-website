import type { ArticleEntry } from './content';
import { compareArticlesByRecency } from './content';

/** URL-safe tag slug for /aiheet/<slug>/ */
export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getTagUrl(tag: string): string {
  return `/aiheet/${slugifyTag(tag)}/`;
}

export interface TagSummary {
  label: string;
  slug: string;
  count: number;
}

export function getAllTagSummaries(articles: ArticleEntry[]): TagSummary[] {
  const counts = new Map<string, { label: string; count: number }>();

  for (const article of articles) {
    for (const tag of article.data.tags) {
      const slug = slugifyTag(tag);
      const existing = counts.get(slug);
      if (existing) {
        existing.count += 1;
      } else {
        counts.set(slug, { label: tag, count: 1 });
      }
    }
  }

  return [...counts.entries()]
    .map(([slug, { label, count }]) => ({ label, slug, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, 'fi'));
}

export function getArticlesByTagSlug(
  articles: ArticleEntry[],
  tagSlug: string,
): ArticleEntry[] {
  return articles
    .filter((article) =>
      article.data.tags.some((tag) => slugifyTag(tag) === tagSlug),
    )
    .sort(compareArticlesByRecency);
}

export function findTagLabelBySlug(
  articles: ArticleEntry[],
  tagSlug: string,
): string | undefined {
  for (const article of articles) {
    for (const tag of article.data.tags) {
      if (slugifyTag(tag) === tagSlug) return tag;
    }
  }
  return undefined;
}

/** Prefer shared tags, then same collection; fallback to newest. */
export function getRelatedArticles(
  article: ArticleEntry,
  all: ArticleEntry[],
  limit = 3,
): ArticleEntry[] {
  const others = all.filter((a) => a.id !== article.id);
  if (others.length === 0) return [];

  const tagSet = new Set(article.data.tags.map(slugifyTag));

  const scored = others.map((candidate) => {
    let score = 0;
    for (const tag of candidate.data.tags) {
      if (tagSet.has(slugifyTag(tag))) score += 10;
    }
    if (candidate.collection === article.collection) score += 3;
    return { candidate, score };
  });

  const withShared = scored.filter((s) => s.score > 0);
  const pool = (withShared.length > 0 ? withShared : scored)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return compareArticlesByRecency(a.candidate, b.candidate);
    })
    .map((s) => s.candidate);

  return pool.slice(0, limit);
}
