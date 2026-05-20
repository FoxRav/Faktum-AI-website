import type { ArticleEntry } from './content';
import { getArticleUrl } from './content';
import { getTagUrl } from './tags';

const DEFAULT_SITE = 'https://www.faktum-ai.com';
const DEFAULT_OG_IMAGE = '/images/brand/landing-hero.webp';

export interface SeoProps {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  article?: ArticleEntry;
}

export function canonicalUrl(path: string, site = DEFAULT_SITE): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${site}${normalized}`;
}

export function absoluteAssetUrl(
  assetPath: string | undefined,
  site = DEFAULT_SITE,
): string | undefined {
  if (!assetPath) return `${site}${DEFAULT_OG_IMAGE}`;
  return assetPath.startsWith('http') ? assetPath : `${site}${assetPath}`;
}

export function organizationJsonLd(site = DEFAULT_SITE) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Faktum AI',
    url: site,
    logo: `${site}/favicon.svg`,
    description:
      'Suomenkielinen tekoälyuutis- ja analyysisivusto IT-ammattilaisille ja AI-rakentajille.',
    email: 'marko@faktum-ai.com',
  };
}

export function websiteJsonLd(site = DEFAULT_SITE) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Faktum AI',
    url: site,
    description:
      'Suomenkielisiä AI-uutisia, analyyseja, haastattelutiivistelmiä ja työkaluarvioita.',
    inLanguage: 'fi-FI',
    publisher: { '@type': 'Organization', name: 'Faktum AI', url: site },
  };
}

export function articleJsonLd(article: ArticleEntry, site = DEFAULT_SITE) {
  const url = `${site}${getArticleUrl(article)}`;
  const published = article.data.date;
  const modified = article.data.updated ?? published;
  const image = absoluteAssetUrl(article.data.heroImage, site);

  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.data.title,
    description: article.data.description,
    datePublished: published.toISOString(),
    dateModified: modified.toISOString(),
    author: {
      '@type': 'Organization',
      name: article.data.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Faktum AI',
      url: site,
      logo: {
        '@type': 'ImageObject',
        url: `${site}/favicon.svg`,
      },
    },
    image: image ? [image] : undefined,
    keywords: article.data.tags.join(', '),
    articleSection: article.data.category,
    inLanguage: 'fi-FI',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
  site = DEFAULT_SITE,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${site}${item.path.startsWith('/') ? item.path : `/${item.path}`}`,
    })),
  };
}

export function articlePageJsonLd(article: ArticleEntry, site = DEFAULT_SITE) {
  const collectionPaths: Record<ArticleEntry['collection'], string> = {
    news: '/uutiset/',
    analysis: '/analyysit/',
    interviews: '/haastattelut/',
    tools: '/tyokalut/',
  };
  const collectionLabels: Record<ArticleEntry['collection'], string> = {
    news: 'Uutiset',
    analysis: 'Analyysit',
    interviews: 'Haastattelut',
    tools: 'Työkalut',
  };

  return [
    articleJsonLd(article, site),
    breadcrumbJsonLd(
      [
        { name: 'Etusivu', path: '/' },
        { name: collectionLabels[article.collection], path: collectionPaths[article.collection] },
        { name: article.data.title, path: getArticleUrl(article) },
      ],
      site,
    ),
  ];
}

export function tagPageJsonLd(tagLabel: string, tagSlug: string, site = DEFAULT_SITE) {
  const url = `${site}${getTagUrl(tagLabel)}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${tagLabel} · Faktum AI`,
    description: `Artikkelit aiheesta ${tagLabel} — Faktum AI.`,
    url,
    inLanguage: 'fi-FI',
    isPartOf: { '@type': 'WebSite', name: 'Faktum AI', url: site },
  };
}

export { DEFAULT_OG_IMAGE };
