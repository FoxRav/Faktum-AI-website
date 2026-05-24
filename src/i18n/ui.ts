import type { Locale } from './config';
import { categoryPath, homePath, subscribePath } from './paths';

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
    navSubscribe: 'Tilaa',
    navTopics: 'Aiheet',
    tabAll: 'Kaikki',
    latestFeed: 'Uusimmat julkaisut',
    featuredBadge: 'Päänosto',
    readArticle: 'Lue artikkeli',
    whyTitle: 'Miksi Faktum AI?',
    whyBody:
      'Jokainen artikkeli lähtee lähteestä — raportista, haastattelusta tai uutisesta. Puramme siitä väitteet ja numerot, visualisoimme olennaisen ja kirjoitamme, mitä kehitys merkitsee suomalaiselle IT- ja AI-ammattilaiselle. Lähteet aina näkyvillä, ilman hypea.',
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
    footerLegal: 'Lakiasiat',
    footerPrivacy: 'Tietosuoja',
    footerCookies: 'Evästeet',
    footerEditorial: 'Toimitus & AI',
    footerSubscribe: 'Tilaa uutiskirje',
    footerContact: 'Yhteystiedot',
    subscribeTitle: 'Faktum AI -uutiskirje',
    subscribeLead:
      'Tilaa Faktum AI -uutiskirje — lähetetään kerran viikossa. Viikon tärkeimmät AI-uutiset, työkalut ja analyysit ilman hypeä.',
    subscribeLeadProfessional:
      'Seuraa AI-markkinaa, työkaluja, regulaatiota ja avoimia malleja yhdestä paikasta — yhteenveto kerran viikossa.',
    subscribeLeadCitizen:
      'Tekoäly muuttuu nopeasti. Faktum AI kokoaa tärkeimmät asiat ymmärrettävästi yhteen viikkouutiskirjeeseen.',
    subscribeArticleCta:
      'Seuraa AI-markkinaa selkokielisesti ja lähteisiin perustuen. Tilaa viikoittainen Faktum AI -uutiskirje.',
    subscribeEmailLabel: 'Sähköposti',
    subscribeLanguageLabel: 'Toivottu kieli',
    subscribeLanguageFi: 'Suomi',
    subscribeLanguageEn: 'English',
    subscribeLanguageBoth: 'Molemmat',
    subscribeConsentLabel:
      'Haluan vastaanottaa Faktum AI -uutiskirjeen (kerran viikossa) ja hyväksyn tietojeni käsittelyn tietosuojaselosteen mukaisesti.',
    subscribeSubmit: 'Tilaa',
    subscribeSuccess:
      'Tarkista sähköpostisi ja vahvista tilaus. Jos viestiä ei näy muutaman minuutin kuluessa, katso myös roskapostikansio.',
    subscribeErrorGeneric: 'Tilaus epäonnistui. Yritä uudelleen.',
    subscribeErrorEmail: 'Anna kelvollinen sähköpostiosoite.',
    subscribeErrorConsent: 'Uutiskirjeen tilaus vaatii suostumuksen.',
    subscribeEmailSendFailed: 'Sähköpostin lähetys epäonnistui. Yritä hetken päästä uudelleen.',
    subscribeAlreadyActive:
      'Tämä sähköpostiosoite on jo uutiskirjeen tilaajana. Peruutus: avaa viestin linkki tai pyydä uusi linkki peruutussivulta.',
    footerUnsubscribe: 'Peru tilaus',
    subscribeConfirmPending: 'Vahvista tilaus sähköpostiisi tulleella linkillä.',
    subscribeConfirmed: 'Tilaus vahvistettu. Tervetuloa Faktum AI -uutiskirjeen tilaajaksi!',
    subscribeConfirmedManage: 'Täydennä profiilisi',
    subscribeInvalidToken: 'Linkki on vanhentunut tai virheellinen.',
    subscribeUnsubscribed: 'Tilaus on peruutettu.',
    preferencesTitle: 'Tilaajaprofiili',
    preferencesPrimaryRole: 'Päärooli',
    preferencesSecondaryRoles: 'Muut roolit (valinnainen)',
    preferencesInterests: 'Kiinnostuksen kohteet',
    preferencesSave: 'Tallenna',
    preferencesSaving: 'Tallennetaan…',
    preferencesSaved: 'Profiili tallennettu.',
    preferencesSaveFailed: 'Tallennus epäonnistui.',
    preferencesMissingToken:
      'Profiilin täydennys vaatii henkilökohtaisen linkin sähköpostistasi.',
    preferencesMissingTokenHelp:
      'Avaa linkki vahvistus- tai tervetuloviestistäsi. Jos et löydä viestiä, tarkista roskapostikansio tai tilaa uutiskirje uudelleen — uusi linkki lähetetään vahvistuksen jälkeen.',
    unsubscribeTitle: 'Peru tilaus',
    unsubscribeLead:
      'Peruutus vahvistetaan henkilökohtaisella linkillä — turvallisuussyistä emme peru tilauksia pelkällä sähköpostiosoitteella.',
    unsubscribeLeadWithToken: 'Vahvista painikkeella.',
    unsubscribeConfirm: 'Peru uutiskirjeen tilaus',
    unsubscribeMissingToken:
      'Eikö sinulla ole linkkiä? Syötä sähköpostiosoitteesi — lähetämme uuden peruutuslinkin.',
    unsubscribeMissingTokenHelp:
      'Voit myös avata linkin ”Peru tilaus” viimeisimmästä uutiskirjeestä tai tervetuloviestistä. Tarkista roskapostikansio.',
    unsubscribeRequestEmailLabel: 'Sähköposti',
    unsubscribeRequestSubmit: 'Lähetä peruutuslinkki',
    unsubscribeRequestSuccess:
      'Jos osoitteella on aktiivinen tilaus, lähetimme peruutuslinkin. Tarkista myös roskapostikansio.',
    unsubscribeRequestEmailFailed: 'Anna kelvollinen sähköpostiosoite.',
    unsubscribeRequestFailed: 'Linkin lähetys epäonnistui. Yritä uudelleen.',
    unsubscribeFailed: 'Peruutus epäonnistui.',
    sourcesTitle: 'Lähteet',
    keyClaimsTitle: 'Keskeiset väitteet',
    keyTakeawaysDefault: 'Tärkeimmät nostot',
    draftBadge: 'Luonnos',
    factCheckNote:
      'Faktum AI huomio: Tämä artikkeli perustuu listattuihin lähteisiin. Kohdat, joita ei ole voitu vahvistaa riippumattomasta lähteestä, on merkitty epävarmoiksi.',
    dataRequestTitle: 'Omat tiedot',
    dataRequestExport: 'Pyydä tietojen kopio',
    dataRequestDelete: 'Pyydä tietojen poisto',
    dataRequestSent: 'Tarkista sähköpostisi ja vahvista pyyntö.',
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
    navSubscribe: 'Subscribe',
    navTopics: 'Topics',
    tabAll: 'All',
    latestFeed: 'Latest publications',
    featuredBadge: 'Featured',
    readArticle: 'Read article',
    whyTitle: 'Why Faktum AI?',
    whyBody:
      'Every article starts from a source — a report, interview, or news story. We extract claims and numbers, visualize what matters, and explain what it means for IT and AI professionals. Sources always visible; no hype.',
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
    footerLegal: 'Legal',
    footerPrivacy: 'Privacy',
    footerCookies: 'Cookies',
    footerEditorial: 'Editorial & AI',
    footerSubscribe: 'Newsletter',
    footerContact: 'Contact',
    subscribeTitle: 'Faktum AI newsletter',
    subscribeLead:
      'Subscribe to the Faktum AI newsletter — sent once a week. Key AI news, tools and analysis without hype.',
    subscribeLeadProfessional:
      'Follow AI markets, tools, regulation and open models in one place.',
    subscribeLeadCitizen:
      'AI moves fast. Faktum AI brings the essentials in plain language.',
    subscribeArticleCta:
      'Follow the AI market with source-backed clarity. Subscribe to the weekly Faktum AI newsletter.',
    subscribeEmailLabel: 'Email',
    subscribeLanguageLabel: 'Preferred language',
    subscribeLanguageFi: 'Finnish',
    subscribeLanguageEn: 'English',
    subscribeLanguageBoth: 'Both',
    subscribeConsentLabel:
      'I want to receive the Faktum AI newsletter (once a week) and accept processing of my data as described in the privacy policy.',
    subscribeSubmit: 'Subscribe',
    subscribeSuccess:
      'Check your email and confirm your subscription. If it does not arrive within a few minutes, check your spam or junk folder.',
    subscribeErrorGeneric: 'Subscription failed. Please try again.',
    subscribeErrorEmail: 'Enter a valid email address.',
    subscribeErrorConsent: 'Newsletter subscription requires consent.',
    subscribeEmailSendFailed: 'Could not send the confirmation email. Please try again shortly.',
    subscribeAlreadyActive:
      'This email address is already subscribed. To unsubscribe, use the link in your email or request a new one on the unsubscribe page.',
    footerUnsubscribe: 'Unsubscribe',
    subscribeConfirmPending: 'Confirm your subscription using the link we sent by email.',
    subscribeConfirmed: 'Subscription confirmed. Welcome to the Faktum AI newsletter!',
    subscribeConfirmedManage: 'Complete your profile',
    subscribeInvalidToken: 'This link has expired or is invalid.',
    subscribeUnsubscribed: 'You have been unsubscribed.',
    preferencesTitle: 'Subscriber profile',
    preferencesPrimaryRole: 'Primary role',
    preferencesSecondaryRoles: 'Other roles (optional)',
    preferencesInterests: 'Interests',
    preferencesSave: 'Save',
    preferencesSaving: 'Saving…',
    preferencesSaved: 'Profile saved.',
    preferencesSaveFailed: 'Save failed.',
    preferencesMissingToken:
      'Completing your profile requires the personal link from your email.',
    preferencesMissingTokenHelp:
      'Open the link from your confirmation or welcome message. If you cannot find it, check your spam folder or subscribe again — a new link is sent after confirmation.',
    unsubscribeTitle: 'Unsubscribe',
    unsubscribeLead:
      'Unsubscribe requires a personal link for security — we cannot cancel a subscription from an email address alone.',
    unsubscribeLeadWithToken: 'Press the button to confirm.',
    unsubscribeConfirm: 'Unsubscribe from the newsletter',
    unsubscribeMissingToken:
      'No link handy? Enter your email and we will send a new unsubscribe link.',
    unsubscribeMissingTokenHelp:
      'You can also open “Unsubscribe” from your latest newsletter or welcome message. Check your spam folder.',
    unsubscribeRequestEmailLabel: 'Email',
    unsubscribeRequestSubmit: 'Send unsubscribe link',
    unsubscribeRequestSuccess:
      'If this address has an active subscription, we sent an unsubscribe link. Check your spam folder too.',
    unsubscribeRequestEmailFailed: 'Enter a valid email address.',
    unsubscribeRequestFailed: 'Could not send the link. Please try again.',
    unsubscribeFailed: 'Unsubscribe failed.',
    sourcesTitle: 'Sources',
    keyClaimsTitle: 'Key claims',
    keyTakeawaysDefault: 'Key takeaways',
    draftBadge: 'Draft',
    factCheckNote:
      'Faktum AI note: This article is based on the listed sources. Points that could not be verified from an independent source are marked as uncertain.',
    dataRequestTitle: 'Your data',
    dataRequestExport: 'Request a copy of my data',
    dataRequestDelete: 'Request deletion of my data',
    dataRequestSent: 'Check your email and confirm the request.',
  },
} as const;

export type UiKey = keyof (typeof ui)['fi'];

export function t(locale: Locale, key: UiKey): string {
  return ui[locale][key];
}

export interface NavItem {
  href: string;
  label: string;
  highlight?: boolean;
}

export function getNavItems(locale: Locale): NavItem[] {
  return [
    { href: categoryPath(locale, 'news'), label: t(locale, 'navNews') },
    { href: categoryPath(locale, 'analysis'), label: t(locale, 'navAnalysis') },
    { href: categoryPath(locale, 'tools'), label: t(locale, 'navTools') },
    { href: categoryPath(locale, 'interviews'), label: t(locale, 'navInterviews') },
    ...(locale === 'fi'
      ? [{ href: categoryPath(locale, 'projects'), label: t(locale, 'navProjects') }]
      : []),
    { href: categoryPath(locale, 'about'), label: t(locale, 'navAbout') },
    {
      href: subscribePath(locale),
      label: t(locale, 'navSubscribe'),
      highlight: true,
    },
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
