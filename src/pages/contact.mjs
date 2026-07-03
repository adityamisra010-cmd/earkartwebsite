import {
  pageHero, sectionHeader, contactCard, contactForm, appointmentForm,
  mapPlaceholder, faqAccordion, button, eyebrow, imagePlaceholder,
} from "../lib/components.mjs";
import { faqSchema } from "../lib/layout.mjs";
import { icons } from "../lib/icons.mjs";
import { contact, cta } from "../data/site.mjs";
import { faqsContact } from "../data/faqs.mjs";

export default function contactPage() {
  const hero = pageHero({
    eyebrow: "Contact Us",
    title: `We're here to help you <em>hear better</em>.`,
    subtitle:
      "Book an appointment, ask a question, or reach out about partnership or investor matters. Choose whatever's easiest for you.",
    ctas: [
      { cta: cta.call, variant: "gold", opts: { icon: "phone" } },
      { cta: cta.whatsapp, variant: "secondary", opts: { icon: "whatsapp" } },
    ],
    variant: "hero--inner hero--compact",
  });

  const cards = `<section class="section section--tight">
    <div class="container">
      <div class="grid grid--3 contact-grid">
        ${contactCard({ icon: "phone", label: "Call us", value: contact.phoneDisplay, href: `tel:${contact.phoneRaw}` })}
        ${contactCard({ icon: "phone", label: "Toll-free", value: contact.tollFreeDisplay, note: "[Confirm toll-free number]" })}
        ${contactCard({ icon: "mail", label: "Email", value: contact.email, href: `mailto:${contact.email}` })}
        ${contactCard({ icon: "whatsapp", label: "WhatsApp", value: contact.whatsappDisplay, href: contact.whatsappUrl })}
        ${contactCard({ icon: "clinic", label: "Corporate office", value: contact.corporateOffice })}
        ${contactCard({ icon: "pin", label: "Registered office", value: contact.registeredOffice })}
      </div>
    </div>
  </section>`;

  const appointment = `<section class="section" id="appointment">
    <div class="container split split--form">
      <div class="split__content reveal">
        ${sectionHeader({ eyebrow: "Book an appointment", title: "Take the first step toward better hearing." })}
        <p class="prose">Share a few details and our team will help you find a convenient time and a nearby center. Prefer to talk? Call or WhatsApp us any time.</p>
        <ul class="tick-list">
          <li>${icons.check}<span>No-pressure, expert guidance</span></li>
          <li>${icons.check}<span>Comfortable, non-invasive hearing test</span></li>
          <li>${icons.check}<span>Support for you or an elderly parent</span></li>
        </ul>
        <div class="hero__ctas">
          ${button(cta.call, "secondary", { icon: "phone" })}
          ${button(cta.whatsapp, "ghost", { icon: "whatsapp" })}
        </div>
      </div>
      <div class="split__form reveal">${appointmentForm()}</div>
    </div>
  </section>`;

  const enquiry = `<section class="section section--tint" id="partner">
    <div class="container split split--form split--reverse">
      <div class="split__form reveal">${contactForm()}</div>
      <div class="split__content reveal">
        ${sectionHeader({ eyebrow: "General & partner enquiries", title: "Every question reaches the right team." })}
        <p class="prose">Whether you're a patient, a family member, a clinic interested in partnership, or an investor — choose your topic in the form and we'll route your message to the right people.</p>
        <ul class="tick-list">
          <li>${icons.handshake}<span><strong>Partner enquiry</strong> — clinics, dealers, ENTs &amp; audiologists</span></li>
          <li>${icons.chart}<span><strong>Investor query</strong> — see also our <a href="investor.html">investor resources</a></span></li>
          <li>${icons.headset}<span><strong>Service support</strong> — help with an existing device</span></li>
        </ul>
      </div>
    </div>
  </section>`;

  const map = `<section class="section">
    <div class="container">
      ${sectionHeader({ eyebrow: "Find us", title: "Our office", align: "center" })}
      ${mapPlaceholder("Map to Earkart corporate office, Noida")}
    </div>
  </section>`;

  const faq = `<section class="section section--tint">
    <div class="container narrow">
      ${sectionHeader({ eyebrow: "Questions", title: "Contact FAQs", align: "center" })}
      ${faqAccordion(faqsContact)}
    </div>
  </section>`;

  return {
    path: "contact.html",
    title: "Contact Us — Book an Appointment",
    description:
      "Contact Earkart to book a hearing appointment, ask a question, or reach us about partnership or investor matters. Call, WhatsApp, email or use our enquiry form.",
    breadcrumbs: [{ label: "Contact Us", href: "contact.html" }],
    jsonld: [faqSchema(faqsContact)],
    content: [hero, cards, appointment, enquiry, map, faq].join("\n"),
  };
}
