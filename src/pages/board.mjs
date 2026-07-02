import {
  pageHero, sectionHeader, leadershipCard, featureCard, button,
  ctaSection, eyebrow,
} from "../lib/components.mjs";
import { icons } from "../lib/icons.mjs";
import { board, committees } from "../data/board.mjs";

export default function boardPage() {
  const hero = pageHero({
    eyebrow: "Investor · Governance",
    title: `Board of <em>Directors</em>.`,
    subtitle:
      "Earkart Limited is guided by a board that brings healthcare, technology, finance and governance experience.",
    variant: "hero--inner hero--compact",
  });

  const executives = board.filter((m) => m.tag === "Executive");
  const others = board.filter((m) => m.tag !== "Executive");

  const execSec = `<section class="section">
    <div class="container">
      ${sectionHeader({ eyebrow: "Executive directors", title: "Leadership" })}
      <div class="grid grid--3 leaders-grid">${executives.map(leadershipCard).join("")}</div>
    </div>
  </section>`;

  const otherSec = `<section class="section section--tint">
    <div class="container">
      ${sectionHeader({ eyebrow: "Board", title: "Non-executive & independent directors" })}
      <div class="grid grid--3 leaders-grid">${others.map(leadershipCard).join("")}</div>
      <p class="fineprint">[Confirm the full list of directors and add verified profiles and photographs.]</p>
    </div>
  </section>`;

  const committeeSec = `<section class="section">
    <div class="container">
      ${sectionHeader({ eyebrow: "Governance", title: "Board committees", align: "center" })}
      <div class="grid grid--3">${committees.map((c) => featureCard({ icon: "shield", title: c.name, text: c.desc })).join("")}</div>
      <div class="section__cta">${button({ label: "Corporate governance documents", href: "investor-governance.html" }, "secondary", { trailingArrow: true })}</div>
    </div>
  </section>`;

  return {
    path: "board-details.html",
    title: "Board of Directors",
    description:
      "Meet the Board of Directors of Earkart Limited — executive, non-executive and independent directors — and the board committees governing the company.",
    breadcrumbs: [{ label: "Investor", href: "investor.html" }, { label: "Board of Directors", href: "board-details.html" }],
    content: [hero, execSec, otherSec, committeeSec, ctaSection({ title: "Explore Earkart's investor resources.", text: "Financials, governance, IPO documents and compliance disclosures." })].join("\n"),
  };
}
