/**
 * Product card component with 3 category variants (Product / Tool / Content).
 * Each card has: botanical strip, icon badge, badge text, title,
 * descriptions (EN + JP), visit link, and shiori ribbon.
 */

import { colors, radii, shadows, typography } from "@shared/designTokens";
import { solidPaint, hexToFigmaRgb } from "@shared/colorUtils";
import { kaedeLeafSvg, tsubakiFlowerSvg, anzuBlossomSvg } from "@shared/svgPaths";
import { createShioriRibbon } from "./shioriRibbon";
import { createCategoryIcon } from "./categoryIcons";

type Category = "Product" | "Tool" | "Content";

const CARD_WIDTH = 296;

const CATEGORY_COLORS: Record<Category, string> = {
  Product: colors["cat-product"],
  Tool: colors["cat-tool"],
  Content: colors["cat-content"],
};

const CATEGORY_LABELS: Record<Category, string> = {
  Product: "Product",
  Tool: "Tool",
  Content: "Content",
};

/* ── Font loading helpers ── */

async function loadNunito(style: string): Promise<FontName> {
  try {
    await figma.loadFontAsync({ family: "Nunito", style });
    return { family: "Nunito", style };
  } catch {
    const fallback = style.includes("Bold") ? "Bold" : "Regular";
    await figma.loadFontAsync({ family: "Inter", style: fallback });
    return { family: "Inter", style: fallback };
  }
}

async function loadDMSans(style: string): Promise<FontName> {
  try {
    await figma.loadFontAsync({ family: "DM Sans", style });
    return { family: "DM Sans", style };
  } catch {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    return { family: "Inter", style: "Regular" };
  }
}

/* ── Botanical strip for card top ── */

function createBotanicalStrip(category: Category): FrameNode {
  const strip = figma.createFrame();
  strip.name = "Botanical Strip";
  strip.resize(CARD_WIDTH, 48);
  strip.clipsContent = true;

  // Gradient background
  const catColor = hexToFigmaRgb(CATEGORY_COLORS[category]);
  strip.fills = [
    {
      type: "GRADIENT_LINEAR",
      gradientStops: [
        { position: 0, color: { ...catColor, a: 0.12 } },
        { position: 1, color: { ...catColor, a: 0.04 } },
      ],
      gradientTransform: [
        [1, 0, 0],
        [0, 1, 0],
      ],
    },
  ];

  // Add small decorative SVG elements
  let svgString: string;
  switch (category) {
    case "Product":
      svgString = kaedeLeafSvg(CATEGORY_COLORS[category], 0.15);
      break;
    case "Tool":
      svgString = tsubakiFlowerSvg(CATEGORY_COLORS[category], 0.15);
      break;
    case "Content":
      svgString = anzuBlossomSvg(CATEGORY_COLORS[category], 0.15);
      break;
  }

  const deco1 = figma.createNodeFromSvg(svgString);
  deco1.resize(32, 32);
  deco1.x = 12;
  deco1.y = 8;
  strip.appendChild(deco1);

  const deco2 = figma.createNodeFromSvg(svgString);
  deco2.resize(24, 24);
  deco2.x = CARD_WIDTH - 48;
  deco2.y = 12;
  strip.appendChild(deco2);

  return strip;
}

/* ── Create a single card variant ── */

