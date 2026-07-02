import {
  pageHero, sectionHeader, featureCard, processSteps, button,
  imagePlaceholder, ctaSection, partnerCTA, eyebrow,
} from "../lib/components.mjs";
import { icons } from "../lib/icons.mjs";
import { cta } from "../data/site.mjs";

export default function about() {
  const hero = pageHero({
    eyebrow: "About Earkart",
    title: `Making hearing care <em>accessible, transparent</em> and human.`,
    subtitle:
      "Earkart is a technology-led hearing care platform connecting people with the right hearing solutions — through expert audiology, a trusted partner network and modern devices.",
    ctas: [
      { cta: cta.book, variant: "gold", opts: { icon: "calendar" } },
      { cta: cta.partner, variant: "secondary", opts: { icon: "handshake" } },
    ],
    variant: "hero--inner",
  });

  const story = `<section class="section">
    <div class="container split">
      <div class="split__content reveal">
        ${sectionHeader({ eyebrow: "Our story", title: "Founded to close the gap in hearing care." })}
        <p class="prose">Earkart began with a simple observation: too many families struggle to get honest, expert hearing care close to home. Choosing a hearing aid was often confusing, opaque and pressured.</p>
        <p class="prose">We set out to change that — building a digital-first platform that combines expert audiology, transparent device selection and a growing network of partner clinics, supported by remote audiometry and tele-consultation. <em>[Expand with verified company history and milestones.]</em></p>
      </div>
      <div class="split__media reveal">${imagePlaceholder("Earkart founding story visual", "4x3")}</div>
    </div>
  </section>`;

  const leadership = `<section class="section section--tint">
    <div class="container split split--reverse">
      <div class="split__content reveal">
        ${sectionHeader({ eyebrow: "Leadership", title: "Experienced leadership, patient-first values." })}
        <p class="prose">Earkart is led by a team combining healthcare, technology and business experience, guided by a board that brings governance and strategic depth. Meet the people behind the company on our board page.</p>
        <p class="prose"><em>[Add verified founder and leadership profiles.]</em></p>
        ${button({ label: "View Board of Directors", href: "board-details.html" }, "secondary", { trailingArrow: true })}
      </div>
      <div class="split__media reveal">${imagePlaceholder("Leadership portrait placeholder", "4x3", "img-ph--portrait")}</div>
    </div>
  </section>`;

  const mission = `<section class="section">
    <div class="container">
      ${sectionHeader({ eyebrow: "Our mission", title: "Better hearing, better living — for everyone.", align: "center", text: "We believe expert hearing care should be accessible, honest and unintimidating, wherever you live." })}
      <div class="grid grid--3">
        ${[
          { icon: "globe", title: "Accessibility", text: "Extend expert hearing care beyond big cities through a partner network and remote audiometry." },
          { icon: "shield", title: "Transparency", text: "Guide device selection by comfort, technology and budget — never by pressure." },
          { icon: "soundwave", title: "Technology", text: "Use OMNI-powered remote audiometry and tele-audiology to scale quality care." },
        ].map(featureCard).join("")}
      </div>
    </div>
  </section>`;

  const different = `<section class="section section--tint">
    <div class="container">
      ${sectionHeader({ eyebrow: "What makes us different", title: "Technology-led, human-first.", align: "center" })}
      <div class="grid grid--3">
        ${[
          { icon: "headset", title: "Expert audiology & support", text: "Guidance from trials and fittings through to after-sales service." },
          { icon: "globe", title: "Globally recognised brands", text: "Access to trusted hearing aid brands alongside Earkart's own devices." },
          { icon: "soundwave", title: "Remote support", text: "Tele-consultation and OMNI remote audiometry for care that travels." },
          { icon: "check", title: "After-sales & upgrades", text: "Ongoing service and upgrade guidance, not a one-time sale." },
          { icon: "clinic", title: "Partner network", text: "A scalable clinic network bringing care closer to communities." },
          { icon: "users", title: "Family-friendly", text: "Warm, patient care for seniors and their families." },
        ].map(featureCard).join("")}
      </div>
    </div>
  </section>`;

  const techHuman = `<section class="section section--navy">
    <div class="container split">
      <div class="split__media reveal">${imagePlaceholder("Technology + human care", "4x3", "img-ph--dark")}</div>
      <div class="split__content reveal">
        ${sectionHeader({ eyebrow: "Technology + human care", title: "The best of both worlds.", tone: "on-dark", text: "Technology extends our reach; people make it caring. OMNI-powered remote audiometry and tele-audiology bring assessments closer to patients, while expert audiologists ensure every decision is right for the individual." })}
        <ul class="feature-lines">
          <li>${icons.soundwave}<div><strong>OMNI remote audiometry</strong><span>Assessment closer to patients.</span></div></li>
          <li>${icons.headset}<div><strong>Tele-audiology</strong><span>Expert support from anywhere.</span></div></li>
          <li>${icons.shield}<div><strong>Trust & governance</strong><span>A listed company committed to transparency.</span></div></li>
        </ul>
      </div>
    </div>
  </section>`;

  const governance = `<section class="section">
    <div class="container">
      ${sectionHeader({ eyebrow: "Trust & governance", title: "Built on accountability.", align: "center", text: "As a listed company, Earkart maintains clear corporate governance and transparent disclosures for its shareholders and stakeholders." })}
      <div class="section__cta">${button(cta.investors, "primary", { icon: "chart" })}</div>
    </div>
  </section>`;

  return {
    path: "about-us.html",
    title: "About Us",
    description:
      "Earkart is a technology-led, digital-first hearing care platform making expert audiology, modern hearing aids and remote audiometry accessible and transparent across India.",
    breadcrumbs: [{ label: "About Us", href: "about-us.html" }],
    content: [hero, story, leadership, mission, different, techHuman, governance, partnerCTA(), ctaSection()].join("\n"),
  };
}
