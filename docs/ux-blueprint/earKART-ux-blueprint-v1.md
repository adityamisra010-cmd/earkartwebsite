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

## Queued flows (next UX Blueprint batch)
Awareness/education → tool (blog → hearing check) · Hearing-aid selection (anti-catalog → trial request) · Patient-story consumption → booking · Returning-patient portal (sign-in → manage) · Caregiver "book/gift on behalf" · Newsletter/lead nurture · Investor-relations access · Corporate/B2B OMNI partner inquiry.

Each follows the same state-checklist template.

---

*Next: continue for the queued flows, or advance to Phase 5 (Wireframes) once flows are approved. No code until Phase 8.*
