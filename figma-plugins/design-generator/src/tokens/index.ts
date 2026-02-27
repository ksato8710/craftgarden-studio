/**
 * Creates Figma Variables (Color & Spacing collections) and Text Styles
 * from the CraftGarden design tokens.
 */

import { colors, spacing, typography } from "@shared/designTokens";
import { figmaRGBA } from "@shared/colorUtils";

/* ── Font weight to Figma style name mapping ── */
function weightToStyle(weight: number): string {
  switch (weight) {
    case 400: return "Regular";
    case 600: return "SemiBold";
    case 700: return "Bold";
    case 800: return "ExtraBold";
    default: return "Regular";
  }
}

/* ── Load required fonts with Inter fallback ── */
async function loadFont(family: string, weight: number): Promise<{ family: string; style: string }> {
  const style = weightToStyle(weight);
  try {
    await figma.loadFontAsync({ family, style });
    return { family, style };
  } catch {
    // Fallback to Inter
    const fallbackStyle = weight >= 700 ? "Bold" : "Regular";
    await figma.loadFontAsync({ family: "Inter", style: fallbackStyle });
    return { family: "Inter", style: fallbackStyle };
  }
}

/* ── Create Color Variables ── */
async function createColorVariables(): Promise<void> {
  const collection = figma.variables.createVariableCollection("CraftGarden / Colors");
  const modeId = collection.modes[0].modeId;

  for (const [name, hex] of Object.entries(colors)) {
    const variable = figma.variables.createVariable(
      `color/${name}`,
      collection,
      "COLOR"
    );
    variable.setValueForMode(modeId, figmaRGBA(hex));
  }
}

/* ── Create Spacing Variables ── */
async function createSpacingVariables(): Promise<void> {
  const collection = figma.variables.createVariableCollection("CraftGarden / Spacing");
  const modeId = collection.modes[0].modeId;

  for (const [name, value] of Object.entries(spacing)) {
    const variable = figma.variables.createVariable(
      `spacing/${name}`,
      collection,
      "FLOAT"
    );
    variable.setValueForMode(modeId, value);
  }
}

/* ── Create Text Styles ── */
async function createTextStyles(): Promise<void> {
  const entries: [string, typeof typography[keyof typeof typography]][] = [
    ["Display", typography.display],
    ["H2", typography.h2],
    ["H3", typography.h3],
    ["Body", typography.body],
    ["Small", typography.small],
    ["Badge", typography.badge],
  ];

  for (const [name, token] of entries) {
    const font = await loadFont(token.family, token.weight);
    const style = figma.createTextStyle();
    style.name = `CraftGarden / ${name}`;
    style.fontName = font;
    style.fontSize = token.size;
    style.lineHeight = { value: token.size * token.lineHeight, unit: "PIXELS" };
    if (token.letterSpacing !== 0) {
      style.letterSpacing = { value: token.letterSpacing * 100, unit: "PERCENT" };
    }
    if (name === "Badge") {
      style.textCase = "UPPER";
    }
  }
}

/* ── Public orchestrator ── */
export async function createTokensAndStyles(): Promise<void> {
  await createColorVariables();
  await createSpacingVariables();
  await createTextStyles();
}
