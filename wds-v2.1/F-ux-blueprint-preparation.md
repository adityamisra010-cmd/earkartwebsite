# Phase F — UX Blueprint Preparation

**Not visual design — design readiness.** For each important feature this defines the scaffold a UX designer needs *before* drawing anything: Purpose · Entry Points · Exit Points · Primary User · Alternative Users · Dependencies · Success States · Error States · Edge Cases · Required Components (Phase E) · Analytics Events · Future AI Opportunities.

Twelve features cover the conversion-critical and retention-critical surface. Each maps to Phase C stages.

---

## F-1 · Online Hearing Check Tool
**Purpose:** Primary micro-conversion — help a user understand their hearing and produce a confident next step. (Stage 4)
**Entry points:** Homepage hero/banner, pathway card, Hub articles, blog CTAs, paid landing, "test together at home" family link.
**Exit points:** Results screen → book assessment / protect-hearing content / email PDF / leave (no penalty).
**Primary user:** Arjun (self-screening). **Alternatives:** Priya (data for parent talk), Rajan (family-guided), Sunita (for child — route to pediatric).
**Dependencies:** Audio engine + non-audio fallback, results logic, email/PDF service, CRM lead capture, consent service, analytics.
**Success states:** Completion with one of three calm outcomes; optional emailed result; smooth route to booking.
**Error states:** Audio quality fail → retry/skip to behavioral; submission failure → save progress + retry; email send fail → retry + on-screen result still shown.
**Edge cases:** No headphones; noisy environment false positives; mid-flow abandonment/resume; screen-reader/keyboard-only; one ear only; child taking adult test; very low literacy.
**Required components:** `hero/ToolIntroHero`, `form/MultiStepFormShell`, `form/ProgressIndicator`, `form/RadioGroupLarge`, results variants (`card/StatHighlightCard`, `trust/MedicalReviewStamp`), `edu/DownloadableGuide`, `form/ConsentBlock`.
**Analytics:** `hearing_check_started`, `_step_completed`, `_audio_path_used`, `_completed`, `_result_tier`, `_email_submitted`, `result_to_booking`.
**Future AI:** Adaptive questioning by prior answers; plain-language result explainer; route recommendation to the right service/audiologist.

## F-2 · Appointment Booking
**Purpose:** Convert intent into a confirmed, low-anxiety, low-no-show appointment. (Stage 5)
**Entry points:** Global "Book" button, mobile sticky bar, service/clinic/story CTAs, hearing-check result, WhatsApp/phone.
**Exit points:** Confirmation page → calendar invite → pre-visit info; or callback fallback.
**Primary user:** Priya/Rajan (often together). **Alternatives:** Rohan (gifting/booking for parent), Meera (self), Sunita (child).
**Dependencies:** Clinic availability API, CRM, calendar, WhatsApp/email notifications, consent, payment (if deposit).
**Success states:** Booking confirmed with summary + decision justification + reversibility note; data lands in CRM/clinic.
**Error states:** Slot taken mid-flow → offer nearest three; system down → callback-request fallback; validation → inline specific message.
**Edge cases:** Booking for another person; no nearby clinic → home-visit/teleaudiology; double-submit; timezone; partial completion resume; accessibility-only path.
**Required components:** `booking/*` set, `form/*`, `trust/NoPressurePromise`, `trust/GuaranteeReversibilityNote`, `booking/CallbackRequestFallback`.
**Analytics:** `appointment_booking_started`, `_step_completed`, `book_for_family_used`, `_completed`, `callback_fallback_used`, `booking_abandoned_step`.
**Future AI:** Smart slot suggestions (morning-attendance bias); no-show risk scoring → tailored reminders; chat-assisted booking.

## F-3 · Hearing Aids & Solutions (guided selection)
**Purpose:** Guide to ≤3 relevant options without catalog overload or stigma. (Stage 8)
**Entry points:** Nav, pathway card "understand my options," Hub/blog, hearing-check result, story CTA.
**Exit points:** Request trial / talk to audiologist / book assessment / deeper type page.
**Primary user:** Meera (upgrader, upsell-wary). **Alternatives:** Rajan (stigma-led), Arjun (discretion-led), Priya (evaluating for parent).
**Dependencies:** Product data, lifestyle-mapping logic, pricing/financing, trial scheduling.
**Success states:** User self-filters to ≤3, sees a fit recommendation with caveat, understands honest pricing, initiates trial/consult.
**Error states:** No clear match → "talk to an audiologist" path; pricing unavailable → range + contact.
**Edge cases:** Very specific hearing profile; budget-constrained user (surface subsidies, no shame); pediatric routing; comparison on small screens.
**Required components:** `card/SolutionTypeCard`, `compare/*`, `pricing/*`, `compare/RecommendationBadge`, `story/MythVsRealityStory`.
**Analytics:** `solution_filter_used`, `solution_recommendation_viewed`, `trial_initiated`, `talk_to_audiologist_clicked`, `compare_opened`.
**Future AI:** Recommendation from hearing-check + lifestyle inputs; AR "how visible is it" preview; budget-aware option shaping (fit-not-margin).

