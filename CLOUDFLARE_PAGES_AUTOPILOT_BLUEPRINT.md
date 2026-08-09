# 🚀 Blueprint: Next.js + Cloudflare Pages + 24/7 Autopilot Automation

Dit document is de complete, herbruikbare handleiding voor het opzetten van nieuw te bouwen Next.js affiliate & content websites met 100% gratis Cloudflare Pages hosting en 24/7 geautomatiseerde AI-content & API-synchronisatie.

---

## 📋 Het 5-Stappen Masterplan voor Nieuwe Websites

```mermaid
graph TD
    A[1. Next.js Codebase & Static Export] --> B[2. 24/7 GitHub Cloud Automation]
    B --> C[3. GitHub Repository Secrets]
    C --> D[4. Cloudflare Pages Deployment]
    D --> E[5. Vimexx / DirectAdmin CNAME Koppeling]
```

---

## 🔹 Stap 1: Next.js Instellen voor Static Export

### 1. `next.config.mjs`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

### 2. `src/app/robots.js` & `src/app/sitemap.js`
Voeg bovenaan beide bestanden toe:
```javascript
export const dynamic = 'force-static';
```

---

## 🔹 Stap 2: 24/7 Cloud Automatisering (GitHub Actions)

### 1. `scripts/generate-article.js`
Script dat de DeepSeek API roept volgens de 8 kwaliteitsregels (definitie opening, veiligheidskader, voor- en nadelen, partnerlink-disclaimers, schone interne links).

### 2. `update-bol-prices.js` & `scripts/discover-products.js`
Scripts die via de Bol API live prijzen, voorraden, haarscherpe foto's en breukvrije affiliate-zoeklinks ophalen en 1 tot 2 nieuwe topproducten per run toevoegen aan de 5 JSON-categorieën (`power.json`, `accessoires.json`, `daktenten.json`, `dakdragers.json`, `fietsendragers.json`).

### 3. `.github/workflows/cron-blog.yml`
```yaml
name: 24/7 Automated Blog Publisher & Bol API Sync

on:
  schedule:
    - cron: '0 9 */3 * *' # Elke 3 dagen om 09:00 UTC
  workflow_dispatch:

jobs:
  generate-and-publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci || npm install
      - run: node scripts/discover-products.js || true
        env:
          BOL_CLIENT_ID: ${{ secrets.BOL_CLIENT_ID }}
          BOL_CLIENT_SECRET: ${{ secrets.BOL_CLIENT_SECRET }}
      - run: node update-bol-prices.js || true
        env:
          BOL_CLIENT_ID: ${{ secrets.BOL_CLIENT_ID }}
          BOL_CLIENT_SECRET: ${{ secrets.BOL_CLIENT_SECRET }}
      - run: node scripts/generate-article.js
        env:
          DEEPSEEK_API_KEY: ${{ secrets.DEEPSEEK_API_KEY }}
      - run: npm run build
      - run: |
          git config --global user.name "DeAutokampeerder Bot"
          git config --global user.email "bot@deautokampeerder.nl"
          git add src/data/ src/content/kennisbank/
          git diff --quiet && git diff --staged --quiet || (git commit -m "feat(cron): sync live Bol prices, discover products & publish article" && git push)
```

---

## 🔹 Stap 3: GitHub Repository Secrets Toevoegen

In de GitHub Repository ➔ **Settings** ➔ **Secrets and variables** ➔ **Actions**:
- `DEEPSEEK_API_KEY`: API sleutel van DeepSeek.
- `BOL_CLIENT_ID`: Client ID van Bol.com Open API.
- `BOL_CLIENT_SECRET`: Client Secret van Bol.com Open API.

---

## 🔹 Stap 4: Cloudflare Pages Koppelen (100% Gratis & Onbeperkt)

1. Log in op [Cloudflare Dashboard](https://dash.cloudflare.com/) ➔ **Workers & Pages** ➔ **Create Application** ➔ **Pages** ➔ **Connect to Git**.
2. Selecteer de GitHub repository.
3. Instellingen:
   - **Framework preset:** `Next.js (Static HTML Export)`
   - **Build command:** `npx next build` *(of `npm run build`)*
   - **Build output directory:** `out`
4. Klik op **Save and Deploy**.

---

## 🔹 Stap 5: Vimexx / DirectAdmin DNS Koppeling

In het DirectAdmin DNS beheer van het domein bij Vimexx:

1. **Verwijder** oude A-records of Vercel A-records (`76.76.21.21`).
2. **Voeg toe** bij CNAME:
   - **Host / Naam:** `www`
   - **Type:** `CNAME`
   - **Waarde / Inhoud:** `<projectnaam>.pages.dev.` *(met de punt aan het einde!)*
3. **Laat alle MX-, e-mail- en TXT-regels 100% ongewijzigd** zodat de e-mail bij Vimexx blijft werken.
4. Ga in Cloudflare Pages naar **Custom domains** ➔ Voeg `www.domeinnaam.nl` toe ➔ Kies **My DNS provider** ➔ **Begin CNAME setup**.

---

### ✅ Resultaat voor elke nieuwe site:
- ⚡ 100% Gratis onbeperkte hosting & SSL via Cloudflare Pages.
- 📧 100% E-mailbehoud bij Vimexx zonder storingen.
- 🤖 24/7 Autopilot: automatische artikelen, live prijzen en productuitbreiding.
- 📱 Perfect responsive, magazine-layout en zoekmachine-geoptimaliseerd!
