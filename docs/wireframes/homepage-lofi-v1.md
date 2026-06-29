# earKART Homepage — Low-Fidelity Wireframe v1 (mobile-first)

**Phase:** 5 (Wireframes) · **Page:** 01 Homepage · **Status:** Draft for approval.
**Built on:** UX Blueprint Flow 4 (+v2 revisions), Component Library v1.1, Design System (+§13), reconciled IA.
**Brand:** navy text / cyan accent (signature soundwave underline) / Montserrat (Poppins for hero+pullquote) / white bg.
**Key v2 mandates applied:** decision density 4.5→**3.0** (services-overview zone removed; ≤2 primary interactive paths above the trust section); 5-second-test viewport specified; mobile-first; Hindi-first; 56px not required here (no hearing-check/booking inputs) but all targets ≥44px; persistent mobile bottom CTA.
**Legend:** `[Btn]` button · `(link)` text link · `‹underline›` = signature soundwave underline on emphasized words · `▣` image/media · `⌁` analytics event.

---

## A. THE 5-SECOND TEST — mobile first-screenful (≤ ~720px tall)
Everything a new visitor sees before any scroll must answer: *what is this / is it for me / what next.*

```
┌─────────────────────────────────┐ 360px viewport
│ [☰ Menu]   earKART        (हिं) │  ← B1 top bar (logo center/left, lang toggle visible)
│                            (🔍) │
├─────────────────────────────────┤
│                                 │
│   ▣ photo: elder + grandchild,  │  ← C1 Hero media (real, warm, Indian home)
│     sunlit home  (scrim ↓)      │     gradient scrim bottom → AAA text
│                                 │
│   Hear your ‹world› again       │  ← H1 Poppins 700, 34–40px, navy
│                                 │     ‹world› carries the cyan signature underline
│   Expert hearing care across    │  ← subhead, Montserrat 17px, navy
│   India — and a free check you  │
│   can take right now.           │
│                                 │
│   [ Book a Free Hearing Test → ]│  ← PRIMARY cta (navy fill, white) 56px  ⌁hero_primary_cta_click
│   ( Take the 3-min check )      │  ← SECONDARY (outline)  ⌁hero_secondary_cta_click
│                                 │
│   No obligation · No pushy      │  ← trust micro-copy (Montserrat 13px)
│   sales · [TBD: families] served│     [TBD] placeholder — no invented number
└─────────────────────────────────┘
   ▲ 5-sec test PASSES: what (hearing care) / for-me (mirrors situation) /
     next (2 clear CTAs). Exactly 2 primary interactive paths here.
```
**Hindi-first:** on first visit for Hindi-locale/▷low-literacy signal, show a one-time interstitial: `हिंदी में देखें? / View in Hindi?` (two large 56px buttons) — non-blocking, remembers choice.
**Return-visitor (v2, consent-gated):** if a known returning user who completed the check, the hero swaps to *"Welcome back — ready for the next step? [Book your assessment]"* (H6). Default (no cookie) = above.

---

## B. FULL PAGE STACK (mobile, top→bottom)
Each block = one section component. Density target: **one decision per section.**

