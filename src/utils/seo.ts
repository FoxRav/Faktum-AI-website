import type { ArticleEntry } from './content';
import { formatDateISO } from './formatDate';
import { getArticleUrl } from './content';

export interface SeoProps {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  article?: ArticleEntry;
}

export function canonicalUrl(path: string, site = 'https://www.faktum-ai.com'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${site}${normalized}`;
}

export function articleJsonLd(article: ArticleEntry, site = 'https://www.faktum-ai.com') {
  const url = `${site}${getArticleUrl(article)}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.data.title,
    description: article.data.description,
    datePublished: formatDateISO(article.data.date),
    dateModified: formatDateISO(article.data.updated ?? article.data.date),
    author: {
      '@type': 'Organization',
      name: article.data.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Faktum AI',
      url: site,
    },
    mainEntityOfPage: url,
    url,
  };
}
