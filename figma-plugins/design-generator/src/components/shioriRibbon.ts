/**
 * Shiori bookmark ribbon component.
 * A narrow vertical ribbon with a V-notch at the bottom,
 * colored by product category.
 */

import { colors } from "@shared/designTokens";
import { solidPaint, hexToFigmaRgb } from "@shared/colorUtils";

type Category = "Product" | "Tool" | "Content";

const CATEGORY_COLORS: Record<Category, string> = {
  Product: colors["cat-product"],
  Tool: colors["cat-tool"],
  Content: colors["cat-content"],
};

const RIBBON_WIDTH = 8;
const RIBBON_HEIGHT = 58;
const NOTCH_DEPTH = 5;

/**
 * Create a shiori ribbon for a given category.
 * Returns a FrameNode so it can be positioned absolutely on the card.
 */
export function createShioriRibbon(category: Category): FrameNode {
  const color = CATEGORY_COLORS[category];

  const frame = figma.createFrame();
  frame.name = `Shiori / ${category}`;
  frame.resize(RIBBON_WIDTH, RIBBON_HEIGHT);
  frame.fills = [];
  frame.clipsContent = false;

  // Main ribbon body (slightly shorter to leave room for notch)
  const bodyHeight = RIBBON_HEIGHT - NOTCH_DEPTH;
  const body = figma.createRectangle();
  body.name = "Ribbon Body";
  body.resize(RIBBON_WIDTH, bodyHeight);
  body.x = 0;
  body.y = 0;
  body.fills = [solidPaint(color)];
  body.opacity = 0.82;
  frame.appendChild(body);

  // V-notch triangle at bottom using a vector/polygon
  const notch = figma.createVector();
  notch.name = "Ribbon Notch";

  // Triangle pointing upward into the ribbon to create the V-notch effect
  // Points: bottom-left, center-top, bottom-right
  const hw = RIBBON_WIDTH / 2;
  notch.vectorPaths = [
    {
      windingRule: "EVENODD",
      data: `M 0 0 L ${hw} ${NOTCH_DEPTH} L ${RIBBON_WIDTH} 0 Z`,
    },
  ];
  notch.resize(RIBBON_WIDTH, NOTCH_DEPTH);
  notch.x = 0;
  notch.y = bodyHeight;
  notch.fills = [solidPaint(color)];
  notch.opacity = 0.82;
  frame.appendChild(notch);

  return frame;
}
