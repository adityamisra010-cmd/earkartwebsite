# Earkart — Photography & Image Asset Shot-List

Prepared for earkart.in rebuild. Every slot below maps 1:1 to an `imagePlaceholder()` call in the codebase (`src/pages/*.mjs`, `src/lib/templates.mjs`, `src/lib/components.mjs`). Ratios shown are the ratios the layout crops to — shoot wider and higher-res than the crop.

---

## 1. Brand art direction

Earkart imagery should feel **premium, clinical-but-warm**: the reassurance of a listed, technology-led healthcare company delivered with the intimacy of a family conversation. Photograph real Indian families, seniors and audiologists — grandparents with grandchildren, a daughter accompanying her father to a fitting, a clinician adjusting a device with care. Avoid stock clichés entirely: no white-coat-with-stethoscope poses, no exaggerated "cupping the ear" gestures, no over-retouched Western stock models. Faces should be candid or gently directed, mid-interaction, with genuine expressions.

Light and palette carry the premium feel. Use **soft, directional natural light** (window light, golden-hour interiors) with warm neutral environments — ivory, oat, warm grey, pale wood — that sit comfortably against the site's **navy / teal / gold** UI. Wardrobe and props should echo the palette in muted tones (teal kurta, navy shirt, brass/gold accents) without ever matching it literally. Keep depth of field shallow on people, clean and controlled on products. Negative space matters: heroes and split-section images need quiet areas where the eye can rest, since text and gold CTAs sit beside them.

---

## 2. Shot-list by site area

### 2.1 Home (`index.html`)

| Slot | Suggested shot | Orientation & ratio | Notes |
|---|---|---|---|
| Hero — "Audiologist consultation — premium healthcare imagery" | Indian audiologist (30s–40s, smart casual clinic wear, no stethoscope) fitting a discreet RIC aid on a smiling senior; daughter/son visible soft in background | Portrait, 4:5 | The single most important image on the site. Window light from camera left, warm ivory clinic interior, teal accent in wardrobe. Subject's eyeline toward device/patient, not camera. |
| "Earkart team / hearing care visual" (Why Earkart split) | Small Earkart team group in a real clinic or office — relaxed, mid-discussion, branded environment subtly visible | Landscape, 4:3 | Authentic, not a lineup. Can substitute a candid of front-desk welcome moment. |
| "OMNI remote audiometry workflow" | Technician/partner-clinic staff conducting a remote hearing test: patient with audiometry headphones, tablet/laptop showing test UI, connectivity implied | Landscape, 4:3 | Dark-tone slot — shoot moody/low-key or plan for a navy duotone treatment. Screen content must be the real OMNI UI or cleanly replaceable in post. |
| "Hearing awareness illustration" | Commissioned illustration (not photo): warm flat/line illustration of sound waves connecting a multi-generation Indian family | Landscape, 4:3 | Brief the illustrator with navy/teal/gold palette. Alternative: overhead photo of family at dinner, conversation mid-flow. |
| Featured family cards — EQFY, TINY, Fame, Radius (×4, shared with Hearing Aids hub) | Studio packshots of each family's hero device — see Product photography spec (§3) | Landscape, 4:3 | Same lighting/sweep for all four so the card row reads as one system. |
| Partner CTA — "Partner clinic network visual" (shared component, see §2.8) | See Partner/OMNI table | Landscape, 4:3 | Dark-tone slot. |

### 2.2 About (`about-us.html`)

| Slot | Suggested shot | Orientation & ratio | Notes |
|---|---|---|---|
| "Earkart founding story visual" | Documentary-style frame from Earkart's early days or present HQ: founder at a workbench/clinic, or hands assembling a hearing aid with archival feel | Landscape, 4:3 | If archival photos exist, restore and grade one to match the palette; authenticity beats polish here. |
| "Leadership portrait placeholder" | Environmental portrait of MD & CEO (Rohit Misra) in the clinic/office — seated or standing, engaged, not a boardroom pose | Landscape, 4:3 (portrait-toned slot) | Distinct from the formal board headshots (§4): this one is warmer, environmental, with visible workspace context. |
| "Technology + human care" | Split-story frame: close macro of a hearing aid on a fingertip in foreground, blurred audiologist–patient interaction behind | Landscape, 4:3 | Dark-tone slot — low-key lighting, teal/navy grade. Communicates "engineering meets empathy". |

### 2.3 Centers (`earkart-centers.html` / Find OMNI Centers)

No `imagePlaceholder()` slots exist on this page today (it is a locator/search UI) — the following are recommended supporting assets for center cards and future page upgrades.

