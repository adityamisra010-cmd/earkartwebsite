// ============================================================================
// Earkart — Reusable component render functions (return HTML strings)
// ============================================================================
import { site, contact, cta, social, integrations } from "../data/site.mjs";
import { primaryNav, megaMenus, footerNav } from "../data/nav.mjs";
import { icons, brandWave, equalizer, logo } from "./icons.mjs";

// --- helpers ---------------------------------------------------------------
export const esc = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const isExternal = (href = "") => /^https?:|^tel:|^mailto:|wa\.me/.test(href);
const relAttr = (href) => (isExternal(href) && !href.startsWith("tel:") && !href.startsWith("mailto:")
  ? ' target="_blank" rel="noopener"' : "");

// Button / CTA
export function button(c, variant = "primary", opts = {}) {
  const cls = ["btn", `btn--${variant}`];
  if (opts.lg) cls.push("btn--lg");
  if (opts.block) cls.push("btn--block");
  const ic = opts.icon ? `<span class="btn__icon">${icons[opts.icon] || ""}</span>` : "";
  const trail = opts.trailingArrow ? `<span class="btn__icon btn__icon--trail">${icons.arrowRight}</span>` : "";
  return `<a class="${cls.join(" ")}" href="${esc(c.href)}"${relAttr(c.href)}>${ic}<span>${esc(c.label)}</span>${trail}</a>`;
}

export const eyebrow = (text) => text ? `<span class="eyebrow">${equalizer()}<span>${esc(text)}</span></span>` : "";

// --- Breadcrumbs -----------------------------------------------------------
export function breadcrumbs(trail = []) {
  if (!trail.length) return "";
  const items = [{ label: "Home", href: "index.html" }, ...trail];
  const lis = items.map((it, i) => {
    const last = i === items.length - 1;
    const inner = last || !it.href
      ? `<span aria-current="page">${esc(it.label)}</span>`
      : `<a href="${esc(it.href)}">${esc(it.label)}</a>`;
    return `<li class="crumbs__item">${inner}${last ? "" : `<span class="crumbs__sep" aria-hidden="true">${icons.chevronRight}</span>`}</li>`;
  }).join("");
  return `<nav class="crumbs" aria-label="Breadcrumb"><ol class="crumbs__list container">${lis}</ol></nav>`;
}

// --- Section header --------------------------------------------------------
export function sectionHeader({ eyebrow: eb, title, text, align = "left", tone = "" } = {}) {
  return `<div class="section-head ${align === "center" ? "section-head--center" : ""} ${tone}">
    ${eyebrow(eb)}
    ${title ? `<h2 class="section-head__title">${title}</h2>` : ""}
    ${text ? `<p class="section-head__text">${text}</p>` : ""}
  </div>`;
}

// --- Header ----------------------------------------------------------------
function megaPanel(key) {
  const m = megaMenus[key];
  if (!m) return "";
  const renderGroup = (g) => `
    <div class="mega__group">
      <p class="mega__heading">${esc(g.heading)}</p>
      <ul class="mega__links">
        ${g.links.map((l) => `<li><a href="${esc(l.href)}"${relAttr(l.href)}>${esc(l.label)}${l.note ? `<span class="mega__note">${esc(l.note)}</span>` : ""}</a></li>`).join("")}
      </ul>
    </div>`;
  const cols = m.columns.map((col) => `
    <div class="mega__col">${col.groups.map(renderGroup).join("")}</div>`).join("");
  return `<div class="mega" id="mega-${key}" role="region" aria-label="${esc(m.intro.title)}">
    <div class="mega__inner container">
      <div class="mega__intro">
        <p class="mega__intro-title">${esc(m.intro.title)}</p>
        <p class="mega__intro-text">${esc(m.intro.text)}</p>
        <a class="mega__intro-cta" href="${esc(m.intro.cta.href)}">${esc(m.intro.cta.label)} <span aria-hidden="true">${icons.arrowRight}</span></a>
      </div>
      <div class="mega__cols">${cols}</div>
    </div>
  </div>`;
}

