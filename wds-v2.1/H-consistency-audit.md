# Phase H — Final Consistency Audit

**Goal: the most useful specification, not the longest.** This is a critical self-review of v1 + the 29 disciplines + Phases A–G. It names contradictions, duplication, gaps, weak evidence, over-engineering, scope creep, low-value items, and academic concepts that don't earn their keep — and recommends cuts.

---

## 1. Contradictions (resolved)

| # | Tension | Resolution |
|---|---|---|
| H-1 | **"Trust before commitment" (A-007) vs. "CTA reachable fast / above fold" (A-019, persistent mobile bar).** | Not a true conflict: keep the CTA *present* but ensure a trust signal precedes the *moment of action*. Phase A conflict order (trust > conversion) governs. Documented. |
| H-2 | **Loss-framing endorsed in v1 hero ("again" activates loss aversion; "loss-framed messages increase health-seeking") vs. Phase B "hope over fear, 80/20" and "never frighten into action."** | Reconciled: gentle, restorative loss-framing ("hear your world again") is allowed; alarmist loss-framing ("untreated loss → dementia") is forbidden. The line is dread vs. restoration. Stated in B §11. |
| H-3 | **Decoy effect (Discipline 3) vs. anti-manipulation ethics (A-022, A-042).** | Decoys permitted only if genuine/available/fairly described and recommendations are fit-based not margin-based. Anything else is cut. |
| H-4 | **Personalization/AI (Disciplines 27) vs. privacy-first and "one experience" simplicity.** | Privacy precedence (Tier 2) wins; personalization is consent-bound, capped at ~5 documented rules (A-111, D-12.2). |
| H-5 | **"Established archive" backdated publication history (v1 §7.3) vs. "never fabricate, every claim honest" (A-011, A-022).** | **Flagged as the single most dangerous item in v1.** Only real content with honest dating is acceptable; presenting a manufactured backlog to *appear* established edges into deception. Recommend: publish real content, date it truthfully, do not engineer a false history. (See §5 weak evidence and §8 removals.) |
| H-4b | **v1 "Default follow-up opted in, not out" (Discipline 3) vs. A-125 no pre-ticked opt-ins / consent law.** | Consent law wins: follow-up opt-in must be lawful and explicit; "opted-in default" only where legally permitted. Corrected in A-035/A-097/A-125. |

No remaining unresolved contradictions.

## 2. Duplicate / Overlapping Sections (consolidated)

- **Trust** appears in v1 (Trust Architecture §11), Discipline 15 (Trust Engineering), and across Phases A/B/C/D. → Consolidated into A Group 2 + B §10 as the canonical source; others now reference it.
- **Cognitive load** spans Disciplines 8, 9, 12, 13 and v1 CRO. → Canonical in A Group 4.
- **Behavioral economics / choice architecture / persuasive tech / decision confidence** (Disciplines 2, 3, 13, 16) heavily overlap. → Merged into A Groups 3, 5, 6 without losing the distinct rules.
- **Indian market psychology / cross-cultural / design justice** (Disciplines 21, 22, 25) overlap on family decision-making and inclusion. → A Group 8 + 12, deduplicated.
- **Service design / systems thinking / crisis** (Disciplines 4, 5, 26) → A Group 16.
- **Customer journey** appears in v1 §4 and is expanded in Phase C. → Phase C is canonical; v1's 9-stage spine is retained as the high-level map.

## 3. Missing Topics (now added)

- **Conflict-resolution order** — absent from v1; added (A "When Rules Collide").
- **Explicit error/edge-state cataloging per feature** — added (Phase F + D).
- **Service-recovery and channel-transition design** — under-specified in v1; added (A-106, A-108, C cross-stage).
- **Teleaudiology / no-nearby-clinic path** — added as edge cases (F-3, F-4).
- **Caregiver-managed portal accounts** — added (F-10 edge cases).
- **Component-level scalability for 150+ clinics and multi-language drift** — added (D-12).
- **Still thin (acknowledged, not blocking):** detailed data-protection mapping to the specific Indian statute in force at build time; concrete clinic operational standards (owned by Ops, not this doc); measurement instrumentation spec (owned by Analytics).

## 4. Over-Engineering (trim or defer)

- **fMRI/EEG/GSR neuroscience apparatus (Discipline 1):** the *applied* outputs (scan patterns, salience, white space, three-quarter faces) are kept; the lab apparatus framing is cut as non-executable.
- **Hofstede four-dimension regional modeling (Discipline 21):** keep the practical outputs (family decision-making, representation, language); cut the academic dimension-scoring exercise.
- **Per-page "signal-to-noise ratio metric" as a formal number (Discipline 12):** keep the principle (A-028); drop the pseudo-quantified metric — it invites false precision.
- **Elaborate gamification (streaks, scores) (Discipline 23):** demoted to Low priority and intrinsic-only (A-112); not a launch concern.

## 5. Weak Evidence (downgrade confidence, keep directionally)

- Specific percentage uplift claims throughout the disciplines audit (e.g. "27% WTP increase," "8% comprehension from blue tint," "3–5% cortisol from cream") are **directional, not guarantees.** Treat them as hypotheses to A/B test, not facts to cite to users. Never put these numbers in patient-facing copy.
- The "established archive" device (§1 H-5) has **no acceptable evidence basis** and is recommended for removal as a *strategy* (real content stays).
- Color-as-pharmacology claims are retained as design rationale but not as marketing claims.

## 6. Scope Creep (boundary re-asserted)

- This release **stops before** UI, layout, color application, typography setting, wireframes, and Figma — as instructed. Any pixel-level content that crept into v1 page specs (exact px, hex usage on specific elements) is treated as *illustrative*, not binding, until the UX phase.
- Full mobile app, community forum, and AI personalization engine are **post-launch** (P3) and must not expand the launch scope.

## 7. Low-Value Recommendations (cut or de-prioritize)

- Quarterly A/B calendar specifics from v1 are kept as an example, not a mandate.
- Some duplicate "Evidence & Validation Blocks" in v1 page specs are redundant with Phase A rule citations → fold into rule references.
- "Publication history" table → cut (see H-5).

## 8. Recommended Removals (explicit)

1. **Remove the backdated "established archive" strategy** (v1 §7.3). Keep: publish genuinely useful content and date it honestly. *Reason: collides with A-011/A-022; reputational and trust risk outweighs any authority-signaling benefit.*
2. **Remove formalized signal-to-noise numeric metric** — keep the principle.
3. **Remove neuroscience lab-method framing** — keep applied attention/salience rules.
4. **Remove Hofstede scoring exercise** — keep practical cultural outputs.
5. **Demote gamification and AI personalization** to clearly post-launch; remove any implication they're launch-critical.
6. **Remove unsourced precise-percentage uplift figures from any user-facing context**; retain internally as test hypotheses only.

## 9. Net Effect

The specification is now **tighter and more executable**: 127 testable rules, a binding conflict order, an experience blueprint, a risk register with acceptance criteria, a bounded component inventory, design-ready feature scaffolds, and benchmark narratives — with the academic scaffolding that produced them deliberately set aside. The one material integrity risk (manufactured archive) is flagged and recommended for removal before any build.
