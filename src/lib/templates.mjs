// ============================================================================
// Earkart — Templates for data-driven pages
// ============================================================================
import {
  pageHero, sectionHeader, button, ctaSection, irCtaSection, imagePlaceholder,
  investorDocCard, documentDownloadGrid, faqAccordion, eyebrow, esc, docYear,
} from "./components.mjs";
import { faqSchema } from "./layout.mjs";
import { icons } from "./icons.mjs";
import { cta } from "../data/site.mjs";
import { placeholderSpecRows } from "../data/products.mjs";

// ---------------------------------------------------------------------------
// Hearing aid product / family spec page
// ---------------------------------------------------------------------------
export function hearingAidProductPage(model, { family = null, siblings = [], crossFamily = false } = {}) {
  const name = model.name;
  // "Family overview" page (e.g. product-radius.html) vs a variant page
  // (e.g. product-radius-p-16.html) — variants still inherit family features.
  const isFamily = !!family && family.slug === model.slug;

  // Spec download renders as a real button only once a PDF is attached;
  // otherwise an explicit pending state (never a dead "#" link).
  const specBtn = (label) => model.pdf
    ? button({ label, href: model.pdf }, "secondary", { icon: "download" })
    : `<span class="btn btn--secondary btn--disabled">${icons.clock}<span>Spec sheet coming soon</span></span>`;

  // Family overview pages show the family's feature list; individual variant
  // pages use generic model-safe benefits so range-level claims (e.g.
  // "8/12/16 channel options") never contradict a single model's spec table.
  const genericBenefits = [
    "Clear, comfortable everyday listening",
    "Discreet, modern design",
    "Personalised by an expert audiologist",
    "Precise fitting and fine-tuning",
    "Dependable after-sales support",
    "Guidance without pressure to overspend",
  ];
  const benefits = (isFamily && family?.features ? family.features : genericBenefits).slice(0, 6);

  // Real transcribed spec sheet when available; placeholder table otherwise.
  const hasRealSpecs = Array.isArray(model.specs) && model.specs.length > 0;
  const specRows = hasRealSpecs
    ? model.specs
    : [
        { label: "Style / Form Factor", value: model.type },
        { label: "Channels", value: model.channels && model.channels !== "[Confirm]" ? model.channels : "[Confirm specification]" },
        { label: "Suitable For", value: model.suitableFor },
        ...placeholderSpecRows.slice(2),
      ];
  const specNote = hasRealSpecs
    ? "Specifications as per the official earKART technical specification sheet. Specifications may be updated; please confirm at consultation."
    : "[Specifications are placeholders — confirm against the official spec sheet / PDF.]";

  const hero = `<section class="hero hero--inner hero--product">
    <div class="hero__bg" aria-hidden="true"></div>
    <div class="container hero__inner">
      <div class="hero__content reveal">
        ${eyebrow(isFamily ? `${name} family` : `${family?.name || "Hearing Aid"} · ${model.type}`)}
        <h1 class="hero__title">${esc(name)}</h1>
        <p class="hero__subtitle">${esc(model.blurb)}</p>
        <div class="hero__ctas">
          ${button(cta.book, "gold", { icon: "calendar" })}
          ${specBtn("Download spec sheet")}
        </div>
        <p class="chip chip--soft">${icons.check}<span>Suitable for: ${esc(model.suitableFor)}</span></p>
      </div>
      <div class="hero__media reveal">${imagePlaceholder(`${name} product image`, "4x3", "img-ph--product")}</div>
    </div>
  </section>`;

  const benefitsSec = `<section class="section">
    <div class="container">
      ${sectionHeader({ eyebrow: "Key benefits", title: `Why people choose ${esc(name)}`, align: "center" })}
      <div class="grid grid--3">
        ${benefits.map((b) => `<div class="card feature reveal"><span class="feature__icon">${icons.check}</span><p class="feature__text">${esc(b)}</p></div>`).join("")}
      </div>
    </div>
  </section>`;

  const specsSec = `<section class="section section--tint">
    <div class="container narrow">
      ${sectionHeader({ eyebrow: "Technical specification", title: "Specifications" })}
      <table class="spec-table">
        <tbody>
          ${specRows.map((r) => `<tr><th scope="row">${esc(r.label)}</th><td>${esc(r.value)}</td></tr>`).join("")}
        </tbody>
      </table>
      <p class="fineprint">${specNote}</p>
      <div class="section__cta">${specBtn("Download full spec sheet")}</div>
    </div>
  </section>`;

  const suitable = `<section class="section">
    <div class="container split">
      <div class="split__content reveal">
        ${sectionHeader({ eyebrow: "Is it right for you?", title: "Who it may suit" })}
        <p class="prose">${esc(name)} may suit people with <strong>${esc(model.suitableFor.toLowerCase())}</strong>. The best way to know is a hearing assessment — an audiologist will confirm whether this device fits your hearing profile, lifestyle and budget.</p>
        <ul class="tick-list">
          <li>${icons.check}<span>Personalised fitting &amp; fine-tuning</span></li>
          <li>${icons.check}<span>Honest, no-pressure recommendation</span></li>
          <li>${icons.check}<span>Ongoing after-sales support</span></li>
        </ul>
        ${button(cta.book, "primary", { icon: "calendar" })}
      </div>
      <div class="split__media reveal">${imagePlaceholder(`${name} lifestyle image`, "4x3")}</div>
    </div>
  </section>`;

  const relatedTitle = crossFamily
    ? "Explore other hearing aid families"
    : (isFamily ? `${esc(name)} variants` : `More from the ${esc(family?.name || "")} range`);
  const related = siblings.length ? `<section class="section section--tint">
    <div class="container">
      ${sectionHeader({ eyebrow: "Related products", title: relatedTitle, align: "center" })}
      <div class="grid grid--4">
        ${siblings.slice(0, 8).map((s) => `<a class="card related-card reveal" href="product-${s.slug}.html">
          ${imagePlaceholder(`${s.name}`, "4x3", "img-ph--product")}
          <span class="related-card__name">${esc(s.name)}</span>
          <span class="related-card__type">${esc(s.type)}</span>
          <span class="related-card__arrow" aria-hidden="true">${icons.arrowRight}</span>
        </a>`).join("")}
      </div>
      <div class="section__cta">${button(cta.exploreAids, "secondary", { trailingArrow: true })}</div>
    </div>
  </section>` : "";

  return {
    path: `product-${model.slug}.html`,
    title: `${name} — Hearing Aid`,
    description: `${name}: ${model.blurb} Suitable for ${model.suitableFor.toLowerCase()}. Book a consultation with an Earkart audiologist and download the spec sheet.`,
    breadcrumbs: [{ label: "Hearing Aids", href: "hearing-aids.html" }, { label: name, href: `product-${model.slug}.html` }],
    // Minimal Product schema — name/brand/category only. No offers, specs or
    // ratings until real values are verified.
    jsonld: [{
      "@context": "https://schema.org",
      "@type": "Product",
      name,
      description: model.blurb,
      brand: { "@type": "Brand", name: "Earkart" },
      category: "Hearing aid",
    }],
    content: [hero, benefitsSec, specsSec, suitable, related, ctaSection({ title: `Interested in ${name}? Book a consultation.` })].join("\n"),
  };
}

