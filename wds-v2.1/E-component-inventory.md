# Phase E — Component Inventory

**A list, not a design.** These are the reusable building blocks the site will be assembled from. No component ships unless it traces to a Phase A rule and a Phase C stage (Rule A-119). Naming is `category/Component`. **134 components.**

This inventory is the contract for the design system: if a screen needs something not here, that's a documented gap requiring sign-off, not an ad-hoc one-off.

---

## Navigation (10)
1. `nav/GlobalHeader` — sticky, height-reducing on scroll
2. `nav/MegaMenu` — card-preview dropdown for sections with children
3. `nav/MobileMenu` — full-screen slide-in, accordion sections, "Menu" labeled
4. `nav/MobileStickyCTABar` — persistent bottom "Book" bar
5. `nav/MobileTopUtilityBar` — pinned phone number / urgent contact
6. `nav/Breadcrumbs` — scent-bearing, schema-marked
7. `nav/LanguageToggle` — EN/हिंदी + additional languages
8. `nav/SkipToContentLink` — first-tab accessibility link
9. `nav/SecondaryInPageNav` — anchor/section nav for long pages
10. `nav/FooterNavColumns` — grouped link columns

## Heroes (7)
11. `hero/EmotionalSplitHero` — photo + headline + dual CTA (homepage)
12. `hero/ServiceProcessHero` — "what to expect" framing
13. `hero/EducationalHero` — article/Hub topic hero
14. `hero/ClinicLocationHero` — clinic-specific hero with map peek
15. `hero/ToolIntroHero` — hearing-check intro screen
16. `hero/CampaignLandingHero` — paid-traffic variant, fast trust
17. `hero/StoryHero` — patient-story opening portrait + pull quote

## Trust (12)
18. `trust/StatCounterRow` — animated verified numbers
19. `trust/BrandPartnerLogoStrip` — grayscale device-brand logos
20. `trust/NoPressurePromise` — amber callout
21. `trust/MedicalReviewStamp` — "Reviewed by … / next review"
22. `trust/SourceCitation` — inline cited-statistic component
23. `trust/CredentialBadgeRow` — ISHA/NABH/ISO memberships
24. `trust/RatingAggregate` — Google/Practo rating with source
25. `trust/PressMentionStrip` — named press logos
26. `trust/TransparencyPricingNote` — "no hidden fees" assurance
27. `trust/GuaranteeReversibilityNote` — cancel/return reassurance
28. `trust/AudiologistMiniProfile` — face + credential inline trust
29. `trust/TrustMicrocopyUnderCTA` — objection-answering helper line

## Storytelling (7)
30. `story/EmpathyBridgeBlock` — "It starts with the small things"
31. `story/PatientStoryCard` — portrait + pull quote + link
32. `story/FullStoryArticle` — before/moment/journey/after template
33. `story/AudiologistNoteBlock` — clinical context within a story
34. `story/MythVsRealityStory` — narrative myth-correction unit
35. `story/VideoTestimonial` — captioned video player
36. `story/QuoteHighlight` — large pull-quote (bilingual capable)

## Cards (8)
37. `card/PathwayCard` — persona-routing card ("I think my hearing has changed")
38. `card/ServiceCard` — service summary + CTA
39. `card/SolutionTypeCard` — lifestyle-organized device card
40. `card/ArticlePreviewCard` — thumbnail/category/read-time
41. `card/ClinicCard` — clinic summary in finder list
42. `card/FAQCard` — question/answer disclosure
43. `card/RelatedReadingCard` — next-step content link
44. `card/StatHighlightCard` — single key number with context

## Forms (12)
45. `form/TextField` — visible label, error slot
46. `form/SelectField` — accessible dropdown
47. `form/RadioGroupLarge` — 44px+ radio options (tool answers)
48. `form/CheckboxGroup` — never pre-ticked
49. `form/DatePicker` — accessible, keyboard-operable
50. `form/TimeSlotPicker` — appointment slot selection
51. `form/PhoneField` — India-format validation
52. `form/ConsentBlock` — explicit plain-language consent
53. `form/MultiStepFormShell` — segmented + save/resume
54. `form/ProgressIndicator` — "Step N of M"
55. `form/InlineValidationMessage` — sympathetic, specific
56. `form/FormReviewSummary` — pre-submit confirmation summary

## Booking (9)
57. `booking/BookingFlowContainer` — distraction-free shell
58. `booking/ClinicSelectStep` — choose location
59. `booking/ServiceSelectStep` — choose service (pre-fillable)
60. `booking/SlotSelectStep` — date/time with default
61. `booking/PatientDetailsStep` — pre-filled where possible
62. `booking/BookForFamilyToggle` — book on behalf of another
63. `booking/BookingConfirmation` — summary + decision justification
64. `booking/CalendarInviteBlock` — add-to-calendar / reminders
65. `booking/CallbackRequestFallback` — graceful outage fallback

## Search (6)
66. `search/GlobalSearchBar` — site-wide search
67. `search/SearchResultsList` — ranked results
68. `search/ClinicLocationSearch` — geolocation + manual entry
69. `search/SearchFilters` — facet filtering
70. `search/SearchEmptyState` — helpful no-results guidance
71. `search/Autosuggest` — typeahead suggestions

