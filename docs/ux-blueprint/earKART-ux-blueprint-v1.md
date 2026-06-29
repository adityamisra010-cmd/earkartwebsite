# earKART UX Blueprint v1.0

**Phase:** 4 (UX Blueprint) · **Status:** Flows 1–3 (highest value) done; rest queued (§ end).
**Builds on:** Component Library v1.0 + Design System v1.0 + reconciled IA (`review/01 §3`).
**Purpose:** Define how components assemble into *journeys* — task flow, branching, all states, analytics, dependencies — **before** any wireframe. No UI/code here.
**Conventions:** Steps `→`; branches `⎇`; analytics events use Spec §10.2 taxonomy. `[TBD]` = pending data/scope.

### State checklist every flow must answer
Happy path · Empty · Loading · Success · Error/Recovery · Edge cases · Accessibility notes · Analytics · Dependencies · Future-AI hook.

---

## FLOW 1 — Book a Hearing Test (macro-conversion)

**Goal:** Patient/family books an in-clinic or OMNI appointment with minimum friction.
**Personas:** Priya (P2), Rajan (P1, often family-assisted), Meera (P5), Rohan (P6, on behalf of parent).
**Journey stage:** Deciding → Acting.
**Entry points:** persistent nav CTA · mobile bottom-bar CTA · hearing-check result CTA · service/clinic/audiologist page CTAs · blog article CTAs.
**Primary component:** Appointment Widget (F5) using Multi-step Progress (E6).

### Happy path
1. Trigger "Book a Hearing Test" → widget opens → `appointment_booking_started`.
2. **Step 1 — Service:** choose (Hearing Test · Fitting/Trial · Pediatric · Tinnitus · Home Visit · OMNI remote). Default-highlight "Hearing Test."
3. **Step 2 — Where:** ⎇ *In-clinic* → location search → Clinic Card (D2) select · ⎇ *OMNI remote* → OMNI Point Card (D3) / at-home eligibility `[TBD]` · ⎇ *Home visit* → serviceability check by pincode `[TBD]`.
4. **Step 3 — When:** Date/Time picker (F2); show next-available prominently; unavailable disabled with non-color cue.
5. **Step 4 — Who/details:** name, phone, optional email (A3 inputs); ⎇ "Booking for someone else" → caregiver fields (ties to G5). Consent checkbox (not pre-ticked).
6. **Step 5 — Confirm:** summary (service/place/time/price-context `[TBD]`) + "No pressure" reassurance (Spec §6.4) → submit → loading.
7. **Success:** confirmation screen — what-next, prep link ("How to prepare"), add-to-calendar, clinic/audiologist info, contact → `appointment_booking_completed`.

### States
- **Empty:** no clinics for location → show nearest alternatives + OMNI option + "call us" (never dead-end).
- **Loading:** submit shows button spinner; step transitions `--dur-panel`.
- **Error/Recovery:** validation blocks politely (names field + fix); network failure preserves entered data + retry; slot taken mid-flow → re-prompt next available (no data loss).
- **Edge cases:** double-submit guard; timezone clarity; back-navigation never loses data; 60s+ on any timeout; partial completion → optional "resume" `[TBD]`; phone-only user → "prefer to call?" fallback always visible.
- **Accessibility:** each step a labeled region; progress `aria-current="step"`; errors `aria-describedby`; keyboard-first; works at 200% zoom and in Hindi.

### Analytics
`appointment_booking_started` · `booking_step_completed` (property: step, method=clinic|omni|home) · `booking_validation_error` (property: field) · `appointment_booking_completed` · `booking_call_fallback_clicked`.

### Dependencies / Future-AI
Dep: clinic+slot availability API `[TBD]`, pricing/insurance data `[TBD]`, consent/privacy model. **AI hook:** Appointment assistant pre-fills/suggests best slot & nearest clinic; escalates to human (G3 rules).

---

## FLOW 2 — Online Hearing Check (primary micro-conversion)

**Goal:** Convert uncommitted visitor into a self-aware lead by genuinely helping (Spec §6.2).
**Personas:** Arjun (P3, self-diagnostic), Priya (P2, for parent), Rajan (P1, must be very simple).
**Journey stage:** Aware → Curious → Trusting.
**Entry points:** hero secondary CTA · CTA banner (every page) · pathway card · blog inline CTA.
**Primary components:** Multi-step Progress (E6) · Choice controls (A4) · Result Card (E2).

