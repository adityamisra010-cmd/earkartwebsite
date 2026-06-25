---
name: ui-ux-pro-max
description: "UI/UX design intelligence for web and mobile. 50+ styles, 161 color palettes, 57 font pairings, 161 product types, 99 UX guidelines, 25 chart types across 10 stacks (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui, HTML/CSS). Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, check UI/UX. Styles: glassmorphism, claymorphism, minimalism, brutalism, neumorphism, bento grid, dark mode, responsive, flat design. Topics: color systems, accessibility, animation, layout, typography, font pairing, spacing, interaction states, shadow, gradient."
source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
note: "Installed into this project from the upstream repo. Full search.py + CSV datasets are upstream; this SKILL.md carries the complete rule database (Quick Reference) which is the actionable core."
---

# UI/UX Pro Max — Design Intelligence

Comprehensive design guide for web and mobile. Use when a task changes how a feature **looks, feels, moves, or is interacted with**.

## Rule Categories by Priority

| P | Category | Impact | Must Have | Avoid |
|---|----------|--------|-----------|-------|
| 1 | Accessibility | CRITICAL | Contrast 4.5:1, alt text, keyboard nav, aria-labels | Removing focus rings, icon-only buttons w/o labels |
| 2 | Touch & Interaction | CRITICAL | Min 44×44px, 8px+ spacing, loading feedback | Hover-only, instant (0ms) state changes |
| 3 | Performance | HIGH | WebP/AVIF, lazy load, reserve space (CLS<0.1) | Layout thrashing, CLS |
| 4 | Style Selection | HIGH | Match product type, consistency, SVG icons | Mixing styles randomly, emoji as icons |
| 5 | Layout & Responsive | HIGH | Mobile-first, viewport meta, no horizontal scroll | Fixed px widths, disable zoom |
| 6 | Typography & Color | MEDIUM | Base 16px, line-height 1.5, semantic tokens | Text <12px, gray-on-gray, raw hex |
| 7 | Animation | MEDIUM | 150–300ms, motion conveys meaning | Decorative-only, animating width/height, no reduced-motion |
| 8 | Forms & Feedback | MEDIUM | Visible labels, error near field, helper text | Placeholder-only label, errors only at top |
| 9 | Navigation | HIGH | Predictable back, bottom nav ≤5, active state | Overloaded nav, mixed patterns |
| 10 | Charts & Data | LOW | Legends, tooltips, accessible colors | Color-only meaning |

## Quick Reference (key rules)

**1. Accessibility (CRITICAL):** color-contrast 4.5:1 (large 3:1); visible focus rings 2–4px; descriptive alt text; aria-label on icon-only buttons; tab order matches visual order; `<label for>`; skip-to-content; sequential h1→h6; never color-only; respect prefers-reduced-motion; provide cancel/back in modals & multi-step flows.

**2. Touch & Interaction (CRITICAL):** min 44×44 target; ≥8px gap; tap (not hover) for primary actions; disable button + spinner during async; error near problem; cursor-pointer on clickable; visual press feedback; feedback within 100ms.

**3. Performance (HIGH):** WebP/AVIF + srcset; declare width/height/aspect-ratio; font-display swap; preload only critical fonts; lazy-load below fold; reserve space for async content (no CLS); virtualize 50+ lists; skeletons for >1s ops; input latency <100ms.

**4. Style Selection (HIGH):** match style to product type; one style across all pages; SVG icons not emoji; palette from product/industry; distinct hover/pressed/disabled; consistent elevation scale; design light+dark together; one icon set; one primary CTA per screen.

**5. Layout & Responsive (HIGH):** viewport meta; mobile-first then scale; systematic breakpoints; ≥16px body on mobile; line length 35–60 mobile / 60–75 desktop; no horizontal scroll; 4/8px spacing scale; consistent max-width; layered z-index scale; fixed bars reserve safe padding; hierarchy via size/spacing/contrast.

**6. Typography & Color (MEDIUM):** body line-height 1.5–1.75; 65–75 chars/line; pair heading/body personalities; consistent type scale; semantic color tokens; dark mode desaturated/lighter; FG/BG pairs ≥4.5:1; functional color + icon/text; tabular figures for data; intentional whitespace.

**7. Animation (MEDIUM):** 150–300ms micro-interactions; transform/opacity only; skeleton when >300ms; 1–2 animated elements/view; ease-out enter / ease-in exit; exit shorter than enter; stagger 30–50ms; interruptible; never block input; subtle scale 0.95–1.05 on press; nav forward left/up, back right/down; no reflow.

**8. Forms & Feedback (MEDIUM):** visible label per input; error below field; loading→success/error on submit; mark required; helpful empty states; auto-dismiss toasts 3–5s; confirm destructive actions; persistent helper text; progressive disclosure; validate on blur; semantic input types; password show/hide; autocomplete; undo for destructive; error states cause+fix; multi-step progress indicator; auto-save long forms; focus first invalid field; aria-live errors.

**9. Navigation (HIGH):** bottom nav ≤5; drawer for secondary; predictable back; deep linking; icon+label; highlight active; separate primary/secondary; clear modal close; reachable search; breadcrumbs for 3+ levels; restore state on back; consistent placement; don't mix tab+sidebar+bottom; move focus to main on route change.

**10. Charts & Data (LOW):** match chart to data; accessible palettes; table alternative; pattern+color; visible legend; tooltips; labeled axes w/ units; reflow on small screens; empty/loading/error states; locale number formatting; ≥44pt interactive targets; avoid pie >5 categories; data lines ≥3:1.

## Workflow

1. **Analyze requirements** — product type, audience, style keywords, stack.
2. **Generate design system (REQUIRED)** — produce pattern + style + colors + typography + effects + anti-patterns. Persist to `design-system/MASTER.md` (global source of truth) with per-page overrides in `design-system/pages/<page>.md`. When building a page, read MASTER.md, then the page override if it exists (override wins).
3. **Supplement** — deep-dive per domain (product, style, color, typography, landing, chart, ux) as needed.
4. **Stack guidelines** — apply stack-specific best practices.

## Pre-Delivery Checklist

Visual: SVG icons (no emoji), one icon family, stable press states (no layout shift), semantic tokens (no per-screen hex).
Interaction: pressed feedback everywhere; ≥44px targets; 150–300ms timing; clear disabled states; SR focus order; no gesture conflicts.
Light/Dark: primary text ≥4.5:1 both modes; secondary ≥3:1; visible dividers/states in both; strong modal scrim; test both themes.
Layout: safe areas respected; content not hidden behind fixed bars; verified 375px + landscape; adaptive gutters; 4/8px rhythm; readable measure.
Accessibility: labels on meaningful images/icons; labeled fields w/ errors; color not sole indicator; reduced-motion + dynamic type without breakage; roles/states announced.
