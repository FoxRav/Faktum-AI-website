import type { Locale } from '../i18n/config';
import { categoryPath, contactPath } from '../i18n/paths';

export type ProjectStatus = 'pilot' | 'development' | 'research' | 'live';

export interface ProjectImage {
  src: string;
  alt: string;
  fit?: 'contain' | 'cover';
}

export interface ProjectCTA {
  heading: string;
  text?: string;
  label?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  contactText?: string;
}

export interface ProductionReference {
  sourceName: string;
  sourceUrl: string;
  linkLabel: string;
}

export interface ProjectDetail {
  lead: string;
  commercialLead?: string;
  whatItIs: string;
  problem: string;
  solution: string;
  audience: string[];
  technical: string;
  currentState: string;
  nextStep: string;
  cta?: ProjectCTA;
  callout?: {
    heading: string;
    body: string[];
    cta?: ProjectCTA;
    contactText?: string;
  };
  productionReference?: ProductionReference;
  disclaimer?: string;
  vision?: {
    heading: string;
    body: string[];
  };
  commercialization?: {
    heading: string;
    body: string;
    items: string[];
  };
  data?: string[];
  dataPrinciple?: string;
  aiRole?: string;
  noPerformanceClaims?: boolean;
  privacy?: {
    heading: string;
    intro?: string[];
    deletionHeading: string;
    deletionBody: string[];
    nonTraditionalHeading: string;
    nonTraditionalBody: string[];
  };
  organisationDeployment?: {
    heading: string;
    body: string;
    items: string[];
    callout?: {
      heading: string;
      body: string;
    };
    cta: ProjectCTA;
  };
  pricing?: {
    title: string;
    price: string;
    license: string;
    body: string;
  };
  pricingIncludes?: {
    title: string;
    bullets: string[];
    callout: string;
  };
  hardware?: {
    body: string;
  };
  licenseSection?: {
    heading: string;
    body: string[];
  };
  updates?: {
    heading: string;
    body: string[];
  };
  support?: {
    heading: string;
    body: string[];
  };
  cloudOption?: {
    heading: string;
    body: string[];
  };
}

export interface ProjectLocale {
  title: string;
  description: string;
  status: string;
  detail: ProjectDetail;
}

export interface Project {
  id: string;
  slug: string;
  status: ProjectStatus;
  image: ProjectImage | null;
  locales: Record<Locale, ProjectLocale>;
}

