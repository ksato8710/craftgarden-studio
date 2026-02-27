/**
 * svgReplacer.ts
 * Fix: Replace raster images (captured SVGs) with true vector nodes.
 *
 * The MCP capture tool rasterizes all inline SVGs into bitmap fills.
 * This fixer identifies them by size/position heuristics and replaces
 * them with crisp vector nodes created from the shared SVG templates.
 */

import { colors } from "@shared/designTokens";
import {
  sproutSvg,
  tulipSvg,
  sunSvg,
  starSvg,
  kaedeLeafSvg,
  tsubakiFlowerSvg,
  anzuBlossomSvg,
  arrowRightSvg,
} from "@shared/svgPaths";

/* ── Helpers ── */

function walkTree(node: SceneNode, callback: (n: SceneNode) => void): void {
  callback(node);
  if ("children" in node) {
    for (const child of node.children) {
      walkTree(child, callback);
    }
  }
}

function hasImageFill(node: SceneNode): boolean {
  try {
    if ("fills" in node && Array.isArray(node.fills)) {
      return (node.fills as readonly Paint[]).some(
        (f) => f.type === "IMAGE"
      );
    }
  } catch {
    /* mixed fills — skip */
  }
  return false;
}

/**
 * Determine the absolute Y position of a node by walking up its parent chain.
 */
function absoluteY(node: SceneNode): number {
  let y = node.y;
  let parent = node.parent;
  while (parent && "y" in parent) {
    y += (parent as SceneNode).y;
    parent = parent.parent;
  }
  return y;
}

/**
 * Determine the absolute X position of a node by walking up its parent chain.
 */
function absoluteX(node: SceneNode): number {
  let x = node.x;
  let parent = node.parent;
  while (parent && "x" in parent) {
    x += (parent as SceneNode).x;
    parent = parent.parent;
  }
  return x;
}

/**
 * Identify what SVG a raster image originally was, based on its size and
 * position within the design.
 */
type SvgKind =
  | "star-logo"
  | "category-sprout"
  | "category-tulip"
  | "category-sun"
  | "arrow-right"
  | "kaede-hero"
  | "tsubaki-hero"
  | "anzu-hero"
  | null;

function identifySvg(node: SceneNode): SvgKind {
  const w = node.width;
  const h = node.height;
  const absY = absoluteY(node);

  // Star logo: very small (~16-24px), in nav area (top 80px)
  if (w >= 12 && w <= 28 && h >= 12 && h <= 28 && absY < 80) {
    return "star-logo";
  }

  // Arrow right icon: small (~16-24px), lower in the page (in cards/buttons)
  if (w >= 14 && w <= 28 && h >= 14 && h <= 28 && absY > 200) {
    return "arrow-right";
  }

  // Category icons: ~20-36px, typically near the top-left area of a card
  if (w >= 16 && w <= 40 && h >= 16 && h <= 40 && absY > 80) {
    // Try to determine which category icon by looking at sibling text
    const categoryText = findSiblingCategoryText(node);
    if (categoryText === "Product") return "category-sprout";
    if (categoryText === "Tool") return "category-tulip";
    if (categoryText === "Content") return "category-sun";
    // Default to sprout for unidentifiable small icons in card area
    return "category-sprout";
  }

  // Hero botanical motifs: medium to large, in the hero section area (y < 700)
  if (w >= 40 && h >= 40 && absY < 700) {
    // Use size ratios and position to guess which botanical
    const absX = absoluteX(node);
    if (absX < 400) return "kaede-hero";
    if (absX > 800) return "anzu-hero";
    return "tsubaki-hero";
  }

  return null;
}

/**
 * Look at sibling nodes of a raster image to find category badge text.
 */
function findSiblingCategoryText(node: SceneNode): string | null {
  const parent = node.parent;
  if (!parent || !("children" in parent)) return null;

  for (const sibling of parent.children) {
    if (sibling.type === "TEXT") {
      const text = sibling.characters.trim();
      if (text === "Product" || text === "Tool" || text === "Content") {
        return text;
      }
    }
    // Also look one level deeper (the icon might be in a wrapper)
    if ("children" in sibling) {
      for (const grandchild of (sibling as FrameNode).children) {
        if (grandchild.type === "TEXT") {
          const text = grandchild.characters.trim();
          if (text === "Product" || text === "Tool" || text === "Content") {
            return text;
          }
        }
      }
    }
  }

  // Also check the grandparent for context
  const grandparent = parent.parent;
  if (grandparent && "children" in grandparent) {
    for (const uncle of (grandparent as FrameNode).children) {
      if (uncle.type === "TEXT") {
        const text = uncle.characters.trim();
        if (text === "Product" || text === "Tool" || text === "Content") {
          return text;
        }
      }
    }
  }

  return null;
}

/**
 * Build the SVG string for a given kind.
 */
function buildSvgString(kind: SvgKind): string | null {
  switch (kind) {
    case "star-logo":
      return starSvg(colors["accent-leaf"], 1.5);
    case "category-sprout":
      return sproutSvg(colors["cat-product"], 1.5);
    case "category-tulip":
      return tulipSvg(colors["cat-tool"], 1.5);
    case "category-sun":
      return sunSvg(colors["cat-content"], 1.5);
    case "arrow-right":
      return arrowRightSvg(colors["accent-leaf"], 2);
    case "kaede-hero":
      return kaedeLeafSvg(colors.kaede, 0.15);
    case "tsubaki-hero":
      return tsubakiFlowerSvg(colors.tsubaki, 0.12);
    case "anzu-hero":
      return anzuBlossomSvg(colors.anzu, 0.15);
    default:
      return null;
  }
}

/* ── Main export ── */

export async function fixSvgs(root: SceneNode): Promise<number> {
  const rasterNodes: SceneNode[] = [];

  walkTree(root, (node) => {
    if (hasImageFill(node)) {
      rasterNodes.push(node);
    }
  });

  let replacedCount = 0;

  for (const rasterNode of rasterNodes) {
    const kind = identifySvg(rasterNode);
    if (!kind) continue;

    const svgStr = buildSvgString(kind);
    if (!svgStr) continue;

    try {
      const vectorNode = figma.createNodeFromSvg(svgStr);

      // Position the vector at the same location and size as the raster
      vectorNode.x = rasterNode.x;
      vectorNode.y = rasterNode.y;
      vectorNode.resize(rasterNode.width, rasterNode.height);

      // Insert into the same parent at the same index
      const parent = rasterNode.parent;
      if (parent && "children" in parent) {
        const index = parent.children.indexOf(rasterNode as SceneNode);
        if (index >= 0) {
          (parent as FrameNode).insertChild(index, vectorNode);
        } else {
          (parent as FrameNode).appendChild(vectorNode);
        }
      }

      // Remove the old raster node
      rasterNode.remove();
      replacedCount++;
    } catch (err) {
      console.error(`[svgReplacer] Failed to replace ${kind}:`, err);
    }
  }

  return replacedCount;
}
