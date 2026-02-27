/**
 * backdropBlurFixer.ts
 * Fix: Add backdrop blur effect to the navigation bar.
 *
 * The CSS `backdrop-filter: blur()` property is not transferred by the
 * MCP capture tool. The navigation bar should have a frosted glass
 * appearance with a semi-transparent cream background and blur.
 */

import { solidPaint, hexToFigmaRgb } from "@shared/colorUtils";
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
 * Check if a node looks like the navigation bar.
 * Heuristics:
 * - Frame type
 * - Full width or near-full width
 * - Short height (~56-80px)
 * - At or near y=0 (top of page)
 * - Contains text like "craftgarden.studio" or nav link text
 */
function isNavBar(node: SceneNode): node is FrameNode {
  if (node.type !== "FRAME") return false;

  // Must be near the top
  if (node.y > 10) return false;

  // Must be short (nav bar height)
  if (node.height < 40 || node.height > 100) return false;

  // Must be wide (at least 80% of a typical viewport)
  if (node.width < 800) return false;

  return true;
}

/**
 * Alternative detection: find by content.
 */
function containsNavContent(node: SceneNode): boolean {
  let found = false;
  walkTree(node, (n) => {
    if (n.type === "TEXT") {
      const text = n.characters.toLowerCase();
      if (
        text.includes("craftgarden") ||
        text.includes("products") ||
        text.includes("philosophy") ||
        text.includes("tech stack")
      ) {
        found = true;
      }
    }
  });
  return found;
}

/**
 * Check if a node already has a background blur effect.
 */
function hasBackdropBlur(node: FrameNode): boolean {
  try {
    return node.effects.some((e) => e.type === "BACKGROUND_BLUR");
  } catch {
    return false;
  }
}

/* ── Main export ── */

export async function fixBackdropBlur(root: SceneNode): Promise<number> {
  const navCandidates: FrameNode[] = [];

  // Strategy 1: Look at direct children for nav-like frames
  if ("children" in root) {
    for (const child of (root as FrameNode).children) {
      if (isNavBar(child)) {
        navCandidates.push(child as FrameNode);
      }
    }
  }

  // Strategy 2: Walk the tree for frames with nav content near the top
  if (navCandidates.length === 0) {
    walkTree(root, (node) => {
      if (node.type === "FRAME" && node.height < 100 && node.height > 40) {
        if (containsNavContent(node)) {
          // Verify it is near the top
          let absY = node.y;
          let parent = node.parent;
          while (parent && "y" in parent) {
            absY += (parent as SceneNode).y;
            parent = parent.parent;
          }
          if (absY < 20) {
            navCandidates.push(node as FrameNode);
          }
        }
      }
    });
  }

  let fixedCount = 0;

  for (const nav of navCandidates) {
    if (hasBackdropBlur(nav)) continue;

    try {
      // Add background blur effect
      const existingEffects = [...nav.effects];
      const blurEffect: BlurEffect = {
        type: "BACKGROUND_BLUR",
        blurType: "NORMAL",
        radius: 12,
        visible: true,
      };
      nav.effects = [...existingEffects, blurEffect];

      // Set semi-transparent cream background
      // The nav uses bg-cream (#FAFAF5) at ~0.9 opacity
      nav.fills = [solidPaint(colors["bg-cream"], 0.9)];

      nav.name = nav.name === "Frame" ? "Navigation" : nav.name;

      fixedCount++;
    } catch (err) {
      console.error("[backdropBlurFixer] Failed to fix nav:", err);
    }
  }

  return fixedCount;
}