### Happy path
1. Start (Step 0 intro: "3 minutes, not a diagnosis, no account, private") → `hearing_check_started`.
2. **Calibration notice** (Step 1): recommend headphones/quiet; **skippable** (non-blocking).
3. **Behavioral questions** (Steps 2–7): one question per screen; 5-point scale large radios (A4); back/next; progress always visible.
4. ⎇ **Optional audio test:** only if headphones + quiet confirmed; per-ear tone; **retry** offered; results down-weighted if quality check fails (Spec §6.2.4).
5. **Results** (Step 8): one of three outcomes via Result Card (E2):
   - Typical (success/green) — low-urgency CTA "Book a baseline assessment".
   - Worth exploring (warning/amber) — moderate CTA.
   - Assessment soon (danger-tone, **non-alarming**) — clear CTA "We'll call within 24h".
6. **Post-results (not gated):** "Email me my results?" → optional email → PDF + consented lead + follow-up sequence → `hearing_check_email_submitted`.
7. ⎇ Result CTA → enters Flow 1 (booking) with context pre-filled.

### States
- **Empty/first-use:** intro screen sets expectations + reassurance.
- **Loading:** between steps instant; result compute shows brief calm loader.
- **Success:** result shown immediately (never gated behind email — Spec §6.2.4).
- **Error/Recovery:** audio fails → graceful fallback to behavioral-only result (no anxiety); save-progress on reload `[TBD]`.
- **Edge cases:** no headphones → skip audio cleanly; abandon mid-way → no penalty; retake allowed; ambient-noise false positives mitigated by advice + retry + down-weighting.
- **Accessibility:** audio test has **non-audio alternative**; one question per step; keyboard-first; 44px targets; calm, non-judgmental copy; Hindi.

### Analytics
`hearing_check_started` · `hearing_check_step_completed` (property: step) · `hearing_check_audio_skipped` · `hearing_check_completed` (property: outcome) · `hearing_check_email_submitted` · `hearing_check_to_booking` (handoff to Flow 1).

### Dependencies / Future-AI
Dep: scoring logic `[TBD: clinical sign-off]`, audio calibration, results-PDF + email/CRM, consent. **AI hook:** conversational symptom checker (G4) as an alternate entry; AI explanation of results in plain language (with screening-not-diagnosis caveat).

---

## FLOW 3 — Find a Clinic / OMNI

**Goal:** Connect user to the nearest physical clinic or OMNI point with low first-visit anxiety (Spec §6.7).
**Personas:** Rajan (P1), Priya (P2), Sunita (P4, urgency for child).
**Journey stage:** Considering → Deciding.
**Entry points:** nav "Find a Clinic" · homepage finder preview · OMNI page · clinic CTAs in content/footer.
**Primary component:** Map + Results (F13) with Clinic (D2) / OMNI (D3) cards.

### Happy path
1. Enter finder → ⎇ allow geolocation (polite reason: "to show the closest clinic") **or** type location → `clinic_finder_searched` (property: method).
2. Results: split map+list (desktop) / list with map toggle (mobile); sorted by distance; each Clinic Card shows photo, named audiologist (photo), hours, transport, languages, rating `[TBD]`.
3. Select clinic → clinic detail: "What to expect on your first visit" (waiting room, room, audiologist photos) — anticipatory-anxiety reduction (Spec §6.7.3).
4. ⎇ CTA "Book at this clinic" → Flow 1 (location pre-filled) · ⎇ "Call this clinic" · ⎇ "Get directions".
5. ⎇ No nearby clinic → surface **OMNI remote** option + home-visit (if serviceable) + "call us".

### States
- **Empty/no-results:** nearest alternatives + OMNI + phone fallback; helpful empty state (G7), never dead-end.
- **Loading:** geolocating indicator; results skeleton.
- **Success:** results list + map; selected clinic detail.
- **Error/Recovery:** geolocation denied → graceful manual entry (no nag); map fails → list still fully usable (map not sole channel); bad/typo location → suggestions.
- **Edge cases:** permission deferred; offline → cached last results `[TBD]`; very dense/sparse areas; pincode serviceability for home visit `[TBD]`.
- **Accessibility:** list fully usable without map; keyboard nav of results; permission rationale in text; 44px targets; Hindi.

