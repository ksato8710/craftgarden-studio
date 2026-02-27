/**
 * autoLayoutFixer.ts
 * Fix: Apply Auto Layout to product card frames.
 *
 * Captured cards come as plain frames with absolute positioning.
 * This fixer converts them to use Figma Auto Layout so that they
 * respond correctly to content changes and are easier to edit.
 */

import { radii } from "@shared/designTokens";

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
 * Determine if a frame is a product card based on size and content.
 */
function isCardFrame(node: SceneNode): node is FrameNode {
  if (node.type !== "FRAME") return false;

  const w = node.width;
  const h = node.height;

  // Size heuristic: cards are ~296px wide, 280-550px tall
  if (w < 250 || w > 360 || h < 200 || h > 600) return false;

  // Content heuristic
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
 * Check if a frame already has Auto Layout applied.
 */
function hasAutoLayout(frame: FrameNode): boolean {
  return frame.layoutMode !== "NONE";
}

/**
 * Identify the image/gradient strip at the top of a card.
 * This is typically the first child and spans the full card width.
 */
function isTopStrip(child: SceneNode, cardWidth: number): boolean {
  if (child.type !== "FRAME" && child.type !== "RECTANGLE") return false;
  // Top strip spans the full width and is typically 120-180px tall
  return (
    child.width >= cardWidth - 4 &&
    child.height >= 80 &&
    child.height <= 200 &&
    child.y <= 5
  );
}

/**
 * Apply Auto Layout to a card frame.
 *
 * Strategy: The card has two main zones:
 * 1. Top strip (gradient/image area) — fills width, fixed height
 * 2. Content area — padded, contains text, badges, links
 *
 * We apply vertical auto layout to the card and set appropriate sizing
 * modes for each child.
 */
function applyCardAutoLayout(card: FrameNode): void {
  const cardWidth = card.width;

  // Set auto layout on the card
  card.layoutMode = "VERTICAL";
  card.primaryAxisSizingMode = "AUTO";
  card.counterAxisSizingMode = "FIXED";
  card.counterAxisAlignItems = "MIN";

  // Edge-to-edge: no card-level padding — the top strip goes to edges
  card.paddingTop = 0;
  card.paddingBottom = 0;
  card.paddingLeft = 0;
  card.paddingRight = 0;
  card.itemSpacing = 0;

  // Ensure card has proper border radius
  card.cornerRadius = radii.card; // 16

  // Update children sizing modes
  for (const child of card.children) {
    try {
      if ("layoutAlign" in child) {
        // Top strip: stretch to fill width, fixed height
        if (isTopStrip(child, cardWidth)) {
          (child as FrameNode).layoutAlign = "STRETCH";
          (child as FrameNode).layoutSizingHorizontal = "FILL";
          (child as FrameNode).layoutSizingVertical = "FIXED";
        } else if (child.type === "FRAME") {
          // Content sections: stretch horizontally, hug vertically
          (child as FrameNode).layoutAlign = "STRETCH";
          (child as FrameNode).layoutSizingHorizontal = "FILL";
          (child as FrameNode).layoutSizingVertical = "HUG";

          // If this looks like the main content wrapper, add padding
          if (child.height > 100 && child.children.length > 1) {
            child.layoutMode = "VERTICAL";
            child.primaryAxisSizingMode = "AUTO";
            child.counterAxisSizingMode = "FIXED";
            child.paddingTop = 24;
            child.paddingBottom = 24;
            child.paddingLeft = 24;
            child.paddingRight = 24;
            child.itemSpacing = 12;
          }
        }
      }
    } catch {
      /* Some children might not support these properties — skip */
    }
  }
}

/* ── Main export ── */

export async function fixAutoLayout(root: SceneNode): Promise<number> {
  const cards: FrameNode[] = [];

  walkTree(root, (node) => {
    if (isCardFrame(node) && !hasAutoLayout(node as FrameNode)) {
      cards.push(node as FrameNode);
    }
  });

  let fixedCount = 0;

  for (const card of cards) {
    try {
      applyCardAutoLayout(card);
      fixedCount++;
    } catch (err) {
      console.error("[autoLayoutFixer] Failed to fix card:", err);
    }
  }

  return fixedCount;
}
