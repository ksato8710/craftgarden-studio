# craftgarden Design System

> **Quiet Garden** — A design system rooted in botanical tranquility.
> Version 1.2 | Last updated: 2026-02-26

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
- Keep botanical motifs subtle (opacity 0.10–0.38, blended into backgrounds)
- Animate at natural rhythms (0.3s–0.8s transitions, 8s–22s drifts/falls)
- Use `accent-leaf` for all interactive UI elements (CTA, links, focus)
- Use plant colors (kaede, tsubaki, anzu) for decorative illustrations only
- Balance 3 plants equally — one should not dominate the others
- Use `<defs>` + `<use>` pattern for repeated SVG motifs (trees, canopies)
- Add `radial-gradient` text protection when illustrations overlap text area
- Use rounded shapes (`rounded-[16px]` cards, `rounded-full` buttons)
- Support `prefers-reduced-motion` always
- Add `aria-hidden="true"` to all decorative elements

#### Don'ts
- Use plant colors (kaede, tsubaki, anzu) for UI elements (buttons, links, badges)
- Use neon, high-saturation, or harsh colors at full opacity
- Use instant animations (< 100ms) — they feel mechanical
- Leave sharp corners on any element
- Use heavy drop shadows (keep to `rgba(45,59,46, 0.06–0.08)`)
- Use photographs or raster images — typography-driven + SVG only
- Exceed 3-column grid on any breakpoint
- Display Japanese text at the same size as English
- Make decorative elements interactive (`pointer-events-none` always)
- Use `leaf-fall` animations outside of the Hero section
- Place more than 8 falling leaf elements in a single section

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
| `--color-text-deep` | `#2A4A32` | Highest contrast. Headings, nav, footer bg |
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

#### Plant-Specific Colors (花の彩り)

craftgarden の三花 — 杏(あんず)・椿(つばき)・楓(かえで) — は庭の個性を象徴する固有色。v1.1 で追加。

| Token | HEX | Plant | Usage |
|-------|-----|-------|-------|
| `--color-anzu` | `#F08C28` | 杏 Apricot | 標準。花びら、ブロッサム、装飾 |
| `--color-anzu-hot` | `#FF9A1F` | 杏 Apricot | 強調。ホバー、アクティブ、グラデーション端 |
| `--color-tsubaki` | `#E05577` | 椿 Camellia | 標準。花弁、装飾、カードストリップ |
| `--color-tsubaki-hot` | `#F0487A` | 椿 Camellia | 強調。ホバー、グラデーション端 |
| `--color-kaede` | `#D63E2F` | 楓 Maple | 標準。葉、装飾、カードストリップ |
| `--color-kaede-hot` | `#E8442E` | 楓 Maple | 強調。ホバー、グラデーション端 |
| `--color-bark` | `#7A5E3A` | 幹 Bark | 樹木の幹・枝（主線） |
| `--color-bark-dark` | `#5C4428` | 幹 Bark | 幹の影・副線 |
| `--color-leaf-dark` | `#3D6B45` | 葉 Foliage | 常緑の葉。椿の葉、緑葉散り |

**植物色の利用ルール：**

| Rule | Description |
|------|-------------|
| **装飾専用** | 植物色は UI 操作要素（ボタン、リンク等）に使わない。`accent-leaf` が UI の主色 |
| **低〜中オパシティ** | SVG fill には `0.10–0.38` の範囲で使用。直接べた塗りはしない |
| **3色バランス** | 一つの植物が突出しないよう、3種を均等に配置する |
| **交互使用** | 同一植物の `標準` と `hot` を交互に使い、単調さを避ける |
| **グラデーション方向** | `楓 → 椿 → 杏 → leaf` の順序を維持（暖色→寒色へ） |
| **テキスト保護** | 植物装飾がテキスト領域に重なる場合、必ず `radial-gradient` の保護オーバーレイを配置 |

**植物色のコントラスト（bg-cream上）：**

