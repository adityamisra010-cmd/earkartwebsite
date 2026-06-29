# earKART — Source Reconciliation Audit (Phase: Review / "Checking & Rechecking")

**Status:** Draft for approval · **Owner decision applied:** Official Brand Guidelines are canonical
**Sources reconciled:**
1. `Earkart_brand_guidelines.pdf` (official visual identity) — **canonical for brand**
2. `EARKART_pricelist_2026.pdf` (corporate facts, offers, milestones) — **canonical for company facts**
3. earKART Website Redesign Project — Handoff v1.0 (updated strategic positioning)
4. `earKART_Website_Design_Specification_v1.md` (detailed strategy spec) — **canonical for strategy/UX/CRO/voice, NOT for brand or company facts**

> **Why this document exists:** Design Spec v1.0 was authored on a brand foundation and a set of company facts that do not match earKART's official guidelines or current corporate reality. This audit records every conflict, marks each claim as Verified / Conflict / Unverified, and proposes a single reconciled information architecture. Nothing downstream (design system, wireframes) should proceed until the items marked **ACTION** are resolved.

---

## 0. Decisions Locked

| # | Decision | Rationale |
|---|----------|-----------|
| D1 | **Official Brand Guidelines are the single source of truth for brand** (color, logo, type). | Confirmed by owner. Logos show navy + cyan, matching the official palette. |
| D2 | Design Spec v1.0 **Section 2 (Brand Identity)** must be rewritten against official tokens. | Its teal/cream/amber palette and Playfair/DM Sans type are not earKART's brand. |
| D3 | Design Spec v1.0 remains canonical for **strategy, personas, journey, CRO, accessibility, analytics, voice**. | That work is sound and brand-independent. |

---

## 1. Canonical Brand Tokens (corrected — replaces Spec §2.3 / §2.4)

### Color (from official Brand Guidelines)
| Token | Hex | Role |
|-------|-----|------|
| Brand Navy | `#171050` | Primary brand, headings, primary CTAs, "ear" wordmark |
| earKART Cyan | `#00c7f1` | Accent, "KART" wordmark, highlights, interactive states |
| Neutral Gray | `#999999` | Secondary text, dividers, muted UI |
| White | `#ffffff` | Background |
| Black | `#000000` | Max-contrast text where required |

> **Open item (B-ACTION-1):** The official 5-color set is a *logo* palette, not a full *product/web* palette. A healthcare site needs success/warning/danger semantics, surface tints, and accessible text-on-navy combinations. Recommend deriving an **extended web palette anchored on navy + cyan** (D1 keeps these fixed) and approving it in the Design System phase. This is extension, not redefinition.

### Typography (from official Brand Guidelines)
| Role | Face | Notes |
|------|------|-------|
| Primary | **Montserrat** | Confirmed primary font in guidelines. |
| Secondary | **Poppins** | ✅ Confirmed from brand guidelines typography page. (B-ACTION-2 closed.) |

> Spec's Playfair Display + DM Sans + DM Mono are **superseded**. The spec's *reasoning* about senior-friendly sizing, line-height, and the type scale (§2.4) remains useful and can be re-applied to Montserrat.

---

## 2. PART A — Data & Claims Verification Register

Legend: ✅ Verified (official source) · ⚠️ Conflict (contradicts official source) · ❓ Unverified / appears invented · 🧱 Placeholder (intended to be filled)

