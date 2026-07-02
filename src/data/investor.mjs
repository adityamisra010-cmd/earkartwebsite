// ============================================================================
// Earkart — Investor section data
// Live PDF URLs are preserved as absolute links so downloads keep working.
// `href: "#"` entries are placeholders — replace with the real document URL.
// ============================================================================

const BASE = "https://earkart.in";

// Investor landing overview cards (link to sub-pages)
export const investorSections = [
  { title: "Board of Directors", href: "board-details.html",
    desc: "Leadership, board composition and director profiles." },
  { title: "Shareholding Pattern", href: "investor-shareholding.html",
    desc: "Quarterly shareholding disclosures and ownership structure." },
  { title: "Financial Information", href: "investor-financials.html",
    desc: "Annual and periodic financial results and reports." },
  { title: "Corporate Governance", href: "investor-governance.html",
    desc: "Governance framework, codes of conduct and committees." },
  { title: "IPO Documents", href: "investor-ipo.html",
    desc: "Prospectus, addenda and offer-related material." },
  { title: "SEBI LODR Compliance", href: "investor-sebi-lodr.html",
    desc: "Regulation 30 and listing-obligation disclosures." },
  { title: "Board Policies", href: "investor-board-policies.html",
    desc: "Approved policies governing company conduct." },
  { title: "Material Documents (IPO)", href: "material.html",
    desc: "Material contracts and documents for inspection." },
  { title: "Meetings", href: "investor-meetings.html",
    desc: "Board meetings, general meetings and postal ballots." },
  { title: "Grievance Redressal", href: "investor-grievance.html",
    desc: "Investor grievance mechanism and contacts." },
  { title: "Investor Information", href: "investor-information.html",
    desc: "Contacts, registrar details and useful information." },
  { title: "Other Investor Documents", href: "investor-other-documents.html",
    desc: "Additional disclosures and archived documents." },
];

