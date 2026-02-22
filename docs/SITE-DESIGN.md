# craftyard.studio Site Design Document

> Last updated: 2026-02-22

---

## 1. Site Structure

Single-page layout. All content on one scrollable page with smooth anchor navigation.

### Section Overview

| # | Section | Purpose | Anchor |
|---|---------|---------|--------|
| 1 | **Navigation** | Minimal fixed nav with logo + anchor links | - |
| 2 | **Hero** | First impression. Tagline, mission, visual identity | `#hero` |
| 3 | **Products** | Showcase all products with category filtering | `#products` |
| 4 | **Philosophy** | Builder mindset, AI collaboration, craft ethos | `#philosophy` |
| 5 | **Tech Stack** | Technologies used across the studio | `#stack` |
| 6 | **Footer** | Links, contact, copyright | - |

---

## 2. Section Details & Copy

### 2.1 Navigation

Fixed top bar. Transparent on hero, solid on scroll. Minimal presence.

```
[craftyard.studio]                    [Products] [Philosophy] [Stack]
```

- Logo: `craftyard.studio` in monospace-like weight, lowercase
- No hamburger menu on mobile (sections are few enough to keep inline or hide nav)
- Nav becomes opaque (`rgba(10, 14, 26, 0.95)`) after scrolling past hero

---

### 2.2 Hero

Full-viewport section. Dark, atmospheric. The "front door" of the studio.

**Layout:**
```
                    ┌─────────────────────────────────────┐
                    │                                     │
                    │          craftyard.studio            │  ← Logo / Wordmark
                    │                                     │
                    │   Crafting digital products          │  ← Tagline (large)
                    │   with AI and passion.               │
                    │                                     │
                    │   AIと情熱で、デジタルプロダクトを     │  ← Japanese subtitle
                    │   つくる。                           │
                    │                                     │
                    │         [ View Products ↓ ]          │  ← CTA
                    │                                     │
                    └─────────────────────────────────────┘
```

**Copy:**

| Element | English | Japanese |
|---------|---------|----------|
| Tagline | Crafting digital products with AI and passion. | AIと情熱で、デジタルプロダクトをつくる。 |
| Sub-copy | A solo builder's studio where ideas become real products. | アイデアが本物のプロダクトになる、ソロビルダーの工房。 |
| CTA | View Products | プロダクトを見る |

**Visual Treatment:**
- Subtle gradient background: deep navy to near-black
- Optional: faint grid pattern or dot matrix overlay (craft/workshop feel)
- Logo wordmark in slightly larger weight, letterspaced
- No hero image or illustration needed — typography-driven

---

### 2.3 Products

Card grid showcasing all products. Each card links to its subdomain.

**Section Header:**

| English | Japanese |
|---------|----------|
| Products | プロダクト |
| Things we've built. Each one solves a real problem. | つくったもの。すべて実際の課題を解くためのプロダクト。 |

**Card Layout:**
```
┌──────────────────────────────────┐
│  [Category Badge]                │
│                                  │
│  Product Name                    │
│  One-line description            │
│                                  │
│  [→ Visit]                       │
└──────────────────────────────────┘
```

**Category Badges:**
- `Product` — Main products with user-facing value
- `Tool` — Internal/developer tools
- `Content` — Content & media platforms

**Product Cards Data:**

| Name | Description (EN) | Description (JP) | Category | URL |
|------|-------------------|-------------------|----------|-----|
| AI PM Service | AI-powered task management for solo builders | AIタスク管理で個人開発を加速 | Product | ai-pm-service.craftyard.studio |
| History Quiz | Learn history through interactive quizzes | インタラクティブな歴史クイズ | Product | history-quiz-app.craftyard.studio |
| WealthPilot | Personal asset management and tracking | 資産管理・資産トラッキング | Product | wealth-pilot.craftyard.studio |
| Product Hub | Project management dashboard for the studio | スタジオ全体のプロジェクト管理 | Tool | product-hub.craftyard.studio |
| Essential Navigator | Essential discovery and navigation tool | Essential Navigator | Tool | essential-navigator.craftyard.studio |
| Content Studio | Content creation and management platform | コンテンツ管理プラットフォーム | Tool | content-studio.craftyard.studio |
| Feedback Hub | Collect and analyze user feedback | フィードバック収集・分析 | Tool | feedback-hub.craftyard.studio |
| AI Solo Builder | Blog for solo builders leveraging AI | AI活用ソロ開発者向けブログ | Content | ai-solo-builder.craftyard.studio |
| Conf Hub | Curated tech conference listings | 技術カンファレンス一覧 | Content | conf-hub.craftyard.studio |
| Orcha | Development process comparison platform | 開発プロセス比較 | Content | orcha.craftyard.studio |
| API Catalog JP | Japanese API reference catalog | 日本語APIカタログ | Content | api-catalog-jp.craftyard.studio |