export function header(activePath = "") {
  const navItems = primaryNav.map((item) => {
    const active = item.href === activePath ? " is-active" : "";
    if (item.mega) {
      return `<li class="nav__item has-mega">
        <button class="nav__link nav__trigger${active}" aria-expanded="false" aria-controls="mega-${item.mega}" data-mega="${item.mega}">
          ${esc(item.label)} <span class="nav__caret" aria-hidden="true">${icons.chevronDown}</span>
        </button>
        ${megaPanel(item.mega)}
      </li>`;
    }
    return `<li class="nav__item"><a class="nav__link${active}" href="${esc(item.href)}">${esc(item.label)}</a></li>`;
  }).join("");

  return `<header class="site-header" id="siteHeader" data-header>
    <div class="site-header__utility">
      <div class="container site-header__utility-inner">
        <p class="site-header__tagline">${esc(site.taglineShort)}</p>
        <div class="site-header__utility-actions">
          <a href="${cta.call.href}" class="util-link">${icons.phone}<span>${esc(contact.phoneDisplay)}</span></a>
          <a href="${cta.whatsapp.href}" class="util-link" target="_blank" rel="noopener">${icons.whatsapp}<span>WhatsApp</span></a>
          <a href="${cta.partner.href}" class="util-link util-link--accent">${esc(cta.partner.label)}</a>
        </div>
      </div>
    </div>
    <div class="site-header__main">
      <div class="container site-header__main-inner">
        <a class="site-header__brand" href="index.html">${logo()}</a>
        <nav class="nav" aria-label="Primary"><ul class="nav__list">${navItems}</ul></nav>
        <div class="site-header__actions">
          <a class="header-icon-btn" href="${cta.whatsapp.href}" target="_blank" rel="noopener" aria-label="WhatsApp us">${icons.whatsapp}</a>
          ${button(cta.book, "primary", { icon: "calendar" })}
          <button class="hamburger" id="menuToggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNav">${icons.menu}</button>
        </div>
      </div>
    </div>
  </header>`;
}

// --- Mobile navigation -----------------------------------------------------
export function mobileNav() {
  const items = primaryNav.map((item) => {
    if (item.mega) {
      const m = megaMenus[item.mega];
      const groups = m.columns.flatMap((c) => c.groups);
      return `<div class="m-acc">
        <button class="m-acc__trigger" aria-expanded="false">${esc(item.label)}<span class="m-acc__icon" aria-hidden="true">${icons.plus}</span></button>
        <div class="m-acc__panel">
          <a class="m-acc__all" href="${esc(item.href)}">${esc(m.intro.cta.label)}</a>
          ${groups.map((g) => `
            <p class="m-acc__heading">${esc(g.heading)}</p>
            ${g.links.map((l) => `<a class="m-acc__link" href="${esc(l.href)}"${relAttr(l.href)}>${esc(l.label)}</a>`).join("")}`).join("")}
        </div>
      </div>`;
    }
    return `<a class="m-link" href="${esc(item.href)}">${esc(item.label)}</a>`;
  }).join("");

  return `<div class="mobile-nav" id="mobileNav" aria-hidden="true">
    <div class="mobile-nav__head container">
      <a class="site-header__brand" href="index.html">${logo()}</a>
      <button class="hamburger" id="menuClose" aria-label="Close menu">${icons.close}</button>
    </div>
    <div class="mobile-nav__body container">
      ${items}
      <div class="mobile-nav__cta">
        ${button(cta.book, "primary", { block: true, icon: "calendar" })}
        ${button(cta.partner, "secondary", { block: true, icon: "handshake" })}
      </div>
      <div class="mobile-nav__contact">
        <a href="${cta.call.href}">${icons.phone}<span>${esc(contact.phoneDisplay)}</span></a>
        <a href="${cta.whatsapp.href}" target="_blank" rel="noopener">${icons.whatsapp}<span>WhatsApp</span></a>
      </div>
    </div>
  </div>
  <div class="mobile-nav__scrim" id="menuScrim" hidden></div>`;
}

// --- Sticky mobile CTA bar -------------------------------------------------
export function stickyMobileCTA() {
  return `<div class="mcta" aria-label="Quick contact">
    <a class="mcta__btn" href="${cta.call.href}">${icons.phone}<span>Call</span></a>
    <a class="mcta__btn" href="${cta.whatsapp.href}" target="_blank" rel="noopener">${icons.whatsapp}<span>WhatsApp</span></a>
    <a class="mcta__btn mcta__btn--primary" href="${cta.book.href}">${icons.calendar}<span>Book</span></a>
  </div>`;
}

