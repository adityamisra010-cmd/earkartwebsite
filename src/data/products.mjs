// ============================================================================
// Earkart — Product catalogue (hearing aid families, models, other products)
// Spec values are placeholders unless confirmed. `pdf: null` renders a
// "spec sheet coming soon" state; set a URL to enable the download button.
// ============================================================================

// --- Hearing aid style/type education cards --------------------------------
export const hearingAidTypes = [
  {
    key: "RIC",
    name: "RIC — Receiver in Canal",
    blurb:
      "A slim behind-the-ear body with the receiver placed inside the ear canal for natural, comfortable sound.",
    suitableFor: "Mild to severe hearing loss",
    note: "Discreet, comfortable and easy to service.",
  },
  {
    key: "IIC",
    name: "IIC — Invisible in Canal",
    blurb:
      "The most discreet option, sitting deep in the canal so it is virtually invisible in everyday wear.",
    suitableFor: "Mild to moderate hearing loss",
    note: "Maximum discretion for those who prefer an invisible fit.",
  },
  {
    key: "BTE",
    name: "BTE — Behind the Ear",
    blurb:
      "A robust device worn behind the ear, connected to a custom ear-mould — powerful and dependable.",
    suitableFor: "Mild to profound hearing loss",
    note: "Durable, easy to handle and suited to a wide range of needs.",
  },
  {
    key: "ITE",
    name: "ITE — In the Ear",
    blurb:
      "A custom-moulded device that fills the outer ear, offering easy handling with reliable performance.",
    suitableFor: "Mild to severe hearing loss",
    note: "Comfortable custom fit with simple controls.",
  },
  {
    key: "ITC",
    name: "ITC — In the Canal",
    blurb:
      "A compact custom device sitting partly in the canal — a balance of discretion and easy handling.",
    suitableFor: "Mild to moderately-severe hearing loss",
    note: "Subtle appearance with comfortable daily use.",
  },
  {
    key: "CIC",
    name: "CIC — Completely in Canal",
    blurb:
      "A small custom device that sits fully within the canal for a discreet, low-profile look.",
    suitableFor: "Mild to moderate hearing loss",
    note: "Discreet fit with natural sound directionality.",
  },
];

// --- Hearing aid families (featured on Home & Hearing Aids hub) -------------
export const hearingAidFamilies = [
  {
    slug: "eqfy",
    name: "EQFY",
    tagline: "Digital, rechargeable, discreet.",
    description:
      "A digital rechargeable receiver-in-canal hearing aid designed for clear, comfortable everyday listening with modern convenience.",
    features: [
      "Digital sound processing",
      "Rechargeable — no daily battery changes",
      "Discreet receiver-in-canal design",
      "[Confirm] Bluetooth / wireless options",
    ],
    style: "RIC",
  },
  {
    slug: "tiny",
    name: "TINY",
    tagline: "Virtually invisible comfort.",
    description:
      "An ultra-discreet in-canal hearing aid for those who want dependable hearing support with a near-invisible fit.",
    features: [
      "Discreet in-canal design",
      "Natural, comfortable sound",
      "[Confirm] Channel count",
      "Lightweight everyday wear",
    ],
    style: "IIC / CIC",
  },
  {
    slug: "fame",
    name: "Fame",
    tagline: "Dependable, accessible hearing.",
    description:
      "The Fame family offers reliable, value-focused hearing support with straightforward controls and a comfortable fit.",
    features: [
      "Simple, dependable performance",
      "Comfortable everyday fit",
      "Multiple variants (P, SP, 2T)",
      "[Confirm] Technical specification",
    ],
    style: "BTE / ITE",
  },
  {
    slug: "radius",
    name: "Radius",
    tagline: "Programmable, powerful, flexible.",
    description:
      "A programmable hearing aid family with a wide range of channel and power options, fine-tuned by an audiologist to your hearing profile.",
    features: [
      "Programmable to your hearing profile",
      "8 / 12 / 16 channel options",
      "RIC and BTE variants",
      "Power options for a range of hearing loss",
    ],
    style: "RIC / BTE",
  },
];

