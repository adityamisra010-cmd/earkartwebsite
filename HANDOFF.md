# earKART Website — Project Handoff & Context

**Last updated:** 2026-06-30 · **Branch:** `claude/ui-ux-pro-max-skill-2zokxr` · **Repo:** `adityamisra010-cmd/earkartwebsite`
**Read order for a cold start:** this file → `docs/review/00-master-source-of-truth.md` → the phase docs.

---

## 1. What this project is
Redesign of **earKART** into a world-class, premium **hearing-healthcare** digital experience for India.
earKART is simultaneously: a **hearing-aid manufacturer** (Make-in-India), a **1400+ partner-clinic network**, an **audiology technology company** (OMNI remote audiology), and a **BSE-SME-listed** company.
North star: *sell life transformation (conversations, confidence, family), never "hearing aids."* Trust before transaction. Warm, calm, "quiet luxury."

---

## 2. Canonical data values (use these; do NOT re-derive)

### Brand (OFFICIAL guidelines are source of truth — strict 5 colors)
| Token | Hex | Rule |
|-------|-----|------|
| Navy | `#171050` | ALL text + primary buttons (only text color) |
| Cyan | `#00C7F1` | Accent ONLY — never text on white, never white-on-cyan |
| Gray | `#999999` | Non-text only (dividers/borders/disabled) |
| White | `#FFFFFF` | Background |
| Black | `#000000` | Rare max-contrast |
| (state) success/warning/danger | `#0F6B45` / `#8A5300` / `#9A1C1C` | Functional signaling only, <3% footprint |

- **Fonts:** **Montserrat** (everything) + **Poppins** (hero headline + pull-quotes only). Both confirmed in brand PDF. Figma style names: `SemiBold`, `Bold` (no space).
- **Signature element:** cyan **soundwave underline** on 1–3 emphasized words; **one per viewport**.
- **Hierarchy via type weight/size/space, not extra colors.**
- **Touch targets:** 44px min; **56px** in hearing-check & booking flows.

### Verified company facts (safe to display)
1400+ partner clinics · ISO 13485:2016 · BIS license · MD5 & MD42 manufacturing licenses · in-house R&D · patent granted · **BSE SME listed (2025)** · **OMNI** = Audiometry (air+bone) + Tympanometry + OAE + Video Otoscopy + real-time remote expert · Milestones: 2021 hearing-aids launch · 2022 CRM/app · 2023 BIS · 2024 first govt order (10,000 units) + ISO · 2025 OMNI + ENT shop-in-shop + BSE listing · Offers: 0% No-Cost EMI, Free 1-Year Insurance, Exchange/Upgrade (save up to **₹25,000**), Free Online Audiologist Consultation.

### `[TBD]` — unverified, use placeholders, NEVER fabricate
families-served count · "years of experience" (conflicts with 2021 launch) · aggregate rating + review count · brand-partner logo list · named audiologists (qualifications/reg. no.) · toll-free number · named awards · logo clear-space/min-size · dark-mode scope.

---

## 3. Owner decisions locked (all approved)
1. **Visual signature** = soundwave underline + ear-curl mark.
2. **v1 innovations** = Future Hearing Simulator (flagship) + Digital Audiologist. **Deferred to v2:** AI Coach "Asha", Family Decision Dashboard.
3. **Personalization → v2**; v1 builds only the **consent-architecture foundation** (PDPB-compliant).
4. **WhatsApp booking + GP/ENT referral** in scope, **go-live gated on staffing/SLA**.
5. **Hindi-first native** for core flows at launch (not translation).
6. **P1 new pages** approved into IA.

---

## 4. What's done (phases)
| Phase | Deliverable | Status |
|-------|-------------|--------|
| 1 | Spec reconciled to v1.1 + v2 integrated | ✅ |
| 2 | Design System v1.0 (+ v2 addenda) | ✅ |
| 3 | Component Library v1.1 (~66 components, Batches 1–4) | ✅ |
| 4 | UX Blueprint v1.1 (16 journey flows, state-complete) | ✅ |
| 5 | Wireframes — **Homepage only** (text + partial Figma) | 🔄 in progress |
| — | **Quiet-luxury homepage prototype** (`prototype/index.html`) | ✅ iterated ×4 |

**Reconciliation already done:** the original Design Spec v1.0 used a wrong brand (teal/cream/amber + Playfair) and invented stats; we corrected it to the official navy/cyan + Montserrat/Poppins, merged the IA, added missing pages (OMNI/Manufacturing/Investor/etc.), and integrated the v2 research phases (2–10).

---

