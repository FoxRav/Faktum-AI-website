# Ed Zitron 2 — datakeskusten toteuma + Anthropic-rahoitus

## 1. Aineiston tyyppi

- [x] haastattelu / uutinen / raportti / transkripti / muu — kaksi transkriptia
  - Tech Report -haastattelu: "AI Bubble: Everyone is aggressively avoiding reality"
  - BBC World News: Anthropicin 30 mrd $ -kierros

## 2. Pääteema

Hyperscalerien ja AI-laboratorioiden ilmoittama datakeskuskapasiteetti ei vastaa fyysistä toteumaa. Rakentaminen kestää 18–36 kk, GPU:t istuvat varastoissa, ja silti markkinatarinaa puhalletaan rahoituskierroksilla, joiden tuloskestävyydestä Zitron esittää avoimia kysymyksiä.

## 3. Tärkeimmät väitteet

| ID | Väite | Vahvuus | Ulkoinen lähde? |
| --- | --- | --- | --- |
| C1 | Yksikään ilmoitettu "gigawatin datakeskus" ei ole valmis | vahva (haastattelussa) | tarkistettava |
| C2 | Microsoftin Fairwater (Atlanta, Wisconsin) on vain yhden vaiheen tasolla | vahva | tarkistettava |
| C3 | Project Rainier (Amazon/Anthropic, Indiana): 7/30 rakennusta toiminnassa, mutta kuvattu "fully operational" | vahva | tarkistettava |
| C4 | Stargate Abilene: 1 → 2 rakennusta noin 6 kk:n välillä | vahva | tarkistettava |
| C5 | 4 hyperscalerin 800 mrd $ capexista on tosiasiallisesti käytössä < 200 mrd $ | keskivahva (arvio) | tarkistettava |
| C6 | Microsoft on asentanut noin kolmasosan GPU:istaan | keskivahva (arvio) | tarkistettava |
| C7 | Noin 1 milj. Blackwell-GPU:ta istuu varastoissa, todennäköisesti Taiwanissa | keskivahva (arvio) | tarkistettava |
| C8 | Anthropic vuokrasi Colossus 1:n (300 MW) vanhoilla H100/H200:lla — signaali kapasiteettipulasta | vahva | tarkistettava |
| C9 | NVIDIA käyttää bill-and-hold -kirjausta GPU-myynnissä | keskivahva (Kakashi) | tarkistettava |
| C10 | Super Micro istuu yli 1 mrd $:n B200-varannolla, koska Oracle siirtyi Delliin | vahva | tarkistettava |
| C11 | Anthropicin 30 mrd $ -kierros nostaa arvon 900 mrd $:iin (BBC) | vahva | tarkistettava |
| C12 | Krishna Rao: Anthropicin "lifetime" 5 mrd $ 6.3.2026 mennessä — ristiriita 50 mrd $ ARR -väitteen kanssa | vahva | tarkistettava |
| C13 | Anthropicin sekundäärimarkkinan arvostus on heilunut 1,2–1,4 biljoonan välillä | keskivahva | tarkistettava |
| C14 | Anthropicin CFO käyttää LLM:iä kirjanpidossa | vahva (haastattelu) | tarkistettava |

## 4. Tärkeimmät sitaatit

- "If you've heard about someone saying they're building a 1 gigawatt data center, they have not. No one has done that."
- "I think there's like a million Blackwell GPUs sitting in warehouses likely in Taiwan."
- "If I made you a quarter of a meal, would you say I fully fed you?"
- "We don't have a business in tech media that is willing to say hey this is an incomplete data center."
- "The fundamental underlying structure of the AI bubble is held up by arguments that are basically nu-uh and it'll be fine."
- "Everyone is aggressively avoiding looking at reality."
- "Anthropic was at the beginning of the year booking maybe $700 million in a single month. They are, if you believe them … banking now $4 billion in the space of a month."

## 5. Tärkeimmät numerot

