# Phase A — Master Design Principles

**127 immutable rules.** These are the executable distillation of v1 + the 29 disciplines. Every rule is testable: a reviewer can look at a screen and say yes/no.

**How to read a rule:** ID · Name — Priority. Then Statement (what to do), Why (the reason it exists), Disciplines (which body of knowledge backs it), Goal (business outcome), Pages (where it binds).

**Priority meanings:**
- **Critical** — launch blocker. A page violating this does not ship.
- **High** — fix before the page leaves QA; exceptions need written sign-off.
- **Medium** — strong default; deviation allowed with a one-line rationale.
- **Low** — optimization; apply when capacity allows.

**Conflict resolution is defined at the end of this file (section "When Rules Collide"). Read it before overriding any rule.**

---

## Group 1 — Emotional Foundation

**A-001 · One Emotional Objective Per Page** — Critical
Statement: Every page declares exactly one intended emotional end-state (e.g. "leaves feeling: this is manageable") in its spec header, and every element is judged against it.
Why: Pages that chase multiple feelings dilute all of them; a named objective is the tie-breaker for every later decision.
Disciplines: Emotional Design, Service Design. Goal: Engagement depth, conversion quality. Pages: All.

**A-002 · Anxiety Down, Not Excitement Up** — Critical
Statement: On any page where the user faces a health truth or a spend, reduce anxiety more than you raise excitement. When the two conflict, calm wins.
Why: earKART's users arrive anxious and stigma-laden; excitement-led design reads as a sales pitch and triggers reactance.
Disciplines: Emotional Design, Environmental Psychology, Trust Engineering. Goal: Cancellation reduction, trust. Pages: Hearing Check, Services, Solutions, Booking, Results.

**A-003 · Mirror Before Method** — High
Statement: Reflect the user's lived experience back to them (their daily moments) before introducing any symptom, product, or process.
Why: Felt understanding is the precondition for trust (narrative transportation); leading with method feels clinical and cold.
Disciplines: Emotional Design, Mental Models, Medical Communication. Goal: Bounce reduction, session depth. Pages: Homepage, Hub sub-pages, Solutions.

**A-004 · Name the Emotional Transition** — High
Statement: Each page spec states the emotion at entry and the emotion at exit ("anxious → oriented"). Interactions are designed to move the user along that arc.
Why: Without an explicit arc, behavioral micro-emotion (button feel, error tone) is left to chance.
Disciplines: Emotional Design. Goal: Post-interaction NPS. Pages: All key flows.

**A-005 · Hope Outweighs Fear, Always** — Critical
Statement: Fear-based framing of untreated hearing loss is never the dominant message. Where risk is stated, it is immediately paired with an actionable, hopeful next step.
Why: Fear drives denial in this category, not action; it also damages the brand's benevolence trust.
Disciplines: Risk Communication, Indian Healthcare Psychology, Behavior Change. Goal: Stigma drop-off reduction. Pages: All.

**A-006 · No Shame, No Aging Penalty** — Critical
Statement: Nothing on the site may imply the user is old, broken, diminished, negligent, or "suffering." Person-first language only.
Why: Stigma (esp. for Rajan/Meera) is earKART's single largest conversion barrier; one shaming line loses the family.
Disciplines: Design Justice, Emotional Design, Medical Communication. Goal: Consideration conversion. Pages: All.

---

## Group 2 — Trust

**A-007 · Trust Precedes Commitment** — Critical
Statement: No page asks for a high-commitment action (book, pay, share personal data) before at least one Level 1/2 trust signal is visible without scrolling.
Why: Asking before trust is established spikes bounce and reactance.
Disciplines: Trust Engineering, Persuasive Technology. Goal: Conversion across all traffic. Pages: All, esp. Booking, Solutions, Services.

**A-008 · Trust Velocity by Entry Point** — High
Statement: Establish trust fast enough for the entry context — paid-ad landings ≤5s, blog entries ≤15–30s, direct nav ≤2s. Place trust signals accordingly.
Why: Different traffic arrives with different patience and prior trust.
Disciplines: Trust Engineering, Information Foraging. Goal: Landing-page conversion. Pages: Landing pages, Blog, Homepage.

**A-009 · Address the Three Trust Dimensions** — High
Statement: Each page names which trust dimension is most at stake — competence (can they?), integrity (will they?), benevolence (do they care?) — and shows a signal for it.
Why: Generic "trust badges" miss the specific doubt a given page raises.
Disciplines: Trust Engineering. Goal: Conversion, NPS. Pages: All.

**A-010 · Real Humans Only** — Critical
Statement: Audiologists and patients appear as real, named, photographed people (with consent). No stock models posing as staff or patients; no AI faces presented as real people.
Why: Indian family networks detect and punish fakery fast; discovered stock photos collapse trust.
Disciplines: Trust Engineering, Consumer Neuroscience (human-face effect). Goal: Trust, referral. Pages: Homepage, Clinic, Stories, Services, About.

**A-011 · Every Claim Is Sourced or Cut** — Critical
Statement: Every statistic cites a named source; every "best/leading/award-winning" claim names the award/body or is deleted.
Why: Unsourced superlatives trigger marketing-radar skepticism and legal risk.
Disciplines: Medical Communication, Trust Engineering, Legal. Goal: Credibility, legal safety. Pages: All content, Homepage trust block.

**A-012 · Medical Review Stamp on All Clinical Content** — Critical
Statement: Every patient-facing clinical page shows "Reviewed by [Name, Qualification], [Date]" and carries a scheduled re-review date.
Why: Halo effect from visible expertise; also a clinical-safety guardrail.
Disciplines: Medical Communication, Trust Engineering. Goal: Authority, safety. Pages: Hub, Tinnitus, Pediatric, Solutions, FAQs, Blog.

**A-013 · Honest Limitations Build Trust** — High
Statement: State the limits of every tool/service plainly ("This screening is not a diagnosis"; "a small number need multiple fittings").
Why: Transparent limitation increases trust and inoculates against post-purchase regret.
Disciplines: Risk Communication, Trust Engineering. Goal: Long-term trust, complaint reduction. Pages: Hearing Check, Results, Solutions, Services.

