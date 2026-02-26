# craftgarden.studio — Figma MCP Design System Rules

> Generated for Figma Model Context Protocol integration.
> Use this document when converting Figma designs to code or code to Figma.

---

## 1. Token Definitions

### Where tokens are defined

All design tokens live in a single file:

**`src/app/globals.css`** — using Tailwind CSS 4's `@theme` directive.

```css
@theme {
  /* Background */
  --color-bg-cream: #FAFAF5;
  --color-bg-warm: #F5F2EC;
  --color-bg-card: #F0EDE6;

  /* Text */
  --color-text-deep: #2A4A32;
  --color-text-muted: #5C7260;
  --color-text-light: #8A9E8C;

  /* Botanical Accents */
  --color-accent-leaf: #6B8F71;
  --color-accent-sage: #9BB09E;
  --color-accent-moss: #4A7051;
  --color-accent-bark: #8B7355;
  --color-accent-bloom: #C4926B;

  /* Plant-Specific Colors — 杏・椿・楓 */
  --color-anzu: #F08C28;
  --color-anzu-hot: #FF9A1F;
  --color-tsubaki: #E05577;
  --color-tsubaki-hot: #F0487A;
  --color-kaede: #D63E2F;
  --color-kaede-hot: #E8442E;
  --color-bark: #7A5E3A;
  --color-bark-dark: #5C4428;
  --color-leaf-dark: #3D6B45;

  /* Category */
  --color-cat-product: #6B8F71;
  --color-cat-tool: #7E9AAB;
  --color-cat-content: #B8956A;

  /* Borders */
  --color-border: rgba(107, 143, 113, 0.08);
  --color-border-hover: rgba(107, 143, 113, 0.2);

  /* Typography */
  --font-sans: var(--font-dm-sans), system-ui, -apple-system, sans-serif;
  --font-heading: var(--font-nunito), system-ui, -apple-system, sans-serif;

  /* Fluid Type Scale */
  --text-display: clamp(2.4rem, 6.5vw, 4rem);
  --text-h2: clamp(1.7rem, 4vw, 2.5rem);
  --text-h3: clamp(1rem, 1.5vw + 0.5rem, 1.15rem);
  --text-body: clamp(0.875rem, 0.5vw + 0.75rem, 1rem);
  --text-small: clamp(0.8rem, 0.3vw + 0.7rem, 0.88rem);

  /* Border Radius */
  --radius-card: 1rem;
  --radius-btn: 999px;

  /* Animation */
  --animate-fade-in-up: fade-in-up 0.8s ease-out both;
}
```

### Token naming convention

```
category-role-variant

--color-bg-cream        → color / background / cream
--color-text-deep       → color / text / deep
--color-accent-leaf     → color / accent / leaf
--color-cat-product     → color / category / product
--color-anzu            → color / plant-specific / anzu
--text-display          → text / scale / display
--radius-card           → radius / card
```

### Token transformation

No transformation pipeline. Tokens are defined directly as CSS custom properties in `@theme` and consumed via Tailwind utility classes (e.g., `bg-bg-cream`, `text-accent-leaf`, `text-text-deep`).

### Figma ↔ Code token mapping

| Figma Variable Name | CSS Token | Tailwind Class | HEX |
|---|---|---|---|
| `bg/cream` | `--color-bg-cream` | `bg-bg-cream` | `#FAFAF5` |
| `bg/warm` | `--color-bg-warm` | `bg-bg-warm` | `#F5F2EC` |
| `bg/card` | `--color-bg-card` | `bg-bg-card` | `#F0EDE6` |
| `text/deep` | `--color-text-deep` | `text-text-deep` | `#2A4A32` |
| `text/muted` | `--color-text-muted` | `text-text-muted` | `#5C7260` |
| `text/light` | `--color-text-light` | `text-text-light` | `#8A9E8C` |
| `accent/leaf` | `--color-accent-leaf` | `text-accent-leaf` / `bg-accent-leaf` | `#6B8F71` |
| `accent/sage` | `--color-accent-sage` | `text-accent-sage` | `#9BB09E` |
| `accent/moss` | `--color-accent-moss` | `bg-accent-moss` | `#4A7051` |
| `plant/anzu` | `--color-anzu` | `fill: var(--color-anzu)` | `#F08C28` |
| `plant/tsubaki` | `--color-tsubaki` | `fill: var(--color-tsubaki)` | `#E05577` |
| `plant/kaede` | `--color-kaede` | `fill: var(--color-kaede)` | `#D63E2F` |
| `category/product` | `--color-cat-product` | `text-cat-product` | `#6B8F71` |
| `category/tool` | `--color-cat-tool` | `text-cat-tool` | `#7E9AAB` |
| `category/content` | `--color-cat-content` | `text-cat-content` | `#B8956A` |

