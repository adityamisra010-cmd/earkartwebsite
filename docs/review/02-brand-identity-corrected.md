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

Because earKART's audience skews 55+ (contrast-sensitivity loss of 25–40%), the spec's WCAG **AAA** body-text target still stands. **Owner decision: stay strictly to the 5 official colors** — no derived neutrals or surface tints. The accessibility facts above are therefore not solved by adding colors but by **rules of use**: navy does all text-carrying work; gray and cyan never carry text.

### Strict 5-color system — how each role is filled (no new brand hues)
| Need | Solution within the 5 colors | Why |
|------|------------------------------|-----|
| Headings | `brand-navy #171050` (700/600) | ~15:1 ✅ AAA |
| Body text | `brand-navy #171050` (400) | ~15:1 ✅ AAA — navy is the single text color |
| Secondary / muted text | `brand-navy` at **smaller size + 500 weight** (hierarchy by type, not color) | keeps AAA; avoids the unreadable gray |
| Max-contrast text (rare) | `black #000000` | when navy-on-imagery needs more punch |
| Primary CTA | `navy` fill + **white** label | ✅ AAA; never white-on-cyan |
| Accent / highlight / focus / icons-on-navy | `cyan #00c7f1` | accent only — **never** as text on white, never white text on cyan |
| Dividers, borders, disabled, ≥24px captions | `gray #999999` | non-text only |
| Background / surface | `white #ffffff` | the brand background |

**Hierarchy is built from type weight, size, and spacing — not from extra colors.** This is more disciplined and, done well, reads as premium (cf. high-end editorial systems that use one ink color).

> **Honest trade-off:** the spec argued pure white reads "clinical." With strict-white now mandated, warmth must come from **photography, generous whitespace, soft/rounded components, and alternating navy sections** — not a cream tint. Flagged so the Design System phase compensates deliberately.

### Functional state colors — admitted sparingly (owner: green/amber/red OK, but stay close to brand)
Used **only** for semantic signaling (hearing-check results, form validation, confirmations) — never as brand/marketing color. Kept deep and slightly desaturated so they sit quietly beside navy/cyan rather than competing.

| State | Proposed hex | Role | Contrast on white |
|-------|--------------|------|-------------------|
| `success` | `#0F6B45` (deep green) | "All clear" result, positive confirmation | ~7:1 ✅ AAA |
| `warning` | `#8A5300` (deep amber) | "Worth exploring" result, gentle alert | ~7:1 ✅ AAA |
| `danger` | `#9A1C1C` (deep red) | Form errors, destructive actions only — **never** false urgency (Spec §9) | ~7:1 ✅ AAA |

> These three are functional UI tokens, not additions to the brand palette. Footprint target **< 3%** of any screen, on small elements (icons, text, thin borders) — never large flat fills that read as a new brand color. Final hexes confirmable against swatches in the Design System phase; values above are tuned to ≥7:1 on white.

### Usage proportions
- ~70% white (background/surface)
- ~22% navy (text, structure, primary actions)
- ~5% cyan accents
- ~3% gray (non-text) + functional state colors

### Dark mode
`[TBD: confirm dark mode is in scope]`. If yes within strict-5: navy becomes the surface, white/cyan carry text and accent (cyan-on-navy passes), gray for dividers. Derive in Design System phase.

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
| Background | Cream `#F7F3EE` | White `#ffffff` (strict 5-color) |
| Text | Charcoal `#2C3340` | Navy `#171050` (single text color) |
| Display font | Playfair Display | Montserrat (+ Poppins secondary) |
| Body font | DM Sans | Montserrat |
| Mono | DM Mono | Montserrat tabular figures |

*All `[TBD]` items follow the owner's "use placeholders" decision and are gated by the Final Quality Gate (Spec §12) before launch.*
