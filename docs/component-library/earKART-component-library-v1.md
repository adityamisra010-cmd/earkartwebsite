# earKART Component Library v1.0

**Phase:** 3 (Component Library) · **Status:** Batch 1 of 3 — Foundations + Core. Remaining families queued (§ end).
**Built on:** `design-system/earKART-design-system-v1.md` tokens. **Brand:** strict-5 (navy text, cyan accent, gray non-text), Montserrat/Poppins. `[TBD]` where assets/data pending.
**Every component must pass** the §10 accessibility baseline of the Design System before acceptance.

### Per-component template (used throughout)
> **Purpose** · **Anatomy** · **Variants** · **States** · **Sizing/tokens** · **Accessibility** · **Psychology** · **Usage (do / don't)**

---

# A. FOUNDATIONS

## A1. Button
**Purpose:** Trigger the single most important action of a section.
**Anatomy:** label (Montserrat 600) · optional leading/trailing icon (24px) · padding `--space-md`/`--space-lg` · radius `--radius-md`.
**Variants:**
- **Primary** — navy fill `--color-cta`, white label. The one high-intent action ("Book a Free Hearing Test").
- **Secondary** — navy 2px outline, navy label, transparent fill. Lower-commitment alt ("Take the 3-Minute Check").
- **Text+arrow** — navy label + cyan arrow, no fill. Tertiary/in-card nav.
- `[TBD: destructive variant — uses --color-danger, portal only]`
**States:** default · hover (navy→`#2B2270` darken / outline fills 8% navy) · active · focus (2px cyan ring + 2px offset) · disabled (gray border/label, no shadow) · loading (inline spinner, label → "Working…", control disabled).
**Sizing:** height 52px (primary CTA) / 44px (standard) — never below 44px. Full-width on mobile.
**Accessibility:** real `<button>`/`<a>`; label is action text (never "click here"); icon decorative `aria-hidden`; focus visible; 44px min.
**Psychology:** action+specificity wording (Spec §13); single primary per section enforces Hick's Law / one-decision rule.
**Usage:** ✅ one primary CTA per section; pair with a low-commitment secondary. ❌ never white-on-cyan; ❌ never two equal-weight primaries competing; ❌ no "Submit/Buy Now/Learn More".

## A2. Link (inline + arrow link)
**Purpose:** Navigate without the weight of a button.
**Variants:** inline text link (navy, cyan underline on hover/focus) · standalone arrow link (navy label + cyan `→`).
**States:** default · hover (underline) · focus (ring) · visited `[TBD: if differentiated]`.
**Accessibility:** underline or non-color cue on hover/focus (never color-only); descriptive text; 44px target on mobile.
**Usage:** ❌ cyan link text on white must use the **underline + navy text** pattern (raw cyan text fails contrast); cyan is the accent on the arrow/underline, not the text body.

## A3. Form Input + Label
**Purpose:** Collect one piece of information with minimum anxiety.
**Anatomy:** **always-visible** label (Montserrat 500) · field (radius `--radius-sm`, 1px `--color-border`) · optional helper text · inline validation slot.
**States:** default · focus (cyan ring, navy border) · filled · error (`--color-danger` border + message + icon) · success (`--color-success` check, sparing) · disabled.
**Sizing:** field height ≥48px; label above field; helper/error below.
**Accessibility:** `<label for>`; never placeholder-as-label; error text linked via `aria-describedby`; error names problem + fix; 200% zoom safe.
**Psychology:** visible labels + plain helper reduce form anxiety (Stripe clarity, Spec §1.2).
**Usage:** ✅ one column on mobile; ✅ group related fields. ❌ no placeholder-only labels; ❌ no color-only error.

## A4. Choice controls (Radio / Checkbox / Scale)
**Purpose:** Capture structured answers — central to the hearing-check tool.
**Variants:** radio · checkbox · **5-point scale** (Never→Always) as large radios.
**States:** default · hover · focus · selected · error · disabled.
**Sizing:** **44×44px minimum** hit area per option (Spec §8); generous spacing for 55+ dexterity.
**Accessibility:** native inputs; grouped with `fieldset/legend`; keyboard arrow-key navigation within a group; selected state not by color alone (add fill + check).
**Psychology:** large targets reduce error/anxiety for older users; scale framing avoids clinical yes/no pressure.

---

# B. NAVIGATION & SHELL

## B1. Top Navigation (desktop)
**Purpose:** Orient + provide persistent access to the primary CTA.
**Anatomy:** logo (left) · 6 pillars (Hearing Health · Solutions · Technology · Find a Clinic · Resources · About) · Search · Language toggle (EN/हिं) · **"Book a Hearing Test"** primary button (right).
**States:** full 80px → sticky-reduced 60px on scroll · pillar hover (opens mega-menu) · active pillar (navy underline) · focus.
**Accessibility:** `<nav>` landmark; keyboard-operable menus; visible focus; skip-to-content precedes it; CTA always a button, never a text link.
**Psychology:** persistent trust + always-available conversion path; reduced-height on scroll preserves content focus.
**Usage:** ✅ CTA always navy button. ❌ never hide the CTA; ❌ no more than 6 pillars (decision fatigue).

## B2. Mega-menu
**Purpose:** Reveal a pillar's sub-pages with visual hierarchy, not a bare link list.
**Anatomy:** grouped columns + **card previews** (icon/label/one-liner) + one contextual CTA.
**States:** opening (panel `--dur-panel` ease-out) · open · closing · item hover/focus.
**Accessibility:** keyboard open/close (Enter/Esc), focus trapped while open, `aria-expanded`; not hover-only (focus also opens).
**Psychology:** visual mega-menus raise task success up to 33% vs text-only (Spec §5.2).

## B3. Mobile Navigation + Bottom CTA bar
**Purpose:** Full-screen menu + a booking action that never requires scrolling.
**Anatomy:** hamburger labeled **"Menu"** (text, not icon-only) · full-screen slide-in · accordion sections · **persistent bottom bar** with "Book a Hearing Test" + tap-to-call.
**States:** closed · open · section expand/collapse · bottom-bar always visible.
**Accessibility:** labeled control (WCAG 2.5.3); focus management on open; bottom bar doesn't obscure content/focus; 44px targets.
**Psychology:** persistent mobile CTA recovers the ~41% mobile booking gap (Spec §5.2 evidence block).

## B4. Footer
**Purpose:** Reassure + provide complete secondary navigation + compliance.
**Anatomy:** brand + statement + social · Hearing Health links · Services links · Company (incl. **Investor Relations**) · Contact + newsletter · compliance bar (medical disclaimer, registration, copyright) · trust bar (ISHA `[TBD]`, ISO 13485, brand certs).
**Accessibility:** `<footer>` landmark; newsletter input follows A3 rules.
**Usage:** ✅ surface verified credentials only (review/00 §3). ❌ no unnamed "award-winning."

## B5. Breadcrumbs
**Purpose:** Locate the user in the IA and ease back-navigation.
**Anatomy:** navy links + gray separators; current page non-link.
**Accessibility:** `aria-label="Breadcrumb"`, `BreadcrumbList` schema; current page `aria-current="page"`.

---

# C. CORE PAGE COMPONENTS

## C1. Hero (split media)
**Purpose:** Pass the 5-second test — what, for-whom, next step (Spec §6.1.5).
**Anatomy:** H1 (Playfair→**Montserrat** 700) · subhead · primary + secondary CTA · trust micro-copy · media (real photo) + optional cyan sound-wave accent. Mobile: photo full-width, gradient scrim, text overlaid.
**States:** load reveal (headline→sub→CTA staggered, `--dur-reveal` ease-out; subtle Ken-Burns on photo) · reduced-motion = instant.
**Accessibility:** one `<h1>`; scrim ensures AAA text over image; CTAs keyboard-first.
**Psychology:** identity-before-information; loss-framed headline; trust micro-copy disarms sales resistance (Spec §6.1.6).
**Usage:** ✅ transformed-life headline. ❌ no product/spec headline; ❌ no hearing-aid close-up hero.

## C2. Section Header
**Purpose:** Open a section with one idea.
**Anatomy:** eyebrow (label, optional) · H2 · optional one-line intro.
**Usage:** one emotional objective per section; navy text; generous `--space-3xl` above.

## C3. Stat Counter / Trust Bar
**Purpose:** Rational social proof.
**Anatomy:** 4-up grid; big number (Montserrat tabular 700) + label + sourced micro-copy.
**States:** count-up from 0 on viewport enter (`--dur-reveal`); reduced-motion = static final value.
**Accessibility:** final value present in DOM for SR (not only animated); not color-dependent.
**Psychology:** attentional capture + "earned number" authenticity (Spec §6.1.6 Zone E).
**Usage:** ✅ verified numbers only — currently `[TBD]` placeholders (review/00 §3). ❌ never fabricate.

## C4. Pathway Card
**Purpose:** Route each persona to their relevant journey (max 3 — Hick's Law).
**Anatomy:** icon · first-person title ("I think my hearing has changed") · one-line body · text+arrow CTA · colored **left border accent** (navy / cyan / gray — within strict-5).
**States:** default · hover (elevation `--elev-2`, border emphasis) · focus.
**Psychology:** persona mirroring cuts time-to-engagement up to 40% (Spec §6.1.6 Zone D).
**Usage:** ✅ exactly 3 primary (optional 4th via "More"). ❌ never more than 4.

## C5. CTA Banner
**Purpose:** Full-width low-commitment conversion (e.g., hearing check).
**Anatomy:** navy fill · white H2 + body · white button (navy label) · caveat micro-copy.
**Accessibility:** white-on-navy passes AAA; button is navy-on-white (never white-on-cyan).
**Psychology:** foot-in-the-door micro-conversion (Spec §6.1.6 Zone H).

## C6. Pull Quote / Empathy Block
**Purpose:** Normalize concerns before solutions.
**Anatomy:** Poppins/Montserrat large text, navy, generous space, no image; optional bilingual line.
**Psychology:** narrative transportation; "doesn't make you less" addresses stigma (Spec §6.1.6 Zone C).

---

# D. ENTITY CARDS

## D1. Audiologist / Doctor Card
**Purpose:** earKART's strongest trust signal — a named, real human.
**Anatomy:** real photo · name · qualifications + reg. no. `[TBD]` · specializations · languages · clinic/OMNI served · CTA "Book with this audiologist" / "Find their clinic".
**States:** default · hover (elevation) · focus.
**Accessibility:** real `alt` describing the person; `Person` schema; not photo-only (name/credentials in text).
**Psychology:** human-face effect + relationship trust (Spec §1.3, §11 L1).
**Usage:** ❌ **never stock photos** (Spec §11.2). Real + consented only.

## D2. Clinic Card
**Anatomy:** clinic photo · name · named audiologist (photo) · hours · transport/parking · languages · rating `[TBD]` · "What to expect" link.
**Psychology:** anticipatory-anxiety reduction (Spec §6.7.3).

## D3. OMNI Point Card
**Anatomy:** location · modalities available (Audiometry/Tympanometry/OAE/Video Otoscopy) · remote-expert note · "Book a remote test".
**Usage:** state screening-vs-clinical scope honestly.

## D4. Product (Hearing Aid) Card — anti-catalog
**Anatomy:** lifestyle photo (not white-bg product shot) · friendly name · "Right for you if…" (3 behavioral bullets) · **context price** (monthly/EMI prominent) · "Try in a Free Trial" / "Ask an Audiologist".
**Psychology:** lifestyle-first organization cuts choice paralysis (Spec §6.5).
**Usage:** ❌ no model-number/spec-first; ❌ no price-first.

## D5. Patient Story Card
**Anatomy:** candid portrait · pull quote · name/age/city/since `[TBD: real consented]` · "Read full story".
**Psychology:** identifiable-victim effect (Spec §6.1.6 Zone F).

## D6. Blog / Article Card
**Anatomy:** thumbnail · category tag · title · read-time · excerpt · review-stamp indicator.
**Accessibility:** `Article` schema; descriptive link text.

## D7. Milestone Item / Certification Card
**Anatomy (milestone):** year · event (verified 2021–2025 timeline). **(certification):** mark · issuer · plain-language patient meaning · `[TBD: cert image/number]`.
**Usage:** attributable credentials only.

---

# E. FEEDBACK & SYSTEM

## E1. Inline Alert
**Variants:** success (`--color-success`) · warning (`--color-warning`) · danger (`--color-danger`) · info (navy).
**Anatomy:** icon + message; deep state color on small footprint, not large fills.
**Accessibility:** `role="status"`/`alert`; **icon + text**, never color-only; AAA text.

## E2. Result Card (hearing-check outcomes)
**Purpose:** Deliver one of three outcomes calmly.
**Variants:** Typical (success green, checkmark) · Worth-exploring (warning amber, flag) · See-someone-soon (danger-tone but **non-alarming**, stethoscope).
**Anatomy:** outcome icon · plain headline · reassuring body · contextual CTA (low/moderate/clear urgency) · secondary learn link · **post-results** (not gated) email offer.
**Accessibility:** outcome conveyed by icon+text+color (never color alone); calm tone mandatory.
**Psychology:** reassurance vs. empowerment, never alarm (Spec §6.2.3); reciprocity-after-value email capture (Spec §6.2.4).

## E3. Modal / Dialog
**States:** open (scrim + panel `--elev-3`) · close (Esc/scrim/button).
**Accessibility:** focus trapped + restored; `aria-modal`; labeled; no time-limit auto-dismiss <60s.

## E4. Toast / Notification
**Accessibility:** `aria-live`; auto-dismiss ≥ readable duration with manual close; not the only channel for critical info.

## E5. Loader / Skeleton
**Purpose:** Reduce perceived wait (queue psychology).
**Variants:** inline spinner (cyan accent) · skeleton blocks. Reduced-motion: static skeleton, spinner retained as essential.

## E6. Multi-step Progress
**Purpose:** Lower abandonment in booking + hearing check.
**Anatomy:** step dots/bar always visible; current step labeled.
**Accessibility:** `aria-current="step"`; progress not color-only.
**Psychology:** progress indicators cut process-abandonment anxiety (Spec §1.2).

---

# F. Queued for Batch 2 / 3 (not yet fully specced)
**Batch 2 (forms & data):** Select · Date/Time picker · File upload · Newsletter signup · Appointment widget · Comparison table · Pricing block · Timeline · Accordion · FAQ · Tabs · Filters · Map+results · Search · Pagination · Tag/chip · Language toggle (standalone).
**Batch 3 (portal & future AI):** Patient-portal shell · Maintenance reminder · AI Hearing Coach widget · Symptom checker · Caregiver dashboard · Audiogram visualization · Empty/error states · Tooltip.

Each will follow the same template on the same tokens. `[TBD]` data/assets per review/00 §3.

---

*Next: say "continue" for Batch 2. No code until Phase 8.*