| Color | Ratio | Note |
|-------|:-----:|------|
| `--color-kaede` on bg-cream | **4.8:1** | Large text OK. 装飾のみに使用 |
| `--color-tsubaki` on bg-cream | **3.8:1** | 装飾のみ。テキストには使用不可 |
| `--color-anzu` on bg-cream | **2.5:1** | 装飾のみ。最も低コントラスト |

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
| Footer background | `#2A4A32` (= text-deep, inverted) |
| Footer text | `#FAFAF5` (= bg-cream, inverted) |

### 2.2 Semantic Tokens

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

  /* Plant-Specific Colors — 杏・椿・楓 (v1.1) */
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
| `0.08–0.12` | Philosophy section decorative flowers |
| `0.10–0.18` | Scattered petals / buds in hero background |
| `0.16–0.22` | Hero tree trunk strokes (`--color-bark`) |
| `0.22` | BotanicalBackground (page-wide, global opacity) |
| `0.25–0.38` | Hero tree leaves and flowers (tsubaki, kaede) |
| `0.25–0.32` | Hero anzu canopy blossoms |
| `0.82` | Shiori ribbon (cards) default |
| `0.85` | Hero tree container opacity |
| `0.90` | Hero anzu canopy container opacity |
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

Each category color is applied consistently in 5 variations:

| Variant | Pattern | Example (Product) |
|---------|---------|-------------------|
| Badge text | `text-cat-{name}` | `text-cat-product` |
| Icon container | `bg-cat-{name}/12 text-cat-{name}` | `bg-cat-product/12 text-cat-product` |
| Strip background | `bg-gradient-to-br from-cat-{name}/8 to-{plant}/6` | `from-cat-product/8 to-kaede/6` |
| Strip decoration | Plant-specific SVG component | `<KaedeStrip />` |
| Shiori ribbon | `.shiori-{name}` | `.shiori-product` |

#### Category × Plant Mapping

| Category | Plant | Strip SVG | Strip Gradient |
|----------|-------|-----------|----------------|
| Product | 楓 Kaede | Maple leaves + green leaf | `from-cat-product/8 to-kaede/6` |
| Tool | 椿 Tsubaki | Camellia flower | `from-cat-tool/8 to-tsubaki/6` |
| Content | 杏 Anzu | Apricot blossoms | `from-cat-content/8 to-anzu/6` |

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
| `text-deep` #2A4A32 | `#E8EDE9` |
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
SVG: w-[min(90vw, 600px)], opacity-45

Structure:
  - Gradient vine path (strokeWidth 1.8, strokeLinecap round)
    stroke: linearGradient(kaede → tsubaki → anzu → accent-leaf)
  - 4 colored berry dots:
    • cx=120, r=5, fill=kaede, opacity=0.5
    • cx=250, r=6, fill=tsubaki, opacity=0.45
    • cx=380, r=5, fill=anzu, opacity=0.5
    • cx=500, r=4, fill=accent-leaf, opacity=0.45

Gradient direction: left=kaede(0%) → tsubaki(35%) → anzu(70%) → leaf(100%)
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

### 5.9 Botanical Background (Page-Wide)

```
Position: fixed inset-0, z-0, pointer-events-none
Opacity: 0.22 (global container, no text-color class)

Elements (18 total) — each with its own plant-specific fill color:
  Kaede (maple): 6 instances, 25-70px
    fill: var(--color-kaede) / var(--color-kaede-hot), alternating
    stem stroke: matching kaede color
  Anzu (apricot): 3 blossoms + 2 petals + 1 bud, 16-50px
    fill: var(--color-anzu) / var(--color-anzu-hot)
  Tsubaki (camellia): 3 flowers + 2 thick leaves, 25-65px
    fill: var(--color-tsubaki) / var(--color-tsubaki-hot)
    thick leaf fill: var(--color-leaf-dark), vein stroke: var(--color-bg-cream)
  Falling petals: 2 single ellipses, 16-20px
    fill: var(--color-tsubaki) and var(--color-anzu)

Animation: gentle-drift, 13s-22s each, ease-in-out, infinite
Placement: edges of viewport, avoiding center content area
Mobile: All elements render (no breakpoint hiding)
```

### 5.10 Hero Tree Composition (Blooming Garden)

