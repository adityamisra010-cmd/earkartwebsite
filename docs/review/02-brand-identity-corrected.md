# earKART — Brand Identity, Corrected (replaces Design Spec v1.0 §2.3–§2.7)

**Status:** Draft for approval · **Supersedes:** Spec §2 teal/cream/amber + Playfair/DM Sans
**Canonical source:** Official `Earkart_brand_guidelines.pdf`
**Decision applied:** D1 — official brand guidelines win. The 5 logo colors and the two fonts below are **fixed**. Everything marked *proposed extension* is a web-product addition that does not alter the core brand and needs sign-off in the Design System phase.

---

## 2.3 Color System (corrected)

### Core brand palette — FIXED (from guidelines, do not change)
| Token | Hex | Role |
|-------|-----|------|
| `brand-navy` | `#171050` | Primary brand. "ear" wordmark, headings, primary CTA fills, footer. |
| `brand-cyan` | `#00c7f1` | Accent. "KART" wordmark, highlights, hover/active accents, icons-on-dark. |
| `brand-gray` | `#999999` | Muted UI only — dividers, borders, disabled, large captions. **Not body text** (see accessibility). |
| `white` | `#ffffff` | Primary background / surface. |
| `black` | `#000000` | Maximum-contrast text where navy is not used. |

### ⚠️ Accessibility reality of the core palette (must read before use)
Contrast vs. white background (WCAG 2.1):
- **`brand-navy` on white ≈ 15:1** → ✅ AAA. Use for all body text, headings, CTA fills (with white text).
- **`brand-cyan` on white ≈ 1.8:1** → ❌ fails for any text. Cyan is **decorative/accent only**, or a fill with **navy/black text on top** (cyan+black ≈ 12:1 ✅). **Never white-on-cyan for text.**
- **`brand-gray #999999` on white ≈ 2.8:1** → ❌ fails normal text; OK only for ≥24px/decorative. **Do not set body or secondary copy in #999999.**

Because earKART's audience skews 55+ (contrast-sensitivity loss of 25–40%), the spec's WCAG **AAA** body-text target still stands — which means the core 5 colors are **not sufficient** for a real interface. The extension below supplies accessible text neutrals and semantic states.

### Proposed extended web palette — *for Design System approval*
Anchored on navy + cyan; adds only what an interface needs (no new brand hues).