**A-014 · Verifiable, Quarterly-Refreshed Social Proof** — High
Statement: All counts/ratings are real, dated, and refreshed at least quarterly; methodology is linkable.
Why: Fabricated proof is both unethical and strategically fatal in this market.
Disciplines: Trust Engineering, Legal. Goal: Durable credibility. Pages: Homepage, Clinic, Stories.

---

## Group 3 — CTA & Conversion

**A-015 · Every Major CTA Answers the Top Objection** — Critical
Statement: A primary CTA is paired with microcopy resolving the single most likely objection at that moment ("No obligation. No pushy sales.").
Why: An unanswered objection at the point of action is the most common conversion leak.
Disciplines: Persuasive Technology, Behavioral Economics. Goal: Booking/conversion rate. Pages: All with a primary CTA.

**A-016 · Action Language, Never Bureaucratic** — High
Statement: CTAs use specific human verbs ("Book a Free Hearing Test", "Talk to an Audiologist"). Banned: "Submit", "Buy Now", bare "Learn More".
Why: Shopper/bureaucratic framing repositions a patient as a customer and lowers trust.
Disciplines: Conversation Design, Brand Voice. Goal: Conversion, brand fit. Pages: All.

**A-017 · One Primary CTA Per Page** — Critical
Statement: Each page has exactly one primary action; everything else is visually secondary. No three co-equal buttons.
Why: Competing equal CTAs split attention and reduce all of them.
Disciplines: Signal Detection, Cognitive Ergonomics. Goal: Primary-CTA CTR. Pages: All.

**A-018 · Always Offer a Low-Commitment Alternative** — High
Statement: Beside the primary action, offer a smaller step (hearing check, download, "talk to us") so hesitant users get value without committing.
Why: Foot-in-the-door; exit ramps prevent trapped-feeling bounces.
Disciplines: Persuasive Technology, Emotional Design. Goal: Funnel entry rate. Pages: Homepage, Services, Solutions, Booking.

**A-019 · Primary CTA Reachable Without a Decision Tax on Mobile** — Critical
Statement: On mobile the primary action is reachable via a persistent element (bottom bar) without hunting; on desktop it's visible above the fold.
Why: Mobile users who must scroll to find booking convert far less.
Disciplines: Persuasive Technology (ability), Human Factors. Goal: Mobile conversion parity. Pages: All.

**A-020 · CTA Carries the Page's Context** — High
Statement: CTAs inherit the content's topic ("Talk to an audiologist about tinnitus"), never a generic site-wide label, when on a topical page.
Why: Information scent — context-matched next steps convert; generic ones leak.
Disciplines: Information Foraging. Goal: Blog/Hub-to-booking rate. Pages: Blog, Hub, Stories, Solutions.

**A-021 · Triggers Fire at Peak Motivation** — High
Statement: Place the booking CTA immediately after a trust/emotion peak (a story, an audiologist profile, the "no pressure" promise), not before trust is built.
Why: A trigger without motivation wastes the moment (Fogg model).
Disciplines: Persuasive Technology. Goal: Conversion. Pages: Homepage, Services, Stories, Solutions.

**A-022 · No Manufactured Urgency, Ever** — Critical
Statement: No countdown timers, "only N slots left", fake scarcity, or pre-ticked opt-ins. Urgency may only reflect genuine clinical reality.
Why: Dark patterns inflate short-term numbers and destroy long-term healthcare trust.
Disciplines: CRO Ethics, Trust Engineering, Legal. Goal: Brand durability. Pages: All.

---

## Group 4 — Cognitive Load & Information

**A-023 · Three-Item Working-Memory Ceiling** — Critical
Statement: No screen requires the user to hold more than 3–4 items in mind at once. Beyond that, add filtering, recommendation, or step-splitting.
Why: earKART's core 60+ demographic has reduced working memory; overload = abandonment.
Disciplines: Cognitive Ergonomics, Human Factors. Goal: Task completion (60+). Pages: Solutions, Comparison, Booking, Hearing Check.

**A-024 · Compare No More Than Three Options** — Critical
Statement: Never present more than three products/plans for simultaneous comparison; if more exist, filter to a relevant ≤3 first.
Why: Paradox of choice — relevance-less options raise abandonment.
Disciplines: Choice Architecture, Cognitive Ergonomics. Goal: Trial/selection rate. Pages: Solutions, Pricing, Accessories.

**A-025 · Progressive Disclosure** — High
Statement: Show the overview first; reveal depth on demand. Technical detail is never the first thing a user sees.
Why: Fluency effect — easy-to-process information is judged more credible.
Disciplines: Medical Communication, Cognitive Ergonomics. Goal: Comprehension, time-on-page. Pages: Hub, Solutions, Services, FAQs.

**A-026 · Chunk in 3–5; Cap Menus at 7** — High
Statement: Group information in chunks of 3–5; navigation menus ≤7 items; form sections ≤5 fields before a progress break.
Why: Miller's Law; reduces cognitive switching cost.
Disciplines: Cognitive Ergonomics. Goal: Completion rates. Pages: Nav, Forms, Booking, Hearing Check.

**A-027 · One Decision Per Section** — High
Statement: A section asks the user to make at most one decision. Stacked decisions get split across sections or steps.
Why: Decision density drives fatigue, especially for older users.
Disciplines: Cognitive Ergonomics, Choice Architecture. Goal: Flow completion. Pages: Booking, Solutions, Hearing Check.

**A-028 · Define the Signal; Audit the Noise** — Critical
Statement: Each page names its single "signal" (the one action/info that matters) and removes or demotes elements competing with it.
Why: Signal-to-noise ratio directly governs whether users find the path forward.
Disciplines: Signal Detection. Goal: Primary-CTA CTR, "can't find booking" support cut. Pages: All.

**A-029 · Signal Wins Every Pre-Attentive Dimension** — High
Statement: The page's primary signal ranks first in whichever pre-attentive cues are used (size, contrast, color, position, motion).
Why: Attention is pre-conscious; the most important thing must be the most salient.
Disciplines: Consumer Neuroscience, Signal Detection. Goal: CTA CTR. Pages: All.

**A-030 · Strip Escape Routes on Task-Critical Screens** — High
Statement: On the Hearing Check and Booking flows, remove nav header/footer and non-essential links so the user has no decision-costing detours.
Why: Distraction elimination raises completion on focused tasks.
Disciplines: Cognitive Ergonomics, Signal Detection. Goal: Completion rate. Pages: Hearing Check, Booking.

