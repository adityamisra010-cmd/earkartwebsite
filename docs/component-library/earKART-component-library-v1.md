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

# F. FORMS & DATA (Batch 2)

## F1. Select / Dropdown
**Purpose:** Pick one option from a known set without typing.
**Anatomy:** visible label (A3 rules) · trigger (radius `--radius-sm`, 1px border, cyan caret) · option list (`--elev-2`).
**States:** default · focus (cyan ring) · open · selected · error · disabled.
**Accessibility:** native `<select>` preferred; if custom, full `listbox` ARIA + arrow-key nav + type-ahead; 44px options; label associated.
**Usage:** ✅ for ≤ ~12 known options. ❌ don't use for 2–3 options (use radios) or free text.

## F2. Date / Time Picker
**Purpose:** Choose an appointment slot with minimum friction.
**Anatomy:** field + calendar/time panel; available slots emphasized, unavailable disabled (gray, non-color cue too).
**States:** default · focus · open · selected · unavailable · error.
**Accessibility:** keyboard-navigable grid (`grid`/arrow keys); announce selected date; allow typed entry as alternative; no precise-pointer-only interaction (Spec §8).
**Usage:** ✅ show next available prominently. ❌ never convey availability by color alone.

## F3. File Upload
**Purpose:** Accept documents (e.g., prior audiogram).
**Anatomy:** labeled drop zone + browse button + file list with remove + progress.
**States:** idle · drag-over · uploading (progress) · success · error (type/size, named + fix).
**Accessibility:** keyboard-triggerable (not drag-only); clear accepted types/size in text; status via `aria-live`.

## F4. Newsletter Signup
**Anatomy:** one email field (A3) + button + consent micro-copy + post-submit success state.
**Accessibility:** visible label; success/error via inline alert (E1).
**Psychology:** offered after value (reciprocity), never gated before it (Spec §6.2.4). **Usage:** ❌ no pre-ticked consent (Spec §9 dark-pattern ban).

## F5. Appointment Widget (booking)
**Purpose:** The macro-conversion — book with the least friction.
**Anatomy:** multi-step (E6 progress): service → location/clinic or OMNI → date/time (F2) → details (A3) → confirm. Persistent summary; price/insurance context where relevant `[TBD: data]`.
**States:** per-step valid/invalid · submitting (loading) · confirmed (success screen + what-next) · failure (recoverable, no data loss).
**Accessibility:** each step a labeled region; errors block politely with fixes; back never loses entered data; 60s+ on any timeout.
**Psychology:** progress + clarity + "no pressure" framing reduce abandonment (Spec §1.2, §6.4).
**Usage:** ✅ low-commitment alt visible ("prefer to call?"). ❌ no fake-scarcity slot counts (Spec §9).

## F6. Comparison Table
**Purpose:** Help users compare options without overwhelm.
**Anatomy:** sticky header row/column; plain-language row labels; tooltips (G-batch) for terms; highlighted "recommended for you" column.
**States:** default · row hover · responsive collapse (stacked cards on mobile).
**Accessibility:** real `<table>` semantics (`th scope`); horizontal scroll has keyboard access; never term-only without plain-language.
**Psychology:** relevance highlighting beats raw feature dumps (Spec §6.5). **Usage:** ❌ never spec-first/model-number-first.

## F7. Pricing Block (context-priced)
**Purpose:** Present cost as manageable, with context.
**Anatomy:** "Starts from" + **monthly/EMI prominent** · 0% No-Cost EMI · Free 1-Year Insurance · Exchange/Upgrade (save up to ₹25,000) · Free Online Consultation `[verified offers]` · insurance/scheme note `[TBD]`.
**Accessibility:** tabular figures; not color-coded only.
**Psychology:** cost-per-day/financing reframing lowers price anxiety (Spec §6.5). **Usage:** ❌ no absolute-number-first; ❌ no hidden fees (Spec §11 L4).

## F8. Timeline
**Purpose:** Show momentum/process (milestones 2021–2025; or "what to expect" steps).
**Anatomy:** vertical (mobile) / horizontal (desktop) nodes: marker · year/step · label.
**States:** in-view reveal (`--dur-reveal`, reduced-motion static) · current node emphasis.
**Accessibility:** ordered list semantics; not motion-dependent for meaning.

