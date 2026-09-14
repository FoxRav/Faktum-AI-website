import type { Locale } from './config';
import { categoryPath } from './paths';

export const ui = {
  fi: {
    siteTagline: 'Ohjelmistotuotteita, automaatiota ja AI-avusteista ohjelmistokehitystä.',
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
      'FaktumAI on uuden ajan ohjelmistotalo, joka rakentaa omia ohjelmistotuotteitaan erittäin kevyellä kustannusrakenteella. AI-agentit tekevät suuren osan toteutus- ja analyysityöstä. Kehitystä ohjataan määritellyillä arkkitehtuuri-, testaus-, katselmointi-, dokumentointi- ja versionhallintaprosesseilla. Ihminen vastaa suunnasta, päätöksistä ja hyväksynnästä.',
    footerTagline: 'Ohjelmistotuotteita, automaatiota ja AI-avusteista ohjelmistokehitystä.',
    footerContent: 'Sisältö',
    footerServices: 'Palvelut',
    footerRss: 'RSS-syöte',
    footerLlm: 'LLM-indeksi',
    relatedTitle: 'Liittyvät artikkelit samasta aiheesta',
    emptyArticles: 'Ei julkaistuja artikkeleita vielä.',
    emptyCategory: 'Ei julkaisuja tässä kategoriassa.',
    visitCounterLoading: 'Luettu …',
    visitCounterRead: 'Luettu {count} kertaa',
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
    homeMetaTitle: 'FaktumAI | Ohjelmistotuotteet, automaatio ja AI-avusteinen kehitys',
    homeMetaDescription:
      'FaktumAI suunnittelee ja toteuttaa ohjelmistotuotteita, automaatioratkaisuja ja digitaalisia ratkaisuja AI-avusteisesti.',
    aboutTitle: 'Mikä FaktumAI on?',
    aboutMetaDescription:
      'FaktumAI on ohjelmistotuotteita ja automaatioratkaisuja kehittävä ohjelmistotalo. Kehitämme omia ohjelmistotuotteita, automaatioratkaisuja ja kaupallistamiseen tähtääviä digitaalisia palveluja.',
    listingAnalysis: 'Syvällisiä analyyseja AI-markkinoista, infrastruktuurista ja liiketoimintamalleista.',
    listingNews: 'FaktumAI:n uutiset, analyysit, haastattelut ja työkaluarviot – uusimmat ensin.',
    landingEyebrow: 'FAKTUMAI',
    landingHeading: 'Ohjelmistotuotteita, automaatiota ja AI-avusteista kehitystä',
    landingLead:
      'FaktumAI suunnittelee ja toteuttaa ohjelmistotuotteita, automaatioratkaisuja ja asiakaskohtaisia digitaalisia ratkaisuja.',
    landingSupporting:
      'Taustamme yhdistää ohjelmistokehityksen, insinööriosaamisen ja teknisen projektinhallinnan.',
    ctaProjects: 'Katso projektit',
    ctaAbout: 'Tietoa FaktumAI:sta',
    operatingEyebrow: 'MITEN RAKENNAMME',
    operatingHeading: 'Kevyt kehitysmalli, hallittu toteutus',
    operatingIntro:
      'AI nopeuttaa toteutusta. Arkkitehtuuri, vaatimukset, testaus ja hyväksyntä pidetään hallittuina.',
    operatingCardProblemHeading: 'Ongelma ensin',
    operatingCardProblemBody:
      'Määritämme käyttötarpeen ja vaatimukset ennen teknologiapäätöksiä.',
    operatingCardAiHeading: 'AI-avusteinen toteutus',
    operatingCardAiBody:
      'AI-malleja ja agentteja käytetään suunnittelun, ohjelmistokehityksen, testauksen ja dokumentoinnin apuna.',
    operatingCardTestHeading: 'Testaa, mittaa, paranna',
    operatingCardTestBody:
      'Ensimmäinen toimiva versio tehdään aikaisin ja sitä kehitetään testitulosten ja käytön perusteella.',
    mvpEyebrow: 'MVP-KEHITYS',
    mvpHeading: 'Ideasta toimivaksi MVP:ksi',
    mvpBody1:
      'Ohjelmistoidean, sisäisen työkalun tai digitalisoitavan prosessin pohjalta voidaan nopeasti rajata ensimmäinen toimiva versio.',
    mvpBody2:
      'Laajuus, aikataulu ja teknologia määritellään käyttötarpeen mukaan. Tavoite on toimiva MVP ilman raskasta kehitysorganisaatiota.',
    mvpCta: 'Keskustellaan projektista',
    mvpCtaHref: 'mailto:marko@Faktum-AI.com?subject=Ohjelmistoprojekti%20-%20MVP',
    projectsLabel: 'PROJEKTIT',
    projectsTitle: 'Tuotteet ja toteutukset',
    projectsLead:
      'FaktumAI:n tuotteet ja toteutukset näyttävät käytännössä, mitä rakennamme: paikallista AI:ta, mobiilisovelluksia, verkkokauppa-automaatiota sekä data- ja hakujärjestelmiä.',
    latestNewsTitle: 'Uusimmat uutiset',
    allNews: 'Kaikki uutiset →',
    aboutLead:
      'FaktumAI on ohjelmistotuotteita ja automaatioratkaisuja kehittävä ohjelmistotalo. Kehitämme omia ohjelmistotuotteita, automaatioratkaisuja ja kaupallistamiseen tähtääviä digitaalisia palveluja AI-avusteisella, kevyellä tuotantomallilla.',
    listingInterviews: 'Haastattelutiivistelmiä suomalaisesta ja kansainvälisestä AI-kentästä.',
    listingTools: 'AI-työkalujen arvioita ja käytännön näkökulmia rakentajille.',
    footerLegal: 'Lakiasiat',
    footerPrivacy: 'Tietosuoja',
    footerCookies: 'Evästeet',
    footerEditorial: 'Toimitus & AI',
    footerSubscribe: 'Uutiskirje lopetettu',
    footerContact: 'Yhteystiedot',
    subscribeTitle: 'Uutiskirje lopetettu',
    subscribeLead:
      'FaktumAI ei tarjoa uutiskirjettä. Vanhoihin tilaajatietoihin liittyvät pyynnöt voi tehdä Omat tiedot -sivulla.',
    subscribeLeadProfessional:
      'FaktumAI ei tarjoa uutiskirjettä. Vanhoihin tilaajatietoihin liittyvät pyynnöt voi tehdä Omat tiedot -sivulla.',
    subscribeLeadCitizen:
      'FaktumAI ei tarjoa uutiskirjettä. Vanhoihin tilaajatietoihin liittyvät pyynnöt voi tehdä Omat tiedot -sivulla.',
    subscribeArticleCta:
      'FaktumAI ei tarjoa uutiskirjettä. Vanhoihin tilaajatietoihin liittyvät pyynnöt voi tehdä Omat tiedot -sivulla.',
    subscribeEmailLabel: 'Sähköposti',
    subscribeLanguageLabel: 'Toivottu kieli',
    subscribeLanguageFi: 'Suomi',
    subscribeLanguageEn: 'English',
    subscribeLanguageBoth: 'Molemmat',
    subscribeConsentLabel:
      'FaktumAI ei tarjoa uutiskirjettä. Vanhoihin tilaajatietoihin liittyvät pyynnöt voi tehdä Omat tiedot -sivulla.',
    subscribeSubmit: 'Tilaa',
    subscribeSuccess:
      'FaktumAI ei tarjoa uutiskirjettä. Vanhoihin tilaajatietoihin liittyvät pyynnöt voi tehdä Omat tiedot -sivulla.',
    subscribeErrorGeneric: 'FaktumAI ei tarjoa uutiskirjettä. Vanhoihin tilaajatietoihin liittyvät pyynnöt voi tehdä Omat tiedot -sivulla.',
    subscribeErrorEmail: 'Anna kelvollinen sähköpostiosoite.',
    subscribeErrorConsent: 'FaktumAI ei tarjoa uutiskirjettä. Vanhoihin tilaajatietoihin liittyvät pyynnöt voi tehdä Omat tiedot -sivulla.',
    subscribeEmailSendFailed: 'Sähköpostin lähetys epäonnistui. Yritä hetken päästä uudelleen.',
    subscribeAlreadyActive:
      'FaktumAI ei tarjoa uutiskirjettä. Vanhoihin tilaajatietoihin liittyvät pyynnöt voi tehdä Omat tiedot -sivulla.',
    footerUnsubscribe: 'Peru tilaus',
    subscribeConfirmPending: 'FaktumAI ei tarjoa uutiskirjettä. Vanhoihin tilaajatietoihin liittyvät pyynnöt voi tehdä Omat tiedot -sivulla.',
    subscribeConfirmed: 'FaktumAI ei tarjoa uutiskirjettä. Vanhoihin tilaajatietoihin liittyvät pyynnöt voi tehdä Omat tiedot -sivulla.',
    subscribeConfirmedManage: 'Uutiskirje lopetettu',
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
      'FaktumAI ei tarjoa uutiskirjettä. Vanhoihin tilaajatietoihin liittyvät pyynnöt voi tehdä Omat tiedot -sivulla.',
    preferencesInactiveHelp: 'FaktumAI ei tarjoa uutiskirjettä. Vanhoihin tilaajatietoihin liittyvät pyynnöt voi tehdä Omat tiedot -sivulla.',
    preferencesMissingToken:
      'Profiilin täydennys vaatii henkilökohtaisen linkin sähköpostistasi.',
    preferencesMissingTokenHelp:
      'FaktumAI ei tarjoa uutiskirjettä. Vanhoihin tilaajatietoihin liittyvät pyynnöt voi tehdä Omat tiedot -sivulla.',
    unsubscribeTitle: 'Poista vanhat tilaajatiedot',
    unsubscribeLead:
      'Uutiskirje on lopetettu. Vanhojen tilaajatietojen poisto vahvistetaan henkilökohtaisella linkillä.',
    unsubscribeLeadWithToken: 'Vahvista painikkeella.',
    unsubscribeConfirm: 'Poista tilaajatietoni',
    unsubscribeMissingToken:
      'Eikö sinulla ole linkkiä? Syötä sähköpostiosoitteesi — lähetämme uuden peruutuslinkin.',
    unsubscribeMissingTokenHelp:
      'Voit myös avata linkin ”Peru tilaus” viimeisimmästä uutiskirjeestä tai tervetuloviestistä. Tarkista roskapostikansio.',
    unsubscribeRequestEmailLabel: 'Sähköposti',
    unsubscribeRequestSubmit: 'Lähetä peruutuslinkki',
    unsubscribeRequestSuccess:
      'Jos osoitteella on poistettavia tilaajatietoja, lähetimme peruutuslinkin. Tarkista myös roskapostikansio.',
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
    navAriaLabel: 'Päänavigaatio',
    langSwitcherAriaLabel: 'Kieli',
    categoriesAriaLabel: 'Sisältövälilehdet',
    tagListAriaLabel: 'Aiheet',
    breadcrumbAriaLabel: 'Murupolku',
    barChartFallback: 'Pylväskaavio',
  },
  en: {
    siteTagline: 'Software products, automation and AI-assisted software development.',
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
    footerTagline: 'Software products, automation and AI-assisted software development.',
    footerContent: 'Content',
    footerServices: 'Services',
    footerRss: 'RSS feed',
    footerLlm: 'LLM index',
    relatedTitle: 'Related articles on the same topic',
    emptyArticles: 'No published articles yet.',
    emptyCategory: 'No articles in this category.',
    visitCounterLoading: 'Read …',
    visitCounterRead: 'Read {count} times',
    topicsTitle: 'Topics',
    topicsLead: 'Articles grouped by keywords.',
    topicsBack: '← All topics',
    topicArticles: 'articles',
    enNoArticles: 'No English articles yet. Read in Finnish:',
    switchToFi: 'Vaihda suomeksi',
    switchToEn: 'Switch to English',
    langFi: 'Suomi',
    langEn: 'English',
    homeMetaTitle: 'FaktumAI | Software products, automation and AI-assisted development',
    homeMetaDescription:
      'FaktumAI designs and builds software products, automation solutions and custom digital systems with AI-assisted development.',
    aboutTitle: 'What is FaktumAI?',
    aboutMetaDescription:
      'FaktumAI is a software house that builds its own software products and commercially oriented solutions with a very lean, AI-assisted operating model.',
     listingAnalysis: 'In-depth analysis of AI markets, infrastructure, and business models.',
    listingNews: 'FaktumAI news, analysis, interviews, and tool reviews — newest first.',
    listingInterviews: 'Interview summaries from the Finnish and global AI field.',
    listingTools: 'AI tool reviews and practical perspectives for builders.',
    landingEyebrow: 'FAKTUMAI',
    landingHeading: 'Software products, automation and AI-assisted development',
    landingLead:
      'FaktumAI designs and builds software products, automation solutions and custom digital systems.',
    landingSupporting:
      'Our background combines software development, engineering and technical project management.',
    ctaProjects: 'View projects',
    ctaAbout: 'About FaktumAI',
    operatingEyebrow: 'HOW WE BUILD',
    operatingHeading: 'Lean development, controlled delivery',
    operatingIntro:
      'AI accelerates implementation while architecture, requirements, testing and approval remain controlled.',
    operatingCardProblemHeading: 'Problem first',
    operatingCardProblemBody:
      'We define the use case and requirements before making technology decisions.',
    operatingCardAiHeading: 'AI-assisted implementation',
    operatingCardAiBody:
      'AI models and agents support design, software development, testing and documentation.',
    operatingCardTestHeading: 'Test, measure, improve',
    operatingCardTestBody:
      'A working first version is built early and improved using test results and real use.',
    mvpEyebrow: 'MVP DEVELOPMENT',
    mvpHeading: 'From idea to a working MVP',
    mvpBody1:
      'We can quickly define the scope of a first working version based on a software idea, internal tool or process to be digitised.',
    mvpBody2:
      'Scope, schedule and technology are defined by the actual use case. The goal is a working MVP without a heavy development organisation.',
    mvpCta: 'Discuss your project',
    mvpCtaHref: 'mailto:marko@Faktum-AI.com?subject=Software%20project%20-%20MVP',
    projectsLabel: 'PROJECTS',
    projectsTitle: 'Products & implementations',
    projectsLead:
      'FaktumAI products and implementations show what we build in practice: local AI, mobile applications, e-commerce automation, and data and search systems.',
    latestNewsTitle: 'Latest news',
    allNews: 'All news →',
    aboutLead:
      'FaktumAI is a modern software house that builds its own software products and commercially oriented solutions with a very lean, AI-assisted operating model. The site serves both as the home of FaktumAI products and as a publisher of AI news, analysis, and tool reviews.',
    footerLegal: 'Legal',
    footerPrivacy: 'Privacy',
    footerCookies: 'Cookies',
    footerEditorial: 'Editorial & AI',
    footerSubscribe: 'Newsletter discontinued',
    footerContact: 'Contact',
    subscribeTitle: 'Newsletter discontinued',
    subscribeLead:
      'FaktumAI no longer offers a newsletter. Use the Your data page for requests concerning legacy subscriber data.',
    subscribeLeadProfessional:
      'FaktumAI no longer offers a newsletter. Use the Your data page for requests concerning legacy subscriber data.',
    subscribeLeadCitizen:
      'FaktumAI no longer offers a newsletter. Use the Your data page for requests concerning legacy subscriber data.',
    subscribeArticleCta:
      'FaktumAI no longer offers a newsletter. Use the Your data page for requests concerning legacy subscriber data.',
    subscribeEmailLabel: 'Email',
    subscribeLanguageLabel: 'Preferred language',
    subscribeLanguageFi: 'Finnish',
    subscribeLanguageEn: 'English',
    subscribeLanguageBoth: 'Both',
    subscribeConsentLabel:
      'FaktumAI no longer offers a newsletter. Use the Your data page for requests concerning legacy subscriber data.',
    subscribeSubmit: 'Subscribe',
    subscribeSuccess:
      'FaktumAI no longer offers a newsletter. Use the Your data page for requests concerning legacy subscriber data.',
    subscribeErrorGeneric: 'FaktumAI no longer offers a newsletter. Use the Your data page for requests concerning legacy subscriber data.',
    subscribeErrorEmail: 'Enter a valid email address.',
    subscribeErrorConsent: 'FaktumAI no longer offers a newsletter. Use the Your data page for requests concerning legacy subscriber data.',
    subscribeEmailSendFailed: 'Could not send the confirmation email. Please try again shortly.',
    subscribeAlreadyActive:
      'FaktumAI no longer offers a newsletter. Use the Your data page for requests concerning legacy subscriber data.',
    footerUnsubscribe: 'Unsubscribe',
    subscribeConfirmPending: 'FaktumAI no longer offers a newsletter. Use the Your data page for requests concerning legacy subscriber data.',
    subscribeConfirmed: 'FaktumAI no longer offers a newsletter. Use the Your data page for requests concerning legacy subscriber data.',
    subscribeConfirmedManage: 'Newsletter discontinued',
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
      'FaktumAI no longer offers a newsletter. Use the Your data page for requests concerning legacy subscriber data.',
    preferencesInactiveHelp: 'FaktumAI no longer offers a newsletter. Use the Your data page for requests concerning legacy subscriber data.',
    preferencesMissingToken:
      'Completing your profile requires the personal link from your email.',
    preferencesMissingTokenHelp:
      'FaktumAI no longer offers a newsletter. Use the Your data page for requests concerning legacy subscriber data.',
    unsubscribeTitle: 'Remove legacy subscriber data',
    unsubscribeLead:
      'The newsletter has been discontinued. A personal link is required to confirm removal of legacy subscriber data.',
    unsubscribeLeadWithToken: 'Press the button to confirm.',
    unsubscribeConfirm: 'Remove my subscriber data',
    unsubscribeMissingToken:
      'No link handy? Enter your email and we will send a new unsubscribe link.',
    unsubscribeMissingTokenHelp:
      'You can also open “Unsubscribe” from your latest newsletter or welcome message. Check your spam folder.',
    unsubscribeRequestEmailLabel: 'Email',
    unsubscribeRequestSubmit: 'Send unsubscribe link',
    unsubscribeRequestSuccess:
      'If this address has subscriber data eligible for removal, we sent an unsubscribe link. Check your spam folder too.',
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
    navAriaLabel: 'Main navigation',
    langSwitcherAriaLabel: 'Language',
    categoriesAriaLabel: 'Content tabs',
    tagListAriaLabel: 'Topics',
    breadcrumbAriaLabel: 'Breadcrumbs',
    barChartFallback: 'Bar chart',
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
    { href: categoryPath(locale, 'news'), label: t(locale, 'tabAll'), filter: 'all' },
    { href: `${categoryPath(locale, 'news')}?filter=${isFi ? 'uutiset' : 'news'}`, label: t(locale, 'navNews'), filter: isFi ? 'uutiset' : 'news' },
    { href: categoryPath(locale, 'interviews'), label: t(locale, 'navInterviews'), filter: 'interviews' },
    { href: categoryPath(locale, 'tools'), label: t(locale, 'navTools'), filter: 'tools' },
  ];
}
