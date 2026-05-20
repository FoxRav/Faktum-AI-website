---
title: "EU AI Act pk-yritykselle: viisi tapaa, joilla sääntely osuu kovimmin pieneen toimistoon"
description: "EU:n tekoälyasetus on voimassa. Viisihenkiselle suomalaiselle dev-toimistolle se ei ole abstrakti oikeusnormi vaan laskutettavia tunteja, menetettyjä diilejä ja kenttä, joka kallistuu jättiläisten puolelle."
date: 2026-05-18T10:00:00
updated: 2026-05-20T21:07:55
author: "Faktum AI"
category: "Uutiset"
tags:
  - EU AI Act
  - sääntely
  - Suomi
  - pk-yritykset
  - ohjelmistokehitys
status: published
readingTime: "9 min"
heroImage: "/images/articles/2026/05/2026-05-20-210755_eu-ai-act-suomi-tulkinta/hero4.webp"
heroAlt: "Pieni ohjelmistotiimi sääntelypapereiden painon alla — EU AI Act -uutiskuvitus"
heroCaption: "Kuvitus · Faktum AI"
needsFactCheck: true
imageRequestsCompleted: true
featured: false
sources:
  - title: "High-level summary of the AI Act"
    publisher: "Future of Life Institute / artificialintelligenceact.eu"
    date: "2024-05-30"
    url: "https://artificialintelligenceact.eu/high-level-summary/"
  - title: "Asetus (EU) 2024/1689 — tekoälyasetus"
    publisher: "EUR-Lex"
    date: "2024"
    url: "https://eur-lex.europa.eu/"
keyClaims:
  - "Korkean riskin velvoitteet (riskienhallinta, tekninen dokumentaatio, laadunhallintajärjestelmä) vastaavat suuryritystason sääntelyn noudattamista (compliance) — ei sivutehtävää pienelle integraattorille."
  - "GPAI-säännöt työntävät dokumentointia ja vastuuta arvoketjussa alaspäin; API-käyttäjä ja integraattori perii velvoitteita, vaikka ei koskaan kouluttaisi mallia."
  - "EU:n ulkopuoliset kilpailijat voivat liikkua nopeammin blokin ulkopuolella; EU:n sisällä iso toimija kestää sääntelykustannukset (compliance) helpommin kuin suomalainen mikrotoimisto."
  - "Annex III:n harmaat alueet (rekrytointi, luotto, julkiset palvelut, profilointi) hidastavat kokeilua ja lisäävät luokittelevan epävarmuuden."
  - "Julkiset hankinnat ja suuryritysten ostoprosessit suosivat toimittajia, jotka voivat jo nyt näyttää todisteita sääntelyn noudattamisesta — rakenteellinen etu suurille konsulteille."
---

## Mitä EU AI Act tarkoittaa käytännössä?

**EU:n tekoälyasetus (AI Act)** tuli voimaan vuonna 2024. Porrastetut määräajat ovat nyt kalenteritapahtumia: **6 kuukautta** kielletyille järjestelmille, **12 kuukautta** yleiskäyttöisille tekoälymalleille (GPAI), **24 kuukautta** Annex III:n korkean riskin käyttötapauksille, **36 kuukautta** Annex I:n tuote-integraatioille.

Paperilla asetus on riskiperusteinen ja suhteellinen. Käytännössä **ohjelmistosuunnittelijalle tai pienelle IT/AI-toimistolle Suomessa** se ei kuulosta innovaatiopolitiikalta vaan **kiinteältä kustannusriviltä** — sellaiselta, jota yhdysvaltalainen kilpailija ei kanna myydessään San Franciscoon, eikä kiinalainen integraattori mieti, kun loppuasiakas on Shenzhenissä.

> **Faktum AI:n toimituksellinen huomio:** Tämä ei ole oikeudellista neuvontaa. Kuvaamme **kilpailu- ja operatiivista todellisuutta** rakentajille — emme sääntelyn noudattamisen tarkistuslistaa (compliance checklist). Virallinen tulkinta kuuluu Traficomille ja EU:n AI Office -virastolle.

