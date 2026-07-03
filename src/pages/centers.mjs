import {
  pageHero, sectionHeader, processSteps, button, mapPlaceholder,
  imagePlaceholder, ctaSection, partnerCTA, faqAccordion, eyebrow, esc,
} from "../lib/components.mjs";
import { faqSchema } from "../lib/layout.mjs";
import { icons } from "../lib/icons.mjs";
import { cta, site } from "../data/site.mjs";
import { faqsCenters } from "../data/faqs.mjs";
import { centers as centerDirectory, centerStates, serviceTypes, centersSchema } from "../data/centers.mjs";

function centersContent() {
  const hero = pageHero({
    eyebrow: "Earkart Centers",
    title: `Find a hearing care <em>partner clinic</em> near you.`,
    subtitle:
      "Earkart works with a growing network of partner clinics across India, so expert hearing care is closer to home. Search by location and book a visit.",
    ctas: [
      { cta: cta.book, variant: "gold", opts: { icon: "calendar" } },
      { cta: cta.call, variant: "secondary", opts: { icon: "phone" } },
    ],
    variant: "hero--inner",
  });

  const centerCard = (c) => `<article class="card center-card reveal" data-center
      data-city="${esc(c.city.toLowerCase())}" data-state="${esc(c.state)}"
      data-pin="${esc(c.pin)}" data-services="${esc(c.services.join("|"))}">
    <div class="center-card__head"><h3 class="center-card__name">${esc(c.name)}</h3><span class="chip chip--soft">${esc(c.city)}</span></div>
    <p class="center-card__addr">${icons.pin}<span>${esc(c.address)}</span></p>
    <p class="center-card__meta">${icons.clock}<span>${esc(c.timings)}</span></p>
    <p class="center-card__meta">${icons.check}<span>${esc(c.services.join(" · "))}</span></p>
    <div class="center-card__actions">
      ${button(cta.book, "secondary", {})}
      <a class="btn btn--text" href="${c.phone ? `tel:${esc(c.phone)}` : cta.call.href}">Call ${icons.arrowRight}</a>
    </div>
  </article>`;

  const finder = `<section class="section">
    <div class="container">
      ${sectionHeader({ eyebrow: "Center locator", title: "Search partner clinics", text: "Filter by city, state, service type or pin code.", align: "center" })}
      <form class="card finder" data-form="finder" novalidate>
        <div class="finder__grid">
          <div class="field"><label class="label" for="f-city">City</label><input class="input" id="f-city" name="city" placeholder="e.g. Noida"></div>
          <div class="field"><label class="label" for="f-state">State</label>
            <select class="input select" id="f-state" name="state"><option value="">All states</option>${centerStates.map((s) => `<option>${esc(s)}</option>`).join("")}</select>
          </div>
          <div class="field"><label class="label" for="f-service">Service type</label>
            <select class="input select" id="f-service" name="service"><option value="">All services</option>${serviceTypes.map((s) => `<option>${esc(s)}</option>`).join("")}</select>
          </div>
          <div class="field"><label class="label" for="f-pin">Pin code</label><input class="input" id="f-pin" name="pin" inputmode="numeric" placeholder="e.g. 201301"></div>
        </div>
        <button class="btn btn--primary" type="submit">${icons.search}<span>Search centers</span></button>
        <p class="form__notice" data-finder-notice role="status" hidden></p>
      </form>
      <div class="finder__layout">
        <div class="finder__map">${mapPlaceholder("Earkart partner center map")}</div>
        <div class="finder__results" data-center-results>
          ${centerDirectory.map(centerCard).join("")}
          <p class="card center-card center-card--empty" data-center-empty hidden>No partner centers match your search yet — try widening the filters, or <a href="${cta.call.href}">call us</a> and we'll help you find the nearest center.</p>
          <p class="fineprint">[Clinic entries are placeholders — add real partner centers in src/data/centers.mjs.]</p>
        </div>
      </div>
    </div>
  </section>`;

  const how = `<section class="section section--tint">
    <div class="container">
      ${sectionHeader({ eyebrow: "How it works", title: "Booking an appointment is simple.", align: "center" })}
      ${processSteps([
        { title: "Find a center", text: "Search for a partner clinic near you or contact our team for help." },
        { title: "Book a time", text: "Choose a convenient slot online, by phone or on WhatsApp." },
        { title: "Get assessed", text: "Visit for a comfortable hearing assessment with an audiologist." },
        { title: "Fitting & follow-up", text: "If you choose a device, receive precise fitting and ongoing support." },
      ])}
    </div>
  </section>`;

  const faq = `<section class="section">
    <div class="container narrow">
      ${sectionHeader({ eyebrow: "Good to know", title: "Appointment FAQs", align: "center" })}
      ${faqAccordion(faqsCenters)}
    </div>
  </section>`;

  return [hero, finder, how, faq, partnerCTA(), ctaSection({ title: "Find your nearest Earkart center." })].join("\n");
}

// PRIMARY centers page — geo4.html is the real, live URL (submitted on
// filings), so it is canonical and is what the whole site links to.
export function geo4() {
  return {
    path: "geo4.html",
    title: "Find OMNI Centers Near You",
    description:
      "Find OMNI-powered hearing care centers near you. Search Earkart's partner clinic network by city, state, service type or pin code.",
    breadcrumbs: [{ label: "Earkart Centers", href: "geo4.html" }],
    jsonld: [faqSchema(faqsCenters), ...centersSchema(site.domain)],
    content: centersContent(),
  };
}

// Additive alias kept for any earlier internal links; canonicals to geo4.html.
export default function centers() {
  return {
    path: "earkart-centers.html",
    canonical: "geo4.html",
    title: "Earkart Centers — Find a Hearing Care Clinic",
    description:
      "Find an Earkart partner hearing care clinic near you. Search by city, state, service type or pin code and book a hearing assessment with an expert audiologist.",
    breadcrumbs: [{ label: "Earkart Centers", href: "geo4.html" }],
    jsonld: [faqSchema(faqsCenters)],
    content: centersContent(),
  };
}
