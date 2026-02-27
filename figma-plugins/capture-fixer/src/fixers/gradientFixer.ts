/**
 * gradientFixer.ts
 * Fix: Replace solid white circles with proper radial gradients.
 *
 * The hero section uses a large radial-gradient for text protection
 * that fades from opaque cream at the center to fully transparent.
 * The MCP capture tool renders this as a solid white fill, losing
 * the gradient transition entirely. This fixer restores it.
 */

import { hexToFigmaRgb } from "@shared/colorUtils";
import { colors } from "@shared/designTokens";

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
 * Determine the absolute Y position of a node.
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
 * Check if a fill is a solid white (or near-white) fill.
 */
function isSolidWhiteFill(fill: Paint): boolean {
  if (fill.type !== "SOLID") return false;
  const { r, g, b } = fill.color;
  // Allow near-white: all channels > 0.9
  return r > 0.9 && g > 0.9 && b > 0.9;
}

/**
 * Check if a node is a large white shape in the hero area.
 * The hero gradient overlay is typically:
 * - Large (>200px in both dimensions)
 * - In the hero section (top ~600-800px of page)
 * - Has a solid white fill
 */
function isHeroGradientCandidate(node: SceneNode): boolean {
  // Must be a shape that can have fills
  if (
    node.type !== "RECTANGLE" &&
    node.type !== "ELLIPSE" &&
    node.type !== "FRAME"
  ) {
    return false;
  }

  // Must be large enough to be the gradient overlay
  if (node.width < 150 || node.height < 150) return false;

  // Must be in the hero section area
  const absY = absoluteY(node);
  if (absY > 800) return false;

  // Must have a solid white fill
  try {
    if ("fills" in node && Array.isArray(node.fills)) {
      const fills = node.fills as readonly Paint[];
      return fills.some((f) => f.visible !== false && isSolidWhiteFill(f));
    }
  } catch {
    /* mixed fills */
  }

  return false;
}

/**
 * Build the radial gradient that matches the CSS radial-gradient
 * used in the hero text protection layer.
 */
function buildRadialGradient(): GradientPaint {
  const cream = hexToFigmaRgb(colors["bg-cream"]); // #FAFAF5

  return {
    type: "GRADIENT_RADIAL",
    gradientTransform: [
      [1, 0, 0],
      [0, 1, 0],
    ],
    gradientStops: [
      {
        position: 0,
        color: { ...cream, a: 1 },
      },
      {
        position: 0.25,
        color: { ...cream, a: 1 },
      },
      {
        position: 0.4,
        color: { ...cream, a: 0.92 },
      },
      {
        position: 0.55,
        color: { ...cream, a: 0.5 },
      },
      {
        position: 0.68,
        color: { ...cream, a: 0.15 },
      },
      {
        position: 0.8,
        color: { ...cream, a: 0 },
      },
    ],
    visible: true,
    opacity: 1,
    blendMode: "NORMAL",
  };
}

/* ── Main export ── */

export async function fixGradients(root: SceneNode): Promise<number> {
  const candidates: SceneNode[] = [];

  walkTree(root, (node) => {
    if (isHeroGradientCandidate(node)) {
      candidates.push(node);
    }
  });

  let fixedCount = 0;

  for (const node of candidates) {
    try {
      const fillableNode = node as RectangleNode | EllipseNode | FrameNode;
      const currentFills = (fillableNode.fills as readonly Paint[]).slice();

      // Replace white solid fills with the radial gradient
      const newFills: Paint[] = [];
      let replaced = false;

      for (const fill of currentFills) {
        if (fill.visible !== false && isSolidWhiteFill(fill) && !replaced) {
          newFills.push(buildRadialGradient());
          replaced = true;
        } else {
          newFills.push(fill);
        }
      }

      if (replaced) {
        fillableNode.fills = newFills;
        fillableNode.name = fillableNode.name || "hero-gradient-overlay";
        fixedCount++;
      }
    } catch (err) {
      console.error("[gradientFixer] Failed to fix gradient:", err);
    }
  }

  return fixedCount;
}
