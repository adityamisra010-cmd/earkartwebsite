import {
  pageHero, sectionHeader, featureCard, button, imagePlaceholder,
  ctaSection, faqAccordion, eyebrow,
} from "../lib/components.mjs";
import { faqSchema } from "../lib/layout.mjs";
import { icons } from "../lib/icons.mjs";
import { cta } from "../data/site.mjs";
import { faqsHearingLoss } from "../data/faqs.mjs";

export default function hearingLoss() {
  const hero = pageHero({
    eyebrow: "Hearing Loss",
    title: `Understanding hearing loss, <em>without the worry</em>.`,
    subtitle:
      "Hearing changes are common and manageable. Here's a calm, clear guide to the signs, the types of hearing loss, and when it's worth speaking to an expert.",
    ctas: [
      { cta: { label: "Book a hearing test", href: "contact.html#appointment" }, variant: "gold", opts: { icon: "calendar" } },
      { cta: cta.findCenter, variant: "secondary", opts: { icon: "pin" } },
    ],
    variant: "hero--inner",
  });

  const what = `<section class="section">
    <div class="container split">
      <div class="split__content reveal">
        ${sectionHeader({ eyebrow: "The basics", title: "What is hearing loss?" })}
        <p class="prose">Hearing loss means a reduced ability to hear sounds — often gradually, so it can be easy to miss at first. It can affect one or both ears and range from mild to profound.</p>
        <p class="prose">The good news: most hearing loss is manageable. With the right assessment and support, people continue to enjoy conversations, family and everyday life.</p>
      </div>
      <div class="split__media reveal">${imagePlaceholder("Warm family conversation illustration", "4x3")}</div>
    </div>
  </section>`;

  const signs = `<section class="section section--tint">
    <div class="container">
      ${sectionHeader({ eyebrow: "Signs to watch for", title: "You may need a hearing test if…", align: "center" })}
      <div class="grid grid--3">
        ${[
          { icon: "volume", title: "Turning up the volume", text: "Others feel the TV or phone is too loud for them." },
          { icon: "users", title: "Asking people to repeat", text: "You often need things said again, especially on the phone." },
          { icon: "soundwave", title: "Struggling in noise", text: "Following conversation in busy places feels tiring." },
          { icon: "headset", title: "Missing everyday sounds", text: "Doorbells, alarms or soft voices are harder to catch." },
          { icon: "clock", title: "Feeling more tired", text: "Concentrating to hear leaves you drained by evening." },
          { icon: "ear", title: "Ringing or buzzing", text: "You notice tinnitus alongside changes in hearing." },
        ].map(featureCard).join("")}
      </div>
    </div>
  </section>`;

  const typesData = [
    { icon: "ear", title: "Conductive", text: "Sound is blocked from reaching the inner ear — often due to earwax, infection or middle-ear issues. It can sometimes be treated medically." },
    { icon: "soundwave", title: "Sensorineural", text: "The most common type, involving the inner ear or hearing nerve — usually age or noise related. Typically managed well with hearing aids." },
    { icon: "wave", title: "Mixed", text: "A combination of conductive and sensorineural hearing loss, needing a tailored approach." },
  ];
  const types = `<section class="section">
    <div class="container">
      ${sectionHeader({ eyebrow: "Types", title: "The three main types of hearing loss.", align: "center" })}
      <div class="grid grid--3">${typesData.map(featureCard).join("")}</div>
    </div>
  </section>`;

  const why = `<section class="section section--navy">
    <div class="container split split--reverse">
      <div class="split__content reveal">
        ${sectionHeader({ eyebrow: "Why testing matters", title: "A hearing test is quick, comfortable and clarifying.", tone: "on-dark", text: "A proper assessment identifies the type and degree of hearing loss, so any recommendation is based on facts — not guesswork. It's non-invasive and painless." })}
        <ul class="feature-lines">
          <li>${icons.check}<div><strong>Clear picture of your hearing</strong><span>Across different frequencies.</span></div></li>
          <li>${icons.check}<div><strong>Right-sized recommendations</strong><span>Only what you actually need.</span></div></li>
          <li>${icons.check}<div><strong>Early action</strong><span>Protect communication and confidence.</span></div></li>
        </ul>
      </div>
      <div class="split__media reveal">${imagePlaceholder("Audiogram / hearing test visual", "4x3", "img-ph--dark")}</div>
    </div>
  </section>`;

  const help = `<section class="section">
    <div class="container">
      ${sectionHeader({ eyebrow: "How Earkart helps", title: "Support at every step.", align: "center" })}
      <div class="grid grid--4">
        ${[
          { icon: "chart", title: "Assessment", text: "A comfortable hearing test with an expert audiologist." },
          { icon: "shield", title: "Honest guidance", text: "Clear explanation of results and options." },
          { icon: "ear", title: "The right device", text: "Transparent selection to suit your hearing and budget." },
          { icon: "headset", title: "Ongoing care", text: "Fitting, fine-tuning and after-sales support." },
        ].map(featureCard).join("")}
      </div>
    </div>
  </section>`;

  const disclaimer = `<section class="section section--tint">
    <div class="container narrow">
      <div class="callout callout--info">${icons.shield}<p>This information is educational and is not a substitute for professional medical advice, diagnosis or treatment. Please consult a qualified audiologist or physician for any hearing concern.</p></div>
    </div>
  </section>`;

  const faq = `<section class="section">
    <div class="container narrow">
      ${sectionHeader({ eyebrow: "Questions", title: "Hearing loss FAQs", align: "center" })}
      ${faqAccordion(faqsHearingLoss)}
    </div>
  </section>`;

  return {
    path: "hearing-loss.html",
    title: "Hearing Loss — Signs, Types & When to Get Tested",
    description:
      "A calm, clear guide to hearing loss: the early signs, the types (conductive, sensorineural, mixed), why hearing testing matters and how Earkart can help. Book a hearing test.",
    breadcrumbs: [{ label: "Hearing Loss", href: "hearing-loss.html" }],
    jsonld: [faqSchema(faqsHearingLoss)],
    content: [hero, what, signs, types, why, help, disclaimer, faq, ctaSection({ title: "Concerned about your hearing? Book a comfortable test today." })].join("\n"),
  };
}