Asetus jakaa tekoälyn neljään luokkaan: **kielletty**, **korkea riski** (raskaat velvoitteet tarjoajille), **rajattu riski** (läpinäkyvyys, esim. chatbotit) ja **minimaalinen riski** (minimal risk, käytännössä vapaampi). Suuri osa päivittäisestä pilvipalveluohjelmistosta (SaaS) voi pysyä minimaalisen riskin luokassa — kunnes kosket rekrytoinnin pisteytykseen, luottopäätöksiin, etuus- tai palvelukelpoisuuteen tai **henkilöiden profilointiin**. Silloin Annex III ja artiklat 8–17 tulevat nopeasti näkyviin.

## Miksi tämä koskee suomalaista mikrotoimistoa?

Suomessa on tuhansia alle 20 hengen ohjelmistoyrityksiä. Ne rakentavat asiakasportaaleja, sisäisiä työkaluja, RAG-avustajia ja “AI-ominaisuuksia” OpenAI:n, Anthropicin tai avoimien mallien päälle. Nämä yritykset eivät muistuta lääkeyhtiön laadunvarmistusta. EU AI Actin vaativimmat vaatimukset on silti kirjoitettu isojen, säänneltyjen toimijoiden maailmaan — ei viisihenkisen dev-toimiston arkeen.

Silikon Valleyssä EU:sta sanotaan usein karkeasti: *“USA innovates, China replicates, Europe regulates itself to death”*. Lause on liioittelu — mutta siinä on perää. Sääntelyyn tarvitaan rahaa ja asiantuntijoita, ja isot yritykset selviävät siitä helpommin kuin pienet:

| Toimija | Tyypillinen reaktio AI Actiin |
| --- | --- |
| **US-hyperscaler / startup** | Julkaise globaalisti; EU-versio myöhemmin; juridiikkatiimi (legal team) + Dublin-yhtiö |
| **Suuri EU-integraattori** | Oma sääntely-PMO (compliance PMO), mallipohjat, auditointikumppanit |
| **Suomalainen 5–15 hlön studio** | Perustaja lukee Annex III:n keskiyöllä; sääntely “ei-laskutettavaa” |

Laki **koskee** myös kolmansia maita, kun tuotteen **tuotos** (output) käytetään EU:ssa — eli kyse ei ole “sivuuta, jos ratkaisu isännöidään (hosting) Virginiassa”. Mutta **valvontakyky, juridinen rakenne ja markkinavoima** jakautuvat epätasaisesti. Rahalla ostetaan tulkintaa; mikrotoimisto ostaa epävarmuutta.

## Viisi tapaa, joilla asetus vaikeuttaa pienen suomalaisen toimijan elämää

### 1. Suuryritystason dokumentointi muuttuu sinun ongelmaksesi

Korkean riskin **tarjoajien** on ylläpidettävä elinkaaren riskienhallintaa, **datan hallintaa** (data governance), viranomaisille suunnattua teknistä dokumentaatiota, automaattista lokiketjua, **ihmisen valvonnan** (human oversight) suunnittelua, tarkkuus-/robustiusvaatimuksia ja **laadunhallintajärjestelmää** (artiklat 8–17).

Mikään näistä ei ole mahdotonta. Kaikki on **suunniteltu organisaatioille, joilla on jo ISO-prosessit ja sääntelyasiantuntijat** (regulatory affairs). Helsinkiläiselle toimistolle, joka laskuttaa 120 €/h, lause “establish a quality management system to ensure compliance” tarkoittaa joko:

- syötyä katetta jokaisessa AI-projektissa, tai  
- kieltäytymistä julkisen sektorin ja HR-tech -asiakkaista kokonaan.

Isot toimittajat pitävät tätä **pöytäkustannuksena**. Pienet pitävät sitä **olemassaolon kuormana**.

### 2. GPAI-ketju työntää vastuun alaspäin