ヒーローセクションの庭園構図。3本の庭木がテキストの両脇と上部を囲み、庭園のアーチを形成する。

```
Structure (front to back):
  z-2: Hero text content (max-w-680)
  z-1: Text protection gradient (radial-gradient overlay)
  z-0: Falling leaf animations (8 animated SVG groups)
  z-0: Scattered botanical background (25 elements in 1000x800 viewBox)
  z-0: Anzu canopy (top, 25 blossoms on 3 arching branches)
  z-0: Tsubaki tree (left, green leaves + pink flowers)
  z-0: Kaede tree (right, red star-shaped leaves)
```

#### Tsubaki Tree (Left)
```
Position: absolute, left: -8%, bottom: 0
Size: width: min(48vw, 520px), height: 68%
Opacity: 0.85
SVG viewBox: 0 0 500 700, preserveAspectRatio: xMidYMax meet
Contents:
  - Trunk: 2 paths (bark + bark-dark), strokeWidth 7/5
  - Branches: 3 paths (bark), strokeWidth 4-4.5
  - Leaves: ~25 ellipses, fill=leaf-dark, opacity 0.15-0.22
  - Flowers: 15 <use href="#tf">, fill=tsubaki, opacity 0.30-0.38
Mobile: max-md:hidden
```

#### Kaede Tree (Right)
```
Position: absolute, right: -8%, bottom: 0
Size: width: min(48vw, 520px), height: 68%
Opacity: 0.85
SVG viewBox: 0 0 500 700, preserveAspectRatio: xMidYMax meet
Contents:
  - Trunk: 2 paths (mirrored), strokeWidth 7/5
  - Branches: 3 paths (bark), strokeWidth 4-4.5
  - Leaves: ~40 <use href="#kl">, fill=kaede/kaede-hot alternating
    opacity 0.25-0.30, scale 0.30-0.55
Mobile: max-md:hidden
```

#### Anzu Canopy (Top)
```
Position: absolute, top: 0, left: 10%, right: 10%
Height: 35%
Opacity: 0.9
SVG viewBox: 0 0 800 280, preserveAspectRatio: xMidYMin meet
Contents:
  - Arching branches: 3 paths (bark), strokeWidth 2-3
  - Blossoms: 25 <use href="#af">, fill=anzu, opacity 0.25-0.32
    scale 0.36-0.55, spread across 3 branch lines
Mobile: left: 2%, right: 2% (wider spread)
```

#### Text Protection Gradient
```
Position: absolute inset-0, z-1, pointer-events-none
Background: radial-gradient(
  ellipse 62% 60% at 50% 48%,
  #FAFAF5 0%,             ← solid center
  rgba(250,250,245,1) 25%,
  rgba(250,250,245,.92) 40%,
  rgba(250,250,245,.5) 55%,
  rgba(250,250,245,.15) 68%,
  transparent 80%          ← fade to transparent at edges
)
Purpose: テキストの可読性を保証しながら、周辺の植物装飾を透過させる
```

#### Scattered Botanical Background
```
SVG viewBox: 0 0 1000 800, preserveAspectRatio: xMidYMid slice
Elements (25 total):
  - Kaede leaves: 5, fill=kaede/kaede-hot, opacity 0.14-0.18
  - Tsubaki petals: 6, fill=tsubaki, opacity 0.12-0.16
  - Anzu petals: 7, fill=anzu, opacity 0.12-0.15
  - Green leaves: 4, fill=leaf-dark, opacity 0.11-0.14
  - Anzu buds: 3, fill=anzu, opacity 0.10-0.12
Placement: viewport全域に均等散布。中央は避ける（テキスト保護と重複するため）
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
| `falling` | `8s–12s` | Falling leaf/petal animations | Autumn scatter |

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

#### `leaf-fall` — Autumn Scatter (3 variants)

落ち葉が風に舞いながら降りてくるアニメーション。3つのバリアントを組み合わせて自然な散り方を表現する。

```css
@keyframes leaf-fall {
  0%   { transform: translate(0, 0) rotate(0deg); opacity: 0.28; }
  25%  { transform: translate(-15px, 40px) rotate(45deg); opacity: 0.24; }
  50%  { transform: translate(5px, 90px) rotate(90deg); opacity: 0.20; }
  75%  { transform: translate(-10px, 150px) rotate(135deg); opacity: 0.14; }
  100% { transform: translate(8px, 220px) rotate(180deg); opacity: 0; }
}

