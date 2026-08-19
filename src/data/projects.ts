import type { Locale } from '../i18n/config';
import { categoryPath } from '../i18n/paths';

export type ProjectStatus = 'pilot' | 'development' | 'research' | 'live';

export interface ProjectImage {
  src: string;
  alt: string;
  fit?: 'contain' | 'cover';
}

export interface ProjectCTA {
  heading: string;
  text?: string;
  label: string;
  href: string;
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
    cta: ProjectCTA;
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
            'SermoVox on reaaliaikainen monikielinen puheenkäännösjärjestelmä tilaisuuksiin. Järjestelmä muuntaa puhujan puheen tekstiksi ja välittää käännökset yleisölle lähes reaaliajansa.',
          commercialLead: 'SermoVox Local on saatavilla kertamaksullisena paikallisena ohjelmistotuotteena.',
          whatItIs:
            'SermoVox on FaktumAI:n kehittämä paikallisesti toimiva puheentunnistus- ja käännösjärjestelmä. Se on suunniteltu tilanteisiin, joissa sama puhe täytyy välittää useilla kielellä yleisölle mahdollisimman pienellä viiveellä.\n\nNykyinen tuotantosuunta keskittyy suomenkielisen puheen tunnistamiseen ja sen välittämiseen englanniksi, ukrainaksi ja venäjäksi. Järjestelmä muodostaa yhtenäisen ketjun mikrofonista puheentunnistukseen, käännökseen ja yleisölle näytettävään tekstitykseen.',
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
              'normaali käyttötuki arkisin sekä erikseen sovittavilla',
            ],
            callout: 'Paikan päällä tehtävät käyttöönotot ovat tällä hetkellä saatavissa Etelä-Pohjanmaan alueella.',
          },
          problem:
            'Monikielisissä tilaisuuksissa ammattitulkkaus voi olla kallista tai vaikeasti järjestettävää. Tavalliset kuluttajille tarkoitetut käännössovellukset eivät puolestaan ole suunniteltuja jatkuvaan puheeseen, operaattorin hallintaan ja suurelle näytölle välitettävään reaaliaikaiseen tekstitykseen.\n\nSermoVoxin tavoitteena on tarjota tähän tarkoitukseen kevyt, hallittava ja mahdollisimman pitkälle paikallisesti toimiva ratkaisu.',
          solution:
            'Mikrofomi → puheentunnistus → käännös → reaaliaikainen tiedonsiirto → operaattori- ja projektorinäkymä\n\nPuhujan ääni käsitellään paikallisesti. Puhe tunnistetaan, käännetään valituille kielille ja toimitetaan selaimessa toimivaan käyttöliittymään. Operaattori hallitsee järjestelmää omasta näkymästään ja yleisö näkee käännökset erillisessä projektori- tai näytönäkymässä.',
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
              'SermoVoxiin voidaan toimittaa korjauksia ja yhteensopivuuspäivittäisiä tuotteen kehittyessä. Päivitysmodellia kehitetään edelleen, mutta pysyvä käyttöoikeus ei ole riippuvainen jatkuvasta tilauksesta.',
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
            'SermoVox on saatavilla. Ensimmäinen asiakaskäyttöönotto on sovittu, ja järjestelmän asentamista asiakkaan käyttöympäristöön valmistellaan. Nykyinen kehitys keskittyy käyttöönottoon viimeistelyyn, puheentunnistuksen viiveeseen, audiopolun toimintavarmuuteen ja tuotantokäyttöön sopivan laitekokoonpanon varmistamiseen.',
          nextStep:
                        'Seuraava merkittävä vaihe on järjestelmän asentaminen ensimmäisen asiakkaan käyttöönottoon ja sen testaaminen aidossa tilaisuudessa. Käytetystä käyttöönotosta saatavasta kokemusta hyödyntämällä toimitusprosessia, käyttökokemusta ja tuotteen jatkokehitystä viimeistellen.',
          organisationDeployment: {
            heading: 'Ratkaisut organisaatioille ja suurempiin käyttöönottoihin',
            body: 'SermoVox Localin 599 € + alv -paketti on tarkoitettu yhden sovitun työaseman käyttöönottoon. Organisaatioille, jotka tarvitsevat useita työasemia, useita käyttöpaikkoja tai muuten laajemman kokonaisuuden, toimitus ja hinnoittelu suunnitellaan erikseen käyttötarpeen mukaan.\n\nSermoVox voidaan toteuttaa asiakkaan omassa paikallisessa IT-ympäristössä. Tällaisessa toteutuksessa puheentunnistus ja käännös voidaan käsitellä asiakkaan omalla laitteistolla ilman, että puhedataa tarvitsee lähettää ulkopuoliseen pilvikat. Tämä voi olla tärkeää organisaatioille, joilla on tavallista tiukemmat tietosuoja-, tietoturva- tai datan hallintavaatimukset.',
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
              body: 'Paikallisen SermoVox-toteutuksen keskeinen etu on mahdollisuus käsitellä puhe ja käännökset asiakkaan omassa ympäristössä. FaktumAI voi suunnitella toimitusmallin yhdessä asiakkaan IT- ja tietoturvavaatimusten kanssa.',
            },
            cta: {
              heading: 'Tarvitsetko useamman laitteen tai organisaatiokohtaisen toteutuksen?',
              text: 'Laajemmat SermoVox-toimitukset suunnitellaan asiakkaan käyttötarpeen, laitemäärän, kielten ja tietoturvavaatimusten mukaan.',
              label: 'Pyydä ratkaisu organisaatiollesi',
              href: 'mailto:marko@Faktum-AI.com?subject=SermoVox%20-%20organisaatioratkaisu',
            },
          },
          cloudOption: {
            heading: 'SermoVox Cloud — tulevaisuuden vaihtoehto',
            body: [
              'Paikallisen SermoVox Local -version rinnalle tutkitaan pilvipohjaista palvelumallia. Tavoitteena on tulevaisuudessa tarjota vaihtoehto myös asiakkaille, jotka haluavat käyttää SermoVoxia selaimessa tai pilvipalveluna ilman omaa paikallista AI-ympäristön ylläpitoa.',
              'SermoVox Cloud ei ole vielä julkaistu palvelu, eikä sille ole vahvistettua hinnoittelua tai julkaisuaikataulua.',
            ],
          },
          cta: {
            heading: 'Tarvitsetko reaaliaikaista monikielistä käännöstä?',
            text: 'SermoVox Local on saatavilla kertamaksullisena paikallisena ratkaisuna. Käydään yhdessä läpi käyttötarve, tarvittavat kielet, laitteisto ja sopiva käyttöönottomalli.\n\nSermoVox Local 599 € + alv',
            label: 'Kysy SermoVox-ratkaisusta',
            href: 'mailto:marko@Faktum-AI.com?subject=SermoVox%20Local%20-%20käyttöönotto',
            contactText: 'marko@Faktum-AI.com',
          },
        },
      },
      en: {
        title: 'SermoVox',
        description: 'Real-time multilingual speech translation.',
        status: 'Available / preparing rollout',
        detail: {
          lead:
            'SermoVox is a real-time speech recognition and translation system for multilingual events. The system converts a speaker\u2019s speech to text and delivers translations to the audience with near real-time latency.',
          whatItIs:
            'SermoVox is a locally operable speech recognition and translation system built by FaktumAI. It is designed for situations where the same speech must be conveyed to an audience in multiple languages with as little delay as possible.\n\nThe current production focus is on recognizing Finnish speech and delivering it in English, Ukrainian, and Russian. The system forms a single chain from microphone to speech recognition, translation, and on-screen captions for the audience.',
          problem:
            'In multilingual events, professional interpreters can be expensive or difficult to arrange. Consumer translation apps, in turn, are not designed for continuous speech, operator control, or large-screen real-time captioning.\n\nSermoVox aims to provide a lightweight, controlled, and as-local-as-possible solution for this need.',
          solution:
            'Microphone → Speech recognition → Translation → Real-time delivery → Operator & projector views\n\nThe speaker\u2019s audio is processed locally. Speech is recognized, translated into selected languages, and delivered to a browser-based interface. The operator controls the system from their own view, and the audience sees the translations in a separate projector or display view.',
          audience: [
            'churches and multilingual communities',
            'events and seminars',
            'associations',
            'organizations needing multilingual communication',
            'potentially municipalities and other public bodies later',
          ],
          technical:
            'The current SermoVox implementation uses GPU-accelerated speech recognition, local translation models, a FastAPI backend, and WebSocket-based real-time delivery. The UI consists of a separate operator view and a projector/display view for the audience.\n\nSystem design emphasizes local processing, low latency, reliability, and independence from external cloud services in production use.',
          currentState:
            'SermoVox is available. A first customer has been agreed, and deployment at the customer\u2019s premises is being prepared. Current development focuses on speech recognition latency, audio-path reliability, and finalizing a production-ready hardware setup.',
          nextStep:
            'The next significant step is installing the system at the customer\u2019s venue and testing it in a real event. Insights from this deployment will feed into productization and the planning of further use cases.',
          organisationDeployment: {
            heading: 'Solutions for organisations and larger deployments',
            body: 'The €599 + VAT SermoVox Local package covers deployment on one agreed workstation. Organisations requiring multiple workstations, multiple locations or a broader deployment can receive a separately designed and priced solution.\n\nSermoVox can be deployed inside the customer\u2019s own local IT environment. In such a deployment, speech recognition and translation can be processed on infrastructure controlled by the customer without requiring speech data to be sent to an external cloud service.',
            items: [
              'multiple SermoVox workstations',
              'multiple deployment locations',
              'centralised rollout',
              'customer-owned hardware',
              'custom device configurations',
              'local or customer-controlled server environments',
              'support service scope',
              'customer-specific language and environment requirements',
              'potential future cloud or hybrid deployment',
            ],
            callout: {
              heading: 'Data under the customer\'s control',
              body: 'The central benefit of a local SermoVox deployment is the ability to process speech and translations within the customer\u2019s own environment. FaktumAI can design the delivery model together with the customer\u2019s IT and security requirements.',
            },
            cta: {
              heading: 'Need multiple devices or an organisation-level deployment?',
              text: 'Larger SermoVox deployments are planned according to the customer\u2019s usage needs, number of devices, languages, and security requirements.',
              label: 'Request a solution for your organisation',
              href: 'mailto:marko@Faktum-AI.com?subject=SermoVox%20-%20organisaatioratkaisu',
            },
          },
          cta: {
            heading: 'Need real-time multilingual translation?',
            text: 'SermoVox Local is available as a one-off on-premises solution. We will go through your use case, required languages, hardware, and the right deployment model together.\n\n€599 + VAT',
            label: 'Inquire about SermoVox',
            href: 'mailto:marko@Faktum-AI.com?subject=SermoVox%20-%20on-premises',
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
            'Ilmoita olemasi liikkeellä → löydä muita → lähetä kutsu → toinen käyttäjä hyväksyy → keskustelu ja tapaaminen\n\nKäyttäjä luo väliaikaisen profiilin ja voi ilmoittaa olevansa liikkeellä. Palvelussa voidaan löytää muita käyttäjiä ja lähettää kutsu yhteyden muodostamiseksi. Keskinusken avautuu vasta, kun toinen käyttäjä on hyväksynyt kontaktin.',
          audience: [
            'ihmisille, jotka etsivät seuraa illanviettoon',
            'tapahtumiin lähteville',
            'uudessa kaupungissa oleville käyttäjille',
            'ihmisille, jotka haluavat löytää uusia tuttavuuksia kevyesti ja nopeasti',
          ],
          technical:
            'Party Buddy on Flutterilla toteutattu mobiilisovellus, jonka backend perustuu Supabaseen. Palvelussa hyödynnetään relaatiotietokantaa, reaaliaikaisia toimintoja ja käyttöoikeuksien hallintaa.\n\nArkkitehtuuri on suunniteltu väliaikaiselle käyttäjädatalle. Käyttäjätietojen elinkaarta hallitaan automaattisilla poistoprosesseilla, ja päästä päähän salattu viestintä toteutetaan päästä päähän salattuna.',
          currentState:
            'Party Buddyn keskeinen toiminnallisuus on rakennettu, ja projekti valmistautuu suljettuun käyttäjätestaukseen ennen Google Play -julkaisua. Testauksessa keskitytään käytettävyyteen, toimintavarmuuteen, tietojen automaattiseen poistumiseen, yksityisen viestinnän toimintaan ja todellisessa käytössä havaittaviin ongelmiin.',
          nextStep:
            'Seuraava vaihe on suljettu testaus todellisilla käyttäjillä. Testauksen perusteella korjataan havaitut ongelmat, viimeistellään käytettävyyttä ja valmistellaan sovellusta Google Play -julkaisua varten.',
          privacy: {
            heading: 'Yksityisyys suunnittelun lähtökohtana',
            intro: [
              'Party Buddy on suunniteltu hetkelliseen käyttöön eikä pysyväksi sosiaalisen median profiiliksi. Käyttäjältä ei pyydetä sähköpostiosoitetta, salasana tai muuta perinteistä kirjautumistunnusta. Palvelun toimintamalli ei perustu pitkäikäisten kirjautumistietojen tai käyttäjäprofiilien keräämiseen.',
              'Party Buddyyn tallennetut käyttäjätiedot poistetaan automaattisesti 24 tunnin kuluttua käytöistunnon alkamisesta, ellei käyttäjä poista tietoja jo sitä ennen. Käyttäjä voi siis poistaa omat tietonsa myös itse ennen automaattisen säilytysajan päättymistä.',
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
              'Testaajaksi osallistuminen ei edellytä teknistä osaamista. Tärkeintä on käyttää sovellusta normaalisti ja kertoa, mikä toimii, mikä tuntuu epäselvältä ja mitä pitäisi parantaa.',
              'Testauksessa arvioidaan myös tietojen automaattista poistumista, yksityisyysmallia ja viestinnän toimivuutta käytännössä.',
            ],
            cta: {
              heading: 'Hae testaajaksi',
              label: 'Hae testaajaksi',
              href: 'mailto:marko@Faktum-AI.com?subject=Party%20Buddy%20-%20haluan%20testaajaksi',
            },
            contactText: 'marko@Faktum-AI.com',
          },
        },
      },
      en: {
        title: 'Party Buddy',
        description: 'Local event and meetup platform.',
        status: 'Closed beta / preparing release',
        detail: {
          lead:
            'Party Buddy is a mobile app for people who want to find company from the same city when they are heading out, to an event, or otherwise looking to meet new people.',
          whatItIs:
            'Party Buddy is built around one simple idea: who else is out right now?\n\nThe service is not meant to become another general-purpose social network. Party Buddy focuses on short-term encounters and making it easy to find other people in the same city, form a connection, and agree on a meetup.',
          problem:
            'Existing social platforms are often built around long-lived profiles, follower networks, and continuous content publishing. They handle poorly the simple situation where a user wants to go out today but does not know who else is around.\n\nParty Buddy aims to make this as simple as possible.',
          solution:
            'Announce you are out → Find others → Send an invite → The other user accepts → Chat and meet up\n\nThe user creates a profile and can announce they are out. Other users can be found and invited to connect. A chat opens once the contact is accepted.',
          audience: [
            'people looking for company to go out for the evening',
            'people heading to events',
            'users new to a city',
            'people who want to make new acquaintances easily and quickly',
          ],
          technical:
            'Party Buddy is a mobile app built with Flutter and a Supabase-backed architecture. The service uses a relational database, real-time functionality, and access control.\n\nThe architecture is designed for temporary user data. User data lifetime is managed by automatic deletion processes, and the security of private messaging is reinforced with end-to-end encryption.',
          currentState:
            'The core functionality of Party Buddy is built and the project is moving into a closed user test. The goal is to collect feedback from real users on usability, features, and any issues before releasing to Google Play.',
          nextStep:
            'The next phase is a closed beta with real users. Based on the feedback, we will fix identified issues, finalize the user experience, and prepare the app for Google Play release.',
          privacy: {
            heading: 'Privacy as a design starting point',
            deletionHeading: 'Why only 24 hours?',
            deletionBody: [
              'All Party Buddy user accounts, messages, and match records are automatically deleted 24 hours after creation. The service has no persistent accounts and no long-lived profile data. This means no person — not even Marko at FaktumAI — can retrieve old messages or see who was ever online.',
              'The 24-hour window is set as short as possible while still covering all real-use situations observed in testing: evening outings, concerts, cultural events, and casual meetups. This ensures there is no room for user data to accumulate.',
            ],
            nonTraditionalHeading: 'Party Buddy is not a traditional social service',
            nonTraditionalBody: [
              'Traditional social platforms are built around long-lived profiles, follower networks, and continuous content publishing. Party Buddy takes the opposite direction: no persistent profile data is stored, and there is no follower feature at all.',
              'User accounts are temporary, messages are end-to-end encrypted, and all data on the service is deleted 24 hours after creation. This means identity is not a persistent handle — it is a short-lived window during which a user can be online and interact with others.',
            ],
          },
          callout: {
            heading: 'We are looking for Party Buddy testers',
            body: [
              'Party Buddy is approaching the closed beta phase before Google Play release. We are looking for users to try the app in real-life situations and give feedback on usability, features, and any issues. The goal is to finalize the app before a wider release.',
              'No technical experience is required to participate as a tester. What matters is using the app normally and reporting what works, what feels unclear, and what should be improved.',
              'The test also evaluates automatic data deletion, the privacy model, and the functionality of end-to-end encrypted messaging in practice.',
            ],
            cta: {
              heading: 'Apply as a tester',
              label: 'Apply as a tester',
              href: 'mailto:marko@Faktum-AI.com?subject=Party%20Buddy%20-%20haluan%20testaajaksi',
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
            'Shopify Sale Manager syntyi käytännön verkkokauppatarpeesta: alennusmyyntien hallinnan pitää olla nopeaa, hallittavaa ja turvallista myös silloin, kun verkkokaupassa on paljon tuotteita ja tuotevariantteja.\n\nRatkaisun tavoitteena on tehdä kampanjojen ja tarjoushintojen hallinnasta järjestelmällisemmaksi ja vähentää Shopify-kaupassa tehtävää toistuvaa manuaalista työtä.',
          problem:
            'Verkkokaupan alennusmyyntien hallinta muuttuu nopeasti työlääksi, kun tuotteita, tuotevariantteja ja eri hintatasoja on paljon. Hintojen muuttaminen käsin kasvattaa työmäärää ja lisää virheiden riskiä.\n\nShopify Sale Manager keskittää alennusmyyntien hinnanhallintaa yhteen hallittavaan prosessiin.',
          solution:
            'Kauppias hallitsee alennusmyyntiin liittyviä tuotteita ja hintoja Shopify-ympäristössä Sale Managerin avulla. Työkalu automatisoi toistuvia hinnanhallinnan vaiheita ja vähentää tarvetta tehdä samoja muutoksia käsin tuote tai variantti kerrallaan.',
          audience: [
            'Shopify-verkkokaupille',
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
            href: 'mailto:marko@Faktum-AI.com?subject=Shopify%20Sale%20Manager',
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
        description: 'Shopify store sales management and automation solution.',
        status: 'Live / productization',
        detail: {
          lead:
            'Shopify Sale Manager is a tool built for managing discount sales in Shopify stores. It helps automate price handling and reduces manual price maintenance.',
          whatItIs:
            'Shopify Sale Manager originated from a practical e-commerce need: managing discount sales must be fast, controlled, and safe even when a store has many products and variants.\n\nThe goal of the solution is to make campaign and discount-price management more systematic and reduce repetitive manual work in the Shopify store.',
          problem:
            'Managing discount sales in a web store quickly becomes cumbersome when there are many products, variants, and different price tiers. Manual price changes increase workload and the risk of errors.\n\nShopify Sale Manager aims to centralize this work into one controlled process.',
          solution:
            'The merchant manages discount-sale-related products and prices in the Shopify environment using Sale Manager. The tool automates repetitive price-management tasks and reduces the need to make the same changes manually per product.',
          audience: [
            'Shopify store owners',
            'stores with many products or variants',
            'stores running recurring campaigns',
            'operators who want to reduce manual price management',
          ],
          technical:
            'Shopify Sale Manager is built for the Shopify environment and leverages the application and admin APIs Shopify provides. The implementation aims to stay as close to the Shopify platform as possible and minimize unnecessary separate infrastructure.',
          currentState:
            'Shopify Sale Manager is live in production and is being further developed toward a productized solution. Real production usage gives development a genuine environment in which the tool\u2019s operation and usability can be evaluated within actual store processes.',
          nextStep:
            'The next phase is finalizing based on production experience, improving overall usability, and evaluating the next steps related to Shopify distribution.',
          cta: {
            heading: 'Do you need more efficient discount-sales management for your Shopify store?',
            label: 'Get in touch',
            href: 'mailto:marko@Faktum-AI.com?subject=Shopify%20Sale%20Manager',
          },
          productionReference: {
            sourceName: 'H&J Pirttinen',
            sourceUrl: 'https://pirttinen.fi/',
            linkLabel: 'View the store →',
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
            'Finlex-aineisto → aineiston tuonti ja normalisointi → historiallinen lakipeili → haku → lähdeviitteet → AI-avusteinen tulkinta\n\nFinlexistä saatava lainsäädäntöaineisto tuodaan omaan rakenteiseen tietokantaan. Aineiston versio- ja voimassaolotietoja käsitellään niin, että hakutulos voidaan yhdistää oikeaan lainkohtaan ja oikeaan ajalliseen tilanteeseen. Hakukerroksen päälle voidaan rakentaa AI-avusteiset toimintoja, jotka käyttävät järjestelmän omia lähteitä.',
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
            body: 'Projektissa tutkitaan mahdollisuutta tuottaa tietokerroksen päälle myös API-palvelu. Tämä on tulevaisuuden kaupallistamissuunta, ei tällä hetkellä julkaistu palvelu.',
            items: [
              'lähdepohjainen lakimiesbotti',
              'lainsäädännön historiallinen hakupalvelu',
              'lakidatan haku-API',
              'integraatiot muihin oikeudellisiin palveluihin',
            ],
          },
          disclaimer:
            'Rikoslaki SOTA on kehitysprojekti eikä tällä hetkellä tarjoa oikeudellista neuvontaa. Oikeudellisissa asioissa alkuperäisen lainsäädäntö ja muut viralliset oikeuslähteet ovat ensisijaisia.',
          cta: {
            heading: 'Kiinnostuitko lakidatan, API:n tai AI-avusteisen oikeudellisen haun kehityksestä?',
            label: 'Ota yhteyttä',
            href: 'mailto:marko@Faktum-AI.com?subject=Rikoslaki%20SOTA',
          },
        },
      },
      en: {
        title: 'Rikoslaki SOTA',
        description: 'Source-based search and analysis system for the Finnish criminal code.',
        status: 'Research & product development',
        detail: {
          lead:
            'Rikoslaki SOTA is a source-based search, browsing, and analysis system for Finnish legislation. Its first restricted scope is the Finnish criminal code.',
          whatItIs:
            'The project aims to build its own structured and historical legal knowledge base from the Finlex corpus, queryable deterministically and citable back to the original legal sources.\n\nThe criminal code is the project\u2019s first restricted scope. The long-term goal is a historical search engine for all of Finnish legislation and a legal data mirror.',
          problem:
            'A general-purpose language model is not by itself a reliable legal database. In legal use, you need to know which law, which section, and which point in time a conclusion is based on. In addition, legal content changes over time.\n\nRikoslaki SOTA separates the source, the search, and the AI interpretation. The law is the system\u2019s authoritative database; AI can operate on top of it, but it does not replace the original source.',
          solution:
            'Finlex corpus → ingest and normalization → historical legal database → search/retrieval → source citations → AI-assisted interpretation\n\nLegislative data from Finlex is brought into its own structured database. Version and validity data are handled so that a search result can be tied to the correct legal section and point in time. Search results can then be supplemented with AI-based methods.',
          audience: [
            'legal professionals and lawyers',
            'researchers and students of legislation',
            'publishers and authorities needing precise sources',
            'developers building legal applications',
          ],
          technical:
            'The project architecture emphasizes deterministic search, temporal correctness, and citable sources. PostgreSQL is the foundation for the structured legal data, and the retrieval layer is built primarily source-based. Semantic and AI-based methods can be used as supplementary layers, but they must not replace the canonical source.',
          currentState:
            'Rikoslaki SOTA is in research and product development. The criminal-code browser, ingest, and retrieval architecture have been built and tested, but the system is not marketed as a finished legal advisory service.',
          nextStep:
            'The next step is expanding data collection and the relational database, building point-in-time features, and defining the first baseline models. Only then will we evaluate how much more advanced models and AI-assisted context improve the search.',
          cta: {
            heading: 'Interested in legal data, APIs, or AI-assisted legal search development?',
            label: 'Get in touch',
            href: 'mailto:marko@Faktum-AI.com?subject=Rikoslaki%20SOTA',
          },
          vision: {
            heading: 'From the criminal code to all of Finnish legislation',
            body: [
              'The criminal code is the project\u2019s first restricted scope. The long-term goal is to build a historical search engine for all of Finnish law from Finlex data: a system from which you can search both current and past versions of legislation that were in force at any given time.',
              'On top of this database we can later build a source-based legal assistant bot and an API through which legal data and search functions can be offered to other applications.',
            ],
          },
          commercialization: {
            heading: 'Commercialization possibilities',
            body: 'The project also explores building an API service on top of the database. This is a future commercialization direction, not a currently published service.',
            items: [
              'source-based legal assistant bot',
              'historical legal search service',
              'legal data search API',
              'integrations with other legal services',
            ],
          },
          disclaimer:
            'Rikoslaki SOTA is a development project and does not currently provide legal advice. In legal matters the original legislation and other official legal sources are primary.',
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
            'Projektin perusajatus on yksinkertainen: ottelun lopputulasta ei kysytä yleiskäyttöiseltä kielimallilta, vaan ennuste rakennetaan järjestelmällisesti kerätystä Liiga-datasta ja mitattavista muuttujista.\n\nTavoitteena on muodostaa oma tietokanta, feature-engineering-kerros, ennustemallit ja järjestelmä, jolla ennusteita voidaan myös arvioida jälkikäteen.',
          problem:
            'Yleiskäyttöinen AI voi kirjoittaa vakuuttavan analyysin ottelusta, mutta se ei itsessään takaa, että ennuste perustuu oikeaan, ajankohtaan mukaan saatavilla olleeseen dataan tai että ennusteen laatua voidaan mitata objektiivisesti.\n\nSM-LIIGA-GURUn tavoitteena on rakentaa ennusteprosessi, jossa käytetty data, mallin käyttämät muuttujat ja ennusteen syntyhetki voidaan jäljittää.',
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
            'SM-LIIGA-GURU on tutkimus- ja tuotekehitysvaiheessa. Työ keskittyy ensin dataperustaan, lähteiden, tietomallin, feature-engineeringin ja validointimenetelmän rakentamiseen.\n\nProjektista ei julkaista ennustetarkkuus- tai voittoväitteitä ennen kuin ne voidaan osoittaa kontrolloidulla historiallisella testauksella ja myöhemmin aidosti eteenpäin kulkevalla ennusteseurannalla.',
          nextStep:
            'Seuraava vaihe on datankeräännin ja relaatiotietokannan laajentaminen, ajallisesti oikeiden ominaisuuksien rakentaminen sekä ensimmäisten baseline-mallien määrittäminen. Vasta tämän jälkeen arvioidaan, kuinka paljon kehittyneemmät mallit ja AI-avusteinen konteksti parantavat ennustetta.',
          cta: {
            heading: 'Seuraa SM-LIIGA-GURUn kehitystä',
            text: 'Projekti on vielä tutkimusvaiheessa. Tuloksia julkaistaan vasta, kun järjestelmää voidaan arvioida mitattavasti ja toistettavasti.',
            label: 'Ota yhteyttä',
            href: 'mailto:marko@Faktum-AI.com?subject=SM-LIIGA-GURU',
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
        description: 'Data-driven prediction and analysis system for Finnish Liiga ice hockey games.',
        status: 'Research and development',
        detail: {
          lead:
            'SM-LIIGA-GURU is a data-driven prediction and analysis system for Liiga games, whose goal is to build match forecasts on top of its own historical and current data layer.',
          whatItIs:
            'The core idea of the project is simple: the final result of a match is not asked of a general-purpose language model, but the forecast is built systematically from collected Liiga data and measurable variables.\n\nThe goal is to form its own database, feature engine, prediction models and system with which predictions can also be evaluated retrospectively.',
          problem:
            'General-purpose AI can write a convincing analysis of a match, but it does not by itself guarantee that the forecast is based on correct, time-valid data, or that the quality of the forecast can be measured objectively.\n\nSM-LIIGA-GURU aims to build a forecasting process in which the data, the variables used by the model and the time the forecast was made can be traced.',
          solution:
            'Raw data → normalization → PostgreSQL → feature engine → prediction models → prediction snapshot → match result → post-evaluation\n\nThe system aims to combine historical and as-up-to-date-as-possible Liiga data into a single relational database. Forecasts must only use information that was genuinely available before the start of the predicted match.',
          audience: [
            'those interested in Liiga analytics',
            'users familiar with data and data sources',
            'projects building match analysis tools',
          ],
          technical:
            'SM-LIIGA-GURU uses a PostgreSQL database where Liiga data is normalized and stored. A feature engine transforms raw data into model-ready inputs, and a chronological validation process ensures forecasts are never trained on data that became available after the predicted match.',
          currentState:
            'SM-LIIGA-GURU is in research and product development. Work focuses first on building the data foundation, sources, data model, feature engineering, and validation methodology.\n\nThe project does not publish forecast accuracy or win-rate claims until they can be demonstrated through controlled historical testing and a continuously running forecast follow-up.',
          nextStep:
            'The next step is expanding data collection and the relational database, building point-in-time features, and defining the first baseline models. Only after that will we evaluate how much more advanced models and AI-assisted context improve the forecast.',
          cta: {
            heading: 'Follow the development of SM-LIIGA-GURU',
            text: 'The project is still in the research phase. Results are published only when they can be measured and reproduced.',
            label: 'Get in touch',
            href: 'mailto:marko@Faktum-AI.com?subject=SM-LIIGA-GURU',
          },
          data: [
            'match history',
            'team performance',
            'player data',
            'goaltender data',
            'match events',
            'lineups and other information available before the match',
          ],
          dataPrinciple:
            'The system aims to combine historical and as-up-to-date-as-possible Liiga data into a single relational database. Forecasts must only use information that was genuinely available before the start of the predicted match.',
          aiRole:
            'Language models can later be used, for example, to interpret news, lineup changes, and other text-based context, as well as to explain forecasts. An LLM is not, however, the system\u2019s canonical data source nor a substitute for numerical match forecasts.',
          disclaimer:
            'SM-LIIGA-GURU is in research and product development. The project does not present forecasts as betting advice, nor is it a gambling product. Results are published only when they can be measured and reproduced.',
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