// --- Footer ----------------------------------------------------------------
export function footer() {
  const cols = footerNav.map((g) => `
    <div class="footer__col">
      <p class="footer__heading">${esc(g.heading)}</p>
      <ul class="footer__links">
        ${g.links.map((l) => `<li><a href="${esc(l.href)}"${relAttr(l.href)}>${esc(l.label)}</a></li>`).join("")}
      </ul>
    </div>`).join("");

  const socialLinks = social.map((sl) =>
    sl.href && sl.href !== "#"
      ? `<a class="footer__social" href="${esc(sl.href)}" aria-label="${esc(sl.label)}" target="_blank" rel="noopener">${icons[sl.icon] || icons.globe}</a>`
      : `<span class="footer__social footer__social--pending" title="${esc(sl.label)} — [Add profile URL]" aria-hidden="true">${icons[sl.icon] || icons.globe}</span>`).join("");

  return `<footer class="footer">
    <div class="footer__top container">
      <div class="footer__brand">
        <a class="site-header__brand footer__logo" href="index.html">${logo()}</a>
        <p class="footer__desc">${esc(site.description)}</p>
        <p class="footer__trustline">${icons.shield}<span>${esc(site.footerTrustLine)}</span></p>
        <div class="footer__socials">${socialLinks}</div>
      </div>
      <div class="footer__cols">${cols}</div>
    </div>

    <div class="footer__contact container">
      <div class="footer__contact-item">${icons.phone}<div><span class="footer__contact-label">Call</span><a href="${cta.call.href}">${esc(contact.phoneDisplay)}</a><br>${
        contact.tollFreeRaw
          ? `<a href="tel:${esc(contact.tollFreeRaw)}">${esc(contact.tollFreeDisplay)} <em>(toll-free)</em></a>`
          : `<span class="footer__pending-text">${esc(contact.tollFreeDisplay)} <em>(toll-free)</em></span>`
      }</div></div>
      <div class="footer__contact-item">${icons.mail}<div><span class="footer__contact-label">Email</span><a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a></div></div>
      <div class="footer__contact-item">${icons.clinic}<div><span class="footer__contact-label">Corporate Office</span><span>${esc(contact.corporateOffice)}</span></div></div>
      <div class="footer__contact-item">${icons.pin}<div><span class="footer__contact-label">Registered Office</span><span>${esc(contact.registeredOffice)}</span></div></div>
    </div>

    <div class="footer__legal">
      <div class="container footer__legal-inner">
        <p class="footer__cin">${esc(site.legalName)} &nbsp;·&nbsp; CIN: ${esc(contact.cin)}</p>
        <ul class="footer__legal-links">
          <li><a href="privacy-policy.html">Privacy Policy</a></li>
          <li><a href="terms-and-conditions.html">Terms &amp; Conditions</a></li>
          <li><a href="press-release.html">Press Release</a></li>
        </ul>
      </div>
      <div class="container">
        <p class="footer__disclaimer">${esc(site.disclaimer)}</p>
        <p class="footer__disclaimer">Trademarks, product names and brand names referenced on this website are the property of their respective owners. Product images and specifications are indicative and may be updated. [Confirm trademark disclaimer.]</p>
        <p class="footer__copy">© <span data-year>2026</span> ${esc(site.legalName)}. All rights reserved.</p>
      </div>
    </div>
  </footer>`;
}

// --- Hero ------------------------------------------------------------------
export function pageHero({ eyebrow: eb, title, subtitle, ctas = [], badges = [], variant = "", media = "" } = {}) {
  const ctaHtml = ctas.map((c, i) => button(c.cta, c.variant || (i === 0 ? "primary" : "secondary"), c.opts || {})).join("");
  const badgeHtml = badges.length ? `<ul class="hero__badges">${badges.map((b) => `<li class="hero__badge">${icons.checkCircle}<span>${esc(b)}</span></li>`).join("")}</ul>` : "";
  return `<section class="hero ${variant}">
    <div class="hero__bg" aria-hidden="true"><span class="hero__wave">${brandWave("hero")}</span></div>
    <div class="container hero__inner">
      <div class="hero__content reveal">
        ${eyebrow(eb)}
        <h1 class="hero__title">${title}</h1>
        ${subtitle ? `<p class="hero__subtitle">${subtitle}</p>` : ""}
        ${ctaHtml ? `<div class="hero__ctas">${ctaHtml}</div>` : ""}
        ${badgeHtml}
      </div>
      ${media ? `<div class="hero__media reveal">${media}</div>` : ""}
    </div>
  </section>`;
}