## F9. Accordion
**Purpose:** Layer detail on demand (progressive disclosure).
**Anatomy:** header button (label + cyan chevron) · collapsible panel.
**States:** collapsed · expanded · focus · hover.
**Accessibility:** `button` + `aria-expanded` + controlled region; keyboard toggle; one-or-many open `[TBD: choose]`.
**Psychology:** reduces cognitive load; summary visible, depth optional (Spec §1.2).

## F10. FAQ
**Purpose:** Answer common questions + earn `FAQPage` schema.
**Anatomy:** accordion list (F9) grouped by topic; optional search.
**Accessibility:** `FAQPage` structured data; each Q a heading for SR navigation.

## F11. Tabs
**Purpose:** Switch between sibling content views in place.
**States:** selected · unselected · focus · disabled.
**Accessibility:** `tablist`/`tab`/`tabpanel` ARIA; arrow-key navigation; selected not color-only (underline/weight).
**Usage:** ❌ don't hide critical content (e.g., pricing) behind a non-default tab on key pages.

## F12. Filters
**Purpose:** Narrow large sets (clinics, articles, products) by relevance.
**Anatomy:** chips/checkboxes/selects + active-filter summary + clear-all + result count.
**States:** default · active · disabled (no results) · loading.
**Accessibility:** grouped, labeled; announce result-count changes (`aria-live`); keyboard operable.
**Psychology:** relevance filtering cuts choice paralysis (Spec §6.5).

## F13. Map + Results (clinic / OMNI finder)
**Purpose:** Connect users to a physical/OMNI location with low anxiety.
**Anatomy:** location input (F? + Search) · split map+list (desktop) / list with map toggle (mobile) · Clinic cards (D2)/OMNI cards (D3) · "or call us" fallback.
**States:** idle · geolocating (permission w/ polite reason) · results · empty · error.
**Accessibility:** list is fully usable without the map (map not sole channel); keyboard list nav; permission rationale in text.
**Psychology:** pre-visit info + named audiologist reduce no-shows ~23% (Spec §6.7.3).

## F14. Search
**Anatomy:** input + icon (always visible in nav) · suggestions · results with category tags.
**States:** empty · typing/suggesting · results · no-results (helpful empty state).
**Accessibility:** labeled; `combobox` ARIA for suggestions; keyboard-selectable; no-results offers next step.

## F15. Pagination
**Anatomy:** prev/next + page numbers (or load-more).
**Accessibility:** `nav` landmark; `aria-current="page"`; 44px targets; current not color-only.

## F16. Tag / Chip
**Variants:** static label (category) · removable (active filter) · selectable (filter choice).
**Accessibility:** removable chips keyboard-deletable with clear label; not color-only state.

## F17. Language Toggle (EN / हिंदी)
**Purpose:** Switch language anywhere (nav + footer).
**States:** current language indicated (text, not flag-only) · focus.
**Accessibility:** real control with `lang` handling; label in both scripts; persists choice `[TBD: mechanism]`.
**Psychology:** Hindi availability critical for older/Tier-2 audience (Spec §13.2). **Usage:** core conversion flows must work in Hindi before launch.

---

# G. PORTAL & FUTURE AI (Batch 3)

> These are **returning-user / future** surfaces (Spec §journey: Returning → Advocating, and §AI Features). Scope is partly future — `[TBD: confirm which ship in v1]`. They still inherit all tokens + the §10 accessibility baseline, and the same honesty rules (no chatbot pretending to be human — Spec §11.2).

## G1. Patient-Portal Shell
**Purpose:** Continuity of care for returning patients — appointments, devices, results, reminders, support.
**Anatomy:** authenticated header (account, language, sign-out) · side/bottom nav (Dashboard · Appointments · My Devices · Results · Support) · content area · global notification slot.
**States:** loading (skeleton) · empty (first-time) · populated · error · signed-out.
**Accessibility:** landmarks + skip links per view; focus management on route change; 200% zoom safe; session-timeout warning ≥60s with save.
**Psychology:** retention via continuity (Spec §journey Returning). **Usage:** `[TBD: auth model, v1 scope]`.

