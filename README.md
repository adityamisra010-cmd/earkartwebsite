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
build.mjs                 # generator — assembles pages, guards against dup routes
src/
  data/                   # ← EDIT CONTENT HERE (single source of truth)
    site.mjs              #   brand, contact details, CTAs, social, impact stats
    nav.mjs               #   header mega-menus + footer link groups
    products.mjs          #   hearing aid families, all models, types, other products
    investor.mjs          #   investor sections + document lists (with live PDF links)
    board.mjs             #   directors + committees
    reviews.mjs           #   customer reviews
    blog.mjs              #   blog posts + categories
    faqs.mjs              #   FAQ sets (also feed FAQ schema)
  lib/
    layout.mjs            #   HTML document shell, SEO meta, JSON-LD schema
    components.mjs        #   reusable UI components (header, footer, cards, forms…)
    templates.mjs         #   product / investor / blog page templates
    icons.mjs             #   inline SVG icons + signature soundwave motif
  pages/                  #   one module per hand-authored page (home, about, …)
assets/
  css/styles.css          #   design system (tokens, components, responsive)
  js/main.js              #   progressive enhancement (menus, reveal, forms)
  img/                    #   og image + place for real photography
*.html                    #   generated output (committed for zero-tooling preview)
```

## Design system

- **Colour:** navy `#0A2440` · deep teal `#0F6E7E` · champagne gold `#C69A45`, on a soft
  blue-grey ground. Tokens live at the top of `assets/css/styles.css`.
- **Type:** Fraunces (display serif) + Figtree (body sans), loaded from Google Fonts.
  Large body sizes and line-height for senior-citizen readability.
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

## Before go-live — items to replace

Search the codebase for these markers:

- `[CONFIRM]` / `[Confirm ...]` — contact numbers, addresses, CIN, listing details, specs.
- `[Add ...]` — verified stat numbers, dates, director profiles/photos, document links.
- Image placeholders — swap `imagePlaceholder(...)` blocks / `assets/img/` for real photos.
- Forms (`data-form` in `src/lib/components.mjs`) are **front-end only** — connect to a
  CRM / email / booking backend.
- Partner CTA and OMNI patent-certificate links are placeholders — point to the real URLs.