// Image slot: renders a branded placeholder until a real asset path is
// supplied via `src` — then it becomes a lazy-loaded <img> with the label as
// alt text. Swap photos in without touching any call-site markup.
export function imagePlaceholder(label, ratio = "4x3", tone = "", src = null) {
  if (src) {
    return `<div class="img-ph img-ph--${ratio} img-ph--photo ${tone}">
      <img src="${esc(src)}" alt="${esc(label)}" loading="lazy" decoding="async">
    </div>`;
  }
  return `<div class="img-ph img-ph--${ratio} ${tone}" role="img" aria-label="${esc(label)}">
    <span class="img-ph__wave">${brandWave()}</span>
    <span class="img-ph__label">${icons.sparkle}<span>${esc(label)}</span></span>
  </div>`;
}

// --- Trust strip -----------------------------------------------------------
export function trustStrip(items) {
  return `<section class="trust-strip" aria-label="Why families trust Earkart">
    <div class="container trust-strip__inner">
      ${items.map((it) => `<div class="trust-strip__item reveal">${icons[it.icon] || icons.check}<span>${esc(it.label)}</span></div>`).join("")}
    </div>
  </section>`;
}

// --- Generic card grids ----------------------------------------------------
export function featureCard({ icon = "check", title, text, href, cta: linkLabel }) {
  const link = href ? `<a class="feature__link" href="${esc(href)}">${esc(linkLabel || "Learn more")} <span aria-hidden="true">${icons.arrowRight}</span></a>` : "";
  return `<article class="card feature reveal">
    <span class="feature__icon">${icons[icon] || icons.check}</span>
    <h3 class="feature__title">${esc(title)}</h3>
    <p class="feature__text">${esc(text)}</p>
    ${link}
  </article>`;
}

export function processSteps(steps) {
  return `<ol class="steps">
    ${steps.map((s, i) => `<li class="step reveal">
      <span class="step__num">${String(i + 1).padStart(2, "0")}</span>
      <div class="step__body"><h3 class="step__title">${esc(s.title)}</h3><p class="step__text">${esc(s.text)}</p></div>
    </li>`).join("")}
  </ol>`;
}

export function statCard(stat) {
  // While no verified figure is set, render a deliberate pending state
  // (never "0+" and never a raw editor marker on the page).
  const pending = stat.value == null || String(stat.value).startsWith("[");
  if (pending) {
    return `<div class="stat stat--pending reveal">
      <span class="stat__value stat__value--pending" aria-hidden="true">—</span>
      <span class="stat__label">${esc(stat.label)}</span>
      <span class="stat__note">Verified figure coming soon</span>
    </div>`;
  }
  return `<div class="stat reveal">
    <span class="stat__value" data-stat>${esc(stat.value)}</span>
    <span class="stat__label">${esc(stat.label)}</span>
  </div>`;
}

// --- Product family / type cards -------------------------------------------
export function productFamilyCard(f) {
  return `<article class="card pfamily reveal">
    ${imagePlaceholder(`${f.name} product image`, "4x3", "img-ph--product")}
    <div class="pfamily__body">
      <div class="pfamily__head">
        <h3 class="pfamily__name">${esc(f.name)}</h3>
        <span class="chip">${esc(f.style)}</span>
      </div>
      <p class="pfamily__tag">${esc(f.tagline)}</p>
      <p class="pfamily__desc">${esc(f.description)}</p>
      <ul class="pfamily__features">${f.features.slice(0, 3).map((x) => `<li>${icons.check}<span>${esc(x)}</span></li>`).join("")}</ul>
      <div class="pfamily__actions">
        <a class="btn btn--secondary" href="product-${f.slug}.html">View details</a>
        <a class="btn btn--text" href="contact.html#appointment">Book consultation ${icons.arrowRight}</a>
      </div>
    </div>
  </article>`;
}

