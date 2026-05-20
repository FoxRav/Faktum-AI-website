import type { Locale } from './config';
import { defaultLocale } from './config';

/** Category URL segments per locale (no trailing slash). */
export const categorySegments = {
  fi: {
    news: 'uutiset',
    analysis: 'analyysit',
    interviews: 'haastattelut',
    tools: 'tyokalut',
    topics: 'aiheet',
    about: 'tietoa',
    projects: 'projektit',
  },
  en: {
    news: 'news',
    analysis: 'analysis',
    interviews: 'interviews',
    tools: 'tools',
    topics: 'topics',
    about: 'about',
    projects: 'projects',
  },
} as const;

export type CategoryKey = keyof typeof categorySegments.fi;

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fi';
}

function normalizePath(path: string): string {
  if (path === '/' || path === '/en' || path === '/en/') {
    return path.endsWith('/') || path === '/en' ? (path === '/en' ? '/en/' : path) : path;
  }
  return path.endsWith('/') ? path : `${path}/`;
}

/** Map current path to the equivalent path in another locale. */
export function translatePath(pathname: string, target: Locale): string {
  const path = normalizePath(pathname);
  const source = getLocaleFromPath(path);

  if (source === target) return path;

  if (target === 'en') {
    if (path === '/') return '/en/';

    for (const key of Object.keys(categorySegments.fi) as CategoryKey[]) {
      const fiSeg = categorySegments.fi[key];
      const enSeg = categorySegments.en[key];
      const fiPrefix = `/${fiSeg}/`;

      if (path === `/${fiSeg}/`) return `/en/${enSeg}/`;
      if (path.startsWith(fiPrefix)) {
        return `/en/${enSeg}/${path.slice(fiPrefix.length)}`;
      }
    }

    return '/en/';
  }

  // en → fi
  if (path === '/en/') return '/';

  for (const key of Object.keys(categorySegments.en) as CategoryKey[]) {
    const enSeg = categorySegments.en[key];
    const fiSeg = categorySegments.fi[key];
    const enPrefix = `/en/${enSeg}/`;

    if (path === `/en/${enSeg}/`) return `/${fiSeg}/`;
    if (path.startsWith(enPrefix)) {
      return `/${fiSeg}/${path.slice(enPrefix.length)}`;
    }
  }

  return '/';
}

export function homePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : '/en/';
}

export function categoryPath(locale: Locale, key: CategoryKey): string {
  const seg = categorySegments[locale][key];
  return locale === defaultLocale ? `/${seg}/` : `/en/${seg}/`;
}
