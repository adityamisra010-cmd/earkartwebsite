# earKART — v2 Integration & Reconciliation

**Status:** Draft for approval · **Inputs:** `docs/source/v2/` Phases 2–10 (now canonical research inputs).
**Purpose:** Convert the v2 findings into concrete changes against our Phase 1–4 deliverables. This is the bridge between the strategy spec and the build phases — it tells us what to **add, change, resolve, and decide** before wireframes.
**Authority:** v2 phases are research/critique inputs; where they prescribe a concrete design change, this doc records the resolution. Brand remains the official navy/cyan + Montserrat/Poppins (review/02) regardless of v1/v2 color rationale.

---

## 1. What v2 confirms vs. changes for us

- **Confirms our reconciliation work:** v2 Phase 2's citation audit independently flags fabricated/unverifiable citations (`Pappas 2011`, `Meloni 2021`, Schauss cortisol %, the "33%/41%/23%/35%" figures). This matches our placeholder-everything decision (review/00 §3). **The brand-color rationale debate (teal opinion/unknown) is now moot** — we already switched to official navy/cyan.
- **Adds a Citation Integrity Protocol** (Phase 2 §2.3) we adopt globally: primary source required for any stat; no fabricated citations; `[Requires India-specific validation]` flag on Western research; cite **direction not magnitude** when a figure is unverified; annual review.
- **Adds large amounts of concrete design guidance** (Phases 4–10) that extend — not contradict — our Design System, Component Library, and UX Blueprint. Captured below.

---

## 2. Citation / data corrections (extends review/00 §3)
Purge these from any copy/rationale; keep the **direction**, drop the **number**:
| Claim | Action |
|-------|--------|
| "Pappas 2011" 8% comprehension | ❌ remove citation; light bg kept on harmony grounds |
| "Meloni 2021" progress-bar 22–28% | ❌ remove; keep progress bars (practitioner-supported) |
| Schauss cortisol "3–5%" | ❌ remove %; "warm bg reduces perceived stress" |
| DM Sans "12–15%" (now Montserrat anyway) | ❌ remove %; keep humanist-legibility direction |
| "33% mega-menu", "41% mobile", "23% no-show", "35% choice" | ⚠️ cite direction only, no number |
| Loss-framing "22–30%", daily-rate "27%", anchoring | ✅ evidence-backed; cite properly, add `[India validation pending]` |

---

## 3. Component Library — ADDITIONS (Phase 4, 8, 10)
New components / variants to spec (append to `component-library` as Batch 4):
| ID | Component | Source | Priority |
|----|-----------|--------|----------|
| H1 | **"I'm not sure which service" helper** → recommends service (booking step 1) | P4.6, P9 booking | P1 |
| H2 | **"Booking for someone else"** branch (self / family member) | P8 Cohort B, P4.6 | P1 |
| H3 | **Share-results-with-family** action (hearing-check results) | P4.2, P10-5 | P1 |
| H4 | **Audiologist callback** ("Call me now") at results + service pages | P4.2 | P2 |
| H5 | **WhatsApp booking entry** alongside web form | P4.6, P8 Cohort G | P1 |
| H6 | **Return-visitor personalized CTA** (cookie-based: "Welcome back…") | P8 Cohort K | P2 |
| H7 | **"For Families" nav signal** + SEO-landing persona banner ("Reading this for someone you love?") | P4.7, P8 Cohort B | P1 |
| H8 | **Current-page indicator** in nav (unmistakable active state) | P4.7 | P1 |
| H9 | **Default-option / "Most popular for your situation"** marker on solution cards | P4.3, BIT defaults | P2 |
| H10 | **"Questions people ask before booking"** pre-booking FAQ block | P4.4 | P2 |
| H11 | **Save-and-continue-later** for booking + hearing check | P4.6, P8 | P2 |
| H12 | **Pre-commitment device** ("Remind me to book next Tuesday" / "Send info first") | P5.7 BIT | P2 |
| H13 | **Audiologist match flow** ("tell us your situation → matched audiologist") | P3 BetterHelp, P8 Cohort C | P2 |
| H14 | **Visual signature element** — one ownable earKART motif (see §6) | P5.1 Apple | P1 |
**Touch-target override:** raise interactive minimum from 44px to **56px** for primary controls used by the elder/arthritis cohort (hearing check, booking) — supersedes the 44px floor for those flows (P8 Cohort A).