---

## 2. Component Library

### Where components are defined

```
src/components/
├── Navigation.tsx       # Fixed nav bar (Client Component)
├── Hero.tsx             # Hero section with botanical illustrations
├── Products.tsx         # Product card grid + category filter (Client Component)
├── Philosophy.tsx       # Philosophy section
├── TechStack.tsx        # Tech stack display
├── Footer.tsx           # Footer
├── BotanicalBackground.tsx  # Page-wide floating botanical motifs
└── VineDivider.tsx      # Section divider with vine + berry SVG
```

### Component architecture

- **Server Components** by default (Next.js App Router convention)
- **Client Components** (`"use client"`) only when needed: `Navigation.tsx` (scroll listener), `Products.tsx` (filter state)
- **No component library** (Storybook, etc.) — components are purpose-built for this single-page site
- **Inline SVG** for all icons and decorative elements (no icon library)
- **No external UI library** — custom components with Tailwind classes

### Key component patterns

#### Product Card anatomy (Products.tsx)

```
┌────────────────────────────────┐  ← rounded-[16px], border accent-leaf/8
│  ┌──────────────────────────┐ │ │  ← shiori-ribbon (CSS ::before/::after)
│  │  botanical strip SVG     │ ▼ │  ← h-12, category gradient bg
│  └──────────────────────────┘   │
│  ┌───┐                         │
│  │ ⊕ │  ← icon (h-11 w-11, rounded-xl, category bg/12)
│  └───┘                         │
│  PRODUCT     ← badge (0.7rem, uppercase, +0.08em)
│  Product Name ← h3 (Nunito 700)
│  EN description ← small, text-muted
│  JP description ← 0.8rem, text-light
│                                 │
│  Visit →     ← accent-leaf, 0.83rem
└────────────────────────────────┘
```

#### Category ↔ Plant ↔ Color mapping

| Category | Plant | Color Token | Shiori Class |
|---|---|---|---|
| Product | 楓 Kaede | `cat-product` / `kaede` | `.shiori-product` |
| Tool | 椿 Tsubaki | `cat-tool` / `tsubaki` | `.shiori-tool` |
| Content | 杏 Anzu | `cat-content` / `anzu` | `.shiori-content` |

---

## 3. Frameworks & Libraries

| Layer | Technology | Version |
|---|---|---|
| **Framework** | Next.js (App Router) | 15 |
| **UI Library** | React | 19 |
| **Styling** | Tailwind CSS | 4 (`@theme` directive) |
| **Build** | Next.js built-in (Turbopack dev, Webpack prod) | — |
| **Package Manager** | pnpm | — |
| **Deploy** | Vercel | — |
| **Fonts** | `next/font/google` (DM Sans + Nunito) | — |

### Styling approach

- **Tailwind CSS 4** with `@theme` for design tokens (not `tailwind.config.js`)
- **Utility-first**: All styling via Tailwind classes in JSX
- **Global CSS**: `src/app/globals.css` for tokens, keyframes, base styles, and `.shiori-*` custom classes
- **No CSS Modules, no Styled Components**
- **Responsive**: Tailwind breakpoints (`sm:`, `md:`, `lg:`)
- **Dark mode**: Not implemented (light-only "Quiet Garden" theme)

---

## 4. Asset Management

### No external images

This project is **typography-driven** — no raster images, no photographs, no external assets.

