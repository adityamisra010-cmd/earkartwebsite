# Earkart — Website

Premium, trust-first hearing-healthcare website for **Earkart Limited** — patient-friendly,
partner-friendly and investor-grade.

Built as a **zero-dependency static site**: a small Node generator (`build.mjs`) assembles
plain `.html` pages from shared partials and data files. No framework, no runtime JS
libraries, legacy `.html` URLs preserved, works when opened directly in a browser.

---

## Quick start

The generated `.html` files are committed, so you can **open `index.html` directly** in a
browser — no build step needed to preview.

To regenerate after editing anything in `src/`:

```bash
node build.mjs        # or: npm run build
```

This writes all `.html` pages to the repo root.

> `node_modules/` is only used for optional local screenshot tooling and is git-ignored.
> The site itself needs **no** dependencies.

---

## Project structure

```
build.mjs                 # generator — pages + sitemap.xml + robots.txt
DEPLOY-NOTES.md           # go-live checklist, redirects, server config
ASSETS-SHOT-LIST.md       # photography/art-direction brief for every image slot
src/
  data/                   # ← EDIT CONTENT HERE (single source of truth)
    site.mjs              #   brand, contact, CTAs, social, stats, integrations
    nav.mjs               #   header mega-menus + footer link groups
    products.mjs          #   hearing aid families, all models, types, other products
    investor.mjs          #   investor sections + document lists (with live PDF links)
    centers.mjs           #   partner-center directory (drives search + schema)
    board.mjs             #   directors + committees
    reviews.mjs           #   customer reviews (verified flag gates star display)
    blog.mjs              #   blog posts + categories (lang:"hi" for Hindi posts)
    faqs.mjs              #   FAQ sets (also feed FAQ schema)
  lib/
    layout.mjs            #   HTML document shell, SEO meta, JSON-LD schema
    components.mjs        #   reusable UI components (header, footer, cards, forms…)
    templates.mjs         #   product / investor / blog page templates
    icons.mjs             #   inline SVG icons + signature soundwave motif
  pages/                  #   one module per hand-authored page (home, about, …)
assets/
  css/styles.css          #   design system (tokens, components, responsive)
  css/fonts.css           #   self-hosted @font-face rules
  fonts/                  #   Fraunces + Figtree woff2 subsets (~280 KB, OFL)
  js/main.js              #   menus, reveal, filters, center search, lead forms
  img/                    #   favicon, og image + place for real photography
*.html + sitemap.xml + robots.txt   # generated output (committed)
```

## Design system

- **Colour:** navy `#0A2440` · deep teal `#0F6E7E` · champagne gold `#C69A45`, on a soft
  blue-grey ground. Tokens live at the top of `assets/css/styles.css`.
- **Type:** Fraunces (display serif) + Figtree (body sans), **self-hosted** in
  `assets/fonts/` (no third-party font requests). Hindi content uses native
  Devanagari system fonts. Large body sizes and line-height for senior-citizen
  readability.
- **Signature motif:** an audiogram / soundwave line device used across heroes, dividers
  and image placeholders.
- **Motion:** subtle fade-up reveals, hover elevation, sticky-header transition — all
  respecting `prefers-reduced-motion`.

## Accessibility & SEO

- Semantic HTML, skip link, visible focus states, keyboard-operable menus.
- Per-page `<title>`/meta description, canonical URLs, Open Graph tags.
- JSON-LD: `MedicalBusiness` (Organization), `BreadcrumbList`, `FAQPage`, `BlogPosting`.
- Breadcrumbs + internal linking throughout.

## Preserved legacy routes

`about-us.html`, `board-details.html`, `material.html`, `geo4.html` reuse the original
URLs. Existing live PDFs (prospectus, shareholding pattern, earnings-call transcript, etc.)
are linked as absolute `https://earkart.in/...` URLs so downloads keep working.

---

## Before go-live

See **`DEPLOY-NOTES.md`** for the full checklist (legacy-URL redirect map,
server config, integrations, content markers) and **`ASSETS-SHOT-LIST.md`**
for the photography brief. Quick pointers:

- `[CONFIRM]` / `[Add ...]` markers in `src/` are the pending-content list.
- Forms: set `integrations.formEndpoint` in `src/data/site.mjs` to activate
  real submissions (labelled demo mode until then; honeypot spam field included).
- Analytics: paste your snippet into `integrations.analyticsHeadSnippet`.
- Centers: add real clinics to `src/data/centers.mjs` (`verified: true`
  enables LocalBusiness structured data; search UI works automatically).
- Photos: pass the file path as the 4th argument of `imagePlaceholder(label,
  ratio, tone, src)` — becomes a lazy-loaded `<img>` with the label as alt text.