// --- Individual hearing aid models -----------------------------------------
// type: hearing aid style. `family` links back to a family slug.
export const hearingAidModels = [
  { slug: "eqfy", name: "EQFY", family: "eqfy", type: "RIC", channels: "[Confirm]",
    blurb: "Digital rechargeable receiver-in-canal hearing aid for clear everyday listening.",
    suitableFor: "Mild to moderately-severe hearing loss", pdf: "https://earkart.in/eqfy.pdf" },
  { slug: "tiny", name: "TINY", family: "tiny", type: "IIC / CIC", channels: "[Confirm]",
    blurb: "Ultra-discreet in-canal hearing aid with a near-invisible fit.",
    suitableFor: "Mild to moderate hearing loss", pdf: null },
  { slug: "fame", name: "Fame", family: "fame", type: "BTE", channels: "[Confirm]",
    blurb: "Dependable, value-focused hearing aid with simple controls.",
    suitableFor: "Mild to severe hearing loss", pdf: null },
  { slug: "fame-p", name: "Fame P", family: "fame", type: "BTE (Power)", channels: "[Confirm]",
    blurb: "A power variant of the Fame family for greater amplification needs.",
    suitableFor: "Moderate to severe hearing loss", pdf: null },
  { slug: "fame-sp", name: "Fame SP", family: "fame", type: "BTE (Super Power)", channels: "[Confirm]",
    blurb: "A super-power Fame variant for higher amplification requirements.",
    suitableFor: "Severe to profound hearing loss", pdf: null },
  { slug: "fame-2t", name: "Fame 2T", family: "fame", type: "BTE", channels: "[Confirm]",
    blurb: "A Fame variant with a dual-control option for flexible everyday use.",
    suitableFor: "Mild to severe hearing loss", pdf: "https://earkart.in/F2TS.pdf" },
  { slug: "radius-pro", name: "Radius Pro", family: "radius", type: "RIC", channels: "[Confirm]",
    blurb: "The flagship programmable Radius model with advanced fine-tuning.",
    suitableFor: "Mild to severe hearing loss", pdf: null },
  { slug: "radius", name: "Radius", family: "radius", type: "RIC / BTE", channels: "[Confirm]",
    blurb: "The core programmable Radius hearing aid, tuned to your profile.",
    suitableFor: "Mild to severe hearing loss", pdf: null },
  { slug: "radius-p-16", name: "Radius P 16", family: "radius", type: "RIC (Power)", channels: "16",
    blurb: "16-channel power Radius model for detailed, programmable sound.",
    suitableFor: "Moderate to severe hearing loss", pdf: null },
  { slug: "radius-m-16", name: "Radius M 16", family: "radius", type: "RIC (Medium)", channels: "16",
    blurb: "16-channel medium-power Radius model for balanced everyday hearing.",
    suitableFor: "Mild to moderately-severe hearing loss", pdf: null },
  { slug: "radius-h-16", name: "Radius H 16", family: "radius", type: "RIC (High)", channels: "16",
    blurb: "16-channel high-performance Radius model for demanding listening.",
    suitableFor: "Mild to severe hearing loss", pdf: null },
  { slug: "radius-p8", name: "Radius P8", family: "radius", type: "RIC (Power)", channels: "8",
    blurb: "8-channel power Radius model for reliable amplification.",
    suitableFor: "Moderate to severe hearing loss", pdf: "https://earkart.in/radius/RadiusP8.pdf" },
  { slug: "radius-m8", name: "Radius M8", family: "radius", type: "RIC (Medium)", channels: "8",
    blurb: "8-channel medium-power Radius model for everyday clarity.",
    suitableFor: "Mild to moderately-severe hearing loss", pdf: null },
  { slug: "radius-h8", name: "Radius H8", family: "radius", type: "RIC (High)", channels: "8",
    blurb: "8-channel high-performance Radius model.",
    suitableFor: "Mild to severe hearing loss", pdf: null },
  { slug: "radius-8", name: "Radius 8", family: "radius", type: "RIC", channels: "8",
    blurb: "8-channel programmable Radius model for essential hearing support.",
    suitableFor: "Mild to moderate hearing loss", pdf: "https://earkart.in/radius/Radius8.pdf" },
  { slug: "radius-8p", name: "Radius 8P", family: "radius", type: "RIC (Power)", channels: "8",
    blurb: "8-channel power Radius variant for stronger amplification.",
    suitableFor: "Moderate to severe hearing loss", pdf: null },
  { slug: "radius-12", name: "Radius 12", family: "radius", type: "RIC", channels: "12",
    blurb: "12-channel programmable Radius model for refined sound quality.",
    suitableFor: "Mild to severe hearing loss", pdf: "https://earkart.in/radius/RADIUS12.pdf" },
  { slug: "radius-16", name: "Radius 16", family: "radius", type: "RIC", channels: "16",
    blurb: "16-channel programmable Radius model for detailed listening.",
    suitableFor: "Mild to severe hearing loss", pdf: "https://earkart.in/RADIUS16.pdf" },
  { slug: "radius-p-16-bte", name: "Radius P 16 BTE", family: "radius", type: "BTE (Power)", channels: "16",
    blurb: "16-channel power behind-the-ear Radius model.",
    suitableFor: "Moderate to profound hearing loss", pdf: "https://earkart.in/radius/RADIUSP16BTE.pdf" },
  { slug: "radius-m-16-bte", name: "Radius M 16 BTE", family: "radius", type: "BTE (Medium)", channels: "16",
    blurb: "16-channel medium-power behind-the-ear Radius model.",
    suitableFor: "Mild to severe hearing loss", pdf: null },
  { slug: "radius-h-16-bte", name: "Radius H 16 BTE", family: "radius", type: "BTE (High)", channels: "16",
    blurb: "16-channel high-performance behind-the-ear Radius model.",
    suitableFor: "Mild to severe hearing loss", pdf: null },
  { slug: "radius-16-bte", name: "Radius 16 BTE", family: "radius", type: "BTE", channels: "16",
    blurb: "16-channel behind-the-ear Radius model for dependable power.",
    suitableFor: "Moderate to profound hearing loss", pdf: "https://earkart.in/radius/RADIUS16BTE.pdf" },
];