All visual elements are:
- **Inline SVG** in React components (icons, botanical motifs, trees, flowers)
- **CSS** for decorative effects (gradients, shadows, animations)

### SVG patterns

- **`<defs>` + `<use>`** for repeated motifs (e.g., kaede leaves `#kl`, tsubaki flowers `#tf`, anzu blossoms `#af`)
- **Plant-specific fill colors** via `var(--color-{plant})` (NOT `currentColor`)
- **UI icons** use `currentColor` to inherit text color
- All decorative SVGs have `aria-hidden="true"` and `pointer-events-none`

---

## 5. Icon System

### No icon library

All icons are **inline SVG**, hand-crafted for the design system.

### Icon specifications

| Property | Value |
|---|---|
| Style | Outline (stroke-based) |
| strokeWidth | 1.5–2.5 |
| strokeLinecap | round |
| strokeLinejoin | round |
| Default viewBox | `0 0 24 24` |
| Color | `currentColor` |

### Size scale

| Name | Size | Usage |
|---|---|---|
| xs | 15px | Badge inline, arrow |
| sm | 18px | CTA button arrow |
| md | 20–22px | Category icon, nav logo |
| lg | 32px | Philosophy values |
| xl | 48px | Philosophy header |

### Brand icon (Four-Point Star)

```svg
<path d="M12 22c1-4 4-7 8-8-4-1-7-4-8-8-1 4-4 7-8 8 4 1 7 4 8 8z" />
```

Used in: Nav logo (20px, accent-leaf), Philosophy header (48px, accent-sage), Footer (20px, accent-sage).

---

## 6. Typography System

### Font families

| Token | Font | Weights | Usage |
|---|---|---|---|
| `--font-sans` | DM Sans | 400, 500, 600 | Body text, descriptions |
| `--font-heading` | Nunito | 600, 700, 800 | Headings, nav, badges, buttons |

### Type scale (Figma text styles)

| Style Name | Font | Weight | Size | Line Height | Letter Spacing | Color |
|---|---|---|---|---|---|---|
| **Display** | Nunito | 800 | 64px (desktop) | 1.15 | -0.025em | text-deep |
| **H2** | Nunito | 800 | 40px (desktop) | ~1.2 | -0.02em | text-deep |
| **H3** | Nunito | 700 | 18px (desktop) | ~1.2 | 0 | text-deep |
| **Body** | DM Sans | 400 | 16px (desktop) | 1.7 | 0 | text-muted |
| **Small** | DM Sans | 400 | 14px (desktop) | 1.625 | 0 | text-muted |
| **Badge** | Nunito | 700 | 11.2px (0.7rem) | 1 | +0.08em | cat-{category} |
| **Nav Logo** | Nunito | 800 | 18.4px (1.15rem) | 1 | -0.01em | text-deep |
| **Nav Link** | Nunito | 600 | 14.4px (0.9rem) | 1 | 0 | text-muted |
| **CTA Button** | Nunito | 700 | 16px (1rem) | 1 | 0 | white |
| **Filter Button** | Nunito | 600 | 13.6px (0.85rem) | 1 | 0 | text-muted / white |
| **Visit Link** | Nunito | 600 | 13.3px (0.83rem) | 1 | 0 | accent-leaf |
| **Footer Logo** | Nunito | 800 | 22.4px (1.4rem) | 1 | 0 | bg-cream |
| **Hero Sub JP** | Nunito | 600 | 19.2px (1.2rem desktop) | 1 | 0 | text-muted |
| **Hero Sub EN** | DM Sans | 400 | 17.6px (1.1rem desktop) | 1.75 | 0 | text-light |

### Bilingual rules

- English: primary, larger, higher contrast
- Japanese: supplementary, smaller (0.8–0.95rem), lighter color (`text-light`)
- Japanese requires `lang="ja"` attribute
- Japanese falls back to system fonts (Hiragino Kaku Gothic / Meiryo)

---

## 7. Spacing & Layout

### Spacing scale (base unit: 4px)

