import type { Locale } from './config';
import { categoryPath } from './paths';

export const ui = {
  fi: {
    siteTagline: 'Ohjelmistotuotteita, AI-avusteista kehitystä ja teknistä projektiosaamista.',
    heroTitle: 'Ohjelmistotuotteita ja AI-avusteista kehitystä',
    heroTitleAccent: 'kehitystä',
    heroLead:
      'FaktumAI on ohjelmistotalo, joka rakentaa omia ohjelmistotuotteitaan ja kaupallistettuja ratkaisujaan erittäin kevyen, AI-avusteisen tuotantomallin avulla. Taustamme ulottuu kone- ja tuotantotekniikkaan, teolliseen suunnitteluun sekä rakennus- ja saneeraushankkeiden projektinhallintaan.',
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
    whyTitle: 'Miksi FaktumAI?',
    whyBody:
      'FaktumAI on uuden ajan ohjelmistotalo, joka rakentaa omia ohjelmistotuotteitaan erittäin kevyellä kustannusrakenteella. AI-agentit tekevät suuren osan toteutus- ja analyysityöstä. Kehitystä ohjataan määritellyillä arkkitehtuuri-, testaus-, katselmointi-, dokumentoin- ja versionhallintaprosesseilla. Ihminen vastaa suunnasta, päätöksistä ja hyväksynnästä.',
    footerTagline: 'Ohjelmistotuotteita, AI-avusteista kehitystä ja teknistä projektiosaamista.',
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
    homeMetaTitle: 'FaktumAI — ohjelmistotalo ja tekninen projektiosaaminen',
    homeMetaDescription:
      'FaktumAI on uuden ajan ohjelmistotalo ja projektinhallinnan asiantuntija. Rakennamme AI-avusteisia ohjelmistotuotteita, automaatioratkaisuja ja teknisiä projekteja.',
    aboutTitle: 'Mikä FaktumAI on?',
    aboutMetaDescription:
      'FaktumAI on uuden ajan ohjelmistotalo ja projektinhallinnan asiantuntija. Kehitämme omia ohjelmistotuotteita, automaatioratkaisuja ja kaupallistamiseen tähtääviä digitaalisia palveluja.',
    listingAnalysis: 'Syvällisiä analyyseja AI-markkinoista, infrastruktuurista ja liiketoimintamalleista.',
    listingNews: 'FaktumAI:n uutiset, analyysit, haastattelut ja työkaluarviot uusimmissa ensin.',
    landingEyebrow: 'FAKTUMAI',
    landingHeading: 'Ohjelmistoja, teknologiaa ja projektiosaamista',
    landingLead:
      'FaktumAI on uuden ajan ohjelmistotalo ja projektinhallinnan asiantuntija. Rakennamme AI-avusteisesti ohjelmistotuotteita, automaatioratkaisuja ja teknisiä projekteja kevyellä, prosessiohjatulla toimintamallilla.',
    landingSupporting:
      'Osaamisemme yhdistää ohjelmistokehityksen, kone- ja tuotantotekniikan sekä rakennus- ja saneeraushankkeiden projektinhallinnan.',
    ctaProjects: 'Tutustu projekteihin',
    ctaAbout: 'Tietoa FaktumAI:sta',
    operatingTitle: 'Miten rakennamme',
    operatingIntro:
      'FaktumAI kehittää ohjelmistoja tietyillä prosesseilla. Arkkitehtuuri, testaus ja dokumentointi eivät ole muodollisuudet — ne ohjaavat agenttien työn ja pitävät kustannukset alhaisina.',
    operatingAgents: 'Agentit tekevät suuren osan tutkimus-, analyysi- ja ohjelmistokehitystyöstä.',
    operatingProcesses:
      'Arkkitehtuuri, testaus, katselmointi, dokumentointi ja versionhallinta ohjaavat agenttien työtä.',
    operatingLean:
      'Pieni ihmistiimi ja AI-avusteinen tuotanto mahdollistavat erittäin kevyen kustannusrakenteen.',
    projectsLabel: 'PROJEKTIT',
    projectsTitle: 'Tuotteet ja tuotekehitys',
    projectsLead:
      'FaktumAI kehittää omia ohjelmistotuotteita ja kaupallistamiseen tähtääviä ratkaisuja kevyellä, AI-avusteisella tuotantomallilla. Projektit etenevät tutkimuksesta ja prototyypeistä pilotointiin ja tuotteistukseen.',
    latestNewsTitle: 'Uusimmat uutiset',
    allNews: 'Kaikki uutiset →',
    aboutLead:
      'FaktumAI on uuden ajan ohjelmistotalo ja projektinhallinnan asiantuntija. Kehitämme omia ohjelmistotuotteita, automaatioratkaisuja ja kaupallistamiseen tähtääviä digitaalisia palveluja AI-avusteisella, kevyellä tuotantomallilla.',
    listingInterviews: 'Haastattelutiivistelmiä suomalaisesta ja kansainvälisestä AI-kentästä.',
    listingTools: 'AI-työkalujen arvioita ja käytännön näkökulmia rakentajille.',
    footerLegal: 'Lakiasiat',
    footerPrivacy: 'Tietosuoja',
    footerCookies: 'Evästeet',
    footerEditorial: 'Toimitus & AI',
    footerSubscribe: 'Tilaa uutiskirje',
    footerContact: 'Yhteystiedot',
    subscribeTitle: 'FaktumAI -uutiskirje',
    subscribeLead:
      'Tilaa FaktumAI -uutiskirje — lähetetään kerran viikossa. Viikon tärkeimmät AI-uutiset, työkalut ja analyysit ilman hypeä.',
    subscribeLeadProfessional:
      'Seuraa AI-markkinaa, työkaluja, regulaatiota ja avoimia malleja yhdestä paikasta — yhteenveto kerran viikossa.',
    subscribeLeadCitizen:
      'Tekoäly muuttuu nopeasti. FaktumAI kokoaa tärkeimmät asiat ymmärrettävästi yhteen viikkouutiskirjeeseen.',
    subscribeArticleCta:
      'Seuraa AI-markkinaa selkokielisesti ja lähteisiin perustuen. Tilaa viikoittainen FaktumAI -uutiskirje.',
    subscribeEmailLabel: 'Sähköposti',
    subscribeLanguageLabel: 'Toivottu kieli',
    subscribeLanguageFi: 'Suomi',
    subscribeLanguageEn: 'English',
    subscribeLanguageBoth: 'Molemmat',
    subscribeConsentLabel:
      'Haluan vastaanottaa FaktumAI -uutiskirjeen (kerran viikossa) ja hyväksyn tietojeni käsittelyn tietosuojaselosteen mukaisesti.',
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
    subscribeConfirmed: 'Tilaus vahvistettu. Tervetuloa FaktumAI -uutiskirjeen tilaajaksi!',
    subscribeConfirmedManage: 'Täydennä profiilisi',
    subscribeInvalidToken: 'Linkki on vanhentunut tai virheellinen.',
    subscribeUnsubscribed: 'Tilaus on peruutettu. Tietosi on poistettu rekisteristä.',
    preferencesTitle: 'Tilaajaprofiili',
    preferencesLead: 'Valitse roolit ja kiinnostukset — lomake alkaa tyhjänä joka kerta.',
    preferencesPrimaryRole: 'Päärooli',
    preferencesSecondaryRoles: 'Muut roolit (valinnainen)',
    preferencesInterests: 'Kiinnostuksen kohteet',
    preferencesSave: 'Tallenna',
    preferencesSaving: 'Tallennetaan…',
    preferencesSaved: 'Profiili tallennettu.',
    preferencesSaveFailed: 'Tallennus epäonnistui.',
    preferencesInactive:
      'Uutiskirjeen tilaus on peruttu. Profiilia voi muokata vain aktiivisen tilauksen aikana.',
    preferencesInactiveHelp: 'Voit tilata uutiskirjeen uudelleen ja täydentää profiilisi sen jälkeen.',
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
      'FaktumAI huomio: Tämä artikkeli perustuu listattuihin lähteisiin. Kohdat, joita ei ole voitu vahvistaa riippumattomasta lähteestä, on merkitty epävarmoiksi.',
    dataRequestTitle: 'Omat tiedot',
    dataRequestExport: 'Pyydä tietojen kopio',
    dataRequestDelete: 'Pyydä tietojen poisto',
    dataRequestSent: 'Tarkista sähköpostisi ja vahvista pyyntö.',
  },
  en: {
    siteTagline: 'Software products, AI-assisted development, and technical project expertise.',
    heroTitle: 'Software products and AI-assisted development',
    heroTitleAccent: 'development',
    heroLead:
      'FaktumAI is a software house that builds its own software products and commercially oriented solutions with a very lean, AI-assisted operating model. Our background spans mechanical and production engineering, industrial design, and construction and renovation project management.',
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
    whyTitle: 'Why FaktumAI?',
    whyBody:
      'FaktumAI is a modern software house that builds its own software products with a very lean cost structure. AI agents carry out most of the implementation and analysis work. Development is guided by defined architecture, testing, review, documentation, and version-control processes. The human is responsible for direction, decisions, and approval.',
    footerTagline: 'Software products, AI-assisted development and technical project expertise.',
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
    homeMetaTitle: 'FaktumAI — software house and technical project expertise',
    homeMetaDescription:
      'FaktumAI is a modern software house and project management expert. We build AI-assisted software products, automation solutions, and technical projects.',
    aboutTitle: 'What is FaktumAI?',
    aboutMetaDescription:
      'FaktumAI is a software house that builds its own software products and commercially oriented solutions with a very lean, AI-assisted operating model.',
     listingAnalysis: 'In-depth analysis of AI markets, infrastructure, and business models.',
    listingNews: 'FaktumAI news, analysis, interviews, and tool reviews — newest first.',
    listingInterviews: 'Interview summaries from the Finnish and global AI field.',
    listingTools: 'AI tool reviews and practical perspectives for builders.',
    landingEyebrow: 'FAKTUMAI',
    landingHeading: 'Software, technology, and project expertise',
    landingLead:
      'FaktumAI is a modern software house and project management expert. We build AI-assisted software products, automation solutions, and technical projects using a lean, process-driven operating model.',
    landingSupporting:
      'Our expertise spans software development, mechanical and production engineering, and construction and renovation project management.',
    ctaProjects: 'View projects',
    ctaAbout: 'About FaktumAI',
    operatingTitle: 'How we build',
    operatingIntro:
      'At FaktumAI we develop software within defined processes. Architecture, testing, and documentation are not formalities — they steer what agents do and keep costs low.',
    operatingAgents: 'Agents carry out most of the research, analysis, and software development work.',
    operatingProcesses:
      'Architecture, testing, review, documentation, and version control guide the work of the agents.',
    operatingLean:
      'A small human team with AI-assisted production enables a very lean cost structure.',
    projectsLabel: 'PROJECTS',
    projectsTitle: 'Products & product development',
    projectsLead:
      'FaktumAI develops its own software products and commercially oriented solutions using a lean, AI-assisted production model. Projects progress from research and prototyping through piloting and productisation.',
    latestNewsTitle: 'Latest news',
    allNews: 'All news →',
    aboutLead:
      'FaktumAI is a modern software house that builds its own software products and commercially oriented solutions with a very lean, AI-assisted operating model. The site serves both as the home of FaktumAI products and as a publisher of AI news, analysis, and tool reviews.',
    footerLegal: 'Legal',
    footerPrivacy: 'Privacy',
    footerCookies: 'Cookies',
    footerEditorial: 'Editorial & AI',
    footerSubscribe: 'Newsletter',
    footerContact: 'Contact',
    subscribeTitle: 'FaktumAI newsletter',
    subscribeLead:
      'Subscribe to the FaktumAI newsletter — sent once a week. Key AI news, tools and analysis without hype.',
    subscribeLeadProfessional:
      'Follow AI markets, tools, regulation and open models in one place.',
    subscribeLeadCitizen:
      'AI moves fast. FaktumAI brings the essentials in plain language.',
    subscribeArticleCta:
      'Follow the AI market with source-backed clarity. Subscribe to the weekly FaktumAI newsletter.',
    subscribeEmailLabel: 'Email',
    subscribeLanguageLabel: 'Preferred language',
    subscribeLanguageFi: 'Finnish',
    subscribeLanguageEn: 'English',
    subscribeLanguageBoth: 'Both',
    subscribeConsentLabel:
      'I want to receive the FaktumAI newsletter (once a week) and accept processing of my data as described in the privacy policy.',
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
    subscribeConfirmed: 'Subscription confirmed. Welcome to the FaktumAI newsletter!',
    subscribeConfirmedManage: 'Complete your profile',
    subscribeInvalidToken: 'This link has expired or is invalid.',
    subscribeUnsubscribed: 'You have been unsubscribed. Your data has been removed from our registry.',
    preferencesTitle: 'Subscriber profile',
    preferencesLead: 'Choose your roles and interests — the form starts empty each time.',
    preferencesPrimaryRole: 'Primary role',
    preferencesSecondaryRoles: 'Other roles (optional)',
    preferencesInterests: 'Interests',
    preferencesSave: 'Save',
    preferencesSaving: 'Saving…',
    preferencesSaved: 'Profile saved.',
    preferencesSaveFailed: 'Save failed.',
    preferencesInactive:
      'Your newsletter subscription is cancelled. You can only edit your profile while subscribed.',
    preferencesInactiveHelp: 'Subscribe again to update your profile.',
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
      'FaktumAI note: This article is based on the listed sources. Points that could not be verified from an independent source are marked as uncertain.',
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
    { href: categoryPath(locale, 'projects'), label: t(locale, 'navProjects') },
    { href: categoryPath(locale, 'about'), label: t(locale, 'navAbout') },
  ];
}

export function getFeedTabs(locale: Locale) {
  const isFi = locale === 'fi';
  return [
    { href: categoryPath(locale, 'news'), label: t(locale, 'tabAll') },
    { href: `${categoryPath(locale, 'news')}?filter=${isFi ? 'uutiset' : 'news'}`, label: t(locale, 'navNews') },
    { href: categoryPath(locale, 'interviews'), label: t(locale, 'navInterviews') },
    { href: categoryPath(locale, 'tools'), label: t(locale, 'navTools') },
  ];
}