Vaikka et koskaan kouluttaisi **perusmallia** (foundation model), lähes varmasti **integroit** sellaisen. GPAI-tarjoajien on toimitettava tekninen dokumentaatio, käyttöohjeet, copyright-politiikka ja koulutusdatan yhteenveto (artikla 53). **Järjestelmäriskin** (systemic risk) alaiset mallit joutuvat arviointeihin, **hyökkäystestaukseen** (adversarial testing), **häiriöraportointiin** (incident reporting) ja kyberturvavaatimuksiin (artikla 55).

Alaspäin olet usein **käyttöönoton toteuttaja** (deployer) ammattimaisessa roolissa — vastuussa laillisesta käytöstä ja korkean riskin skenaarioissa ihmisen valvonnasta (human oversight) ja kirjanpidosta. Kun asiakas kysyy “voimmeko suodattaa työhakemuksia GPT:llä?”, integraattori jää ristituleen **Annex III:n työllistämiskäyttötapauksien** ja Kaliforniassa juristeille kirjoitetun **mallikortin** (model card) väliin.

Avoimen lähdekoodin mallit saavat kevyemmän kohtelun — kunnes ne luokitellaan suuren järjestelmäriskin alaisiksi. Tämä epävarmuus maksaa: työn laajuus kasvaa ja lakiasiat vievät laskuttamatonta aikaa.

### 3. EU:n ulkopuoliset kilpailijat pelaavat eri peliä

Suomalainen studio, joka myy suomalaisille asiakkaille, joutuu noudattamaan sääntöjä. Yhdysvaltalainen tuoteyhtiö, joka myy **saman ominaisuuden** ensin USA:han ja EU:hun vasta myöhemmin, ajaa **kaksivaiheista tiekarttaa**: innovoi nyt, sääntelykerros (compliance layer) kun kuukausittainen toistuva liikevaihto (MRR) oikeuttaa Brysselin.

Kiinalaiset ja muut EU:n ulkopuoliset hintakilpailijat kolmansilla markkinoilla eivät kohtaa AI Act -kitkaa lainkaan ennen kuin valitsevat **sisämarkkinat** (single market) — usein skaalalla ja pääomalla, jota pohjoismainen toimisto ei saavuta.

Euroopalla on oikeus turvallisuuteen. Pienelle rakentajalle asetus tuntuu kuitenkin **kotikentän epäedulliselta lähtökohdalta** (handicap): sääntely alkaa heti omilla markkinoilla, kun ulkomaiset kilpailijat iterovat maissa, joissa AI-riski on **tuotevastuu**, ei erillinen megaregulaatio.

### 4. Luokitusharmaat alueet jäädyttävät kokeilun

Annex III listaa korkean riskin **toimialueet** (domains): biometria, kriittinen infra, koulutus, **työllistäminen ja rekrytointi**, peruspalvelut (etuudet, luottokelpoisuus, hätäpuheluiden priorisointi), lainvalvonta, maahanmuutto, oikeuslaitos ja demokraattiset prosessit.

Poikkeuksia on (kapeat prosessitehtävät, valmistelevat vaiheet, **ihminen mukana -mallit** (human-in-the-loop)) — mutta **profilointi laukaisee korkean riskin kohtelun** riippumatta muusta. Tarjoajan, joka uskoo Annex III -järjestelmänsä olevan ei-korkea-riski, on **dokumentoitava arvio ennen markkinoille tuloa**; komission käytännön esimerkkilista tulee **18 kuukautta** voimaantulosta.

Pienelle tiimille “ehkä korkea riski” on pahempi kuin “selvästi korkea riski”. Ehkä tarkoittaa **ei demoa asiakkaalle**, **ei hack week -prototyyppiä**, **ei kiinteähintaista tarjousta** (fixed-price). Innovaatiivelka kasvaa hiljaa, kun US-tiimit julkaisevat saman demona “betana”.

### 5. Hankinnat ja luottamusesteet suosivat vakiintuneita toimijoita

Julkiset ostajat ja riskitietoiset yritykset kysyvät todisteita siitä, että ratkaisu täyttää säännökset, vaikutusarvioita ja toimittajakyselyitä — vielä ennen kuin kansallinen valvonta on täydessä vauhdissa. Kenellä on vastaukset valmiina? Globaalit konsultit, pilvimarkkinapaikat ja toimittajat, joilla on **valmiit vastauspaketit** hyllyllä.