| Tailwind | Value | Primary Usage |
|---|---|---|
| `p-6` / `px-6` | 24px | Card padding, page horizontal padding, grid gap |
| `py-20` | 80px | Section vertical padding |
| `pt-30` | 120px | Hero top padding |
| `pb-45` | 180px | Hero bottom padding |
| `mb-14` | 56px | Section heading bottom margin |
| `gap-6` | 24px | Grid gap |
| `gap-7` | 28px | Nav link spacing |
| `h-16` | 64px | Navigation height |

### Layout containers

| Name | Max Width | Usage |
|---|---|---|
| Navigation | 1120px | `max-w-[1120px]` |
| Product Grid | 960px | `max-w-[960px]` |
| Hero Content | 680px | `max-w-[680px]` |
| Philosophy | 640px | `max-w-[640px]` |
| Hero Sub-desc | 500px | `max-w-[500px]` |
| Section Subtitle | 440px | `max-w-[440px]` |

### Grid system

| Breakpoint | Columns | Gap |
|---|---|---|
| base (0px) | 1 | 24px |
| sm (640px) | 2 | 24px |
| lg (1024px) | 3 | 24px |

```html
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
```

### Border radius

| Token | Value | Usage |
|---|---|---|
| `--radius-card` | 16px | Card corners |
| `--radius-btn` | 999px | Buttons, badges (pill) |
| `rounded-xl` | 12px | Card icon container |

### Z-index scale

| Layer | Z-index | Usage |
|---|---|---|
| Background | 0 | BotanicalBackground |
| Decorative | 1 | Hero side trees, branches |
| Content | 2 | Sections, VineDivider, footer |
| Focal | 3 | Hero text |
| Shiori | 10 | Card ribbons (::before/::after) |
| Navigation | 50 | Fixed header |

---

## 8. Shadow System

| Name | Value | Usage |
|---|---|---|
| Nav scroll | `0 2px 20px rgba(45,59,46, 0.06)` | Navigation on scroll |
| Filter active | `0 2px 8px rgba(107,143,113, 0.25)` | Active filter button |
| CTA default | `0 4px 16px rgba(107,143,113, 0.25)` | CTA button |
| CTA hover | `0 8px 24px rgba(107,143,113, 0.30)` | CTA button hover |
| Card hover | `0 12px 32px rgba(45,59,46, 0.08)` | Product card hover |

---

## 9. Interactive States

### CTA Button

| State | Background | Transform | Shadow |
|---|---|---|---|
| Default | `accent-leaf` | — | `0 4px 16px rgba(...)` |
| Hover | `accent-moss` | `-translate-y-0.5` | `0 8px 24px rgba(...)` |

### Product Card

| State | Border | Transform | Shadow |
|---|---|---|---|
| Default | `accent-leaf/8` | — | — |
| Hover | `accent-leaf/20` | `-translate-y-1.5` | `0 12px 32px rgba(...)` |

### Shiori Ribbon

| State | Height | Opacity |
|---|---|---|
| Default | 58px | 0.82 |
| Hover | 66px | 0.95 |

### Filter Buttons

| State | Background | Color |
|---|---|---|
| Inactive | `accent-leaf/8` | `text-muted` |
| Hover | `accent-leaf/15` | `text-deep` |
| Active | `accent-leaf` | white |

---

## 10. Motion & Animation

### Duration scale

| Name | Duration | Usage |
|---|---|---|
| instant | 150ms | Focus ring, color |
| swift | 200ms | Button hover |
| natural | 250ms | Scroll shadow |
| gentle | 300ms | Card shadow, ribbon opacity |
| calm | 350ms | Ribbon extension, card border |
| patient | 400ms | Icon sway, card lift |
| entrance | 800ms | `fade-in-up` content appearance |
| drift | 13–22s | Background botanicals |
| falling | 8–12s | Falling leaf animations |

### Keyframe animations

- **`fade-in-up`** — Content entrance: opacity 0→1, translateY 20px→0, 800ms ease-out
- **`gentle-drift`** — Background motifs: translateY 0→-8px→0, 13–22s ease-in-out infinite
- **`gentle-sway`** — Card icon hover: rotate ±6°, 600ms ease
- **`leaf-fall` (3 variants)** — Hero falling leaves: translate + rotate + opacity fade, 8–12s infinite