| Luku | Merkitys | Lähde |
| --- | --- | --- |
| 800 mrd $ | 4 hyperscalerin capex (MSFT, GOOG, AMZN, META) | Tech Report |
| < 200 mrd $ | Zitronin arvio tosiasiallisesti käytetystä summasta | Tech Report |
| 1–2 GW | Globaali uusi kapasiteetti viim. 2 vuoden aikana (arvio) | Tech Report |
| ≈ 1/3 | Microsoftin asennettujen GPU:iden osuus tilatusta | Tech Report (arvio) |
| 7 / 30 | Project Rainierin (Amazon/Anthropic) toiminnassa olevat rakennukset | Tech Report |
| 1 → 2 | Stargate Abilenen toiminnassa olevat rakennukset 6 kk:n aikana | Tech Report |
| 300 MW | Colossus 1:n kapasiteetti, vuokrattu Anthropicille | Tech Report |
| 220 000 | Colossus 1:n GPU:t (pääasiassa H100/H200 + 20 000 Blackwell) | Tech Report |
| 18–36 kk | Datakeskuksen rakentamisaika | Tech Report |
| 1 milj. | Blackwell-GPU:ta varastoissa (Zitronin arvio) | Tech Report |
| 1 mrd $+ | Super Micron jäänyt B200-varanto | Tech Report |
| 7,1 GW | Oracle Stargate Abilene -tavoite, Open AI:lle | Tech Report |
| 30 mrd $ | Anthropicin uusi rahoituskierros | BBC |
| 900 mrd $ | Anthropicin valuaatio kierroksen jälkeen | BBC |
| 1,4 biljoonaa $ | Anthropicin sekundäärimarkkinan piikkiarvostus | Tech Report |
| 75 mrd $ | Anthropicin kerätty rahoitus 6 kk | BBC |
| 220 mrd $+ | OpenAI + Anthropic yhteensä rahoitusta 2025 alkaen | BBC |
| 5 mrd $ | Anthropicin "lifetime"-liikevaihto 6.3.2026 (Krishna Rao, sotaministeriön valaehtoinen lausunto) | Tech Report |
| 50 mrd $ ARR | Anthropicin oma väite | Tech Report |
| 12 000 % | Implikoitu kasvuprosentti, jos molemmat luvut pitävät | BBC (Zitron) |
| 18 / 10 / 6 / ~6 mrd $ | Amazonin / Microsoftin / Googlen / Metan kvartaalinen poistotaso | Tech Report |
| 15–40 mrd $ | Mahdollinen poistotaso, kun GPU:t asennetaan | Tech Report (arvio) |

## 6. Tapahtumien aikajana

| Päivä | Tapahtuma | Epävarmuus |
| --- | --- | --- |
| 2023– | Hyperscalerien datakeskusprojektit ilmoitettu | Käytetään edelleen yleisesti aktiivisina |
| 2024 syys/loka | Stargate Abilene "operational" (1 rakennus) | Zitron: harhaanjohtava |
| 2024 syys/loka | Project Rainier "operational" (7/30 rakennusta) | Zitron: harhaanjohtava |
| ~2025 H2 | Anthropic vuokraa Colossus 1:n (300 MW) | Vahvistettava |
| 6.3.2026 | Anthropicin Krishna Rao: lifetime 5 mrd $ (Dept. of War -kanne) | Vahvistettava virallinen lausuma |
| 2026 Q2 | Anthropic 30 mrd $ -kierros, valuaatio 900 mrd $ | BBC-uutinen |
| 2026 Q2 | Anthropic sekundäärimarkkinalla 1,4 biljoonaa $ | Heilunut |
| 2028–2029 | Oracle Stargate -projekteiden luvattu valmistuminen | Zitron pitää epärealistisena |

## 7. Riskit ja julkaisuesteet

- Luvut perustuvat Zitronin haastatteluun ja tulkintaan — vaativat riippumattoman tarkistuksen
- Krishna Raon affidavit on yksityiskohtaisempi väite kuin haastattelusta voi vahvistaa — viittauksessa pitää olla huolellinen
- "12 000 %" -ero ei ole Zitronin oma laskelma, vaan BBC-toimittajan; merkitään selvästi
- Vältä spekulatiivisia syytöksiä yksittäisistä yritysjohtajista
- Erotettava selvästi Zitronin mielipiteet vahvistettavissa olevista numeroista

## 8. Artikkelikulma

- **Ehdotettu otsikko:** "Datakeskuksia ei rakenneta luvattua tahtia — Ed Zitronin betoni-tarkistus AI-kuplaan"
- **Ehdotettu ingressi:** Edellisessä Faktum AI -analyysissä Zitron väitti, että AI-kupla ei selviä kysymyksestä "mihin kaikki GPU:t menevät?". Uudet haastattelut tarkentavat vastauksen: suuri osa niistä ei mene minnekään — ne istuvat varastoissa tai puolivalmiissa rakennuksissa.
- **Kohderyhmä:** Suomalaiset IT-päättäjät, kehittäjät, pilvi- ja datakeskus-asiakkaat
- **Suomalainen näkökulma:** Pilvikapasiteetin saatavuus, datakeskusinvestointien aikajänteet (mm. pohjoismaiset hyperscaler-kampukset), eläke- ja vakuutusrahojen ketjut, EU AI-tarjontariippuvuus