### Analytics
`clinic_finder_searched` (property: method=geo|typed) · `clinic_result_selected` (property: clinic_id) · `clinic_what_to_expect_viewed` · `clinic_book_clicked` (→ Flow 1) · `clinic_call_clicked` · `omni_fallback_shown`.

### Dependencies / Future-AI
Dep: clinic/OMNI location data + photos + audiologist links `[TBD]`, maps provider, ratings source `[TBD]`. **AI hook:** assistant recommends clinic-vs-OMNI based on need/distance; pre-visit Q&A.

---

## Cross-flow principles
- Every flow has a **low-commitment alternative** and a **human fallback** (phone/WhatsApp) — never a dead-end (Spec §9 friction/anxiety reduction).
- Flows **hand off** cleanly (Check → Book; Find → Book) carrying context.
- **One decision per screen**; progress visible on any multi-step flow.
- All states designed (not just happy path); all copy calm, person-first, bilingual-ready.
- No dark patterns: no fake scarcity, no pre-ticked consent, results never gated (Spec §9, §11.2).

---

## FLOW 4 — Homepage Orientation / Pathway routing

**Goal:** Pass the 5-second test and route each visitor to their relevant journey (Spec §6.1).
**Personas:** Rajan (P1, skeptical), Priya (P2, researcher), Sunita (P4, anxious parent).
**Journey stage:** Aware → Curious.
**Entry:** organic/paid/referral landing on Home.
**Primary components:** Hero (C1) · Empathy block (C6) · Pathway cards (C4) · Trust bar (C3) · Patient story card (D5) · CTA banner (C5).

### Happy path
1. Land → Hero answers what/for-whom/next-step → `hero_primary_cta_click` | `hero_secondary_cta_click`.
2. Empathy bridge normalizes concern → Pathway cards (max 3) → `pathway_card_click` (property: card_label) → routes to Check / Family-help / Solutions.
3. Scroll: Trust bar (`trust_section_viewed`) → Patient story (`story_card_click`) → Hearing-check banner (`hearing_check_banner_click`) → Clinic finder preview (`clinic_finder_search`).

### States
- **Empty/edge:** stats are `[TBD]` placeholders until verified — never render fabricated numbers; if a stat is unavailable, hide that cell rather than guess.
- **Loading:** hero media lazy + preloaded; counters animate on view (reduced-motion static).
- **Accessibility:** one H1; scrim ensures AAA over imagery; keyboard-first; Hindi toggle.
**Analytics:** as above + `blog_preview_click`. **Handoffs:** → Flow 2 (Check), Flow 1 (Book), Flow 3 (Find), Flow 6 (Solutions). **AI hook:** "not sure where to start?" assistant suggests a pathway.

---

## FLOW 5 — Education → Tool (blog / Hearing Health Hub → hearing check)

**Goal:** Convert trust earned via content into a micro-conversion (Cleveland Clinic mechanism, Spec §1.6, §7).
**Personas:** Priya (P2), Arjun (P3), Sunita (P4).
**Journey stage:** Unaware/Aware → Curious → Trusting.
**Entry:** organic search → pillar/cluster article; internal links.
**Primary components:** Article card (D6) · Accordion/FAQ (F9/F10) · inline CTA banner (C5) · medical-review stamp · related links.

### Happy path
1. Land on article → read (review stamp visible) → `article_read_3min`.
2. Inline tool CTA + contextual booking CTA → ⎇ Flow 2 (Check) or Flow 1 (Book).
3. Related-reading links deepen the cluster (3–5 same-topic links, Spec §7.5).

### States
- **Empty:** no related content yet → show pillar hub link (no dead-end).
- **Trust gate:** every medical claim sourced; stamp `[TBD: reviewer]`; no 2019 back-dating (review/00 §3).
- **Accessibility:** Grade-8 reading level, inline term tooltips (G9), `Article`/`FAQPage`/`MedicalWebPage` schema; Hindi term-pairs.
**Analytics:** `article_read_3min` · `article_tool_cta_click` · `article_booking_cta_click` · `related_link_click`. **AI hook:** AI Hearing Coach (G3) answers follow-up questions inline.