export function hearingAidTypeCard(t) {
  return `<article class="card type-card reveal">
    <span class="type-card__key">${esc(t.key)}</span>
    <h3 class="type-card__name">${esc(t.name.split("—")[1] ? t.name.split("—")[1].trim() : t.name)}</h3>
    <p class="type-card__blurb">${esc(t.blurb)}</p>
    <dl class="type-card__meta">
      <div><dt>Suitable for</dt><dd>${esc(t.suitableFor)}</dd></div>
    </dl>
    <p class="type-card__note">${icons.check}<span>${esc(t.note)}</span></p>
  </article>`;
}

// --- Reviews ---------------------------------------------------------------
export function reviewCard(r) {
  // Unverified entries are layout demonstrations only: labelled clearly and
  // shown without a star rating so no fabricated review reads as real.
  const placeholderName = !r.name || r.name.startsWith("[");
  const badge = r.verified
    ? `<div class="review__stars" aria-label="5 out of 5">${icons.star.repeat(5)}</div>`
    : `<span class="review__flag">${icons.sparkle}<span>Illustrative example</span></span>`;
  const avatar = placeholderName
    ? `<span class="review__avatar" aria-hidden="true">${icons.users}</span>`
    : `<span class="review__avatar" aria-hidden="true">${esc(r.name.charAt(0))}</span>`;
  return `<article class="card review reveal">
    <span class="review__quote-mark" aria-hidden="true">${icons.quote}</span>
    ${badge}
    <p class="review__text">${esc(r.quote)}</p>
    <details class="review__more">
      <summary>Read more</summary>
      <p>${esc(r.more)}</p>
    </details>
    <footer class="review__foot">
      ${avatar}
      <span class="review__meta"><strong>${esc(r.name)}</strong><span>${esc(r.tag)} · ${esc(r.location)}</span></span>
    </footer>
  </article>`;
}

// --- Blog & press ----------------------------------------------------------
export function blogCard(p, { featured = false } = {}) {
  const langAttr = p.lang ? ` lang="${esc(p.lang)}"` : "";
  return `<article class="card post-card ${featured ? "post-card--featured" : ""} reveal">
    <a class="post-card__media" href="blog-${p.slug}.html">${imagePlaceholder(`${p.title} — article image`, featured ? "16x9" : "4x3")}</a>
    <div class="post-card__body">
      <span class="chip chip--soft">${esc(p.category)}</span>
      <h3 class="post-card__title"${langAttr}><a href="blog-${p.slug}.html">${esc(p.title)}</a></h3>
      <p class="post-card__excerpt"${langAttr}>${esc(p.excerpt)}</p>
      <div class="post-card__meta"><span>${esc(p.author)}</span><span aria-hidden="true">·</span><span>${esc(p.date)}</span></div>
      <a class="post-card__read" href="blog-${p.slug}.html" aria-label="Read: ${esc(p.title)}">Read article ${icons.arrowRight}</a>
    </div>
  </article>`;
}

export function pressReleaseCard(pr) {
  const pending = !pr.href || pr.href === "#";
  const action = pending
    ? `<span class="btn btn--text btn--disabled">${icons.clock} Release document coming soon</span>`
    : `<a class="btn btn--text" href="${esc(pr.href)}"${relAttr(pr.href)}>${esc(pr.cta || "Read release")} ${icons.arrowRight}</a>`;
  return `<article class="card press-card reveal">
    <div class="press-card__date">${icons.calendar}<span>${esc(pr.date)}</span></div>
    <h3 class="press-card__title">${esc(pr.title)}</h3>
    <p class="press-card__summary">${esc(pr.summary)}</p>
    ${action}
  </article>`;
}

// --- Investor document grid ------------------------------------------------
// Extracts a 4-digit year from a date string ("04 Dec 2025" → "2025");
// placeholder dates yield "pending".
export const docYear = (date = "") => {
  const m = String(date).match(/\b(19|20)\d{2}\b/);
  return m ? m[0] : "pending";
};

