// ============================================================================
// Earkart — Partner center directory
// This is the single source of truth for the Earkart Centers page.
//
// TO GO LIVE: replace the placeholder entries below with real partner
// clinics. For each center set `verified: true` once details are confirmed —
// verified centers are rendered into LocalBusiness structured data (SEO) and
// lose their "[Add …]" placeholder styling automatically.
//
// Field guide:
//   id        unique slug, e.g. "noida-sector-63"
//   name      display name of the partner clinic
//   city      city (used by the City search box)
//   state     state (drives the State dropdown options)
//   pin       6-digit pin code (prefix-matched by the Pin search box)
//   address   full street address shown on the card
//   phone     E.164 or local display number ("" = show central number)
//   timings   e.g. "Mon–Sat, 10:00–19:00"
//   services  any of: "Hearing test", "Hearing aid fitting",
//             "Repair & service", "Remote audiometry"
//   lat/lng   optional map coordinates (used once map integration lands)
//   verified  true = real confirmed data (enables LocalBusiness schema)
// ============================================================================

export const serviceTypes = [
  "Hearing test",
  "Hearing aid fitting",
  "Repair & service",
  "Remote audiometry",
];

export const centers = [
  {
    id: "placeholder-1",
    name: "Earkart Partner Center 1",
    city: "[Add city]",
    state: "Uttar Pradesh",
    pin: "",
    address: "[Add clinic address, city, pin code]",
    phone: "",
    timings: "[Add timings]",
    services: ["Hearing test", "Hearing aid fitting"],
    lat: null,
    lng: null,
    verified: false,
  },
  {
    id: "placeholder-2",
    name: "Earkart Partner Center 2",
    city: "[Add city]",
    state: "Delhi",
    pin: "",
    address: "[Add clinic address, city, pin code]",
    phone: "",
    timings: "[Add timings]",
    services: ["Hearing test", "Remote audiometry"],
    lat: null,
    lng: null,
    verified: false,
  },
  {
    id: "placeholder-3",
    name: "Earkart Partner Center 3",
    city: "[Add city]",
    state: "Maharashtra",
    pin: "",
    address: "[Add clinic address, city, pin code]",
    phone: "",
    timings: "[Add timings]",
    services: ["Hearing aid fitting", "Repair & service"],
    lat: null,
    lng: null,
    verified: false,
  },
];

// Distinct states for the filter dropdown (derived from data)
export const centerStates = [...new Set(centers.map((c) => c.state))].sort();

// LocalBusiness JSON-LD for verified centers only — never emits placeholder
// data into structured markup. Returns [] until real centers are added.
export function centersSchema(domain) {
  return centers
    .filter((c) => c.verified)
    .map((c) => ({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: c.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: c.address,
        addressLocality: c.city,
        addressRegion: c.state,
        postalCode: c.pin,
        addressCountry: "IN",
      },
      telephone: c.phone || undefined,
      geo: c.lat != null ? { "@type": "GeoCoordinates", latitude: c.lat, longitude: c.lng } : undefined,
      parentOrganization: { "@type": "Organization", name: "Earkart Limited", url: domain },
      medicalSpecialty: "Audiology",
    }));
}
