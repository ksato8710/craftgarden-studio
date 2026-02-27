/**
 * shioriAdder.ts
 * Fix: Add shiori (bookmark ribbon) pseudo-elements to product cards.
 *
 * CSS ::before/::after pseudo-elements are not captured by the MCP tool.
 * Each product card has a colored ribbon bookmark that extends above the card.
 * This fixer detects card frames and adds the ribbon + V-notch geometry.
 */

import { solidPaint } from "@shared/colorUtils";
import { colors } from "@shared/designTokens";

/* ── Known product names for card identification ── */

const KNOWN_PRODUCTS = [
  "AI PM Service",
  "History Quiz",
  "Product Hub",
  "Essential Navigator",
  "Content Studio",
  "Feedback Hub",
  "Competitor UI Viewer",
  "Agent Skill Search",
  "AI Solo Craft",
  "Conf Hub",
  "Orcha",
  "API Catalog JP",
];

/* ── Category colors for shiori ribbons ── */

const CATEGORY_COLORS: Record<string, string> = {
  Product: colors["cat-product"],  // #6B8F71
  Tool: colors["cat-tool"],        // #7E9AAB
  Content: colors["cat-content"],  // #B8956A
};

/* ── Helpers ── */

function walkTree(node: SceneNode, callback: (n: SceneNode) => void): void {
  callback(node);
  if ("children" in node) {
    for (const child of node.children) {
      walkTree(child, callback);
    }
  }
}

/**
 * Collect all text content within a node tree.
 */
function collectText(node: SceneNode): string[] {
  const texts: string[] = [];
  walkTree(node, (n) => {
    if (n.type === "TEXT") {
      texts.push(n.characters.trim());
    }
  });
  return texts;
}

/**
 * Determine if a frame looks like a product card.
 * Heuristics:
 * - Width between 250-350px (card width ~296px)
 * - Height between 250-550px
 * - Contains a known product name or category badge text
 */
function isCardFrame(node: SceneNode): node is FrameNode {
  if (node.type !== "FRAME") return false;

  const w = node.width;
  const h = node.height;

  // Size heuristic
  if (w < 250 || w > 360 || h < 200 || h > 600) return false;

  // Content heuristic: check for product names or category badges
  const texts = collectText(node);
  const hasProductName = texts.some((t) =>
    KNOWN_PRODUCTS.some((p) => t.includes(p))
  );
  const hasCategoryBadge = texts.some(
    (t) => t === "Product" || t === "Tool" || t === "Content"
  );

  return hasProductName || hasCategoryBadge;
}

/**
 * Determine the category of a card from its text content.
 */
function detectCategory(cardNode: FrameNode): string {
  const texts = collectText(cardNode);

  // Direct badge text
  if (texts.includes("Product")) return "Product";
  if (texts.includes("Tool")) return "Tool";
  if (texts.includes("Content")) return "Content";

  // Fall back to product name lookup
  const productCategories: Record<string, string> = {
    "AI PM Service": "Product",
    "History Quiz": "Product",
    "Product Hub": "Tool",
    "Essential Navigator": "Tool",
    "Content Studio": "Tool",
    "Feedback Hub": "Tool",
    "Competitor UI Viewer": "Tool",
    "Agent Skill Search": "Tool",
    "AI Solo Craft": "Content",
    "Conf Hub": "Content",
    "Orcha": "Content",
    "API Catalog JP": "Content",
  };

  for (const text of texts) {
    for (const [name, cat] of Object.entries(productCategories)) {
      if (text.includes(name)) return cat;
    }
  }

  return "Product"; // default fallback
}

/**
 * Check if a card already has a shiori ribbon (avoid duplicates).
 */
function hasShioriAlready(cardNode: FrameNode): boolean {
  for (const child of cardNode.children) {
    if (child.name === "shiori-ribbon" || child.name === "shiori") {
      return true;
    }
  }
  return false;
}

/**
 * Create the shiori ribbon group for a card.
 * The ribbon is 8px wide, 58px tall, positioned at the top-right of the card,
 * extending 12px above the card boundary.
 */
function createShioriRibbon(
  cardNode: FrameNode,
  category: string
): FrameNode {
  const ribbonColor = CATEGORY_COLORS[category] || CATEGORY_COLORS.Product;

  // Create a group frame to hold ribbon + notch
  const shioriGroup = figma.createFrame();
  shioriGroup.name = "shiori-ribbon";
  shioriGroup.fills = []; // transparent frame
  shioriGroup.clipsContent = false;

  const ribbonWidth = 8;
  const ribbonHeight = 58;
  const notchHeight = 6;
  const overhang = 12;

  // Position: top-right of card, 22px from right edge, extending above
  shioriGroup.x = cardNode.width - 22 - ribbonWidth;
  shioriGroup.y = -overhang;
  shioriGroup.resize(ribbonWidth, ribbonHeight + notchHeight);

  // Main ribbon rectangle
  const ribbon = figma.createRectangle();
  ribbon.name = "ribbon-body";
  ribbon.x = 0;
  ribbon.y = 0;
  ribbon.resize(ribbonWidth, ribbonHeight);
  ribbon.fills = [solidPaint(ribbonColor)];
  ribbon.opacity = 0.82;
  ribbon.cornerRadius = 0;
  // Only bottom corners get a slight radius
  ribbon.bottomLeftRadius = 1.5;
  ribbon.bottomRightRadius = 1.5;
  ribbon.topLeftRadius = 0;
  ribbon.topRightRadius = 0;

  shioriGroup.appendChild(ribbon);

  // V-notch triangle at the bottom using a polygon (SVG vector node)
  // The notch is an inverted triangle cut from the bottom of the ribbon
  const notchSvg = `<svg viewBox="0 0 ${ribbonWidth} ${notchHeight}" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,0 ${ribbonWidth},0 ${ribbonWidth / 2},${notchHeight}" fill="${ribbonColor}" opacity="0.82"/>
  </svg>`;

  try {
    const notchNode = figma.createNodeFromSvg(notchSvg);
    notchNode.name = "ribbon-notch";
    notchNode.x = 0;
    notchNode.y = ribbonHeight;
    notchNode.resize(ribbonWidth, notchHeight);
    shioriGroup.appendChild(notchNode);
  } catch {
    // If SVG creation fails, just skip the notch
    console.warn("[shioriAdder] Could not create notch triangle");
  }

  return shioriGroup;
}

/* ── Main export ── */

export async function fixShiori(root: SceneNode): Promise<number> {
  const cards: FrameNode[] = [];

  walkTree(root, (node) => {
    if (isCardFrame(node)) {
      cards.push(node as FrameNode);
    }
  });

  let addedCount = 0;

  for (const card of cards) {
    if (hasShioriAlready(card)) continue;

    const category = detectCategory(card);

    // Ensure the card does not clip the ribbon that extends above it
    card.clipsContent = false;

    const shiori = createShioriRibbon(card, category);
    card.appendChild(shiori);

    addedCount++;
  }

  return addedCount;
}
