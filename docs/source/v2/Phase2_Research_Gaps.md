# earKART WDS v2 — PHASE 2: RESEARCH GAPS & EVIDENCE CLASSIFICATION

*Every claim in v1 is audited below. Each is classified as: Evidence-Backed (EB), Industry Best Practice (BP), Needs Validation (NV), Hypothesis (H), Opinion (O), or Unknown (U). Where evidence is weak, peer-reviewed sources or credible research bodies are recommended.*

---

## 2.1 CLASSIFICATION METHODOLOGY

**Evidence-Backed (EB):** Claim supported by peer-reviewed research or large-scale replicated studies.
**Industry Best Practice (BP):** Widely adopted in the field without strong experimental backing; accepted convention.
**Needs Validation (NV):** Plausible claim that has some supporting evidence but has not been validated in earKART's specific context (Indian hearing healthcare, digital medium).
**Hypothesis (H):** Reasonable design hypothesis that should be A/B tested before becoming a design standard.
**Opinion (O):** Expert judgment without empirical backing; potentially valid but must be flagged.
**Unknown (U):** Claim with no identified source; requires research before implementation.

---

## 2.2 SECTION-BY-SECTION AUDIT

---

### FROM SECTION 1 — COMPETITIVE REVERSE ENGINEERING

**Claim 1:**
*"By the time pricing appears, the user's identity has already been partially engaged with the product category."*
**Classification:** H — Hypothesis
**Issue:** Identity-based persuasion in digital healthcare contexts is theoretically grounded in Cialdini's pre-suasion framework, but the specific mechanism (identity engagement before pricing) has not been demonstrated in Indian digital healthcare. 
**Recommended Source:** Cialdini, R. (2016). *Pre-Suasion: A Revolutionary Way to Influence and Persuade*. Simon & Schuster. Supplement with: Escalas, J.E. & Bettman, J.R. (2003). "You Are What They Eat: The Influence of Reference Groups on Consumers' Connections to Brands." *Journal of Consumer Psychology*, 13(3).
**Action:** Tag this as a design hypothesis; design an A/B test comparing identity-first vs. benefit-first hero copy.

---

**Claim 2:**
*"Teal reads as 'trustworthy expertise' — less cold than corporate blue, more professional than consumer green."*
**Classification:** O — Opinion
**Issue:** Color psychology research is highly context-dependent and culturally variable. The specific claim that teal occupies a "trustworthy expertise" position is an extrapolation, not a directly measured finding.
**Recommended Source:** Labrecque, L.I. & Milne, G.R. (2012). "Exciting Red and Competent Blue: The Importance of Color in Marketing." *Journal of the Academy of Marketing Science*, 40(5), 711–727. Also: Heller, E. (2009). *Psychologie de la Couleur*. Pyramid.
**Action:** Validate teal preference in earKART's Indian target demographic via a simple preference study (5-point scale, teal vs. blue vs. green for "healthcare brand I would trust").

---

**Claim 3:**
*"In Indian cultural contexts, teal/peacock tones carry connotations of knowledge and dignity."*
**Classification:** U — Unknown
**Issue:** This is presented as a cultural fact without citation. Color symbolism in India is complex and regionally variable. Peacock (the national bird) is associated with beauty and pride, but "knowledge and dignity" is an unsupported extension.
**Recommended Source:** Gage, J. (1999). *Color and Culture*. Thames & Hudson. Conduct primary research: focus groups with target personas in 3 regions (North, South, West India).
**Action:** Remove the specific cultural claim from the design rationale until primary research validates it. Retain teal on purely cross-cultural trust grounds (blue-green spectrum) with the caveat that regional validation is pending.

---

