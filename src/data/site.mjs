// ============================================================================
// Earkart — Global site configuration
// Edit these constants to update brand, contact details and CTA links site-wide.
// Values marked [CONFIRM] should be verified before go-live.
// ============================================================================

export const site = {
  name: "Earkart",
  legalName: "Earkart Limited",
  domain: "https://earkart.in",
  tagline: "Technology-led hearing care, with expert guidance.",
  positioning:
    "India's digital-first hearing care platform — combining expert audiology, modern hearing aids, OMNI-powered remote audiometry and a trusted partner clinic network.",
  // Short line for the header utility bar (must never truncate)
  taglineShort: "India's digital-first hearing care platform",
  description:
    "Earkart is a technology-led hearing care platform bringing expert audiology, modern hearing aids and OMNI-powered remote audiometry to families across India through a trusted partner clinic network.",
  footerTrustLine:
    "Technology-led hearing care with expert guidance and partner support across India.",
  disclaimer:
    "The information on this website is provided for general awareness and is not a substitute for professional medical advice, diagnosis or treatment. Please consult a qualified audiologist or physician for any hearing-related concern.",
};

// --- Contact details -------------------------------------------------------
export const contact = {
  phoneDisplay: "+91 95605 76416",
  phoneRaw: "+919560576416",
  tollFreeDisplay: "1800 [CONFIRM]", // [CONFIRM] toll-free number
  tollFreeRaw: "",
  whatsappDisplay: "+91 95605 76416",
  whatsappRaw: "919560576416",
  whatsappUrl: "https://wa.me/919560576416",
  email: "info@earkart.in", // [CONFIRM] primary email
  investorEmail: "investors@earkart.in", // [CONFIRM] investor grievance email
  corporateOffice:
    "A-133, Ground Floor, Sector 63, Gautam Buddha Nagar, Noida, Uttar Pradesh 201301",
  registeredOffice:
    "[CONFIRM] Registered Office — Earkart Limited, Uttar Pradesh, India",
  cin: "[CONFIRM] CIN — Lxxxxx UP2021PLCxxxxxx",
};

// --- Primary CTAs (single source of truth) ---------------------------------
export const cta = {
  book: { label: "Book Appointment", href: "contact-us.html#appointment" },
  bookAlt: { label: "Book an Appointment", href: "contact-us.html#appointment" },
  call: { label: "Call Now", href: `tel:${contact.phoneRaw}` },
  whatsapp: { label: "WhatsApp Us", href: contact.whatsappUrl },
  findCenter: { label: "Find a Center", href: "earkart-centers.html" },
  partner: { label: "Become Our Partner", href: "contact-us.html#partner" }, // [CONFIRM] external partner portal URL
  investors: { label: "View Investor Resources", href: "investor.html" },
  exploreAids: { label: "Explore Hearing Aids", href: "hearing-aids.html" },
  learnLoss: { label: "Learn About Hearing Loss", href: "hearing-loss.html" },
};

// --- Integrations ------------------------------------------------------------
export const integrations = {
  // Set to your form-handling endpoint (CRM webhook, serverless function,
  // Formspree-style URL, …). Forms POST JSON: { form, name, phone, ... }.
  // While empty, forms run in a clearly-labelled front-end demo mode.
  formEndpoint: "",
  // Paste your analytics snippet here (e.g. GA4/GTM/Plausible <script> tags).
  // Injected verbatim into <head> on every page when non-empty.
  analyticsHeadSnippet: "",
};

// --- Social links (placeholders) -------------------------------------------
export const social = [
  { label: "LinkedIn", href: "#", icon: "linkedin" }, // [CONFIRM]
  { label: "Instagram", href: "#", icon: "instagram" }, // [CONFIRM]
  { label: "Facebook", href: "#", icon: "facebook" }, // [CONFIRM]
  { label: "YouTube", href: "#", icon: "youtube" }, // [CONFIRM]
];

// --- Marketing impact stats -------------------------------------------------
// Set `value` to the verified figure (e.g. "250+") to publish it. While null,
// the card renders a deliberate "verified figure coming soon" pending state.
export const impactStats = [
  { value: null, label: "Partner Centers", key: "centers" },
  { value: null, label: "Appointments Booked", key: "appointments" },
  { value: null, label: "Hearing Aid Fittings", key: "fittings" },
  { value: null, label: "Cities Covered", key: "cities" },
  { value: null, label: "Consultations Supported", key: "consultations" },
  { value: null, label: "Products Delivered", key: "products" },
];