async function createCardVariant(category: Category): Promise<ComponentNode> {
  const nunitoBold = await loadNunito("Bold");
  const nunitoExtraBold = await loadNunito("ExtraBold");
  const dmSansRegular = await loadDMSans("Regular");
  const catColor = CATEGORY_COLORS[category];

  const card = figma.createComponent();
  card.name = `Category=${category}`;
  card.resize(CARD_WIDTH, 1); // height will auto-size
  card.layoutMode = "VERTICAL";
  card.primaryAxisSizingMode = "AUTO";
  card.counterAxisSizingMode = "FIXED";
  card.cornerRadius = radii.card;
  card.fills = [solidPaint(colors["bg-card"])];
  card.strokes = [solidPaint(colors["accent-leaf"], 0.08)];
  card.strokeWeight = 1;
  card.clipsContent = false;

  // Botanical strip
  const strip = createBotanicalStrip(category);
  strip.layoutSizingHorizontal = "FILL";
  card.appendChild(strip);

  // Content area
  const content = figma.createFrame();
  content.name = "Content";
  content.layoutMode = "VERTICAL";
  content.primaryAxisSizingMode = "AUTO";
  content.counterAxisSizingMode = "FIXED";
  content.layoutSizingHorizontal = "FILL";
  content.paddingTop = 24;
  content.paddingBottom = 24;
  content.paddingLeft = 24;
  content.paddingRight = 24;
  content.itemSpacing = 12;
  content.fills = [];

  // Icon badge (44x44 with category color bg)
  const iconBadge = figma.createFrame();
  iconBadge.name = "Icon Badge";
  iconBadge.resize(44, 44);
  iconBadge.cornerRadius = 12;
  iconBadge.fills = [solidPaint(catColor)];
  iconBadge.layoutMode = "HORIZONTAL";
  iconBadge.primaryAxisAlignItems = "CENTER";
  iconBadge.counterAxisAlignItems = "CENTER";
  iconBadge.primaryAxisSizingMode = "FIXED";
  iconBadge.counterAxisSizingMode = "FIXED";

  const icon = createCategoryIcon(category, "#FFFFFF");
  iconBadge.appendChild(icon);
  content.appendChild(iconBadge);

  // Badge text (category label)
  const badge = figma.createText();
  badge.name = "Badge";
  badge.fontName = nunitoBold;
  badge.fontSize = typography.badge.size;
  badge.characters = CATEGORY_LABELS[category];
  badge.textCase = "UPPER";
  badge.letterSpacing = { value: 8, unit: "PERCENT" };
  badge.fills = [solidPaint(catColor)];
  badge.lineHeight = { value: typography.badge.size * typography.badge.lineHeight, unit: "PIXELS" };
  content.appendChild(badge);

  // Title placeholder
  const title = figma.createText();
  title.name = "Title";
  title.fontName = nunitoBold;
  title.fontSize = typography.h3.size;
  title.characters = "Product Name";
  title.fills = [solidPaint(colors["text-deep"])];
  title.lineHeight = { value: typography.h3.size * typography.h3.lineHeight, unit: "PIXELS" };
  content.appendChild(title);

  // Description EN
  const descEn = figma.createText();
  descEn.name = "Description EN";
  descEn.fontName = dmSansRegular;
  descEn.fontSize = typography.small.size;
  descEn.characters = "Product description in English";
  descEn.fills = [solidPaint(colors["text-muted"])];
  descEn.lineHeight = { value: typography.small.size * typography.small.lineHeight, unit: "PIXELS" };
  descEn.layoutSizingHorizontal = "FILL";
  content.appendChild(descEn);

  // Description JP
  const descJp = figma.createText();
  descJp.name = "Description JP";
  descJp.fontName = dmSansRegular;
  descJp.fontSize = 12;
  descJp.characters = "Japanese description";
  descJp.fills = [solidPaint(colors["text-light"])];
  descJp.lineHeight = { value: 18, unit: "PIXELS" };
  descJp.layoutSizingHorizontal = "FILL";
  content.appendChild(descJp);

  // Spacer
  const spacer = figma.createFrame();
  spacer.name = "Spacer";
  spacer.resize(10, 8);
  spacer.fills = [];
  spacer.layoutSizingHorizontal = "FILL";
  content.appendChild(spacer);

  // Visit link
  const visitLink = figma.createText();
  visitLink.name = "Visit Link";
  visitLink.fontName = nunitoBold;
  visitLink.fontSize = 13;
  visitLink.characters = "Visit \u2192";
  visitLink.fills = [solidPaint(colors["accent-leaf"])];
  visitLink.lineHeight = { value: 20, unit: "PIXELS" };
  content.appendChild(visitLink);

  card.appendChild(content);

  // Shiori ribbon (positioned absolutely)
  const ribbon = createShioriRibbon(category);
  ribbon.x = CARD_WIDTH - 22 - 8; // right: 22px
  ribbon.y = -12;
  card.appendChild(ribbon);

  return card;
}

/* ── Create the full card component set ── */

export async function createCardComponentSet(): Promise<ComponentSetNode> {
  const productCard = await createCardVariant("Product");
  const toolCard = await createCardVariant("Tool");
  const contentCard = await createCardVariant("Content");

  const set = figma.combineAsVariants(
    [productCard, toolCard, contentCard],
    figma.currentPage
  );
  set.name = "Card / Product";

  return set;
}
