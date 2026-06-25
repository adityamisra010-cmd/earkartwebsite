# Phase D — Failure Modes & Anti-Patterns (Red Team)

**Role: adversary.** This catalog assumes the site *will* fail and names how, before it happens. Each failure carries Likelihood (L) and Severity (S) on Low/Med/High/Critical, a Mitigation, the Preventative Design Principle (the Phase A rule that forbids it), and a Monitoring Method.

Read this as the risk register. Phase D mitigations are **acceptance criteria**, not suggestions (Rule A-122). Risks are grouped by the 13 mandated categories, organized around the highest-risk surfaces (Homepage, Hearing Check, Solutions/Pricing, Booking, Clinic, Results/Diagnosis, Content/Blog, Portal/Aftercare).

---

## 1. Possible Confusion

**D-1.1 Hero doesn't pass the 5-second test** — L: Med · S: High
Mitigation: Enforce A-116 5-second test in QA; what/who/next answerable above fold. Principle: A-116. Monitor: 5-second user tests, bounce rate, first-click tests.

**D-1.2 "Screening" mistaken for "diagnosis"** — L: High · S: Critical
Mitigation: Persistent plain caveat on tool and every result; never present a number as clinical. Principle: A-093. Monitor: Comprehension testing, support tickets ("the website said I'm fine/deaf").

**D-1.3 Users can't find how to book** — L: Med · S: High
Mitigation: One unmistakable primary CTA per page (A-017); persistent mobile bar (A-019). Principle: A-028. Monitor: "How do I book" support queries, CTA click maps, funnel drop.

**D-1.4 Hearing-aid page reads as an unguided catalog** — L: High · S: High
Mitigation: Lifestyle-first organization, ≤3 compared, explicit recommendation (A-024, A-036, A-037). Principle: A-036. Monitor: Time-on-page vs. trial-initiation, exit rate, session recordings.

**D-1.5 Jargon without translation** — L: Med · S: Med
Mitigation: Inline plain-language + first-use bilingual gloss; plain-language audit (A-124). Principle: A-032. Monitor: SMOG score, "what does X mean" searches, comprehension tests.

## 2. Trust Failures

**D-2.1 Stock photos exposed as fake** — L: Med · S: Critical
Mitigation: Real, consented staff/patient photography only (A-010). Principle: A-010. Monitor: Reverse-image spot checks, qualitative trust interviews.

**D-2.2 Unsourced statistics / vague "award-winning"** — L: High · S: High
Mitigation: Source every stat; name every award or cut it (A-011). Principle: A-011. Monitor: Pre-publish claim audit, periodic content sweep.

**D-2.3 Negative reviews unanswered** — L: High · S: High
Mitigation: Owned review-monitoring with personal, specific responses (A-110). Principle: A-110. Monitor: Review response rate/time, sentiment trend.

**D-2.4 Web promise contradicted by clinic reality** — L: Med · S: Critical
Mitigation: Each promise mapped to an operational standard (A-105); audit promise-match. Principle: A-105. Monitor: Post-visit "did it match?" survey, complaint themes.

**D-2.5 Conversion tactics perceived as pushy** — L: Med · S: High
Mitigation: No fake urgency/dark patterns; "no pressure" promise honored (A-022). Principle: A-022. Monitor: Perceived-pressure survey item, drop after pricing.

## 3. Accessibility Failures

**D-3.1 Tone test unusable by hearing-impaired/no-headphone users** — L: High · S: High
Mitigation: Behavioral (non-audio) path always available; no overweighting audio (A-079). Principle: A-079. Monitor: Tool completion by path, axe/manual audit.

**D-3.2 Low-contrast text fails older eyes** — L: Med · S: High
Mitigation: AAA for body text & CTAs; contrast verified pre-production (A-075). Principle: A-075. Monitor: Automated contrast scan in CI, Lighthouse ≥95.

**D-3.3 Touch targets too small / hover-only affordances** — L: Med · S: High
Mitigation: 44×44px minimum; touch affordance without hover (A-077, A-067). Principle: A-077. Monitor: Mobile error-tap analytics, device testing.

**D-3.4 Keyboard/screen-reader traps** — L: Med · S: High
Mitigation: Full keyboard path, focus trap in modals, skip link (A-078). Principle: A-078. Monitor: NVDA/VoiceOver test pass, keyboard-only QA each release.

**D-3.5 Motion triggers discomfort** — L: Low · S: Med
Mitigation: `prefers-reduced-motion` on all animation (A-081). Principle: A-081. Monitor: Reduced-motion path test in QA.