export function investorDocCard(doc) {
  const disabled = !doc.href || doc.href === "#";
  const hrefAttr = disabled ? "" : ` href="${esc(doc.href)}"${relAttr(doc.href)}`;
  const dataAttrs = ` data-doc-year="${esc(docYear(doc.date))}" data-doc-type="${esc(doc.type || "PDF")}"`;
  return `<${disabled ? "div" : "a"} class="doc ${disabled ? "doc--pending" : ""}"${hrefAttr}${dataAttrs}>
    <span class="doc__icon">${icons.document}</span>
    <span class="doc__body">
      <span class="doc__title">${esc(doc.title)}</span>
      <span class="doc__meta">${esc(doc.type || "PDF")} · ${esc(doc.date || "")}</span>
    </span>
    <span class="doc__action">${disabled ? "<span class='doc__soon'>Coming soon</span>" : icons.download}</span>
  </${disabled ? "div" : "a"}>`;
}

export function documentDownloadGrid(groups) {
  return groups.map((g) => `
    <div class="doc-group">
      <h3 class="doc-group__heading">${esc(g.heading)}</h3>
      <div class="doc-grid">${g.docs.map(investorDocCard).join("")}</div>
    </div>`).join("");
}

// --- Leadership ------------------------------------------------------------
export function leadershipCard(m) {
  return `<article class="card leader reveal">
    ${imagePlaceholder(`${m.name} — portrait`, "1x1", "img-ph--portrait")}
    <div class="leader__body">
      <span class="chip chip--soft">${esc(m.tag)}</span>
      <h3 class="leader__name">${esc(m.name)}</h3>
      <p class="leader__role">${esc(m.role)}</p>
      <p class="leader__bio">${esc(m.bio)}</p>
    </div>
  </article>`;
}

// --- Contact cards ---------------------------------------------------------
export function contactCard({ icon, label, value, href, note }) {
  const inner = `<span class="contact-card__icon">${icons[icon] || icons.mail}</span>
    <span class="contact-card__label">${esc(label)}</span>
    <span class="contact-card__value">${esc(value)}</span>
    ${note ? `<span class="contact-card__note">${esc(note)}</span>` : ""}`;
  return href
    ? `<a class="card contact-card reveal" href="${esc(href)}"${relAttr(href)}>${inner}</a>`
    : `<div class="card contact-card reveal">${inner}</div>`;
}

// --- FAQ accordion ---------------------------------------------------------
export function faqAccordion(faqs, { titleTag = "h3" } = {}) {
  return `<div class="faq">
    ${faqs.map((f, i) => `<details class="faq__item" ${i === 0 ? "open" : ""}>
      <summary class="faq__q"><${titleTag} class="faq__q-text">${esc(f.q)}</${titleTag}><span class="faq__icon" aria-hidden="true">${icons.plus}</span></summary>
      <div class="faq__a"><p>${esc(f.a)}</p></div>
    </details>`).join("")}
  </div>`;
}

// --- Map placeholder -------------------------------------------------------
export function mapPlaceholder(label = "Map of Earkart partner centers") {
  return `<div class="map-ph" role="img" aria-label="${esc(label)}">
    <div class="map-ph__grid" aria-hidden="true"></div>
    <div class="map-ph__pins" aria-hidden="true">
      ${[[20,30],[45,55],[68,25],[80,60],[35,72],[58,40]].map(([x,y]) => `<span class="map-ph__pin" style="left:${x}%;top:${y}%">${icons.pin}</span>`).join("")}
    </div>
    <div class="map-ph__label">${icons.pin}<span>${esc(label)}</span><small>[Add map integration]</small></div>
  </div>`;
}

// --- Partner CTA band ------------------------------------------------------
export function partnerCTA() {
  return `<section class="section partner-cta" id="partner">
    <div class="container partner-cta__inner reveal">
      <div class="partner-cta__content">
        ${eyebrow("For clinics, dealers, ENTs & audiologists")}
        <h2 class="partner-cta__title">Build hearing care access with Earkart's technology, products and support network.</h2>
        <p class="partner-cta__text">Join a growing partner network with lead-generation support, tele-audiology backing, OMNI-powered remote audiometry, a broad product portfolio and hands-on partner enablement.</p>
        <ul class="partner-cta__list">
          <li>${icons.check}<span>Lead-generation support</span></li>
          <li>${icons.check}<span>Tele-audiology support</span></li>
          <li>${icons.check}<span>OMNI-powered workflow</span></li>
          <li>${icons.check}<span>Product portfolio access</span></li>
          <li>${icons.check}<span>Partner enablement &amp; training</span></li>
          <li>${icons.check}<span>Business credibility</span></li>
        </ul>
        <div class="partner-cta__actions">
          ${button(cta.partner, "gold", { icon: "handshake" })}
          ${button(cta.call, "ghost-light", { icon: "phone" })}
        </div>
      </div>
      <div class="partner-cta__media">${imagePlaceholder("Partner clinic network visual", "4x3", "img-ph--dark")}</div>
    </div>
  </section>`;
}

