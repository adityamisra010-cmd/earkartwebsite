// ============================================================================
// Earkart — static site generator (zero dependencies)
// Run:  node build.mjs
// Outputs flat .html files at the repo root (preserves legacy .html URLs).
// ============================================================================
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { layout } from "./src/lib/layout.mjs";

// Static pages
import home from "./src/pages/home.mjs";
import about from "./src/pages/about.mjs";
import centers, { geo4 } from "./src/pages/centers.mjs";
import hearingAids from "./src/pages/hearing-aids.mjs";
import hearingLoss from "./src/pages/hearing-loss.mjs";
import blog from "./src/pages/blog.mjs";
import press from "./src/pages/press.mjs";
import contactPage from "./src/pages/contact.mjs";
import investor from "./src/pages/investor.mjs";
import boardPage from "./src/pages/board.mjs";
import otherProductsPage from "./src/pages/other-products.mjs";
import { terms, privacy } from "./src/pages/legal.mjs";
import notFound from "./src/pages/notfound.mjs";
import { site } from "./src/data/site.mjs";

// Templates + data for generated pages
import { hearingAidProductPage, otherProductPage, investorSubPage, blogPostPage } from "./src/lib/templates.mjs";
import { hearingAidModels, hearingAidFamilies, otherProducts } from "./src/data/products.mjs";
import { investorPages } from "./src/data/investor.mjs";
import { blogPosts } from "./src/data/blog.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const familyBySlug = Object.fromEntries(hearingAidFamilies.map((f) => [f.slug, f]));

// --- Assemble the full page list -------------------------------------------
const staticPages = [
  home(), about(), centers(), geo4(), hearingAids(), hearingLoss(),
  blog(), press(), contactPage(), investor(), boardPage(),
  otherProductsPage(), terms(), privacy(), notFound(),
];

const hearingAidPages = hearingAidModels.map((model) => {
  // Every model (variants included) inherits its family's features/eyebrow.
  const family = familyBySlug[model.family] || null;
  let siblings = hearingAidModels.filter((m) => m.family === model.family && m.slug !== model.slug);
  let crossFamily = false;
  // Single-model families (EQFY, TINY) cross-link the other family overview pages.
  if (!siblings.length) {
    siblings = hearingAidModels.filter((m) => familyBySlug[m.slug] && m.slug !== model.slug);
    crossFamily = true;
  }
  return hearingAidProductPage(model, { family, siblings, crossFamily });
});

const otherProductPages = otherProducts.map((p) => {
  const related = otherProducts.filter((o) => o.category === p.category && o.slug !== p.slug);
  return otherProductPage(p, { related });
});

const investorSubPages = Object.entries(investorPages).map(([key, data]) => investorSubPage(key, data));

const blogPostPages = blogPosts.map((post) => {
  const related = blogPosts.filter((p) => p.slug !== post.slug);
  return blogPostPage(post, { related });
});

const allPages = [
  ...staticPages,
  ...hearingAidPages,
  ...otherProductPages,
  ...investorSubPages,
  ...blogPostPages,
];

// --- Guard against duplicate output paths ----------------------------------
const seen = new Map();
for (const p of allPages) {
  if (seen.has(p.path)) {
    console.error(`✖ Duplicate output path: ${p.path} (from "${p.title}" and "${seen.get(p.path)}")`);
    process.exit(1);
  }
  seen.set(p.path, p.title);
}

// --- Write files ------------------------------------------------------------
let count = 0;
for (const p of allPages) {
  const html = layout({
    title: p.title,
    description: p.description,
    path: p.path,
    canonical: p.canonical || null,
    noindex: p.noindex || false,
    baseHref: p.baseHref || null,
    breadcrumbs: p.breadcrumbs || [],
    jsonld: p.jsonld || [],
    head: p.head || "",
    content: p.content,
  });
  await writeFile(path.join(__dirname, p.path), html, "utf8");
  count++;
}

// --- sitemap.xml + robots.txt ------------------------------------------------
// Only canonical, indexable pages are listed (geo4 canonicals to the centers
// page; 404 is noindex).
const sitemapPages = allPages.filter((p) => !p.canonical && !p.noindex);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPages.map((p) => `  <url><loc>${site.domain}/${p.path}</loc></url>`).join("\n")}
</urlset>
`;
await writeFile(path.join(__dirname, "sitemap.xml"), sitemap, "utf8");

const robots = `User-agent: *
Allow: /

Sitemap: ${site.domain}/sitemap.xml
`;
await writeFile(path.join(__dirname, "robots.txt"), robots, "utf8");

console.log(`✔ Built ${count} pages + sitemap.xml (${sitemapPages.length} URLs) + robots.txt`);
for (const p of allPages) console.log(`   ${p.path}`);
