# IIR Labs — Design System

## Company context

**IIR Labs Tecnologia Ltda** is a Brazilian technology company building intelligent data and AI-automation systems for service businesses. Public tagline: **"IA • Automação • Dados"** (Intelligence • Innovation • Results is the internal-facing meaning of the name; the founder's initials, IR, are the second).

Structure: a **core value layer** (Automação + Inteligência/Dados — N8N automations, AI agents for WhatsApp/CRM, data engineering, Power BI dashboards) funds itself today through a **cash engine** (Meta/Google Ads traffic management for clients like Clear Marketing), both feeding a **strategic product destination**: SaaS products, led by **IR Metrics** — a multi-tenant paid-media monitoring platform (Meta Ads + Google Ads, dashboards, KPIs, alerts, white-label), currently in advanced MVP. Two products sit in backlog: IR Finance (personal finance w/ AI, Christian-Brazilian family audience) and a fitness app (concept stage).

Current phase: **Fundação** (foundation) — the founder's service work funds product development; every service engagement doubles as a "lab" that validates what eventually becomes reusable product.

## Sources provided

- Brand sheet: `uploads/ID Visual IIR.png` (full guideline sheet: logo lockups, color palette, type, icon style, mockups) — copied to `assets/brand-guidelines-sheet.png`
- Logo exports: `uploads/2.png` through `uploads/8.png` — cropped/organized into `assets/logo-*.png` (see Iconography/Logo section below)
- Font files: Manrope family (ExtraLight–ExtraBold + variable), all copied to `assets/fonts/`
- Company description doc (pasted by user, not a file) — full mission/vision/values/roadmap text, summarized above and used for Content Fundamentals
- No codebase, no Figma file, and no product screenshots beyond the small mockup photos on the brand sheet (business card, signage, laptop dashboard, phone app, hoodie) were provided. The laptop/phone mockups in the brand sheet are **stylized renders**, not real product UI — the IR Metrics UI kit in this system is an original dark-dashboard design consistent with the brand palette, not a recreation of a real screen.

## Index

- `styles.css` — root stylesheet, imports everything below
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`
- `assets/` — logos (color, white/reversed, app icon, dark-bg lockup), `fonts/`, brand guideline sheet, icon reference
- `guidelines/` — `@dsCard` specimen HTML files (Colors, Type, Spacing, Brand groups)
- `components/core/` — Button, Badge, Tag, Card, Input, Checkbox, Switch, Tabs, Tooltip, Dialog (each `.jsx` + `.d.ts` + `.prompt.md` + one card `.html`)
- `ui_kits/ir-metrics/` — dark dashboard product recreation (login → overview → campaign detail), click-through
- `SKILL.md` — Claude-Code-compatible skill wrapper

## Content fundamentals

- **Language:** Brazilian Portuguese for all customer-facing copy (site, product UI, deck). English is reserved for the brand pillars line and technical/API terms already in English (N8N, Webhooks, Dashboard, Insights).
- **Voice:** direct, technical-confident, unhyped. Sentences state what the system does, not how amazing it is. E.g. positioning line: *"Empresa especializada na construção de Sistemas Inteligentes para Crescimento de Negócios."* — a definition, not a slogan.
- **Person:** speaks about "a empresa" / "o sistema" in third person in brand docs; product UI should switch to direct **você** for in-app copy (dashboards, empty states, CTAs).
- **Casing:** Sentence case for body copy and UI labels. Small caps / letter-spaced all-caps reserved for the tagline and section eyebrows only (e.g. "INTELLIGENCE • INNOVATION • RESULTS"), never for paragraph text.
- **Punctuation as structure:** the brand pillars and slogan are strung together with a middle dot **"•"**, not commas or slashes — reuse that separator for any 2–3 item eyebrow/tagline treatment.
- **No emoji** in brand-facing copy. Internal strategy docs use colored circle emoji (🔵🟢🟣) purely as informal priority/status flags in planning notes — do not carry these into product or marketing surfaces.
- **Vibe:** engineering lab, not agency. Copy favors precision words — *sistemas, engenharia, automação, mensurável, escalável* — over marketing words like *revolucionário, incrível*. The company explicitly values "Simplicidade — simples escala, sofisticado falha," so prefer short declarative sentences over long persuasive ones.
- **Numbers/proof:** when the source docs cite specifics they're operational, not vanity (e.g. "MVP avançado," "clientes pagantes recorrentes") — keep any UI copy proof grounded in real operational states, not invented metrics.

## Visual foundations

- **Palette:** a dark-navy/near-black canvas (`--iir-navy-900 #0A1B2A`, `--iir-black-950 #050B12`) carries a single vivid accent duo — cyan `#2DDCEB` fading to blue `#1296D4` — almost always as a diagonal gradient on the logo mark and on data/accent elements. Neutral fog-gray `#AAB7C4` and off-white `#F8FAFC` are the only other colors; there is no secondary hue family. Max one background color per surface: either the navy/black canvas, or plain white for light contexts (print, light-mode marketing) — never both mixed on one screen.
- **Type:** Manrope only, one family across all weights (ExtraLight through ExtraBold). Display/heading sizes lean on SemiBold/Bold/ExtraBold; body copy sits at Regular/Medium. Tight letter-spacing (`-0.02em`) at display sizes for a dense, engineered look; wide tracking (`0.16em`) + uppercase for the tagline/eyebrow treatment only, echoing "INTELLIGENCE • INNOVATION • RESULTS."
- **Backgrounds:** flat color, no photography, no textures or grain, no illustration patterns. The only imagery in the brand sheet is product-mockup photography (laptop/phone/hoodie/signage) used purely to show the mark in context — not a reusable visual motif. Full-bleed dark navy/black is the default canvas for anything digital.
- **Gradients:** exactly one gradient — the cyan→blue diagonal (135°) used on the logomark, the accent stroke of data lines/bars, and sparingly on primary buttons or active-state glows. Never used as a full-bleed page background; keep it confined to marks, icons, thin accent strokes, or a single primary CTA.
- **Iconography motif:** thin (1.5–2px) outline/line-art icons in cyan, echoing the node-and-line "network" glyph inside the logo (circles connected by straight lines, like a small graph/chart). Icons read as technical diagrams, not friendly pictograms.
- **Corner radii:** logo app-icon uses a large superellipse squircle radius (~22% of edge) — reuse that ratio for app-icon-style tiles only. UI surfaces are more restrained: 10px for cards/inputs, 6px for small controls (badges/tags/chips lean toward pill/999px instead), 16–24px reserved for large feature cards/modals.
- **Cards:** dark surface one step lighter than canvas (`--color-bg-surface-raised`), 1px `rgba(170,183,196,.16–.28)` hairline border (no drop shadow needed on dark — shadows read better as a subtle glow, `--shadow-glow-cyan`, only on hover/active/selected states). On light/print contexts, cards get a soft `--shadow-m` instead of a border.
- **Borders vs. glow:** default resting state = hairline border only. Focus/active/selected state = swap hairline for a 1px cyan ring plus soft outer glow (`--color-focus-ring`), never a color fill change on the border alone.
- **Hover states:** subtle brighten — text/icons shift from `--color-text-secondary` to `--color-text-primary`, filled buttons lighten ~8%, bordered surfaces raise border from subtle→default. No color inversion, no scale-up.
- **Press/active states:** slight scale-down (0.97) plus a brief opacity dip (~0.9) on buttons; instant, no bounce.
- **Motion:** minimal and purposeful — 120–200ms ease-out (`--ease-standard`) fades/opacity and small translateY(4px) entrances. No bounce, no spring, no parallax. This is an engineering brand: motion should feel instant and precise, not playful.
- **Transparency/blur:** used sparingly for layered dark-UI depth — translucent borders (rgba fog-gray at 16–44% opacity) and a translucent modal scrim (`rgba(5,11,18,.72)` + light backdrop-blur). Never blur body text or primary content.
- **Imagery color vibe:** N/A — no photographic imagery is part of the system yet (see Iconography below for the one exception, product-mockup context shots kept only as brand-sheet reference, not reusable assets).
- **Layout rhythm:** generous dark negative space around a small number of high-contrast accented elements (charts, single stat callouts) — the brand sheet itself demonstrates this: one accent color pops out of a mostly empty dark or white field.

## Iconography

- The brand sheet shows a small custom **line-icon set** (bar-chart, network/nodes, database, cloud, radar/target, AI chip, shield, trend-arrow) in the same thin cyan outline style as the logo's node glyph — no separate icon SVG files were supplied, only this rendered reference sheet (kept at `assets/brand-guidelines-sheet.png`).
- No icon font, emoji set, or unicode-glyph convention is defined by the source material.
- **Substitution:** components and the UI kit use **Lucide** icons via CDN (`unpkg.com/lucide`), stroke width 1.75–2, colored `--color-text-secondary` at rest / `--color-accent-primary` on active — the closest open stroke-style match to the brand-sheet icons. Flagging this substitution: if IIR Labs has (or commissions) a real icon set matching the node/circuit motif, swap it in and update this note.
- The node-and-line motif inside the logo itself (small circles joined by straight segments, evoking a rising trendline / network graph) is the one truly custom shape in the system — it appears only as part of the lockup, never used standalone as a UI icon in the source material, so it isn't extracted as a separate glyph here.

## Logo & lockups

All exports are transparent PNGs cropped from the provided renders (no vector/SVG source was supplied).

| File | Use |
|---|---|
| `assets/logo-horizontal-color.png` | Primary lockup — icon + "IIR \| LABS" wordmark, full color. Default for light backgrounds. |
| `assets/logo-stacked-color.png` | Stacked lockup, full color. Use where a taller/narrower footprint is needed (app splash, square social). |
| `assets/logo-lockup-dark-bg.png` | Horizontal, icon in color + wordmark in white. For medium-dark colored backgrounds (navy header bars, hero sections). |
| `assets/logo-horizontal-white.png` | Fully white/monochrome horizontal. For solid dark or photographic backgrounds. |
| `assets/logo-stacked-white.png` | Fully white/monochrome stacked. Dark-background equivalent of the stacked lockup. |
| `assets/logo-app-icon.png` | App-icon tile (dark navy squircle, cyan mark). Use as-is for favicons/app icons — do not recolor. |
| `assets/brand-guidelines-sheet.png` | Original full guideline sheet, kept for reference (palette, type, icon set, real-world mockups). |

## Fonts

Manrope (ExtraLight, Light, Regular, Medium, SemiBold, Bold, ExtraBold) supplied as static `.ttf` files by the user and copied to `assets/fonts/` — no substitution needed, this is a Google Font and the files are complete across the weight range the brand sheet calls for.

## Intentional additions

No component inventory or codebase was supplied, so the component set below is an original, from-scratch set sized to a SaaS-dashboard + marketing-site brand: Button, Badge, Tag, Card, Input, Checkbox, Switch, Tabs, Tooltip, Dialog. These are standard primitives, not brand-specific inventions — flagged here per instructions since no source enumerates them.