**Claim 4:**
*"Warm cream lowers cortisol by approximately 3-5% compared to clinical white (Schauss, 1985)."*
**Classification:** NV — Needs Validation
**Issue:** Schauss's original research on color and physiological response (specifically Baker-Miller Pink and alpha male aggression) has been partially replicated but is also controversial. The specific 3–5% cortisol claim for cream vs. white has not been directly demonstrated.
**Recommended Source:** Schauss, A.G. (1985). "The Physiological Effect of Color on the Suppression of Human Aggression: Research on Baker-Miller Pink." *International Journal of Biosocial Research*, 7(2). For a critical review: O'Connor, Z. (2011). "Colour Psychology and Colour Therapy: Caveat Emptor." *Color Research & Application*, 36(3).
**Action:** Retain warm cream as a design choice on the grounds of environmental psychology precedent and user preference research, but remove the specific cortisol percentage claim. Replace with: "Research suggests warm backgrounds reduce perceived stress compared to clinical white in healthcare environments (environmental psychology precedent)."

---

**Claim 5:**
*"Loss-framed messages increase health-seeking behavior by 22–30% compared to gain-framed equivalents in preventive health contexts (Rothman & Salovey, 1997)."*
**Classification:** EB — Evidence-Backed (with qualification)
**Issue:** Rothman & Salovey's (1997) framework is well-established. However, the 22–30% figure is not from this paper specifically — the paper provides the theoretical framework; specific magnitude effects vary by study and health context.
**Recommended Source:** Rothman, A.J. & Salovey, P. (1997). "Shaping Perceptions to Motivate Healthy Behavior: The Role of Message Framing." *Psychological Bulletin*, 121(1), 3–19. For magnitude estimates: O'Keefe, D.J. & Jensen, J.D. (2007). "The Relative Persuasiveness of Gain-Framed and Loss-Framed Messages for Encouraging Disease Prevention Behaviors." *Journal of Health Communication*, 12(7).
**Action:** Correct the citation; retain the direction of the finding (loss-framing for detection/prevention behaviors) with the caveat that specific effect sizes should be validated through A/B testing.

---

**Claim 6:**
*"Airbnb's conversion rate doubled" after adding professional photography.*
**Classification:** BP — Industry Best Practice
**Issue:** This is a frequently cited case study that has been reported in multiple business publications but has not been peer-reviewed. The mechanism (human face effect) is well-supported; the specific "doubled" figure is unverified.
**Recommended Source:** For the underlying mechanism: Todorov, A. (2008). "Evaluating Faces on Trustworthiness." *Annals of the New York Academy of Sciences*, 1124(1). For the Airbnb claim: acknowledge as a frequently cited industry case study without guaranteeing the specific figure.
**Action:** Retain the human face / real photography principle as strongly supported; qualify the Airbnb statistic as "reported to have significantly improved conversion" rather than a verified "doubled."

---

### FROM SECTION 2 — BRAND IDENTITY SYSTEM

**Claim 7:**
*"DM Sans improves reading speed and comprehension by 12–15% for older readers compared to compressed sans-serif faces."*
**Classification:** NV — Needs Validation
**Issue:** Typography legibility research in older adults supports the general principle (wider letterforms, taller x-heights improve legibility) but the 12–15% figure cannot be attributed to DM Sans specifically — this typeface has not been independently studied.
**Recommended Source:** Bigelow, C. (2019). "Typeface Features and Legibility Research." *Vision Research*, 165. Bernard, M., et al. (2003). "A Comparison of Popular Online Fonts: Which Is Best and When?" *Usability News*, 5(2).
**Action:** Retain DM Sans recommendation on the basis of its humanist proportions and extended-reading design intent; remove the specific 12–15% figure and replace with "humanist sans-serif typefaces with wide proportions are consistently associated with improved legibility for older readers in research settings."

---