**A-031 · What → Why → How Sequence** — Medium
Statement: Medical explanations present what it is, then why it matters, then what to do — in that order.
Why: Matches how patients process health information.
Disciplines: Medical Communication. Goal: Comprehension. Pages: Hub, Services, FAQs, Results.

**A-032 · Layer Reading Level by Page Role** — High
Statement: Intro/overview content targets ~Grade 6–8 (SMOG ≤8); deep technical pages may reach Grade 9–10 but explain every term inline.
Why: India's health literacy is heterogeneous; un-stratified content fails someone.
Disciplines: Medical Communication, Design Justice. Goal: Comprehension across literacy. Pages: All content.

**A-033 · Numbers Get a Visual** — Medium
Statement: Any statistic shown to users is paired with a visual/natural-frequency form ("1 in 6", icon array), never bare percentages alone.
Why: Numeracy varies; visuals make risk understandable and less alarming.
Disciplines: Medical Communication, Risk Communication. Goal: Comprehension. Pages: Hub, Results, Solutions.

**A-034 · Absolute Risk, Not Relative** — High
Statement: Risks are framed in absolute terms ("about 1 in 100"), never relative ("50% higher"), which inflates alarm.
Why: Relative framing is inherently more frightening and less honest.
Disciplines: Risk Communication. Goal: Trust, anxiety control. Pages: Results, Tinnitus, Services.

---

## Group 5 — Choice Architecture & Behavioral Economics

**A-035 · Every Decision Point Has a Documented Default** — High
Statement: For each choice, the spec states the default and its rationale (e.g. recommended mid-range device; next morning slot; follow-up opted-in within consent law).
Why: Defaults are the highest-leverage, lowest-friction design decision.
Disciplines: Choice Architecture. Goal: Form completion, appropriate selection. Pages: Booking, Solutions, Hearing Check, Portal.

**A-036 · Recommend, Don't Just List** — Critical
Statement: Wherever options are shown, tell the user which is likely right for their situation (with the audiologist-confirmation caveat). Never present options without guidance.
Why: A guided choice is a trusted guide; an unguided list is a catalog earKART loses on.
Disciplines: Choice Architecture, Trust Engineering. Goal: Selection confidence, trial rate. Pages: Solutions, Services, Pricing.

**A-037 · Organize by Life, Not by Spec** — High
Statement: Products/services are organized by the user's situation and lifestyle first; technology/model second.
Why: Self-filtering by personally relevant criteria cuts paralysis.
Disciplines: Choice Architecture, Mental Models. Goal: Trial initiation. Pages: Solutions, Services.

**A-038 · Anchor High, Then Contextualize** — High
Statement: When showing price tiers, present the higher tier first so mid/low tiers read as reasonable; never lead with the cheapest.
Why: Anchoring governs perceived fairness of price.
Disciplines: Behavioral Economics. Goal: Hearing-aid conversion, AOV. Pages: Pricing, Solutions.

**A-039 · Reframe Lump Sums as Daily Cost** — High
Statement: High prices are shown with an honest per-day equivalent over device life ("≈₹98/day over 5 years") alongside the total.
Why: Mental accounting — daily framing reduces pain-of-paying without deceiving.
Disciplines: Behavioral Economics. Goal: Price-objection reduction. Pages: Pricing, Solutions, Booking.

**A-040 · Concretize the Future Benefit Before the Cost** — High
Statement: Vividly describe a specific future moment the device restores ("hear your grandchild across the table") before any price appears.
Why: Counters hyperbolic discounting — future benefit must be made imaginable to offset present cost.
Disciplines: Behavioral Economics, Emotional Design. Goal: Conversion. Pages: Solutions, Pricing, Stories.

**A-041 · Trial Framed as Endowment** — Medium
Statement: Trials are framed "take it home, return it if it's not right", not "try before you buy".
Why: Endowment effect — temporary ownership lowers return intent.
Disciplines: Behavioral Economics. Goal: Trial-to-purchase. Pages: Solutions, Fitting & Trial.

**A-042 · Decoys Must Be Genuine** — Medium
Statement: A mid-tier "decoy" that improves premium uptake is allowed only if it is a real, available, fairly-described product.
Why: Choice architecture is ethical only when every option is honest.
Disciplines: Choice Architecture, Ethics. Goal: Mix optimization without trust loss. Pages: Pricing, Solutions.

**A-043 · Pre-Fill From Context** — High
Statement: Booking/forms auto-populate everything derivable from context (clinic → address; service chosen → service field). Each avoidable field is removed.
Why: Every extra required field measurably drops completion (~4.5%).
Disciplines: Choice Architecture, Human Factors, Persuasive Technology. Goal: Form completion. Pages: Booking, Hearing Check, Home Visit.

---

## Group 6 — Decision Confidence & Habit/Retention

**A-044 · Confidence Checkpoint Before Each Big Step** — High
Statement: End each major decision page with a brief "ready for the next step?" summary recapping what they learned and why the step fits them.
Why: Healthcare decisions have low natural confidence; confidence must be engineered.
Disciplines: Decision Confidence. Goal: Cancellation reduction. Pages: Solutions, Services, Booking.

**A-045 · Justify the Decision Right After It's Made** — High
Statement: Immediately post-booking, confirm with reasons the choice was wise and relevant to what they selected — not a bare transaction receipt.
Why: Cognitive inoculation against post-decision regret (a top cancellation driver).
Disciplines: Decision Confidence, Emotional Design. Goal: Show-up rate. Pages: Booking confirmation, Email.

**A-046 · Make Commitment Feel Reversible** — Medium
Statement: State the easy out ("change or cancel up to 2 hours before") near commitment points.
Why: Reversibility lowers booking anxiety even when rarely used.
Disciplines: Decision Confidence. Goal: Booking rate. Pages: Booking, Confirmation.

**A-047 · Normalize the Choice** — Medium
Statement: Where honest, show that people in a similar situation commonly take this step ("most people start with a full assessment").
Why: Social-comparison reassurance reduces "am I doing the right thing?" hesitation.
Disciplines: Decision Confidence, Indian Healthcare Psychology. Goal: Conversion. Pages: Services, Booking, Results.