// ---------------------------------------------------------------------------
// Other product spec/download page
// ---------------------------------------------------------------------------
export function otherProductPage(product, { related = [] } = {}) {
  const name = product.name;
  const hero = `<section class="hero hero--inner hero--product">
    <div class="hero__bg" aria-hidden="true"></div>
    <div class="container hero__inner">
      <div class="hero__content reveal">
        ${eyebrow(product.category)}
        <h1 class="hero__title">${esc(name)}</h1>
        <p class="hero__subtitle">${esc(product.blurb)}</p>
        <div class="hero__ctas">
          ${button({ label: "Enquire now", href: "contact.html#enquiry" }, "gold", { icon: "mail" })}
          ${product.pdf
            ? button({ label: "Download spec sheet", href: product.pdf }, "secondary", { icon: "download" })
            : `<span class="btn btn--secondary btn--disabled">${icons.clock}<span>Spec sheet coming soon</span></span>`}
        </div>
      </div>
      <div class="hero__media reveal">${imagePlaceholder(`${name} image`, "4x3", "img-ph--product")}</div>
    </div>
  </section>`;

  const detail = `<section class="section">
    <div class="container narrow">
      ${sectionHeader({ eyebrow: "Overview", title: name })}
      <p class="prose">${esc(product.blurb)}</p>
      <table class="spec-table">
        <tbody>
          <tr><th scope="row">Category</th><td>${esc(product.category)}</td></tr>
          <tr><th scope="row">Suitable For</th><td>${esc(product.suitableFor)}</td></tr>
          <tr><th scope="row">Specifications</th><td>[Confirm specification]</td></tr>
          <tr><th scope="row">Documentation</th><td>${product.pdf ? "Spec sheet available" : "[Attach spec sheet PDF]"}</td></tr>
        </tbody>
      </table>
      <p class="fineprint">[Details are placeholders — confirm against official documentation.]</p>
      <div class="section__cta">${button({ label: "Enquire about this product", href: "contact.html#enquiry" }, "primary", { icon: "mail" })}</div>
    </div>
  </section>`;

  const relatedSec = related.length ? `<section class="section section--tint">
    <div class="container">
      ${sectionHeader({ eyebrow: "Related products", title: "You may also need", align: "center" })}
      <div class="grid grid--4">
        ${related.slice(0, 4).map((s) => `<a class="card related-card reveal" href="product-${s.slug}.html">
          ${imagePlaceholder(s.name, "4x3", "img-ph--product")}
          <span class="related-card__name">${esc(s.name)}</span>
          <span class="related-card__type">${esc(s.category)}</span>
        </a>`).join("")}
      </div>
    </div>
  </section>` : "";

  return {
    path: `product-${product.slug}.html`,
    title: `${name}`,
    description: `${name}: ${product.blurb} ${product.suitableFor}. Enquire with Earkart.`,
    breadcrumbs: [{ label: "Other Products", href: "other-products.html" }, { label: name, href: `product-${product.slug}.html` }],
    jsonld: [{
      "@context": "https://schema.org",
      "@type": "Product",
      name,
      description: product.blurb,
      brand: { "@type": "Brand", name: "Earkart" },
      category: product.category,
    }],
    content: [hero, detail, relatedSec, ctaSection({ title: `Need more information on ${name}?` })].join("\n"),
  };
}

