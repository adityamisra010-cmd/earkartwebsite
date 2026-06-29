# earKART — New Page Specifications (additions to Spec v1.0 §6)

**Status:** Draft for approval · **Adds** the pages required by the reconciled IA that Spec v1.0 never covered.
Each follows the spec's mandatory framework: *Why does it exist? Which psychological principle? Which business metric? How is success measured?*
All unverified data uses `[TBD: …]` per owner decision. Verified facts are drawn from the official pricelist/brand guidelines.

> **Brand reminder:** navy `#171050` + cyan `#00c7f1`, Montserrat/Poppins, accessible neutrals per `02-brand-identity-corrected.md`. No teal/amber.

---

## PAGE 08: TECHNOLOGY — OMNI (Remote Audiology)

### 8.1 Page Purpose
Establish earKART as a **technology company**, not just a retailer — by showcasing OMNI, the cloud remote-audiology platform that delivers a full diagnostic workup (Audiometry air+bone, Tympanometry, OAE, Video Otoscopy) with real-time remote expert support, from any location.

**Functional:** Explain what OMNI is, who it serves (patients in underserved areas; clinics/retail/outreach partners), and how it works.
**Psychological:** Convert "hearing care is far away / inconvenient / low-tech" into "earKART brings clinic-grade diagnostics to me."

### 8.2 Primary Personas
- Rajan (P1) — Tier-2 city, mobility/stigma barriers → "test from near home."
- Priya (P2) — evaluating quality for a parent → "is remote as good as in-person?"
- **New: B2B partner** (clinic owner / pharmacy / hospital) considering OMNI as a shop-in-shop/outreach tool.

### 8.3 Journey Stage
Aware → Curious (patients); Consideration (B2B partners). Dual audience — split the page.

### 8.4 Emotional Objective
Patient leaves: *"Real, accurate hearing diagnostics don't require a big-city hospital trip."*
Partner leaves: *"This is a credible, standardized system I could run."*

### 8.5 Content Architecture
- **Hero:** *"Clinic-grade hearing diagnostics, wherever you are."* Sub: what OMNI tests, in plain language. CTA: `[Find OMNI Near Me]` / secondary `[For Clinics & Partners]`.
- **What OMNI measures** — 4 cards, plain-language first, clinical term second:
  - Audiometry (air & bone) — "how well you hear different sounds"
  - Tympanometry — "how your eardrum is working"
  - OAE — "how the inner ear responds"
  - Video Otoscopy — "a real look inside your ear"
- **How it works** — 3-step illustrated flow: visit an OMNI point → trained operator runs the test → earKART audiologist interprets remotely in real time → results & plan.
- **Why it's trustworthy** — standardization + remote expert; link to Audiologist Profiles. Anchor: *"Backed by earKART's in-house R&D and certified audiologists."*
- **For partners (B2B block):** outreach/retail/clinic use, standardized delivery, support. CTA: `[Partner with earKART]` → lead form.
- **Caveat (honesty, per §11.2):** scope of remote screening vs. full clinical assessment, clearly stated.

### 8.6 Psychological Basis
*Authority + tangibility.* Naming the four real diagnostic modalities (not "advanced testing") signals genuine clinical capability — specificity drives credibility (Mayo/Stripe mechanisms, Spec §1.2/§1.5). Reducing distance/effort directly attacks the #1 access barrier (anticipatory inconvenience), parallel to the clinic-finder anxiety-reduction evidence (Spec §6.7.3).

### 8.7 Analytics Events
`omni_find_near_me_click` · `omni_partner_cta_click` · `omni_howitworks_viewed` · `omni_modality_card_expand` (property: modality)

### 8.8 Success Metrics
| Metric | Target |
|--------|--------|
| OMNI location searches | `[TBD: baseline]` |
| Partner-inquiry submissions | `[TBD]` |
| Scroll depth >50% | 55% |

---

## PAGE 09: TECHNOLOGY — MANUFACTURING ("Made in India")

### 9.1 Page Purpose
Prove earKART **makes** hearing aids (not just sells them) — converting price/quality skepticism into pride and trust via Make-in-India manufacturing, in-house R&D, and regulatory credentials.

### 9.2 Primary Personas
Priya (P2), Meera (P5 — upgrader who fears being upsold), B2B/institutional buyers, and indirectly investors.

### 9.3 Journey Stage
Consideration → Trusting. Operates as a halo over the whole brand.

### 9.4 Emotional Objective
*"This is a real, credentialed manufacturer — affordable because they build it themselves, not because it's cheap."*

### 9.5 Content Architecture
- **Hero:** *"Designed and made in India. Built to standards the world trusts."* CTA: `[Explore Our Technology]`.
- **Capability strip (verified facts):** ISO 13485:2016 · BIS License · MD5 & MD42 manufacturing/distribution licenses · Patent granted · In-house R&D.
- **The "why it matters" translation:** each credential → plain-language patient benefit (e.g., "ISO 13485 = the global quality standard for medical devices").
- **Make-in-India narrative:** affordability through vertical integration, not compromise. Tie to govt trust signal: *"Chosen to supply 10,000 hearing-aid units on government order (2024)."*
- **R&D / Innovation teaser** → links to OMNI.
- **Photography:** real facility, real engineers `[TBD: source approved manufacturing photos — no stock]`.

### 9.6 Psychological Basis
*Credential trust (Spec §11 Level 3) + cause-of-affordability reframing.* Stating a credible reason that earKART is affordable (own manufacturing) defuses the "cheap = low quality" heuristic; unexplained low price triggers suspicion, explained low price builds trust (price-psychology; Spec §6.5 context-pricing principle).