// --- Final CTA section -----------------------------------------------------
// `actions` overrides the default patient CTAs: [{ cta, variant, opts }]
export function ctaSection({
  title = "Ready to take the next step toward better hearing?",
  text = "Speak with our team, find a nearby center, or book a consultation with an expert audiologist.",
  actions = null,
} = {}) {
  const defaultActions = [
    { cta: cta.book, variant: "gold", opts: { lg: true, icon: "calendar" } },
    { cta: cta.call, variant: "ghost-light", opts: { lg: true, icon: "phone" } },
    { cta: cta.findCenter, variant: "ghost-light", opts: { lg: true, icon: "pin" } },
    { cta: cta.whatsapp, variant: "ghost-light", opts: { lg: true, icon: "whatsapp" } },
  ];
  const list = (actions || defaultActions)
    .map((a) => button(a.cta, a.variant || "ghost-light", a.opts || { lg: true }))
    .join("");
  return `<section class="section final-cta">
    <div class="container final-cta__inner reveal">
      <span class="final-cta__wave" aria-hidden="true">${brandWave("cta")}</span>
      <h2 class="final-cta__title">${esc(title)}</h2>
      <p class="final-cta__text">${esc(text)}</p>
      <div class="final-cta__actions">${list}</div>
    </div>
  </section>`;
}

// Investor-relations variant — IR-appropriate actions instead of patient CTAs.
// Pass the current page path so no button ever links back to the page you're on.
export function irCtaSection(currentPath = "") {
  const pool = [
    { cta: { label: "Investor Overview", href: "investor.html" }, opts: { lg: true, icon: "chart" } },
    { cta: { label: "Financial Information", href: "investor-financials.html" }, opts: { lg: true, icon: "chart" } },
    { cta: { label: "IPO Documents", href: "investor-ipo.html" }, opts: { lg: true, icon: "document" } },
    { cta: { label: "Corporate Governance", href: "investor-governance.html" }, opts: { lg: true, icon: "shield" } },
  ];
  const picks = pool.filter((a) => a.cta.href !== currentPath).slice(0, 2);
  const actions = [
    { ...picks[0], variant: "gold" },
    { ...picks[1], variant: "ghost-light" },
    { cta: { label: "Email Investor Relations", href: `mailto:${contact.investorEmail}` }, variant: "ghost-light", opts: { lg: true, icon: "mail" } },
  ];
  return ctaSection({
    title: "Shareholder or analyst questions?",
    text: "Reach our investor relations team, or continue exploring the Company's disclosures.",
    actions,
  });
}

// --- Forms -----------------------------------------------------------------
// Shared plumbing: honeypot anti-spam field, endpoint config (demo mode while
// empty), per-field inline errors, and polite live regions for success/error.
const endpointAttr = integrations.formEndpoint ? ` data-endpoint="${esc(integrations.formEndpoint)}"` : "";

const honeypot = `<div class="hp-wrap" aria-hidden="true"><label for="hp-{id}">Leave this field empty</label><input class="hp-field" id="hp-{id}" type="text" name="company_website" tabindex="-1" autocomplete="off"></div>`;

