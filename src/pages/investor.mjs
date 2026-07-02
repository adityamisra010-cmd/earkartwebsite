import {
  pageHero, sectionHeader, button, irCtaSection, investorDocCard, eyebrow,
} from "../lib/components.mjs";
import { icons } from "../lib/icons.mjs";
import { contact } from "../data/site.mjs";
import { investorSections, investorSnapshot, investorPages } from "../data/investor.mjs";

export default function investor() {
  const hero = pageHero({
    eyebrow: "Investor Relations",
    title: `Transparent by design, <em>accountable by choice</em>.`,
    subtitle:
      "Board information, financial results, IPO documents, governance and compliance disclosures — organised clearly for our shareholders and stakeholders.",
    ctas: [
      { cta: { label: "Financial information", href: "investor-financials.html" }, variant: "gold", opts: { icon: "chart" } },
      { cta: { label: "Corporate governance", href: "investor-governance.html" }, variant: "secondary", opts: { icon: "shield" } },
    ],
    variant: "hero--inner",
  });

  const snapshot = `<section class="section section--tight">
    <div class="container">
      <div class="investor-snapshot investor-snapshot--bordered">
        ${investorSnapshot.map((s) => `<div class="investor-snapshot__item reveal"><span class="investor-snapshot__value">${s.value}</span><span class="investor-snapshot__label">${s.label}</span></div>`).join("")}
      </div>
      <p class="fineprint center">Figures indicative — please refer to official filings. [Confirm listing details and figures.]</p>
    </div>
  </section>`;

  const overview = `<section class="section">
    <div class="container">
      ${sectionHeader({ eyebrow: "Investor overview", title: "Everything shareholders need, in one place.", align: "center" })}
      <div class="grid grid--3 investor-index">
        ${investorSections.map((s) => `<a class="card investor-index__card reveal" href="${s.href}">
          <span class="investor-index__icon">${icons.document}</span>
          <span class="investor-index__title">${s.title}</span>
          <span class="investor-index__desc">${s.desc}</span>
          <span class="investor-index__arrow" aria-hidden="true">${icons.arrowRight}</span>
        </a>`).join("")}
      </div>
    </div>
  </section>`;

  // Quick highlights: pull IPO + financial docs
  const ipoDocs = investorPages["investor-ipo"].groups[0].docs;
  const highlights = `<section class="section section--tint">
    <div class="container">
      ${sectionHeader({ eyebrow: "Latest documents", title: "IPO & offer documents", text: "Key offer documents available for download." })}
      <div class="doc-grid">${ipoDocs.map(investorDocCard).join("")}</div>
      <div class="section__cta">${button({ label: "All IPO documents", href: "investor-ipo.html" }, "secondary", { trailingArrow: true })}</div>
    </div>
  </section>`;

  const contactBand = `<section class="section">
    <div class="container narrow">
      <div class="card ir-contact reveal">
        ${sectionHeader({ eyebrow: "Investor contact", title: "Investor & grievance contact" })}
        <div class="ir-contact__grid">
          <p>${icons.mail}<a href="mailto:${contact.investorEmail}">${contact.investorEmail}</a></p>
          <p>${icons.phone}<a href="tel:${contact.phoneRaw}">${contact.phoneDisplay}</a></p>
          <p>${icons.users}<a href="investor-grievance.html">Grievance redressal</a></p>
          <p>${icons.document}<a href="investor-information.html">Registrar &amp; compliance officer</a></p>
        </div>
        <p class="fineprint">[Confirm dedicated investor email, compliance officer and registrar details.]</p>
      </div>
    </div>
  </section>`;

  return {
    path: "investor.html",
    title: "Investor Relations",
    description:
      "Earkart Limited investor relations — board of directors, financial information, IPO documents, corporate governance, SEBI LODR compliance and shareholder resources.",
    breadcrumbs: [{ label: "Investor", href: "investor.html" }],
    content: [hero, snapshot, overview, highlights, contactBand, irCtaSection()].join("\n"),
  };
}