## G2. Maintenance Reminder
**Purpose:** Proactive device-care nudges (cleaning, battery, check-up) that build loyalty without nagging.
**Anatomy:** reminder card — icon · plain message · due date · action ("Book a check-up" / "Mark done" / "Snooze").
**States:** upcoming · due · overdue (warning tone, **never alarmist**) · done · snoozed.
**Accessibility:** state via icon+text+color; reminders also reachable in-portal (not push-only).
**Psychology:** service-relationship + reciprocity; gentle, supportive tone (Spec §Headspace mechanism). **Usage:** ❌ no guilt language ("you forgot…").

## G3. AI Hearing Coach (widget)
**Purpose:** Conversational guidance/education — answer hearing questions, explain next steps.
**Anatomy:** launcher (labeled, not icon-only) · chat panel · message list · input · **clear "AI assistant" disclosure** · "talk to a human audiologist" escalation always visible.
**States:** collapsed · open · thinking (loader) · response · escalation · error/offline.
**Accessibility:** `aria-live` for incoming messages; full keyboard; not the only path to any critical info; readable contrast.
**Psychology:** low-friction help; trust depends on transparency. **Usage:** ❌ **never imply it's a human** (Spec §11.2 catastrophic-to-trust); ✅ always offer human handoff; medical answers carry the screening-not-diagnosis caveat.

## G4. Symptom Checker (conversational)
**Purpose:** Guide users through structured questions toward a calm, non-diagnostic recommendation.
**Anatomy:** stepped Q&A (reuse A4 choice controls + E6 progress) · plain-language items · result hand-off to Result Card (E2).
**States:** intro · in-progress · result · restart · error.
**Accessibility:** one question per step; keyboard-first; no audio-only steps (non-audio alternative).
**Psychology:** reassurance over alarm; empowerment framing (Spec §6.2.3). **Usage:** ❌ never output a "diagnosis"; always "a starting point" + book CTA.

## G5. Caregiver Dashboard
**Purpose:** Let a family member (e.g., Priya/Rohan personas) help manage a parent's hearing care with consent.
**Anatomy:** linked-patient summary · upcoming appointments · reminders · shared results `[TBD: consent + privacy model]` · "book on their behalf" · conversation-help resources.
**States:** no linked patient · pending consent · linked/active · access revoked.
**Accessibility:** clear whose data is shown; consent state explicit; standard landmarks/focus.
**Psychology:** family-mediated decision support (Spec personas P2/P6; §1.7 collective decisions). **Usage:** ❌ no access without explicit patient consent (PDPB/privacy — Spec §11 L5).

## G6. Audiogram Visualization
**Purpose:** Show hearing-test results in plain, non-frightening terms.
**Anatomy:** frequency×level chart · per-ear series · plain-language banding ("mild/moderate…") · plain-text summary beside the graphic.
**States:** loading · rendered · no-data · interactive hover/focus point.
**Accessibility:** **never graphic-only** — provide a text/table equivalent of every data point; color + shape for L/R (not color alone); keyboard-explorable points.
**Psychology:** comprehension reduces anxiety (Stripe clarity; Spec §1.2). **Usage:** ✅ pair with audiologist explanation; `[TBD: data source/format]`.

## G7. Empty State
**Purpose:** Turn "nothing here" into a guided next step, not a dead end.
**Anatomy:** calm illustration (navy/cyan line) · plain message · one primary action.
**Variants:** first-use · no-results (search/filter) · cleared/done.
**Accessibility:** meaningful heading + actionable text; illustration decorative (`alt=""`).
**Psychology:** maintains momentum; avoids the trapped feeling (Spec §Headspace exit-ramps).

## G8. Error State
**Purpose:** Recover gracefully without anxiety or blame.
**Anatomy:** icon (danger tone, restrained) · what happened (plain) · what to do (retry / call us / go back) · support contact.
**Variants:** inline (field/section) · full-page (404/500) · offline.
**Accessibility:** `role="alert"` where appropriate; names the problem + fix (Spec §8 cognitive); never color-only; keyboard-focusable recovery action.
**Usage:** ❌ no jargon/error codes as the primary message; ✅ always a human fallback (phone/WhatsApp).

## G9. Tooltip
**Purpose:** On-demand definition of a term (audiogram, tinnitus) without leaving context.
**Anatomy:** trigger (term with subtle cue) · small popover (`--elev-2`) · plain-language definition.
**States:** hidden · shown (hover **and** focus) · dismiss (Esc).
**Accessibility:** **keyboard-triggerable** (focus, not hover-only — Spec §8); `aria-describedby`; never the only place critical info lives; not used for essential interactive content.
**Psychology:** inline term-explanation supports the plain-language-first principle (Spec §1.2, §8 cognitive).

