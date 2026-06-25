# earKART — Website Design Constitution (WDS v2.1)

**Status:** Finalization release — research frozen, knowledge converted to executable principles.
**Audience:** Every designer, developer, product manager, marketer, copywriter, researcher, and AI system that touches earKART.
**Authority:** This is the single source of truth. Where a future artifact (wireframe, component, page, campaign) conflicts with this document, this document wins until formally amended.

---

## What this consolidates

This Constitution compresses two prior bodies of work into one executable source of truth:
1. **earKART Website Design Specification v1** — brand system, 6 personas, customer-journey map, information architecture, page specs, blog/SEO strategy, accessibility, CRO, trust architecture.
2. **WDS v2 Phase 1 — Missing Disciplines Audit** — 29 disciplines (consumer neuroscience, behavioral economics, choice architecture, service design, systems thinking, human factors, environmental psychology, cognitive ergonomics, emotional design, mental models, affordance theory, signal detection, decision confidence, habit formation, trust engineering, persuasive technology, risk communication, medical communication, conversation design, information foraging, cross-cultural design, Indian healthcare psychology, gamification, behavior-change theory, design justice, crisis communication, AI personalization, loyalty psychology, referral psychology).

earKART is a hearing-care brand ("Redefining Hearing Care") serving patients across the discovery → diagnosis → device → aftercare lifecycle, plus the clinicians and families around them. Hearing loss is an emotionally loaded, stigma-heavy, high-consideration, often high-ticket (₹30,000–₹3,00,000) health decision, frequently made by the whole family. This Constitution exists so that every pixel we eventually draw is anchored to a defensible reason: a user emotion, a clinical truth, a business goal, or a measured risk.

## Canonical references (use these exact names everywhere)

**Personas (from v1):** Rajan (68, Reluctant Elder), Priya (38, Caring Daughter), Arjun (28, Young Sufferer), Sunita (34, Worried Parent), Meera (72, Informed Upgrader), Rohan (45, Family Initiator). Plus internal stakeholders covered in Phase G: ENT/GP referrers, audiologists, clinic staff, customer support, investors.

**Journey spine (from v1):** Unaware → Aware → Curious → Considering → Trusting → Deciding → Acting → Returning → Advocating. Phase C expands this into 16 experience stages.

**Page set (from v1 IA):** Homepage; Hearing Check Tool; Hearing Health Hub + sub-pages (How Hearing Works, Types of Loss, Signs & Symptoms, Hearing Loss in Children, Tinnitus); Hearing Aids & Solutions (+ Brands, Accessories, ALDs, Hearing Protection); Services (Test & Assessment, Fitting & Trial, Pediatric, Tinnitus Management, Corporate, Home Visit); Find a Clinic; Clinic Detail; Patient Stories; Blog; FAQs; Book Appointment; Patient Portal; global Header/Footer.

**Brand tokens (from v1, frozen — not re-opened here):** Deep Teal `#1A6B72`, Warm Cream `#F7F3EE`, Amber Gold `#D4831A`, Soft Charcoal `#2C3340`; Playfair Display (display) + DM Sans (body) + DM Mono (utility); 8px grid. This document governs *behavior and intent*, not these values.

This release deliberately **stops before** page layouts, wireframes, UI, color, typography, and Figma. Its job is to make the foundation strong enough that design becomes execution, not invention.

## How to read it

| File | Phase | Purpose |
|---|---|---|
| `A-master-design-principles.md` | A | ~130 immutable, actionable design rules with conflict-resolution order |
| `B-design-language-constitution.md` | B | Brand personality, voice, and forbidden patterns |
| `C-customer-experience-blueprint.md` | C | The 16-stage patient journey, experience-first |
| `D-failure-modes-anti-patterns.md` | D | Red-team failure catalog with likelihood/severity/mitigation |
| `E-component-inventory.md` | E | ~130 reusable components, listed not designed |
| `F-ux-blueprint-preparation.md` | F | Per-feature blueprint scaffolds |
| `G-experience-narrative.md` | G | Persona narratives — the benchmark for design decisions |
| `H-consistency-audit.md` | H | Self-audit: contradictions, duplication, cuts |
| `READINESS-ASSESSMENT.md` | — | Go/No-go for UX design, scored /100 |

## How to use it day-to-day

- **Designers:** Before designing any screen, name its single emotional objective (Rule A-001) and the objection its CTA answers (Rule A-014). Pull components from Phase E only.
- **Developers:** Treat Phase D mitigations and Phase F error/edge states as acceptance criteria, not nice-to-haves.
- **PMs:** Every new section/feature must cite a Business Goal from Phase A and a stage from Phase C, or it does not get built (Rule A-009).
- **Copywriters:** Phase B is binding. The forbidden patterns are hard stops, not guidelines.
- **Marketers:** Hope-vs-fear balance (Phase B) governs all acquisition creative, not just on-site copy.
- **AI systems:** When generating anything for earKART, load Phase A + Phase B as constraints and refuse outputs that violate a Critical rule.

## Amendment process

This is a constitution, not scripture. To change a Critical or High rule: open a change request, state the rule ID, the evidence, the trade-off, and the new conflict-resolution implication. Medium/Low rules may be amended by the owning discipline lead. Log every amendment in this README's changelog.

## Changelog

- **v2.1 (this release):** Consolidated the Missing Disciplines Audit into an executable Constitution (Phases A–H + readiness assessment). Research phase formally closed.