| Slot | Suggested shot | Orientation & ratio | Notes |
|---|---|---|---|
| Center exterior (per flagship center) | Clean frontal or three-quarter shot of the clinic facade with Earkart/OMNI signage, daylight, minimal street clutter | Landscape, 4:3 | Shoot early morning for empty frontage. One per flagship city center. |
| Center interior — reception | Welcoming reception/waiting area with one staff member and one patient, natural light | Landscape, 4:3 | Emphasize cleanliness and warmth; declutter counters. |
| Center interior — audiometry booth | Patient in soundproof booth wearing headphones, audiologist at console visible through glass | Landscape, 4:3 | The signature "clinical credibility" shot; reusable on OMNI and education pages. |
| Locator map fallback / header | Stylized India map graphic with center pins in brand teal/gold on navy | Landscape, 16:9 | Design asset, not photography. |

### 2.4 Hearing Aids education (hub `hearing-aids.html` + `hearing-loss.html`)

| Slot | Suggested shot | Orientation & ratio | Notes |
|---|---|---|---|
| Hearing Aids hub — "Close-up of a discreet hearing aid" | Macro of a RIC aid worn on a real ear (senior Indian subject, grey hair pulled back) showing how discreet it is | Landscape, 4:3 | Product-toned slot. Focus on the device, skin tones accurate; no visible retouching halos. |
| Hearing Loss — "Warm family conversation illustration" | Multi-generation Indian family on a sofa, grandparent laughing mid-conversation with grandchild | Landscape, 4:3 | Warm, softly lit, genuine laughter. This page is emotional entry-point for families researching a parent's hearing. |
| Hearing Loss — "Audiogram / hearing test visual" | Audiologist's screen showing an audiogram, patient with headphones in soft-focus foreground; or a designed audiogram graphic on navy | Landscape, 4:3 | Dark-tone slot. If photographic, ensure screen shows a plausible, anonymized audiogram. |
| Hearing-aid type cards (RIC / IIC / BTE / ITE / ITC / CIC) | Optional future upgrade: one consistent packshot per style on identical sweep | Landscape, 4:3 | Cards are currently text-only; shoot the set anyway while devices are in studio — cheap to capture, useful everywhere. |

### 2.5 Product pages (22 hearing-aid model pages + 11 other-product pages)

Each hearing-aid page template needs **three image types**; sibling/related cards reuse the hero packshot.

| Slot | Suggested shot | Orientation & ratio | Notes |
|---|---|---|---|
| "{Model} product image" (hero, ×22) | Hero packshot per model on ivory sweep — see §3. Models: EQFY; TINY; Fame, Fame P, Fame SP, Fame 2T; Radius, Radius Pro, Radius 8/8P/12/16, Radius P8/M8/H8, Radius P 16/M 16/H 16, Radius 16 BTE, Radius P/M/H 16 BTE | Landscape, 4:3 | Variants within a family (e.g. all Radius 16-channel RICs) may share a base packshot only if physically identical — confirm with product team; otherwise shoot each SKU. |
| "{Model} lifestyle image" (×22, can pool ~6–8 shared shots) | In-context wear shots matched to audience: EQFY — urban 55+ professional on a video call; TINY — 40s user in a meeting, device invisible; Fame — senior at home with family, easy handling; Radius — audiologist programming the device at a fitting session | Landscape, 4:3 | Shoot one lifestyle scene per family plus 2–3 extras; template reuses per model. Keep wardrobe navy/teal-adjacent. |
| Related-product cards ("{name}") | Reuse hero packshots | Landscape, 4:3 | No new shots needed — enforced by consistent packshot system. |
| Other products — "{name} image" (×11) | Packshots: TLM Kit, TLM Kit-1, TLM Kit-2, TLM Kit-3 (kits open, contents fanned); MSIED Kit (open case, materials arranged grid-style); Hearing Aid Test System (three-quarter on sweep, screen on); LH 71 & LH 72 BTE Kits (components arranged flat-lay); Radius Technical Specification (styled document/cover render); Adjustable Walker (full three-quarter, plus height-adjust detail); Zinc Air Battery Size 13 (blister pack + loose cells macro) | Landscape, 4:3 | Same sweep and lighting as hearing aids for portfolio coherence. Kits benefit from a top-down "knolling" arrangement. |
| Other-products listing cards (`other-products.html`) | Reuse the 11 packshots above | Landscape, 4:3 | — |

### 2.6 Board (`board-details.html`)

| Slot | Suggested shot | Orientation & ratio | Notes |
|---|---|---|---|
| "Rohit Misra — portrait" (MD & CEO) | Formal headshot per §4 spec | Square, 1:1 | Executive tag. |
| "Ajay Kumar Giri — portrait" (Director & CFO) | Formal headshot per §4 spec | Square, 1:1 | Executive tag. |
| "Monika Misra — portrait" (Whole-time Director) | Formal headshot per §4 spec | Square, 1:1 | Executive tag. |
| "Rahul Salesha — portrait" (Director) | Formal headshot per §4 spec | Square, 1:1 | Non-Executive tag. |
| Independent Director ×2 (names TBC in `board.mjs`) | Formal headshots per §4 spec | Square, 1:1 | Schedule once appointments are confirmed; hold two slots in the studio day. |