**Claim 8:**
*"A 2% blue tint in neutral backgrounds increases reading comprehension scores by approximately 8% in studies of extended-reading environments (Pappas, 2011)."*
**Classification:** U — Unknown
**Issue:** "Pappas, 2011" cannot be verified as a published study with these specific findings. This appears to be either a misattribution or a fabricated citation, which would be a significant integrity issue in a document intended as a professional specification.
**Recommended Source:** Search: Wilkins, A., et al. research on visual stress and background color. Rello, L. & Baeza-Yates, R. (2017). "How to Present More Readable Text for People with Dyslexia." *Universal Access in the Information Society*, 16(1).
**Action:** REMOVE the Pappas citation immediately. Retain the light blue-gray secondary background on the basis of color harmony and visual differentiation; do not attribute a specific comprehension improvement percentage.

---

**Claim 9:**
*"All text-background color combinations must achieve WCAG AA minimum: 4.5:1 ratio"*
**Classification:** EB — Evidence-Backed
**Issue:** This is a direct reference to the Web Content Accessibility Guidelines, which are internationally recognized standards with robust evidence base.
**Recommended Source:** W3C WCAG 2.1. https://www.w3.org/WAI/WCAG21/quickref/
**Action:** No change required. Verify all implementations against updated WCAG 2.2 (published 2023), which introduced several new success criteria relevant to earKART's context.

---

**Claim 10:**
*"Users who have this activated [prefers-reduced-motion] — significant overlap with earKART's older audience"*
**Classification:** H — Hypothesis
**Issue:** There is no published data on the correlation between age and prefers-reduced-motion usage among Indian mobile users specifically. While vestibular disorders that trigger this preference are more common in older adults, the assumption of "significant overlap" is a reasonable hypothesis without verified data.
**Recommended Source:** Vestibular Disorders Association statistics on prevalence by age. For motion sensitivity: Grønbaek, H., et al. (2021). "Motion Sickness and Cybersickness." *Journal of Neurology*.
**Action:** Retain the design decision (honor prefers-reduced-motion for all users regardless) as the correct accessibility choice; qualify the demographic claim as a reasonable hypothesis.

---

### FROM SECTION 3 — USER PERSONAS

**Claim 11:**
*"Activation Trigger [for Rajan]: Reading a story about someone his age reclaiming participation in family life."*
**Classification:** H — Hypothesis
**Issue:** The identification of narrative as a primary activation trigger for resistant older males is theoretically grounded (narrative transportation theory, Green & Brock, 2000) but has not been empirically tested for this specific demographic in the Indian hearing health context.
**Recommended Source:** Green, M.C. & Brock, T.C. (2000). "The Role of Transportation in the Persuasiveness of Public Narratives." *Journal of Personality and Social Psychology*, 79(5). Supplement with India-specific healthcare communication research from AIIMS or IIT public health departments.
**Action:** Treat as a primary design hypothesis. Test specifically with this persona via user interviews and A/B testing of narrative vs. statistics vs. expert-authority landing page treatments.

---

### FROM SECTION 5 — INFORMATION ARCHITECTURE

**Claim 12:**
*"Navigation mega-menus with visual hierarchy and contextual images increase task success rates by up to 33% compared to text-only dropdown menus (Nielsen Norman Group, Pernice, 2018)."*
**Classification:** BP — Industry Best Practice
**Issue:** The NNGroup article by Pernice covers mega menu design guidance and is widely cited; however, the 33% figure is not from a controlled study — it is a composite estimate from NNGroup's UX research portfolio.
**Recommended Source:** Pernice, K. (2018). "Mega Menus Work Well for Large Sites." Nielsen Norman Group. Kalbach, J. (2007). *Designing Web Navigation*. O'Reilly Media.
**Action:** Retain the mega-menu recommendation as strongly supported best practice; qualify the 33% figure as "NNGroup's research suggests significant improvements in task success" rather than a precise controlled study result.

---

