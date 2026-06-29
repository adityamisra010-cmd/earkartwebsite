# earKART Website — Master Source of Truth (Spec v1.1 control document)

**Read this first.** It governs which document wins when two disagree. It does not duplicate content — it points to the authoritative module for each topic and records what changed from Spec v1.0.

**Version:** 1.1 (reconciled) · **Supersedes:** the brand and IA layers of Spec v1.0
**Phase:** Review complete → ready for Design System phase once Point 3 (palette/semantic colors) is signed off.

---

## 1. Authority order (when documents conflict)
1. **Patient safety & medical accuracy** — always wins (Spec §0 / disclaimer).
2. **Official Brand Guidelines** (`Earkart_brand_guidelines.pdf`) — wins for color, logo, type.
3. **Pricelist / corporate facts** (`EARKART_pricelist_2026.pdf`) — wins for company facts, offers, milestones, OMNI/manufacturing.
4. **This control document + corrected modules** (`docs/review/01`, `02`, `03`) — wins for brand application, IA, and new-section specs.
5. **Design Spec v1.0** (`earKART_Website_Design_Specification_v1.md`) — authoritative for everything else (strategy, personas, journey, CRO, accessibility, analytics, voice).
6. Later: user research & A/B results supersede all of the above except #1.

---

## 2. Module map (where the canonical version of each topic lives)

| Topic | Canonical source | Status vs. Spec v1.0 |
|-------|------------------|----------------------|
| Competitive analysis (§1) | Spec v1.0 §1 | ✅ unchanged |
| Brand positioning & voice (§2.1–2.2, §13) | Spec v1.0 | ✅ unchanged |
| **Color system** | `02-brand-identity-corrected.md` §2.3 | 🔁 **replaced** (navy/cyan, not teal/amber) |
| **Typography** | `02-brand-identity-corrected.md` §2.4 | 🔁 **replaced** (Montserrat/Poppins) |
| Spacing & grid (§2.5) | Spec v1.0 §2.5 | ✅ unchanged (brand-independent) |
| **Icon/illustration/motion color refs** | `02` §2.6–2.7 | 🔁 color refs corrected; logic unchanged |
| Personas (§3) | Spec v1.0 §3 | ✅ unchanged |
| Customer journey (§4) | Spec v1.0 §4 | ✅ unchanged |
| **Information architecture** | `01-reconciliation-audit.md` §3 (reconciled sitemap) | 🔁 **replaced** (adds Technology/OMNI/Investor) |
| Existing page specs: Home, Hearing Check, Hearing Health Hub, Hearing Test, Solutions, Patient Stories, Find a Clinic (§6) | Spec v1.0 §6 | ✅ unchanged **except** stat/data corrections (see §3 below) |
| **New page specs**: OMNI, Manufacturing, Certifications & Awards, Investor Relations, Audiologist Profiles | `03-new-page-specs.md` | 🆕 **added** |
| Blog/SEO (§7) | Spec v1.0 §7 | ✅ unchanged **except** drop 2019–2020 back-dating (A7) |
| Accessibility (§8) | Spec v1.0 §8 | ✅ unchanged (mobile body min raised to 16px) |
| CRO (§9), Analytics (§10), Trust (§11), Quality Gate (§12) | Spec v1.0 | ✅ unchanged |

---

## 3. Global data corrections (apply everywhere these appear)
Replace invented stats with placeholder tokens until earKART verifies (owner decision: use placeholders).

| Was (Spec v1.0) | Use now |
|-----------------|---------|
| "40,000+ families" | `[TBD: families served]` |
| "150+ clinics" | `[TBD: clinic count — brand doc states 1400+ partner clinics]` |
| "15+ years experience" | `[TBD: confirm meaning]` — do not display until confirmed |
| "4.9/5 from 8,200+ reviews" | `[TBD: rating]/5 from [TBD: count] reviews` |
| Logo strip brands | `[TBD: confirmed partner brands]` |
| Krishnamurthy testimonial | `[TBD: real consented patient story]` |
| "Reviewed by [Name]…" | `[TBD: Reviewer, Qualification, Reg. No.]` |
| 2019–2020 blog backlog | Removed — build archive from real publish dates only |

Verified facts that SHOULD now appear on the site (from official sources): 1400+ partner clinics, ISO 13485:2016, BIS license, MD5/MD42 manufacturing licenses, BSE SME listing, OMNI remote-audiology capabilities, 2021–2025 milestone timeline, offers (0% No-Cost EMI, Free 1-Year Insurance, Exchange/Upgrade, Free Online Audiologist Consultation).

---

## 4. Open sign-off items before Design System phase
- **Point 3:** Approve the proposed extended web palette + semantic `success/warning/danger` hues (`02` §2.3).
- Confirm dark-mode in/out of scope.
- Confirm logo clear-space/min-size from brand PDF (not fully captured in text extract).

---

*This document is the index. The detail lives in `01`, `02`, `03` and Spec v1.0. Keep this file updated whenever authority or module ownership changes.*