@keyframes leaf-fall-2 {
  0%   { transform: translate(0, 0) rotate(0deg); opacity: 0.25; }
  25%  { transform: translate(12px, 50px) rotate(-40deg); opacity: 0.22; }
  50%  { transform: translate(-8px, 110px) rotate(-80deg); opacity: 0.16; }
  75%  { transform: translate(15px, 170px) rotate(-120deg); opacity: 0.10; }
  100% { transform: translate(-5px, 240px) rotate(-160deg); opacity: 0; }
}

@keyframes leaf-fall-3 {
  0%   { transform: translate(0, 0) rotate(10deg); opacity: 0.22; }
  30%  { transform: translate(-20px, 60px) rotate(60deg); opacity: 0.18; }
  60%  { transform: translate(10px, 130px) rotate(110deg); opacity: 0.12; }
  100% { transform: translate(-12px, 200px) rotate(170deg); opacity: 0; }
}
```

**Falling Leaf 利用ルール：**

| Rule | Description |
|------|-------------|
| **8 要素が上限** | 1セクションあたり最大8つの落ち葉アニメーション要素を配置 |
| **3 バリアントを混合** | `leaf-fall`, `leaf-fall-2`, `leaf-fall-3` を均等に割り当てる |
| **duration は 8s–12s** | 早すぎず遅すぎない自然なペース |
| **delay でずらす** | 各要素に 0s–7s の delay を設定し、同時発生を避ける |
| **3 植物 + 緑を混合** | kaede, tsubaki, anzu, leaf-dark の4種を含める |
| **opacity は 0.20–0.28** | 開始時の最大 opacity。終了時は必ず 0 にフェードアウト |
| **translate は ±20px, +220px** | 水平の揺れは ±20px 以内。垂直の移動は 200–240px |
| **rotate は ±180deg** | 1サイクルでほぼ半回転。自然な回転に見える |

**配置の具体例（Hero）：**

| # | Animation | Duration | Delay | Plant | Position |
|---|-----------|:--------:|:-----:|-------|----------|
| 1 | leaf-fall | 8s | 0s | kaede | (200, 350) |
| 2 | leaf-fall-2 | 10s | 2s | kaede-hot | (750, 300) |
| 3 | leaf-fall-3 | 12s | 4s | tsubaki | (150, 200) |
| 4 | leaf-fall | 9s | 6s | tsubaki | (800, 250) |
| 5 | leaf-fall-2 | 11s | 1s | anzu | (350, 100) |
| 6 | leaf-fall-3 | 10s | 3s | anzu | (600, 80) |
| 7 | leaf-fall | 11s | 5s | leaf-dark | (450, 400) |
| 8 | leaf-fall-2 | 9s | 7s | tsubaki | (280, 150) |

### 6.5 Animation Policy (アニメーション方針)

#### 許可されるアニメーション

| Type | Where | Duration | Trigger |
|------|-------|:--------:|---------|
| `fade-in-up` | コンテンツ要素の初回表示 | 800ms | ページロード |
| `gentle-drift` | BotanicalBackground の浮遊 | 13s–22s | 常時（infinite） |
| `gentle-sway` | カードアイコンの揺れ | 600ms | hover |
| `leaf-fall` 系 | ヒーローの落ち葉 | 8s–12s | 常時（infinite） |
| CSS transition | ホバー、フォーカスの状態変化 | 150ms–400ms | hover/focus |

#### 禁止されるアニメーション

| Type | Reason |
|------|--------|
| バウンス / スプリング（強い弾性） | 機械的で庭の静謐さに合わない |
| パーティクルシステム | 過度な動き。パフォーマンス負荷 |
| スクロールトリガーの視差効果 | 複雑さを増し、アクセシビリティの懸念 |
| 3D トランスフォーム | フラットな庭の世界観を壊す |
| SMIL アニメーション | CSS で代替。ブラウザ互換性の問題 |
| 点滅 / フラッシュ | WCAG 2.3.1 違反の恐れ |

#### `prefers-reduced-motion` 対応

**全アニメーションは `prefers-reduced-motion: reduce` で無効化される。** 例外なし。

- `leaf-fall` 系 → 最終フレーム（opacity: 0）で静止 → 実質非表示
- `gentle-drift` → 初期位置で静止
- `fade-in-up` → 最終位置で即座に表示
- CSS transitions → 0.01ms に短縮（イベント発火のため完全 0ms にはしない）

### 6.6 Transition Map

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

### 6.7 Reduced Motion

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

### 7.3 Botanical Motifs — 三花の定義

craftgarden の三花は **楓(kaede)・椿(tsubaki)・杏(anzu)** の3つ。すべて SVG の `fill` ベースで描画し、各植物固有の色トークンを使用する。

#### Kaede (楓 Japanese Maple Leaf)

```
Type: star-shaped 7-point leaf (fill-based)
viewBox: 0 0 100 100
Reusable ID: #kl
Path: M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65
      L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48
      L20 35 L40 38 L28 18 L45 30 Z

