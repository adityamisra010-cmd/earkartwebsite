# earKART Design System v1.0

**Phase:** 2 (Design System) · **Status:** Draft — placeholders marked `[TBD]`
**Inherits from:** `docs/review/00`–`03` (brand, IA, data rules). Where this doc and Spec v1.0 disagree on brand, **this doc + review/02 win** (navy/cyan, Montserrat/Poppins, strict-5).
**Does NOT define:** per-component anatomy (that is Phase 3, Component Library) or any framework/code (Phase 8).

> This is the system that governs how every page *behaves visually*. Pages are later assembled from components built on these tokens — "LEGO," not bespoke screens.

---

## 1. Design Principles (how every page should feel)
1. **Calm over clever.** Stillness is the default; motion and color are earned.
2. **One ink, clear hierarchy.** Navy carries all text; rank comes from size, weight, space — not more colors.
3. **Trust before transaction.** Every screen shows a reason to trust before any ask (Spec §11).
4. **Plain language first, depth on demand.** Progressive disclosure everywhere (Spec §1.2).
5. **Accessible by default, not as a retrofit.** AAA body text, 44px targets, keyboard-first (Spec §8).
6. **Honest signals only.** No invented stats, no stock "audiologists," no false urgency (Spec §9, §11.2).
7. **Designed for 55+ first.** If it works calmly for an anxious 68-year-old, it works for everyone.

### Visual personality
**Is:** premium, human, warm, medical-grade, quiet, confident, modern, transparent.
**Is not:** corporate, hospital-cold, salesy, ecommerce-busy, startup-flashy, government-portal.

### Visual anti-patterns (banned)
Polygon/gradient-mesh backgrounds · heavy drop shadows · neon cyan as text · gray body text · pure-white-only warmth (compensate per §3 note) · stock business photography · icon-only primary actions · countdown timers / fake scarcity.

---

## 2. Color tokens (strict 5 + functional states)
Full rationale in `review/02`. Semantic token layer for implementation:

| Semantic token | Value | Use |
|----------------|-------|-----|
| `--color-bg` | `#ffffff` | Page/surface background |
| `--color-text` | `#171050` (navy) | All body + heading text |
| `--color-text-strong` | `#000000` | Rare max-contrast text/over imagery |
| `--color-text-inverse` | `#ffffff` | Text on navy |
| `--color-cta` | `#171050` | Primary button fill |
| `--color-cta-label` | `#ffffff` | Primary button label |
| `--color-accent` | `#00c7f1` (cyan) | Highlights, focus, icons-on-navy — never text on white |
| `--color-border` | `#999999` | Dividers, input borders, disabled |
| `--color-focus` | `#00c7f1` | Focus ring (≥2px, 3:1 against adjacent) |
| `--color-success` | `#0F6B45` | Positive result / confirmation |
| `--color-warning` | `#8A5300` | Gentle alert / "worth exploring" |
| `--color-danger` | `#9A1C1C` | Errors / destructive only |

**Rules:** navy = only text color; cyan never carries text on white and never has white text on it; gray is non-text; states < 3% of a screen, signaling only. Dark mode `[TBD: scope]`.

---

## 3. Typography tokens
Faces: **Montserrat** (primary/all text+UI), **Poppins** (secondary display moments). Detail in `review/02`.

| Token | Desktop | Mobile | Weight | Line height |
|-------|---------|--------|--------|-------------|
| `--type-h1` | 56–64px | 34–40px | 700 | 1.1 |
| `--type-h2` | 40–44px | 28–32px | 700 | 1.2 |
| `--type-h3` | 26–28px | 22–24px | 600 | 1.3 |
| `--type-h4` | 20–22px | 18–20px | 600 | 1.4 |
| `--type-body-lg` | 18px | 17px | 400 | 1.7 |
| `--type-body` | 16px | 16px | 400 | 1.65 |
| `--type-caption` | 13–14px | 13px | 400 | 1.5 |
| `--type-label` | 12–13px | 12px | 500 | 1.4 |

**Rules:** mobile body min 16px; survive 200% text zoom; long-form measure 60–75ch; numerals use Montserrat tabular figures. Hierarchy is carried by these tokens, not color.

---

## 4. Spacing & layout (8px base — from Spec §2.5)
| Token | px | | Token | px |
|-------|----|-|-------|----|
| `--space-xs` | 4 | | `--space-2xl` | 48 |
| `--space-sm` | 8 | | `--space-3xl` | 64 |
| `--space-md` | 16 | | `--space-4xl` | 96 |
| `--space-lg` | 24 | | | |
| `--space-xl` | 32 | | | |