| # | Claim in Spec | Location | Status | Finding / Action |
|---|---------------|----------|--------|------------------|
| A1 | "40,000+ families helped" | Homepage Hero & Trust (§6.1.6) | ❓ | No source. Replace with a **verified** figure or remove. **ACTION: provide real number.** |
| A2 | "15+ Years of clinical experience" | Trust grid (§6.1.6) | ⚠️ | Pricelist milestone: **"Launch of Hearing Aids — 2021."** As a hearing-aid brand earKART is ~recent. "15+ years" likely overstates. **ACTION: confirm what the 15 years refers to (founders' clinical experience? clinic network?) or correct.** |
| A3 | "150+ Clinics Nationwide" | Trust grid (§6.1.6) | ⚠️ | Official brand doc states **"1400 plus partner clinics."** Spec undercounts by ~10×. **ACTION: confirm exact current number; likely "1400+ partner clinics."** |
| A4 | "4.9/5 Patient Rating from 8,200+ reviews" | Trust grid (§6.1.6) | ❓ | No source. **ACTION: provide verified aggregate rating + count, or remove.** |
| A5 | Brand logo strip: Phonak, Signia, Widex, Oticon, ReSound, Starkey | Trust (§6.1.6 Zone E) | ❓ | Confirm earKART actually partners with / sells each before displaying logos (legal + trust risk). **ACTION: confirm partner list.** |
| A6 | Patient "Krishnamurthy S., 71, Coimbatore, patient since 2022" + quote | Story preview (§6.1.6 Zone F) | 🧱 | Placeholder. Spec's own rule (§11.2) forbids fabricated testimonials. **ACTION: replace with real, consented patient story before launch.** |
| A7 | Established blog backlog dated **2019–2020 "Foundation phase"** | Blog strategy (§7.3) | ⚠️🚩 | Directly conflicts with 2021 hearing-aid launch **and** with the spec's own honesty principle (§11.2, §1.5). Back-dating an "established archive" to 2019 is fabrication. **ACTION: drop back-dating; build archive honestly from real publish dates.** |
| A8 | Medical review stamps "Reviewed by [Name], MSc Audiology" | Throughout (§6.3, §7.4) | 🧱 | Placeholder — needs real named audiologists + registration numbers. **ACTION: supply reviewer roster.** |
| A9 | Hearing-aid pricing / "cost per day" / financing claims | Solutions (§6.5) | 🧱→✅ | **Real data available in pricelist:** 0% No-Cost EMI, Free 1-Year Insurance, Exchange/Upgrade, "Upgrade & save up to ₹25,000," Free Online Consultation. **ACTION: wire spec pricing copy to actual pricelist offers.** |
| A10 | "1800-XXX-XXXX" toll-free | Clinic finder (§6.1.6 Zone J) | 🧱 | Placeholder phone. **ACTION: real number.** |
| A11 | Research citations (e.g., "41% fewer mobile conversions," "33% mega-menu uplift," "23% no-show reduction," "12–15% reading speed") | Evidence blocks throughout | ❓(low priority) | Attributed to named studies (Baymard, NNG, Cleveland Clinic, Cialdini, etc.). Plausible but unverified verbatim. **ACTION: spot-check before quoting publicly; safe to keep as internal design rationale.** |

### Company facts confirmed from official sources (use these as anchors)
✅ From Pricelist / Brand Guidelines — these are **verified** and should be surfaced on the site:
- **1400+ partner clinics** (brand doc)
- **Manufacturer:** BIS License; **ISO 13485:2016**; **MD5 & MD42** manufacturing/distribution licenses; Make-in-India + in-house R&D; **patent granted**
- **Publicly listed:** BSE SME Platform (2025)
- **OMNI:** cloud-enabled remote audiology — Audiometry (air + bone), Tympanometry, OAE, Video Otoscopy, real-time remote expert support
- **Milestone timeline:** 2021 Hearing Aids launch · 2022 CRM & app · 2023 BIS License · 2024 First govt order (10,000 units) + ISO 13485 · 2025 OMNI launch, ENT shop-in-shop, BSE SME listing
- **Offers:** Free 1-Year Insurance · 0% No-Cost EMI · Exchange/Upgrade · Free Online Audiologist Consultation

---

## 3. PART B — Information Architecture Reconciliation

### The problem
Spec §5.1 IA and the Handoff "New Website Architecture" describe **different sites**. The spec has **no** Technology, OMNI, Manufacturing, Certifications, or Investor Relations — yet those are core to who earKART actually is (manufacturer + OMNI tech + BSE-listed), and the Handoff lists them as required.

### Side-by-side
| Spec §5.1 (education/service-first) | Handoff "New Architecture" (platform/tech-first) |
|---|---|
| Home | Home |
| About Hearing Health | Solutions |
| Hearing Aids & Solutions | Technology → OMNI · Manufacturing · R&D · Certifications |
| Our Services | Find Clinic |
| Find a Clinic | Resources |
| Resources & Stories | About |
| Book Appointment (CTA) | Book Hearing Test (CTA) |

### Proposed reconciled sitemap (merged)

**Primary nav (6 + persistent CTA):**

```
earKART
│
├── HEARING HEALTH            (education hub — acquisition engine; from Spec §5.1)
│   ├── How Hearing Works
│   ├── Types of Hearing Loss
│   ├── Signs & Symptoms
│   ├── Hearing Loss in Children
│   ├── Tinnitus
│   └── Free Hearing Check (online tool)
│
├── SOLUTIONS                 (merges Spec "Hearing Aids & Solutions" + "Our Services")
│   ├── Hearing Aids (by lifestyle, anti-catalog)
│   ├── Accessories & Assistive Listening
│   ├── Hearing Protection
│   ├── Services: Hearing Test & Assessment
│   ├── Services: Fitting & Trial
│   ├── Services: Pediatric Audiology
│   ├── Services: Tinnitus Management
│   ├── Services: Corporate Hearing Health
│   ├── Services: Home Visit
│   ├── Government Schemes & Subsidies        ← v2 NEW (P1, design justice)
│   └── Hearing Aid Maintenance & Care        ← v2 NEW (P2, reduces abandonment)
│
├── TECHNOLOGY                (NEW — from Handoff; reflects real earKART)
│   ├── OMNI (remote audiology / teleaudiology) — dedicated microsite/section
│   ├── Manufacturing (Make-in-India, MD5/MD42)
│   ├── R&D / Innovation
│   └── Certifications & Awards (ISO 13485, BIS, patents, milestone timeline)
│
├── FIND A CLINIC             (interactive finder; 1400+ network)
│
├── RESOURCES                 (merges Spec "Resources & Stories")
│   ├── Patient Stories
│   ├── Hearing Health Hub (blog / knowledge center — 8 pillars)
│   ├── Audiologist / Doctor Profiles
│   └── FAQs
│
├── ABOUT                     (corporate; reflects listed-company status)
│   ├── Our Story & Milestones
│   ├── Investor Relations (BSE SME)  ← NEW
│   ├── Our Quality Standards / Patient Charter  ← v2 NEW (P2)
│   ├── For Professionals: GP & ENT Referrals    ← v2 NEW (P1; also linked prominently site-wide)
│   ├── Press / Media Room                        ← v2 NEW (P2)
│   ├── Community Initiatives          ← NEW (from Handoff)
│   ├── Careers
│   └── Contact
│
├── [utility] HTML Sitemap                        ← v2 NEW (P1, SEO + a11y)
├── [utility] 404 / Error page (designed)         ← v2 NEW (P1, trust moment not dead-end)
│
└── BOOK A HEARING TEST       (persistent primary CTA)
```

### v2 IA additions (approved)
Added per `review/04 §4`: **Government Schemes & Subsidies** (P1), **GP & ENT Referrals** (P1, distinct professional audience — standalone page, surfaced in footer + relevant content), **HTML Sitemap** + **404** (P1 utility), **Quality Standards/Patient Charter**, **Maintenance & Care**, **Press** (P2). **Corporate Hearing Health** remains a Solutions service now; its full B2B buyer journey (HR/EHS/Medical Officer) is P3. Teleaudiology folds into **OMNI**.

### Judgment calls — ✅ CONFIRMED by owner ("they are as mentioned")
- **J1:** ✅ **Hearing Health** stays its own top-level pillar (education is the primary acquisition channel). 6 nav items.
- **J2:** ✅ Devices + services merged into one **Solutions** pillar.
- **J3:** ✅ **Investor Relations** sits under About.
- **J4:** ✅ **OMNI** under Technology (as proposed in the sitemap).

---

## 4. Spec Amendments Required (work list for next phase)

| ID | Section to change | Change |
|----|-------------------|--------|
| C1 | §2.3 Color System | Replace teal/cream/amber with navy/cyan/gray; re-derive extended web palette + semantics. |
| C2 | §2.4 Typography | Replace Playfair/DM Sans/DM Mono with Montserrat (+ confirmed secondary). Re-apply senior-friendly scale. |
| C3 | §2.6 / §2.7 | Re-tune illustration "teal ink" and motion color refs to navy/cyan. |
| C4 | §5.1 IA | Replace with reconciled sitemap (Part B). |
| C5 | §6.1.6 Trust grid | Swap invented stats (A1–A4) for verified facts (§2 anchors). |
| C6 | §7.3 Blog backlog | Remove 2019–2020 back-dating (A7). |
| C7 | New page specs needed | OMNI, Manufacturing, Certifications/Awards, Investor Relations, Audiologist Profiles — none exist in spec today. |

---

## 5. Open Data — resolution: **use placeholders** (owner decision)

Per owner: leave clear placeholders for unverified data; do not invent numbers. Standard placeholder token: `[TBD: description]`. These get filled by earKART before launch (gated by the Final Quality Gate, Spec §12).

| # | Data point | Placeholder token to use until verified |
|---|------------|------------------------------------------|
| 1 | Partner-clinic count | `[TBD: clinic count — official brand doc states 1400+]` |
| 2 | "Years of experience" meaning | `[TBD: confirm what "Xyears" refers to]` (do not display until confirmed) |
| 3 | Aggregate rating + review count | `[TBD: rating]/5 from [TBD: review count] reviews` |
| 4 | Brand-partner logo list | `[TBD: confirmed partner brands]` |
| 5 | Named audiologists (stamps/profiles) | `[TBD: Reviewer Name, Qualification, Reg. No.]` |
| 6 | Secondary font | ✅ Resolved — **Poppins** |
| 7 | OMNI microsite vs. section | ✅ Resolved — under Technology (J4) |
| 8 | Nameable awards | `[TBD: named awards only — no unnamed "award-winning" claims per §11.2]` |

---

*Prepared in the review phase. No design-system, wireframe, or code work has begun. Resolve §1 open items, the Part A ACTIONs, and the Part B judgment calls before advancing to the Design System phase.*