### 2.7 Blog (`blog.html` + 4 article pages)

| Slot | Suggested shot | Orientation & ratio | Notes |
|---|---|---|---|
| "A calm, practical guide to buying your first hearing aid" — hero + featured card | Flat-lay or counter scene: 2–3 hearing aid styles beside a notepad and reading glasses, warm light — "considered decision" mood | Landscape, 16:9 (hero & featured card) + 4:3 crop (related card) | Featured post — this image also leads the blog index. Compose center-weighted so both crops work. |
| "Understanding hearing loss: signs, types and when to act" — hero + card | Senior turning toward off-camera family voice at a dinner table, gentle expression of effort/attention | 16:9 + 4:3 crop | Sensitive subject — dignity, never distress. |
| "Living with tinnitus: what helps and what to expect" — hero + card | Quiet conceptual frame: person by a window at dusk with tea, calm; or abstract sound-ring illustration in brand palette | 16:9 + 4:3 crop | Avoid literal "hands over ears" cliché. |
| "Why early intervention matters for hearing health" — hero + card | Adult daughter and father reviewing a hearing-test result together with an audiologist, hopeful tone | 16:9 + 4:3 crop | Bridges to appointment CTA — should feel actionable and positive. |

### 2.8 Partner / OMNI (partner CTA component + home OMNI section)

| Slot | Suggested shot | Orientation & ratio | Notes |
|---|---|---|---|
| "Partner clinic network visual" (shared partner CTA, dark tone) | Partner clinic owner at their front desk with OMNI equipment/tablet, or a stylized network graphic — India map with connected clinic nodes in teal/gold on navy | Landscape, 4:3 | Sits on a dark section: shoot low-key or design as a dark-native graphic. Appears site-wide wherever the partner CTA renders. |
| "OMNI remote audiometry workflow" (home, dark tone) | See Home table — remote test in progress with visible tele-audiology link | Landscape, 4:3 | Consider a 3-frame variant (patient / connection / remote audiologist) for future use in a workflow diagram. |
| OMNI supporting set (recommended) | B-roll stills: OMNI hardware detail, headphone placement close-up, remote audiologist at console | Landscape, 4:3 and 16:9 | Not yet slotted in code, but cheap to capture during the OMNI shoot; will serve the partner deck and press kit. |

---

## 3. Product photography spec

