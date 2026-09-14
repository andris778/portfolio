# Andris Tiļeckis — Portfolio

Personīgā portfolio vietne, veidota ar tīru HTML, CSS un JavaScript (bez ietvariem/build soļa).

## Funkcijas

- **Tumšs / gaišs režīms** — pārslēdzas ar pogu augšējā labajā stūrī, saglabājas starp apmeklējumiem (`localStorage`), pēc noklusējuma seko sistēmas iestatījumam.
- **3 valodas** — Latviešu (noklusējums), Angļu, Krievu. Pārslēdzas nekavējoties bez lapas pārlādes, izvēle tiek saglabāta.
- **Responsīvs dizains** — strādā no mobilajiem līdz lieliem ekrāniem, ar mobilo izvēlni šaurākiem skatiem.
- **Bez atkarībām** — nav nepieciešams `npm install` vai build process. Vienīgā ārējā resursa saite ir Google Fonts (JetBrains Mono + Inter).

## Failu struktūra

```
├── index.html   → lapas saturs un struktūra
├── style.css    → dizains, tēmas mainīgie, responsivitāte
├── script.js    → tulkojumi, tēmas/valodas pārslēgšana
└── README.md
```

## Izvietošana Vercel

**Ātrākais veids (bez Git):**
1. Ej uz [vercel.com/new](https://vercel.com/new)
2. Izvēlies "Deploy without Git" / velc un nomet šo mapi (index.html, style.css, script.js)
3. Vercel automātiski atpazīs to kā statisku vietni — papildu konfigurācija nav vajadzīga

**Ar GitHub (ieteicams, ļauj vieglāk atjaunot vietni nākotnē):**
1. Izveido jaunu repozitoriju savā GitHub kontā, piem. `portfolio`
2. Augšupielādē šos 3 failus (`index.html`, `style.css`, `script.js`)
3. Ej uz [vercel.com/new](https://vercel.com/new), izvēlies "Import Git Repository" un norādi savu repo
4. Framework Preset atstāj kā "Other" — Vercel to izvietos automātiski, jo tas ir statisks HTML

Pēc izvietošanas Vercel iedos tev linku, piem. `andris-tileckis.vercel.app`.

## Satura pielāgošana

- Teksti trīs valodās atrodas `script.js` faila sākumā, objektā `translations` (`lv`, `en`, `ru` atslēgas).
- Jauna projekta pievienošana: nokopē `.repo-card` bloku `index.html` failā (sadaļa `#projects`) un pievieno atbilstošas tulkojumu atslēgas `script.js`.
- Avatārs/profila attēls šobrīd netiek rādīts kā atsevišķs elements — ja vēlies to pievienot, ievieto `<img>` hero sadaļā un norādi ceļu uz attēlu vai GitHub avatāra URL.
