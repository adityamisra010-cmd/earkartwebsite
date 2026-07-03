# Earkart Website — Deploy Notes & Go-Live Checklist

This document covers everything the person deploying the new site needs to
know: server configuration, legacy-URL redirects, integrations, and the final
content checklist. Companion documents: `README.md` (architecture & build),
`ASSETS-SHOT-LIST.md` (photography brief).

---

## 1. Hosting model

The site is fully static — flat `.html` files at the web root plus `assets/`.
Any static host works (current hosting, Nginx, Apache, Netlify, Cloudflare
Pages, S3+CloudFront). No server-side runtime is required.

Deploy = upload the repo contents (minus `src/`, `build.mjs`, `node_modules/`
if you prefer, though shipping them is harmless) to the web root of
`https://earkart.in`.

> **Canonical domain assumption:** every canonical URL, `og:image`,
> `sitemap.xml` and `robots.txt` entry assumes the site is served at the
> **root** of `https://earkart.in`. If it is staged under a sub-path, links
> will work but SEO tags will point at production — that is intentional for
> staging.

## 2. URL continuity  ⚠️ CRITICAL — links are on SEBI/BSE & government filings

The single rule that protects every submitted link:

> **Deploy ADDITIVELY. Upload the new files on top of the existing site —
> do NOT wipe the web root first.** Every existing file that the rebuild does
> not replace must stay in place. Existing URLs then keep returning HTTP 200
> at the same address (no redirect), which is what compliance links require.

### 2a. HTML pages confirmed to match the live site exactly (same URL, redesigned)

These live URLs were verified on earkart.in and the rebuild uses the **same
filenames**, so they upgrade in place with zero link breakage:

| Live URL | Rebuilt |
|---|---|
| `/` (index.html) | ✅ |
| `/about-us.html` | ✅ |
| `/hearing-aids.html` | ✅ |
| `/board-details.html` | ✅ |
| `/material.html` | ✅ (now lists the real MOA/AOA/BR/SR + prospectus PDFs) |
| `/geo4.html` | ✅ centers page — now the canonical centers URL the whole site links to |
| `/blog.html` | ✅ |
| `/privacy-policy.html` | ✅ |
| `/contact.html` | ✅ (was `contact-us.html` in an earlier draft — now matches the live URL) |

### 2b. Existing PDFs & assets the new site LINKS TO — keep them on the server

The rebuild references these real live files by absolute URL. They are **not**
in this repo; they must remain deployed. (All confirmed present via search.)

- **Investor docs:** everything under `/investor/` incl. `/investor/ipo/`
  (`Earkart-Prospectus.pdf`, `Earkart_Limited_Draft_Prospectus.pdf`,
  `Earkart_Addendum.pdf`, `Earkart_Addendum2.pdf`, `Approval-Letter-BSE.pdf`,
  `trading-approval.pdf`), `/investor/bp/` (board policies incl.
  `CSR-policy.pdf`, `Policy-for-Performance-Evaluation-of-Board-of-Directors.pdf`,
  `Policy-on-disclosure-of-Material-Events.pdf`), `/investor/fi/RFS_March'25.pdf`,
  `/investor/md/` (e-MOA, e-AOA, BR-IPO, SR-IPO),
  `/investor/shareholding-pattern.pdf`, `/investor/Investors-Presentation.pdf`,
  `/investor/Earkart-transcript.pdf`, `/investor/Letter.pdf`.
- **Root-level notices:** `/Notice-of-Board-Meeting.pdf`,
  `/Notice-of-Independent-Director-Board-Meeting.pdf`,
  `/notice-of-the-extra-ordinary-general-meeting.pdf`, `/Notice-EGM.pdf`,
  `/EGM-Notice-3rd-Feb-2025.pdf`.
- **Product spec PDFs:** `/eqfy.pdf`, `/F2TS.pdf`, `/RADIUS16.pdf`, `/HATS.pdf`,
  `/radius/*.pdf`, `/tlm/*.pdf`, and any other `/*.pdf` product sheets.
- **Existing content/blog HTML pages** (not reproduced by the rebuild — keep them):
  `/early-intervention-hearing-loss-tests.html`,
  `/how-to-convince-family-to-buy-hearing-aid.html`, `/stigma-hearing-aid.html`,
  and any other article pages.

### 2c. NEW URLs the rebuild adds (additive — break nothing)

Product HTML pages (`/product-*.html`), investor sub-section pages
(`/investor-*.html`), extra blog posts (`/blog-*.html`), `/hearing-loss.html`,
`/other-products.html`, `/press-release.html`, `/investor.html`,
`/terms-and-conditions.html`, `/404.html`, `/earkart-centers.html`
(alias → geo4). These are additions; they cannot break anything that was
submitted. Note: the live investor section is **PDF-driven** (no `investor.html`
existed), so all `/investor-*.html` pages are brand-new and purely additive.

### 2d. Action required before cutover — verify nothing is missed

The build environment cannot crawl earkart.in, so confirm the **complete**
old URL list from an authoritative source you control:

1. Best: the exact list of links submitted to SEBI/BSE/government/investor
   portals (you have these) — send them over and each will be checked to
   resolve on the new site.
2. Or export `https://earkart.in/sitemap.xml`, or the hosting file listing,
   or Google Search Console's "Pages" coverage.