**A-048 · Design the Habit Loop for Each Care Behavior** — Medium
Statement: For each desired behavior (daily wear, weekly cleaning, annual audiogram) define a trigger → routine → reward loop in the post-purchase experience.
Why: Device abandonment is the industry's chronic failure; habits must be architected.
Disciplines: Habit Formation. Goal: Adherence, LTV. Pages: Portal, Post-purchase comms.

**A-049 · Reminders With Humane Cadence** — Medium
Statement: Maintenance/check-up reminders use a cadence that reinforces habit without nagging; users can adjust frequency.
Why: Wrong cadence creates annoyance and opt-outs.
Disciplines: Habit Formation, Conversation Design. Goal: Check-up attendance. Pages: Portal, Email/WhatsApp.

**A-050 · Design the Relationship Calendar** — Medium
Statement: Define what earKART says to a patient at week 1, month 1, 3, 6, year 1, and annually — and the psychological job of each touch.
Why: Retention costs ~1/5 of acquisition; silence after purchase is wasted value.
Disciplines: Loyalty Psychology, Service Design. Goal: Retention, upgrade rate. Pages: Portal, Lifecycle comms.

**A-051 · Reflect Value Back Periodically** — Low
Statement: Send periodic "here's how your hearing journey is going" value-reminders, not just transactional or upsell messages.
Why: Recognized value sustains loyalty and identity alignment.
Disciplines: Loyalty Psychology. Goal: Retention, advocacy. Pages: Portal, Email.

---

## Group 7 — Referral & Advocacy

**A-052 · Request Referrals at Documented Peak Satisfaction** — Medium
Statement: Referral/testimonial asks fire at known peaks (≈Day 14, Week 8, Month 6), never at random or during friction.
Why: Timing is the difference between an enthusiastic advocate and an annoyed patient.
Disciplines: Referral Psychology. Goal: Referral participation. Pages: Portal, Post-purchase, Review flow.

**A-053 · Give Social Currency, Not a Sales Ask** — Medium
Statement: Make advocacy easy by giving patients genuinely useful, shareable, earKART-branded content ("a hearing-health guide for your family"), not "tell your friends".
Why: Reduces the social friction of recommending a healthcare provider.
Disciplines: Referral Psychology. Goal: Referral CAC reduction. Pages: Portal, Stories, Blog.

**A-054 · Facilitate Doctor/Family Referral Paths** — High
Statement: Provide explicit "refer a patient" (GP/ENT) and "book for a family member / gift a hearing check" flows.
Why: In India the most trusted referral is a doctor, then family — the site must enable both.
Disciplines: Indian Healthcare Psychology, Referral Psychology. Goal: Referral conversion, TAM. Pages: Booking, Homepage, Portal, dedicated referral page.

---

## Group 8 — Indian Market & Cross-Cultural

**A-055 · Design for the Family Committee** — Critical
Statement: Key pages are shareable, support "book for a family member", and speak to collective decision-making, not a lone buyer.
Why: Indian healthcare decisions are family-mediated (Rajan, Sunita, Rohan, Priya).
Disciplines: Indian Healthcare Psychology, Cross-Cultural Design. Goal: Conversion, esp. non-metro. Pages: Homepage, Services, Solutions, Booking, Stories.

**A-056 · Reframe Prevention as Clarity** — High
Statement: Don't sell "catching problems early"; frame assessments as gaining "clarity" and "understanding".
Why: Prevention is culturally underweighted; clarity is motivating and non-threatening.
Disciplines: Indian Healthcare Psychology, Behavior Change. Goal: Assessment bookings. Pages: Hearing Check, Services, Homepage.

**A-057 · Lead Trust With Referral & People, Not Ads** — High
Statement: Prioritize doctor endorsement, named staff, and patient stories over advertising-style claims as the primary trust mechanism.
Why: Indian users trust personal referral far above digital marketing.
Disciplines: Indian Healthcare Psychology, Trust Engineering. Goal: Conversion. Pages: All.

**A-058 · Best-Price & Financing Over "Limited Offers"** — Medium
Statement: Address price expectations with transparent best-price signals and financing, not time-pressured discounts.
Why: Indian consumers expect value/negotiation framing; fake offers erode trust.
Disciplines: Indian Healthcare Psychology, Behavioral Economics. Goal: Price-objection reduction. Pages: Pricing, Solutions.

**A-059 · No Region or Group Feels "Not For Us"** — High
Statement: Imagery, language, and examples represent India's diversity (skin tone, region, multigenerational households, urban + semi-urban).
Why: Representation gaps silently exclude large segments.
Disciplines: Cross-Cultural Design, Design Justice. Goal: TAM, non-metro conversion. Pages: All visual pages.

**A-060 · Five Languages at Launch for Core Paths** — High
Statement: Navigation, Hearing Check, and Booking are available in ≥5 Indian languages at launch; full content follows.
Why: Linguistic inclusion is both market expansion and justice.
Disciplines: Design Justice, Cross-Cultural Design. Goal: TAM. Pages: Global nav, Hearing Check, Booking.

**A-061 · Bilingual Medical Terms on First Use** — Medium
Statement: English medical terms (audiogram, tinnitus) are paired with a Hindi/local equivalent on first use; emotional pull-quotes may be bilingual.
Why: Comprehension and resonance for older, mixed-literacy users.
Disciplines: Medical Communication, Cross-Cultural Design. Goal: Comprehension. Pages: Hub, Stories, Services.

---

## Group 9 — Mental Models & Stigma

**A-062 · Correct Mental Models Across Touchpoints** — High
Statement: The 10 most common false beliefs (e.g. "hearing aids are huge and ugly", "only very old people need them") are corrected progressively across pages, not in one "myths vs facts" box.
Why: Single myth-busting articles are read defensively; distributed correction works.
Disciplines: Mental Models. Goal: Stigma drop-off reduction. Pages: Homepage, Hub, Solutions, Stories.

**A-063 · Correct Beliefs With Stories, Not Lectures** — High
Statement: Prefer a real person saying "I thought it'd make me look old — I was wrong" over a fact box asserting the same.
Why: Narrative corrects beliefs without triggering defensiveness.
Disciplines: Mental Models, Emotional Design. Goal: Consideration conversion. Pages: Stories, Solutions, Homepage.