---

## Component Library — coverage summary
| Batch | Family | Status |
|-------|--------|--------|
| 1 | Foundations · Navigation & shell · Core page · Entity cards · Feedback & system | ✅ |
| 2 | Forms & data | ✅ |
| 3 | Portal & future AI | ✅ |

**~50 components specced** across the inventory. Per-component visual design (high-fidelity) happens in Phase 6 on these specs; build in Phase 8. Open `[TBD]`s (assets, data, auth/consent/AI scope) tracked in `review/00 §3` and per-component notes.

---

# H. v2 ADDITIONS (Batch 4 — from `review/04 §3`)

> Inherit all tokens + the §10 a11y baseline + Design System §13 addenda. **56px** min target in hearing-check/booking contexts.

## H1. "I'm not sure which service" helper
**Purpose:** Rescue users who can't self-select a service (top booking-step-1 friction).
**Anatomy:** soft prompt under the service list → opens 2–3 plain questions → recommends a service (pre-selects it) with "why."
**States:** collapsed · open · recommending · result. **A11y:** keyboard-first; recommendation in text. **Psychology:** anxiety accommodation; removes ability barrier (Fogg). **Usage:** never a dead-end; always lands on a concrete next step.

## H2. "Booking for someone else" branch
**Purpose:** Resolve the caregiver ambiguity (whose details?).
**Anatomy:** top-of-form toggle "Who is this for? — Myself / A family member" → branches field set (patient vs. caregiver+patient).
**States:** self · on-behalf (consent-aware, ties to G5). **A11y:** clear whose data each field captures. **Psychology:** family-mediated decision model (Indian context). **Source:** P8 Cohort B, P4.6.

## H3. Share-results-with-family
**Purpose:** Let hearing-check results travel to the decision-making family.
**Anatomy:** "Share these results" → WhatsApp/email/link (consented) from the Result Card (E2).
**A11y:** keyboard-operable share; clear what is shared. **Psychology:** collectivist decision-making (P4.2). **Guard:** explicit consent; no silent data exposure.

## H4. Audiologist callback ("Call me now / Request a callback")
**Purpose:** Capture high-intent users who want a human immediately (results + service pages).
**States:** idle · requested (confirmation + expected window) · error. **A11y:** labeled; status via `aria-live`. **Dependency:** staffed callback `[TBD: SLA]`. **Psychology:** ability-barrier removal at the trust peak.