## 4. Medical Communication Risks

**D-4.1 Online result causes false reassurance or alarm** — L: High · S: Critical
Mitigation: Calm result tones, honest caveats, "screening not diagnosis," next-step framing (A-093, A-002). Principle: A-093. Monitor: Result-screen sentiment, downstream booking behavior, clinical-team feedback.

**D-4.2 Outcome over-promised** — L: Med · S: Critical
Mitigation: Honest ranges/timeframes; no "guarantee/cure" (A-094). Principle: A-094. Monitor: Complaint themes "it didn't work like the site said."

**D-4.3 Unreviewed clinical content published** — L: Med · S: Critical
Mitigation: Mandatory audiologist review + visible stamp + re-review date (A-012). Principle: A-012. Monitor: % content with valid stamp, review-due dashboard.

**D-4.4 Relative-risk framing alarms users** — L: Med · S: Med
Mitigation: Absolute frequencies + visuals (A-033, A-034). Principle: A-034. Monitor: Editorial checklist, comprehension testing.

## 5. Ethical Risks

**D-5.1 Genuine-decoy slides into manipulation** — L: Med · S: High
Mitigation: Decoys only if real/available/fairly described; recommend on patient fit not margin (A-042, A-036). Principle: A-042. Monitor: Recommendation-vs-margin audit, mystery-shopper.

**D-5.2 Fear used to drive action** — L: Med · S: High
Mitigation: Hope-led 80/20; risk always paired with doable step (A-005). Principle: A-005. Monitor: Editorial tone review, hope/fear content audit.

**D-5.3 Results gated behind email** — L: Med · S: High
Mitigation: Value first, capture after results (A-097). Principle: A-097. Monitor: Funnel config review, opt-in placement check.

**D-5.4 Pricing communication shames lower-income users** — L: Low · S: High
Mitigation: Dignified pricing; subsidies surfaced (A-084). Principle: A-084. Monitor: Copy review, Tier-3 user interviews.

## 6. Cognitive Overload

**D-6.1 Too many options at once** — L: High · S: High
Mitigation: ≤3 comparison, filter to relevant, 3–4 item working-memory cap (A-023, A-024). Principle: A-024. Monitor: Abandonment at choice points, session recordings.

**D-6.2 Dense high-stakes pages** — L: Med · S: Med
Mitigation: Lowest density at Solutions/Booking/Results (A-086). Principle: A-086. Monitor: Heatmaps, scroll/exit, completion.

**D-6.3 Long flows fatigue older users** — L: Med · S: Med
Mitigation: Segment + save/resume (A-074); progress indicator (A-113). Principle: A-074. Monitor: Step-level drop-off by age segment.

## 7. SEO Risks

**D-7.1 Thin or duplicative content fails E-E-A-T** — L: Med · S: High
Mitigation: "Most useful thing" test; expert authorship + review (A-100, A-012). Principle: A-100. Monitor: Rankings, Search Console impressions/CTR, manual content QA.

**D-7.2 Missing/incorrect schema** — L: Med · S: Med
Mitigation: Schema priority list per page type (Medical/FAQ/LocalBusiness/Article). Principle: A-103. Monitor: Rich-results test, GSC enhancements report.

**D-7.3 Generic anchor text / weak internal scent** — L: Med · S: Med
Mitigation: Descriptive scent-bearing anchors, ≥3 relevant links (A-102). Principle: A-102. Monitor: Internal-link crawl, blog→booking attribution.

**D-7.4 "Established archive" dates read as deceptive** — L: Med · S: High
Mitigation: Only real content with plausible, honest dating; never backdate fabricated posts. Principle: A-011/A-022. Monitor: Editorial governance review.

## 8. Technical Risks

**D-8.1 Booking system outage loses appointments** — L: Med · S: Critical
Mitigation: Graceful fallback (capture + callback), error scripts, monitoring/alerts (A-072, A-107). Principle: A-107. Monitor: Uptime alerts, failed-submission logs.

**D-8.2 CRM/calendar/WhatsApp integration data loss** — L: Med · S: High
Mitigation: Documented field mapping + failure modes; reconciliation job (A-107). Principle: A-107. Monitor: Data-integrity reconciliation, mismatch alerts.

**D-8.3 Unscripted system errors reach users** — L: Med · S: High
Mitigation: Every error pre-written with recovery path (A-072). Principle: A-072. Monitor: Error-event logging, message-coverage audit.