**A-064 · Show the Image That Contradicts the Myth** — Medium
Statement: Use imagery that visually disproves the false model (a nearly invisible modern device, an active 60-something) with minimal text.
Why: The image carries the correction more powerfully than copy.
Disciplines: Mental Models, Consumer Neuroscience. Goal: Stigma reduction. Pages: Solutions, Homepage.

---

## Group 10 — Affordance & Interaction

**A-065 · Interactive Elements Carry ≥3 Affordance Signals** — High
Statement: Anything clickable shows at least three of: distinct color, cursor change, hover/focus state, border, shadow.
Why: Under-signaled controls get ignored ("I didn't know I could click that").
Disciplines: Affordance Theory. Goal: Interaction-error reduction. Pages: All interactive.

**A-066 · No False Affordances** — High
Statement: Non-interactive elements must not look clickable (no underlined non-links, no button-like static boxes).
Why: False affordances waste clicks and erode confidence.
Disciplines: Affordance Theory. Goal: Task success. Pages: All.

**A-067 · Mobile Affordance Without Hover** — High
Statement: On touch, communicate tappability through size, color, spacing, and labels — never rely on a hover state that doesn't exist.
Why: Hover-dependent affordances vanish on mobile.
Disciplines: Affordance Theory, Human Factors. Goal: Mobile task success. Pages: All.

**A-068 · Immediate Feedback for Every Interaction** — Critical
Statement: Every tap/click/submit produces perceptible feedback within 100ms (state change, spinner, confirmation).
Why: Absent feedback causes repeat taps, double-bookings, and anxiety.
Disciplines: Human Factors, Emotional Design. Goal: Error reduction, confidence. Pages: All.

**A-069 · Icons Always Carry Text Labels** — High
Statement: No icon-only control for any primary function; hamburger reads "Menu".
Why: Icon-only fails older users and WCAG; ambiguity costs completion.
Disciplines: Accessibility, Affordance Theory. Goal: Task success. Pages: Nav, all.

---

## Group 11 — Human Factors & Error Handling

**A-070 · Prevent Errors, Don't Just Recover Them** — High
Statement: For each consequential action, design the interface so the wrong action is improbable (constraints), not merely undoable.
Why: In a medical/spend context, prevention beats recovery.
Disciplines: Human Factors. Goal: Booking-error reduction. Pages: Booking, Hearing Check, Portal.

**A-071 · Confirm High-Commitment Actions With a Summary** — High
Statement: Booking/purchase requires a confirmation step showing exactly what was selected before finalizing.
Why: Prevents slips and the "I booked the wrong thing" cancellation.
Disciplines: Human Factors, Decision Confidence. Goal: Mismatch reduction. Pages: Booking, Purchase, Home Visit.

**A-072 · Every Error State Is Pre-Written** — Critical
Statement: For each possible error, the spec defines the exact message, a plain explanation, and the recovery path. No raw/system errors reach users.
Why: Unscripted errors are where trust and tasks fail silently.
Disciplines: Human Factors, Medical Communication. Goal: Completion, trust. Pages: All forms/tools.

**A-073 · Sympathetic, Specific Error Tone** — High
Statement: Errors are sympathetic and specific ("That date's fully booked — here are the next three"), never blaming or bureaucratic.
Why: Error tone is a brand and emotional moment, not just a technical one.
Disciplines: Emotional Design, Conversation Design. Goal: Recovery, NPS. Pages: All.

**A-074 · Long Tasks Are Segmented and Saveable** — Medium
Statement: Complex flows (comparison, multi-step booking) are broken into steps and let users save/resume.
Why: Older users fatigue in extended decision tasks.
Disciplines: Human Factors, Cognitive Ergonomics. Goal: Completion (60+). Pages: Booking, Solutions, Hearing Check.

---

## Group 12 — Accessibility (binding baseline)

**A-075 · Accessible by Default, Not as a Feature** — Critical
Statement: WCAG 2.1 AA is the floor; AAA for all body text and primary CTAs. Accessibility is a launch gate, not a backlog item.
Why: earKART's audience over-indexes on age-related vision, motor, and cognitive needs.
Disciplines: Accessibility, Design Justice. Goal: Reach, legal, ethics. Pages: All.

**A-076 · Never Convey Meaning by Color Alone** — Critical
Statement: Status/meaning always has a non-color cue (icon, label, text).
Why: Color-blind and low-vision users must receive the same information.
Disciplines: Accessibility. Goal: Comprehension, compliance. Pages: All, esp. Results, Forms.

**A-077 · 44×44px Minimum Touch Targets** — Critical
Statement: All interactive targets are ≥44×44px with adequate spacing.
Why: Older users and reduced dexterity need larger, well-spaced targets.
Disciplines: Accessibility, Human Factors. Goal: Mobile success. Pages: All.

**A-078 · Full Keyboard Operability + Visible Focus** — Critical
Statement: Every action works by keyboard; focus indicators are ≥2px and visibly contrasted; tab order is logical; modals trap focus; skip-link present.
Why: Keyboard and assistive-tech users must complete every task.
Disciplines: Accessibility. Goal: Compliance, reach. Pages: All.

**A-079 · Audio Interactions Have a Non-Audio Path** — Critical
Statement: The hearing-check tone test (and any audio UI) always has an equivalent non-audio alternative; nothing autoplays audio.
Why: A hearing-care site must be usable by people with hearing loss.
Disciplines: Accessibility. Goal: Inclusion, completion. Pages: Hearing Check, Video.

**A-080 · Visible Labels; Captions on All Video** — High
Statement: Form labels are always visible (placeholder is never the only label); all video is captioned.
Why: Placeholder-only labels disappear on focus and fail many users.
Disciplines: Accessibility, Human Factors. Goal: Completion, inclusion. Pages: Forms, Stories, Blog.

**A-081 · Respect Reduced Motion** — High
Statement: Every animation has a `prefers-reduced-motion` path that disables non-essential motion; essential motion (spinners) is retained.
Why: Motion sensitivity overlaps strongly with the older audience.
Disciplines: Accessibility, Motion. Goal: Comfort, inclusion. Pages: All animated.

**A-082 · Functional at 200% Zoom** — High
Statement: All content and functionality survive 200% zoom and 200% text resize with no loss or horizontal scroll ≥320px.
Why: Presbyopia and low vision require magnification.
Disciplines: Accessibility. Goal: Reach. Pages: All.