## F-4 · Find a Clinic
**Purpose:** Connect to a physical location while reducing first-visit anxiety. (Stage 5–6)
**Entry points:** Nav, homepage finder preview, clinic CTAs, local SEO landing.
**Exit points:** Clinic detail → book / call / directions.
**Primary user:** All. **Alternatives:** Home-visit seekers; no-nearby-clinic users.
**Dependencies:** Maps API, geolocation (consented), clinic data, ratings.
**Success states:** Nearest clinics shown with photos, named audiologist, hours, languages; clear next step.
**Error states:** Geolocation denied → manual entry; no results in radius → expand + home-visit/teleaudiology offer.
**Edge cases:** Rural/no clinic; multiple clinics same city; language preference filtering; map fails to load → list fallback.
**Required components:** `search/ClinicLocationSearch`, `map/ClinicListMapSplitView`, `clinic/ClinicCard`, `clinic/WhatToExpectGallery`, `clinic/HomeVisitRequestBlock`.
**Analytics:** `clinic_finder_searched`, `geolocation_granted`, `clinic_card_clicked`, `directions_clicked`, `home_visit_requested`.
**Future AI:** Best-fit clinic by language/specialty; predicted wait-time display.

## F-5 · Clinic Detail & Pre-Visit
**Purpose:** Normalize the physical visit; cut anticipatory anxiety and no-shows. (Stage 6)
**Entry points:** Clinic finder, local search, booking confirmation.
**Exit points:** Book at this clinic / call / directions / meet the audiologist.
**Primary user:** Rajan/Priya. **Alternatives:** Sunita (pediatric setup), Meera.
**Dependencies:** Per-clinic content (templated), staff data, ratings, photos.
**Success states:** User sees the room, the person, the sequence, and feels ready.
**Error states:** Missing photos → branded placeholder + text; stale hours → flagged for review.
**Edge cases:** New clinic with thin content; temporary closure (notification bar); accessibility info for the physical site.
**Required components:** `hero/ClinicLocationHero`, `clinic/ClinicDetailPage`, `clinic/WhatToExpectGallery`, `doctor/AudiologistProfileCard`, `review/RatingSummaryWidget`.
**Analytics:** `clinic_detail_viewed`, `what_to_expect_engaged`, `book_from_clinic`, `audiologist_profile_viewed`.
**Future AI:** Auto-generated (reviewed) per-clinic summaries; virtual tour.

## F-6 · Patient Stories
**Purpose:** Emotional conversion + myth correction via real narratives. (Stage 3, 8)
**Entry points:** Homepage preview, nav, blog links, solution pages, search.
**Exit points:** Take the first step (contextual CTA) / related story / relevant condition page.
**Primary user:** Rajan (sees himself). **Alternatives:** all personas via diversity mandate.
**Dependencies:** Consented patient content, audiologist notes, video hosting + captions.
**Success states:** User identifies with a story and moves to a low-commitment step.
**Error states:** Video fails → transcript/text fallback.
**Edge cases:** Resistance stories (waited too long); pediatric stories; regional representation gaps.
**Required components:** `hero/StoryHero`, `story/FullStoryArticle`, `story/VideoTestimonial`, `story/AudiologistNoteBlock`, `card/PatientStoryCard`.
**Analytics:** `story_card_click`, `patient_story_played`, `story_cta_click`, `related_story_click`.
**Future AI:** Match the most relatable story to the visitor's signals (privacy-bound).

## F-7 · Hearing Health Hub & Blog
**Purpose:** Authority + organic acquisition + mental-model correction; convert via scent. (Stage 1–2)
**Entry points:** Organic search, social, internal links, homepage preview.
**Exit points:** Hearing check / booking / related cluster article / service page.
**Primary user:** All, by stage tag. **Alternatives:** clinicians, families researching.
**Dependencies:** CMS, schema, medical-review workflow, search.
**Success states:** Useful read, deeper engagement, movement to a next stage.
**Error states:** Broken internal link → monitored; missing review stamp → blocked from publish.
**Edge cases:** Overdue re-review; translated versions out of sync; low-literacy reader.
**Required components:** `blog/ArticleLayout`, `blog/TopicClusterHub`, `edu/*`, `trust/MedicalReviewStamp`, `card/RelatedReadingCard`.
**Analytics:** `article_read_3min`, `hub_pillar_viewed`, `content_cta_click`, `glossary_term_opened`, `stage_next_link_click`.
**Future AI:** Content recommendations by reading history + check results; plain-language summarizer; query-intent matching.

