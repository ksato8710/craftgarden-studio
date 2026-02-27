/**
 * buttonComponentizer.ts
 * Fix: Convert captured "Link" frames into properly styled buttons.
 *
 * The MCP capture tool renders <a> and <button> elements as plain frames
 * named "Link" without proper button styling, auto layout, or border radius.
 * This fixer identifies CTA buttons and card visit links, then applies
 * the correct design system styling.
 */

import { solidPaint } from "@shared/colorUtils";
import { colors, radii, shadows, typography } from "@shared/designTokens";

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
 * Find the first TEXT child of a node (direct or nested).
 */
function findTextChild(node: SceneNode): TextNode | null {
  if (node.type === "TEXT") return node;
  if ("children" in node) {
    for (const child of node.children) {
      const found = findTextChild(child);
      if (found) return found;
    }
  }
  return null;
}

/**
 * Get all text content within a node.
 */
function getTextContent(node: SceneNode): string {
  const texts: string[] = [];
  walkTree(node, (n) => {
    if (n.type === "TEXT") {
      texts.push(n.characters);
    }
  });
  return texts.join(" ").trim();
}

/**
 * Check if a node looks like a CTA button (the main "Explore the garden" button).
 */
function isCtaButton(node: SceneNode): boolean {
  const text = getTextContent(node).toLowerCase();
  return (
    text.includes("explore the garden") ||
    text.includes("explore") ||
    text.includes("get started")
  );
}

/**
 * Check if a node is a card "Visit" link.
 */
function isVisitLink(node: SceneNode): boolean {
  const text = getTextContent(node).toLowerCase();
  return text === "visit" || text.includes("visit →") || text.includes("visit");
}

/**
 * Check if a frame is a Link-type capture.
 */
function isLinkFrame(node: SceneNode): boolean {
  if (node.type !== "FRAME") return false;
  // Captured links are typically named "Link" by the MCP tool
  if (node.name === "Link" || node.name === "link") return true;
  // Also check for unnamed frames that contain only text with link-like content
  const text = getTextContent(node).toLowerCase();
  if (
    text.includes("explore") ||
    text === "visit" ||
    text.includes("visit →")
  ) {
    return true;
  }
  return false;
}

/**
 * Load a font before setting text properties.
 */
async function loadFont(family: string, style: string): Promise<void> {
  try {
    await figma.loadFontAsync({ family, style });
  } catch {
    // Fallback to Inter if the font is not available
    try {
      await figma.loadFontAsync({ family: "Inter", style });
    } catch {
      console.warn(`[buttonComponentizer] Could not load font ${family} ${style}`);
    }
  }
}

/**
 * Style a CTA button (primary action button).
 */
async function styleCtaButton(frame: FrameNode): Promise<void> {
  // Apply Auto Layout
  frame.layoutMode = "HORIZONTAL";
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "AUTO";
  frame.paddingTop = 14;
  frame.paddingBottom = 14;
  frame.paddingLeft = 32;
  frame.paddingRight = 32;
  frame.primaryAxisAlignItems = "CENTER";
  frame.counterAxisAlignItems = "CENTER";
  frame.itemSpacing = 8;

  // Visual styling
  frame.cornerRadius = radii.btn; // 999 (pill shape)
  frame.fills = [solidPaint(colors["accent-leaf"])];
  frame.effects = [{ ...shadows.ctaButton, blendMode: "NORMAL" as const }];

  // Style all text children
  await loadFont("Nunito", "Bold");

  walkTree(frame, (n) => {
    if (n.type === "TEXT") {
      try {
        n.fills = [solidPaint("#FFFFFF")];
        n.fontSize = 16;
        n.fontName = { family: "Nunito", style: "Bold" };
        n.textAlignHorizontal = "CENTER";
      } catch {
        /* skip if text editing fails */
      }
    }
  });

  frame.name = "CTA Button";
}

/**
 * Style a card "Visit" link.
 */
async function styleVisitLink(frame: FrameNode): Promise<void> {
  // Lighter styling — just color and font adjustments
  await loadFont("Nunito", "SemiBold");

  walkTree(frame, (n) => {
    if (n.type === "TEXT") {
      try {
        n.fills = [solidPaint(colors["accent-leaf"])];
        n.fontSize = 13.3;
        n.fontName = { family: "Nunito", style: "SemiBold" };
      } catch {
        /* skip if text editing fails */
      }
    }
  });

  frame.name = "Visit Link";
}

/* ── Main export ── */

export async function fixButtons(root: SceneNode): Promise<number> {
  const linkFrames: FrameNode[] = [];

  walkTree(root, (node) => {
    if (isLinkFrame(node)) {
      linkFrames.push(node as FrameNode);
    }
  });

  let fixedCount = 0;

  for (const frame of linkFrames) {
    try {
      if (isCtaButton(frame)) {
        await styleCtaButton(frame);
        fixedCount++;
      } else if (isVisitLink(frame)) {
        await styleVisitLink(frame);
        fixedCount++;
      }
    } catch (err) {
      console.error("[buttonComponentizer] Failed to fix button:", err);
    }
  }

  return fixedCount;
}