**A-083 · Research Includes the Marginalized** — Medium
Statement: Usability research must include 65+, low-digital-literacy, Tier-3, and lower-income participants and assistive-tech users.
Why: Centering young urban natives systematically fails earKART's real majority.
Disciplines: Design Justice. Goal: Validity, TAM. Pages: Process-level.

**A-084 · Never Shame Lower-Income Users on Price** — High
Statement: Pricing communication never implies inadequacy; government subsidy/scheme info is prominent, not buried.
Why: Economic inclusion is both ethical and market-expanding.
Disciplines: Design Justice, Indian Healthcare Psychology. Goal: TAM, brand. Pages: Pricing, Solutions, Senior content.

---

## Group 13 — Visual, Environmental & Motion

**A-085 · The Digital Clinic Feeling** — High
Statement: Pages feel like a calm, spacious private consultation room — not a retail store (dense, bright) and not a hospital (cold, institutional).
Why: The gestalt of a page sets physiological arousal before any reading.
Disciplines: Environmental Psychology, Emotional Design. Goal: Decision-abandonment reduction. Pages: All.

**A-086 · Lowest Visual Density at Highest-Stakes Moments** — High
Statement: High-stakes pages (Solutions selection, Booking confirmation, Results) have the lowest information density; exploratory pages may be denser.
Why: Arousal calibration — calm where decisions are heaviest.
Disciplines: Environmental Psychology, Cognitive Ergonomics. Goal: Abandonment reduction. Pages: Solutions, Booking, Results.

**A-087 · Protect Breathing Room Around CTAs and Trust Signals** — Medium
Statement: Maintain defined minimum white space around primary CTAs, between sections, and around trust signals; do not let density creep fill it.
Why: White space reads as calm and confidence and aids salience.
Disciplines: Environmental Psychology, Consumer Neuroscience. Goal: CTA salience, calm. Pages: All.

**A-088 · Layout Follows Natural Scan Patterns** — Medium
Statement: Place critical elements at natural fixation points (F/Z-pattern, top-left primacy), not arbitrary positions.
Why: Users scan predictably; fighting it buries the signal.
Disciplines: Consumer Neuroscience. Goal: CTA CTR. Pages: Homepage, Landing, Services.

**A-089 · Motion Serves, Then Stills** — Medium
Statement: Animate only to guide attention or confirm state; default to stillness. No rapid/jarring motion; durations follow the v1 motion scale.
Why: Anxious users read fast motion as urgency/stress.
Disciplines: Motion, Emotional Design. Goal: Calm, comprehension. Pages: All.

**A-090 · Extend Interaction Timing for Older Users** — Low
Statement: On older-skewing pages, hover/focus/transition states are perceivable to slower visual processing (no sub-perceptual flashes); no time-limited interactions under 60s.
Why: Processing speed declines with age; too-fast feedback is missed.
Disciplines: Cognitive Ergonomics, Accessibility. Goal: Task success (60+). Pages: Senior content, Services.

**A-091 · Three-Quarter Faces, Warm Natural Light** — Low
Statement: Patient/portrait imagery favors warm, candid, natural-light, three-quarter-profile framing; never clinical white backdrops for lifestyle shots or device close-ups as hero.
Why: Faces build trust pre-consciously; warmth disarms; device-as-hero re-triggers stigma.
Disciplines: Consumer Neuroscience, Emotional Design, Photography. Goal: Trust, stigma reduction. Pages: Homepage, Stories, Clinic, Services.

---

## Group 14 — Medical, Ethical & Risk

**A-092 · Clinical Accuracy Supersedes Everything** — Critical
Statement: Patient safety and medical accuracy override all design, conversion, and brand goals, without exception.
Why: This is healthcare; a persuasive-but-wrong page can cause real harm.
Disciplines: Medical Communication, Ethics. Goal: Safety, legal. Pages: All clinical.

**A-093 · Screening Is Never Framed as Diagnosis** — Critical
Statement: The Hearing Check and any online result clearly states it is a screening, not a clinical diagnosis, with the false-negative caveat.
Why: Misframing risks both harm and legal exposure.
Disciplines: Risk Communication, Legal. Goal: Safety, trust. Pages: Hearing Check, Results.

**A-094 · Never Exaggerate or Guarantee Outcomes** — Critical
Statement: No "guaranteed results", "cure", or "life-changing miracle" language; outcomes are stated as honest ranges with timeframes.
Why: False expectations cause complaints, regret, and legal risk.
Disciplines: Medical Communication, Legal, Ethics. Goal: Complaint reduction. Pages: Solutions, Services, Tinnitus.

**A-095 · Empower Patients to Question** — Medium
Statement: Provide "questions to ask your audiologist" content rather than positioning earKART as the only authority.
Why: Empowered patients are more satisfied and more committed.
Disciplines: Risk Communication, Trust Engineering. Goal: Satisfaction. Pages: Services, Hub, Results.

**A-096 · Separate Independent Info From Recommendation** — High
Statement: Visibly distinguish neutral education from earKART's own product/service recommendation.
Why: Conflating the two corrodes content trust.
Disciplines: Trust Engineering, Ethics. Goal: Content credibility. Pages: Hub, Blog, Solutions.

**A-097 · Consent and Privacy Are Designed, Not Bolted On** — Critical
Statement: Health-adjacent data collection uses explicit, plain-language consent; results are shown before any email gate; tracking/personalization complies with India's data-protection law with anonymization.
Why: Trust and legality both demand privacy-first defaults.
Disciplines: Legal, Trust Engineering, AI Personalization. Goal: Trust, compliance. Pages: Hearing Check, Booking, Portal.

---

## Group 15 — Conversation, Content & SEO

**A-098 · One Voice Across Every Channel** — High
Statement: Web, WhatsApp, email, phone, and clinic communications sound like the same warm, unhurried person.
Why: Voice inconsistency breaks the sense of a single trustworthy relationship.
Disciplines: Conversation Design, Brand Voice. Goal: Loyalty, first-contact satisfaction. Pages: All comms.

**A-099 · Honest Bot-to-Human Handoff** — High
Statement: Automated chat never pretends to be human; escalation is warm and concrete ("I'll connect you with an audiologist shortly").
Why: A bot discovered impersonating a human is catastrophic to trust.
Disciplines: Conversation Design, Trust Engineering. Goal: Trust, conversion. Pages: Chat, WhatsApp.