export const projects: Project[] = [
  {
    id: 'sermovox',
    slug: 'sermovox',
    status: 'pilot',
    image: {
      src: '/images/projects/sermovox.webp',
      alt: 'SermoVox – real-time multilingual speech translation',
      fit: 'contain',
    },
    locales: {
      fi: {
        title: 'SermoVox',
        description: 'Reaaliaikainen monikielinen puheenkäännös.',
        status: 'Saatavilla / käyttöönottoa valmistellaan',
        detail: {
          lead:
            'SermoVox on reaaliaikainen monikielinen puheenkäännösjärjestelmä tilaisuuksiin. Järjestelmä muuntaa puhujan puheen tekstiksi ja välittää käännökset yleisölle lähes reaaliajassa.',
          commercialLead: 'SermoVox Local on saatavilla kertamaksullisena paikallisena ohjelmistotuotteena.',
          whatItIs:
            'SermoVox on FaktumAI:n kehittämä paikallisesti toimiva puheentunnistus- ja käännösjärjestelmä. Se on suunniteltu tilanteisiin, joissa sama puhe täytyy välittää yleisölle useilla kielillä mahdollisimman pienellä viiveellä.\n\nNykyinen tuotantosuunta keskittyy suomenkielisen puheen tunnistamiseen ja sen välittämiseen englanniksi, ukrainaksi ja venäjäksi. Järjestelmä muodostaa yhtenäisen ketjun mikrofonista puheentunnistukseen, käännökseen ja yleisölle näytettävään tekstitykseen.',
          pricing: {
            title: 'Hinta ja lisenssi',
            price: '599 € + alv',
            license: 'Pysyvä kertalisenssi',
            body: 'SermoVox Local ostetaan kertamaksulla. Asiakas saa pysyvän käyttöoikeuden toimitettuun paikalliseen SermoVox-ohjelmistoversioon yhdellä sovitulla työasemalla. Käyttöoikeus ei edellytä jatkuvaa kuukausi- tai vuosimaksua.',
          },
          pricingIncludes: {
            title: 'Mitä hinta sisältää?',
            bullets: [
              'SermoVox Local -ohjelmiston pysyvä käyttöoikeus yhdellä sovitulla työasemalla',
              'ohjelmiston asennus ja ensimmäinen käyttöönotto',
              'tarvittavien puheentunnistus- ja käännösmallien käyttöönotto',
              'mikrofonin tai headsetin sekä näytön tai projektoriratkaisun toiminnan testaus',
              'operaattori- ja yleisönäkymän käyttöönotto',
              'peruskäyttöopastus',
              'normaali käyttötuki arkisin sekä muina aikoina erikseen sovittaessa',
            ],
            callout: 'Paikan päällä tehtävät käyttöönotot ovat tällä hetkellä saatavissa Etelä-Pohjanmaan alueella.',
          },
          problem:
            'Monikielisissä tilaisuuksissa ammattitulkkaus voi olla kallista tai vaikeasti järjestettävää. Tavallisia kuluttajille tarkoitettuja käännössovelluksia ei puolestaan ole suunniteltu jatkuvan puheen käsittelyyn, operaattorin hallintaan ja suurelle näytölle välitettävään reaaliaikaiseen tekstitykseen.\n\nSermoVoxin tavoitteena on tarjota tähän tarkoitukseen kevyt, hallittava ja mahdollisimman pitkälle paikallisesti toimiva ratkaisu.',
          solution:
            'Mikrofoni → puheentunnistus → käännös → reaaliaikainen tiedonsiirto → operaattori- ja projektorinäkymä\n\nPuhujan ääni käsitellään paikallisesti. Puhe tunnistetaan, käännetään valituille kielille ja toimitetaan selaimessa toimivaan käyttöliittymään. Operaattori hallitsee järjestelmää omasta näkymästään ja yleisö näkee käännökset erillisessä projektori- tai näytönäkymässä.',
          audience: [
            'seurakunnille ja monikielisille yhteisöille',
            'tapahtumiin ja seminaareihin',
            'yhdistyksille',
            'organisaatioille, joissa tarvitaan monikielistä viestintää',
            'kunnille ja muille julkisille toimijoille, joilla on tarve paikallisesti hallittavalle käännösratkaisulle',
          ],
          hardware: {
            body: 'Tietokone, mikrofoni tai headset sekä mahdollinen näyttö- tai projektorilaitteisto eivät sisälly 599 euron ohjelmistohintaan.\n\nSermoVox voidaan asentaa asiakkaan soveltuvaan Windows-tietokoneeseen. FaktumAI voi määritellä tarvittavan laitteistokokoonpanon ja auttaa sopivien laitteiden valinnassa ennen käyttöönottoa.\n\nLaitteistovaatimukset riippuvat käytettävistä kielistä, puheentunnistusmallista ja tavoitellusta suorituskyvystä. Vaatimukset tarkistetaan ennen toimitusta.',
          },
          technical:
            'SermoVoxin nykyinen toteutus käyttää GPU-kiihdytettyä puheentunnistusta, paikallisia käännösmalleja, FastAPI-backendiä ja WebSocket-pohjaista reaaliaikaista tiedonsiirtoa. Käyttöliittymä muodostuu erillisestä operaattorinäkymästä ja yleisölle tarkoitetusta projektorinäkymästä.\n\nJärjestelmän suunnittelussa painotetaan paikallista käsittelyä, pientä viivettä, toimintavarmuutta ja sitä, ettei tuotantokäyttö ole jatkuvasti riippuvainen ulkoisesta pilvipalvelusta.',
          licenseSection: {
            heading: 'Pysyvä käyttöoikeus',
            body: [
              'SermoVox Local toimitetaan pysyvällä kertalisenssillä. Asiakkaan käyttöoikeus toimitettuun ohjelmistoversioon ei vanhene, vaikka asiakas ei ostaisi myöhemmin uusia versioita tai lisäpalveluja.',
              'Mahdolliset tulevat merkittävät tuoteversiot, uudet maksulliset ominaisuudet, lisäkielet tai erilliset pilvipalvelut voidaan hinnoitella erikseen.',
            ],
          },
          updates: {
            heading: 'Päivitykset',
            body: [
              'SermoVoxiin voidaan toimittaa korjauksia ja yhteensopivuuspäivityksiä tuotteen kehittyessä. Päivitysmallia kehitetään edelleen, mutta pysyvä käyttöoikeus ei ole riippuvainen jatkuvasta tilauksesta.',
              'Merkittävät tulevat tuoteversiot tai kokonaan uudet palvelut eivät automaattisesti sisälly alkuperäiseen kertalisenssiin.',
            ],
          },
          support: {
            heading: 'Tuki',
            body: [
              'SermoVoxin käyttötukea on saatavilla normaalisti arkipäivisin sekä erikseen sovittaessa.',
              'Tuki kattaa normaalin ohjelmiston käyttöön liittyvän neuvonnan. Laajemmat paikan päällä tehtävät työt, laitemuutokset tai muut erikseen sovittavat palvelut voidaan hinnoitella tapauskohtaisesti.',
            ],
          },
          currentState:
            'SermoVox on saatavilla. Ensimmäinen asiakaskäyttöönotto on sovittu, ja järjestelmän asentamista asiakkaan käyttöympäristöön valmistellaan. Nykyinen kehitys keskittyy käyttöönoton viimeistelyyn, puheentunnistuksen viiveeseen, audiopolun toimintavarmuuteen ja tuotantokäyttöön sopivan laitekokoonpanon varmistamiseen.',
          nextStep:
                        'Seuraava merkittävä vaihe on järjestelmän asentaminen ensimmäiselle asiakkaalle ja sen testaaminen aidossa tilaisuudessa. Ensimmäisestä käyttöönotosta saatavia kokemuksia hyödynnetään toimitusprosessin, käyttökokemuksen ja tuotteen jatkokehityksen viimeistelyssä.',
          organisationDeployment: {
            heading: 'Ratkaisut organisaatioille ja suurempiin käyttöönottoihin',
            body: 'SermoVox Local -paketti, 599 € + alv, on tarkoitettu yhden sovitun työaseman käyttöönottoon. Organisaatioille, jotka tarvitsevat useita työasemia, useita käyttöpaikkoja tai muuten laajemman kokonaisuuden, toimitus ja hinnoittelu suunnitellaan erikseen käyttötarpeen mukaan.\n\nSermoVox voidaan toteuttaa asiakkaan omassa paikallisessa IT-ympäristössä. Tällaisessa toteutuksessa puheentunnistus ja käännös voidaan käsitellä asiakkaan omalla laitteistolla ilman, että puhedataa tarvitsee lähettää ulkopuoliseen pilvipalveluun. Tämä voi olla tärkeää organisaatioille, joilla on tavallista tiukemmat tietosuoja-, tietoturva- tai datanhallintavaatimukset.',
            items: [
              'useita SermoVox-työasemia',
              'useita käyttöpaikkoja',
              'keskitetty käyttöönotto',
              'organisaation oma laitteisto',
              'asiakaskohtainen laitekokoonpano',
              'paikallinen tai organisaation hallitsema palvelinympäristö',
              'asiakaskohtainen tukipalvelu',
              'asiakaskohtaiset kieli- ja käyttöympäristövaatimukset',
              'myöhemmin mahdollinen pilvi- tai hybriditoteutus',
            ],
            callout: {
              heading: 'Data asiakkaan hallinnassa',
              body: 'Paikallisen SermoVox-toteutuksen keskeinen etu on mahdollisuus käsitellä puhe ja käännökset asiakkaan omassa ympäristössä. FaktumAI voi suunnitella toimitusmallin yhdessä asiakkaan kanssa tämän IT- ja tietoturvavaatimusten mukaisesti.',
            },
            cta: {
              heading: 'Tarvitsetko useamman laitteen tai organisaatiokohtaisen toteutuksen?',
              text: 'Laajemmat SermoVox-toimitukset suunnitellaan asiakkaan käyttötarpeen, laitemäärän, kielten ja tietoturvavaatimusten mukaan.',
              label: 'Pyydä ratkaisu organisaatiollesi',
              href: contactPath('fi'),
            },
          },
          cloudOption: {
            heading: 'SermoVox Cloud — tulevaisuuden vaihtoehto',
            body: [
              'Paikallisen SermoVox Local -version rinnalle tutkitaan pilvipohjaista palvelumallia. Tavoitteena on tulevaisuudessa tarjota vaihtoehto myös asiakkaille, jotka haluavat käyttää SermoVoxia selaimessa tai pilvipalveluna ilman oman paikallisen AI-ympäristön ylläpitoa.',
              'SermoVox Cloud ei ole vielä julkaistu palvelu, eikä sille ole vahvistettua hinnoittelua tai julkaisuaikataulua.',
            ],
          },
          cta: {
            heading: 'Tarvitsetko reaaliaikaista monikielistä käännöstä?',
            text: 'SermoVox Local on saatavilla kertamaksullisena paikallisena ratkaisuna. Käydään yhdessä läpi käyttötarve, tarvittavat kielet, laitteisto ja sopiva käyttöönottomalli.\n\nSermoVox Local 599 € + alv',
            label: 'Kysy SermoVox-ratkaisusta',
            href: contactPath('fi'),
            contactText: 'marko@Faktum-AI.com',
          },
        },
      },
      en: {
        title: 'SermoVox',
        description: 'Real-time multilingual speech translation system for live events.',
        status: 'Available / deployment preparation',
        detail: {
          lead:
            'SermoVox is a real-time multilingual speech translation system for live events. It converts a speaker\'s speech into text and delivers translations to the audience with minimal delay.',
          commercialLead:
            'SermoVox Local is available as a locally installed software product with a one-time licence fee.',
          pricing: {
            title: 'Price and licence',
            price: '€599 + VAT',
            license: 'Permanent one-time licence',
            body: 'SermoVox Local is purchased with a one-time payment. The customer receives a permanent licence to the delivered local SermoVox software version on one agreed workstation. The delivered version does not require an ongoing monthly or annual subscription.',
          },
          pricingIncludes: {
            title: 'What is included?',
            bullets: [
              'permanent licence for SermoVox Local on one agreed workstation',
              'software installation and initial deployment',
              'deployment of the required speech recognition and translation models',
              'testing of the microphone or headset and display or projector setup',
              'deployment of the operator and audience views',
              'basic user guidance',
              'standard user support on weekdays and by separate agreement',
            ],
            callout: 'On-site deployments are currently available in the South Ostrobothnia region of Finland.',
          },
          whatItIs:
            'SermoVox is a locally operated speech recognition and translation system developed by FaktumAI. It is designed for situations where the same speech needs to be delivered to an audience in multiple languages with as little delay as possible.\n\nThe current production direction focuses on recognising Finnish speech and delivering translations in English, Ukrainian and Russian. The system creates one continuous pipeline from microphone input to speech recognition, translation and audience-facing subtitles.',
          problem:
            'Professional interpretation for multilingual events can be expensive or difficult to arrange. Consumer translation applications, on the other hand, are not designed for continuous speech, operator-controlled workflows and real-time subtitles shown on a large display.\n\nSermoVox is intended to provide a lightweight, manageable and primarily local solution for this use case.',
          solution:
            'Microphone → speech recognition → translation → real-time data transfer → operator and audience views\n\nThe speaker\'s audio is processed locally. Speech is recognised, translated into the selected languages and delivered to a browser-based interface. The operator controls the system through a dedicated view, while the audience sees the translations through a separate projector or display view.',
          audience: [
            'churches and multilingual communities',
            'events and seminars',
            'associations',
            'organisations that need multilingual communication',
            'municipalities and other public-sector organisations that need a locally controlled translation solution',
          ],
          hardware: {
            body: 'The computer, microphone or headset and any required display or projector hardware are not included in the €599 software price.\n\nSermoVox can be installed on a suitable customer-owned Windows computer. FaktumAI can define the required hardware configuration and assist with selecting suitable equipment before deployment.\n\nHardware requirements depend on the languages used, the speech recognition model and the required level of performance. The requirements are reviewed before delivery.',
          },
          technical:
            'The current SermoVox implementation uses GPU-accelerated speech recognition, local translation models, a FastAPI backend and WebSocket-based real-time data transfer. The user interface consists of a dedicated operator view and a separate audience-facing projector view.\n\nThe system is designed around local processing, low latency, operational reliability and reduced dependence on external cloud services during production use.',
          licenseSection: {
            heading: 'Permanent licence',
            body: [
              'SermoVox Local is delivered with a permanent one-time licence. The customer\'s right to use the delivered software version does not expire if the customer chooses not to purchase future versions or additional services.',
              'Future major product versions, new paid features, additional languages or separate cloud services may be priced separately.',
            ],
          },
          updates: {
            heading: 'Updates',
            body: [
              'Corrections and compatibility updates may be provided as the product develops. The update model is still being refined, but the permanent licence does not depend on a recurring subscription.',
              'Major future product versions or entirely new services are not automatically included in the original one-time licence.',
            ],
          },
          support: {
            heading: 'Support',
            body: [
              'Standard SermoVox user support is normally available on weekdays and at other times by separate agreement.',
              'Standard support covers guidance related to normal software use. More extensive on-site work, hardware changes or other separately agreed services may be priced separately.',
            ],
          },
          currentState:
            'SermoVox is available. The first customer deployment has been agreed and preparation is underway for installation in the customer\'s environment. Current development focuses on deployment readiness, speech recognition latency, audio-path reliability and verification of a production-ready hardware configuration.',
          nextStep:
            'The next major step is to install SermoVox in the first customer\'s environment and test it in a real event. Experience from the deployment will be used to refine the delivery process, user experience and further product development.',
          organisationDeployment: {
            heading: 'Solutions for organisations and larger deployments',
            body: 'The €599 + VAT SermoVox Local package is intended for deployment on one agreed workstation. For organisations requiring multiple workstations, multiple locations or a broader implementation, the scope and pricing are planned separately according to the customer\'s requirements.\n\nSermoVox can be deployed in the customer\'s own local IT environment. In such a deployment, speech recognition and translation can be processed on customer-controlled hardware without sending speech data to an external cloud service. This can be important for organisations with stricter requirements concerning privacy, security or control of data.',
            items: [
              'multiple SermoVox workstations',
              'multiple deployment locations',
              'centrally coordinated deployment',
              'customer-owned hardware',
              'customer-specific hardware configuration',
              'local or customer-controlled server environment',
              'customer-specific support arrangements',
              'customer-specific language and operating-environment requirements',
              'potential future cloud or hybrid deployment',
            ],
            callout: {
              heading: 'Data under customer control',
              body: 'A key advantage of a local SermoVox deployment is the ability to process speech and translations within the customer\'s own environment. FaktumAI can design the deployment model together with the customer according to its IT and information-security requirements.',
            },
            cta: {
              heading: 'Need multiple devices or an organisation-specific deployment?',
              text: 'Larger SermoVox deployments are planned according to the customer\'s use case, number of devices, languages and security requirements.',
              label: 'Discuss an organisation deployment',
              href: contactPath('en'),
            },
          },
          cloudOption: {
            heading: 'SermoVox Cloud — future option',
            body: [
              'Alongside the locally installed SermoVox Local product, FaktumAI is investigating a cloud-based service model. The long-term goal is to provide an alternative for customers that want to use SermoVox as a browser-based or cloud service without maintaining their own local AI environment.',
              'SermoVox Cloud has not been released and currently has no confirmed pricing or launch schedule.',
            ],
          },
          cta: {
            heading: 'Need real-time multilingual translation?',
            text: 'SermoVox Local is available as a locally installed solution with a one-time licence fee. We can review the use case, required languages, hardware and suitable deployment model together.\n\nSermoVox Local €599 + VAT',
            label: 'Ask about SermoVox',
            href: contactPath('en'),
            contactText: 'marko@Faktum-AI.com',
          },
        },
      },
    },
  },
  {
    id: 'party-buddy',
    slug: 'party-buddy',
    status: 'development',
    image: {
      src: '/images/projects/party-buddy.webp',
      alt: 'Party Buddy – local event and meetup platform app icon',
      fit: 'contain',
    },
    locales: {
      fi: {
        title: 'Party Buddy',
        description: 'Paikallinen tapahtuma- ja kohtaamisalusta.',
        status: 'Suljettu testaus / julkaisuvalmistelu',
        detail: {
          lead:
            'Party Buddy on mobiilisovellus ihmisille, jotka haluavat löytää seuraa samasta kaupungista silloin, kun he ovat lähdössä ulos, tapahtumaan tai muuten tapaamaan uusia ihmisiä.',
          whatItIs:
            'Party Buddy rakentuu yksinkertaisen ajatuksen ympärille: kuka muu on liikkeellä juuri nyt?\n\nPalvelun tarkoituksena ei ole rakentaa uutta yleistä sosiaalisen median verkostoa. Party Buddy keskittyy lyhyen aikavälin kohtaamisiin ja siihen, että käyttäjä voi löytää muita samassa kaupungissa olevia ihmisiä, muodostaa kontaktin ja sopia tapaamisesta.',
          problem:
            'Nykyiset sosiaalisen median palvelut perustuvat usein pitkäikäisiin profiileihin, seuraajaverkostoihin ja jatkuvaan sisällön julkaisemiseen. Ne eivät ratkaise kovin hyvin yksinkertaista tilannetta: käyttäjä haluaisi tänään lähteä ulos, mutta ei tiedä, kuka muu on liikkeellä.\n\nParty Buddy pyrkii tekemään tästä tilanteesta mahdollisimman yksinkertaisen.',
          solution:
            'Ilmoita olevasi liikkeellä → löydä muita → lähetä kutsu → toinen käyttäjä hyväksyy → keskustelu ja tapaaminen\n\nKäyttäjä luo väliaikaisen profiilin ja voi ilmoittaa olevansa liikkeellä. Palvelussa voidaan löytää muita käyttäjiä ja lähettää kutsu yhteyden muodostamiseksi. Keskustelu avautuu vasta, kun toinen käyttäjä on hyväksynyt kontaktin.',
          audience: [
            'ihmisille, jotka etsivät seuraa illanviettoon',
            'tapahtumiin lähteville',
            'uudessa kaupungissa oleville käyttäjille',
            'ihmisille, jotka haluavat löytää uusia tuttavuuksia kevyesti ja nopeasti',
          ],
          technical:
             'Party Buddy on Flutterilla toteutettu mobiilisovellus, jonka backend perustuu Supabaseen. Palvelussa hyödynnetään relaatiotietokantaa, reaaliaikaisia toimintoja ja käyttöoikeuksien hallintaa.\n\nArkkitehtuuri on suunniteltu väliaikaiselle käyttäjädatalle. Käyttäjätietojen elinkaarta hallitaan automaattisilla poistoprosesseilla, ja yksityisviestintä toteutetaan päästä päähän salattuna.',
          currentState:
            'Party Buddyn keskeinen toiminnallisuus on rakennettu, ja projekti valmistautuu suljettuun käyttäjätestaukseen ennen Google Play -julkaisua. Testauksessa keskitytään käytettävyyteen, toimintavarmuuteen, tietojen automaattiseen poistumiseen, yksityisen viestinnän toimintaan ja todellisessa käytössä havaittaviin ongelmiin.',
          nextStep:
            'Seuraava vaihe on suljettu testaus todellisilla käyttäjillä. Testauksen perusteella korjataan havaitut ongelmat, viimeistellään käytettävyyttä ja valmistellaan sovellusta Google Play -julkaisua varten.',
          privacy: {
            heading: 'Yksityisyys suunnittelun lähtökohtana',
            intro: [
              'Party Buddy on suunniteltu hetkelliseen käyttöön eikä pysyväksi sosiaalisen median profiiliksi. Käyttäjältä ei pyydetä sähköpostiosoitetta, salasanaa tai muuta perinteistä kirjautumistunnusta. Palvelun toimintamalli ei perustu pitkäikäisten kirjautumistietojen tai käyttäjäprofiilien keräämiseen.',
              'Party Buddyyn tallennetut käyttäjätiedot poistetaan automaattisesti 24 tunnin kuluttua käyttöistunnon alkamisesta, ellei käyttäjä poista tietoja jo sitä ennen. Käyttäjä voi siis poistaa omat tietonsa myös itse ennen automaattisen säilytysajan päättymistä.',
              'Yksityisviestintä toteutetaan päästä päähän salattuna. Tavoitteena on, että viestien sisältö pysyy keskustelun osapuolten hallinnassa.',
            ],
            deletionHeading: 'Miksi vain 24 tuntia?',
            deletionBody: [
              'Party Buddyn käyttötarkoitus on hetkellinen. Tarkoitus ei ole rakentaa pysyvää käyttäjähistoriaa, vaan auttaa ihmisiä löytämään seuraa juuri silloin, kun he ovat liikkeellä. Kun käyttötarve päättyy, myös palveluun tallennetun tiedon tarve päättyy.',
              'Lyhyt säilytysaika vähentää palveluun kertyvän henkilötiedon määrää ja tukee Party Buddyn ajatusta kevyestä, tilanteeseen sidotusta sosiaalisesta palvelusta.',
            ],
            nonTraditionalHeading: 'Party Buddy ei ole perinteinen somepalvelu',
            nonTraditionalBody: [
              'Party Buddy eroaa perinteisestä sosiaalisesta mediasta siinä, ettei sen tavoitteena ole kerätä käyttäjähistoriaa, kasvattaa seuraajaverkostoa tai säilyttää käyttäjän toimintaa vuosien ajan.',
              'Palvelun arvo syntyy hetkestä: kuka on liikkeellä nyt, kenen kanssa voisi muodostaa kontaktin ja haluavatko molemmat osapuolet keskustella.',
            ],
          },
          callout: {
            heading: 'Haemme Party Buddylle testaajia',
            body: [
              'Party Buddy lähestyy Google Play -julkaisun testausvaihetta. Haemme käyttäjiä kokeilemaan sovellusta aidossa käyttötilanteessa ja antamaan palautetta käytettävyydestä, toiminnasta ja mahdollisista ongelmista. Testauksen tavoitteena on viimeistellä sovellus ennen laajempaa julkaisua.',
              'Testaajana toimiminen ei edellytä teknistä osaamista. Tärkeintä on käyttää sovellusta normaalisti ja kertoa, mikä toimii, mikä tuntuu epäselvältä ja mitä pitäisi parantaa.',
              'Testauksessa arvioidaan myös tietojen automaattista poistumista, yksityisyysmallia ja viestinnän toimivuutta käytännössä.',
            ],
            cta: {
              heading: 'Hae testaajaksi',
              label: 'Hae testaajaksi',
              href: contactPath('fi'),
            },
            contactText: 'marko@Faktum-AI.com',
          },
        },
      },
      en: {
        title: 'Party Buddy',
        description: 'Mobile application for finding company in the same city when going out, attending an event or meeting new people.',
        status: 'Closed testing / release preparation',
        detail: {
          lead:
            'Party Buddy is a mobile application for people who want to find company in the same city when they are going out, attending an event or simply looking to meet new people.',
          whatItIs:
            'Party Buddy is built around a simple question: who else is going out right now?\n\nThe goal is not to create another general-purpose social network. Party Buddy focuses on short-term encounters: finding other people in the same city, establishing mutual contact and arranging to meet.',
          problem:
            'Most social media services are built around persistent profiles, follower networks and continuous content publishing. They do not solve a simple situation particularly well: someone wants to go out today but does not know who else is available.\n\nParty Buddy is designed to make that situation as simple as possible.',
          solution:
            'Say you\'re going out → find others → send an invitation → invitation accepted → chat and meet\n\nThe user creates a temporary profile and can indicate that they are going out. Other users can be discovered and an invitation can be sent to establish contact. Private conversation becomes available only after the other user accepts the connection.',
          audience: [
            'people looking for company for a night out',
            'people attending events',
            'people visiting or living in a new city',
            'people who want a lightweight way to meet new acquaintances',
          ],
          technical:
            'Party Buddy is a Flutter mobile application with a Supabase backend. The service uses a relational database, real-time functionality and access-control mechanisms.\n\nThe architecture is designed around temporary user data. Automated deletion processes manage the lifecycle of user information, and private messaging is implemented with end-to-end encryption.',
          currentState:
            'The core Party Buddy functionality has been built, and the project is preparing for closed user testing before publication on Google Play. Testing will focus on usability, reliability, automatic data deletion, private messaging and issues observed in real-world use.',
          nextStep:
            'The next step is closed testing with real users. Findings from testing will be used to fix issues, refine the user experience and prepare the application for publication on Google Play.',
          privacy: {
            heading: 'Privacy by design',
            intro: [
              'Party Buddy is designed for temporary use rather than permanent social-media profiles. Users are not asked to provide an email address, password or other conventional login credential. The service model is not based on collecting long-lived login information or permanent user profiles.',
              'User data stored by Party Buddy is automatically deleted 24 hours after the session begins unless the user deletes the data earlier. Users can therefore remove their own data before the automatic retention period ends.',
              'Private messaging is implemented with end-to-end encryption. The goal is to keep the contents of private messages under the control of the participants in the conversation.',
            ],
            deletionHeading: 'Why only 24 hours?',
            deletionBody: [
              'Party Buddy is designed for temporary situations. The purpose is not to build a permanent user history, but to help people find company when they are going out. When the immediate use case ends, the need to retain the associated service data also ends.',
              'The short retention period reduces the amount of personal data accumulated by the service and supports Party Buddy\'s model as a lightweight, situational social service.',
            ],
            nonTraditionalHeading: 'Party Buddy is not a traditional social network',
            nonTraditionalBody: [
              'Party Buddy differs from traditional social media because it is not intended to build long-term user histories, follower networks or permanent records of user activity.',
              'Its value comes from the immediate situation: who is available now, who might want to connect and whether both people want to start a conversation.',
            ],
          },
          callout: {
            heading: 'We are looking for Party Buddy testers',
            body: [
              'Party Buddy is approaching the testing stage before its Google Play release. We are looking for users to try the application in realistic use and provide feedback on usability, functionality and any problems they encounter.',
              'No technical expertise is required. The most useful contribution is simply to use the application normally and report what works, what feels unclear and what should be improved.',
              'Testing will also evaluate automatic data deletion, the privacy model and private messaging in practice.',
            ],
            cta: {
              heading: 'Apply to become a tester',
              label: 'Apply to become a tester',
              href: contactPath('en'),
            },
            contactText: 'marko@Faktum-AI.com',
          },
        },
      },
    },
  },
  {
    id: 'shopify-sale-manager',
    slug: 'shopify-sale-manager',
    status: 'live',
    image: {
      src: '/images/projects/shopify-sale-manager.webp',
      alt: 'Shopify Sale Manager – ecommerce sales dashboard with order and analytics visualization',
      fit: 'contain',
    },
    locales: {
      fi: {
        title: 'Shopify Sale Manager',
        description: 'Shopify-kaupan myynnin hallinta- ja automaatioratkaisu.',
        status: 'Tuotantokäytössä / tuotteistus',
        detail: {
          lead:
            'Shopify Sale Manager on Shopify-verkkokaupan alennusmyyntien hallintaan kehitetty työkalu, joka automatisoi tarjoushintojen käsittelyä ja vähentää manuaalista hintojen ylläpitoa.',
          whatItIs:
             'Shopify Sale Manager syntyi käytännön verkkokauppatarpeesta: alennusmyyntien hallinnan pitää olla nopeaa, hallittavaa ja turvallista myös silloin, kun verkkokaupassa on paljon tuotteita ja tuotevariantteja.\n\nRatkaisun tavoitteena on tehdä kampanjojen ja tarjoushintojen hallinnosta järjestelmällisempää ja vähentää Shopify-kaupassa tehtävää toistuvaa manuaalista työtä.',
          problem:
            'Verkkokaupan alennusmyyntien hallinta muuttuu nopeasti työlääksi, kun tuotteita, tuotevariantteja ja eri hintatasoja on paljon. Hintojen muuttaminen käsin kasvattaa työmäärää ja lisää virheiden riskiä.\n\nShopify Sale Manager keskittää alennusmyyntien hinnanhallintaa yhteen hallittavaan prosessiin.',
          solution:
            'Kauppias hallitsee alennusmyyntiin liittyviä tuotteita ja hintoja Shopify-ympäristössä Sale Managerin avulla. Työkalu automatisoi toistuvia hinnanhallinnan vaiheita ja vähentää tarvetta tehdä samoja muutoksia käsin tuote tai variantti kerrallaan.',
          audience: [
            'Shopify-verkkokaupoille',
            'verkkokaupoille, joilla on paljon tuotteita tai tuotevariantteja',
            'toistuvia kampanjoita järjestäville verkkokaupoille',
            'toimijoille, jotka haluavat vähentää manuaalista hinnanhallintaa',
          ],
          technical:
            'Shopify Sale Manager on rakennettu Shopify-ympäristöön ja hyödyntää Shopifyn tarjoamia sovellus- ja hallintarajapintoja. Toteutuksen tavoitteena on pitää ratkaisu mahdollisimman lähellä Shopify-alustaa ja minimoida tarpeeton erillinen infrastruktuuri.',
          currentState:
            'Shopify Sale Manager on tuotantokäytössä, ja sitä kehitetään edelleen tuotteistettavaksi ratkaisuksi. Nykyinen tuotantokäyttö tarjoaa aidon käyttöympäristön, jossa työkalun toimintaa, käytettävyyttä ja kehitystarpeita voidaan arvioida oikean verkkokaupan prosesseissa.',
          nextStep:
            'Seuraava vaihe on tuotantokokemusten pohjalta tehtävä viimeistely, tuotteen yleiskäyttöisyyden parantaminen sekä Shopify-jakeluun liittyvien seuraavien vaiheiden arviointi.',
          cta: {
            heading: 'Tarvitsetko Shopify-kauppaasi tehokkaampaa alennusmyyntien hallintaa?',
            text: 'Jos verkkokaupassasi on paljon tuotteita, tuotevariantteja tai toistuvia kampanjoita, voidaan selvittää, soveltuuko Shopify Sale Manager myös sinun käyttöösi.',
            label: 'Ota yhteyttä',
            href: contactPath('fi'),
          },
          productionReference: {
            sourceName: 'H&J Pirttisen verkkokaupassa',
            sourceUrl: 'https://pirttinen.fi/',
            linkLabel: 'Tutustu verkkokauppaan →',
          },
        },
      },
      en: {
        title: 'Shopify Sale Manager',
        description: 'Shopify store sale pricing management and automation tool.',
        status: 'In production / productisation',
        detail: {
          lead:
            'Shopify Sale Manager is a tool developed for managing sale pricing in Shopify stores. It automates parts of promotional price management and reduces repetitive manual price maintenance.',
          whatItIs:
            'Shopify Sale Manager originated from a practical e-commerce requirement: managing a sale must remain fast, controlled and reliable even when a store contains large numbers of products and product variants. The goal is to make campaign and promotional price management more systematic and reduce repetitive manual work inside the Shopify store.',
          problem:
            'Managing sale prices becomes increasingly laborious when an online store contains many products, product variants and price levels. Updating prices manually increases workload and the risk of errors.\n\nShopify Sale Manager centralises sale-price management into one controlled process.',
          solution:
            'The merchant manages products and prices related to a sale through Sale Manager within the Shopify environment. The tool automates repetitive price-management steps and reduces the need to perform the same changes manually for each product or variant.',
          audience: [
            'Shopify merchants',
            'online stores with large numbers of products or product variants',
            'stores that run recurring sales campaigns',
            'businesses that want to reduce manual price management',
          ],
          technical:
            'Shopify Sale Manager is built for the Shopify environment and uses Shopify\'s application and administration interfaces. The implementation is designed to stay as close to the Shopify platform as possible and minimise unnecessary separate infrastructure.',
          productionReference: {
            sourceName: 'H&J Pirttinen\'s online store',
            sourceUrl: 'https://pirttinen.fi/',
            linkLabel: 'Visit the online store →',
          },
          currentState:
            'Shopify Sale Manager is in production use and continues to be developed toward a more broadly productised solution. The current deployment provides a real operating environment in which functionality, usability and development needs can be evaluated within actual e-commerce processes.',
          nextStep:
            'The next step is to refine the product based on production experience, improve its general applicability and evaluate the next stages of Shopify distribution.',
          cta: {
            heading: 'Need more efficient sale-price management for your Shopify store?',
            text: 'If your store contains many products, product variants or recurring sales campaigns, we can assess whether Shopify Sale Manager could also fit your use case.',
            label: 'Contact us',
            href: contactPath('en'),
          },
        },
      },
    },
  },
  {
    id: 'rikoslaki-sota',
    slug: 'rikoslaki-sota',
    status: 'research',
    image: {
      src: '/images/projects/rikoslaki-sota.webp',
      alt: 'Rikoslaki SOTA – Finnish criminal code search and legal document interface',
      fit: 'contain',
    },
    locales: {
      fi: {
        title: 'Rikoslaki SOTA',
        description: 'Lähdepohjainen suomalaisen rikoslain haku- ja analyysijärjestelmä.',
        status: 'Tutkimus ja tuotekehitys',
        detail: {
          lead:
            'Rikoslaki SOTA on lähdepohjainen suomalaisen lainsäädännön haku-, selaus- ja analyysijärjestelmä, jonka ensimmäinen rajattu kohde on Suomen rikoslaki.',
          whatItIs:
            'Projektin tavoitteena on rakentaa Finlex-aineistosta oma rakenteinen ja historiallinen lakitietokanta, jota voidaan hakea deterministisesti ja jonka tulokset voidaan yhdistää takaisin alkuperäisiin oikeudellisiin lähteisiin.\n\nRikoslaki toimii projektin ensimmäisenä rajattuna kokonaisuutena. Pidemmän aikavälin tavoitteena on koko Suomen lainsäädännön historiallinen hakukone ja lakidatan peili.',
          problem:
            'Generatiivinen kielimalli ei ole itsessään luotettava oikeudellinen tietokanta. Oikeudellisessa käytössä pitää tietää, mihin lakiin, lainkohtaan ja ajankohtaan vastaus perustuu. Lisäksi lain sisältö muuttuu ajan myötä.\n\nRikoslaki SOTA pyrkii erottamaan toisistaan lähteen, haun ja AI:n tekemän tulkinnan. Lain sisältö muodostaa järjestelmän ensisijaisen tietokerroksen. AI voi toimia sen päällä, mutta se ei korvaa alkuperäistä oikeuslähdettä.',
          solution:
            'Finlex-aineisto → aineiston tuonti ja normalisointi → historiallinen lakipeili → haku → lähdeviitteet → AI-avusteinen tulkinta\n\nFinlexistä saatava lainsäädäntöaineisto tuodaan omaan rakenteiseen tietokantaan. Aineiston versio- ja voimassaolotietoja käsitellään niin, että hakutulos voidaan yhdistää oikeaan lainkohtaan ja oikeaan ajalliseen tilanteeseen. Hakukerroksen päälle voidaan rakentaa AI-avusteisia toimintoja, jotka käyttävät järjestelmän omia lähteitä.',
          audience: [
            'oikeudelliset ammattilaiset ja lakimiehet',
            'lainsäädäntöä tutkivat tutkijat ja oppilaitokset',
            'julkaisijat ja viranomaiset, jotka tarvitsevat tarkkoja lähteitä',
            'kehittäjät, jotka rakentavat oikeudellisia sovelluksia',
          ],
          technical:
            'Projektin arkkitehtuurissa painotetaan determinististä hakua, ajallista oikeellisuutta ja lähdeviitteiden tarkistettavuutta. PostgreSQL toimii rakenteisen lakidatan perustana, ja hakukerrosta rakennetaan ensisijaisesti lähdepohjaiseksi.\n\nLeksikaalista hakua ja tulosten yhdistelyä voidaan täydentää semanttisilla hakumenetelmillä. AI-pohjaiset menetelmät toimivat täydentävinä kerroksina, mutta niiden ei anneta korvata alkuperäistä oikeuslähdettä.',
          currentState:
            'Rikoslaki SOTA on tutkimus- ja tuotekehitysvaiheessa. Rikoslain selain-, aineiston tuonti- ja retrieval-arkkitehtuuria on jo rakennettu ja testattu, mutta järjestelmää ei markkinoida valmiina oikeudellisena neuvontapalveluna.',
          nextStep:
            'Seuraava vaihe on Finlex-aineiston peilin laajentaminen, aineiston tuontiprosessin ja ajallisen versionhallinnan vahvistaminen sekä hakukerroksen laadun edelleen mittaaminen. Samalla rakennetta kehitetään niin, että rikoslain rinnalle voidaan myöhemmin tuoda muita Suomen lainsäädännön kokonaisuuksia.',
          vision: {
            heading: 'Rikoslaista koko Suomen lainsäädäntöön',
            body: [
              'Rikoslaki on projektin ensimmäinen rajattu kokonaisuus. Pitkän aikavälin tavoitteena on rakentaa Finlex-datasta koko Suomen lain historiallinen hakukone: järjestelmä, josta voidaan hakea sekä nykyistä että aikaisempina ajankohtina voimassa ollutta lainsäädäntöä.',
              'Tämän tietokannan päälle voidaan myöhemmin rakentaa lähdepohjainen lakimiesbotti ja rajapinta, jonka kautta lakidata ja hakutoimet voidaan tarjota myös muille sovelluksille.',
            ],
          },
          commercialization: {
            heading: 'Kaupallistamismahdollisuudet',
            body: 'Projektissa tutkitaan mahdollisuutta tuotteistaa tietokerroksen päälle myös API-palvelu. Tämä on tulevaisuuden kaupallistamissuunta, ei tällä hetkellä julkaistu palvelu.',
            items: [
              'lähdepohjainen lakimiesbotti',
              'lainsäädännön historiallinen hakupalvelu',
              'lakidatan haku-API',
              'integraatiot muihin oikeudellisiin palveluihin',
            ],
          },
          disclaimer:
            'Rikoslaki SOTA on kehitysprojekti eikä tällä hetkellä tarjoa oikeudellista neuvontaa. Oikeudellisissa asioissa alkuperäinen lainsäädäntö ja muut viralliset oikeuslähteet ovat ensisijaisia.',
          cta: {
            heading: 'Kiinnostuitko lakidatan, API:n tai AI-avusteisen oikeudellisen haun kehityksestä?',
            label: 'Ota yhteyttä',
            href: contactPath('fi'),
          },
        },
      },
      en: {
        title: 'Rikoslaki SOTA',
        description: 'Source-grounded search, browsing and analysis system for Finnish legislation.',
        status: 'Research and development',
        detail: {
          lead:
            'Rikoslaki SOTA is a source-grounded search, browsing and analysis system for Finnish legislation. Its first limited dataset is the Finnish Criminal Code.',
          whatItIs:
            'The project aims to build a structured and historical legal-data layer from Finlex material that can be searched deterministically and whose results can be traced back to the original legal sources.\n\nThe Criminal Code is the project\'s first limited dataset. The long-term goal is a historical search engine and local data mirror covering Finnish legislation more broadly.',
          problem:
            'A generative language model is not, by itself, a reliable legal database. In legal use, it must be possible to determine which law, provision and point in time an answer is based on. Legislation also changes over time.\n\nRikoslaki SOTA is designed to separate the source material, retrieval process and AI-generated interpretation. The legislation itself forms the system\'s primary information layer. AI can operate on top of that layer, but it does not replace the original legal source.',
          solution:
            'Finlex material → ingestion and normalisation → historical legal-data mirror → search → source references → AI-assisted interpretation\n\nLegislative material obtained from Finlex is ingested into a structured database. Version and validity information is handled so that search results can be associated with the correct legal provision and the correct point in time. AI-assisted functions can then be built on top of this retrieval layer using the system\'s own source material.',
          audience: [
            'legal professionals and lawyers',
            'researchers and educational institutions working with legislation',
            'publishers and public authorities requiring precise source references',
            'developers building legal applications',
          ],
          technical:
            'The architecture emphasises deterministic retrieval, temporal correctness and verifiable source references. PostgreSQL forms the foundation of the structured legal-data layer, and the retrieval system is designed to remain source-grounded.\n\nLexical retrieval and result fusion may later be complemented by semantic search methods. AI-based methods operate as additional layers, but they are not allowed to replace the original legal source.',
          currentState:
            'Rikoslaki SOTA is in research and development. The Criminal Code browser, ingestion pipeline and retrieval architecture have already been developed and tested, but the system is not marketed as a finished legal advisory service.',
          nextStep:
            'The next step is to expand the Finlex data mirror, strengthen the ingestion process and temporal version management, and continue measuring retrieval quality. The architecture is also being developed so that additional areas of Finnish legislation can later be added alongside the Criminal Code.',
          vision: {
            heading: 'From the Criminal Code to Finnish legislation',
            body: [
              'The Criminal Code is the project\'s first limited legal corpus. The long-term objective is to build a historical search engine for Finnish legislation using Finlex data, allowing users to search both current legislation and legislation that was in force at earlier points in time.',
              'This data layer could later support a source-grounded legal assistant and an API through which legal data and retrieval functions could be made available to other applications.',
            ],
          },
          commercialization: {
            heading: 'Commercialisation possibilities',
            body: 'The project is investigating the possibility of productising an API service on top of the legal-data layer. This is a potential future commercial direction, not a currently released service.',
            items: [
              'source-grounded legal assistant',
              'historical legislation search service',
              'legal-data search API',
              'integrations with other legal services',
            ],
          },
          disclaimer:
            'Rikoslaki SOTA is a development project and does not currently provide legal advice. In legal matters, original legislation and other official legal sources remain authoritative.',
          cta: {
            heading: 'Interested in legal data, APIs or AI-assisted legal retrieval?',
            label: 'Contact us',
            href: contactPath('en'),
          },
        },
      },
    },
  },
  {
    id: 'sm-liiga-guru',
    slug: 'sm-liiga-guru',
    status: 'research',
    image: {
      src: '/images/projects/sm-liiga-guru.webp',
      alt: 'SM-LIIGA-GURU – data-driven prediction and analysis system for Finnish Liiga ice hockey games',
      fit: 'contain',
    },
    locales: {
      fi: {
        title: 'SM-LIIGA-GURU',
        description: 'SM-liigan otteluiden dataan perustuva ennuste- ja analyysijärjestelmä.',
        status: 'Tutkimus ja tuotekehitys',
        detail: {
          lead:
            'SM-LIIGA-GURU on dataan perustuva Liiga-otteluiden ennuste- ja analyysijärjestelmä, jonka tavoitteena on rakentaa otteluennusteet oman historiallisen ja ajantasaisen datakerroksen päälle.',
          whatItIs:
            'Projektin perusajatus on yksinkertainen: ottelun lopputulosta ei kysytä yleiskäyttöiseltä kielimallilta, vaan ennuste rakennetaan järjestelmällisesti kerätystä Liiga-datasta ja mitattavista muuttujista.\n\nTavoitteena on muodostaa oma tietokanta, feature-engineering-kerros, ennustemallit ja järjestelmä, jolla ennusteita voidaan myös arvioida jälkikäteen.',
          problem:
            'Yleiskäyttöinen AI voi kirjoittaa vakuuttavan analyysin ottelusta, mutta se ei itsessään takaa, että ennuste perustuu oikeaan, kyseisenä ajankohtana saatavilla olleeseen dataan tai että ennusteen laatua voidaan mitata objektiivisesti.\n\nSM-LIIGA-GURUn tavoitteena on rakentaa ennusteprosessi, jossa käytetty data, mallin käyttämät muuttujat ja ennusteen syntyhetki voidaan jäljittää.',
          solution:
            'Raakadata → normalisointi → PostgreSQL → feature-engineering → ennustemallit → ennusteen tallennus → ottelun tulos → jälkiarviointi\n\nJärjestelmässä pyritään yhdistämään historiallista ja mahdollisimman ajantasaista Liiga-dataa yhteen relaatiotietokantaan. Ennusteissa käytetään vain tietoa, joka oli oikeasti saatavilla ennen ennustettavan ottelun alkua.',
          audience: [
            'Liiga-analyysistä kiinnostuneille käyttäjille',
            'data- ja mallipohjaisesta urheiluanalyysistä kiinnostuneille',
            'kehittäjille ja tutkijoille, jotka rakentavat urheiludataan perustuvia analyysijärjestelmiä',
            'käyttäjille, jotka haluavat ymmärtää, mihin otteluennuste perustuu',
          ],
          technical:
            'SM-LIIGA-GURUn tietokerroksen perustana toimii PostgreSQL-relaatiotietokanta, johon Liiga-data normalisoidaan ja tallennetaan. Järjestelmässä rakennetaan ottelua edeltävästä tiedosta johdettuja ominaisuuksia, joiden avulla ennustemallit muodostavat ottelukohtaisia arvioita.\n\nYksi projektin tärkeimmistä periaatteista on ajallinen oikeellisuus: historiallista mallia ei saa kouluttaa tai testata tiedolla, joka tuli saataville vasta ennustettavan ottelun jälkeen. Mallien arviointi tehdään siksi kronologisesti.',
          currentState:
            'SM-LIIGA-GURU on tutkimus- ja tuotekehitysvaiheessa. Työ keskittyy ensin dataperustan, tietomallin, feature-engineeringin ja validointimenetelmän rakentamiseen sekä lähteiden kartoittamiseen.\n\nProjektista ei julkaista ennustetarkkuus- tai voittoväitteitä ennen kuin ne voidaan osoittaa kontrolloidulla historiallisella testauksella ja myöhemmin aidosti eteenpäin kulkevalla ennusteseurannalla.',
          nextStep:
             'Seuraava vaihe on datankeräimen ja relaatiotietokannan laajentaminen, ajallisesti oikeiden ominaisuuksien rakentaminen sekä ensimmäisten baseline-mallien määrittäminen. Vasta tämän jälkeen arvioidaan, kuinka paljon kehittyneemmät mallit ja AI-avusteinen konteksti parantavat ennustetta.',
          cta: {
            heading: 'Seuraa SM-LIIGA-GURUn kehitystä',
            text: 'Projekti on vielä tutkimusvaiheessa. Tuloksia julkaistaan vasta, kun järjestelmää voidaan arvioida mitattavasti ja toistettavasti.',
            label: 'Ota yhteyttä',
            href: contactPath('fi'),
          },
          data: [
            'otteluhistoria',
            'joukkueiden suorituskyky',
            'pelaajadata',
            'maalivahtidata',
            'ottelutapahtumat',
            'kokoonpanot ja muut ennen ottelua saatavilla olevat tiedot',
          ],
          dataPrinciple:
            'Järjestelmässä pyritään yhdistämään historiallista ja mahdollisimman ajantasaista Liiga-dataa yhteen relaatiotietokantaan. Ennusteiden pitää käyttää vain sellaista tietoa, joka oli oikeasti saatavilla ennen ennustettavan ottelun alkua.',
          aiRole:
            'Kielimalleja voidaan myöhemmin käyttää esimerkiksi uutisten, kokoonpanomuutosten ja muun tekstimuotoisen kontekstin tulkintaan sekä ennusteen selittämiseen. LLM ei kuitenkaan ole järjestelmän päädatalähde eikä numeerisen otteluennusteen korvike.',
          disclaimer:
            'SM-LIIGA-GURU on tutkimus- ja tuotekehitysvaiheessa. Projektin tuloksia julkaistaan vasta, kun järjestelmää voidaan arvioida mitattavasti ja toistettavasti.',
        },
      },
      en: {
        title: 'SM-LIIGA-GURU',
        description: 'Data-driven prediction and analysis system for Finnish Liiga ice hockey.',
        status: 'Research and development',
        detail: {
          lead:
            'SM-LIIGA-GURU is a data-driven prediction and analysis system for Finnish Liiga ice hockey. Its goal is to build match predictions on top of its own historical and current data layer.',
          whatItIs:
            'The project\'s core idea is simple: instead of asking a general-purpose language model who will win a match, the prediction is built systematically from collected Liiga data and measurable variables.\n\nThe goal is to create a dedicated database, feature-engineering layer, prediction models and an evaluation system that allows each prediction to be assessed retrospectively.',
          problem:
            'A general-purpose AI can produce a convincing match analysis, but that does not guarantee that the prediction is based on correct information that was actually available before the match, or that its predictive quality can be measured objectively.\n\nSM-LIIGA-GURU is designed around a prediction process in which the source data, model features and prediction timestamp can be traced.',
          solution:
            'Raw data → normalisation → PostgreSQL → feature engineering → prediction models → prediction snapshot → match result → retrospective evaluation\n\nThe system is intended to combine historical and up-to-date Liiga data in a relational database. A prediction may use only information that was available before the start of the match being predicted.',
          audience: [
            'users interested in Liiga analysis',
            'people interested in data-driven and model-based sports analysis',
            'developers and researchers building sports-data analysis systems',
            'users who want to understand what a match prediction is based on',
          ],
          technical:
            'The SM-LIIGA-GURU data layer is based on a PostgreSQL relational database into which Liiga data is normalised and stored. The system builds pre-match features from available information, which are then used by prediction models to produce match-specific assessments.\n\nOne of the project\'s most important principles is temporal correctness: a historical model must not be trained or tested using information that became available only after the match being predicted. Model evaluation is therefore performed chronologically.',
          currentState:
            'SM-LIIGA-GURU is in research and development. Current work focuses first on the data foundation, data sources, data model, feature engineering and validation methodology.\n\nNo claims about prediction accuracy or winning performance will be published until they can be demonstrated through controlled historical testing and later through genuinely forward-looking prediction tracking.',
          nextStep:
            'The next step is to expand data collection and the relational database, build temporally correct features and define the first baseline models. Only after that will more advanced models and AI-assisted contextual information be evaluated for their contribution to predictive performance.',
          data: [
            'match history',
            'team performance',
            'player data',
            'goaltender data',
            'match events',
            'line-ups and other information available before the match',
          ],
          dataPrinciple:
            'The system is intended to combine historical and up-to-date Liiga data in one relational database. Predictions must use only information that was genuinely available before the start of the match being predicted.',
          aiRole:
            'Language models may later be used to interpret news, line-up changes and other text-based context, and to help explain predictions. An LLM is not, however, the system\'s primary data source or a replacement for the numerical prediction model.',
          callout: {
            heading: 'SM-LIIGA-GURU is in research and development',
            body: [
              'Results will be published only when the system can be evaluated in a measurable and reproducible manner.',
            ],
          },
          cta: {
            heading: 'Follow the development of SM-LIIGA-GURU',
            text: 'The project is still in the research phase. Results will be published only when the system can be evaluated in a measurable and reproducible manner.',
          },
        },
      },
    },
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function projectPath(locale: Locale, slug: string): string {
  return `${categoryPath(locale, 'projects')}${slug}/`;
}

export function projectLocale(p: Project, locale: Locale): ProjectLocale {
  return p.locales[locale];
}