## F-8 · WhatsApp / Live Chat
**Purpose:** Human, warm conversational support and conversion across the journey. (Stages 1–16)
**Entry points:** Floating launcher, contact pages, post-result, abandoned-booking nudge.
**Exit points:** Booking, answered question, human handoff, follow-up sequence.
**Primary user:** All — especially phone-preferring demographics.
**Dependencies:** WhatsApp Business API, chatbot + human routing, CRM, conversation scripts.
**Success states:** Question resolved or booking made in one warm thread; clean handoff when needed.
**Error states:** Bot can't help → explicit human escalation; agent unavailable → callback promise with SLA.
**Edge cases:** After-hours; language switch mid-chat; sensitive medical question (route to clinician).
**Required components:** `notify/WhatsAppContactButton`, `notify/LiveChatLauncher`, conversation-script library.
**Analytics:** `whatsapp_cta_clicked`, `chat_started`, `chat_human_handoff`, `chat_to_booking`.
**Future AI:** LLM assistant bound by Phase A/B (A-114); intent detection; draft replies for human agents.

## F-9 · Pricing & Financing
**Purpose:** Make cost feel fair and manageable without dark patterns. (Stage 8–9)
**Entry points:** Solutions, service pages, booking, blog cost guide.
**Exit points:** Financing application / trial / talk to audiologist / book.
**Primary user:** Priya/Rajan (price-anxious). **Alternatives:** Meera, budget-constrained users.
**Dependencies:** Pricing data, financing partner, subsidy info.
**Success states:** User understands total + daily cost + financing + what's included; price objection reduced.
**Error states:** Financing API down → manual contact path.
**Edge cases:** Insurance/ESIC coverage; subsidy eligibility; regional price variance.
**Required components:** `pricing/*` set, `trust/TransparencyPricingNote`.
**Analytics:** `pricing_viewed`, `daily_cost_toggled`, `financing_viewed`, `subsidy_info_viewed`.
**Future AI:** Personalized affordability/financing scenarios (consented).

## F-10 · Patient Portal
**Purpose:** Continuity, adherence, retention, and self-service after purchase. (Stages 10–16)
**Entry points:** Post-purchase invite, login, reminder links.
**Exit points:** Reorder, book review, support request, share/refer.
**Primary user:** Existing patients + caregivers (Priya managing Rajan's account).
**Dependencies:** Auth, device records, audiogram-on-file, reorder/commerce, support, notifications.
**Success states:** Patient manages device, maintains habits, reorders, re-books with minimal effort.
**Error states:** Login issues → accessible recovery; reorder out-of-stock → alternatives/notify.
**Edge cases:** Caregiver-managed accounts; multiple devices; data-portability/consent requests.
**Required components:** `portal/PatientDashboard`, `form/*`, `notify/ReminderMessageTemplate`, `pricing/FinancingOptions` (reorder), `review/PeakSatisfactionPrompt`.
**Analytics:** `portal_login`, `maintenance_logged`, `reorder_completed`, `review_rebooked`, `referral_link_shared`.
**Future AI:** Predictive maintenance prompts; adherence nudges; upgrade-timing suggestions.

## F-11 · Referral & "Gift a Hearing Check"
**Purpose:** Activate the strongest acquisition channel — trusted referral. (Stage 14)
**Entry points:** Portal, post-purchase comms, story pages, peak-satisfaction prompt, doctor portal.
**Exit points:** Shared link / gifted check / submitted testimonial / GP-ENT referral.
**Primary user:** Satisfied patients, Rohan (gifting), referring doctors.
**Dependencies:** Referral tracking, share mechanics, shareable branded content, CRM.
**Success states:** Low-friction share at peak satisfaction; recipient gets value, not a pitch.
**Error states:** Share fails → copy-link fallback.
**Edge cases:** Doctor bulk referrals; gift recipient resistance (Rajan-type); reward delivery.
**Required components:** `doctor/ReferAPatientPortal`, `review/PeakSatisfactionPrompt`, `edu/DownloadableGuide`, `booking/BookForFamilyToggle`.
**Analytics:** `referral_link_shared`, `gift_check_sent`, `referred_booking`, `doctor_referral_submitted`.
**Future AI:** Optimal-timing detection for referral asks; best-fit shareable content per recipient.

## F-12 · Notifications & Crisis Communication
**Purpose:** Keep patients informed; protect trust during disruption. (Stages 6, 11, cross-cutting)
**Entry points:** System-triggered (service disruption, closure, recall), lifecycle reminders.
**Exit points:** Acknowledged info / rescheduled appointment / statement page.
**Primary user:** All affected patients.
**Dependencies:** Notification infra (banner, email, WhatsApp), crisis protocol, statement templates.
**Success states:** Timely, calm, honest communication; trust maintained through the event.
**Error states:** Delivery failure → multi-channel redundancy.
**Edge cases:** Mass cancellation; device recall; viral complaint; regional outage.
**Required components:** `notify/HomepageNotificationBar`, `notify/ReminderMessageTemplate`, statement-page template, `notify/InlineBanner`.
**Analytics:** `notification_shown`, `notification_acknowledged`, `reschedule_from_notification`.
**Future AI:** Severity triage; affected-segment targeting; draft statement generation (human-approved).

---

**Designer handoff rule:** A feature is "ready for wireframing" only when its Success, Error, and Edge cases above are all answered and its components exist in Phase E. Anything unanswered is a blocker, not a detail to discover during design.