**Grid:** Desktop 12-col / 80px gutter / 1280px max / 160px margins · Tablet 8-col / 48px gutter / 32px margins · Mobile 4-col / 24px gutter / 16px margins.
**Breakpoints:** `sm 480` · `md 768` · `lg 1024` · `xl 1280` · `2xl 1536` (px). Mobile-first.

---

## 5. Shape, elevation, focus
- **Radius:** `--radius-sm 8px` (inputs, chips) · `--radius-md 12px` (buttons, cards) · `--radius-lg 20px` (modals, feature cards) · `--radius-pill 999px` (tags). Soft, friendly — supports warmth without color.
- **Elevation (restrained — no heavy shadows):** `--elev-0` none · `--elev-1` `0 1px 2px rgba(23,16,80,.06)` · `--elev-2` `0 4px 12px rgba(23,16,80,.08)` · `--elev-3` `0 10px 28px rgba(23,16,80,.10)` (modals/menus only). Shadows tinted with navy, never black.
- **Focus ring:** 2px solid `--color-focus` + 2px offset; visible on keyboard focus for every interactive element (Spec §8).
- **Borders/hairlines:** 1px `--color-border` at reduced opacity for grouping.

---

## 6. Motion tokens (from Spec §2.7; color refs corrected)
| Token | Value |
|-------|-------|
| `--ease-out` | `cubic-bezier(0,0,0.2,1)` (enter) |
| `--ease-in` | `cubic-bezier(0.4,0,1,1)` (exit) |
| `--ease-inout` | `cubic-bezier(0.4,0,0.2,1)` (move) |
| `--dur-micro` | 100–150ms (hover/focus) |
| `--dur-ui` | 200–250ms (toggles) |
| `--dur-panel` | 300–350ms (cards/panels) |
| `--dur-page` | 400–500ms |
| `--dur-reveal` | 600–800ms (scroll reveals, counters) |

**Philosophy:** "Move when it serves the user; be still when it doesn't." Accent motion (focus glow, counters) uses cyan. **`prefers-reduced-motion: reduce`** disables all non-essential motion. `[TBD: motion spec for the OMNI/hearing-check interactive moments]`.

---

## 7. Iconography
- 2px stroke, 24px base grid, line style matching navy ink; accent fills in cyan only where meaningful.
- Min touch target 44×44px; **always paired with a text label** for primary actions (Spec §2.6).
- Localized meanings; avoid region-specific symbols. Library `[TBD: pick set — recommend a consistent open line-icon family, customized to 2px navy]`.

---

## 8. Photography & illustration
- **Photography:** real Indian patients (consented) / South Asian subjects; natural light; homes, families, clinics, OMNI points; emotional moments (conversation, listening, connection). **Never** hearing-aid close-ups as hero, clinical-white lifestyle shots, or non-Indian primary subjects, or stock audiologists (Spec §2.6, §11.2). Asset library `[TBD: source + consent pipeline]`.
- **Illustration:** 2px line art, **navy ink + cyan accents** on white; Indian demographic diversity, multigenerational households. Style sheet `[TBD]`.
- **Warmth compensation (because background is strict white):** lean on photography, whitespace, soft radii, and alternating navy sections to avoid clinical coldness.

---

## 9. UX writing / microcopy tokens (from Spec §13)
- **Buttons:** action + specificity — "Book a Free Hearing Test," "Take the 3-Minute Hearing Check," "Talk to an Audiologist." Never "Buy Now / Submit / Learn More."
- **Person-first:** "people with hearing loss," "noticing changes in your hearing" — never "suffering from," "hearing impaired."
- **Errors:** name the problem + the fix; visible labels (never placeholder-as-label).
- **Tone:** warm, unhurried, non-judgmental; bilingual-ready (EN + हिंदी); medical terms followed by plain-language + Hindi on first use.
- Reusable strings (loading, success, confirmation, empty states) `[TBD: microcopy library]`.

---

## 10. Accessibility baseline (tokens inherit Spec §8)
WCAG AAA body text · 44×44px targets · full keyboard nav + visible focus · 200% zoom safe · no color-only meaning (pair with icon/label/text) · captions on video · non-audio alternative for the hearing-check tone test · no autoplay audio. Every component in Phase 3 must pass this baseline before acceptance.

---

## 11. Component inventory (Phase 3 builds these on the tokens above)
Target ~100–150 reusable components. Each will define **purpose · states · variants · accessibility · psychology · usage rules** in the Component Library phase. Inventory (grouped):