// ---------------------------------------------------------------------------
// Investor sub-page (document listing)
// ---------------------------------------------------------------------------
export function investorSubPage(key, data) {
  const hero = pageHero({
    eyebrow: "Investor Relations",
    title: esc(data.title),
    subtitle: esc(data.intro),
    variant: "hero--inner hero--compact",
  });

  // Year / type filter chips — rendered only when they can actually narrow
  // anything (≥2 distinct real years, or ≥2 distinct document types).
  const allDocs = data.groups.flatMap((g) => g.docs);
  const years = [...new Set(allDocs.map((d) => docYear(d.date)).filter((y) => y !== "pending"))].sort().reverse();
  const types = [...new Set(allDocs.map((d) => d.type || "PDF"))];
  const chipRow = (group, label, values) => `<div class="doc-filters" data-doc-filters="${group}" aria-label="Filter documents by ${label}">
    <span class="doc-filters__label">${label}</span>
    <button class="chip chip--filter is-active" type="button" data-filter="all" aria-pressed="true">All</button>
    ${values.map((v) => `<button class="chip chip--filter" type="button" data-filter="${esc(v)}" aria-pressed="false">${esc(v)}</button>`).join("")}
  </div>`;
  const filters = [
    years.length >= 2 ? chipRow("year", "Year", years) : "",
    types.length >= 2 ? chipRow("type", "Type", types) : "",
  ].join("");

  const docs = `<section class="section">
    <div class="container">
      ${filters}
      ${documentDownloadGrid(data.groups)}
      <p class="card center-card--empty" data-docs-empty hidden>No documents match the selected filters.</p>
      <p class="fineprint">[Document links marked "Coming soon" are placeholders — attach the correct file to enable download.]</p>
    </div>
  </section>`;

  const nav = `<section class="section section--tint">
    <div class="container narrow center">
      ${button({ label: "Back to Investor overview", href: "investor.html" }, "secondary", { trailingArrow: true })}
    </div>
  </section>`;

  return {
    path: `${key}.html`,
    title: `${data.title} — Investor`,
    description: `${data.title}: ${data.intro}`,
    breadcrumbs: [{ label: "Investor", href: "investor.html" }, { label: data.title, href: `${key}.html` }],
    content: [hero, docs, nav, irCtaSection(`${key}.html`)].join("\n"),
  };
}