## H5. WhatsApp booking entry
**Purpose:** Conversational booking for low-digital-literacy / elder cohorts (Cohort G's only viable path).
**Anatomy:** labeled WhatsApp action at booking entry + mobile bottom bar; deep-links to a pre-filled message.
**States:** available · unavailable (fallback to form/phone). **Dependency:** **staffed WhatsApp SLA — go-live gated** (owner decision 4). **A11y:** real link, not icon-only. **Guard:** publish the response-time SLA where shown.

## H6. Return-visitor personalized CTA  *(spec now; build in v2 — consent-gated)*
**Purpose:** Stop showing "Take the hearing check" to someone who already did; advance them.
**Anatomy:** cookie/consent-aware swap → "Welcome back. Ready to book?" / "Dr. [X] has availability this week."
**States:** first-visit (default) · returning-known · returning-high-intent. **Dependency:** **consent-architecture foundation** (v1) → personalization (v2). **A11y:** never trap; default content always works without cookies. **Source:** P8 Cohort K.

## H7. "For Families" signal + SEO-landing persona banner
**Purpose:** Route adult-children researchers correctly, incl. on SEO landings (not just homepage).
**Anatomy:** nav signal "For Families"; contextual banner on education pages — "Reading this for someone you love? →".
**A11y:** dismissible, keyboard-focusable. **Psychology:** persona mirroring (P8 Cohort B).

## H8. Current-page indicator
**Purpose:** Orientation, especially for older users who lose their place.
**Anatomy:** unmistakable active state in nav (navy weight + signature underline), `aria-current="page"`. **A11y:** not color-only. **Source:** P4.7.

## H9. Default / "Most popular for your situation" marker
**Purpose:** Use the most powerful behavioral lever — defaults — on solution/comparison cards.
**Anatomy:** a quiet badge on the most-suitable option ("Recommended by our audiologists for…").
**Guard:** must be **honest** (real audiologist guidance, not a sales nudge). **Psychology:** default effect + social proof (BIT). **Source:** P4.3.

## H10. Pre-booking FAQ block ("Questions people ask before booking")
**Purpose:** Pre-empt the final hesitation on service pages.
**Anatomy:** accordion (F9) of before-booking objections (cost, pain, pressure, duration). **Schema:** `FAQPage`. **Psychology:** objection pre-emption / reactance reduction. **Source:** P4.4.

## H11. Save-and-continue-later
**Purpose:** Let users who must consult family pause without losing progress (booking + hearing check).
**States:** save (link/email to resume `[TBD]`) · resume · expired. **A11y:** clear how to return. **Psychology:** autonomy; anxiety accommodation. **Source:** P4.6.

## H12. Pre-commitment device
**Purpose:** Capture intent that isn't ready to act now.
**Anatomy:** "Remind me to book next Tuesday" / "Send me info to review first" → consented reminder.
**Guard:** honors no-pressure (≥7-day, content-led, instant opt-out). **Psychology:** pre-commitment (BIT/Thaler). **Source:** P5.7.

## H13. Audiologist match flow
**Purpose:** Reduce decision paralysis: "tell us your situation → matched audiologist."
**Anatomy:** 2–3 questions → matched profile(s) (D1) with "why matched" → book. **A11y:** keyboard-first; results in text. **Psychology:** matching-as-conversion (BetterHelp). **Source:** P3, P8 Cohort C.

## H14. Visual signature (soundwave underline)
See Design System §13.1. Component-level: an emphasis underline applied to 1–3 words; one per viewport; cyan; reduced-motion safe.

---

# I. INNOVATIONS — v1 BUILD (approved)

## I1. Future Hearing Simulator  *(flagship)*
**Purpose:** Let users **hear the difference** between their likely current hearing and hearing-aid-assisted — the highest conversion lever (v2 Phase 10 #4).
**Anatomy:** pick a familiar clip (grandchild's voice, song, conversation) → hear it through 3 "lenses": typical / likely-current (from check results or preset profile) / with-hearing-aids. Prominent "educational, not diagnostic" label.
**States:** intro · select clip · playing (per lens) · compare · CTA ("see what's possible → book"). **Loading:** audio buffer; reduced-motion irrelevant (audio). 
**A11y:** **non-audio alternative** (visual/text description of what's gained per frequency); captions; keyboard controls; never audio-only meaning. 56px controls.
**Clinical gate:** audiologist-reviewed; approximate; **no brand-specific** simulation — simulate the *category* of benefit. `[TBD: clinical calibration sign-off]`.
**Psychology:** direct experience > statistics; converts Rajan-type users by making the abstract concrete.

## I2. Digital Audiologist (audiogram explainer)  *(extends G6)*
**Purpose:** Demystify the audiogram — the most important, least understood document in the journey (v2 Phase 10 #9).
**Anatomy:** enter/upload audiogram → visual across frequencies with **speech-banana** overlay → plain-language per-band explanation ("at this pitch you likely miss the letter S, birdsong…") → general device-category suitability (with audiologist caveat).
**A11y:** **text/table equivalent** of every data point (never graphic-only); keyboard-explorable; color+shape for L/R.
**Clinical gate:** educational not diagnostic; audiologist-reviewed; no specific-device recommendation. **Psychology:** comprehension reduces anxiety; demystification builds trust.

> **Deferred to v2:** AI Hearing Coach "Asha" (G3, needs clinical-governance board), Family Decision Dashboard (G5, needs consent/privacy architecture), plus Phase-10 P2/P3 modules.

---

## Component Library — coverage summary (updated)
| Batch | Family | Status |
|-------|--------|--------|
| 1 | Foundations · Nav/shell · Core page · Entity cards · Feedback | ✅ |
| 2 | Forms & data | ✅ |
| 3 | Portal & future AI | ✅ |
| 4 | v2 additions (H1–H14) + v1 innovations (I1–I2) | ✅ |

**~66 components specced.** v2-deferred AI modules noted. Per-component visual design happens in Phase 6; build in Phase 8.

---

*Component Library v1.1 complete (incl. v2 Batch 4). Next: revise UX Blueprint flows per `review/04 §9`, then Phase 5 wireframes. No code until Phase 8.*