Suomalainen pieni toimisto voi olla ketterämpi ja lähempänä käyttäjää — mutta ketteryys häviää tarjouskilpailussa, kun pisteytyskriteerinä on **“näytä AI Act -valmius”**. Asetus toimii siis **markkinoille pääsyn suodattimena**, ei pelkästään turvallisuuslakina.

## Tekninen arvio suomalaiselle tiimille

**Jos olet pieni suomalainen IT/AI-studio tänään:**

1. **Kartoita pino rehellisesti** — Oletko **tarjoaja** (provider), **käyttöönoton toteuttaja** (deployer) vai molemmat? GPAI-integraatio + Annex III -toimialue (domain) = korkein tarkkuus.  
2. **Segmentoi asiakkaat** — HR, rahoitus, vakuutus ja julkinen sektori ovat eri riskiluokka kuin sisäiset yhteenveto-työkalut.  
3. **Älä ulkoista harkintaa mallin toimittajalle** — käyttöehdot eivät siirrä Annex III -vastuuta OpenAI:lle tai Mistralille.  
4. **Laske sääntelykustannukset mukaan hintaan tai kieltäydy projektista** — alihinnoiteltu “AI-ominaisuus” muuttuu tappiolliseksi sääntelyprojektiksi.  
5. **Seuraa Traficomia ja AI Office -ohjeistusta** — kansallinen täytäntöönpano ja **käytäntösäännöt** (codes of practice) voivat selkeyttää pk-polkuja; siihen asti oleta **varovainen rajaus** (scoping).

Kalenteriin kannattaa merkitä (voimaantulosta):

| Määräaika | Laajuus |
| --- | --- |
| 6 kk | Kielletyt AI-käytännöt |
| 12 kk | GPAI-velvoitteet |
| 24 kk | Annex III korkea riski |
| 36 kk | Annex I korkea riski (tuoteturvaintegraatio) |

## Riskit ja epävarmuudet

- **Kansallinen valvonta** voi priorisoida ensin suuret **järjestelmäriskin alaiset toimijat** (systemic operators) — mutta **asiakassopimukset** eivät odota.  
- **Käytäntösäännöt** ja harmonisoidut standardit voivat lopulta helpottaa noudattamista — mutta niitä laaditaan lähinnä isojen yritysten voimin. Pienellä toimistolla ei käytännössä ole paikkaa pöydässä, jossa ohjeistukset kirjoitetaan.  
- **Avoimen lähdekoodin GPAI** -poikkeukset ovat oikeita mutta kapeita; järjestelmäriskin kynnys (systemic risk, 10²⁵ FLOPS koulutuslaskenta) voi vetää projektin takaisin raskaaseen **sääntelykehykseen** (regime).  
- Artikkeli korostaa **pk-kuormaa** tarkoituksella; kuluttajansuojan hyödyt korkean riskin toimialueilla (domains) eivät katoa — ne vain **rahoitetaan eri tavalla** kuin kymmenhenkisessä toimistossa.

## Johtopäätös

EU AI Act ei ole abstrakti Bryssel-tarina. Suomalaiselle ohjelmistosuunnittelijalle tai mikrotoimistolle se on **tunteja, euroja ja menetettyjä tarjouksia** — **sääntelyarkkitehtuuria** (compliance architecture), joka on lainattu aloilta, joilla **sääntelyhenkilöstö** (regulatory staff) oli jo palkkalistalla.

Globaalit kilpailijat voivat viivästyttää, strukturoida tai ohittaa eurooppalaisen luvun, kunnes skaala sen sallii. Kotimarkkinan jättiläiset voivat niellä kustannuksen. **Pienin rakentaja maksaa etukäteen** — usein muodossa, ettei rakenna ollenkaan.

Se on sääntelytarina, jota Eurooppa harvoin laittaa tiedotteeseen — ja juuri siksi rakentajan kannattaa lukea asetus **kilpailukarttana**, ei vain oikeusoppikirjana.