**Claim 13:**
*"Mobile users who must scroll to find the booking action complete 41% fewer conversions than desktop users (Baymard Institute, 2023 mobile UX study)."*
**Classification:** NV — Needs Validation
**Issue:** Baymard Institute does publish extensive mobile UX research; however, the specific 41% figure and the attribution to a 2023 study cannot be confirmed without direct access to the cited report. Baymard's research is primarily e-commerce focused, which may not translate directly to healthcare appointment booking.
**Recommended Source:** Baymard Institute Mobile UX Research (subscription required). For general mobile conversion: Google/SOASTA (2017) "The State of Online Retail Performance."
**Action:** Retain the persistent mobile CTA as a best practice recommendation; remove the specific 41% figure; replace with "Baymard Institute's mobile UX research consistently shows that primary actions buried below the fold significantly reduce mobile conversion rates."

---

### FROM SECTION 6 — PAGE SPECIFICATIONS

**Claim 14:**
*"Reciprocity (Cialdini) — when an institution genuinely helps you without asking for anything, you feel psychologically compelled to return the favor."*
**Classification:** EB — Evidence-Backed
**Issue:** Cialdini's reciprocity principle is among the most replicated findings in social psychology.
**Recommended Source:** Cialdini, R.B. (2001). *Influence: The Psychology of Persuasion*. HarperCollins. Gouldner, A.W. (1960). "The Norm of Reciprocity." *American Sociological Review*, 25(2), 161–178.
**Action:** No change required. Flag that reciprocity may operate differently in collectivist vs. individualist cultures — in India's collectivist context, reciprocity is often family/group-mediated rather than individual.

---

**Claim 15:**
*"Email capture is offered AFTER results are shown, not before. Gating results behind email is a high-conversion-damage practice confirmed by multiple healthcare CRO studies."*
**Classification:** BP — Industry Best Practice (with partial evidence)
**Issue:** Post-results email capture is widely recommended by healthcare CRO practitioners, and there is supporting evidence from general digital marketing. However, "multiple healthcare CRO studies" is an overstated claim — specifically in Indian healthcare digital, there is limited published research.
**Recommended Source:** HubSpot Research (2022). "The State of Marketing." For healthcare specifically: Patel, N. (NeilPatel.com) — industry practitioner data. Unbounce Conversion Benchmark Report 2023.
**Action:** Retain the design recommendation as strongly supported best practice; soften the empirical claim to "consistent with CRO best practices and HubSpot's broader research on ungated content conversion."

---

**Claim 16:**
*"Users who see ₹1,80,000 before ₹60,000 perceive ₹60,000 as reasonable. Users who see ₹60,000 first perceive it as expensive."*
**Classification:** EB — Evidence-Backed
**Issue:** Price anchoring is one of the most replicated findings in behavioral economics.
**Recommended Source:** Ariely, D., Loewenstein, G., & Prelec, D. (2003). "Coherent Arbitrariness: Stable Demand Curves Without Stable Preferences." *Quarterly Journal of Economics*, 118(1). Tversky, A. & Kahneman, D. (1974). "Judgment Under Uncertainty: Heuristics and Biases." *Science*, 185(4157).
**Action:** No change required. Add caveat: anchoring effects may be attenuated in highly price-sensitive markets; validate the specific pricing page layout with Indian users.

---

**Claim 17:**
*"Daily-rate framing has been shown to increase willingness-to-pay by 27% for healthcare products with upfront costs (Gourville, 1998)."*
**Classification:** EB — Evidence-Backed (with qualification)
**Issue:** Gourville's (1998) research on "pennies-a-day" framing is real and well-cited. The 27% figure comes from his experimental work. However, the original study was conducted in a Western context; cross-cultural validation in India is not available.
**Recommended Source:** Gourville, J.T. (1998). "Pennies-a-Day: The Effect of Temporal Reframing on Transaction Evaluation." *Journal of Consumer Research*, 24(4), 395–408.
**Action:** Retain and properly cite; add note that India-specific validation is recommended given different price sensitivity and cultural relationship with installment purchases.

---