**A-100 · The "Most Useful Thing" Content Test** — High
Statement: Every article must pass: "If earKART didn't exist, would this still be the most useful page on this topic?" If no, rewrite.
Why: Genuine usefulness drives reciprocity, rankings, and durable trust.
Disciplines: Medical Communication, SEO, Trust Engineering. Goal: Organic growth, conversion. Pages: Blog, Hub.

**A-101 · Content Is Tagged to a Behavior-Change Stage** — Medium
Statement: Each content page is tagged Precontemplation/Contemplation/Preparation/Action/Maintenance and links to adjacent stages.
Why: A precontemplator and a preparer need different content; one-size leaks.
Disciplines: Behavior Change. Goal: Engagement, LTV. Pages: Blog, Hub.

**A-102 · Internal Links Carry Information Scent** — High
Statement: Link anchor text describes the destination ("what to expect at a hearing test"); never "click here"/"learn more". Each page links to ≥3 relevant next steps.
Why: Scent-bearing links keep foragers on the path to booking.
Disciplines: Information Foraging, SEO. Goal: Blog-to-booking. Pages: All content.

**A-103 · Every Page Earns Its SEO Hygiene** — Medium
Statement: Unique title (55–60 chars, keyword), meta description (145–160, with CTA), one descriptive H1, correct schema, descriptive alt text, fast Core Web Vitals (LCP<2.5s, CLS<0.1, INP<200ms).
Why: Organic is the primary, highest-converting channel; technical debt silently kills it.
Disciplines: SEO, Technical/Performance. Goal: Organic sessions. Pages: All.

**A-104 · Performance Is a Trust Signal** — High
Statement: Pages meet the Core Web Vitals targets above; hero images preloaded, below-fold lazy-loaded, WebP with fallback.
Why: Slow/janky pages read as low-quality and unsafe, and they tank rankings and mobile conversion.
Disciplines: Performance, Trust Engineering. Goal: Conversion, SEO. Pages: All.

---

## Group 16 — Service, Systems & Crisis

**A-105 · The Website Is the Onramp, Not the Service** — High
Statement: Every on-site promise has a matching operational standard offline; the experience is designed end-to-end, not page-by-page.
Why: Peak-end rule — a 9/10 site and a 5/10 phone line averages to a 5/10 brand memory.
Disciplines: Service Design, Systems Thinking. Goal: NPS, referral. Pages: All promise-setting pages.

**A-106 · Design the Channel Transitions** — High
Statement: Explicitly design each hand-off (web→phone, phone→clinic, clinic→aftercare); these seams are where trust is most often lost.
Why: Unowned transitions drop patients between systems.
Disciplines: Service Design. Goal: Show-up, retention. Pages: Booking, Confirmation, Clinic, Portal.

**A-107 · Map the Data Flow for Every Touchpoint** — High
Statement: For each collected field, document where it goes (CRM mapping, calendar, WhatsApp API) and the failure mode if a system is down.
Why: Undocumented integrations cause costly post-launch failures and double-handling.
Disciplines: Systems Thinking. Goal: Operational reliability. Pages: Booking, Portal, Hearing Check.

**A-108 · Design the Service-Recovery Path** — Medium
Statement: Define how the digital experience responds when earKART fails (delay, cancellation, wrong recommendation): acknowledgement, explanation, resolution, trust repair.
Why: Recovery quality, not absence of failure, determines retained trust.
Disciplines: Service Design, Trust Engineering. Goal: Retained NPS. Pages: Notifications, Confirmation, Portal.

**A-109 · Hold a Crisis-Communication Protocol** — Medium
Statement: Maintain a tiered crisis protocol (operational disruption / product-safety / media) with a homepage notification-bar pattern and a statement-page template ready before they're needed.
Why: Crises are inevitable; improvised responses cause permanent damage.
Disciplines: Crisis Communication. Goal: Brand resilience. Pages: Homepage, Notifications, Press.

**A-110 · Respond to Reviews Personally** — Medium
Statement: Negative reviews receive timely, specific, non-template responses; review monitoring is an owned process.
Why: Visible, human responses repair trust for every future reader.
Disciplines: Crisis Communication, Trust Engineering. Goal: Reputation. Pages: Reviews, Clinic.

---

## Group 17 — Personalization, Gamification & AI

**A-111 · Personalize on Journey Stage, Privacy-First** — Low
Statement: Where data and consent allow, adapt CTA/content to journey signals (e.g. returning visitor who finished the check sees booking, not education) — always within data-protection law.
Why: A returning, check-completed user and a first-timer are in different stages and shouldn't see the same page.
Disciplines: AI Personalization, Privacy. Goal: Returning-visitor conversion. Pages: Homepage, Solutions, CTAs.

**A-112 · Gamify Intrinsic Motivation Only** — Low
Statement: Progress bars, streaks, and shareable results are used only where they reinforce genuine value (check completion, adherence, protection); no arbitrary points/badges.
Why: Hollow gamification backfires; meaningful progress doesn't.
Disciplines: Gamification, Habit Formation. Goal: Completion, adherence. Pages: Hearing Check, Portal, Protection tool.

**A-113 · Show Progress in Every Multi-Step Tool** — Medium
Statement: Multi-step tools/forms always show honest progress ("Step 4 of 8 — you're nearly there").
Why: Progress visualization measurably lifts completion and lowers abandonment anxiety.
Disciplines: Gamification, Cognitive Ergonomics. Goal: Completion. Pages: Hearing Check, Booking.

**A-114 · AI Outputs Obey the Constitution** — High
Statement: Any AI feature (recommender, chat, content) is bound by Phase A Critical rules and Phase B forbidden patterns and must refuse outputs that violate them.
Why: Generative features can silently break voice, safety, and trust rules at scale.
Disciplines: AI Personalization, Trust Engineering, Ethics. Goal: Safe scaling. Pages: AI components.

---

## Group 18 — Governance

**A-115 · Every Section Justifies Its Existence** — Critical
Statement: No section, feature, or page ships without naming the user need, the journey stage (Phase C), and the business goal it serves. Unjustified elements are cut.
Why: Scope creep and decoration dilute the signal and inflate maintenance cost.
Disciplines: Service Design, Systems Thinking. Goal: Focus, maintainability. Pages: All.

