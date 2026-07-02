import {
  pageHero, sectionHeader, processSteps, button, mapPlaceholder,
  imagePlaceholder, ctaSection, partnerCTA, faqAccordion, eyebrow,
} from "../lib/components.mjs";
import { faqSchema } from "../lib/layout.mjs";
import { icons } from "../lib/icons.mjs";
import { cta } from "../data/site.mjs";
import { faqsCenters } from "../data/faqs.mjs";

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

  const finder = `<section class="section">
    <div class="container">
      ${sectionHeader({ eyebrow: "Center locator", title: "Search partner clinics", text: "Filter by city, state, service type or pin code. [Connect to live center directory.]", align: "center" })}
      <form class="card finder" data-form="finder" novalidate>
        <div class="finder__grid">
          <div class="field"><label class="label" for="f-city">City</label><input class="input" id="f-city" placeholder="e.g. Noida"></div>
          <div class="field"><label class="label" for="f-state">State</label>
            <select class="input select" id="f-state"><option value="">All states</option><option>Uttar Pradesh</option><option>Delhi</option><option>Maharashtra</option><option>[Add states]</option></select>
          </div>
          <div class="field"><label class="label" for="f-service">Service type</label>
            <select class="input select" id="f-service"><option value="">All services</option><option>Hearing test</option><option>Hearing aid fitting</option><option>Repair &amp; service</option><option>Remote audiometry</option></select>
          </div>
          <div class="field"><label class="label" for="f-pin">Pin code</label><input class="input" id="f-pin" placeholder="e.g. 201301"></div>
        </div>
        <button class="btn btn--primary" type="submit">${icons.search}<span>Search centers</span></button>
      </form>
      <div class="finder__layout">
        <div class="finder__map">${mapPlaceholder("Earkart partner center map")}</div>
        <div class="finder__results">
          ${[1,2,3].map((i) => `<article class="card center-card reveal">
            <div class="center-card__head"><h3 class="center-card__name">Earkart Partner Center ${i}</h3><span class="chip chip--soft">[Add city]</span></div>
            <p class="center-card__addr">${icons.pin}<span>[Add clinic address, city, pin code]</span></p>
            <p class="center-card__meta">${icons.clock}<span>[Add timings]</span></p>
            <div class="center-card__actions">
              ${button(cta.book, "secondary", {})}
              <a class="btn btn--text" href="${cta.call.href}">Call ${icons.arrowRight}</a>
            </div>
          </article>`).join("")}
          <p class="fineprint">[Clinic data shown as placeholders — connect to your centers directory.]</p>
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

export default function centers() {
  return {
    path: "earkart-centers.html",
    title: "Earkart Centers — Find a Hearing Care Clinic",
    description:
      "Find an Earkart partner hearing care clinic near you. Search by city, state, service type or pin code and book a hearing assessment with an expert audiologist.",
    breadcrumbs: [{ label: "Earkart Centers", href: "earkart-centers.html" }],
    jsonld: [faqSchema(faqsCenters)],
    content: centersContent(),
  };
}

// Preserve legacy /geo4.html route (Find OMNI Centers) with the same content
export function geo4() {
  return {
    path: "geo4.html",
    title: "Find OMNI Centers Near You",
    description:
      "Find OMNI-powered hearing care centers near you. Search Earkart's partner clinic network by city, state, service type or pin code.",
    breadcrumbs: [{ label: "Earkart Centers", href: "geo4.html" }],
    jsonld: [faqSchema(faqsCenters)],
    content: centersContent(),
  };
}