```
╔═ B1 NAV (sticky, 80→60px on scroll) ════════════╗
║ [☰ Menu]  earKART      (🔍)(हिं)[Book a Test]  ║  desktop: 6 pillars inline (see §C)
╚═════════════════════════════════════════════════╝

╔═ HERO (C1) ═════════════════════════════════════╗   ← see §A
╚═════════════════════════════════════════════════╝

╔═ EMPATHY BRIDGE (C6) — full-width, no image ════╗
║  It starts with the ‹small things›.             ║  Poppins/​navy, generous space
║                                                  ║
║  Asking people to repeat themselves. Turning    ║  Montserrat 18px, ≤80 words
║  the TV up. Missing words in a noisy room.      ║  narrative-transportation
║  These moments are common — they don't make     ║
║  you less. earKART is here for that.            ║
╚═════════════════════════════════════════════════╝   (no CTA — emotional beat only)

╔═ PATHWAYS (C4) — "Where would you like to start?"╗
║ ┌───────────────┐                               ║  3 cards, vertical stack (mobile)
║ │ ▣ ear+wave    │  "I think my hearing changed" ║  left-border accent: navy
║ │ → Start free check (link)                     ║  ⌁pathway_card_click {card}
║ ├───────────────┤                               ║
║ │ ▣ two figures │  "I'm helping a family member"║  accent: cyan
║ │ → How to help someone you love (link)         ║  ← H7 "For Families" entry
║ ├───────────────┤                               ║
║ │ ▣ question    │  "I want to understand options"║ accent: gray
║ │ → Explore solutions (link)                    ║
║ └───────────────┘   ( More options ▾ → child )  ║  Hick's Law: max 3 + optional 4th
╚═════════════════════════════════════════════════╝   ⌁ 1 decision: "which is me?"

╔═ TRUST BAR (C3) — "Why families choose earKART" ╗
║   [TBD]+        15+? yrs?   1400+        [TBD]/5 ║  counters animate on view
║   families   experience[TBD] partner    rating  ║  ⌁trust_section_viewed
║              ‹verify‹      clinics ✅            ║  ✅=verified · [TBD]=placeholder, hide if absent
║   ── trust signals: ISO 13485 · BIS · Make-in-India ──                       ║  real credentials only
╚═════════════════════════════════════════════════╝

╔═ PATIENT STORY (D5) — single featured ══════════╗
║  ▣ candid portrait                              ║  identifiable-victim effect
║  "I didn't realise how much I'd stopped         ║  Poppins italic 22px
║   joining in. Now I don't miss a word."         ║
║  — [TBD: real consented patient]                ║  ⌁story_card_click
║  ( Read their story → )                         ║
╚═════════════════════════════════════════════════╝   one story only (density)

╔═ HEARING-CHECK BANNER (C5) — navy fill ═════════╗
║  Not sure where to start? Take ‹3 minutes›.     ║  white text on navy (AAA)
║  Free online check → a baseline + what to ask.  ║
║  [ Take the Free Hearing Check → ]              ║  white btn, navy label  ⌁hearing_check_banner_click
║  Screening tool, not a diagnosis.               ║  honesty caveat
╚═════════════════════════════════════════════════╝

╔═ CLINIC FINDER PREVIEW (F13 mini) ══════════════╗
║  Find earKART near you   (1400+ across India)   ║
║  [ Enter your city/pincode ]  [Find →]          ║  ⌁clinic_finder_search
║  or call us: [TBD: 1800-…] (free)               ║  phone fallback (Cohort D/G)
╚═════════════════════════════════════════════════╝

╔═ HEALTH HUB PREVIEW (D6) — condensed, optional ═╗
║  From our Hearing Health Hub                    ║  3 article cards → horizontal scroll
║  [▣ card][▣ card][▣ card]  (Browse all →)       ║  ⌁blog_preview_click
╚═════════════════════════════════════════════════╝   (kept condensed; not a decision point)

╔═ FOOTER (B4) ═══════════════════════════════════╗
║ earKART · brand line · (socials → About only)   ║  4 cols desktop / accordion mobile
║ Hearing Health | Solutions | Technology         ║
║ Find a Clinic | Resources | About(+Investors)   ║
║ Contact · Newsletter [email][Subscribe]         ║  F4 (post-value, no pre-tick)
║ ── Medical disclaimer · ISO 13485 · BIS · reg ──║  compliance + trust bar
╚═════════════════════════════════════════════════╝

╔═ MOBILE BOTTOM BAR (B3, persistent) ════════════╗
║   [ Book a Hearing Test ]      ( 📞 Call )       ║  warm wording, not "Book Now"
╚═════════════════════════════════════════════════╝   always visible; ⌁ from any scroll
```

**Removed vs. Spec v1.0:** the **Services-Overview zone (old Zone G)** is gone (density fix); services live under Solutions nav. Blog preview condensed to a non-decision strip.

---

## C. DESKTOP DIFFERENCES (≥1024px, enhancement of mobile)
- **Nav:** full bar — `earKART | Hearing Health · Solutions · Technology · Find a Clinic · Resources · About | 🔍 (हिं) [Book a Hearing Test]`. Mega-menu (B2) on pillar hover/focus with card previews. Current-page indicator (H8): navy weight + signature underline.
- **Hero:** split composition — left text, right ▣ photo + subtle cyan soundwave accent; Ken-Burns 105→100% (reduced-motion: none).
- **Pathways:** 3 cards in a row.
- **Trust bar:** 4-up single row.
- **Story:** portrait left, quote right.
- **No bottom bar** (CTA persistent in nav instead).

---

## D. STATES (this page)
- **Loading:** hero img preloaded (`rel=preload`); below-fold imgs lazy; counters static until in-view; skeletons for blog/clinic strips. LCP target <2.5s on 4G → strict hero image budget.
- **Empty/placeholder data:** any `[TBD]` stat **hidden** rather than shown as a guess (never fabricate). If 0 stories/articles, hide that section (no dead strip).
- **Error:** clinic-finder submit failure → inline message + "call us" fallback (never dead-end).
- **Reduced-motion:** no Ken-Burns, no counter animation (final value shown), signature underline static.
- **Returning visitor (v2):** hero + a "continue where you left off" nudge (consent-gated).

---

## E. ACCESSIBILITY & ANALYTICS (page-level)
- One `<h1>` (hero); landmarks (`header/nav/main/footer`); skip-to-content first tab; visible focus (cyan ring); scrim guarantees AAA over photo; all targets ≥44px; full keyboard; 200% zoom safe; Hindi parity.
- Events present: `hero_primary_cta_click`, `hero_secondary_cta_click`, `pathway_card_click`, `trust_section_viewed`, `story_card_click`, `hearing_check_banner_click`, `clinic_finder_search`, `blog_preview_click`.
- **Decision-density check:** Hero(1) → Pathways(1) → Trust(0) → Story(0) → Check banner(1) → Finder(1). ~**4 light decisions down the page, ≤2 above the trust line** → meets density 3.0 target.

---

## F. Open `[TBD]` for this page
Real stats (families/years/rating) · real patient story + portrait · toll-free number · hero photo asset (consent) · pathway icons · blog cards · final Hindi interstitial trigger logic.

---

*Next: hearing-check flow wireframe, then booking. Each mobile-first, every state. No code until Phase 8.*
