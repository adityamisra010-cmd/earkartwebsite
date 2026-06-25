# earKART — Design System MASTER (Source of Truth)

Generated via **ui-ux-pro-max** skill workflow (Step 2), grounded in the WDS v2.1 Constitution and the frozen v1 brand tokens. Page-specific deviations live in `design-system/pages/<page>.md` and override this file for that page.

## 1. Product Analysis
- **Product type:** Healthcare / hearing-care service (high-trust, high-consideration, family-mediated). Patient-first, *not* e-commerce catalog.
- **Audience:** 55+ patients (low–moderate digital literacy) + 30s–40s caregivers; India, multilingual, mobile-skewed.
- **Style keywords:** warm minimalism, calm clinical, trustworthy, editorial, accessible-first.
- **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS. Rationale: SEO is the primary acquisition channel (WDS), content-heavy, needs SSR/ISR, strong a11y + performance control.
- **Skill pattern:** trust-led service site → hero-centric landing + education hub + low-friction conversion. Anti-pattern to avoid: product catalog / spec tables / shopper framing.

## 2. Color Tokens (frozen from v1 — semantic, never raw hex in components)
| Token | Value | Role |
|---|---|---|
| `--brand-teal` | #1A6B72 | Primary, CTAs, active nav, headings accent |
| `--brand-teal-700` | #145157 | Hover/pressed primary |
| `--cream` | #F7F3EE | Page background (calmer than clinical white) |
| `--amber` | #D4831A | Accent, gentle highlight, badges |
| `--charcoal` | #2C3340 | Body text, structure (≈15:1 on cream = AAA) |
| `--charcoal-60` | rgba(44,51,64,.6) | Subdued text (still ≥4.5:1) |
| `--sage` | #6B9E7A | Success / positive / "typical result" |
| `--dusty-rose` | #C4786B | Sensitive content / gentle alert |
| `--blue-gray` | #E8EFF5 | Secondary surfaces, info boxes |
| `--surface` | #FFFFFF | Card surface on cream |
| `--border` | rgba(44,51,64,.12) | Dividers (visible, low-contrast) |
**Rules:** every FG/BG pair ≥4.5:1 (AAA target 7:1 for body); color never the sole signal (pair with icon/text); semantic tokens only (skill §6 `color-semantic`, WDS A-076).

## 3. Typography
- **Display:** Playfair Display (700) — H1/H2, hero, pull quotes (editorial authority).
- **Body/UI:** DM Sans (400/500/700) — body, nav, CTAs, labels (humanist, older-reader friendly).
- **Utility:** DM Mono — stats, measurements.
- **Scale (desktop / mobile):** H1 56–72 / 36–44 · H2 40–48 / 28–34 · H3 26–30 / 22–26 · Body-lg 18 / 17 · Body 16 / 15 (mobile min 15) · Caption 13–14.
- **Rules:** body line-height 1.65–1.75; 60–75 chars/line desktop; `font-display: swap`; preload Playfair + DM Sans (skill §3, §6).

## 4. Spacing, Grid, Radius, Elevation
- **Spacing:** 8px base scale → 4/8/16/24/32/48/64/96 (skill §5 `spacing-scale`).
- **Grid:** desktop 12-col, max content 1280px, 160px outer margins; tablet 8-col; mobile 4-col, 16px gutters.
- **Radius:** sm 8px (inputs/buttons), md 16px (cards), lg 24px (feature panels).
- **Elevation:** consistent scale — card `0 1px 3px rgba(44,51,64,.08)`, raised `0 6px 24px rgba(44,51,64,.10)`. No random shadows.

## 5. Interaction & Motion
- Touch targets ≥44×44px, ≥8px spacing (skill §2, WDS A-077).
- One **primary CTA** per page (teal); secondary = outlined teal (skill §4 `primary-action`, WDS A-017).
- Feedback within 100ms on every action; buttons disable + spinner during async (WDS A-068).
- Motion 150–300ms micro / 600–800ms reveals; transform+opacity only; ease-out enter; **always** honor `prefers-reduced-motion` (skill §7, WDS A-081).
- Distinct hover/focus/pressed/disabled states; visible focus ring 2–3px teal at ≥3:1.

## 6. Accessibility Floor (launch gate)
WCAG 2.1 AA min, AAA for body text + primary CTAs. Full keyboard operability + visible focus + skip link; labels always visible (never placeholder-only); captions on video; non-audio path for any audio UI; functional at 200% zoom; no horizontal scroll ≥320px. (skill §1, WDS A-075…A-082.)

## 7. Brand Behavior (from WDS Phase B — binding)
Warm, unhurried, honest, quietly confident. Hope over fear (80/20). Person-first language. **Forbidden:** guilt, fake urgency/scarcity, exaggerated/guaranteed outcomes, interface overload, making users feel old/broken, shaming hearing loss, dark patterns, fake humans/stock-as-real, unsourced claims, shopper framing, jargon without plain-language translation.

## 8. Icons & Imagery
- SVG icon set only (Lucide), 2px stroke, 24px base, one family; **never emoji as icons** (skill §4 `no-emoji-icons`). Icons always paired with text labels for primary functions (WDS A-069).
- Photography: real, consented, South-Asian, warm natural light, three-quarter framing, candid connection; never device-as-hero or clinical white lifestyle shots (WDS A-091, A-010).

## 9. Component Source
Build only from the WDS Phase E inventory (134 components). New patterns need a documented gap (WDS A-119).