// --- Other products (assistive & healthcare support) ------------------------
export const otherProducts = [
  { slug: "tlm-kit", name: "TLM Kit", category: "Educational / Development Kit",
    blurb: "A teaching-learning material kit designed to support hearing and speech development programmes.",
    suitableFor: "Educational & rehabilitation use", pdf: null },
  { slug: "tlm-kit-1", name: "TLM Kit-1", category: "Educational / Development Kit",
    blurb: "Teaching-learning material kit — configuration 1.",
    suitableFor: "Educational & rehabilitation use", pdf: "https://earkart.in/tlm/tlm1.pdf" },
  { slug: "tlm-kit-2", name: "TLM Kit-2", category: "Educational / Development Kit",
    blurb: "Teaching-learning material kit — configuration 2.",
    suitableFor: "Educational & rehabilitation use", pdf: null },
  { slug: "tlm-kit-3", name: "TLM Kit-3", category: "Educational / Development Kit",
    blurb: "Teaching-learning material kit — configuration 3.",
    suitableFor: "Educational & rehabilitation use", pdf: null },
  { slug: "msied-kit", name: "MSIED Kit", category: "Educational / Development Kit",
    blurb: "A multi-sensory instructional and educational development kit for structured learning support.",
    suitableFor: "Educational & rehabilitation use", pdf: null },
  { slug: "hearing-aid-test-system", name: "Hearing Aid Test System", category: "Clinical Equipment",
    blurb: "A test system for evaluating hearing aid performance in clinical and service settings.",
    suitableFor: "Clinics, audiologists & service centres", pdf: null },
  { slug: "lh-71-bte-kit", name: "LH 71 BTE Kit — Component Category II", category: "Component Kit",
    blurb: "Behind-the-ear component kit, category II, for assembly and servicing.",
    suitableFor: "Manufacturing & service partners", pdf: null },
  { slug: "lh-72-bte-kit", name: "LH 72 BTE Kit — Component Category III", category: "Component Kit",
    blurb: "Behind-the-ear component kit, category III, for assembly and servicing.",
    suitableFor: "Manufacturing & service partners", pdf: null },
  { slug: "radius-technical-specification", name: "Radius Technical Specification", category: "Documentation",
    blurb: "Technical specification reference for the Radius hearing aid family.",
    suitableFor: "Audiologists & partners", pdf: null },
  { slug: "adjustable-walker", name: "Adjustable Walker", category: "Mobility Aid",
    blurb: "A height-adjustable walker offering stable, comfortable mobility support.",
    suitableFor: "Mobility assistance for seniors", pdf: null },
  { slug: "zinc-air-battery-13", name: "Zinc Air Battery — Size 13", category: "Accessory",
    blurb: "Size 13 zinc-air hearing aid batteries for dependable, long-lasting power.",
    suitableFor: "Compatible battery-powered hearing aids", pdf: null },
];

// Shared placeholder spec rows for product spec pages
export const placeholderSpecRows = [
  { label: "Style / Form Factor", value: "[Confirm specification]" },
  { label: "Channels", value: "[Confirm specification]" },
  { label: "Power Range", value: "[Confirm specification]" },
  { label: "Battery / Power", value: "[Confirm specification]" },
  { label: "Noise Reduction", value: "[Confirm specification]" },
  { label: "Feedback Management", value: "[Confirm specification]" },
  { label: "Wireless / Bluetooth", value: "[Confirm specification]" },
  { label: "Warranty", value: "[Confirm specification]" },
];
