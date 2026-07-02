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

## 2. Legacy-URL redirect map  ⚠️ REQUIRED BEFORE CUTOVER

The rebuild preserves these confirmed legacy URLs exactly (no redirect needed):

| Legacy URL | Status |
|---|---|
| `/about-us.html` | ✅ same URL, rebuilt |
| `/board-details.html` | ✅ same URL, rebuilt |
| `/material.html` | ✅ same URL, rebuilt |
| `/geo4.html` | ✅ same URL, rebuilt (canonicals to `/earkart-centers.html`) |
| `/investor/...pdf` (all investor PDFs) | ✅ untouched — keep the `/investor/` directory of PDFs deployed as-is |

**Action required:** the old site could not be crawled from the build
environment, so the remaining legacy filenames are unconfirmed. Before DNS
cutover, crawl the live site (e.g. `wget --spider -r https://earkart.in/` from
any machine, or export the old sitemap/Google Search Console coverage list)
and map every old URL that differs from the new one:

```
# Nginx example
rewrite ^/old-hearing-aids-page\.html$ /hearing-aids.html permanent;

# Apache .htaccess example
Redirect 301 /old-hearing-aids-page.html /hearing-aids.html

# Netlify _redirects example
/old-hearing-aids-page.html   /hearing-aids.html   301
```

Likely candidates to check for on the old site: product pages, contact page,
press page, individual investor sub-pages, blog/landing pages
(`/earkart-lp-3/`, `/eic/` exist on the live site — decide whether to keep,
redirect, or retire them; they are **not** part of this rebuild).

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

Search the `src/` tree for `[CONFIRM` and `[Add ` — each marker is an item:

- [ ] Toll-free number (`contact.tollFreeDisplay/Raw`) — footer + contact page
- [ ] CIN + registered office (`contact.cin`, `contact.registeredOffice`)
- [ ] Primary + investor email addresses (`contact.email`, `contact.investorEmail`)
- [ ] Listing exchange in investor snapshot (`src/data/investor.mjs`)
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
