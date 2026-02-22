# craftgarden Design System

> **Quiet Garden** — A design system rooted in botanical tranquility.
> Version 1.0 | Last updated: 2026-02-23

This design system defines the visual language, interaction patterns, and implementation standards for craftgarden.studio and all related products. It is the single source of truth for design decisions across the ecosystem.

---

## Table of Contents

1. [Design Foundations](#1-design-foundations)
2. [Color System](#2-color-system)
3. [Typography System](#3-typography-system)
4. [Spacing & Layout](#4-spacing--layout)
5. [Component Patterns](#5-component-patterns)
6. [Motion & Animation](#6-motion--animation)
7. [Iconography & Illustration](#7-iconography--illustration)
8. [Accessibility](#8-accessibility)

---

## 1. Design Foundations

### 1.1 Brand Principles

| # | Principle | Description |
|---|-----------|-------------|
| 1 | **Quiet Presence** — 静かな存在感 | デザインは主張せず、空間に溶け込みながらも確かな存在感を放つ。装飾は控えめに、余白と呼吸を大切にする。 |
| 2 | **Organic Growth** — 有機的な成長 | 直線的・機械的な表現よりも、植物が育つような自然な曲線と柔らかさを優先する。角は丸く、動きはゆるやかに。 |
| 3 | **Craft with Care** — 丁寧なものづくり | 一つひとつの要素に手仕事の温もりを宿す。ピクセル単位の精度と、手作り感のバランス。 |
| 4 | **Bilingual Harmony** — 日英の調和 | 日本語と英語が自然に共存する世界観。互いを補い合い、バイリンガルであることがアイデンティティ。 |
| 5 | **Playful Curiosity** — 遊び心のある探求 | 「楽しもう」のスピリットを忘れない。栞(shiori)やボタニカルモチーフで発見の喜びを散りばめる。 |

### 1.2 Design Philosophy

craftgarden のデザイン言語は「静かな庭（Quiet Garden）」のメタファーに根ざしている。

- **庭は工場ではない**: UIは効率を最大化するダッシュボードではなく、訪れて心地よい空間
- **植物的時間**: アニメーションは植物の成長のようにゆっくり展開。ユーザーを急かさない
- **層と奥行き**: 背景のボタニカルモチーフ → コンテンツ → 栞リボンのレイヤーで空間的奥行きを生む
- **素材感**: クリーム色の紙、革の栞のような有機的テクスチャ感をカラーで表現
- **引き算の美学**: 要素を足すよりも引くことを優先。庭の調和を保つ

### 1.3 Naming Conventions

#### Design Tokens

```
カテゴリ-役割-バリアント

--color-bg-cream        # color / background / cream
--color-text-deep       # color / text / deep
--color-accent-leaf     # color / accent / leaf
--color-cat-product     # color / category / product
--text-display          # text / display
--radius-card           # radius / card
--animate-fade-in-up    # animate / fade-in-up
```

#### CSS Classes
- **Utility**: Tailwind CSS convention (`bg-bg-cream`, `text-accent-leaf`)
- **Component-specific**: kebab-case (`.shiori-ribbon`, `.shiori-product`)
- **Japanese concepts**: romanized (`.shiori-*`, `kaede`, `anzu`, `tsubaki`)

#### Components & Files
- Components: PascalCase (`BotanicalBackground.tsx`, `VineDivider.tsx`)
- Data/Utils: camelCase (`products.ts`)
- Styles: kebab-case (`globals.css`)

### 1.4 Bilingual Guidelines

| Context | English | Japanese | Priority |
|---------|---------|----------|----------|
| Headlines | Main (large) | Sub (smaller, below) | English first |
| Body text | Main description | None, or supplementary | English only OK |
| Product desc | `descriptionEn` (main) | `descriptionJp` (sub, smaller, lighter) | Parallel |
| Catchphrases | Always paired | Always paired | Always paired |
| UI labels | Products, Visit, etc. | None | English only |

**Implementation rules:**
- Japanese text requires `lang="ja"` attribute
- Japanese uses smaller font size (0.8rem–0.95rem) and lighter color (`text-light`)
- Japanese falls back to system fonts (Hiragino Kaku Gothic / Meiryo)
- Line height for Japanese: 1.7–1.85

### 1.5 Do's & Don'ts

#### Do's
- Use generous whitespace (`py-20`+ between sections, `p-6` inside cards)
- Keep botanical motifs subtle (opacity 0.1–0.5, blended into backgrounds)
- Animate at natural rhythms (0.3s–0.8s transitions, 13s–22s drifts)
- Stay within the green gradient range (leaf → sage → moss)
- Use rounded shapes (`rounded-[16px]` cards, `rounded-full` buttons)
- Support `prefers-reduced-motion` always
- Add `aria-hidden="true"` to all decorative elements

#### Don'ts
- Use neon, high-saturation, or harsh colors
- Use instant animations (< 100ms) — they feel mechanical
- Leave sharp corners on any element
- Use heavy drop shadows (keep to `rgba(45,59,46, 0.06–0.08)`)
- Use photographs or raster images — typography-driven + SVG only
- Exceed 3-column grid on any breakpoint
- Display Japanese text at the same size as English
- Make decorative elements interactive (`pointer-events-none` always)

---

## 2. Color System

### 2.1 Color Primitives

#### Background
| Token | HEX | Usage |
|-------|-----|-------|
| `--color-bg-cream` | `#FAFAF5` | Page background. Warm off-white base |
| `--color-bg-warm` | `#F5F2EC` | Section background (Philosophy). One step warmer |
| `--color-bg-card` | `#F0EDE6` | Card surface. Distinguishes card from page |

#### Text
| Token | HEX | Usage |
|-------|-----|-------|
| `--color-text-deep` | `#2D3B2E` | Highest contrast. Headings, nav, footer bg |
| `--color-text-muted` | `#5C7260` | Body text, descriptions |
| `--color-text-light` | `#8A9E8C` | Auxiliary text, JP subtitles |

#### Botanical Accents
| Token | HEX | Usage |
|-------|-----|-------|
| `--color-accent-leaf` | `#6B8F71` | Primary accent. CTA, links, focus ring, brand core |
| `--color-accent-sage` | `#9BB09E` | Secondary. Scrollbar, philosophy icons, footer icons |
| `--color-accent-moss` | `#4A7051` | CTA hover state. Deeper green |
| `--color-accent-bark` | `#8B7355` | Earth tone (extension) |
| `--color-accent-bloom` | `#C4926B` | Warm amber (extension) |

#### Category
| Token | HEX | Usage |
|-------|-----|-------|
| `--color-cat-product` | `#6B8F71` | Product category (= leaf) |
| `--color-cat-tool` | `#7E9AAB` | Tool category. Blue-grey |
| `--color-cat-content` | `#B8956A` | Content category. Warm gold |

#### Special
| Usage | Value |
|-------|-------|
| CTA text | `#FFFFFF` |
| Footer background | `#2D3B2E` (= text-deep, inverted) |
| Footer text | `#FAFAF5` (= bg-cream, inverted) |

### 2.2 Semantic Tokens

```css
@theme {
  /* Background */
  --color-bg-cream: #FAFAF5;
  --color-bg-warm: #F5F2EC;
  --color-bg-card: #F0EDE6;

  /* Text */
  --color-text-deep: #2D3B2E;
  --color-text-muted: #5C7260;
  --color-text-light: #8A9E8C;

  /* Botanical Accents */
  --color-accent-leaf: #6B8F71;
  --color-accent-sage: #9BB09E;
  --color-accent-moss: #4A7051;
  --color-accent-bark: #8B7355;
  --color-accent-bloom: #C4926B;

  /* Category */
  --color-cat-product: #6B8F71;
  --color-cat-tool: #7E9AAB;
  --color-cat-content: #B8956A;

  /* Borders */
  --color-border: rgba(107, 143, 113, 0.08);
  --color-border-hover: rgba(107, 143, 113, 0.2);
}
```

### 2.3 Opacity Scale

#### UI Opacity (Tailwind `/` notation on accent-leaf)
| Opacity | Usage |
|---------|-------|
| `/6` | Hero background SVG illustration |
| `/8` | Badge background, filter button inactive bg |
| `/10` | Card botanical strip, nav border |
| `/12` | Category icon background |
| `/15` | Badge border, filter hover bg |
| `/20` | Card hover border |
| `/25` | Shadow rgba values |

#### Decorative SVG Opacity
| Range | Usage |
|-------|-------|
| `0.10–0.18` | Flower/leaf fill (most subtle) |
| `0.22` | Hero shiori ribbon |
| `0.25–0.35` | Branch decorative strokes |
| `0.30` | Side decorative branches |
| `0.40–0.50` | Main branch strokes |
| `0.82` | Shiori ribbon (cards) default |
| `0.95` | Shiori ribbon hover |

#### Footer Text Opacity
| Opacity | Usage |
|---------|-------|
| `0.30` | Copyright |
| `0.40` | Japanese subtext |
| `0.50` | Social links (default) |
| `0.60` | Tagline |
| `1.00` | Social links (hover) |

### 2.4 Category Color Application Pattern

Each category color is applied consistently in 4 variations:

| Variant | Pattern | Example (Product) |
|---------|---------|-------------------|
| Badge text | `text-cat-{name}` | `text-cat-product` |
| Icon container | `bg-cat-{name}/12 text-cat-{name}` | `bg-cat-product/12 text-cat-product` |
| Strip background | `bg-cat-{name}/10` | `bg-cat-product/10` |
| Shiori ribbon | `.shiori-{name}` | `.shiori-product` |

### 2.5 Shadow System

| Name | Value | Usage |
|------|-------|-------|
| `shadow-nav` | `0 2px 20px rgba(45,59,46, 0.06)` | Navigation on scroll |
| `shadow-filter` | `0 2px 8px rgba(107,143,113, 0.25)` | Active filter button |
| `shadow-cta` | `0 4px 16px rgba(107,143,113, 0.25)` | CTA default |
| `shadow-cta-hover` | `0 8px 24px rgba(107,143,113, 0.30)` | CTA hover |
| `shadow-card-hover` | `0 12px 32px rgba(45,59,46, 0.08)` | Card hover |

**Principles:**
- Color source: `text-deep` rgb or `accent-leaf` rgb
- Opacity range: 0.06 (subtle) to 0.30 (strongest)
- Hover: increase blur + slight opacity bump

### 2.6 Interactive States

#### CTA Button
| State | Background | Transform | Shadow |
|-------|-----------|-----------|--------|
| Default | `accent-leaf` | — | `shadow-cta` |
| Hover | `accent-moss` | `-translate-y-0.5` | `shadow-cta-hover` |

#### Product Card
| State | Border | Transform | Shadow |
|-------|--------|-----------|--------|
| Default | `accent-leaf/8` | — | — |
| Hover | `accent-leaf/20` | `-translate-y-1.5` | `shadow-card-hover` |

#### Shiori Ribbon
| State | Height | Opacity | Easing |
|-------|--------|---------|--------|
| Default | `58px` | `0.82` | — |
| Hover | `66px` | `0.95` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |

#### Navigation Links
| State | Color | Underline |
|-------|-------|-----------|
| Default | `text-muted` | `w-0` |
| Hover | `text-deep` | `w-full` (accent-leaf, h-0.5) |

#### Filter Buttons
| State | Background | Color |
|-------|-----------|-------|
| Inactive | `accent-leaf/8` | `text-muted` |
| Inactive hover | `accent-leaf/15` | `text-deep` |
| Active | `accent-leaf` | `white` |

#### Global
| Element | Spec |
|---------|------|
| `::selection` | `background: rgba(107,143,113, 0.2); color: text-deep` |
| `:focus-visible` | `outline: 2px solid accent-leaf; offset: 2px` |
| Scrollbar thumb | `accent-sage` → hover `accent-leaf` |

### 2.7 Dark Mode Strategy

**Current**: Light mode only (Quiet Garden is a garden in light).

**Future extension** — semantic token remapping approach:

| Light | Dark (proposed) |
|-------|----------------|
| `bg-cream` #FAFAF5 | `#0F1A12` |
| `bg-warm` #F5F2EC | `#152018` |
| `bg-card` #F0EDE6 | `#1A2820` |
| `text-deep` #2D3B2E | `#E8EDE9` |
| `text-muted` #5C7260 | `#9BB09E` |
| `accent-leaf` #6B8F71 | `#82AB88` (+15% lightness) |

Implementation: Override CSS variables via `@media (prefers-color-scheme: dark)` or `data-theme="dark"` outside `@theme`.

---

## 3. Typography System

### 3.1 Font Families

| Token | Font | Fallback | Usage |
|-------|------|----------|-------|
| `--font-sans` | DM Sans | `system-ui, -apple-system, sans-serif` | Body text, default |
| `--font-heading` | Nunito | `system-ui, -apple-system, sans-serif` | Headings (h1–h4), nav, badges, buttons |

**Loading:** `next/font/google` with `display: swap`
- DM Sans: weights 400, 500, 600
- Nunito: weights 600, 700, 800

**Principle:** DM Sans for readable body text. Nunito for friendly, rounded UI touchpoints.

### 3.2 Type Scale (Fluid)

```css
@theme {
  --text-display: clamp(2.4rem, 6.5vw, 4rem);     /* 38px → 64px */
  --text-h2:      clamp(1.7rem, 4vw, 2.5rem);      /* 27px → 40px */
  --text-h3:      clamp(1rem, 1.5vw + 0.5rem, 1.15rem); /* 16px → 18px */
  --text-body:    clamp(0.875rem, 0.5vw + 0.75rem, 1rem); /* 14px → 16px */
  --text-small:   clamp(0.8rem, 0.3vw + 0.7rem, 0.88rem); /* 13px → 14px */
}
```

**Viewport scaling (approximate):**

| Viewport | display | h2 | h3 | body | small |
|:--------:|:-------:|:--:|:--:|:----:|:-----:|
| 320px | 38px | 27px | 16px | 14px | 13px |
| 768px | 50px | 31px | 17px | 16px | 14px |
| 1024px+ | 64px | 40px | 18px | 16px | 14px |

### 3.3 Font Weights

| Weight | Value | Font | Usage |
|--------|:-----:|------|-------|
| Regular | 400 | DM Sans | Body text |
| Medium | 500 | DM Sans | Labels, meta info |
| Semibold | 600 | Both | Nav links, filter buttons, visit links |
| Bold | 700 | Nunito | H3, CTA, badges |
| Extra Bold | 800 | Nunito | Display (H1), H2, nav logo, footer logo |

### 3.4 Line Heights

| Value | Usage |
|:-----:|-------|
| `1.15` | Display (H1) — tight for impact |
| `~1.2` | H2, H3 — heading default |
| `1.625` | Small text (card descriptions) |
| `1.7` | Body text (base) |
| `1.75` | Hero EN sub-text |
| `1.85` | Philosophy body — contemplative reading |

**Rule:** Smaller font sizes get larger line-height ratios.

### 3.5 Letter Spacing

| Value | Usage |
|:-----:|-------|
| `-0.025em` | Display (H1) — tighten large text |
| `-0.02em` | H2 headings |
| `-0.01em` | Nav logo |
| `0` | Body, small, default |
| `+0.02em` | Monospace / tech labels |
| `+0.08em` | UPPERCASE badge text |

**Rule:** Large headings get negative tracking. Uppercase text gets positive tracking.

### 3.6 Text Styles Reference

#### Display (Hero H1)
```
font: Nunito 800 / 1.15 / -0.025em
size: clamp(2.4rem, 6.5vw, 4rem)
color: text-deep
```

#### H2 (Section Heading)
```
font: Nunito 800 / ~1.2 / -0.02em
size: clamp(1.7rem, 4vw, 2.5rem)
color: text-deep
```

#### H3 (Card Title)
```
font: Nunito 700 / ~1.2
size: clamp(1rem, 1.5vw + 0.5rem, 1.15rem)
color: text-deep
```

#### Body
```
font: DM Sans 400 / 1.7
size: clamp(0.875rem, 0.5vw + 0.75rem, 1rem)
color: text-muted
```

#### Body Philosophy
```
font: DM Sans 400 / 1.85
size: clamp(0.875rem, 0.5vw + 0.75rem, 1rem)
color: text-muted
```

#### Small
```
font: DM Sans 400 / 1.625 (relaxed)
size: clamp(0.8rem, 0.3vw + 0.7rem, 0.88rem)
color: text-muted
```

#### Badge (Category)
```
font: Nunito 700 / uppercase / +0.08em
size: 0.7rem
color: cat-{category}
```

#### Nav Logo
```
font: Nunito 800 / -0.01em
size: 1.15rem
color: text-deep
```

#### Nav Link
```
font: Nunito 600
size: 0.9rem
color: text-muted → hover: text-deep
```

#### CTA Button
```
font: Nunito 700
size: 1rem
color: white
```

#### Hero Badge
```
font: Nunito 700
size: 0.82rem
color: accent-leaf
```

#### Hero Sub JP
```
font: Nunito 600
size: clamp(0.95rem, 2.2vw, 1.2rem)
color: text-muted
```

#### Hero Sub EN
```
font: DM Sans 400 / 1.75
size: clamp(0.95rem, 2vw, 1.1rem)
color: text-light
```

#### Card Visit Link
```
font: Nunito 600
size: 0.83rem
color: accent-leaf
```

#### Filter Button
```
font: Nunito 600
size: 0.85rem
color: text-muted | white (state-dependent)
```

#### Footer Logo
```
font: Nunito 800
size: 1.4rem
color: bg-cream (inverted)
```

#### Footer Tagline
```
font: Nunito 600 / opacity 0.6
size: 0.95rem
color: bg-cream
```

#### Footer JP
```
font: DM Sans 400 / opacity 0.4
size: 0.82rem
color: bg-cream
```

#### Footer Copyright
```
font: DM Sans 400 / opacity 0.3
size: 0.78rem
color: bg-cream
```

#### Footer Links
```
font: Nunito 600 / opacity 0.5 → hover: 1.0
size: 0.88rem
color: bg-cream
```

### 3.7 Responsive Typography Strategy

- **Fluid tokens** (clamp): For content text (display, h2, h3, body, small)
- **Fixed sizes** (rem): For UI elements (badges, nav, footer, buttons)
- **Growth rate principle**: Larger elements scale more aggressively. display uses `6.5vw` (steep). small uses `0.3vw` (minimal).
- **rem offset**: `vw + rem` ensures minimum sizes on tiny viewports

---

## 4. Spacing & Layout

### 4.1 Spacing Scale

Base unit: `4px` (Tailwind's `0.25rem`)

| Token | Value | Tailwind | Primary Usage |
|-------|:-----:|:--------:|---------------|
| `0.5` | 2px | `gap-0.5` | Hairline gaps |
| `1` | 4px | `p-1` | Minimal spacing |
| `1.5` | 6px | `mt-1.5` | JP text spacing |
| `2` | 8px | `gap-2`, `py-2` | Badge padding, filter gaps |
| `2.5` | 10px | `gap-2.5`, `mt-2.5` | Icon-text gaps, subtitle margin |
| `3` | 12px | `mb-3` | Small component gaps |
| `3.5` | 14px | `mb-3.5`, `py-3.5` | CTA padding, icon margin |
| `5` | 20px | `mt-5` | Medium element margin |
| `6` | 24px | `p-6`, `px-6`, `gap-6` | Card padding, grid gap, page px |
| `7` | 28px | `gap-7` | Nav link spacing |
| `8` | 32px | `mb-8`, `gap-8` | Hero badge margin, value gaps |
| `9` | 36px | `mt-9` | Footer social links margin |
| `10` | 40px | `pt-10`, `mt-10` | Section start, philosophy values |
| `14` | 56px | `mb-14` | Section heading margin |
| `20` | 80px | `py-20`, `pt-20` | Section vertical padding |
| `25` | 100px | `pb-25` | Products section bottom |
| `30` | 120px | `pt-30` | Hero top padding |
| `45` | 180px | `pb-45` | Hero bottom padding |

#### Semantic Spacing Tokens (recommended)

| Token | Value | Usage |
|-------|:-----:|-------|
| `--space-page-x` | `24px` (px-6) | Horizontal page padding |
| `--space-card` | `24px` (p-6) | Internal card padding |
| `--space-section` | `80px` (py-20) | Section vertical padding |
| `--space-grid` | `24px` (gap-6) | Grid gap |
| `--space-hero-top` | `120px` (pt-30) | Hero top breathing room |

### 4.2 Layout Containers

| Name | Max Width | Usage |
|------|:---------:|-------|
| `nav` | `1120px` | Navigation bar |
| `products` | `960px` | Product card grid |
| `hero` | `680px` | Hero text content |
| `philosophy` | `640px` | Philosophy text content |
| `hero-sub` | `500px` | Hero sub-description |
| `section-sub` | `440px` | Section subtitles |

**Container pattern:**
```html
<div class="mx-auto max-w-[{width}] px-6">
  <!-- content -->
</div>
```

### 4.3 Grid System

#### Product Grid
| Breakpoint | Columns | Gap |
|:----------:|:-------:|:---:|
| base | 1 | 24px |
| sm (640px) | 2 | 24px |
| lg (1024px) | 3 | 24px |

```html
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
```

### 4.4 Breakpoints

| Name | Value | Key Changes |
|------|:-----:|-------------|
| base | 0px | Single column, no side decoratives |
| `sm` | 640px | 2-column grid, nav links visible |
| `md` | 768px | Side botanical decoratives visible |
| `lg` | 1024px | 3-column grid |

### 4.5 Section Spacing Map

```
┌─ Navigation ──────────── h-16 (64px), fixed ──────────────┐
│                                                            │
├─ Hero ──────────────── pt-30 (120px) ─────────────────────├
│   content (max-w-680)                                      │
├──────────────────────── pb-45 (180px) ─────────────────────├
│                                                            │
├─ VineDivider ─────────── h-20 (80px) ─────────────────────├
│                                                            │
├─ Products ────────────── pt-10 (40px) ────────────────────├
│   heading → mb-14                                          │
│   filter → mb-10                                           │
│   grid (max-w-960)                                         │
├──────────────────────── pb-25 (100px) ─────────────────────├
│                                                            │
├─ VineDivider ─────────── h-20 (80px) ─────────────────────├
│                                                            │
├─ Philosophy ──────────── py-20 (80px) ────────────────────├
│   content (max-w-640)                                      │
├───────────────────────────────────────────────────────────├
│                                                            │
├─ Footer ──────────────── pt-20 pb-10 ─────────────────────├
│   wave SVG decoration (-99% overlap)                       │
│   dark bg (text-deep)                                      │
└───────────────────────────────────────────────────────────┘
```

### 4.6 Border Radius Scale

| Token | Value | Usage |
|-------|:-----:|-------|
| `none` | `0` | — |
| `sm` | `0.125rem` (2px) | Scrollbar thumb, ribbon bottom |
| `md` | `0.375rem` (6px) | General purpose |
| `lg` | `0.5rem` (8px) | — |
| `xl` | `0.75rem` (12px) | Card icon container |
| `--radius-card` | `1rem` (16px) | Card corners |
| `--radius-btn` | `999px` | Buttons, badges (pill shape) |

### 4.7 Z-index Scale

| Layer | Z-index | Usage |
|-------|:-------:|-------|
| Background | `0` | BotanicalBackground (fixed) |
| Decorative | `1` | Hero shiori, side branches |
| Content | `2` | Sections, VineDivider, footer |
| Focal | `3` | Hero text, VineDivider bookmark |
| Shiori | `10` | Card shiori ribbons (::before/::after) |
| Navigation | `50` | Fixed header |

---

## 5. Component Patterns

### 5.1 Button

#### Primary CTA
```
Container: inline-flex items-center gap-2.5
Background: bg-accent-leaf → hover: bg-accent-moss
Text: Nunito 700, 1rem, white
Padding: px-8 py-3.5
Shape: rounded-full
Shadow: 0 4px 16px rgba(107,143,113,0.25) → hover: 0 8px 24px rgba(...,0.30)
Hover: -translate-y-0.5
Transition: duration-250
```

#### Filter Button (Inactive)
```
Container: rounded-full
Background: bg-accent-leaf/8 → hover: bg-accent-leaf/15
Text: Nunito 600, 0.85rem, text-muted → hover: text-deep
Padding: px-5 py-2
Transition: duration-150
```

#### Filter Button (Active)
```
Background: bg-accent-leaf
Text: white
Shadow: 0 2px 8px rgba(107,143,113,0.25)
```

### 5.2 Card (Product)

**Anatomy:**
```
┌────────────────────────────────┐ ← rounded-[16px], border accent-leaf/8
│ ┌──────────────────────────┐ │ │ ← shiori ribbon (::before)
│ │  🍃  🍃  🍃  🍃  │ ▼ │ ← LeafStrip (h-12, bg-cat-*/10)
│ └──────────────────────────┘   │
│  ┌───┐                         │
│  │ ⊕ │  ← icon (h-11 w-11, rounded-xl, bg-cat-*/12)
│  └───┘                         │
│  PRODUCT     ← badge (0.7rem, uppercase, +0.08em)
│  Product Name ← h3             │
│  EN description ← small, muted │
│  JP description ← 0.8rem, light│
│                                 │
│  Visit →     ← accent-leaf, 0.83rem
└────────────────────────────────┘
```

**Hover:** `-translate-y-1.5`, border `accent-leaf/20`, shadow appears, icon sways, ribbon extends

### 5.3 Badge

#### Hero Badge
```
Container: inline-flex items-center gap-2 rounded-full
Border: border-accent-leaf/15
Background: bg-accent-leaf/8
Text: Nunito 700, 0.82rem, accent-leaf
Padding: px-[18px] py-2
Icon: 15x15 leaf sprouting SVG
```

#### Category Badge
```
Text only: Nunito 700, 0.7rem, uppercase, +0.08em
Color: text-cat-{category}
No background or border
```

### 5.4 Navigation

```
Position: fixed top-0, z-50
Height: h-16 (64px)
Background: rgba(250, 250, 245, 0.9)
Backdrop: blur(12px)
Border: border-b border-accent-leaf/10
Container: max-w-[1120px] mx-auto px-6

Scroll state: shadow-[0_2px_20px_rgba(45,59,46,0.06)]
Links: hidden on mobile, flex on sm+
Underline hover: w-0 → w-full, h-0.5, accent-leaf, duration-300
```

### 5.5 Section Header

#### Pattern A (Products)
```
Alignment: text-center
Title: H2 (text-h2, font-800)
Subtitle: mt-2.5, max-w-[440px] mx-auto, text-body, text-muted
Bottom margin: mb-14
```

#### Pattern B (Philosophy)
```
Alignment: text-center
Icon: 48x48 four-point star, accent-sage, mb-6
Title: H2
JP line: mt-0, mb-3, text-body, text-muted
EN body: text-body, leading-[1.85], text-muted
Values: mt-10, flex gap-8
```

### 5.6 VineDivider

```
Container: h-20, flex center, overflow-hidden, aria-hidden
SVG: w-[min(90vw, 600px)], text-accent-sage, opacity-30
Structure:
  - Wave path (strokeWidth 1.2, strokeLinecap round)
  - 8 leaf shapes (fill, alternating above/below, opacity 0.15-0.2)
  - 5 berry dots (circle r 2-2.5, opacity 0.15-0.2)
  - Central bookmark icon (14x22, fill sage, opacity 0.35)
```

### 5.7 Footer

```
Background: bg-text-deep (dark)
Text color: text-bg-cream (inverted)
Padding: pt-20 pb-10 px-6
Wave decoration: SVG absolute, -translate-y-[99%], h-60px

Opacity hierarchy:
  1.0  — Logo text
  0.60 — EN tagline
  0.50 — Social links (→ 1.0 on hover)
  0.40 — JP tagline
  0.30 — Copyright
```

### 5.8 Shiori (栞) Ribbon System

**Concept:** Japanese bookmark ribbon hanging from top-right of cards.

#### Card Shiori
```css
.shiori-ribbon { overflow: visible !important; }

.shiori-ribbon::before {
  /* Ribbon body */
  position: absolute;
  top: -12px; right: 22px;
  width: 8px; height: 58px;      /* → hover: 66px */
  border-radius: 0 0 1.5px 1.5px;
  opacity: 0.82;                  /* → hover: 0.95 */
  transition: height 350ms cubic-bezier(0.34, 1.56, 0.64, 1),
              opacity 300ms ease;
}

.shiori-ribbon::after {
  /* V-notch */
  position: absolute;
  top: 45px; right: 22px;        /* → hover: 53px */
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 7px solid;
}

/* Category colors */
.shiori-product::before { background: var(--color-cat-product); }
.shiori-product::after  { border-top-color: var(--color-cat-product); }
.shiori-tool::before    { background: var(--color-cat-tool); }
.shiori-tool::after     { border-top-color: var(--color-cat-tool); }
.shiori-content::before { background: var(--color-cat-content); }
.shiori-content::after  { border-top-color: var(--color-cat-content); }
```

#### Hero Shiori
```
Position: top center, absolute
Width: 6px, height: 240px
Color: linear-gradient(accent-leaf → transparent)
Opacity: 0.22
V-notch: 3px borders, 6px top
```

#### Philosophy Shiori (Crossed)
```
Two 3px ribbons crossed at ±25°
Color: bg-accent-sage, opacity 0.12
Width: 220x220px container
```

### 5.9 Botanical Background

```
Position: fixed inset-0, z-0, pointer-events-none
Color: text-accent-leaf, opacity-22 (global)

Elements (18 total):
  Kaede (maple): 6 instances, 25-70px, opacity 0.3-0.6
  Anzu (apricot): 3 blossoms + 2 petals, 16-50px, opacity 0.3-0.5
  Tsubaki (camellia): 3 flowers + 2 leaves + 1 bud, 18-65px, opacity 0.3-0.45

Animation: gentle-drift, 13s-22s each, ease-in-out, infinite
Placement: edges of viewport, avoiding center content area
Mobile: Side decoratives hidden (max-md:hidden)
```

---

## 6. Motion & Animation

### 6.1 Motion Principles

| Principle | Description |
|-----------|-------------|
| **Gentle** | Movements are calm and predictable, like plants swaying in wind |
| **Purposeful** | Every animation communicates hierarchy, state, or relationship |
| **Patient** | No rushing. Long-cycle drifts (13–22s), moderate entrances (800ms) |
| **Respectful** | `prefers-reduced-motion` fully supported |

### 6.2 Duration Scale

| Token | Value | Usage | Metaphor |
|-------|:-----:|-------|----------|
| `instant` | `150ms` | Focus ring, color change | Light reflection |
| `swift` | `200ms` | Button color, hover state | Dew trembling |
| `natural` | `250ms` | Scroll shadow, link underline | Leaf tilting |
| `gentle` | `300ms` | Card shadow, ribbon opacity | Petal turning |
| `calm` | `350ms` | Ribbon extension, card border | Vine growing |
| `patient` | `400ms` | Icon sway, card lift | Branch returning |
| `entrance` | `800ms` | Content appearance | Seedling emerging |
| `drift` | `13s–22s` | Background botanicals | Garden in the wind |

### 6.3 Easing Functions

| Function | Value | Usage |
|----------|-------|-------|
| `ease-out` | CSS `ease-out` | Content entrance (fade-in-up). Fast start, gentle landing |
| `ease` | CSS `ease` | General hover transitions |
| `ease-in-out` | CSS `ease-in-out` | Infinite loops (drift). Symmetric acceleration |
| `bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Shiori ribbon. Slight overshoot |

**Forbidden:** `linear` (too mechanical), extreme bounces (too playful)

### 6.4 Keyframe Animations

#### `fade-in-up` — Seedling Emergence
```css
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Usage: 800ms ease-out both, stagger +0.1s */
```

#### `gentle-drift` — Wind Sway
```css
@keyframes gentle-drift {
  0%, 100% { transform: var(--drift-base, rotate(0deg)) translateY(0); }
  50%      { transform: var(--drift-base, rotate(0deg)) translateY(-8px); }
}
/* Usage: 13s-22s ease-in-out infinite */
/* --drift-base: per-element rotation angle */
```

#### `gentle-sway` — Flower Response
```css
@keyframes gentle-sway {
  0%, 100% { transform: rotate(0deg); }
  25%      { transform: rotate(-6deg); }
  75%      { transform: rotate(6deg); }
}
/* Usage: 0.6s ease, triggered on group-hover */
```

### 6.5 Transition Map

| Component | Property | Duration | Easing |
|-----------|----------|:--------:|--------|
| Nav | box-shadow | 300ms | ease |
| Nav link | color | 200ms | ease |
| Nav underline | width | 300ms | ease |
| CTA | all | 250ms | ease |
| Card | all | 350ms | ease |
| Card icon | transform | 400ms | gentle-sway |
| Card visit gap | gap | 300ms | ease |
| Shiori height | height | 350ms | bounce |
| Shiori opacity | opacity | 300ms | ease |
| Filter | all | 150ms | ease |
| Footer link | opacity | 200ms | ease |

### 6.6 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- All animations effectively disabled (0.01ms, not 0ms, to fire end events)
- Content appears at final position instantly
- Botanical elements remain static
- Color/state information preserved

---

## 7. Iconography & Illustration

### 7.1 Icon Specifications

| Property | Value |
|----------|-------|
| Style | Outline (stroke-based) |
| strokeWidth | 1.5–2.5 |
| strokeLinecap | round |
| strokeLinejoin | round |
| Default viewBox | `0 0 24 24` |
| Color | `currentColor` |

#### Size Scale
| Name | Size | strokeWidth | Usage |
|------|:----:|:-----------:|-------|
| xs | 15px | 2–2.5 | Inline (badge, arrow) |
| sm | 18px | 2.5 | CTA button arrow |
| md | 20–22px | 2 | Category icon, nav logo |
| lg | 32px | 1.5 | Philosophy values |
| xl | 48px | 1.5 | Philosophy header |

### 7.2 Brand Icon (Four-Point Star)

```svg
<path d="M12 22c1-4 4-7 8-8-4-1-7-4-8-8-1 4-4 7-8 8 4 1 7 4 8 8z" />
```

| Location | Size | Color | strokeWidth |
|----------|:----:|-------|:-----------:|
| Nav logo | 20px | accent-leaf | 2 |
| Philosophy header | 48px | accent-sage | 1.5 |
| Footer logo | 20px | accent-sage | 2 |

**Rules:** Min 16px. No rotation/stretching. No animation. accent-leaf or accent-sage only.

### 7.3 Botanical Motifs

#### Kaede (楓 Japanese Maple)
```
SVG: star-shaped 7-point leaf (fill-based)
Path: M50 8 L55 30 L72 18 L60 38...Z (viewBox 0 0 100 100)
Size: 25–70px | Opacity: 0.13–0.6
Always slightly rotated. Large ones get gentle-drift animation.
Placement: viewport edges, avoid center.
```

#### Anzu (杏 Apricot Blossom)
```
SVG: 5-petal flower (72° rotation ellipses + center circle)
Size: 35–50px | Opacity: 0.35–0.5
Alternate petal opacity (odd/even). Place between kaede leaves.
```

#### Tsubaki (椿 Camellia)
```
SVG: 6-petal flower (60° rotation) + inner petals + stamens
Size: 35–65px | Opacity: 0.2–0.45
Largest and most complex motif. Use sparingly.
Optional thick leaf variant (ellipse + white midrib).
```

#### Falling Petals
```
SVG: single ellipse (viewBox 0 0 30 30)
Size: 16–20px | Opacity: 0.3–0.35
Slowest drift (20s–22s). Accent for spatial density.
```

### 7.4 SVG Implementation Guidelines

- **Inline SVG only** (no external files)
- **`currentColor`** for fill/stroke (inherit from parent)
- **`viewBox` required**, size controlled by CSS classes
- **`aria-hidden="true"`** on all decorative SVGs
- **No filters, clipPath, mask, or SMIL** — use CSS for animation
- **Integer coordinates** where possible
- **Decorative elements**: always `pointer-events-none`

### 7.5 Decorative Opacity Guide

| Range | Character | Usage |
|-------|-----------|-------|
| 0.06–0.10 | Nearly invisible | Hero background art, borders |
| 0.10–0.20 | Barely visible | LeafStrip, crossed ribbons |
| 0.20–0.35 | Presence felt | BotanicalBackground, VineDivider |
| 0.35–0.50 | Clearly visible | Individual botanical fills |
| 0.50–0.60 | Prominent | Kaede leaf max opacity |
| 0.82–0.95 | Semi-opaque | Shiori ribbons |

**Rule:** Decorative elements stay below 0.5. Content readability is never compromised.

---

## 8. Accessibility

### 8.1 Contrast Ratios (WCAG AA)

| Foreground | Background | Ratio | AA Normal | AA Large |
|-----------|------------|:-----:|:---------:|:--------:|
| text-deep on bg-cream | `#2D3B2E` / `#FAFAF5` | **11.2:1** | Pass | Pass |
| text-muted on bg-cream | `#5C7260` / `#FAFAF5` | **5.2:1** | Pass | Pass |
| text-light on bg-cream | `#8A9E8C` / `#FAFAF5` | **3.2:1** | Fail | Pass |
| accent-leaf on bg-cream | `#6B8F71` / `#FAFAF5` | **4.0:1** | Fail* | Pass |
| white on accent-leaf | `#FFFFFF` / `#6B8F71` | **3.8:1** | Fail* | Pass |
| bg-cream on text-deep | `#FAFAF5` / `#2D3B2E` | **11.2:1** | Pass | Pass |

*`text-light` and `accent-leaf`: Used only for large text (>= 18px / 14px bold) or decorative elements. `accent-moss` (#4A7051) provides **5.9:1** for accessible alternatives.

### 8.2 Implementation Checklist

| Requirement | Implementation |
|-------------|----------------|
| Focus indicators | `2px solid accent-leaf`, `offset: 2px` on `:focus-visible` |
| Keyboard nav | Tab order follows visual order |
| Motion | `prefers-reduced-motion` fully disables all animation |
| Language | `<html lang="ja">`, `lang="ja"` on JP text elements |
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` |
| ARIA | `aria-label` on nav, `aria-hidden` on decorative elements |
| Touch targets | Minimum 44px on mobile (WCAG 2.5.5) |
| No images | Typography-driven. All icons are inline SVG |
| Color independence | Category info conveyed by icon + text + color (not color alone) |

---

## Appendix: Technology

| Item | Value |
|------|-------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS 4 (`@theme` directive) |
| Fonts | DM Sans + Nunito via `next/font/google` |
| Deploy | Vercel |
| Domain | `craftgarden.studio` (root) |
| Sub-products | `{name}.craftgarden.studio` |

### Applying to New Products

When creating a new product under the craftgarden ecosystem:

1. **Import the design tokens** — Copy the `@theme` block from `globals.css` or import as a shared package
2. **Use the same font setup** — DM Sans (body) + Nunito (headings) via next/font/google
3. **Follow the color system** — Use semantic tokens, not raw hex values
4. **Respect the spacing scale** — 4px base, consistent with documented values
5. **Match the radius** — `16px` cards, `999px` buttons
6. **Apply shiori ribbons** — For categorized content, add the `.shiori-*` CSS classes
7. **Keep botanicals subtle** — If using decorative motifs, opacity < 0.5
8. **Test accessibility** — Verify contrast ratios, focus states, reduced motion
9. **Maintain bilingual patterns** — English primary, Japanese supplementary with `lang="ja"`

---

> *Built with curiosity and care by the craftgarden.studio design team.*
> *Plant ideas. Watch them grow. Have fun.*