---

## FLOW 6 — Hearing-Aid Selection (anti-catalog → trial request)

**Goal:** Guide to a fitting choice without decision paralysis or feeling sold-to (Spec §6.5).
**Personas:** Meera (P5, upgrader, fears upsell), Priya (P2), Rajan (P1).
**Journey stage:** Considering → Deciding.
**Entry:** Solutions nav · homepage pathway · article links.
**Primary components:** Product cards (D4, lifestyle-first) · Filters (F12) · Comparison table (F6) · Pricing block (F7) · "No pressure" callout · CTA "Try in a Free Trial"/"Ask an Audiologist".

### Happy path
1. Land on Solutions → orientation (hearing aids have changed) → choose **by situation/lifestyle** (filter), not by tech.
2. See 2–3 relevant Product cards with "Right for you if…" + context price (EMI prominent) → optional Comparison (recommended-for-you column highlighted).
3. CTA → ⎇ "Try in a Free Trial" (→ Flow 1 variant) or "Ask an Audiologist" (→ contact/booking) → `hearing_aid_trial_started`.

### States
- **Empty/edge:** filter yields nothing → broaden suggestion + "ask an audiologist" (no dead-end).
- **Pricing:** context-priced; offers from pricelist (0% EMI, free insurance, ₹25,000 upgrade); `[TBD: scheme/insurance]`.
- **Accessibility:** comparison uses real table semantics; terms have tooltips; no spec-first.
**Analytics:** `solutions_filter_used` (property: situation) · `product_card_view` · `comparison_opened` · `hearing_aid_trial_started` · `ask_audiologist_clicked`. **Anti-pattern guard:** no model-number/price-first; no "best/premium" without evidence (Spec §6.5.2). **AI hook:** device-recommendation assistant from hearing profile (with audiologist caveat).

---

## FLOW 7 — Patient Story → Booking

**Goal:** Convert emotional resonance into action (identifiable-victim effect, Spec §6.6).
**Personas:** Rajan (P1), Priya (P2).
**Journey stage:** Considering → Trusting → Deciding.
**Entry:** homepage story preview · Resources · article links.
**Primary components:** Patient story card (D5) → story page (before/moment/journey/after/advice) → contextual CTA.

### Happy path
1. Open story → read → optional video (`patient_story_played`).
2. Contextual CTA ("Take the first step [Name] took") → Flow 1 or Flow 2.

### States
- **Trust gate:** real, consented stories only; `[TBD: real stories]` until supplied — **no fabricated testimonials** (Spec §11.2).
- **Empty:** few stories → show diverse available set; story-diversity mandate (Spec §6.6.3).
- **Accessibility:** captions on video; person-first; Hindi pull-quotes for older demographic.
**Analytics:** `story_opened` (id) · `patient_story_played` · `story_cta_click`. **AI hook:** "find a story like my situation" matcher.

---

## FLOW 8 — Returning-Patient Portal (sign-in → manage)

**Goal:** Continuity of care; retention (Spec §journey Returning).
**Personas:** existing patients; Meera (P5).
**Journey stage:** Returning.
**Entry:** "Patient login" in nav/footer.
**Primary components:** Portal shell (G1) · Appointments · My Devices · Results (audiogram G6) · Maintenance reminders (G2) · Support.

### Happy path
1. Sign in `[TBD: auth model]` → Dashboard (next appointment, reminders, quick actions).
2. Manage: reschedule (→ Flow 1), view results/audiogram (with text equivalent), action reminders, contact support.

### States
- **Empty (first-time):** guided setup; what the portal offers.
- **Loading:** skeletons. **Error:** failed sign-in (clear, no blame); session timeout warning ≥60s with save.
- **Edge:** account recovery `[TBD]`; multi-clinic history; caregiver-linked access (Flow 9).
- **Accessibility:** landmarks/focus per view; 200% zoom; audiogram never graphic-only.
**Analytics:** `portal_signin` · `portal_reschedule` · `portal_result_viewed` · `reminder_actioned`. **AI hook:** maintenance reminders + AI coach inside portal.

