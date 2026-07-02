import { pageHero, sectionHeader, ctaSection } from "../lib/components.mjs";
import { site, contact } from "../data/site.mjs";

function legalShell(sections) {
  return `<section class="section">
    <div class="container legal">
      ${sections.map((s) => `<div class="legal__block reveal">
        <h2 class="legal__heading">${s.h}</h2>
        ${s.body.map((p) => `<p>${p}</p>`).join("")}
      </div>`).join("")}
      <p class="fineprint">[This is placeholder legal content for layout purposes. Please replace with your reviewed, final Privacy Policy / Terms &amp; Conditions before go-live.]</p>
    </div>
  </section>`;
}

export function terms() {
  const hero = pageHero({
    eyebrow: "Legal",
    title: `Terms & Conditions`,
    subtitle: "Please read these terms carefully. They govern your use of the Earkart website.",
    variant: "hero--inner hero--compact",
  });
  const sections = [
    { h: "1. Acceptance of terms", body: ["By accessing and using this website, you agree to be bound by these Terms & Conditions and our Privacy Policy. [Replace with final legal text.]"] },
    { h: "2. Use of the website", body: ["The content on this website is provided for general information about Earkart's hearing care services, products and corporate information. It is not a substitute for professional medical advice."] },
    { h: "3. Products & services", body: ["Product images, specifications and descriptions are indicative and may be updated without notice. Availability of products and services may vary by location and partner clinic."] },
    { h: "4. Intellectual property", body: ["All trademarks, logos, product names and content on this website are the property of Earkart Limited or their respective owners and may not be used without permission."] },
    { h: "5. Limitation of liability", body: ["Earkart is not liable for any loss arising from reliance on the information provided on this website. [Confirm with legal counsel.]"] },
    { h: "6. Contact", body: [`For questions about these terms, contact ${contact.email} or write to our registered office.`] },
  ];
  return {
    path: "terms-and-conditions.html",
    title: "Terms & Conditions",
    description: "Terms & Conditions governing the use of the Earkart Limited website and services.",
    breadcrumbs: [{ label: "Terms & Conditions", href: "terms-and-conditions.html" }],
    content: [hero, legalShell(sections), ctaSection()].join("\n"),
  };
}

export function privacy() {
  const hero = pageHero({
    eyebrow: "Legal",
    title: `Privacy Policy`,
    subtitle: "How Earkart collects, uses and protects your personal information.",
    variant: "hero--inner hero--compact",
  });
  const sections = [
    { h: "1. Information we collect", body: ["We may collect information you provide directly — such as your name, phone number, email and city — when you book an appointment or submit an enquiry. [Replace with final legal text.]"] },
    { h: "2. How we use your information", body: ["We use your information to respond to enquiries, book appointments, provide hearing care services and improve our offerings. We do not sell your personal information."] },
    { h: "3. Sharing", body: ["We may share necessary information with partner clinics and service providers to deliver the services you request, subject to appropriate safeguards."] },
    { h: "4. Data security", body: ["We take reasonable measures to protect your information. [Confirm your data-handling and security practices.]"] },
    { h: "5. Your rights", body: ["You may request access to, correction of, or deletion of your personal information by contacting us."] },
    { h: "6. Contact", body: [`For privacy questions, contact ${contact.email} or write to ${site.legalName} at our registered office.`] },
  ];
  return {
    path: "privacy-policy.html",
    title: "Privacy Policy",
    description: "Earkart Limited privacy policy — how we collect, use, share and protect your personal information.",
    breadcrumbs: [{ label: "Privacy Policy", href: "privacy-policy.html" }],
    content: [hero, legalShell(sections), ctaSection()].join("\n"),
  };
}