## 9. Performance Risks

**D-9.1 Slow LCP / layout shift on mobile** — L: Med · S: High
Mitigation: CWV budgets (LCP<2.5s, CLS<0.1, INP<200ms); preload hero, lazy-load, WebP (A-104). Principle: A-104. Monitor: RUM/CrUX, Lighthouse CI, budget alerts.

**D-9.2 Heavy media on low-bandwidth Tier-2/3 connections** — L: High · S: Med
Mitigation: Responsive images, compression, perf budget per template. Principle: A-104. Monitor: Field data by region/connection, bounce by speed bucket.

## 10. Legal Risks

**D-10.1 Health data collected without compliant consent** — L: Med · S: Critical
Mitigation: Explicit plain-language consent, anonymization, data-protection compliance (A-097, A-125). Principle: A-097. Monitor: Privacy review, consent-log audit, DPO sign-off.

**D-10.2 Medical claims create liability** — L: Med · S: Critical
Mitigation: No guarantees; review stamps; disclaimer; clinical sign-off pre-publish (A-094, A-012). Principle: A-094. Monitor: Legal/clinical pre-publish gate.

**D-10.3 Inaccessible site breaches emerging accessibility law** — L: Low · S: High
Mitigation: WCAG AA floor as launch gate (A-075). Principle: A-075. Monitor: Accessibility audit, legal watch.

## 11. Operational Risks

**D-11.1 Web demand outstrips clinic capacity → long waits** — L: Med · S: High
Mitigation: Realistic availability surfacing; transition design web→clinic (A-106). Principle: A-106. Monitor: Lead-to-appointment lead time, no-show/cancel rate.

**D-11.2 Promised callback "within 24 hours" missed** — L: Med · S: High
Mitigation: Only promise what ops can meet; SLA + alerting (A-105). Principle: A-105. Monitor: Callback-SLA adherence dashboard.

**D-11.3 Inconsistent voice across phone/WhatsApp/clinic** — L: Med · S: Med
Mitigation: One-voice guidance + staff training (A-098). Principle: A-098. Monitor: QA call/chat reviews, cross-channel CSAT.

## 12. Scalability Risks

**D-12.1 Per-clinic content unmanageable at 150+ locations** — L: High · S: Med
Mitigation: Templated clinic components + structured data (A-119). Principle: A-119. Monitor: Content-ops throughput, stale-page report.

**D-12.2 Personalization rules sprawl into unmaintainable logic** — L: Med · S: Med
Mitigation: Cap to ~5 high-impact, documented rules; privacy-first (A-111). Principle: A-111. Monitor: Rule inventory review, QA of variants.

**D-12.3 Multi-language content drifts out of sync** — L: High · S: Med
Mitigation: Source-of-truth content model; translation workflow; review parity. Principle: A-060/A-126. Monitor: Translation-coverage and freshness report.

## 13. Maintenance Risks

**D-13.1 Stats/claims go stale and become false** — L: High · S: High
Mitigation: Quarterly refresh; review-due reminders (A-126). Principle: A-126. Monitor: Last-updated audit, automated staleness flags.

**D-13.2 Component drift breaks consistency** — L: Med · S: Med
Mitigation: Single component library; deviations need sign-off (A-119). Principle: A-119. Monitor: Design-system lint, visual-regression tests.

**D-13.3 Medical reviews lapse past due date** — L: Med · S: High
Mitigation: Re-review calendar with owners (A-012, A-126). Principle: A-012. Monitor: Review-overdue dashboard.

---

## Top 10 Risks by Exposure (L × S) — fix-first list

1. **D-4.1** Online result false reassurance/alarm — *High × Critical*
2. **D-1.2** Screening mistaken for diagnosis — *High × Critical*
3. **D-2.4 / D-2.1** Web–clinic promise gap / exposed stock photos — *Med × Critical*
4. **D-10.1** Non-compliant health-data consent — *Med × Critical*
5. **D-8.1** Booking outage loses appointments — *Med × Critical*
6. **D-4.2 / D-10.2** Over-promised/liable medical claims — *Med × Critical*
7. **D-6.1 / D-1.4** Option overload / catalog feel on Solutions — *High × High*
8. **D-2.2 / D-2.3** Unsourced claims / unanswered reviews — *High × High*
9. **D-3.1** Tone test unusable for hearing-impaired — *High × High*
10. **D-13.1** Stale stats become false — *High × High*

These ten are gating items for the readiness assessment (see `READINESS-ASSESSMENT.md`).
