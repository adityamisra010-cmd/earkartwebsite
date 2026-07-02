import {
  pageHero, sectionHeader, featureCard, hearingAidTypeCard, productFamilyCard,
  button, imagePlaceholder, ctaSection, faqAccordion, investorDocCard, eyebrow,
} from "../lib/components.mjs";
import { faqSchema } from "../lib/layout.mjs";
import { icons } from "../lib/icons.mjs";
import { cta } from "../data/site.mjs";
import { hearingAidFamilies, hearingAidTypes, hearingAidModels } from "../data/products.mjs";
import { faqsHearingAids } from "../data/faqs.mjs";

export default function hearingAids() {
  const hero = pageHero({
    eyebrow: "Hearing Aids",
    title: `Modern hearing aids, <em>chosen with expertise</em>.`,
    subtitle:
      "Explore hearing aid styles and families — then let an Earkart audiologist help you choose the device that truly fits your hearing, comfort and budget.",
    ctas: [
      { cta: cta.book, variant: "gold", opts: { icon: "calendar" } },
      { cta: { label: "Download spec sheets", href: "#specs" }, variant: "secondary", opts: { icon: "download" } },
    ],
    variant: "hero--inner",
  });

  const what = `<section class="section">
    <div class="container split">
      <div class="split__content reveal">
        ${sectionHeader({ eyebrow: "The basics", title: "What hearing aids actually do." })}
        <p class="prose">A hearing aid is a precision device that amplifies and shapes sound to match your specific hearing profile — making speech clearer and everyday life easier. Modern devices do far more than make things louder: they reduce noise, manage feedback and adapt to different environments.</p>
        <p class="prose">The right device depends on your hearing test, your lifestyle and your comfort — which is exactly why expert guidance matters.</p>
      </div>
      <div class="split__media reveal">${imagePlaceholder("Close-up of a discreet hearing aid", "4x3", "img-ph--product")}</div>
    </div>
  </section>`;

  const audiologist = `<section class="section section--tint">
    <div class="container">
      ${sectionHeader({ eyebrow: "Expert guidance", title: "How audiologists help you choose.", align: "center", text: "An audiologist turns test results and lifestyle into the right recommendation — transparently." })}
      <div class="grid grid--3">
        ${[
          { icon: "chart", title: "Read your hearing profile", text: "Interpret your assessment across frequencies to match the right technology." },
          { icon: "shield", title: "Balance needs & budget", text: "Recommend options honestly — comfort and value, not just the top price." },
          { icon: "headset", title: "Fit & fine-tune", text: "Personalise settings and refine them over the first weeks of wear." },
        ].map(featureCard).join("")}
      </div>
    </div>
  </section>`;

  const featureChecklist = `<section class="section">
    <div class="container">
      ${sectionHeader({ eyebrow: "Features that matter", title: "What to look for in a hearing aid.", align: "center" })}
      <ul class="checklist">
        ${[
          ["chart", "Frequency channels", "More channels allow finer, more precise sound tuning."],
          ["headset", "Directional microphones", "Focus on the voice in front of you in noisy places."],
          ["soundwave", "Noise reduction", "Reduce background noise for clearer conversation."],
          ["shield", "Feedback management", "Prevent whistling for comfortable all-day wear."],
          ["bluetooth", "Bluetooth / wireless", "Stream calls and audio from your phone or TV."],
          ["check", "Water resistance", "Everyday protection against moisture and sweat."],
          ["volume", "Tinnitus maskers", "Optional soothing sound for tinnitus relief."],
        ].map(([ic, t, d]) => `<li class="checklist__item reveal"><span class="checklist__icon">${icons[ic]}</span><div><strong>${t}</strong><span>${d}</span></div></li>`).join("")}
      </ul>
    </div>
  </section>`;

  const types = `<section class="section section--tint" id="types">
    <div class="container">
      ${sectionHeader({ eyebrow: "Styles", title: "Types of hearing aids.", align: "center" })}
      <div class="grid grid--3">${hearingAidTypes.map(hearingAidTypeCard).join("")}</div>
    </div>
  </section>`;

  const families = `<section class="section">
    <div class="container">
      ${sectionHeader({ eyebrow: "Product families", title: "Earkart hearing aid families.", align: "center" })}
      <div class="grid grid--4">${hearingAidFamilies.map(productFamilyCard).join("")}</div>
    </div>
  </section>`;

  const specs = `<section class="section section--tint" id="specs">
    <div class="container">
      ${sectionHeader({ eyebrow: "Documentation", title: "Download spec sheets.", align: "center", text: "Specification sheets for each model. [Attach the correct PDF to each model — links are placeholders until then.]" })}
      <div class="doc-grid doc-grid--wide">
        ${hearingAidModels.map((m) => investorDocCard({ title: `${m.name} — Spec Sheet`, type: "PDF", date: "", href: m.pdf || "#" })).join("")}
      </div>
    </div>
  </section>`;

  const faq = `<section class="section">
    <div class="container narrow">
      ${sectionHeader({ eyebrow: "Questions", title: "Hearing aid FAQs", align: "center" })}
      ${faqAccordion(faqsHearingAids)}
    </div>
  </section>`;

  return {
    path: "hearing-aids.html",
    title: "Hearing Aids — Styles, Families & Guidance",
    description:
      "Explore hearing aid styles (RIC, BTE, ITE, ITC, CIC, IIC) and Earkart's EQFY, TINY, Fame and Radius families. Get expert audiologist guidance and download spec sheets.",
    breadcrumbs: [{ label: "Hearing Aids", href: "hearing-aids.html" }],
    jsonld: [faqSchema(faqsHearingAids)],
    content: [hero, what, audiologist, featureChecklist, types, families, specs, faq, ctaSection({ title: "Not sure which hearing aid is right? Let's find out together." })].join("\n"),
  };
}
