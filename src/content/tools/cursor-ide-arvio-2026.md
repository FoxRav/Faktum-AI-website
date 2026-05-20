---
title: "Cursor ja yksi kehittäjä: miten Faktum AI rakennettiin agenttityökalulla"
description: "Case study: kaksikielinen tekoälyjulkaisu www.faktum-ai.com — Astro, Cloudflare ja Cursor-agentit. Yksi ihminen ohjaa, työ etenee."
date: 2026-05-12T16:00:00
updated: 2026-05-20T22:08:24
author: "Faktum AI"
category: "Työkalut"
tags:
  - Cursor
  - IDE
  - AI-kehitys
  - Astro
  - yksinäinen kehittäjä
status: published
readingTime: "9 min"
heroImage: "/images/articles/2026/05/2026-05-20-220824_cursor-ide-arvio-2026/hero5.webp"
heroAlt: "Yksi kehittäjä orkestroi julkaisusivuston rakentamista AI-avusteisella editorilla"
heroCaption: "Kuvitus · Faktum AI"
needsFactCheck: false
imageRequestsCompleted: true
featured: false
sources:
  - title: "Cursor dokumentaatio"
    url: "https://docs.cursor.com/"
    publisher: "Cursor"
  - title: "Astro dokumentaatio"
    url: "https://docs.astro.build/"
    publisher: "Astro"
  - title: "Cloudflare Pages"
    url: "https://developers.cloudflare.com/pages/"
    publisher: "Cloudflare"
keyClaims:
  - "Faktum AI on kaksikielinen julkaisusivusto, jonka yksi kehittäjä ohjaa Cursor-agenttien avulla — ei erillistä backend- tai sisältötiimiä."
  - "Pinot: Astro 6, TypeScript, Tailwind 4, MDX, Cloudflare Pages + KV-kävijälaskuri, GitHub-deploy."
  - "Cursor toimii orkesterinjohtajana, kun repossa on selkeä ohjekirja, julkaisupolku raakamateriaalista tuotantoon ja samat toistettavat komennot joka sessiossa."
  - "Työkalu sopii erityisesti pienelle toimijalle, joka hallitsee perusasiat: repo, branch, buildin onnistuminen ja sisällön hyväksyntä."
  - "Agentti nopeuttaa rutiinia; ihminen pitää päätösvallan julkaisuun, faktantarkistukseen ja tuotantoon."
---

## Mikä työkalu on — ja mitä tämä artikkeli todistaa?

**Cursor** on AI-avusteinen koodieditori (VS Code -pohjainen), jossa chat, Composer ja agentit näkevät koko projektikontekstin. Se ei ole taikatemppu — se on **orkesterinjohtaja**, kun ihminen tietää mihin suuntaan mennä.