### Innovations to spec as components (Phase 10) — by priority
- **P1–P2:** Future Hearing Simulator (#4) — "hear the difference" (highest conversion lever). Digital Audiologist / audiogram explainer (#9) — extends our G6.
- **P2:** AI Hearing Coach "Asha" (#2, extends G3) · Family Decision Dashboard (#5, extends G5) · Conversation-first homepage variant (#1) · Conversation Confidence Score (#6) · Progressive Hearing Journey (#8).
- **P3:** Relationship Timeline (#3) · Social Isolation Risk Meter (#7, clinical-validation gated) · Life Events Timeline (#10).
> Clinical-safety gate: simulator, isolation meter, and any audiogram interpretation require audiologist sign-off and "educational, not diagnostic" labeling.

---

## 4. Information Architecture — NEW PAGES (Phase 6 §6.2)
Add to the reconciled sitemap (review/01 §3):
| Page | Pillar | Priority |
|------|--------|----------|
| For Healthcare Professionals / **GP & ENT Referrals** | About or standalone | **P1** (highest-conversion channel in Indian audiology) |
| **Government Schemes & Subsidies** | Hearing Health / Solutions | P1 (design justice, economic inclusion) |
| Hearing Aid **Maintenance & Care** hub | Solutions/Resources | P2 (reduces device abandonment + support load) |
| **Our Quality Standards / Patient Charter** | About | P2 (integrity trust; specific commitments) |
| **Press / Media Room** | About | P2 |
| **HTML Sitemap** | utility | P1 (SEO + a11y) |
| **404 / Error page** (designed) | utility | P1 |
| **Teleaudiology / Remote Consultation** | Technology (≈ OMNI) | P2 — fold into OMNI |
| **Corporate Hearing Health** (B2B buyer journey: HR/EHS/Medical Officer) | Solutions/Technology | P3 |
| Annual **"State of Hearing Health in India"** report | Resources | P3 (authority/PR) |

---

## 5. Contradictions to RESOLVE (Phase 6 §6.1) — recommended resolutions
| # | Tension | Resolution (recommended) |
|---|---------|--------------------------|
| 1 | Anti-catalog vs. product grid w/ pricing | **Filter-first mandate**: Solutions page must ask 1–2 situation questions → reveal 1–2 cards. Never render the full grid upfront (also fixes density 5.0, §6). Update Flow 6 + D4. |
| 2 | "Warm/unhurried" vs. persistent mobile CTA | Persistent bar uses **warm wording** ("Ready when you are"), never "Book Now"/urgency. |
| 3 | "Sales never" vs. conversion-only metrics | Add **trust-state metrics** (engagement depth, return visits, story engagement) beside conversion. |
| 4 | "No pressure" vs. 3-day email sequence | Follow-up = **≥7-day gap, content-led, instant opt-out** — never "you haven't booked." |
| 5 | WCAG AAA vs. large display type | Moot for color (navy passes); **verify Montserrat/Poppins at all sizes meet AAA** on white. |

---

## 6. Adversarial-review mandates that change the SYSTEM (Phase 5)
Bake into Design System / Component Library / wireframe constraints:
- **Visual signature (Apple):** define **one** ownable earKART element. Candidate: the **ear-curl mark + a single cyan "soundwave underline"** motif used consistently for emphasis. → new token + usage rule. *(decide §8)*
- **Strict type thresholds (Apple):** commit exact rules — e.g., Poppins display **reserved** for hero + pull-quotes + story headlines only; Montserrat for all structural H2/H3. Add hard size thresholds. Update Design System §3.
- **Mobile-first canvas (Google):** wireframes authored **mobile-first**, desktop as enhancement (booking, hearing check, nav especially).
- **Motion dictionary (Apple):** replace philosophy with a per-interaction table (trigger → curve → duration) before high-fidelity. New Design System addendum.
- **Accessibility integrated, not separate (NNG):** every component spec already carries an a11y line — enforce as acceptance gate; add **error state + inline validation + `autocomplete`** to every form field (Baymard, P6.5).
- **Search designed in full (Google):** query types, autocomplete, no-results routing → expand F14.
- **Consent architecture (Google/legal):** design the consent UX for hearing-check data + personalization (PDPB health-data classification) — new flow + component. *(owner/legal §8)*
- **EAST + Fogg + Defaults (BIT/Fogg):** apply Easy/Attractive/Social/Timely and Fogg (motivation/ability/trigger) per conversion action; **specify defaults** (appointment duration, follow-up cadence, comms frequency); add pre-commitment devices (H12).
- **Design for the extreme user (IDEO):** dedicated **Rajan design pass** for the hearing-check + booking (56px targets, save-state, WhatsApp, decision-pause reassurance, family email/contact).
- **Service design parity (Apple/IDEO):** website promises (45-min appt, named audiologist, pre-visit context, concierge call) must be matched operationally — flagged as business items (§7).

---

## 7. OUT-OF-WEBSITE-SCOPE items to flag to owner (Phase 7 business/ops/legal)
These are **not** website-design decisions but the website makes promises that depend on them. Flag, don't build:
- Revenue value per conversion (for ROI-weighted A/B priorities); build-vs-buy for each system; content-investment model (MVP vs 12-month).
- Paid acquisition, social, and **email/WhatsApp marketing** specs; **referral program** mechanics; **lead scoring**; high-value consultation path; **GP referral** channel.
- Operational sign-off for: **45-min minimum appt**, **concierge pre-call**, **30-day home-trial logistics**, **WhatsApp staffing SLA**, clinic-page maintenance, **minimum clinic quality bar** for public listing, regional pricing display.
- Clinical governance: **patient photo/video consent process**, **medical-review workflow** (checklist + accountability), outcome-claim evidence, AI clinical scoping board.
- Legal: PDPB health-data classification, ASCI testimonial rules, RPWD/WCAG legal minimum, no "guaranteed" outcomes.

---

## 8. Open decisions for owner (gate further work)
1. **Visual signature:** approve the "cyan soundwave underline + ear-curl" motif, or propose another ownable element?
2. **Innovation scope for v1 launch:** confirm **Future Hearing Simulator** as the flagship P1 build (recommended), and which P2 set (Asha / Family Dashboard / Digital Audiologist).
3. **Consent/personalization:** is behavioral personalization (return-visitor, AI) in v1 scope, or v2? (drives the consent-architecture work).
4. **WhatsApp + GP referral:** in scope for launch? Both are high-impact but need staffing/process (Phase 7).
5. **Hindi:** confirm **Hindi-first native** experience for core flows at launch (Phase 8 Cohort G shows ~5%→25% conversion swing) — not a translation.
6. New pages priority (esp. P1: GP Referrals, Govt Schemes, Sitemap, 404) — approve for inclusion in the IA now.

---

## 9. Net effect on phase plan
- **Phase 2 Design System** → addenda: visual signature, strict type thresholds, motion dictionary, 56px target rule, citation-integrity note.
- **Phase 3 Component Library** → Batch 4 (§3) incl. innovations.
- **Phase 4 UX Blueprint** → revise Flow 6 (filter-first), Flow 1 (trust-in-form, save-state, WhatsApp, "for someone else"), Flow 2 (share-results, callback, 56px), Flow 4 (reduce homepage decision density, remove services zone), add flows: GP referral, govt schemes, consent, return-visitor.
- **Page specs** → add the new pages (§4).
- **Phase 5 Wireframes** → mobile-first, 5-second-test viewport spec, every state designed.

*Nothing here changes the locked brand. All new copy/data uses placeholders + citation-integrity rules. No code until Phase 8.*