### Easing functions

| Function | CSS | Usage |
|---|---|---|
| ease-out | `ease-out` | Content entrance |
| ease | `ease` | General hover |
| ease-in-out | `ease-in-out` | Infinite loops |
| bounce | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Shiori ribbon |

### `prefers-reduced-motion`

All animations disabled (0.01ms duration). Content appears at final state.

---

## 11. Accessibility

| Requirement | Implementation |
|---|---|
| Focus | `2px solid accent-leaf`, offset 2px, `:focus-visible` |
| Contrast | text-deep/bg-cream = 9.4:1, text-muted/bg-cream = 5.2:1 |
| Language | `<html lang="ja">`, `lang="ja"` on JP text |
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` |
| Decorative | `aria-hidden="true"` + `pointer-events-none` on all botanical SVGs |
| Touch targets | Minimum 44px on mobile |
| Motion | `prefers-reduced-motion` fully supported |

---

## 12. Figma-to-Code Conversion Rules

When converting a Figma design to code for this project:

1. **Use Tailwind utility classes** — never write custom CSS unless it's a keyframe or pseudo-element
2. **Map Figma colors to tokens** — use the table in Section 1, never hardcode hex values
3. **Use `@theme` tokens** — colors referenced as `bg-bg-cream`, `text-accent-leaf`, etc.
4. **Font mapping**: Figma "Nunito" → `font-heading`, Figma "DM Sans" → `font-sans` (default)
5. **Responsive**: mobile-first, use `sm:`, `md:`, `lg:` breakpoints
6. **No images**: all visual elements are inline SVG or CSS
7. **Plant colors are decorative only** — never use kaede/tsubaki/anzu for UI elements (buttons, links)
8. **`accent-leaf`** is the primary interactive color for all UI elements
9. **Shiori ribbons** use CSS `::before`/`::after` pseudo-elements, not separate DOM nodes
10. **SVG reuse**: define shapes in `<defs>`, reference with `<use href="#id">`

### Code-to-Figma conversion rules

When capturing this site to Figma:

1. **Fluid typography** renders at the viewport size at capture time — annotate with min/max sizes
2. **CSS animations** will be captured at a single frame — note the animation behavior in annotations
3. **Pseudo-elements** (shiori ribbons) may not capture — recreate as Figma shapes
4. **Backdrop blur** on navigation may not transfer — use solid color approximation
5. **SVG botanical motifs** should be grouped and labeled by plant type (kaede, tsubaki, anzu)

---

## 13. Project Structure Summary

```
craftgarden-studio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout (metadata, fonts)
│   │   ├── page.tsx            ← Single page (all sections)
│   │   ├── globals.css         ← @theme tokens + keyframes + base styles
│   │   ├── icon.svg            ← Favicon
│   │   └── apple-icon.tsx      ← Apple Touch Icon
│   ├── components/
│   │   ├── Navigation.tsx      ← Fixed nav (Client Component)
│   │   ├── Hero.tsx            ← Hero + botanical trees
│   │   ├── Products.tsx        ← Card grid + filter (Client Component)
│   │   ├── Philosophy.tsx      ← Philosophy section
│   │   ├── TechStack.tsx       ← Tech stack display
│   │   ├── Footer.tsx          ← Footer
│   │   ├── BotanicalBackground.tsx ← Page-wide floating motifs
│   │   └── VineDivider.tsx     ← Section divider
│   └── lib/
│       └── products.ts         ← Product data + tech stack data
├── docs/
│   ├── DESIGN-SYSTEM.md        ← Full design system specification
│   ├── SITE-DESIGN.md          ← Site design document
│   └── FIGMA-DESIGN-SYSTEM-RULES.md ← This file
└── CLAUDE.md                   ← AI assistant instructions
```

---

> *Quiet Garden Design System — craftgarden.studio*
> *Plant ideas. Watch them grow. Have fun.*