## 5. File map
```
HANDOFF.md                      ← this file
docs/review/
  00-master-source-of-truth.md  ← authority order + module map (READ FIRST)
  01-reconciliation-audit.md    ← conflicts, data register, reconciled IA (sitemap)
  02-brand-identity-corrected.md← color/type system (strict-5)
  03-new-page-specs.md          ← OMNI, Manufacturing, Certs/Awards, Investor Relations, Audiologist Profiles
  04-v2-integration.md          ← v2 findings → actions; the 6 owner decisions
docs/design-system/earKART-design-system-v1.md       ← tokens, principles, motion, a11y, component inventory
docs/component-library/earKART-component-library-v1.md← ~66 component specs (Batches 1–4)
docs/ux-blueprint/earKART-ux-blueprint-v1.md         ← 16 flows (Book, Hearing Check, Find-a-Clinic, …)
docs/wireframes/homepage-lofi-v1.md                  ← homepage low-fi (mobile-first)
docs/source/v2/Phase2…Phase7_8_9_10.md               ← v2 research (evidence audit, 100+ competitor analysis, psychology/adversarial/risk audits, 1000-user sim, density audit, 10 innovations)
prototype/index.html                                 ← LIVE quiet-luxury homepage prototype
.claude/settings.json                                ← registered ui-ux marketplace (see problems)
```
**Not in repo (owner uploads):** brand-guidelines PDF, pricelist PDF, Design Spec v1 md, project handoff doc, v2 phase docs (copied into `docs/source/v2/`).

---

## 6. Prototype — technical notes (`prototype/index.html`)
- Single self-contained HTML file (embedded CSS + vanilla JS, Google Fonts). No build step. It's an **exploratory visual target**, not the production build.
- **Design language:** Apple (whitespace, calm reveals, translucent nav), B&O (product-as-art OMNI stage), Rolex (cinematic full-bleed, cyan = the metallic accent), Stripe (grid clarity), Slosh (one signature delight — soundwave/ripple, kept calm).
- **Motion architecture (important):**
  - *All devices (incl. touch):* intro loader, scroll-progress bar, Intersection reveals, count-up, marquee, **scroll parallax**, **tap sound-ripple**, tactile press states, headline sheen, drifting hero waves, OMNI float/spin/ripples.
  - *Fine-pointer only (mouse):* custom cursor, hero pointer-glow, magnetic buttons, 3D card tilt.
  - Everything gated by `prefers-reduced-motion` (stills) and `pointer:fine` where relevant.
- **Tokens** live in `:root`. Nav themes light-over-hero → dark-when-solid.
- Strict-5 brand, AAA contrast, `[TBD]` placeholders (no invented numbers).

---

## 7. Current problems / blockers
1. **Imagery is placeholder.** Hero/story/OMNI are CSS stand-ins — the #1 thing between "very good" and "Apple-grade." Need real cinematic Indian photography OR AI-generated candidates (Higgsfield MCP is connected).
2. **Figma free-tier limit hit.** A mobile homepage frame exists: https://www.figma.com/design/Iun5NokBysRcA8oH4RRlVT — but Starter plan caps MCP calls (~6); one text-wrap fix on 3 blocks is pending. Continuing in Figma needs a plan upgrade.
3. **"UI/UX pro max" skill not actually installed.** Only its *marketplace* was registered in `.claude/settings.json`; the plugin/skill isn't enabled this session. Methodology is being applied manually instead.
4. **Real data pending** — all `[TBD]` items in §2 need the owner.
5. **Out-of-website-scope items** (business/ops/legal) flagged in `review/04 §7` need owner/ops sign-off: revenue-per-conversion, content model, 45-min appt, concierge call, 30-day trial logistics, WhatsApp/GP staffing, medical-review workflow, PDPB classification, consent process.
6. **Tooling:** `pdftoppm`/`pdftotext` unavailable in env; brand PDF text extracted via `pdfminer.six` after fixing a broken `cffi` (image-only pages — e.g. logo spacing — couldn't be read).

---

## 8. What's next (plan)
**Immediate fork (ask owner):**
- **Imagery:** generate hero + OMNI image candidates with Higgsfield, or wait for real brand photos.

**Then continue Phase 5 wireframes / prototype pages** (priority order):
1. **Hearing Check** flow (top micro-conversion) — next per earlier agreement
2. **Booking** (appointment widget, "who is this for", save-state, WhatsApp)
3. **Find a Clinic / OMNI** finder
4. **Solutions** page — **filter-first mandate** (never the full grid; fixes the critical density issue)
5. OMNI / Technology, Manufacturing, then the new pages

**Longer arc (do not skip phases):** Phase 5 wireframes → Phase 6 hi-fi UI → Phase 7 interactive prototype → **Phase 8 code**. Stack (likely **Next.js + Tailwind + TS**) is decided *after* wireframing — not before (owner constraint).

---

## 9. Working agreements / guardrails
- **No production code/stack until research + wireframing are complete.** The prototype is an exploratory artifact only.
- **Strict-5 brand**; navy is the only text color; cyan accent only; **no fabricated stats**; **no dark patterns**; **WCAG AAA**; **mobile-first**; **reduced-motion safe**; **Hindi-ready**.
- **Citation Integrity Protocol:** cite *direction not magnitude* when a figure is unverified; no fabricated citations; `[Requires India-specific validation]` on Western research.
- **Git:** develop on the branch above; **commit + push every change**; clear messages.
- When a decision is genuinely the owner's (cost/scope/brand), ask; otherwise proceed on documented defaults.

---

## 10. Quick reference — commits so far (prototype + docs)
Docs (Phases 1–5) and the prototype are committed on the branch. Prototype iterations: base → premium motion → loader/cursor/parallax/tilt/marquee → mobile-first motion. Latest prototype state is `prototype/index.html` at HEAD.