**Set-up (all products):**
- **Background:** seamless warm-white/ivory sweep (approx. #F7F4EF) — pure white feels cold against the site's warm neutrals; keep it consistent across every SKU.
- **Lighting:** one large soft key at 45° upper-left, white fill card right, subtle top rim for edge separation. No mixed color temperatures.
- **Shadows:** soft contact shadow directly beneath the product, falling gently to lower-right — identical angle and softness on every shot. Never floating/cut-out-with-no-shadow, never harsh double shadows. If compositing, use one master shadow template.
- **Color:** shoot tethered with a color checker in frame first; hearing-aid shell colors (beige, grey, black, brown) must be faithful — buyers match to skin/hair tone.

**Angles per hearing-aid SKU (EQFY, TINY, Fame family, Radius family):**
1. **Hero three-quarter** (device at 30–40°, receiver wire naturally curved) — the 4:3 page-hero and card shot.
2. **Profile side view** — shows slimness of RIC bodies (EQFY, Radius RIC) and robustness of BTE bodies (Fame, Radius BTE).
3. **Pair shot** — left + right devices mirrored, slight overlap.
4. **Macro detail** — microphone ports, volume/program controls (Fame 2T's dual control; Radius push-button), charging contacts on EQFY (rechargeable is a headline feature), battery door on Fame/Radius BTE.
5. **Scale reference** — device on a fingertip or beside a coin (TINY especially: its whole story is "virtually invisible", so the fingertip macro is its hero).
6. **In-ear worn crop** — tight on ear, for education pages (one per style: RIC, IIC/CIC, BTE, ITE/ITC).

**Family-specific notes:**
- **EQFY:** include charging case open with devices docked; a "no batteries" story frame (case + devices only).
- **TINY:** prioritize invisibility — worn shot from 1 m where the device cannot be seen, plus the fingertip macro.
- **Fame / Fame P / Fame SP / Fame 2T:** emphasize solidity and simple controls; shoot with ear-mould and tubing attached as actually dispensed.
- **Radius (all RIC/BTE, 8/12/16 ch):** add one "programming" frame — device connected to fitting hardware/software to signal programmability.

**Other products:**
- **TLM Kits & MSIED Kit:** top-down knolling of contents on the sweep + closed-case shot; one lifestyle frame of a therapist/teacher using materials with a child (education market).
- **Hearing Aid Test System:** three-quarter with display on (real UI), plus detail of test chamber with an aid inside.
- **LH 71 / LH 72 BTE component kits:** organized flat-lay grid of components; strictly technical, no props.
- **Adjustable Walker:** full three-quarter, folded view, and macro of the height-adjustment mechanism; one lifestyle frame with a senior user (matches site's mobility-support audience).
- **Zinc Air Battery Size 13:** blister pack upright + loose cells macro showing size marking; include the color-code tab (orange for size 13).

Deliver every packshot on-sweep **and** as a cut-out PNG with the master shadow, so cards and future dark sections can both be served.

---

## 4. Board portrait spec

- **Backdrop:** identical for all six sitters — plain mid-grey or deep-navy seamless (navy preferred; harmonizes with investor pages). Same backdrop roll, same session if at all possible; if shot across cities, ship the same backdrop and lighting diagram.
- **Lighting:** classic corporate two-light setup — large soft key at 45°, fill at −1.5 stops, subtle hair light. Identical ratio for every sitter.
- **Framing & crop:** head-and-shoulders, eyes at upper third, camera at eye level, 85–105 mm equivalent. Shoot loose (waist-up) and deliver a **1:1 square master crop** (the site renders 1:1 portrait slots) plus the uncropped frame for print/annual-report use.
- **Pose & expression:** body angled 20–30° off-axis, face to camera, open confident expression — warm rather than stern; this is a healthcare company.
- **Attire:** business formal in dark, solid colors — navy/charcoal suits or dark bandhgala; sarees/kurtas in deep solids welcome. Avoid fine stripes/checks (moiré), pure white shirts against the navy backdrop (blown highlights), and large logos or heavy jewelry. A single teal or gold accent (tie, pocket square, dupatta) is encouraged.
- **Consistency:** same retouching level for all (skin natural, no plastic smoothing), same grade, same crop geometry. Reserve two identical setups for the yet-unnamed Independent Directors so late additions match seamlessly.

---

## 5. Technical delivery spec

**Resolution minimums (2× the largest rendered size):**

| Use | Ratio | Minimum delivery |
|---|---|---|
| Home hero | 4:5 | 1600 × 2000 px |
| Split/section images | 4:3 | 1600 × 1200 px |
| Product page heroes & packshots | 4:3 | 1600 × 1200 px (shoot at full sensor res; archive RAW + 4000 px TIFF masters) |
| Blog heroes / featured card | 16:9 | 1920 × 1080 px |
| Card thumbnails (families, related, blog cards) | 4:3 | 1200 × 900 px |
| Board portraits | 1:1 | 1200 × 1200 px |

**Format & compression:**
- Primary: **WebP** (quality ~80 photos, ~85 packshots); fallback: **JPG** (quality ~78, progressive) served via `<picture>`/`srcset` at 1× and 2×.
- Cut-outs with shadow: WebP with alpha (PNG fallback only where alpha-JPG is unacceptable).
- Target file sizes (WebP, 1× variant): hero ≤ 250 KB; section/split images ≤ 150 KB; packshots ≤ 120 KB; card thumbs ≤ 80 KB; portraits ≤ 100 KB. JPG fallbacks may run ~30% larger.
- sRGB color space, metadata stripped except copyright.

**Naming convention (mirrors page slugs in the codebase):** `product-{slug}-hero-4x3.webp`, `product-{slug}-lifestyle-4x3.webp`, `board-{name-kebab}-1x1.webp`, `blog-{slug}-16x9.webp`, `home-hero-4x5.webp`, etc., stored under `assets/img/`.

**Alt-text guidance (replaces each placeholder's `aria-label`):**
- Describe subject + context in one clause, ≤ 125 characters; never begin with "image of"/"photo of".
- Products: include full model name and style — e.g. `"Radius P 16 receiver-in-canal hearing aid, three-quarter view"` — the model name matters for accessibility and SEO parity with the page H1.
- People: role and action, not appearance — e.g. `"Audiologist fitting a hearing aid for a senior patient at an Earkart center"`. Portraits: `"{Name}, {Role}, Earkart"`.
- Purely decorative graphics (waves, map backgrounds): `alt=""` so screen readers skip them.
- Hindi-language pages/resources should carry Hindi alt text to match page language.

**Shoot logistics summary:** 1 studio day (all packshots + macros + board portraits), 1 clinic day (hero, consultation, OMNI/audiometry, center interiors), 1 home-lifestyle day (family scenes, blog set) — approximately 70–80 final selects covering every slot above.
