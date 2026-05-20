import type { Locale } from './config';
import { categoryPath, homePath } from './paths';

export const ui = {
  fi: {
    siteTagline: 'Suomenkielinen AI-media',
    heroTitle: 'Tekoälyuutisointia, analyysia ja käytännön rakentamista',
    heroTitleAccent: 'analyysia',
    heroLead:
      'Faktum AI purkaa kansainväliset AI-kehitykset, raportit ja haastattelut suomalaiselle lukijalle — lähteitä kunnioittaen, hypeä välttäen.',
    heroCtaNews: 'Uusimmat uutiset',
    heroCtaAnalysis: 'Analyysit',
    navHome: 'Etusivu',
    navNews: 'Uutiset',
    navAnalysis: 'Analyysit',
    navTools: 'Työkalut',
    navInterviews: 'Haastattelut',
    navProjects: 'Projektit',
    navAbout: 'Tietoa',
    navTopics: 'Aiheet',
    tabAll: 'Kaikki',
    latestFeed: 'Uusimmat julkaisut',
    featuredBadge: 'Päänosto',
    readArticle: 'Lue artikkeli',
    whyTitle: 'Miksi Faktum AI?',
    whyBody:
      'Emme kopioi uutisia sellaisenaan. Puramme aineiston, poimimme olennaiset väitteet ja numerot, visualisoimme datan ja annamme suomalaiselle lukijalle teknisen merkityksen — lähteitä kunnioittaen ja hypeä välttäen.',
    footerTagline: 'Suomenkielistä tekoälyuutisointia, analyysia ja käytännön AI-rakentamista.',
    footerContent: 'Sisältö',
    footerServices: 'Palvelut',
    footerRss: 'RSS-syöte',
    footerLlm: 'LLM-indeksi',
    relatedTitle: 'Liittyvät artikkelit samasta aiheesta',
    emptyArticles: 'Ei julkaistuja artikkeleita vielä.',
    emptyCategory: 'Ei julkaisuja tässä kategoriassa.',
    visitCounterLoading: 'Luettu …',
    visitCounterRead: 'Luettu {count} kertaa',
    visitCounterFallback: 'Luettu useita kertoja',
    topicsTitle: 'Aiheet',
    topicsLead: 'Artikkelit ryhmiteltynä avainsanoihin.',
    topicsBack: '← Kaikki aiheet',
    topicArticles: 'artikkelia',
    enNoArticles:
      'Englanninkielisiä artikkeleita ei vielä ole. Lue suomeksi:',
    switchToFi: 'Vaihda suomeksi',
    switchToEn: 'Switch to English',
    langFi: 'Suomi',
    langEn: 'English',
    homeMetaTitle: 'Faktum AI — Suomenkielistä tekoälyuutisointia ja analyysia',
    homeMetaDescription:
      'Faktum AI tuottaa suomenkielisiä AI-uutisia, analyyseja, haastattelutiivistelmiä ja työkaluarvioita IT-ammattilaisille ja AI-rakentajille.',
    aboutTitle: 'Tietoa Faktum AI:sta',
    aboutMetaDescription:
      'Faktum AI on suomenkielinen tekoälyuutis- ja analyysisivusto IT-ammattilaisille ja AI-rakentajille.',
    listingAnalysis: 'Syvällisiä analyyseja AI-markkinoista, infrastruktuurista ja liiketoimintamalleista.',
    listingNews: 'Suomenkieliset AI-uutiset ja tulkinnat kansainvälisistä kehityksistä.',
    listingInterviews: 'Haastattelutiivistelmiä suomalaisesta ja kansainvälisestä AI-kentästä.',
    listingTools: 'AI-työkalujen arvioita ja käytännön näkökulmia rakentajille.',
  },
  en: {
    siteTagline: 'Finnish AI media — in English',
    heroTitle: 'AI news, analysis, and builder-focused insight',
    heroTitleAccent: 'analysis',
    heroLead:
      'Faktum AI breaks down international AI developments, reports, and interviews for a professional audience — source-backed, hype-free.',
    heroCtaNews: 'Latest news',
    heroCtaAnalysis: 'Analysis',
    navHome: 'Home',
    navNews: 'News',
    navAnalysis: 'Analysis',
    navTools: 'Tools',
    navInterviews: 'Interviews',
    navProjects: 'Projects',
    navAbout: 'About',
    navTopics: 'Topics',
    tabAll: 'All',
    latestFeed: 'Latest publications',
    featuredBadge: 'Featured',
    readArticle: 'Read article',
    whyTitle: 'Why Faktum AI?',
    whyBody:
      'We do not copy press releases verbatim. We extract claims and numbers, visualize data, and explain technical meaning for readers — respecting sources and avoiding hype.',
    footerTagline: 'AI news, analysis, and practical builder insight from Finland.',
    footerContent: 'Content',
    footerServices: 'Services',
    footerRss: 'RSS feed',
    footerLlm: 'LLM index',
    relatedTitle: 'Related articles on the same topic',
    emptyArticles: 'No published articles yet.',
    emptyCategory: 'No articles in this category.',
    visitCounterLoading: 'Read …',
    visitCounterRead: 'Read {count} times',
    visitCounterFallback: 'Read many times',
    topicsTitle: 'Topics',
    topicsLead: 'Articles grouped by keywords.',
    topicsBack: '← All topics',
    topicArticles: 'articles',
    enNoArticles: 'No English articles yet. Read in Finnish:',
    switchToFi: 'Vaihda suomeksi',
    switchToEn: 'Switch to English',
    langFi: 'Suomi',
    langEn: 'English',
    homeMetaTitle: 'Faktum AI — AI news and analysis',
    homeMetaDescription:
      'Faktum AI publishes AI news, in-depth analysis, interview summaries, and tool reviews for IT professionals and builders.',
    aboutTitle: 'About Faktum AI',
    aboutMetaDescription:
      'Faktum AI is a Finnish AI news and analysis site for IT professionals, builders, and decision-makers.',
    listingAnalysis: 'In-depth analysis of AI markets, infrastructure, and business models.',
    listingNews: 'AI news and interpretation of international developments.',
    listingInterviews: 'Interview summaries from the Finnish and global AI field.',
    listingTools: 'AI tool reviews and practical perspectives for builders.',
  },
} as const;

export type UiKey = keyof (typeof ui)['fi'];

export function t(locale: Locale, key: UiKey): string {
  return ui[locale][key];
}

export function getNavItems(locale: Locale) {
  return [
    { href: homePath(locale), label: t(locale, 'navHome') },
    { href: categoryPath(locale, 'news'), label: t(locale, 'navNews') },
    { href: categoryPath(locale, 'analysis'), label: t(locale, 'navAnalysis') },
    { href: categoryPath(locale, 'tools'), label: t(locale, 'navTools') },
    { href: categoryPath(locale, 'interviews'), label: t(locale, 'navInterviews') },
    ...(locale === 'fi'
      ? [{ href: categoryPath(locale, 'projects'), label: t(locale, 'navProjects') }]
      : []),
    { href: categoryPath(locale, 'about'), label: t(locale, 'navAbout') },
  ];
}

export function getFeedTabs(locale: Locale) {
  return [
    { href: homePath(locale), label: t(locale, 'tabAll') },
    { href: categoryPath(locale, 'news'), label: t(locale, 'navNews') },
    { href: categoryPath(locale, 'analysis'), label: t(locale, 'navAnalysis') },
    { href: categoryPath(locale, 'interviews'), label: t(locale, 'navInterviews') },
    { href: categoryPath(locale, 'tools'), label: t(locale, 'navTools') },
  ];
}