**Claim 18:**
*"Once users own the device even temporarily, return rates drop significantly [Endowment Effect]."*
**Classification:** EB — Evidence-Backed
**Issue:** The endowment effect (Thaler, 1980; Kahneman, Knetsch & Thaler, 1990) is among the most robustly demonstrated findings in behavioral economics.
**Recommended Source:** Thaler, R. (1980). "Toward a Positive Theory of Consumer Choice." *Journal of Economic Behavior & Organization*, 1(1). Kahneman, D., Knetsch, J.L., & Thaler, R.H. (1990). "Experimental Tests of the Endowment Effect and the Coase Theorem." *Journal of Political Economy*, 98(6).
**Action:** No change required. Specifically design the hearing aid trial program language to maximize endowment effect: "Take it home tonight" rather than "Try it for 30 days."

---

**Claim 19:**
*"Barry Schwartz's Paradox of Choice demonstrates that increasing options without relevance filtering increases abandonment by up to 35%."*
**Classification:** EB (qualified) — the direction is evidence-backed; the 35% figure is not
**Issue:** Schwartz's Paradox of Choice (2004) is genuine and well-supported, but the specific 35% abandonment figure is not from Schwartz's work. Iyengar & Lepper's (2000) jam study (the foundational paper) showed a ~10× difference in purchase rate (3% vs. 30%) when options were reduced from 24 to 6 — but this is a very specific experimental context.
**Recommended Source:** Schwartz, B. (2004). *The Paradox of Choice*. Ecco. Iyengar, S.S. & Lepper, M.R. (2000). "When Choice Is Demotivating." *Journal of Personality and Social Psychology*, 79(6).
**Action:** Retain the principle as strongly supported; correct the 35% figure to cite Iyengar & Lepper's actual finding; add caveat that choice overload effects vary by product category and user expertise.

---

**Claim 20:**
*"The identifiable victim effect — one real story outperforms '40,000 patients helped' for emotional conversion (Small, Loewenstein & Slovic, 2007)."*
**Classification:** EB — Evidence-Backed
**Issue:** This is a well-established finding with strong empirical support.
**Recommended Source:** Small, D.A., Loewenstein, G., & Slovic, P. (2007). "Sympathy and Callousness: The Impact of Deliberative Thought on Donations to Identifiable and Statistical Victims." *Organizational Behavior and Human Decision Processes*, 102(2), 143–153.
**Action:** No change required. Note: the effect was demonstrated primarily in charitable donation contexts; while directionally likely to apply to healthcare, specific magnitude effects in a commercial healthcare context require validation.

---

**Claim 21:**
*"Pre-visit information tools reduced first-appointment no-show rates by 23% (Cleveland Clinic's digital redesign project)."*
**Classification:** BP — Industry Best Practice (unverified specific figure)
**Issue:** Cleveland Clinic has published on their digital transformation; however, the specific 23% no-show reduction figure attributed to "pre-visit information tools" cannot be verified from public sources.
**Recommended Source:** For appointment no-show research generally: Pham, C.M. (2016). "Reducing No-Show Appointments." *American Family Physician*. McLean, S.M. et al. (2016). "Patient Reported Barriers to Appointment Attendance." *BMC Health Services Research*, 16.
**Action:** Retain pre-visit information design as strongly supported best practice; remove the specific 23% figure; replace with "research on appointment attendance consistently identifies anxiety about the unknown clinic environment as a primary barrier, which pre-visit orientation content directly addresses."

---

**Claim 22:**
*"Psychological reactance theory (Brehm, 1966) shows that when people feel their autonomy is threatened by a sales situation, they resist even genuinely beneficial recommendations."*
**Classification:** EB — Evidence-Backed
**Issue:** Reactance theory is well-established and extensively replicated.
**Recommended Source:** Brehm, J.W. (1966). *A Theory of Psychological Reactance*. Academic Press. For digital applications: Edwards, S.M., Li, H., & Lee, J.H. (2002). "Forced Exposure and Psychological Reactance." *Journal of Advertising*, 31(3).
**Action:** No change required. Add specific application: the "no pressure" design promise is particularly important in India where hard-sell practices in healthcare adjacent industries (optical, pharmaceutical, dental) have created widespread defensive reactance.