### 9.7 Analytics / Success
Events: `mfg_credential_expand` (property: credential) · `mfg_tech_link_click`. Metric: time-on-page `[TBD]`; assisted conversions to Solutions/Book.

---

## PAGE 10: TECHNOLOGY — CERTIFICATIONS & AWARDS (Trust Wall + Milestone Timeline)

### 10.1 Page Purpose
Concentrate earKART's hard credentials and history in one verifiable "trust wall," and present the 2021–2025 growth as momentum — without unnamed "award-winning" claims (Spec §11.2).

### 10.2 Journey Stage
Considering → Trusting (reassurance hub linked from many pages).

### 10.3 Content Architecture
- **Certification wall:** ISO 13485:2016, BIS, MD5/MD42, patent(s) — each as a card with what it is, who issues it, and what it means for the patient. `[TBD: certificate images/numbers]`.
- **Milestone timeline (verified):**
  - 2021 — Launch of Hearing Aids
  - 2022 — earKART CRM & application
  - 2023 — BIS License received
  - 2024 — First government order (10,000 units) · ISO 13485:2016 certified
  - 2025 — OMNI launch · ENT shop-in-shop model · **Listed on BSE SME platform**
- **Awards:** only named, attributable awards. `[TBD: list named awards or omit the section]`.

### 10.4 Psychological Basis
*Verifiability defeats skepticism.* Specific, issuer-attributed credentials transfer credibility (halo effect); a dated timeline exploits momentum/peak-end perception of a fast-growing company. The §11.2 anti-pattern (vague "award-winning") is explicitly avoided.

### 10.5 Analytics / Success
Events: `cert_card_expand` (property: cert) · `timeline_milestone_view`. Metric: this page viewed within trust-seeking sessions `[TBD]`.

---

## PAGE 11: ABOUT — INVESTOR RELATIONS

### 11.1 Page Purpose
Serve earKART's status as a **BSE SME-listed company**: provide investors, analysts, and press a credible, compliant hub — which doubles as a powerful patient trust signal ("a listed, transparent company").

### 11.2 Primary Audiences
Retail/institutional investors, analysts, journalists; secondarily patients/partners seeking reassurance.

### 11.3 Emotional Objective
*"This is a transparent, accountable public company."*

### 11.4 Content Architecture
- **Hero:** *"earKART on the BSE SME platform."* Ticker/listing details `[TBD: scrip code, listing date]`.
- **Sections:** Company overview · Financial reports & filings `[TBD: documents]` · Announcements/disclosures · Shareholding pattern `[TBD]` · Investor contact / Compliance Officer `[TBD: name, email]` · Policies (per regulatory requirement) `[TBD]`.
- **Tone:** factual, restrained — distinct from the warm patient-facing voice. No marketing superlatives.

### 11.5 Psychological & Compliance Basis
*Policy/transparency trust (Spec §11 Level 4–5) + regulatory obligation.* A listed company carries disclosure duties; meeting them visibly compounds credibility. **Compliance review required** before publishing any financial content.

### 11.6 Success Metrics
Document downloads `[TBD]`; investor-contact submissions `[TBD]`. (Not a conversion page — measured on completeness & compliance, not bookings.)

---

## PAGE 12: RESOURCES — AUDIOLOGIST / DOCTOR PROFILES

### 12.1 Page Purpose
Deliver earKART's single most powerful trust signal — **named, photographed, credentialed audiologists** (Spec §11 Level 1) — reducing the anonymity anxiety of healthcare and enabling pre-appointment familiarity.

### 12.2 Primary Personas
Meera (P5 — wants a professional who respects her intelligence), Priya (P2), Sunita (P4 — wants a specialist she can trust for her child).

### 12.3 Journey Stage
Considering → Deciding (often the last reassurance before booking).

### 12.4 Content Architecture
- **Directory:** filterable by location, specialization (pediatric, tinnitus, fitting), language spoken.
- **Profile card → profile page:** photo (real), name, qualifications + registration `[TBD: roster]`, years of experience `[TBD]`, specializations, languages, a short human bio, and the clinics/OMNI points they serve. Optional: clinical note authorship (links to articles they've reviewed — ties to medical-review stamps).
- **CTA per profile:** `[Book with this audiologist]` where scheduling allows, else `[Find their clinic]`.

### 12.5 Psychological Basis
*Human-face effect + relationship trust (Airbnb mechanism, Spec §1.3; §11 Level 1).* Seeing the named person you'll meet is the strongest documented reducer of first-visit anxiety and a top driver of healthcare booking. **Honesty gate:** real photos only — stock audiologist photos backfire (Spec §11.2).

### 12.6 Analytics / Success
Events: `audiologist_profile_view` (property: id) · `audiologist_book_click` · `audiologist_filter_used`. Metrics: profile→booking rate target 15% `[TBD: validate]`; profiles viewed before booking.

---

## Cross-cutting requirements for all five pages
- **Brand:** navy/cyan + Montserrat/Poppins; accessible neutrals (no white-on-cyan text).
- **Accessibility:** WCAG AAA body text, 44×44px targets, keyboard-navigable, 200% zoom safe (Spec §8).
- **Trust honesty:** every credential attributable; every stat sourced or `[TBD]`; no fabricated claims (Spec §11.2).
- **SEO/schema:** `Organization`, `MedicalClinic`/`LocalBusiness` (OMNI points), `Person` (audiologists), `Article` review links; IR page typically `noindex` for filings as appropriate `[TBD: confirm]`.
- **Each page:** one primary CTA, one emotional objective, layered information, mobile-first (Spec §12 quality gate applies before launch).
