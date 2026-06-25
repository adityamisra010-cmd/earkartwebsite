import Link from "next/link";
import {
  Ear,
  Users,
  HelpCircle,
  Stethoscope,
  Baby,
  Activity,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Cta, Section } from "../ui";

/* ZONE B — Hero */
export function Hero() {
  return (
    <section className="bg-cream px-4 pb-12 pt-10 sm:px-6 md:pb-20 md:pt-16">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 md:grid-cols-2">
        <div className="ek-rise">
          <h1 className="font-display text-[36px] font-bold leading-[1.1] text-charcoal sm:text-5xl lg:text-6xl">
            Hear your world again.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-charcoal-60">
            Expert hearing care — with clinics across India, and a free hearing
            check you can take right now.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Cta href="/book">Book a Free Hearing Test</Cta>
            <Cta href="/hearing-check" variant="outline">
              Take the 3-Minute Hearing Check
            </Cta>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-charcoal-60">
            <ShieldCheck size={16} className="text-sage" aria-hidden="true" />
            No obligation. No pushy sales. Trusted by 40,000+ families.
          </p>
        </div>

        {/* Decorative abstract panel — real, consented patient photography to be
            placed here (WDS A-010/A-091). Intentionally not stock imagery. */}
        <div
          className="relative hidden h-80 overflow-hidden rounded-lg bg-gradient-to-br from-teal/10 to-amber/10 md:block"
          role="img"
          aria-label="A grandfather laughing with his granddaughter in a sunlit home — illustrative placeholder for patient photography."
        >
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 400 320"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            {[40, 80, 120, 160, 200].map((y, i) => (
              <path
                key={y}
                d={`M0 ${160} Q 100 ${160 - (i + 1) * 18}, 200 160 T 400 160`}
                fill="none"
                stroke={i % 2 ? "#D4831A" : "#1A6B72"}
                strokeOpacity={0.5 - i * 0.06}
                strokeWidth="2"
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ZONE C — Empathy bridge */
export function EmpathyBridge() {
  return (
    <Section labelledby="empathy-h">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="empathy-h" className="font-display text-3xl font-bold text-charcoal md:text-4xl">
          It starts with the small things.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          Asking people to repeat themselves more often. Turning the TV up a
          little louder. Missing words in a noisy restaurant. Nodding along when
          you&rsquo;re not quite sure what was said.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-charcoal">
          These moments are common. They don&rsquo;t make you less — they just
          mean your hearing needs a little attention.
        </p>
        <p className="mt-4 text-lg font-medium text-teal">earKART is here for that.</p>
      </div>
    </Section>
  );
}

/* ZONE D — Pathways */
const pathways = [
  {
    icon: Ear,
    title: "I think my hearing has changed",
    body: "Take our free 3-minute check and find out what your hearing is telling you.",
    cta: "Start Free Hearing Check",
    href: "/hearing-check",
    accent: "border-l-teal",
  },
  {
    icon: Users,
    title: "I'm looking for help for a family member",
    body: "We understand this is a decision that involves the whole family. We're here to help.",
    cta: "How to Help Someone You Love",
    href: "/hearing-health/family-guide",
    accent: "border-l-amber",
  },
  {
    icon: HelpCircle,
    title: "I want to understand my options",
    body: "Hearing aids have changed. So have the costs, the technology, and the experience. Let us show you.",
    cta: "Explore Hearing Solutions",
    href: "/solutions",
    accent: "border-l-sage",
  },
];

export function Pathways() {
  return (
    <Section bg="white" labelledby="paths-h">
      <h2 id="paths-h" className="text-center font-display text-3xl font-bold text-charcoal md:text-4xl">
        Where would you like to start?
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pathways.map(({ icon: Icon, title, body, cta, href, accent }) => (
          <Link
            key={title}
            href={href}
            className={`group flex flex-col rounded-md border border-line border-l-4 ${accent} bg-cream p-6 shadow-card transition-shadow hover:shadow-raised`}
          >
            <Icon size={32} className="text-teal" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-bold text-charcoal">{title}</h3>
            <p className="mt-2 flex-1 text-charcoal-60">{body}</p>
            <span className="mt-4 inline-flex items-center gap-2 font-medium text-teal group-hover:gap-3">
              {cta} <ArrowRight size={18} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

/* ZONE E — Trust architecture */
const stats = [
  { n: "40,000+", l: "Families Helped" },
  { n: "15+ Years", l: "Of Clinical Experience" },
  { n: "150+", l: "Clinics Nationwide" },
  { n: "4.9/5", l: "Patient Rating (8,200+ reviews)" },
];

export function TrustBar() {
  return (
    <Section bg="bluegray" labelledby="trust-h">
      <h2 id="trust-h" className="text-center font-display text-3xl font-bold text-charcoal">
        Why families across India choose earKART
      </h2>
      <dl className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map(({ n, l }) => (
          <div key={l} className="rounded-md bg-white p-6 text-center shadow-card">
            <dt className="sr-only">{l}</dt>
            <dd>
              <span className="block font-display text-3xl font-bold text-teal md:text-4xl">
                {n}
              </span>
              <span className="mt-1 block text-sm text-charcoal-60">{l}</span>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 text-center text-sm text-charcoal-60">
        Trusted technology partners: Phonak · Signia · Widex · Oticon · ReSound ·
        Starkey
      </p>
    </Section>
  );
}

/* ZONE F — Patient story preview */
export function StoryPreview() {
  return (
    <Section bg="white" labelledby="story-h">
      <h2 id="story-h" className="text-center font-display text-3xl font-bold text-charcoal md:text-4xl">
        Stories from the families we&rsquo;ve helped
      </h2>
      <figure className="mx-auto mt-10 max-w-3xl rounded-lg border border-line bg-cream p-8 shadow-card md:p-12">
        <blockquote className="font-display text-xl italic leading-relaxed text-charcoal md:text-2xl">
          &ldquo;I didn&rsquo;t realize how much of my family&rsquo;s life I had
          stopped participating in. Now I don&rsquo;t miss a single word.&rdquo;
        </blockquote>
        <figcaption className="mt-5 text-charcoal-60">
          — Krishnamurthy S., 71, Retired Bank Officer, Coimbatore
          <span className="block text-sm">earKART patient since 2022</span>
        </figcaption>
        <div className="mt-6">
          <Link
            href="/stories/krishnamurthy"
            className="inline-flex items-center gap-2 font-medium text-teal hover:gap-3"
          >
            Read Krishnamurthy&rsquo;s full story
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </figure>
    </Section>
  );
}

/* ZONE G — Services overview */
const services = [
  { icon: Stethoscope, title: "Hearing Test & Assessment", body: "Know exactly where you stand.", href: "/services/hearing-test" },
  { icon: Activity, title: "Hearing Aid Fitting & Trial", body: "Find the one that fits your life.", href: "/solutions" },
  { icon: Baby, title: "Pediatric Audiology", body: "For children who deserve to hear every word.", href: "/services/pediatric" },
];

export function Services() {
  return (
    <Section labelledby="services-h">
      <h2 id="services-h" className="text-center font-display text-3xl font-bold text-charcoal md:text-4xl">
        What we offer
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map(({ icon: Icon, title, body, href }) => (
          <Link key={title} href={href} className="group rounded-md border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-raised">
            <Icon size={28} className="text-teal" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold text-charcoal">{title}</h3>
            <p className="mt-2 text-charcoal-60">{body}</p>
            <span className="mt-4 inline-flex items-center gap-2 font-medium text-teal group-hover:gap-3">
              Learn more <ArrowRight size={16} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
      <p className="mt-6 text-center text-charcoal-60">
        We also offer tinnitus management, corporate hearing health programs, and
        home visit services.
      </p>
    </Section>
  );
}

/* ZONE H — Hearing check banner */
export function HearingCheckBanner() {
  return (
    <Section bg="teal" labelledby="check-h">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="check-h" className="font-display text-3xl font-bold md:text-4xl">
          Not sure where to start? Take 3 minutes.
        </h2>
        <p className="mt-4 text-lg text-white/90">
          Our free online hearing check gives you a baseline result and helps you
          understand what to ask an audiologist.
        </p>
        <div className="mt-7 flex justify-center">
          <Cta href="/hearing-check" variant="white">
            Take the Free Hearing Check
          </Cta>
        </div>
        <p className="mt-5 text-sm text-white/75">
          This is a screening tool, not a clinical diagnosis. A full hearing
          assessment with our audiologists provides a complete picture.
        </p>
      </div>
    </Section>
  );
}

/* ZONE I — Blog preview */
const articles = [
  { tag: "Hearing Loss", title: "How do you know if your hearing has changed?", read: "8 min", href: "/blog/signs-of-hearing-loss" },
  { tag: "Tinnitus", title: "Living with tinnitus: a practical guide", read: "11 min", href: "/blog/living-with-tinnitus" },
  { tag: "Family", title: "Helping a parent get their hearing tested", read: "9 min", href: "/blog/parent-hearing-test" },
];

export function BlogPreview() {
  return (
    <Section bg="white" labelledby="blog-h">
      <h2 id="blog-h" className="font-display text-3xl font-bold text-charcoal md:text-4xl">
        From our Hearing Health Hub
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {articles.map(({ tag, title, read, href }) => (
          <Link key={title} href={href} className="group flex flex-col rounded-md border border-line bg-cream p-6 shadow-card transition-shadow hover:shadow-raised">
            <span className="text-xs font-medium uppercase tracking-wide text-amber">{tag}</span>
            <h3 className="mt-2 flex-1 text-lg font-bold text-charcoal group-hover:text-teal">{title}</h3>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-charcoal-60">
              <Clock size={14} aria-hidden="true" /> {read} read
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

/* ZONE J — Clinic finder preview */
export function ClinicFinder() {
  return (
    <Section bg="bluegray" labelledby="clinic-h">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="clinic-h" className="font-display text-3xl font-bold text-charcoal md:text-4xl">
          Find earKART near you
        </h2>
        <form action="/clinics" className="mt-7 flex flex-col gap-3 sm:flex-row">
          <label htmlFor="clinic-location" className="sr-only">
            Enter your city or area
          </label>
          <input
            id="clinic-location"
            name="location"
            type="text"
            placeholder="Enter your city or area"
            className="min-h-[52px] flex-1 rounded-sm border border-line bg-white px-4 text-base text-charcoal placeholder:text-charcoal-60"
          />
          <button
            type="submit"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-sm bg-teal px-6 font-medium text-white hover:bg-teal-700"
          >
            <MapPin size={18} aria-hidden="true" /> Find a Clinic
          </button>
        </form>
        <p className="mt-5 text-charcoal-60">
          Or call us:{" "}
          <a href="tel:1800XXXXXXX" className="inline-flex items-center gap-1.5 font-medium text-teal">
            <Phone size={16} aria-hidden="true" /> 1800-XXX-XXXX (Free)
          </a>
        </p>
      </div>
    </Section>
  );
}
