import {
  pageHero, sectionHeader, blogCard, button, ctaSection, eyebrow,
} from "../lib/components.mjs";
import { cta } from "../data/site.mjs";
import { blogPosts, blogCategories } from "../data/blog.mjs";

export default function blog() {
  const hero = pageHero({
    eyebrow: "Blog & Resources",
    title: `Clear, caring guides to <em>better hearing</em>.`,
    subtitle:
      "Practical articles on hearing aids, hearing loss, tinnitus and family guidance — written to inform, not alarm.",
    variant: "hero--inner hero--compact",
  });

  const filters = `<div class="chips-row container" role="tablist" aria-label="Blog categories">
    <button class="chip chip--filter is-active" data-filter="all">All</button>
    ${blogCategories.map((c) => `<button class="chip chip--filter" data-filter="${c}">${c}</button>`).join("")}
  </div>`;

  const featured = blogPosts.find((p) => p.featured) || blogPosts[0];
  const rest = blogPosts.filter((p) => p !== featured);

  const featuredSec = `<section class="section section--tight">
    <div class="container">
      ${sectionHeader({ eyebrow: "Featured", title: "Start here" })}
      ${blogCard(featured, { featured: true })}
    </div>
  </section>`;

  const grid = `<section class="section section--tint">
    <div class="container">
      ${sectionHeader({ eyebrow: "Latest articles", title: "More from the Earkart blog" })}
      <div class="grid grid--3 blog-grid" data-blog-grid>
        ${rest.map((p) => `<div data-category="${p.category}">${blogCard(p)}</div>`).join("")}
      </div>
    </div>
  </section>`;

  return {
    path: "blog.html",
    title: "Blog & Hearing Care Resources",
    description:
      "Earkart's blog: practical guides on hearing aids, hearing loss, tinnitus, technology and family guidance — clear, caring and jargon-free.",
    breadcrumbs: [{ label: "Blog", href: "blog.html" }],
    content: [hero, filters, featuredSec, grid, ctaSection({ title: "Have a hearing question? Talk to an expert." })].join("\n"),
  };
}
