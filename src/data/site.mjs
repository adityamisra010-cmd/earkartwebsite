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

// --- Social links (placeholders) -------------------------------------------
export const social = [
  { label: "LinkedIn", href: "#", icon: "linkedin" }, // [CONFIRM]
  { label: "Instagram", href: "#", icon: "instagram" }, // [CONFIRM]
  { label: "Facebook", href: "#", icon: "facebook" }, // [CONFIRM]
  { label: "YouTube", href: "#", icon: "youtube" }, // [CONFIRM]
];

// --- Marketing impact stats (placeholders — confirm before publishing) ------
export const impactStats = [
  { value: "[Add verified number]+", suffix: "", label: "Partner Centers", key: "centers" },
  { value: "[Add verified number]+", suffix: "", label: "Appointments Booked", key: "appointments" },
  { value: "[Add verified number]+", suffix: "", label: "Hearing Aid Fittings", key: "fittings" },
  { value: "[Add verified number]+", suffix: "", label: "Cities Covered", key: "cities" },
  { value: "[Add verified number]+", suffix: "", label: "Consultations Supported", key: "consultations" },
  { value: "[Add verified number]+", suffix: "", label: "Products Delivered", key: "products" },
];