---

### FROM SECTION 7 — BLOG & CONTENT STRATEGY

**Claim 23:**
*"Content is organized around user questions, not product categories."*
**Classification:** BP — Industry Best Practice
**Issue:** This is a widely validated content strategy principle (HubSpot's topic cluster model, Google's Helpful Content Update guidance) with substantial indirect evidence.
**Recommended Source:** HubSpot (2017). "The Topic Cluster Model." Google Search Quality Rater Guidelines (2022). Patel, N. & Taylor, B. (2017). "The Advanced Guide to Content Marketing."
**Action:** No change; add Google's Helpful Content Update (2022, 2023) as a core SEO reference — content organized around people-first questions is specifically rewarded by Google's current ranking algorithm.

---

**Claim 24:**
*"Progress bar that celebrates completion increases completion rates for multi-step tools by 22–28% (Meloni, 2021)."*
**Classification:** NV — Needs Validation
**Issue:** "Meloni, 2021" cannot be verified as a peer-reviewed source. Progress bars generally do increase multi-step form completion — this is supported by practitioner research — but the specific figure and citation are unconfirmed.
**Recommended Source:** Baymard Institute research on multi-step checkout. Spool, J. (UIE) on form completion. For gamification specifically: Hamari, J., Koivisto, J., & Sarsa, H. (2014). "Does Gamification Work?" *IEEE HICSS*.
**Action:** Remove the Meloni citation; retain the progress bar recommendation with: "Progress indicators in multi-step digital tools are consistently associated with higher completion rates in UX practitioner research (Baymard Institute; UIE)."

---

## 2.3 CITATION INTEGRITY PROTOCOL (NEW REQUIREMENT)

As a result of this audit, the following protocol is mandatory for all future additions to the WDS:

1. **Primary source citation required** for all statistical claims. Format: Author, Year, Publication, Volume/Issue if applicable.
2. **No fabricated citations.** If a source cannot be verified, the claim must be reclassified as Opinion or Hypothesis.
3. **Cultural specificity flag:** All Western research applied to Indian consumer contexts must carry the flag: *[Requires India-specific validation]*.
4. **Magnitude vs. direction distinction:** When a specific effect size (percentage improvement) cannot be verified, cite the directional finding only ("research supports that X increases Y") without a specific figure.
5. **Quarterly citation review:** All EB-classified claims reviewed annually against updated research.

---

## 2.4 RESEARCH PRIORITIES (EARHART-SPECIFIC STUDIES TO COMMISSION)

The following primary research would substantially strengthen the WDS's evidence base:

| Priority | Study | Method | Timeline | Investment |
|----------|-------|--------|----------|-----------|
| 1 | Mental model inventory: what earKART users believe about hearing aids before visiting the site | Qualitative interviews, n=30, across 3 personas | 6 weeks | Medium |
| 2 | Color/tone preference study for "trusted healthcare" among Indian adults 50+ | Online survey with visual stimuli, n=500 | 4 weeks | Low |
| 3 | Information scent audit: eye-tracking study on homepage wireframe | Eye-tracking with 20 participants | 8 weeks | High |
| 4 | Hearing check tool usability with users 65+ | Moderated usability testing, n=12 | 4 weeks | Medium |
| 5 | Price framing study: daily rate vs. lump sum vs. EMI in Indian hearing aid context | A/B experiment within earKART, n=500/variant | Ongoing | Low |
| 6 | Referral timing study: when does peak satisfaction occur post-fitting? | Longitudinal survey, n=200 | 6 months | Medium |

---

*End of Phase 2 — Research Gaps & Evidence Classification*
