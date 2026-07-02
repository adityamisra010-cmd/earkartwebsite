// ============================================================================
// Earkart — Navigation model (header mega menus + footer)
// ============================================================================
import { hearingAidFamilies, hearingAidModels, otherProducts } from "./products.mjs";
import { investorSections } from "./investor.mjs";

const productHref = (slug) => `product-${slug}.html`;

// Group hearing aid models by family for the mega menu columns
const modelsByFamily = (familySlug) =>
  hearingAidModels
    .filter((m) => m.family === familySlug)
    .map((m) => ({ label: m.name, href: productHref(m.slug) }));

// --- Primary header navigation ---------------------------------------------
export const primaryNav = [
  { label: "Home", href: "index.html" },
  { label: "About Us", href: "about-us.html" },
  { label: "Earkart Centers", href: "earkart-centers.html" },
  {
    label: "Hearing Aids",
    href: "hearing-aids.html",
    mega: "hearing-aids",
  },
  {
    label: "Other Products",
    href: "other-products.html",
    mega: "other-products",
  },
  {
    label: "Investor",
    href: "investor.html",
    mega: "investor",
  },
  { label: "Press Release", href: "press-release.html" },
  { label: "Contact Us", href: "contact-us.html" },
];

// --- Mega menu definitions --------------------------------------------------
export const megaMenus = {
  "hearing-aids": {
    intro: {
      title: "Hearing Aids",
      text: "Modern, discreet hearing aids selected with expert audiology guidance — not pushed by price.",
      cta: { label: "Explore all hearing aids", href: "hearing-aids.html" },
    },
    columns: [
      {
        heading: "Hearing Aid Families",
        links: hearingAidFamilies.map((f) => ({
          label: f.name,
          href: productHref(f.slug),
          note: f.style,
        })),
      },
      {
        heading: "Radius Range",
        links: modelsByFamily("radius").slice(0, 12),
      },
      {
        heading: "More Radius & Fame",
        links: [
          ...modelsByFamily("radius").slice(12),
          ...modelsByFamily("fame"),
        ],
      },
      {
        heading: "By Style",
        links: [
          { label: "RIC — Receiver in Canal", href: "hearing-aids.html#types" },
          { label: "BTE — Behind the Ear", href: "hearing-aids.html#types" },
          { label: "ITE / ITC — In the Ear", href: "hearing-aids.html#types" },
          { label: "CIC / IIC — In the Canal", href: "hearing-aids.html#types" },
          { label: "Download spec sheets", href: "hearing-aids.html#specs" },
        ],
      },
    ],
  },
  "other-products": {
    intro: {
      title: "Other Products",
      text: "Assistive and healthcare support products, component kits and accessories.",
      cta: { label: "View all products", href: "other-products.html" },
    },
    columns: [
      {
        heading: "Kits & Clinical",
        links: otherProducts
          .filter((p) => ["Educational / Development Kit", "Clinical Equipment"].includes(p.category))
          .map((p) => ({ label: p.name, href: productHref(p.slug) })),
      },
      {
        heading: "Components & Docs",
        links: otherProducts
          .filter((p) => ["Component Kit", "Documentation"].includes(p.category))
          .map((p) => ({ label: p.name, href: productHref(p.slug) })),
      },
      {
        heading: "Mobility & Accessories",
        links: otherProducts
          .filter((p) => ["Mobility Aid", "Accessory"].includes(p.category))
          .map((p) => ({ label: p.name, href: productHref(p.slug) })),
      },
    ],
  },
  investor: {
    intro: {
      title: "Investor Resources",
      text: "Corporate disclosures, financial information and governance documents for shareholders.",
      cta: { label: "Investor overview", href: "investor.html" },
    },
    columns: [
      {
        heading: "Governance",
        links: [
          { label: "Board of Directors", href: "board-details.html" },
          { label: "Corporate Governance", href: "investor-governance.html" },
          { label: "Board Policies", href: "investor-board-policies.html" },
          { label: "Grievance Redressal", href: "investor-grievance.html" },
        ],
      },
      {
        heading: "Financial & Filings",
        links: [
          { label: "Financial Information", href: "investor-financials.html" },
          { label: "Shareholding Pattern", href: "investor-shareholding.html" },
          { label: "SEBI LODR Compliance", href: "investor-sebi-lodr.html" },
          { label: "Meetings", href: "investor-meetings.html" },
        ],
      },
      {
        heading: "IPO & More",
        links: [
          { label: "IPO Documents", href: "investor-ipo.html" },
          { label: "Material Documents (IPO)", href: "material.html" },
          { label: "Investor Information", href: "investor-information.html" },
          { label: "Other Documents", href: "investor-other-documents.html" },
        ],
      },
    ],
  },
};

// --- Footer link groups -----------------------------------------------------
export const footerNav = [
  {
    heading: "For Patients & Families",
    links: [
      { label: "Book Appointment", href: "contact-us.html#appointment" },
      { label: "Earkart Centers", href: "earkart-centers.html" },
      { label: "Hearing Aids", href: "hearing-aids.html" },
      { label: "Hearing Loss", href: "hearing-loss.html" },
      { label: "Blog & Resources", href: "blog.html" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "Hearing Aids", href: "hearing-aids.html" },
      { label: "EQFY", href: "product-eqfy.html" },
      { label: "TINY", href: "product-tiny.html" },
      { label: "Fame", href: "product-fame.html" },
      { label: "Radius", href: "product-radius.html" },
      { label: "Other Products", href: "other-products.html" },
    ],
  },
  {
    heading: "Partners",
    links: [
      { label: "Become Our Partner", href: "contact-us.html#partner" },
      { label: "Partner Clinic Network", href: "earkart-centers.html" },
      { label: "OMNI Remote Audiometry", href: "index.html#omni" },
      { label: "Press Release", href: "press-release.html" },
    ],
  },
  {
    heading: "Investors",
    links: investorSections.slice(0, 6).map((s) => ({ label: s.title, href: s.href })),
  },
  {
    heading: "Quick Links",
    links: [
      { label: "Clinic Locations", href: "earkart-centers.html" },
      // Pending certificate PDF lives as a document card on the page below.
      // [CONFIRM] swap to the direct PDF URL once available.
      { label: "OMNI Patent Certificate", href: "investor-other-documents.html" },
      { label: "Hearing Loss", href: "hearing-loss.html" },
      { label: "Hearing Aids", href: "hearing-aids.html" },
      { label: "Press Release", href: "press-release.html" },
      { label: "Blog", href: "blog.html" },
      { label: "Terms & Conditions", href: "terms-and-conditions.html" },
      { label: "Privacy Policy", href: "privacy-policy.html" },
    ],
  },
];