**Navigation & shell:** Top nav (desktop sticky, 80→60px) · Mega-menu (visual cards) · Mobile hamburger ("Menu" labeled) · Mobile bottom CTA bar · Breadcrumbs · Footer · Language toggle (EN/हिं) · Search · Skip-to-content.
**Actions:** Primary button · Secondary/outline button · Text+arrow link · Icon button (labeled) · FAB `[TBD: if used]` · Tag/chip · Pagination.
**Hero & marketing:** Hero (split media) · Section header · Stat counter · Trust bar · Logo strip · Pull quote · Empathy block · Pathway card · CTA banner · Feature card.
**Cards:** Doctor/Audiologist card · Clinic card · OMNI point card · Product (hearing aid) card · Patient story card · Blog/article card · Review card · Milestone item · Certification card.
**Forms & inputs:** Text input · Select · Radio (44px) · Checkbox · Slider/scale · Date/time picker · File upload · Form group/label · Inline validation · Multi-step progress · Appointment widget · Newsletter signup.
**Data & content:** Comparison table · Pricing block (context-priced) · Timeline · Accordion · FAQ · Tabs · Audiogram visualization `[TBD]` · Filters · Map + results.
**Feedback & system:** Toast/notification · Inline alert (success/warning/danger) · Modal/dialog (focus-trapped) · Tooltip (keyboard-triggerable) · Loader/skeleton · Empty state · Error state · Result card (3 hearing-check outcomes).
**Patient portal / future AI:** Portal shell `[TBD]` · Maintenance reminder · AI Hearing Coach widget `[TBD]` · Symptom checker `[TBD]` · Caregiver dashboard `[TBD]`.

---

## 12. Open `[TBD]` items for this phase
Dark-mode scope · logo clear-space & min-size (from brand PDF image) · icon library choice · photography source/consent pipeline · illustration style sheet · microcopy string library · audiogram visualization approach · final swatch confirmation of state hexes · real data per `review/00 §3`.

---

## 13. v2 Addenda (approved — from `review/04`)

### 13.1 Visual signature (the ownable element)
**The "soundwave underline" + ear-curl.** A short **cyan** soundwave-shaped underline sits beneath the 1–3 emphasized words of key headlines (hero H1, section openers, pull quotes), echoing the logo's ear-curl. This is earKART's signature mark of emphasis.
- Token: `--signature-underline` (cyan `#00c7f1`, ~3–4px, soundwave path).
- **Rules:** at most **one** signature underline per viewport; emphasis only (never decoration); pairs with navy text (underline is the only cyan); honors reduced-motion (static path, no animated draw unless motion allowed). Optional v1+ micro-animation: underline "draws" once on first reveal (`--dur-reveal`, ease-out).

### 13.2 Strict typography thresholds (Apple-panel fix)
Commit hard rules so the pairing reads intentional, not loose:
- **Poppins is reserved** for emotional-peak moments only: hero H1, pull quotes, patient-story headlines. Nowhere else.
- **Montserrat carries all structure:** every H2/H3/H4, body, UI, labels.
- Display sizes (H1/H2) never drop below their min in the scale; do not use Poppins below 26px.
- Verify Montserrat + Poppins meet **AAA on white at every size** (navy text passes; confirm at small sizes during build).

### 13.3 Touch-target override for elder flows
Primary interactive controls in the **hearing-check and booking flows** use a **56×56px** minimum (up from the 44px global floor) — addresses arthritis/low-dexterity in the elder cohort (v2 Phase 8 Cohort A). 44px remains the floor everywhere else.

### 13.4 Motion dictionary (commitment)
Replace motion *philosophy* with a per-interaction **dictionary** (trigger → curve → duration → reduced-motion fallback) before high-fidelity (Phase 6). Table stub to be filled per component; uses the §6 tokens. `[TBD: complete dictionary in Phase 6]`.

### 13.5 Citation integrity (global)
All on-site copy and internal rationale follow v2's Citation Integrity Protocol: primary source for any stat, no fabricated citations, cite **direction not magnitude** when a figure is unverified, `[Requires India-specific validation]` on Western research.

### 13.6 Other v2 system mandates (tracked here, applied in later phases)
Mobile-first authoring canvas (Phase 5) · accessibility as a per-component acceptance gate (not a separate section) · error state + inline validation + `autocomplete` on **every** form field · search designed in full · consent-architecture foundation in v1 · EAST + Fogg + explicit **defaults** (appointment duration, follow-up cadence, comms frequency) per conversion action.

---

*Next (Phase 3): expand §11 into full per-component specs on these tokens; add Batch 4 per `review/04 §3`. No code until Phase 8.*