// Each investor sub-page: { slug, title, intro, groups: [{ heading, docs:[{title,date,href,type}] }] }
export const investorPages = {
  "investor-shareholding": {
    title: "Shareholding Pattern",
    intro: "Periodic disclosures of the Company's shareholding structure as required under SEBI regulations.",
    groups: [
      { heading: "Shareholding Pattern", docs: [
        { title: "Shareholding Pattern", date: "[Add date]", type: "PDF", href: `${BASE}/investor/shareholding-pattern.pdf` },
        { title: "Shareholding Pattern — Latest Quarter", date: "[Add date]", type: "PDF", href: "#" },
      ]},
    ],
  },
  "investor-financials": {
    title: "Financial Information",
    intro: "Annual reports, restated financials, audit reports and periodic financial results.",
    groups: [
      { heading: "Annual & Restated Financials", docs: [
        { title: "Restated Financial Statements", date: "[Add date]", type: "PDF", href: "#" },
        { title: "Audit Report", date: "[Add date]", type: "PDF", href: "#" },
        { title: "RFS — Restated Financial Statements", date: "[Add date]", type: "PDF", href: "#" },
        { title: "Stub Period Financials", date: "[Add date]", type: "PDF", href: "#" },
      ]},
      { heading: "Periodic Results", docs: [
        { title: "Financial Results — FY [Year]", date: "[Add date]", type: "PDF", href: "#" },
        { title: "Financial Results — H1 FY26", date: "[Add date]", type: "PDF", href: "#" },
      ]},
      { heading: "Earnings Calls", docs: [
        { title: "Earnings Call Transcript — H1 FY26", date: "04 Dec 2025", type: "PDF", href: `${BASE}/investor/Earkart-transcript.pdf` },
        { title: "Earnings Call Recording", date: "[Add date]", type: "Link", href: "#" },
      ]},
    ],
  },
  "investor-governance": {
    title: "Corporate Governance",
    intro: "The Company's governance framework, board committees and codes of conduct.",
    groups: [
      { heading: "Codes & Policies", docs: [
        { title: "Code of Conduct", date: "[Add date]", type: "PDF", href: "#" },
        { title: "POSH Policy (Prevention of Sexual Harassment)", date: "[Add date]", type: "PDF", href: "#" },
      ]},
      { heading: "Committees", docs: [
        { title: "Audit Committee — Composition", date: "[Add date]", type: "PDF", href: "#" },
        { title: "Nomination & Remuneration Committee", date: "[Add date]", type: "PDF", href: "#" },
        { title: "Stakeholders Relationship Committee", date: "[Add date]", type: "PDF", href: "#" },
      ]},
    ],
  },
  "investor-ipo": {
    title: "IPO Documents",
    intro: "Offer documents, prospectus and related material for the Company's initial public offering.",
    groups: [
      { heading: "Offer Documents", docs: [
        { title: "Draft Prospectus", date: "[Add date]", type: "PDF", href: `${BASE}/investor/ipo/Earkart_Limited_Draft_Prospectus.pdf` },
        { title: "Prospectus", date: "[Add date]", type: "PDF", href: `${BASE}/investor/ipo/Earkart-Prospectus.pdf` },
        { title: "Addendum to Prospectus", date: "[Add date]", type: "PDF", href: `${BASE}/investor/ipo/Earkart_Addendum2.pdf` },
      ]},
    ],
  },
  "investor-sebi-lodr": {
    title: "SEBI LODR Compliance",
    intro: "Disclosures made under the SEBI (Listing Obligations and Disclosure Requirements) Regulations.",
    groups: [
      { heading: "Regulation 30 Disclosures", docs: [
        { title: "Disclosure under Regulation 30", date: "[Add date]", type: "PDF", href: "#" },
        { title: "Investor Presentation", date: "[Add date]", type: "PDF", href: "#" },
      ]},
      { heading: "Policies under LODR", docs: [
        { title: "Policy on Determination of Materiality", date: "[Add date]", type: "PDF", href: "#" },
        { title: "Familiarization Programme for Independent Directors", date: "[Add date]", type: "PDF", href: "#" },
      ]},
    ],
  },
  "investor-board-policies": {
    title: "Board Policies",
    intro: "Policies approved by the Board of Directors governing the Company's conduct and disclosures.",
    groups: [
      { heading: "Approved Policies", docs: [
        { title: "Code of Conduct", date: "[Add date]", type: "PDF", href: "#" },
        { title: "Whistle Blower / Vigil Mechanism Policy", date: "[Add date]", type: "PDF", href: "#" },
        { title: "Related Party Transaction Policy", date: "[Add date]", type: "PDF", href: "#" },
        { title: "Insider Trading Policy", date: "[Add date]", type: "PDF", href: "#" },
        { title: "POSH Policy", date: "[Add date]", type: "PDF", href: "#" },
        { title: "Nomination & Remuneration Policy", date: "[Add date]", type: "PDF", href: "#" },
      ]},
    ],
  },
  "investor-meetings": {
    title: "Meetings",
    intro: "Notices and outcomes of board meetings, general meetings and postal ballots.",
    groups: [
      { heading: "Board Meetings", docs: [
        { title: "Notice of Board Meeting", date: "[Add date]", type: "PDF", href: "#" },
        { title: "Outcome of Board Meeting", date: "[Add date]", type: "PDF", href: "#" },
      ]},
      { heading: "General Meetings", docs: [
        { title: "Notice of General Meeting (AGM/EGM)", date: "[Add date]", type: "PDF", href: "#" },
      ]},
      { heading: "Postal Ballot", docs: [
        { title: "Postal Ballot Notice", date: "[Add date]", type: "PDF", href: "#" },
        { title: "Postal Ballot Notification", date: "[Add date]", type: "PDF", href: "#" },
        { title: "Outcome of E-voting & Scrutinizer Report", date: "[Add date]", type: "PDF", href: "#" },
      ]},
    ],
  },
  "investor-grievance": {
    title: "Grievance Redressal",
    intro: "The Company is committed to resolving investor grievances promptly and transparently.",
    groups: [
      { heading: "Grievance Mechanism", docs: [
        { title: "Investor Grievance Policy", date: "[Add date]", type: "PDF", href: "#" },
      ]},
    ],
  },
  "investor-information": {
    title: "Investor Information",
    intro: "Key contacts, registrar details and general information for shareholders.",
    groups: [
      { heading: "Registrar & Transfer Agent", docs: [
        { title: "Registrar & Transfer Agent Details", date: "[Add date]", type: "Link", href: "#" },
      ]},
      { heading: "Compliance Officer", docs: [
        { title: "Compliance Officer Contact Details", date: "[Add date]", type: "Link", href: "#" },
      ]},
    ],
  },
  "investor-other-documents": {
    title: "Other Investor Documents",
    intro: "Additional disclosures, intimations and archived investor documents.",
    groups: [
      { heading: "Other Disclosures", docs: [
        { title: "Newspaper Publications", date: "[Add date]", type: "PDF", href: "#" },
        { title: "Intimation to Stock Exchange", date: "[Add date]", type: "PDF", href: "#" },
        { title: "Archived Documents", date: "[Add date]", type: "Link", href: "#" },
      ]},
    ],
  },
  "material": {
    title: "Material Documents (IPO)",
    intro: "Material contracts and documents referred to in the offer document, available for inspection.",
    groups: [
      { heading: "Material Documents", docs: [
        { title: "Material Contracts & Documents for Inspection", date: "[Add date]", type: "PDF", href: "#" },
        { title: "Prospectus", date: "[Add date]", type: "PDF", href: `${BASE}/investor/ipo/Earkart-Prospectus.pdf` },
      ]},
    ],
  },
};

// Investor confidence snapshot for the homepage (placeholder-safe)
export const investorSnapshot = [
  { label: "Listing", value: "[Confirm] NSE / BSE" },
  { label: "IPO Price", value: "₹135 per share" },
  { label: "IPO Opened", value: "Sep 2025" },
  { label: "Financial Year", value: "FY 2024–25" },
];
