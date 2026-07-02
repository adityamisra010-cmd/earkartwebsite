import {
  pageHero, sectionHeader, pressReleaseCard, ctaSection, eyebrow,
} from "../lib/components.mjs";
import { icons } from "../lib/icons.mjs";
import { contact } from "../data/site.mjs";

// Press releases (placeholder-safe; replace hrefs/dates/summaries with real ones)
const releases = [
  {
    date: "Dec 2025",
    title: "Earkart reports strong first-half performance for FY26",
    summary:
      "Earkart shared its H1 FY26 results and hosted an earnings call for investors and analysts. [Confirm details and attach release.]",
    href: "https://earkart.in/investor/Earkart-transcript.pdf",
    cta: "Read transcript",
  },
  {
    date: "2025",
    title: "OMNI platform earns recognition at a leading otolaryngology conference",
    summary:
      "Earkart's OMNI remote-audiometry platform was showcased to a global ENT audience. [Confirm details and attach release.]",
    href: "#",
  },
  {
    date: "Sep 2025",
    title: "Earkart Limited opens its Initial Public Offering",
    summary:
      "Earkart Limited announced the opening of its IPO. [Confirm details and attach release.]",
    href: "#",
  },
  {
    date: "[Add date]",
    title: "[Add press release title]",
    summary: "[Add a short summary of the press release here.]",
    href: "#",
  },
];

export default function press() {
  const hero = pageHero({
    eyebrow: "Press & Media",
    title: `Earkart in the <em>news</em>.`,
    subtitle: "Company announcements, media coverage and press releases.",
    variant: "hero--inner hero--compact",
  });

  const grid = `<section class="section">
    <div class="container">
      ${sectionHeader({ eyebrow: "Press releases", title: "Latest announcements" })}
      <div class="grid grid--2 press-grid">${releases.map(pressReleaseCard).join("")}</div>
    </div>
  </section>`;

  const mediaContact = `<section class="section section--tint">
    <div class="container narrow">
      <div class="card media-contact reveal">
        <div>
          ${sectionHeader({ eyebrow: "Media contact", title: "For press enquiries" })}
          <p class="prose">For media and press queries, please reach our communications team.</p>
        </div>
        <ul class="media-contact__list">
          <li>${icons.mail}<a href="mailto:${contact.email}">${contact.email}</a></li>
          <li>${icons.phone}<a href="tel:${contact.phoneRaw}">${contact.phoneDisplay}</a></li>
          <li class="fineprint">[Add dedicated media contact name &amp; email.]</li>
        </ul>
      </div>
    </div>
  </section>`;

  return {
    path: "press-release.html",
    title: "Press Release & Media",
    description:
      "Earkart press releases, company announcements and media coverage, including IPO news and the OMNI remote-audiometry platform.",
    breadcrumbs: [{ label: "Press Release", href: "press-release.html" }],
    content: [hero, grid, mediaContact, ctaSection()].join("\n"),
  };
}