---

## FLOW 9 — Caregiver "Book / Gift on Behalf"

**Goal:** Let a family member initiate care for a parent without triggering resistance (Spec personas P6/P2; "gift a hearing check").
**Journey stage:** Considering.
**Entry:** homepage pathway ("help for a family member") · article CTAs · portal (G5).
**Primary components:** Caregiver dashboard (G5) · Appointment widget (F5, "for someone else") · conversation-help resources.

### Happy path
1. Choose "help someone you love" → guidance + scripts for the conversation (reactance-aware framing).
2. ⎇ "Gift a hearing check" (send to parent) · ⎇ "Book on their behalf" (consent-aware) → Flow 1 with caregiver fields.

### States
- **Consent:** explicit consent before accessing/booking for another (PDPB; Spec §11 L5); `[TBD: consent model]`.
- **Empty:** no linked patient yet → explain linking.
- **Accessibility/tone:** non-judgmental, "act of care not intrusion" (Spec §7.4 framing).
**Analytics:** `caregiver_path_entered` · `gift_check_sent` · `book_on_behalf_started`. **AI hook:** conversation assistant generates a tailored "how to raise it" script.

---

## FLOW 10 — Lead Nurture (guide download / newsletter → follow-up)

**Goal:** Capture consented leads by giving value first; nurture toward booking (reciprocity, Spec §6.2.4).
**Journey stage:** Curious → Considering.
**Entry:** newsletter signup (F4) · downloadable guide CTAs · post-hearing-check email.
**Happy path:** value offered → email (post-value, not gated) → confirmation → consented sequence `[TBD: CRM]` → later booking.
**States:** double-opt-in `[TBD]`; unsubscribe always clear (no hidden cancel — Spec §9); empty/success/error per A3/E1.
**Analytics:** `download_guide_submitted` · `newsletter_subscribed` · `nurture_to_booking`. **Guard:** no pre-ticked consent; no dark patterns.

---

## FLOW 11 — Investor-Relations Access

**Goal:** Serve investors/analysts/press for a BSE-SME-listed company; reinforce patient trust.
**Journey stage:** (separate audience).
**Entry:** About → Investor Relations; footer.
**Primary components:** IR page (Page 11 spec) · document list/downloads · announcements · investor contact.
**Happy path:** browse overview → filings/reports `[TBD: docs]` → download or contact compliance officer `[TBD]`.
**States:** empty (no filings yet) handled honestly; restrained corporate tone; **compliance review required** before publish.
**Analytics:** `ir_document_download` · `ir_contact_submitted`. **Note:** measured on completeness/compliance, not conversion.

---

## FLOW 12 — B2B / OMNI Partner Inquiry

**Goal:** Convert clinics/retailers/hospitals into OMNI/shop-in-shop partners.
**Personas:** clinic owner, pharmacy/hospital decision-maker.
**Journey stage:** Consideration (B2B).
**Entry:** Technology → OMNI "For Clinics & Partners"; Manufacturing page.
**Primary components:** OMNI partner block · lead form (A3) · credibility (certs/timeline).
**Happy path:** read OMNI B2B value → submit partner inquiry (org details) → confirmation + follow-up `[TBD: sales pipeline]`.
**States:** validation/empty/success/error per forms; honest scope of OMNI.
**Analytics:** `omni_partner_cta_click` · `omni_partner_inquiry_submitted`. **AI hook:** none v1.

---

## UX Blueprint — coverage summary
| # | Flow | Status |
|---|------|--------|
| 1 | Book a Hearing Test | ✅ |
| 2 | Online Hearing Check | ✅ |
| 3 | Find a Clinic / OMNI | ✅ |
| 4 | Homepage Orientation | ✅ |
| 5 | Education → Tool | ✅ |
| 6 | Hearing-Aid Selection | ✅ |
| 7 | Patient Story → Booking | ✅ |
| 8 | Returning-Patient Portal | ✅ |
| 9 | Caregiver Book/Gift | ✅ |
| 10 | Lead Nurture | ✅ |
| 11 | Investor Relations | ✅ |
| 12 | B2B / OMNI Partner | ✅ |