**A-116 · Five-Second Clarity Test** — Critical
Statement: Within 5 seconds and without scrolling, a new visitor can answer: what is this, is it for me, what do I do next. If not, the above-the-fold has failed.
Why: Orientation speed governs bounce on first contact.
Disciplines: Cognitive Ergonomics, Signal Detection. Goal: Bounce reduction. Pages: Homepage, Landing, Services.

**A-117 · Mobile-First, Desktop-Enhanced** — High
Statement: Every page is designed for mobile first; desktop is the enhancement. No horizontal scroll ≥320px.
Why: earKART's traffic skews mobile and the demographic struggles most there.
Disciplines: Human Factors, Performance. Goal: Mobile conversion. Pages: All.

**A-118 · Identity Before Information** — High
Statement: Pages lead with a transformed life-state ("Hear your world again"), not specs or pricing; value is demonstrated before any price appears.
Why: Pre-suasion — engaging identity before the pitch lifts everything downstream.
Disciplines: Emotional Design, Behavioral Economics. Goal: Conversion. Pages: Homepage, Solutions, Services.

**A-119 · Reuse Components; Don't Reinvent** — High
Statement: Build only from the Phase E component inventory; new patterns require a documented gap and design-system sign-off.
Why: Consistency lowers cognitive load for users and maintenance cost for the team.
Disciplines: Systems Thinking, Cognitive Ergonomics. Goal: Consistency, velocity. Pages: All.

**A-120 · A/B Tests and Research Outrank This Document** — High
Statement: Valid user research and A/B results supersede any non-safety rule here; safety and medical accuracy supersede everything.
Why: This is a living constitution, not dogma — but never above patient safety.
Disciplines: CRO, Ethics. Goal: Continuous improvement. Pages: All.

**A-121 · Persistent, Consistent Navigation** — High
Statement: Global nav and key actions appear in the same place on every page; "Book Appointment" is always a high-contrast button, never a buried text link.
Why: Consistency is a cognitive and accessibility requirement.
Disciplines: Cognitive Ergonomics, Accessibility. Goal: Task success. Pages: All.

**A-122 · Quality Gate Before Launch** — High
Statement: No page ships without passing the per-page quality checklist (comprehension, cognitive load, trust, conversion, accessibility, mobile, SEO, measurement) and Phase D mitigations for its risks.
Why: A single checklist catches regressions across all disciplines at once.
Disciplines: All. Goal: Defect prevention. Pages: All.

**A-123 · Instrument Before You Optimize** — Medium
Statement: Every primary interaction fires a verified analytics event before the page is considered done; each page carries a documented next A/B hypothesis.
Why: You cannot improve or detect failure on what you don't measure.
Disciplines: Analytics, CRO. Goal: Measurability. Pages: All.

**A-124 · Plain-Language Audit Is Mandatory** — Medium
Statement: Patient-facing pages pass a readability check (SMOG/Flesch-Kincaid target) and a read-aloud check (sounds natural spoken, since family members read to elders).
Why: Comprehension is a safety and conversion issue, not a nicety.
Disciplines: Medical Communication, Accessibility. Goal: Comprehension. Pages: All content.

**A-125 · Default to Opt-In, Transparent Policies** — High
Statement: No pre-ticked consents; cancellation, privacy, and pricing policies are easy to find and read.
Why: Dark policy patterns are both unethical and trust-destroying.
Disciplines: Ethics, Legal, Trust Engineering. Goal: Trust, compliance. Pages: Booking, Forms, Footer.

**A-126 · Maintain the Living Document** — Medium
Statement: Brand stats refresh quarterly; medical reviews re-run on schedule; rule amendments are logged in the README changelog with evidence.
Why: A stale source of truth quietly becomes false.
Disciplines: Governance. Goal: Sustained accuracy. Pages: Process-level.

**A-127 · When in Doubt, Choose the Patient** — Critical
Statement: Any unresolved trade-off is decided in favor of the patient's wellbeing, dignity, and understanding over short-term business metrics.
Why: It is the brand promise ("Redefining Hearing Care") and the ultimate tie-breaker.
Disciplines: Ethics, all. Goal: Trust, longevity. Pages: All.

---

## When Rules Collide — Conflict Resolution

Rules will sometimes pull in opposite directions (e.g. A-007 *trust before commitment* vs. A-019 *CTA reachable fast*; A-039 *show daily cost* vs. A-011 *every claim sourced*; A-111 *personalize* vs. A-097 *privacy-first*). Resolve in this fixed precedence order — **higher tier always wins**:

1. **Patient safety & medical accuracy** (A-092, A-093, A-094) — beats everything, including conversion and brand.
2. **Legal & consent/privacy** (A-097, A-011, A-022, A-125) — beats persuasion and personalization.
3. **Trust & dignity** (A-002, A-005, A-006, A-007, A-127) — beats short-term conversion. If raising conversion would cost trust, trust wins.
4. **Accessibility floor** (A-075–A-082) — never traded away for aesthetics or density.
5. **Comprehension & cognitive load** (A-023, A-025, A-028) — beats completeness; cut content before overloading.
6. **Priority field** — between two rules of the same tier, the higher Priority (Critical > High > Medium > Low) wins.
7. **Validated evidence** (A-120) — a passing A/B test or genuine user research overrides any non-safety, non-legal rule; record the override in the changelog.

**Worked examples:**
- *A-019 wants the CTA instantly reachable; A-007 wants trust first.* → Tier 3 (trust) outranks conversion: keep the CTA persistent/available (ability), but ensure a trust signal is visible before the user would act. Both can hold; if forced, trust placement wins.
- *A-111 personalization vs. A-097 privacy.* → Tier 2 wins: personalize only within consent; if consent is absent, serve the non-personalized default.
- *A-039 daily-cost framing vs. A-094 no exaggeration.* → Tier 1 wins: daily-cost is allowed only because it is arithmetically honest; the moment it misleads, it's cut.
- *A-002 reduce anxiety vs. A-013 honest limitations (which may raise some anxiety).* → Honesty (Tier 1/2 adjacent, integrity trust) holds, but pair the limitation with a hopeful next step (A-005) so net anxiety still falls.

If a conflict cannot be resolved by this order, escalate to the Product + Clinical leads jointly; default to A-127 (choose the patient) until they rule.
