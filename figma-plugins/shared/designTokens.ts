/**
 * Design tokens extracted from globals.css @theme directive.
 * All values are CSS-ready hex strings or semantic values.
 */

/* ── Color tokens ── */
export const colors = {
  // Background
  "bg-cream": "#FAFAF5",
  "bg-warm": "#F5F2EC",
  "bg-card": "#F0EDE6",

  // Text
  "text-deep": "#2D3B2E",
  "text-muted": "#5C7260",
  "text-light": "#8A9E8C",

  // Botanical accents
  "accent-leaf": "#6B8F71",
  "accent-sage": "#9BB09E",
  "accent-moss": "#4A7051",
  "accent-bark": "#8B7355",
  "accent-bloom": "#C4926B",

  // Plant-specific
  anzu: "#F08C28",
  "anzu-hot": "#FF9A1F",
  tsubaki: "#E05577",
  "tsubaki-hot": "#F0487A",
  kaede: "#D63E2F",
  "kaede-hot": "#E8442E",
  bark: "#7A5E3A",
  "bark-dark": "#5C4428",
  "leaf-dark": "#3D6B45",

  // Category
  "cat-product": "#6B8F71",
  "cat-tool": "#7E9AAB",
  "cat-content": "#B8956A",
} as const;

export type ColorToken = keyof typeof colors;

/* ── Spacing tokens (in px) ── */
export const spacing = {
  "0": 0,
  "1": 4,
  "2": 8,
  "3": 12,
  "4": 16,
  "5": 20,
  "6": 24,
  "8": 32,
  "10": 40,
  "12": 48,
  "14": 56,
  "16": 64,
  "20": 80,
  "24": 96,
} as const;

/* ── Typography tokens ── */
export const typography = {
  display: { family: "Nunito", size: 64, weight: 800, lineHeight: 1.15, letterSpacing: -0.025 },
  h2: { family: "Nunito", size: 40, weight: 800, lineHeight: 1.2, letterSpacing: -0.02 },
  h3: { family: "Nunito", size: 18, weight: 700, lineHeight: 1.3, letterSpacing: 0 },
  body: { family: "DM Sans", size: 16, weight: 400, lineHeight: 1.7, letterSpacing: 0 },
  small: { family: "DM Sans", size: 14, weight: 400, lineHeight: 1.6, letterSpacing: 0 },
  badge: { family: "Nunito", size: 11, weight: 700, lineHeight: 1.2, letterSpacing: 0.08 },
} as const;

export type TypographyToken = keyof typeof typography;

/* ── Border radius ── */
export const radii = {
  card: 16,
  btn: 999,
} as const;

/* ── Shadows ── */
export const shadows = {
  cardHover: {
    type: "DROP_SHADOW" as const,
    color: { r: 45 / 255, g: 59 / 255, b: 46 / 255, a: 0.08 },
    offset: { x: 0, y: 12 },
    radius: 32,
    spread: 0,
    visible: true,
  },
  ctaButton: {
    type: "DROP_SHADOW" as const,
    color: { r: 107 / 255, g: 143 / 255, b: 113 / 255, a: 0.25 },
    offset: { x: 0, y: 4 },
    radius: 16,
    spread: 0,
    visible: true,
  },
};