// ---------------------------------------------------------------------------
// Blog post detail page
// ---------------------------------------------------------------------------
export function blogPostPage(post, { related = [] } = {}) {
  // Optional post.lang (e.g. "hi") marks non-English content for assistive
  // tech and search engines.
  const langAttr = post.lang ? ` lang="${esc(post.lang)}"` : "";
  const hero = `<section class="hero hero--inner hero--article">
    <div class="container hero__inner hero__inner--narrow">
      <div class="hero__content reveal"${langAttr}>
        <span class="chip chip--soft" lang="en">${esc(post.category)}</span>
        <h1 class="hero__title hero__title--article">${esc(post.title)}</h1>
        <div class="article__meta">
          <span>${esc(post.author)}</span><span aria-hidden="true">·</span><span>${esc(post.date)}</span>
        </div>
      </div>
    </div>
  </section>`;

  const media = `<div class="container narrow">${imagePlaceholder(`${post.title} — hero image`, "16x9")}</div>`;

  const body = `<article class="section article"${langAttr}>
    <div class="container narrow article__body">
      ${post.body.join("\n")}
      <div class="article__cta card" lang="en">
        <div>
          <h3>Have a hearing question?</h3>
          <p>Book a no-pressure consultation with an expert Earkart audiologist.</p>
        </div>
        ${button(cta.book, "primary", { icon: "calendar" })}
      </div>
    </div>
  </article>`;

  const relatedSec = related.length ? `<section class="section section--tint">
    <div class="container">
      ${sectionHeader({ eyebrow: "Keep reading", title: "Related articles" })}
      <div class="grid grid--3 blog-grid">
        ${related.slice(0, 3).map((p) => `<article class="card post-card reveal">
          <a class="post-card__media" href="blog-${p.slug}.html">${imagePlaceholder(p.title, "4x3")}</a>
          <div class="post-card__body">
            <span class="chip chip--soft">${esc(p.category)}</span>
            <h3 class="post-card__title"${p.lang ? ` lang="${esc(p.lang)}"` : ""}><a href="blog-${p.slug}.html">${esc(p.title)}</a></h3>
            <p class="post-card__excerpt"${p.lang ? ` lang="${esc(p.lang)}"` : ""}>${esc(p.excerpt)}</p>
          </div>
        </article>`).join("")}
      </div>
    </div>
  </section>` : "";

  return {
    path: `blog-${post.slug}.html`,
    title: post.title,
    description: post.excerpt,
    breadcrumbs: [{ label: "Blog", href: "blog.html" }, { label: post.title, href: `blog-${post.slug}.html` }],
    jsonld: [{
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      author: { "@type": "Organization", name: post.author },
      articleSection: post.category,
      description: post.excerpt,
    }],
    content: [hero, media, body, relatedSec].join("\n"),
  };
}
