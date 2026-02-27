/**
 * Button components: CTA and Filter buttons.
 */

import { colors, radii, shadows, typography } from "@shared/designTokens";
import { solidPaint } from "@shared/colorUtils";

/* ── Font helpers ── */

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

/* ── CTA Button ── */

export async function createCtaButton(text: string): Promise<ComponentNode> {
  const component = figma.createComponent();
  component.name = "Button / CTA";
  component.layoutMode = "HORIZONTAL";
  component.primaryAxisSizingMode = "AUTO";
  component.counterAxisSizingMode = "AUTO";
  component.paddingTop = 14;
  component.paddingBottom = 14;
  component.paddingLeft = 32;
  component.paddingRight = 32;
  component.primaryAxisAlignItems = "CENTER";
  component.counterAxisAlignItems = "CENTER";
  component.cornerRadius = radii.btn;
  component.fills = [solidPaint(colors["accent-leaf"])];
  component.effects = [{ ...shadows.ctaButton, blendMode: "NORMAL" as const }];

  const font = await loadNunito("Bold");
  const label = figma.createText();
  label.fontName = font;
  label.fontSize = 16;
  label.characters = text;
  label.fills = [solidPaint("#FFFFFF")];
  label.lineHeight = { value: 24, unit: "PIXELS" };

  component.appendChild(label);

  return component;
}

/* ── Filter Button (with Active / Inactive variants) ── */

export async function createFilterButtonSet(text: string): Promise<ComponentSetNode> {
  const font = await loadDMSans("Medium");

  // Active variant
  const active = figma.createComponent();
  active.name = "State=Active";
  active.layoutMode = "HORIZONTAL";
  active.primaryAxisSizingMode = "AUTO";
  active.counterAxisSizingMode = "AUTO";
  active.paddingTop = 8;
  active.paddingBottom = 8;
  active.paddingLeft = 18;
  active.paddingRight = 18;
  active.cornerRadius = radii.btn;
  active.fills = [solidPaint(colors["accent-leaf"])];

  const activeLabel = figma.createText();
  activeLabel.fontName = font;
  activeLabel.fontSize = 14;
  activeLabel.characters = text;
  activeLabel.fills = [solidPaint("#FFFFFF")];
  activeLabel.lineHeight = { value: 20, unit: "PIXELS" };
  active.appendChild(activeLabel);

  // Inactive variant
  const inactive = figma.createComponent();
  inactive.name = "State=Inactive";
  inactive.layoutMode = "HORIZONTAL";
  inactive.primaryAxisSizingMode = "AUTO";
  inactive.counterAxisSizingMode = "AUTO";
  inactive.paddingTop = 8;
  inactive.paddingBottom = 8;
  inactive.paddingLeft = 18;
  inactive.paddingRight = 18;
  inactive.cornerRadius = radii.btn;
  inactive.fills = [solidPaint(colors["accent-leaf"], 0.08)];

  const inactiveLabel = figma.createText();
  inactiveLabel.fontName = font;
  inactiveLabel.fontSize = 14;
  inactiveLabel.characters = text;
  inactiveLabel.fills = [solidPaint(colors["text-muted"])];
  inactiveLabel.lineHeight = { value: 20, unit: "PIXELS" };
  inactive.appendChild(inactiveLabel);

  const set = figma.combineAsVariants([active, inactive], figma.currentPage);
  set.name = "Button / Filter";

  return set;
}