Fill colors: var(--color-kaede) / var(--color-kaede-hot), alternating
Size range: 16–70px
Opacity range:
  - BotanicalBackground (page): 0.30–0.60 (within 0.22 global container)
  - Hero scattered: 0.14–0.18
  - Hero tree (right): 0.25–0.30, scale 0.30–0.55
  - Card strip: 0.15–0.25
  - Philosophy decoration: 0.08

Always slightly rotated (±5°–±40°).
Large instances (>= 40px) get gentle-drift animation.
```

#### Tsubaki (椿 Camellia Flower)

```
Type: 6-petal flower (60° rotation ellipses) + 3 stamens
Reusable ID: #tf
Structure:
  <g id="tf">
    6 × <ellipse cx="0" cy="-15" rx="10" ry="16" transform="rotate(N×60)"/>
    3 × <circle r="1.5" fill="var(--color-anzu)" opacity="0.5"/>  ← stamens
  </g>

Fill colors: var(--color-tsubaki) / var(--color-tsubaki-hot)
Stamen color: var(--color-anzu) opacity 0.5 (cross-plant reference)
Size range: 25–65px
Opacity range:
  - BotanicalBackground: 0.20–0.45 (within 0.22 container)
  - Hero tree (left): 0.30–0.38, scale 0.30–0.45
  - Card strip: 0.22
  - Philosophy decoration: 0.12

Leaf variant: ellipse (rx 14, ry 28), fill=leaf-dark + optional midrib stroke
Most complex motif — use sparingly. Max 15 per tree.
```

#### Anzu (杏 Apricot Blossom)

```
Type: 5-petal flower (72° rotation ellipses) + center circle
Reusable ID: #af
Structure:
  <g id="af">
    5 × <ellipse cx="0" cy="-10" rx="7" ry="12" transform="rotate(N×72)"/>
    1 × <circle cx="0" cy="0" r="3" opacity="0.4"/>  ← pistil
  </g>

Fill color: var(--color-anzu) only (hot variant はグラデーション端で使用)
Size range: 20–50px
Opacity range:
  - BotanicalBackground: 0.35–0.50 (within 0.22 container)
  - Hero canopy: 0.25–0.32, scale 0.36–0.55
  - Hero scattered: 0.10–0.15
  - Card strip: 0.16–0.24
  - Philosophy decoration: 0.12

Placed in clusters along arching branches (canopy pattern).
Max 25 blossoms per canopy.
```

#### Tree Trunk & Branches (幹と枝)

```
Type: stroke-based paths (no fill)
Colors:
  - Main trunk: var(--color-bark), strokeWidth 5–7, opacity 0.20–0.24
  - Shadow trunk: var(--color-bark-dark), strokeWidth 4–5, opacity 0.18–0.20
  - Branches: var(--color-bark), strokeWidth 2–4.5, opacity 0.18–0.22