**Interaction:**
- Category filter tabs above grid: `All` / `Product` / `Tool` / `Content`
- Cards have subtle hover lift (`translateY(-2px)`) and border glow
- Click anywhere on card → opens subdomain in new tab

**Grid:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column (full width cards)

---

### 2.4 Philosophy / About

The soul of craftyard. Why this exists, who builds it, how AI fits in.

**Section Header:**

| English | Japanese |
|---------|----------|
| Philosophy | フィロソフィー |

**Copy — Main Statement:**

> **EN:**
> I build products alone, but never without purpose.
> Every tool in this studio exists because someone — often me — needed it.
> AI is my collaborator, not a shortcut.
> It accelerates the craft, but the vision is always human.
>
> **JP:**
> ひとりでつくる。でも、目的なくつくることはない。
> この工房のすべてのツールは、誰かが — 多くの場合、自分が — 必要としたから生まれた。
> AIは協力者であり、近道ではない。
> ものづくりを加速させるが、ビジョンは常に人間のもの。

**Three Pillars (optional icon + short text):**

| Pillar | English | Japanese |
|--------|---------|----------|
| Craft | Build with care. Ship with pride. | 丁寧につくり、誇りをもって届ける。 |
| AI-Native | AI is woven into every layer of the process. | AIはプロセスのすべてのレイヤーに織り込まれている。 |
| Solo Scale | One person, many products. Systems make it possible. | ひとりで、多くのプロダクトを。仕組みがそれを可能にする。 |

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   "I build products alone, but never without purpose..."    │  ← Large quote
│                                                             │
│   ┌────────────┐  ┌────────────┐  ┌────────────┐           │
│   │   Craft    │  │  AI-Native │  │ Solo Scale │           │  ← 3 pillars
│   │            │  │            │  │            │           │
│   └────────────┘  └────────────┘  └────────────┘           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### 2.5 Tech Stack

Visual display of the technologies powering the studio.

**Section Header:**

| English | Japanese |
|---------|----------|
| Tech Stack | テックスタック |
| The tools behind the tools. | ツールの裏側にあるツール。 |

**Stack Categories:**

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js, React, Flutter, Tailwind CSS |
| **Backend** | Hono, Node.js, Supabase, Express |
| **AI** | Claude (Anthropic), OpenAI, Claude Code |
| **Infra** | Vercel, GitHub Actions, Turso |
| **Language** | TypeScript, Dart, Python |

**Layout:**
- Grouped by category in horizontal rows
- Each technology displayed as a pill/chip with subtle background
- No logos (to keep it clean and avoid asset management) — text-based pills
- Optional: faint monospace font for tech names

```
Frontend     [Next.js]  [React]  [Flutter]  [Tailwind CSS]
Backend      [Hono]  [Node.js]  [Supabase]  [Express]
AI           [Claude]  [OpenAI]  [Claude Code]
Infra        [Vercel]  [GitHub Actions]  [Turso]
Language     [TypeScript]  [Dart]  [Python]
```

---

### 2.6 Footer

Minimal. Functional. Professional.

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   craftyard.studio                                          │
│                                                             │
│   [GitHub]   [Email]                                        │
│                                                             │
│   © 2026 craftyard.studio. All rights reserved.             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Links:**
- GitHub: `https://github.com/ksato8710`
- Email: mailto link (or contact form in future)

---

## 3. Design System

### 3.1 Color Palette

Dark theme with warm accents. The palette balances professionalism with approachability.

#### Core Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0a0e1a` | Page background |
| `--bg-secondary` | `#111827` | Card backgrounds, elevated surfaces |
| `--bg-tertiary` | `#1e293b` | Hover states, subtle highlights |
| `--border` | `#1e293b` | Card borders, dividers |
| `--border-hover` | `rgba(255, 255, 255, 0.12)` | Hover border accent |

