/**
 * Navigation bar component.
 * Fixed header: star icon + brand name on left, nav links on right.
 */

import { colors } from "@shared/designTokens";
import { solidPaint } from "@shared/colorUtils";
import { starSvg } from "@shared/svgPaths";

const NAV_WIDTH = 1440;
const NAV_HEIGHT = 64;

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

export async function createNavComponent(): Promise<ComponentNode> {
  const nunitoEB = await loadNunito("ExtraBold");
  const nunitoSB = await loadNunito("SemiBold");

  const component = figma.createComponent();
  component.name = "Navigation";
  component.resize(NAV_WIDTH, NAV_HEIGHT);
  component.layoutMode = "HORIZONTAL";
  component.primaryAxisSizingMode = "FIXED";
  component.counterAxisSizingMode = "FIXED";
  component.paddingLeft = 32;
  component.paddingRight = 32;
  component.primaryAxisAlignItems = "SPACE_BETWEEN";
  component.counterAxisAlignItems = "CENTER";
  component.fills = [solidPaint(colors["bg-cream"], 0.85)];
  component.effects = [
    { type: "BACKGROUND_BLUR", blurType: "NORMAL" as const, radius: 12, visible: true },
  ];

  // Left: Logo group
  const logoGroup = figma.createFrame();
  logoGroup.name = "Logo";
  logoGroup.layoutMode = "HORIZONTAL";
  logoGroup.primaryAxisSizingMode = "AUTO";
  logoGroup.counterAxisSizingMode = "AUTO";
  logoGroup.counterAxisAlignItems = "CENTER";
  logoGroup.itemSpacing = 8;
  logoGroup.fills = [];

  // Star icon
  const starNode = figma.createNodeFromSvg(starSvg(colors["accent-leaf"], 2));
  starNode.name = "Star Icon";
  starNode.resize(20, 20);
  logoGroup.appendChild(starNode);

  // Brand name
  const brandText = figma.createText();
  brandText.fontName = nunitoEB;
  brandText.fontSize = 18.4;
  brandText.characters = "craftgarden.studio";
  brandText.fills = [solidPaint(colors["text-deep"])];
  brandText.lineHeight = { value: 24, unit: "PIXELS" };
  logoGroup.appendChild(brandText);

  component.appendChild(logoGroup);

  // Right: Nav links
  const navLinks = figma.createFrame();
  navLinks.name = "Nav Links";
  navLinks.layoutMode = "HORIZONTAL";
  navLinks.primaryAxisSizingMode = "AUTO";
  navLinks.counterAxisSizingMode = "AUTO";
  navLinks.counterAxisAlignItems = "CENTER";
  navLinks.itemSpacing = 32;
  navLinks.fills = [];

  const productsLink = figma.createText();
  productsLink.fontName = nunitoSB;
  productsLink.fontSize = 14.4;
  productsLink.characters = "Products";
  productsLink.fills = [solidPaint(colors["text-muted"])];
  productsLink.lineHeight = { value: 20, unit: "PIXELS" };
  navLinks.appendChild(productsLink);

  const philLink = figma.createText();
  philLink.fontName = nunitoSB;
  philLink.fontSize = 14.4;
  philLink.characters = "Philosophy";
  philLink.fills = [solidPaint(colors["text-muted"])];
  philLink.lineHeight = { value: 20, unit: "PIXELS" };
  navLinks.appendChild(philLink);

  component.appendChild(navLinks);

  return component;
}