## Comparisons (5)
72. `compare/SolutionComparisonTable` — max 3 columns
73. `compare/RightForYouChecklist` — behavioral fit criteria
74. `compare/RecommendationBadge` — "recommended for your situation"
75. `compare/FeatureExplainerTooltip` — plain-language term help
76. `compare/CompareTrayMobile` — constrained mobile compare

## Pricing (7)
77. `pricing/PriceRangeBlock` — context-framed range
78. `pricing/DailyCostReframe` — "≈₹98/day over 5 years"
79. `pricing/FinancingOptions` — EMI/financing display
80. `pricing/SubsidySchemeInfo` — government scheme surfacing
81. `pricing/PricingTierCards` — anchored high-to-low, ≤3
82. `pricing/WhatsIncludedList` — transparent inclusions
83. `pricing/AssessmentPriceTable` — service pricing + insurance note

## Education (9)
84. `edu/LayeredExplainer` — overview→depth disclosure
85. `edu/HowItWorksDiagram` — illustrated concept (ear/audiogram)
86. `edu/SignsSymptomChecklist` — relatable scenarios, not clinical boxes
87. `edu/WhenToBeConcerned` — clear non-alarming criteria
88. `edu/AudiogramExplainer` — read-your-results visual
89. `edu/QuestionsToAskAudiologist` — patient-empowerment list
90. `edu/GlossaryTermInline` — tap-to-define term
91. `edu/StageTaggedContentBlock` — behavior-change stage + adjacent links
92. `edu/DownloadableGuide` — PDF resource (post-value capture)

## Testimonials & Reviews (5)
93. `review/ReviewList` — verified reviews
94. `review/ReviewResponse` — clinic's personal reply
95. `review/SubmitReviewFlow` — low-friction collection
96. `review/RatingSummaryWidget` — aggregate + breakdown
97. `review/PeakSatisfactionPrompt` — timed referral/review ask

## Maps & Clinic (9)
98. `map/InteractiveClinicMap` — Google Maps integration
99. `map/ClinicListMapSplitView` — list + map (desktop)
100. `clinic/ClinicDetailPage` — templated, scalable
101. `clinic/WhatToExpectGallery` — waiting room/room/audiologist photos
102. `clinic/ClinicHoursBlock` — hours, languages, transport/parking
103. `clinic/ClinicContactBlock` — phone/WhatsApp/directions
104. `clinic/HomeVisitRequestBlock` — home-service entry
105. `clinic/ClinicAudiologistRoster` — staff at this location
106. `clinic/DirectionsCTA` — open-in-maps action

## Doctor / Audiologist (5)
107. `doctor/AudiologistProfileCard` — photo, credentials, specialties
108. `doctor/AudiologistFullProfile` — bio, registration, languages
109. `doctor/ReferAPatientPortal` — GP/ENT referral entry
110. `doctor/CredentialVerificationBlock` — registration/qualification
111. `doctor/BookWithThisAudiologist` — direct booking CTA

## Footer & Global (5)
112. `footer/MainFooter` — multi-column
113. `footer/ComplianceBar` — disclaimer, copyright, registration
114. `footer/TrustFooterBar` — certifications/memberships
115. `footer/NewsletterSignup` — value-first, consented
116. `global/CookieConsentBanner` — compliant, no pre-tick

## Notifications & Messaging (6)
117. `notify/HomepageNotificationBar` — crisis/service-disruption banner
118. `notify/ToastFeedback` — transient action confirmation
119. `notify/InlineBanner` — contextual info/warning
120. `notify/WhatsAppContactButton` — channel entry
121. `notify/LiveChatLauncher` — honest bot→human handoff
122. `notify/ReminderMessageTemplate` — maintenance/appointment cadence

## Errors & States (5)
123. `state/ErrorPage404` — friendly recovery
124. `state/ErrorPage500` — reassuring outage page
125. `state/InlineErrorState` — pre-written, specific
126. `state/EmptyState` — in-character guidance
127. `state/OfflineFallbackState` — degraded-mode messaging

## Loaders (3)
128. `loader/Skeleton` — layout-stable loading (CLS guard)
129. `loader/Spinner` — reduced-motion-safe
130. `loader/ProgressBar` — long-operation progress

## Blog (2)
131. `blog/ArticleLayout` — author/review/schema-ready template
132. `blog/TopicClusterHub` — pillar + cluster navigation

## Patient Portal (1)
133. `portal/PatientDashboard` — appointments, devices, maintenance log, habit/streak, reorder, support, audiogram-on-file

## AI & Accessibility (1)
134. `ai/PersonalizationSlot` + `a11y/AccessibilityToolbar` — consent-bound dynamic content slot and user accessibility controls (text size, contrast, reduced motion)

---

**Coverage check vs. mandated categories:** Navigation ✓ Heroes ✓ Trust ✓ Storytelling ✓ Cards ✓ Forms ✓ Booking ✓ Search ✓ Comparisons ✓ Pricing ✓ Education ✓ Testimonials ✓ Maps ✓ Clinic ✓ Doctor ✓ Footer ✓ Notifications ✓ Errors ✓ Loaders ✓ Blog ✓ Commerce (pricing/reorder/financing) ✓ Patient Portal ✓ AI ✓ Accessibility ✓.

**Note on Commerce:** earKART is patient-first, not a storefront (A-016). "Commerce" is intentionally thin — pricing, financing, reorder, and what's-included only. There is deliberately no cart/catalog/checkout-style component; that would violate the anti-catalog principle.
