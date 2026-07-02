import {
  pageHero, sectionHeader, button, ctaSection, imagePlaceholder,
  investorDocCard, eyebrow,
} from "../lib/components.mjs";
import { icons } from "../lib/icons.mjs";
import { cta } from "../data/site.mjs";
import { otherProducts } from "../data/products.mjs";

function otherProductCard(p) {
  return `<article class="card oproduct reveal">
    ${imagePlaceholder(`${p.name} image`, "4x3", "img-ph--product")}
    <div class="oproduct__body">
      <span class="chip chip--soft">${p.category}</span>
      <h3 class="oproduct__name">${p.name}</h3>
      <p class="oproduct__desc">${p.blurb}</p>
      <p class="oproduct__meta">${icons.check}<span>${p.suitableFor}</span></p>
      <div class="oproduct__actions">
        <a class="btn btn--secondary" href="product-${p.slug}.html">View details</a>
        <a class="btn btn--text" href="contact-us.html#enquiry">Enquire ${icons.arrowRight}</a>
      </div>
    </div>
  </article>`;
}

export default function otherProductsPage() {
  const hero = pageHero({
    eyebrow: "Other Products",
    title: `Assistive & healthcare <em>support products</em>.`,
    subtitle:
      "Beyond hearing aids, Earkart offers educational development kits, clinical equipment, component kits, mobility aids and accessories.",
    ctas: [
      { cta: { label: "Enquire now", href: "contact-us.html#enquiry" }, variant: "gold", opts: { icon: "mail" } },
    ],
    variant: "hero--inner hero--compact",
  });

  const grid = `<section class="section">
    <div class="container">
      ${sectionHeader({ eyebrow: "Product range", title: "Explore other products", align: "center" })}
      <div class="grid grid--3">${otherProducts.map(otherProductCard).join("")}</div>
    </div>
  </section>`;

  const specs = `<section class="section section--tint">
    <div class="container">
      ${sectionHeader({ eyebrow: "Documentation", title: "Download spec sheets", align: "center", text: "[Attach the correct PDF to each product — links are placeholders until then.]" })}
      <div class="doc-grid doc-grid--wide">
        ${otherProducts.map((p) => investorDocCard({ title: `${p.name} — Spec Sheet`, type: "PDF", date: "", href: p.pdf || "#" })).join("")}
      </div>
    </div>
  </section>`;

  return {
    path: "other-products.html",
    title: "Other Products — Kits, Equipment & Accessories",
    description:
      "Earkart's other products: TLM & MSIED educational kits, Hearing Aid Test System, LH 71 / LH 72 BTE component kits, adjustable walker and zinc-air batteries.",
    breadcrumbs: [{ label: "Other Products", href: "other-products.html" }],
    content: [hero, grid, specs, ctaSection({ title: "Need more information on any product?" })].join("\n"),
  };
}
