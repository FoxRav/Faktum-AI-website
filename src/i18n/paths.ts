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

/** Static pages outside content collections. */
export const staticPageSegments = {
  fi: {
    subscribe: 'tilaa',
    privacy: 'tietosuoja',
    cookies: 'evasteet',
    editorial: 'toimitus',
    advertise: 'mainosta',
    mediaKit: 'mediakortti',
    support: 'tue',
  },
  en: {
    subscribe: 'subscribe',
    privacy: 'privacy',
    cookies: 'cookies',
    editorial: 'editorial',
    advertise: 'advertise',
    mediaKit: 'media-kit',
    support: 'support',
  },
} as const;

export type CategoryKey = keyof typeof categorySegments.fi;
export type StaticPageKey = keyof typeof staticPageSegments.fi;

const staticPagePairs: Record<string, { fi: string; en: string }> = {
  subscribe: { fi: '/tilaa/', en: '/en/subscribe/' },
  privacy: { fi: '/tietosuoja/', en: '/en/privacy/' },
  cookies: { fi: '/evasteet/', en: '/en/cookies/' },
  editorial: { fi: '/toimitus/', en: '/en/editorial/' },
  advertise: { fi: '/mainosta/', en: '/en/advertise/' },
  mediaKit: { fi: '/mediakortti/', en: '/en/media-kit/' },
  support: { fi: '/tue/', en: '/en/support/' },
  about: { fi: '/tietoa/', en: '/en/about/' },
  projects: { fi: '/projektit/', en: '/en/projects/' },
  home: { fi: '/', en: '/en/' },
};

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fi';
}

function normalizePath(path: string): string {
  if (path === '/' || path === '/en' || path === '/en/') {
    return path.endsWith('/') || path === '/en' ? (path === '/en' ? '/en/' : path) : path;
  }
  return path.endsWith('/') ? path : `${path}/`;
}

function translateStaticPath(path: string, target: Locale): string | null {
  for (const pair of Object.values(staticPagePairs)) {
    if (path === pair.fi) return target === 'en' ? pair.en : pair.fi;
    if (path === pair.en) return target === 'fi' ? pair.fi : pair.en;
    if (path.startsWith('/tilaa/') && target === 'en') {
      return path.replace('/tilaa/', '/en/subscribe/');
    }
    if (path.startsWith('/en/subscribe/') && target === 'fi') {
      return path.replace('/en/subscribe/', '/tilaa/');
    }
  }
  return null;
}

/** Map current path to the equivalent path in another locale. */
export function translatePath(pathname: string, target: Locale): string {
  const path = normalizePath(pathname);
  const source = getLocaleFromPath(path);

  if (source === target) return path;

  const staticMatch = translateStaticPath(path, target);
  if (staticMatch) return staticMatch;

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

export function staticPath(locale: Locale, key: StaticPageKey): string {
  const seg = staticPageSegments[locale][key];
  return locale === defaultLocale ? `/${seg}/` : `/en/${seg}/`;
}

export type SubscribeSubpage =
  | 'index'
  | 'confirm'
  | 'confirmed'
  | 'preferences'
  | 'unsubscribe'
  | 'unsubscribed';

const subscribeSubpaths: Record<Locale, Record<SubscribeSubpage, string>> = {
  fi: {
    index: '/tilaa/',
    confirm: '/tilaa/vahvista/',
    confirmed: '/tilaa/vahvistettu/',
    preferences: '/tilaa/asetukset/',
    unsubscribe: '/tilaa/peru/',
    unsubscribed: '/tilaa/peruutettu/',
  },
  en: {
    index: '/en/subscribe/',
    confirm: '/en/subscribe/confirm/',
    confirmed: '/en/subscribe/confirmed/',
    preferences: '/en/subscribe/preferences/',
    unsubscribe: '/en/subscribe/unsubscribe/',
    unsubscribed: '/en/subscribe/unsubscribed/',
  },
};

export function subscribePath(locale: Locale, sub: SubscribeSubpage = 'index'): string {
  return subscribeSubpaths[locale][sub];
}

export function privacyPath(locale: Locale): string {
  return staticPath(locale, 'privacy');
}

export function cookiesPath(locale: Locale): string {
  return staticPath(locale, 'cookies');
}

export function editorialPath(locale: Locale): string {
  return staticPath(locale, 'editorial');
}

export function dataRequestPath(locale: Locale): string {
  return locale === 'fi' ? '/tietosuoja/oma-tieto/' : '/en/privacy/your-data/';
}