#### Text Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--text-primary` | `#f1f5f9` | Body text |
| `--text-secondary` | `#94a3b8` | Descriptions, secondary info |
| `--text-bright` | `#f8fafc` | Headings, emphasis |
| `--text-muted` | `#64748b` | Meta info, footer text |

#### Accent Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--accent-primary` | `#6366f1` | Primary CTA, active nav, links |
| `--accent-warm` | `#f59e0b` | Warm highlights, craft feeling |
| `--accent-emerald` | `#10b981` | Success states, Product badges |
| `--accent-violet` | `#8b5cf6` | Tool badges |
| `--accent-orange` | `#f97316` | Content badges |

#### Category Badge Colors

| Category | Background | Text |
|----------|-----------|------|
| Product | `rgba(16, 185, 129, 0.12)` | `#10b981` |
| Tool | `rgba(139, 92, 246, 0.12)` | `#8b5cf6` |
| Content | `rgba(249, 115, 22, 0.12)` | `#f97316` |

#### Gradient

| Usage | Value |
|-------|-------|
| Hero background | `linear-gradient(180deg, #0a0e1a 0%, #0f1629 50%, #0a0e1a 100%)` |
| Card hover glow | `0 0 0 1px rgba(99, 102, 241, 0.15)` |
| Nav scroll bg | `rgba(10, 14, 26, 0.95)` with `backdrop-filter: blur(12px)` |

### 3.2 Typography

#### Font Stack

```css
font-family: -apple-system, 'Helvetica Neue', 'Inter', 'Hiragino Sans', 'Noto Sans JP', sans-serif;
```

Monospace (for logo, tech pills):
```css
font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
```

#### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| Logo / Wordmark | `1.25rem` | 500 | 1 | `0.08em` |
| Hero Tagline | `3.5rem` / `clamp(2rem, 5vw, 3.5rem)` | 700 | 1.15 | `-0.02em` |
| Hero Sub-copy | `1.125rem` | 400 | 1.6 | `0` |
| Section Title | `2rem` | 700 | 1.3 | `-0.01em` |
| Section Subtitle | `1rem` | 400 | 1.6 | `0` |
| Card Title | `1.125rem` | 600 | 1.4 | `0` |
| Card Description | `0.875rem` | 400 | 1.5 | `0` |
| Category Badge | `0.7rem` | 600 | 1 | `0.05em` |
| Tech Pill | `0.8rem` | 500 | 1 | `0.02em` |
| Body / Pillar Text | `1rem` | 400 | 1.7 | `0` |
| Quote Text | `1.25rem` | 400 | 1.8 | `0` |
| Footer Text | `0.8rem` | 400 | 1.6 | `0` |
| Nav Links | `0.85rem` | 500 | 1 | `0.02em` |

### 3.3 Spacing System

