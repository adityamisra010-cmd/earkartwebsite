import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    heading: "Hearing Health",
    links: [
      ["How Hearing Works", "/hearing-health/how-hearing-works"],
      ["Types of Hearing Loss", "/hearing-health/types"],
      ["Signs & Symptoms", "/hearing-health/signs"],
      ["Hearing Loss in Children", "/hearing-health/children"],
      ["Tinnitus", "/hearing-health/tinnitus"],
    ],
  },
  {
    heading: "Our Services",
    links: [
      ["Hearing Test & Assessment", "/services/hearing-test"],
      ["Hearing Aid Fitting & Trial", "/solutions"],
      ["Pediatric Audiology", "/services/pediatric"],
      ["Tinnitus Management", "/services/tinnitus"],
      ["Home Visit Services", "/services/home-visit"],
    ],
  },
  {
    heading: "Company",
    links: [
      ["About Us", "/about"],
      ["Find a Clinic", "/clinics"],
      ["Patient Stories", "/stories"],
      ["Careers", "/careers"],
      ["Contact", "/contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-charcoal-60">
              Redefining hearing care in India — clinical expertise with genuine
              compassion.
            </p>
            <p className="mt-4 text-sm font-medium text-teal">1800-XXX-XXXX</p>
          </div>
          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="text-sm font-bold uppercase tracking-wide text-charcoal">
                {col.heading}
              </h2>
              <ul className="mt-4 space-y-2">
                {col.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-charcoal-60 hover:text-teal">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 border-t border-line pt-6 text-xs text-charcoal-60">
          <p>
            Member, Indian Speech and Hearing Association (ISHA). Online hearing
            checks are screening tools and do not constitute a medical diagnosis.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-teal">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-teal">Terms of Service</Link>
            <Link href="/medical-disclaimer" className="hover:text-teal">Medical Disclaimer</Link>
            <span>© {new Date().getFullYear()} earKART. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