Structure:
  - Trunk: 2 parallel curves (main + shadow) from bottom to crown
  - Branches: 3 per tree, diverging from trunk at different heights
  - Canopy branches: thinner (2–3px), arching curves from top edge

strokeLinecap: round (always)
No fill on trunk/branch paths.
```

### 7.4 SVG Reuse Pattern (`<defs>` + `<use>`)

ヒーローの木を描画する際、同じ花/葉の形状を大量に繰り返すため、SVG `<defs>` + `<use href>` パターンで冗長性を排除する。

```jsx
{/* Hidden SVG defs — render once, reference many times */}
<svg style={{ display: "none" }} aria-hidden="true">
  <defs>
    <path id="kl" d="M50 8 L55 30 L72 18..." />       {/* kaede leaf */}
    <g id="tf">...</g>                                   {/* tsubaki flower */}
    <g id="af">...</g>                                   {/* anzu blossom */}
  </defs>
</svg>

{/* Usage — fill and opacity per instance */}
<g transform="translate(280 280) scale(.55) rotate(10)">
  <use href="#kl" fill="var(--color-kaede)" opacity=".30" />
</g>
```

**ルール：**
- `<defs>` は使用するコンポーネント内に1回だけ配置する（グローバルではない）
- `id` は短く: `kl` (kaede leaf), `tf` (tsubaki flower), `af` (anzu flower)
- `<use>` ごとに `fill`, `opacity`, `transform` を個別指定
- `transform` には `translate`, `scale`, `rotate` をスペース区切りで記述

### 7.5 SVG Implementation Guidelines

- **Inline SVG only** (no external files)
- **Plant-specific colors**: 装飾 SVG には `currentColor` ではなく `var(--color-{plant})` を直接指定
- **UI icons**: `currentColor` を使用（親要素の text color を継承）
- **`viewBox` required**, size controlled by CSS classes or inline style
- **`aria-hidden="true"`** on all decorative SVGs
- **No filters, clipPath, mask, or SMIL** — use CSS for animation
- **`<defs>` + `<use>`** for repeated motifs (trees, canopies)
- **Integer coordinates** where possible
- **Decorative elements**: always `pointer-events-none`
- **`preserveAspectRatio`**: Trees use `xMidYMax meet` (bottom-anchored), canopy uses `xMidYMin meet` (top-anchored)

### 7.6 Decorative Opacity Guide

| Range | Character | Usage |
|-------|-----------|-------|
| 0.06–0.10 | Nearly invisible | Philosophy section flowers, buds |
| 0.10–0.18 | Barely visible | Scattered petals, card strip SVGs |
| 0.20–0.30 | Presence felt | Tree leaves, canopy blossoms |
| 0.30–0.38 | Clearly visible | Tsubaki flowers on tree, kaede leaves |
| 0.82–0.95 | Semi-opaque | Shiori ribbons |

**Rule:** 植物装飾は個々の要素で 0.38 を超えない。コンテナ opacity (0.85–0.90) と組み合わせても **実効 opacity は 0.32 以下** になるよう設計する。テキストの可読性は常に最優先。

---

## 8. Accessibility

### 8.1 Contrast Ratios (WCAG AA)

| Foreground | Background | Ratio | AA Normal | AA Large |
|-----------|------------|:-----:|:---------:|:--------:|
| text-deep on bg-cream | `#2A4A32` / `#FAFAF5` | **9.4:1** | Pass | Pass |
| text-muted on bg-cream | `#5C7260` / `#FAFAF5` | **5.2:1** | Pass | Pass |
| text-light on bg-cream | `#8A9E8C` / `#FAFAF5` | **3.2:1** | Fail | Pass |
| accent-leaf on bg-cream | `#6B8F71` / `#FAFAF5` | **4.0:1** | Fail* | Pass |
| white on accent-leaf | `#FFFFFF` / `#6B8F71` | **3.8:1** | Fail* | Pass |
| bg-cream on text-deep | `#FAFAF5` / `#2A4A32` | **9.4:1** | Pass | Pass |

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