All flows: state-complete, analytics-tagged, accessibility-noted, no dead-ends, no dark patterns. `[TBD]`s (APIs, data, auth/consent/CRM, scope) tracked here + `review/00 §3`.

---

## v2 REVISIONS (from `review/04 §9`, owner-approved)

### Revisions to existing flows
- **Flow 1 (Book):** add **"who is this for?"** branch (H2) at form top; **trust-in-form** (named audiologist photo + credentials + cancellation policy inline — fixes density §9 under-indexing); **save-and-continue** (H11); **WhatsApp entry** (H5, go-live gated); **56px** controls; pre-select service from journey context. Confirmation screen mandatory: summary + audiologist + address + what-to-bring + cancellation.
- **Flow 2 (Hearing Check):** add **share-with-family** (H3) and **audiologist callback** (H4) on results; **56px** targets; **outcome-specific** next steps (Outcome 3 gets highest-specificity CTA); stronger "screening ≠ diagnosis, even a typical result" language (audiologist note); **decision-pause reassurance** ("Not sure? Save your results"); WhatsApp/family-email contact option (Cohort A/G).
- **Flow 4 (Homepage):** **reduce decision density 4.5→3.0** — remove the services-overview zone; cap homepage at ~2 primary interactive paths; add **return-visitor** personalized CTA (H6, v2-gated) and **"For Families"** signal (H7).
- **Flow 6 (Hearing-Aid Selection):** **FILTER-FIRST MANDATE** — never render the full grid; ask 1–2 situation questions → reveal **1–2** cards (fixes density 5.0/critical). Add **"I'm not sure"** helper (H1), **"most popular for your situation"** default marker (H9), **audiologist match** (H13). Insert the **Future Hearing Simulator (I1)** as the key "see what's possible" moment before the booking CTA.
- **All form flows:** every field gets **inline validation + error state + `autocomplete`** (Baymard/NNG). **Mobile-first** authoring for all flows in Phase 5.

### FLOW 13 — GP / ENT Referral (professional channel)  *(P1)*
**Goal:** Make it effortless for a doctor to refer a patient to earKART (potentially the highest-conversion acquisition channel).
**Audience:** GPs, ENT specialists. **Entry:** "For Professionals" nav + footer + outreach.
**Happy path:** referral page (value + how it works) → digital referral form (patient + referrer details, consent) → confirmation + dedicated line `[TBD: process/SLA]`.
**States:** validation/empty/success/error; co-branded patient education materials `[TBD]`. **Analytics:** `gp_referral_started` · `gp_referral_submitted`. **Dependency:** referral process/staffing (gated).

### FLOW 14 — Government Schemes & Subsidies access  *(P1)*
**Goal:** Serve low-income users (design justice); surface eligibility for schemes/subsidies.
**Happy path:** schemes page (plain-language eligibility) → "check if you qualify" helper `[TBD: scheme data]` → relevant next step (book / call / required docs).
**States:** eligible / unclear / not-listed (no dead-end → human contact). **Analytics:** `scheme_eligibility_checked`. **A11y:** Grade-8 language, Hindi-first.

### FLOW 15 — Consent / Privacy (PDPB foundation)  *(v1 foundation)*
**Goal:** Compliant capture of hearing-check (health-adjacent) data + future personalization consent.
**Happy path:** value shown → explicit, granular consent (purpose-specific, not pre-ticked) → stored with audit → easy withdrawal anytime.
**States:** consent given/declined/partial/withdrawn. **Guard:** PDPB health-data rules `[TBD: legal classification]`; no dark patterns; withdrawal as easy as granting. **Note:** foundation built in v1; powers personalization in v2.

### FLOW 16 — Return-Visitor advance  *(v2, consent-gated)*
**Goal:** Convert earKART's highest-value unconverted segment (Cohort K).
**Happy path:** detect returning (consented) → personalized CTA (H6) based on prior behavior → advance (book / matched audiologist) → optional proactive WhatsApp/email after 3rd visit `[TBD: CRM]`.
**Guard:** requires Flow 15 consent; default experience works without it.

---

*UX Blueprint v1.1 complete (incl. v2 revisions + Flows 13–16). Next phase: Phase 5 — Low-Fidelity Wireframes, mobile-first, every state designed. No code until Phase 8.*
