// ============================================================================
// Earkart — Document layout / page shell
// ============================================================================
import { site, contact, social } from "../data/site.mjs";
import { header, mobileNav, footer, stickyMobileCTA, breadcrumbs } from "./components.mjs";
import { esc } from "./components.mjs";

const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='9' fill='%230A2440'/%3E%3Cpath d='M12 25a8 8 0 1 1 14-5' stroke='%23C69A45' stroke-width='2.4' fill='none' stroke-linecap='round'/%3E%3Cpath d='M15 22a4 4 0 0 1 6-2.6' stroke='%230F6E7E' stroke-width='2.4' fill='none' stroke-linecap='round'/%3E%3C/svg%3E";

function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: site.legalName,
    alternateName: "Earkart",
    url: site.domain,
    description: site.description,
    telephone: contact.phoneDisplay,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "A-133, Ground Floor, Sector 63",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
    sameAs: social.map((s) => s.href).filter((h) => h && h !== "#"),
    medicalSpecialty: "Audiology",
  };
}

function breadcrumbSchema(trail, domain) {
  if (!trail || !trail.length) return null;
  const items = [{ label: "Home", href: "index.html" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      item: `${domain}/${it.href || ""}`,
    })),
  };
}

const jsonldTag = (obj) =>
  obj ? `<script type="application/ld+json">${JSON.stringify(obj)}</script>` : "";

export function layout({
  title,
  description,
  path = "index.html",
  bodyClass = "",
  breadcrumbs: trail = [],
  jsonld = [],
  head = "",
  content = "",
} = {}) {
  const fullTitle = path === "index.html"
    ? `${title} | Earkart`
    : `${title} | Earkart — Hearing Care`;
  const canonical = `${site.domain}/${path}`;
  const schemas = [orgSchema(), breadcrumbSchema(trail, site.domain), ...jsonld]
    .filter(Boolean).map(jsonldTag).join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>document.documentElement.classList.add('js')</script>
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${esc(canonical)}">
<meta name="theme-color" content="#0A2440">
<link rel="icon" href="${FAVICON}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Earkart">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:image" content="assets/img/og-placeholder.svg">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/styles.css">
${schemas}
${head}
</head>
<body class="${bodyClass}">
<a class="skip-link" href="#main">Skip to main content</a>
${header(path)}
${mobileNav()}
<main id="main">
${trail.length ? breadcrumbs(trail) : ""}
${content}
</main>
${footer()}
${stickyMobileCTA()}
<script src="assets/js/main.js" defer></script>
</body>
</html>`;
}

// Convenience: build FAQPage schema from a faq array
export function faqSchema(faqs) {
  if (!faqs || !faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