Base unit: `4px` (following Tailwind's `0.25rem` scale)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` | Minimal gaps |
| `--space-sm` | `8px` | Badge padding, inline gaps |
| `--space-md` | `16px` | Card internal padding, grid gaps |
| `--space-lg` | `24px` | Section inner spacing |
| `--space-xl` | `32px` | Between elements within section |
| `--space-2xl` | `48px` | Between sections |
| `--space-3xl` | `64px` | Major section separators |
| `--space-section` | `120px` / `clamp(80px, 10vw, 120px)` | Vertical section padding |

### 3.4 Border & Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `8px` | Badges, pills |
| `--radius-md` | `12px` | Cards |
| `--radius-lg` | `16px` | Large containers |
| `--radius-full` | `9999px` | Circular badges, pills |
| `--border-width` | `1px` | Default border |

### 3.5 Shadows & Effects

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-card` | `0 4px 24px rgba(0, 0, 0, 0.25)` | Card resting state |
| `--shadow-card-hover` | `0 8px 32px rgba(0, 0, 0, 0.35)` | Card hover |
| `--shadow-nav` | `0 1px 0 rgba(255, 255, 255, 0.05)` | Nav bottom edge |

### 3.6 Transitions

| Property | Duration | Easing |
|----------|----------|--------|
| Card hover (transform) | `200ms` | `ease-out` |
| Card border color | `200ms` | `ease` |
| Nav background | `300ms` | `ease` |
| Button hover | `150ms` | `ease` |
| Smooth scroll | `behavior: smooth` | - |

---

## 4. Responsive Strategy

### Breakpoints

| Name | Value | Usage |
|------|-------|-------|
| `sm` | `640px` | Mobile → Small tablet |
| `md` | `768px` | Tablet |
| `lg` | `1024px` | Desktop |
| `xl` | `1280px` | Wide desktop |

Using Tailwind 4's default breakpoints. Mobile-first approach.

### Per-Section Responsive Behavior

#### Navigation
- **Desktop**: Fixed top. Logo left, links right. Inline.
- **Mobile**: Logo centered. Nav links hidden (sections reachable by scroll). Or a slim row of 3 links below logo.

#### Hero
- **Desktop**: `3.5rem` tagline, centered, generous vertical padding (40vh min-height)
- **Tablet**: `2.5rem` tagline
- **Mobile**: `2rem` tagline, reduce vertical padding. Stack tagline and sub-copy tighter.

#### Products
- **Desktop**: 3-column grid, `gap: 20px`
- **Tablet**: 2-column grid
- **Mobile**: 1-column, full-width cards

#### Philosophy
- **Desktop**: Large quote centered, 3 pillars in a row
- **Tablet**: Same layout, smaller text
- **Mobile**: Quote stacked, pillars stack vertically (1 per row)

#### Tech Stack
- **Desktop**: Horizontal rows by category
- **Mobile**: Categories stack, pills wrap naturally

#### Footer
- **All sizes**: Centered, single column. Adapts naturally.

### Container

```css
max-width: 1120px;
margin: 0 auto;
padding: 0 clamp(16px, 4vw, 32px);
```

### Touch Targets

All interactive elements: minimum `44px` height on mobile (WCAG 2.5.5).

---

## 5. Accessibility

| Requirement | Implementation |
|-------------|----------------|
| Contrast ratio | All text meets WCAG AA (4.5:1 for body, 3:1 for large text) |
| Focus indicators | Visible focus ring (2px solid `--accent-primary`) on all interactive elements |
| Keyboard navigation | Tab order follows visual order. Anchor links focusable. |
| Motion | `prefers-reduced-motion` disables hover animations and smooth scroll |
| Language | `lang="en"` with `lang="ja"` on Japanese text blocks |
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` |
| ARIA | `aria-label` on nav, `aria-current` on active section |

---

## 6. Performance Considerations

| Area | Approach |
|------|----------|
| Images | No images in initial build. Typography-driven. |
| Fonts | System fonts only. No external font loading. |
| JS | Minimal. Category filter and scroll-based nav are the only interactive elements. |
| CSS | Tailwind 4 with purge. Estimated < 15KB. |
| Bundle | Target < 100KB total first load (HTML + CSS + JS). |
| Animations | CSS-only. No JS animation libraries. |

---

## 7. SEO & Meta

```html
<title>craftyard.studio — Crafting digital products with AI and passion</title>
<meta name="description" content="A solo builder's studio creating digital products powered by AI. Explore tools, apps, and content platforms built with Next.js, Flutter, Claude, and more." />
<meta property="og:title" content="craftyard.studio" />
<meta property="og:description" content="Crafting digital products with AI and passion." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://craftyard.studio" />
<link rel="canonical" href="https://craftyard.studio" />
```

---

## 8. Implementation Notes

### Tech Stack for the Site Itself
- **Framework**: Next.js 15 (App Router) — already initialized
- **Styling**: Tailwind CSS 4 (`@theme` directive for design tokens)
- **Deploy**: Vercel
- **Domain**: craftyard.studio

### File Structure (Planned)
```
src/
├── app/
│   ├── layout.tsx        # Root layout with meta, fonts
│   ├── page.tsx          # Single page with all sections
│   └── globals.css       # Design tokens + global styles
├── components/
│   ├── Navigation.tsx    # Fixed nav
│   ├── Hero.tsx          # Hero section
│   ├── Products.tsx      # Product grid + filter (client component)
│   ├── Philosophy.tsx    # Philosophy section
│   ├── TechStack.tsx     # Tech stack display
│   └── Footer.tsx        # Footer
└── lib/
    └── products.ts       # Product data array
```

### Design Alignment with Ecosystem
- Shares DNA with `docs/` dark theme palette (`#0a0e1a` base)
- More refined and minimal than the dashboard (corporate vs. utility)
- `border-radius: 12px` for cards (slightly tighter than dashboard's 14px for cleaner feel)
- Same font stack across the ecosystem for consistency
