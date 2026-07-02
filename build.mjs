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
  otherProductsPage(), terms(), privacy(),
];

const hearingAidPages = hearingAidModels.map((model) => {
  const family = familyBySlug[model.slug] || null;
  const siblings = hearingAidModels.filter((m) => m.family === model.family && m.slug !== model.slug);
  return hearingAidProductPage(model, { family, siblings });
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
    breadcrumbs: p.breadcrumbs || [],
    jsonld: p.jsonld || [],
    head: p.head || "",
    content: p.content,
  });
  await writeFile(path.join(__dirname, p.path), html, "utf8");
  count++;
}

console.log(`✔ Built ${count} pages:`);
for (const p of allPages) console.log(`   ${p.path}`);
