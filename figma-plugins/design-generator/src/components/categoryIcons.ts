/**
 * Category icon components using SVGs from shared paths.
 */

import { sproutSvg, tulipSvg, sunSvg } from "@shared/svgPaths";
import { solidPaint } from "@shared/colorUtils";

type Category = "Product" | "Tool" | "Content";

/**
 * Create a category icon node from SVG.
 * Returns a FrameNode (from createNodeFromSvg) sized to 20x20.
 */
export function createCategoryIcon(category: Category, stroke = "#FFFFFF"): FrameNode {
  let svgString: string;
  switch (category) {
    case "Product":
      svgString = sproutSvg(stroke, 2);
      break;
    case "Tool":
      svgString = tulipSvg(stroke, 2);
      break;
    case "Content":
      svgString = sunSvg(stroke, 2);
      break;
  }

  const node = figma.createNodeFromSvg(svgString);
  node.name = `Icon / ${category}`;
  node.resize(20, 20);
  return node;
}

/**
 * Create a category icon wrapped in a colored circle background.
 */
export function createCategoryIconBadge(
  category: Category,
  bgColor: string,
  size = 44
): FrameNode {
  const frame = figma.createFrame();
  frame.name = `Icon Badge / ${category}`;
  frame.resize(size, size);
  frame.cornerRadius = 12;
  frame.fills = [solidPaint(bgColor)];
  frame.layoutMode = "HORIZONTAL";
  frame.primaryAxisAlignItems = "CENTER";
  frame.counterAxisAlignItems = "CENTER";
  frame.primaryAxisSizingMode = "FIXED";
  frame.counterAxisSizingMode = "FIXED";

  const icon = createCategoryIcon(category, "#FFFFFF");
  frame.appendChild(icon);

  return frame;
}