const formFoot = (demoLabel) => `
    ${integrations.formEndpoint
      ? `<p class="form-note">${icons.shield}<span>Your details are sent securely to our team. We respect your privacy.</span></p>`
      : `<p class="form-note">${icons.shield}<span>This form is currently a front-end demo — ${demoLabel} [Set integrations.formEndpoint in src/data/site.mjs to activate.]</span></p>`}
    <div class="form__success" role="status" aria-live="polite" hidden>${integrations.formEndpoint
      ? "Thank you — we've received your details and will be in touch shortly."
      : "Thank you — your request has been captured in this demo. <em>[Connect a backend to receive submissions.]</em>"}</div>
    <div class="form__error" role="alert" hidden>Sorry — something went wrong sending your details. Please try again, or reach us directly on <a href="tel:${esc(contact.phoneRaw)}">${esc(contact.phoneDisplay)}</a> / <a href="${esc(contact.whatsappUrl)}" target="_blank" rel="noopener">WhatsApp</a>.</div>`;

const fieldError = (id, msg) => `<span class="field__error" id="${id}-error" hidden>${esc(msg)}</span>`;

export function appointmentForm() {
  return `<form class="form card form--appointment" id="appointment-form" data-form="appointment"${endpointAttr} novalidate>
    <h3 class="form__title">Book an appointment</h3>
    <p class="form__intro">Share a few details and our team will help you find a convenient time and nearby center.</p>
    ${honeypot.replaceAll("{id}", "ap")}
    <div class="form__grid">
      <div class="field"><label class="label" for="ap-name">Full name</label><input class="input" id="ap-name" name="name" required aria-describedby="ap-name-error" placeholder="Your name">${fieldError("ap-name", "Please enter your name.")}</div>
      <div class="field"><label class="label" for="ap-phone">Phone number</label><input class="input" id="ap-phone" name="phone" type="tel" required aria-describedby="ap-phone-error" placeholder="10-digit mobile number">${fieldError("ap-phone", "Please enter a valid phone number.")}</div>
      <div class="field"><label class="label" for="ap-city">City</label><input class="input" id="ap-city" name="city" placeholder="Your city"></div>
      <div class="field"><label class="label" for="ap-for">Appointment for</label>
        <select class="input select" id="ap-for" name="for">
          <option value="">Select</option>
          <option>Myself</option><option>My parent / elder</option><option>A family member</option>
        </select>
      </div>
    </div>
    <div class="field"><label class="label" for="ap-msg">Anything we should know? (optional)</label><textarea class="input textarea" id="ap-msg" name="message" rows="3" placeholder="e.g. preferred time, concerns"></textarea></div>
    <button class="btn btn--primary btn--lg btn--block" type="submit" data-submit-label="Request appointment">Request appointment</button>
    ${formFoot("submissions are not yet delivered anywhere.")}
  </form>`;
}

export function contactForm() {
  return `<form class="form card form--contact" id="enquiry" data-form="contact"${endpointAttr} novalidate>
    <h3 class="form__title">Send us a message</h3>
    ${honeypot.replaceAll("{id}", "c")}
    <div class="form__grid">
      <div class="field"><label class="label" for="c-name">Full name</label><input class="input" id="c-name" name="name" required aria-describedby="c-name-error" placeholder="Your name">${fieldError("c-name", "Please enter your name.")}</div>
      <div class="field"><label class="label" for="c-phone">Phone</label><input class="input" id="c-phone" name="phone" type="tel" required aria-describedby="c-phone-error" placeholder="Mobile number">${fieldError("c-phone", "Please enter a valid phone number.")}</div>
      <div class="field"><label class="label" for="c-email">Email</label><input class="input" id="c-email" name="email" type="email" placeholder="you@example.com"></div>
      <div class="field"><label class="label" for="c-city">City</label><input class="input" id="c-city" name="city" placeholder="Your city"></div>
    </div>
    <div class="field"><label class="label" for="c-interest">I am interested in</label>
      <select class="input select" id="c-interest" name="interest">
        <option value="">Select an option</option>
        <option>Hearing consultation</option>
        <option>Hearing aid</option>
        <option>Partner enquiry</option>
        <option>Investor query</option>
        <option>Service support</option>
        <option>Other</option>
      </select>
    </div>
    <div class="field"><label class="label" for="c-msg">Message</label><textarea class="input textarea" id="c-msg" name="message" rows="4" placeholder="How can we help?"></textarea></div>
    <button class="btn btn--primary btn--lg btn--block" type="submit" data-submit-label="Submit enquiry">Submit enquiry</button>
    ${formFoot("messages are not yet delivered anywhere.")}
  </form>`;
}