| Token | Hex | Derivation | Role | Contrast on white |
|-------|-----|-----------|------|-------------------|
| `navy-900` | `#171050` | brand-navy | Headings, primary text | ~15:1 ✅ AAA |
| `navy-700` | `#2B2270` | navy lightened | Hover for navy CTAs | ✅ AAA |
| `ink-700` | `#2E2E3A` | neutral, navy-tinted | **Body text** (warmer than pure black) | ~12:1 ✅ AAA |
| `ink-500` | `#55576A` | neutral | **Secondary text** (replaces the unusable #999999 for copy) | ~7:1 ✅ AAA |
| `gray-400` | `#999999` | brand-gray | Borders, dividers, disabled, large captions only | non-text |
| `gray-200` | `#E6E8EF` | tint | Hairlines, input borders | non-text |
| `surface-50` | `#F5F8FB` | cyan-tinted near-white | Section background tint (the "calm" surface, replacing spec's cream) | non-text |
| `cyan-500` | `#00c7f1` | brand-cyan | Accent, highlight, focus glow, icons-on-navy | accent only |
| `cyan-600` | `#0090B4` | cyan darkened | **Cyan that needs to be text/links on white** (~4.6:1 ✅ AA) | links/large text |
| `success` | `[TBD: confirm or use #1E8E5A]` | green | "All clear" results, positive states | AAA target |
| `warning` | `[TBD: confirm or use #B26A00]` | amber | "Worth exploring" results, gentle alerts | AAA target |
| `danger` | `[TBD: confirm or use #B3261E]` | red | Errors, destructive only (never urgency-marketing per §9) | AAA target |

> Semantic state colors are marked `[TBD]` because they are not in the brand guidelines — owner to confirm exact hues in the Design System phase. Suggested values meet AAA on white.

### Usage proportions (proposed)
- ~70% white / `surface-50` (calm, clinical-warm)
- ~20% navy (structure, headings, primary actions)
- ~7% cyan accents
- ~3% semantic state colors

### Dark mode
`[TBD: confirm dark mode is in scope]`. If yes: navy becomes surface, cyan becomes the accessible accent (cyan-on-navy ≈ ✅), text inverts to `surface-50`/white. Derive in Design System phase.

---

## 2.4 Typography System (corrected)

### Type stack — FIXED (from guidelines)
| Role | Face | Weights | Usage |
|------|------|---------|-------|
| **Primary** | **Montserrat** | 400, 500, 600, 700 | Headings, hero statements, UI, CTAs, navigation, body. |
| **Secondary** | **Poppins** | 400, 500, 600 | Supporting/marketing display, pull quotes, stat callouts, where a softer geometric tone helps. |
| Numerals/technical | Montserrat (tabular figures) | 500 | Statistics, pricing, audiogram values. (No separate mono in brand; use Montserrat tnum.) |

> Spec's Playfair Display + DM Sans + DM Mono are **superseded**. Both Montserrat and Poppins are geometric humanist sans — pair them by **role/weight**, not by mixing two display serifs. Keep them distinct: Montserrat for structure/body, Poppins reserved for expressive display moments so the pairing reads intentional.

### Type scale (spec's senior-friendly reasoning re-applied to Montserrat)
| Role | Desktop | Mobile | Weight | Line height |
|------|---------|--------|--------|-------------|
| Hero H1 | 56–64px | 34–40px | 700 Montserrat | 1.1 |
| Section H2 | 40–44px | 28–32px | 700 Montserrat | 1.2 |
| Card H3 | 26–28px | 22–24px | 600 Montserrat | 1.3 |
| H4 | 20–22px | 18–20px | 600 Montserrat | 1.4 |
| Body Large | 18px | 17px | 400 Montserrat | 1.7 |
| Body | 16px | 16px | 400 Montserrat | 1.65 |
| Caption | 13–14px | 13px | 400 Montserrat | 1.5 |
| Label | 12–13px | 12px | 500 Montserrat | 1.4 |

**Accessibility:** mobile body minimum **16px** (raised from spec's 15px given the 55+ audience); layouts must survive a 200% text-size increase without breaking. Reading width 60–75 characters for long-form.

---

## 2.6 Iconography & Illustration (corrected color refs)
- Icons: 2px stroke at 24px base, 44×44px min touch target, always paired with a text label (per spec, unchanged).
- **Line/ink color: `brand-navy`** (was "teal ink"); **accent highlights: `brand-cyan`** (was amber).
- Illustration fills on `surface-50`/white; Indian demographic diversity and multigenerational households (per spec §2.6, unchanged).
- Photography art direction (real Indian patients/audiologists/clinics, natural light, person-first) — **unchanged from spec §2.6**, brand-independent.

---

## 2.7 Motion (corrected color refs only)
Motion philosophy, easing curves, durations, and `prefers-reduced-motion` rules from Spec §2.7 are **unchanged** (brand-independent). Only color references update: focus glows / highlight sweeps use **`cyan-500`**; number-counter and reveal accents use **navy → cyan**, never teal/amber.

---

## Logo usage (from guidelines)
- Wordmark: navy "ear" + cyan/gray "KART" with the ear-curl mark. Maintain clear space; do not recolor outside approved variants.
- Approved backgrounds per guidelines: on white, on navy, on imagery (with sufficient contrast scrim).
- `[TBD: confirm exact clear-space ratio and minimum logo size from brand PDF pages 2 — not fully captured in text extract.]`

---

## What changed vs. Spec v1.0 (summary)
| Element | Spec v1.0 (wrong) | Corrected (canonical) |
|---------|-------------------|------------------------|
| Primary | Teal `#1A6B72` | Navy `#171050` |
| Accent | Amber `#D4831A` | Cyan `#00c7f1` |
| Background | Cream `#F7F3EE` | White + `surface-50` `#F5F8FB` |
| Text | Charcoal `#2C3340` | `ink-700 #2E2E3A` / navy |
| Display font | Playfair Display | Montserrat (+ Poppins secondary) |
| Body font | DM Sans | Montserrat |
| Mono | DM Mono | Montserrat tabular figures |

*All `[TBD]` items follow the owner's "use placeholders" decision and are gated by the Final Quality Gate (Spec §12) before launch.*
