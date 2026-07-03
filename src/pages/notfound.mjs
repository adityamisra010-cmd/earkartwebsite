import { sectionHeader, button, eyebrow } from "../lib/components.mjs";
import { icons, brandWave } from "../lib/icons.mjs";
import { cta } from "../data/site.mjs";

export default function notFound() {
  const content = `<section class="hero hero--inner hero--compact">
    <div class="hero__bg" aria-hidden="true"><span class="hero__wave">${brandWave("nf")}</span></div>
    <div class="container hero__inner">
      <div class="hero__content reveal">
        ${eyebrow("Page not found")}
        <h1 class="hero__title">We couldn't find that <em>page</em>.</h1>
        <p class="hero__subtitle">The link may have moved or the address may have been mistyped. Here are some helpful places to continue:</p>
        <div class="hero__ctas">
          ${button({ label: "Go to homepage", href: "index.html" }, "gold", { icon: "arrowRight" })}
          ${button(cta.exploreAids, "secondary", { icon: "ear" })}
          ${button(cta.findCenter, "secondary", { icon: "pin" })}
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      ${sectionHeader({ eyebrow: "Popular destinations", title: "Looking for one of these?", align: "center" })}
      <div class="grid grid--4">
        ${[
          { label: "Hearing Aids", href: "hearing-aids.html" },
          { label: "Earkart Centers", href: "geo4.html" },
          { label: "Hearing Loss Guide", href: "hearing-loss.html" },
          { label: "Book Appointment", href: "contact.html#appointment" },
          { label: "Investor Relations", href: "investor.html" },
          { label: "Press Release", href: "press-release.html" },
          { label: "Blog & Resources", href: "blog.html" },
          { label: "Contact Us", href: "contact.html" },
        ].map((l) => `<a class="card investor-tile reveal" href="${l.href}">${icons.arrowRight}<span class="investor-tile__title">${l.label}</span></a>`).join("")}
      </div>
    </div>
  </section>`;

  return {
    path: "404.html",
    title: "Page Not Found",
    description: "The page you were looking for could not be found. Explore Earkart's hearing care resources, products and investor information.",
    noindex: true,
    // Served by the host for arbitrary unknown paths (incl. nested ones like
    // /investor/x), so resolve all relative asset/link URLs from the site root.
    baseHref: "/",
    content,
  };
}