Tämä artikkeli ei ole geneerinen feature-lista. Se on **case study** projektista, jota luet juuri nyt: **[Faktum AI](https://www.faktum-ai.com)** — kaksikielinen tekoälyuutis- ja analyysisivusto, jota yksi ihminen rakentaa ja ylläpitää Cursorin avulla. Sivusto on pieni mittakaavassa, mutta rehellinen: siinä on artikkeleita, kuvia, kaksi kieltä, hakukoneoptimointi, RSS ja tuotantodeploy. Juuri se riittää näyttämään, miten tehokasta työskentely voi olla, kun sisäistää työkalun roolin.

> **Faktum AI:n näkökulma:** Kirjoitus perustuu omaan käyttökokemukseen. Emme edusta Cursoria virallisesti — mutta projekti on konkreettinen esimerkki siitä, miksi työkalu ansaitsee vakavan huomion myös pieneltä toimijalta.

## Mitä Faktum AI on?

Lyhyesti: **suomenkielinen tekoälyjulkaisu**, jossa on myös englanninkielinen versio osoitteessa `/en/`. Sisältö jaetaan neljään tyyppiin:

| Tyyppi | Suomi | Englanti |
| --- | --- | --- |
| Uutiset | `/uutiset/` | `/en/news/` |
| Analyysit | `/analyysit/` | `/en/analysis/` |
| Haastattelut | `/haastattelut/` | `/en/interviews/` |
| Työkalut | `/tyokalut/` | `/en/tools/` |

Artikkelit elävät repossa Markdown/MDX-tiedostoina. Sivusto buildataan staattiseksi HTML:ksi — nopea, halpa hostata, helppo deployata. Kohderyhmä on IT- ja AI-alan ammattilaiset: rakentajat, jotka haluavat ymmärrettävää analyysia ilman hypea.

Tämä ei ole startup, jolla on 15 kehittäjää. Se on **julkaisuala, jota yksi ihminen voi pyörittää**, kun työkalu hoitaa raskaan toistotyön.

## Miten sivusto on rakennettu?

Tekninen pino on moderni mutta ei eksotiikkaa — tarkoituksella:

| Kerros | Valinta | Miksi |
| --- | --- | --- |
| **Framework** | Astro 6 + TypeScript | Nopea staattinen sivusto, MDX-artikkelit, vähän JavaScriptiä lukijalle |
| **Tyylit** | Tailwind CSS 4 | Yhtenäinen ulkoasu ilman raskasta komponenttikirjastoa |
| **Sisältö** | Content Collections + Zod | Artikkelien frontmatter validoidaan buildissa |
| **Hosting** | Cloudflare Pages | `git push` → automaattinen build → www.faktum-ai.com |
| **Laskuri** | Cloudflare Workers KV | Yksinkertainen `/api/visit` — ei evästeitä, ei analytiikkaskriptejä |
| **Lähdekoodi** | GitHub (`FoxRav/Faktum-AI-website`) | Yksi branch (`main`), selkeä historia |
| **Node** | ≥ 22.12 | Astro 6 -vaatimus |

Sivustolla on myös käytännön julkaisutekninen kerros, jota kävijä ei näe:

- **hreflang** ja kielivalitsin (FI | ENG)
- **sitemap**, **RSS**, **JSON-LD** (NewsArticle, BreadcrumbList)
- **Open Graph** -kuvat artikkeleista
- **`npm run prepare-hero`** — hero-kuvien polut aikaleimattuina
- **`editorial/`-kansio** — inbox, analyysi, luonnokset, kuvapyynnöt (ei mene GitHubiin julkaistavaksi sisällöksi)
- **sisäinen handbook** — Cursor-agentin “ohjekirja”, miten artikkeli syntyy alusta loppuun

Kaikki tämä on rakennettu **askel askeleelta** Cursorin kanssa — ei valmiina pohjana ostettuna.

## Cursor orkesterinjohtajana — miten työ oikeasti etenee

Ilman Cursoria saman projektin tekeminen onnistuisi silti — mutta hitaammin ja yksinäisemmin. Cursorin ydinarvo Faktum AI:lle ei ole “kirjoita rivi puolestani”, vaan **koko kontekstin hallinta**:

1. **Agentti lukee repoa** — `src/`, `content.config.ts`, layoutit, i18n-polut.
2. **Agentti lukee handbookin** — julkaisusäännöt, frontmatter, kaksikielisyys, commit-kuri.
3. **Käyttäjä antaa raakamateriaalin** — transkripti, PDF tai aihe.
4. **Agentti tuottaa putken** — extracted notes → artikkeli → kuvapyyntö → MDX → `npm run build`.
5. **Ihminen tarkistaa** — suomen kieli, faktat, sävy, kuvituskuva, push tuotantoon.

Tyypillinen artikkelisessio (kuten [EU AI Act -uutinen](/uutiset/eu-ai-act-suomi-tulkinta/)) sisältää: lähteen läpikäynnin, kaksikielisen tekstin, editorial-tiedostot, kuvituskuvan polun, build-varmistuksen ja commitin — agentilta **noin tunti**; suurin osa ajasta kuluu silti **tekstien läpikäyntiin**. **Yksi ohjaaja.**

Se on eri asia kuin “kysy ChatGPT:ltä artikkeliluonnos”. Cursor **muokkaa tiedostoja repossa**, ajaa komentoja ja muistaa projektin rakenteen.

### Mitä yksi ihminen tekee vs. mitä agentti tekee

| Ihminen | Cursor-agentti |
| --- | --- |
| Päättää aiheen ja sävyn | Lukee lähdemateriaalin ja ohjekirjan |
| Hyväksyy julkaisun | Kirjoittaa ja päivittää MDX/MD |
| Korjaa suomen kielen | Ehdottaa rakennetta, tagit, SEO-kentät |
| Valitsee kuvituskuvan (GPT + export) | Luo kuvapyynnön ja polun kuvituskuvaan |
| Lähettää valmiin version tuotantoon (`git push`) | Ajaa buildin, valmistelee commitin pyynnöstä |

Tämä jako on tärkeä: **Cursor ei korvaa toimitusta**. Se korvaa sen, ettei yksinäinen tekijä joudu uudelleenkeksimään jokaista Astro-reittiä ja frontmatter-kenttää.

## Miksi tämä toimii pienelle toimijalle?

Kolme syytä, miksi Faktum AI on hyvä esimerkki — ja miksi Cursor ansaitsee kiitosta:

### 1. Kynnys on matala, jos perusasiat hallussa

Et tarvitse PhD:tä koneoppimisesta. Tarvitset:

- ymmärryksen siitä, mitä repo sisältää (`git status`, branchit)
- kyvyn ajaa `npm install`, `npm run dev`, `npm run build`
- halun tarkistaa agentin tuotoksen ennen commitia
- selkeän “totuuden lähteen” (meillä: sisäinen handbook)

Kun nämä ovat kunnossa, **lähes kuka tahansa motivoitunut tekijä** pystyy orkestroimaan samanlaista julkaisuputkea. Cursor madaltaa “ensimmäisen artikkelin” kitkaa dramaattisesti.

### 2. Skaala on oikea harjoitteluun

Faktum AI ei ole jättiprojekti. Se on **pieni julkaisusivusto**, joka silti toimii oikeasti verkossa — omalla osoitteella, kahdella kielellä ja oikeilla artikkeleilla. Opit:

- sisällön mallintamisen (collections)
- i18n-reitityksen
- CI/CD-tyyppisen deployn (Cloudflare)
- agenttityön kurinalaisuuden (handbook, checklist)

Pieni projekti, **oikeat tuotantovaatimukset** — juuri siihen Cursor sopii erinomaisesti.

### 3. Nopeus muuttuu motivaatioksi

Ennen agenttityökaluja samanlaisen julkaisupalvelun rakentaminen tyhjästä pöydästä — oma osoite, kaksi kieltä, julkaisu tuotantoon — olisi **viikkojen projekti**. **Faktum AI:n runko valmistui päivässä.** Yksittäinen artikkeli agentin avulla **noin tunnissa**; suurin osa ajasta on silti tekstien tarkistusta. Kun perusta on kasassa, julkaisutahti on kilpailuetu pienelle medialle.

## Rajoitteet — rehellisesti

Cursor ei poista vastuuta:

- **Pilvimalli** — koodia ja kontekstia käsitellään Cursorin politiikan mukaan; yrityskäytössä lue ehdot.
- **Faktantarkistus** — agentti voi hallusinoida; `needsFactCheck` ja lähdeaineisto ovat pakollisia analyyseissä.
- **Kieli** — suomen kielen hienovaraisuus vaatii ihmisen silmän. Perustyössä käytän Composer 2.5 -mallia, en huippumalleja, joten tekoälyllä oli vielä työtä saada suomi kuntoon — EU AI Act -artikkelin hienosäätö on hyvä esimerkki.
- **Ei korvaa arkkitehtia** — suuren tuotteen suunnitteluun tarvitaan edelleen kokemusta; Cursor nopeuttaa toteutusta.

Hyvä työkalu tekee rajoitteet näkyviksi nopeammin — ja antaa aikaa korjata ne.

## Johtopäätös: miksi Cursor ansaitsee paikan pöydässä

Faktum AI on todiste, ei lupaus: **yksi ihminen voi pyörittää kaksikielistä tekoälyjulkaisua** modernilla pinolla, kun Cursor hoitaa kontekstin, toistot ja build-putken.

Emme väitä, että jokainen projekti on yhtä suoraviivainen. Väitämme, että **pienen toimijan kynnys laskee** — ja että työkalu on kypsä tuotantokäyttöön, kun ohjaat sitä itse etkä odota, että se tietää kaiken puolestasi.

Jos rakennat sisältöä, työkaluja tai niche-medioita yksin tai pienellä tiimillä, Cursor on tällä hetkellä **vähän aliarvostettu kilpailuetu**. Faktum AI on rakennettu sen varaan — ja se näkyy osoitteessa, jossa olet nyt.

*Tulevaisuudessa toivomme Cursor-yhteistyötä virallisempaan suuntaan. Tämä artikkeli kertoo miksi se olisi luonteva jatkumo — ei mainos, vaan dokumentoitu kokemus.*