For any old URL whose page was **renamed** in the redesign (e.g. an old
hearing-education page such as `early-intervention-hearing-loss-tests.html` or
`stigma-hearing-aid.html`), either keep the old file or add a 301:

```
# Netlify _redirects            # Apache .htaccess              # Nginx
/old-page.html /new-page.html 301   Redirect 301 /old-page.html /new-page.html   rewrite ^/old-page\.html$ /new-page.html permanent;
```

Separate landing pages/subdomains on the live site — `/campaign/`,
`/earkart-lp-3/`, `/eic/`, `best-hearing-aid.earkart.in` — are **not** part of
this rebuild; leave them as-is.

## 3. Server configuration

- **404 page:** serve `/404.html` for unknown paths
  (Nginx: `error_page 404 /404.html;` · Apache: `ErrorDocument 404 /404.html`
  · Netlify/CF Pages: automatic for a root `404.html`).
- **HTTPS:** force-redirect HTTP → HTTPS (canonicals are HTTPS).
- **Caching:** long cache (`max-age=31536000, immutable`) for `assets/fonts/`
  and `assets/img/`; short/no cache for `*.html`.
- **Compression:** enable gzip/brotli for HTML/CSS/JS/SVG (fonts are already
  compressed).
- **Keep `/investor/` PDFs:** the new pages link to the existing
  `https://earkart.in/investor/...` documents. Do not delete that directory
  when deploying.

## 4. Integrations (all optional to launch, all in `src/data/site.mjs`)

| Setting | What it does | Status |
|---|---|---|
| `integrations.formEndpoint` | Appointment + contact forms POST JSON here (`{form, page, name, phone, email, city, interest/for, message}`). Honeypot field `company_website` is stripped client-side; also drop any server-side submission where it is non-empty. | Empty → forms run in labelled demo mode |
| `integrations.analyticsHeadSnippet` | Analytics tags (GA4/GTM/Plausible), injected into `<head>` site-wide | Empty → no analytics |
| `src/data/centers.mjs` | Real partner-center directory (drives search + LocalBusiness schema once `verified: true`) | 3 placeholder entries |

After changing any of these, run `node build.mjs` and redeploy the HTML.

## 5. Search-engine setup

- `sitemap.xml` and `robots.txt` are generated at the root — submit the
  sitemap in Google Search Console after cutover.
- `geo4.html` canonicals to `earkart-centers.html` (intentional duplicate).
- `404.html` carries `noindex`.
- Structured data shipped: MedicalBusiness (org), BreadcrumbList, FAQPage,
  BlogPosting, Product (name/brand/category only — extend once real specs are
  verified), LocalBusiness per verified center (none until real centers are
  added). Validate at https://search.google.com/test/rich-results after deploy.

## 6. Content checklist before announcing

Already filled from the live site: **CIN** `U74999DL2021PLC399313`, **email**
`contact@earkart.com`, **landline** `0120 4102857`, and the real **product +
investor PDF links** (see §2b). Still to confirm — search the `src/` tree for
`[CONFIRM` and `[Add `:

- [ ] Toll-free number (`contact.tollFreeDisplay/Raw`) — footer + contact page
- [ ] Registered office full address (`contact.registeredOffice`) — CIN is Delhi
- [ ] Dedicated investor/grievance email if different from `contact@earkart.com`
- [ ] Listing exchange in investor snapshot (`src/data/investor.mjs` → BSE SME?)
- [ ] Remaining product spec PDFs (TINY, Fame, Fame P/SP, other Radius variants,
      TLM-2/3, MSIED, LH 71/72, walker, battery) — add real `pdf:` URLs
- [ ] Social profile URLs (`site.mjs → social`) — icons stay dim until set
- [ ] Partner-portal URL if external (`cta.partner.href`)
- [ ] Impact stats (`site.mjs → impactStats`) — cards show "coming soon" until values set
- [ ] Verified customer reviews (`src/data/reviews.mjs`, set `verified: true`)
- [ ] Board: independent directors' names, bios, photos (`src/data/board.mjs`)
- [ ] Product spec PDFs (`src/data/products.mjs → pdf`) — buttons stay "coming soon" until set
- [ ] Investor documents with `href: "#"` (`src/data/investor.mjs`) — incl. OMNI Patent Certificate
- [ ] Press-release PDFs/dates (`src/pages/press.mjs`)
- [ ] Blog publish dates (`src/data/blog.mjs`)
- [ ] Real partner centers (`src/data/centers.mjs`)
- [ ] Photography per `ASSETS-SHOT-LIST.md` (pass file paths as the 4th arg of
      `imagePlaceholder(label, ratio, tone, src)` — images lazy-load automatically)
- [ ] Final legal copy for Terms & Privacy (`src/pages/legal.mjs`)
- [ ] Map integration on Centers/Contact pages (placeholder component:
      `mapPlaceholder()` in `src/lib/components.mjs`)

## 7. Fonts

Fraunces + Figtree are **self-hosted** (`assets/fonts/`, 8 woff2 subsets,
~280 KB total, SIL OFL licence) — no Google Fonts request at runtime, better
for performance and privacy. Hindi content (`lang="hi"`) intentionally uses
native system Devanagari fonts.

## 8. Rebuilding

```bash
node build.mjs   # regenerates all *.html + sitemap.xml + robots.txt
```

No dependencies required (Node ≥ 18). Generated HTML is committed, so hosting
can also deploy straight from the repo without running anything.
