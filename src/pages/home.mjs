import {
  pageHero, sectionHeader, trustStrip, featureCard, processSteps, statCard,
  productFamilyCard, hearingAidTypeCard, reviewCard, blogCard, partnerCTA,
  ctaSection, button, imagePlaceholder, eyebrow,
} from "../lib/components.mjs";
import { faqSchema } from "../lib/layout.mjs";
import { icons } from "../lib/icons.mjs";
import { cta } from "../data/site.mjs";
import { impactStats } from "../data/site.mjs";
import { hearingAidFamilies, hearingAidTypes } from "../data/products.mjs";
import { reviews } from "../data/reviews.mjs";
import { blogPosts } from "../data/blog.mjs";
import { investorSections, investorSnapshot } from "../data/investor.mjs";

export default function home() {
  const hero = pageHero({
    eyebrow: "Hearing care, reimagined for India",
    title: `Better hearing begins with the <em>right guidance</em>.`,
    subtitle:
      "Earkart helps you choose the right hearing solution — through expert audiology support, a trusted partner clinic network, OMNI-powered remote audiometry and modern hearing aid technology.",
    ctas: [
      { cta: cta.book, variant: "gold", opts: { icon: "calendar", lg: true } },
      { cta: cta.findCenter, variant: "secondary", opts: { icon: "pin", lg: true } },
      { cta: cta.partner, variant: "text", opts: { trailingArrow: true } },
    ],
    badges: [
      "Pan-India hearing care support",
      "Expert audiologist guidance",
      "OMNI-powered remote audiometry",
      "Modern hearing aids & accessories",
    ],
    media: `<div class="hero__figure">
      ${imagePlaceholder("Audiologist consultation — premium healthcare imagery", "4x5", "img-ph--hero")}
      <div class="hero__chip hero__chip--1">${icons.checkCircle}<span>Transparent, no-pressure guidance</span></div>
      <div class="hero__chip hero__chip--2">${icons.headset}<span>Tele-audiology support</span></div>
    </div>`,
    variant: "hero--home",
  });

  const trust = trustStrip([
    { icon: "users", label: "Expert Audiologists" },
    { icon: "soundwave", label: "Remote Audiometry" },
    { icon: "clinic", label: "Partner Clinics" },
    { icon: "shield", label: "Transparent Guidance" },
    { icon: "headset", label: "Fitting Support" },
    { icon: "check", label: "After-Sales Support" },
  ]);

  const about = `<section class="section">
    <div class="container split">
      <div class="split__media reveal">${imagePlaceholder("Earkart team / hearing care visual", "4x3")}</div>
      <div class="split__content reveal">
        ${sectionHeader({
          eyebrow: "About Earkart",
          title: "Digital-first hearing care, built on trust and technology.",
          text: "Earkart was founded to make hearing care accessible, transparent and technology-driven. We connect people with the right hearing solutions through certified partners, tele-audiology experts and globally recognised hearing aid brands — with honest guidance at every step.",
        })}
        <ul class="tick-list">
          <li>${icons.check}<span>Accessibility across India through a partner network</span></li>
          <li>${icons.check}<span>Transparent device selection — comfort, technology and budget</span></li>
          <li>${icons.check}<span>Technology-led, human-first hearing care</span></li>
        </ul>
        ${button({ label: "Learn more about Earkart", href: "about-us.html" }, "secondary", { trailingArrow: true })}
      </div>
    </div>
  </section>`;

  const howHelps = `<section class="section section--tint">
    <div class="container">
      ${sectionHeader({ eyebrow: "How Earkart helps", title: "A calm, guided path to better hearing.", text: "Four simple steps — with an expert beside you the whole way.", align: "center" })}
      ${processSteps([
        { title: "Understand your hearing needs", text: "Start with a proper hearing assessment and an honest conversation about your lifestyle and goals." },
        { title: "Get expert guidance", text: "An audiologist explains your options clearly — no jargon, no pressure to overspend." },
        { title: "Choose the right hearing aid", text: "Compare styles, technology and budget transparently, and select what genuinely suits you." },
        { title: "Fitting & after-care", text: "Precise fitting, fine-tuning over the first weeks, and dependable after-sales support." },
      ])}
    </div>
  </section>`;

  const omni = `<section class="section section--navy" id="omni">
    <div class="container split split--reverse">
      <div class="split__content reveal">
        ${sectionHeader({ eyebrow: "OMNI · Remote Audiometry", title: "Bringing hearing assessments closer to people.", text: "OMNI is Earkart's remote audiometry approach — designed to extend expert hearing assessment beyond big-city clinics and into communities across India.", tone: "on-dark" })}
        <ul class="feature-lines">
          <li>${icons.soundwave}<div><strong>Digital hearing assessment workflow</strong><span>A structured, guided screening process.</span></div></li>
          <li>${icons.clinic}<div><strong>Partner clinic support</strong><span>Equip local clinics to deliver hearing care.</span></div></li>
          <li>${icons.headset}<div><strong>Remote expert access</strong><span>Connect patients with audiology expertise.</span></div></li>
          <li>${icons.chart}<div><strong>Faster patient screening</strong><span>Scalable hearing care infrastructure.</span></div></li>
        </ul>
        <div class="hero__ctas">
          ${button({ label: "Explore the partner network", href: "contact-us.html#partner" }, "gold", { trailingArrow: true })}
          <a class="btn btn--text btn--text-light" href="#omni-patent">OMNI patent certificate ${icons.arrowRight}</a>
        </div>
        <p class="fineprint">[Technical claims to be confirmed. Placeholder copy where exact specifications are pending.]</p>
      </div>
      <div class="split__media reveal">${imagePlaceholder("OMNI remote audiometry workflow", "4x3", "img-ph--dark")}</div>
    </div>
  </section>`;

  const types = `<section class="section" id="types">
    <div class="container">
      ${sectionHeader({ eyebrow: "Hearing aid styles", title: "Find the style that fits your life.", text: "From near-invisible in-canal devices to powerful behind-the-ear models — here's how the main styles compare.", align: "center" })}
      <div class="grid grid--3">${hearingAidTypes.map(hearingAidTypeCard).join("")}</div>
      <div class="section__cta">${button(cta.exploreAids, "primary", { icon: "ear" })}</div>
    </div>
  </section>`;

  const families = `<section class="section section--tint">
    <div class="container">
      ${sectionHeader({ eyebrow: "Featured hearing aids", title: "Hearing aid families, chosen with you.", text: "A premium, consultation-led range — reviewed with an audiologist rather than sold from a shelf.", align: "center" })}
      <div class="grid grid--4">${hearingAidFamilies.map(productFamilyCard).join("")}</div>
    </div>
  </section>`;

  const why = `<section class="section">
    <div class="container">
      ${sectionHeader({ eyebrow: "Why choose Earkart", title: "Hearing care that earns your trust.", align: "center" })}
      <div class="grid grid--3">
        ${[
          { icon: "shield", title: "Transparent device selection", text: "Choose based on comfort, technology and budget — never pushed toward the priciest option." },
          { icon: "globe", title: "Trusted hearing aid brands", text: "Access to a range of globally recognised hearing aid brands and Earkart's own devices." },
          { icon: "headset", title: "Tele-audiology support", text: "Expert help remotely, from trials and fittings to ongoing fine-tuning." },
          { icon: "clinic", title: "Partner clinic network", text: "Hearing care closer to home through a growing network of partner clinics." },
          { icon: "check", title: "Upgrade & after-sales support", text: "Dependable service, adjustments and upgrade guidance after your purchase." },
          { icon: "users", title: "Family-friendly guidance", text: "Warm, patient support for seniors and the families who care for them." },
        ].map(featureCard).join("")}
      </div>
    </div>
  </section>`;

  const impact = `<section class="section section--navy impact">
    <div class="container">
      ${sectionHeader({ eyebrow: "Our impact", title: "Growing hearing care access across India.", text: "Placeholder figures shown below — to be confirmed before publishing.", align: "center", tone: "on-dark" })}
      <div class="stats stats--6">${impactStats.map(statCard).join("")}</div>
    </div>
  </section>`;

  const reviewsSec = `<section class="section section--tint">
    <div class="container">
      ${sectionHeader({ eyebrow: "In their words", title: "Families who found clearer hearing.", align: "center" })}
      <div class="grid grid--4 reviews-grid">${reviews.map(reviewCard).join("")}</div>
    </div>
  </section>`;

  const education = `<section class="section">
    <div class="container split">
      <div class="split__content reveal">
        ${sectionHeader({ eyebrow: "Hearing awareness", title: "Understanding hearing loss, without the worry.", text: "Hearing changes are common and manageable. Learn the signs, the types of hearing loss, and when it's worth speaking to an expert — in plain, reassuring language." })}
        <ul class="tick-list">
          <li>${icons.check}<span>What is hearing loss?</span></li>
          <li>${icons.check}<span>Conductive, sensorineural &amp; mixed hearing loss</span></li>
          <li>${icons.check}<span>Why hearing testing matters</span></li>
          <li>${icons.check}<span>When to consult an expert</span></li>
        </ul>
        ${button(cta.learnLoss, "secondary", { trailingArrow: true })}
      </div>
      <div class="split__media reveal">${imagePlaceholder("Hearing awareness illustration", "4x3")}</div>
    </div>
  </section>`;

  const featured = blogPosts.find((p) => p.featured) || blogPosts[0];
  const rest = blogPosts.filter((p) => p !== featured).slice(0, 2);
  const blog = `<section class="section section--tint">
    <div class="container">
      ${sectionHeader({ eyebrow: "Resources", title: "Guides & articles for better hearing.", align: "center" })}
      <div class="grid grid--3 blog-grid">
        ${blogCard(featured, { featured: true })}
        ${rest.map((p) => blogCard(p)).join("")}
      </div>
      <div class="section__cta">${button({ label: "Read the blog", href: "blog.html" }, "secondary", { trailingArrow: true })}</div>
    </div>
  </section>`;

  const investor = `<section class="section investor-preview">
    <div class="container">
      ${sectionHeader({ eyebrow: "Investor relations", title: "A listed company, committed to transparency.", text: "Board information, financials, IPO documents, governance and compliance — organised clearly for shareholders.", align: "center" })}
      <div class="investor-snapshot">
        ${investorSnapshot.map((s) => `<div class="investor-snapshot__item reveal"><span class="investor-snapshot__value">${s.value}</span><span class="investor-snapshot__label">${s.label}</span></div>`).join("")}
      </div>
      <div class="grid grid--4 investor-preview__grid">
        ${investorSections.slice(0, 8).map((s) => `<a class="card investor-tile reveal" href="${s.href}">${icons.document}<span class="investor-tile__title">${s.title}</span><span class="investor-tile__arrow" aria-hidden="true">${icons.arrowRight}</span></a>`).join("")}
      </div>
      <div class="section__cta">${button(cta.investors, "primary", { icon: "chart" })}</div>
    </div>
  </section>`;

  const content = [
    hero, trust, about, howHelps, omni, types, families, why,
    partnerCTA(), impact, reviewsSec, education, blog, investor, ctaSection(),
  ].join("\n");

  return {
    path: "index.html",
    title: "Premium Hearing Care Across India",
    description:
      "Earkart is India's digital-first hearing care platform — expert audiology, modern hearing aids, OMNI-powered remote audiometry and a trusted partner clinic network. Book an appointment today.",
    jsonld: [faqSchema([])].filter(Boolean),
    content,
  };
}
