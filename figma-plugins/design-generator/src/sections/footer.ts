/**
 * Footer section generator.
 * Dark green footer with wave decoration, logo, tagline, social links, and copyright.
 */

import { colors } from "@shared/designTokens";
import { solidPaint, hexToFigmaRgb } from "@shared/colorUtils";
import { waveTopSvg, starSvg } from "@shared/svgPaths";

const SECTION_WIDTH = 1440;

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

/* ── Main footer generator ── */

export async function generateFooter(): Promise<FrameNode> {
  const nunitoEB = await loadNunito("ExtraBold");
  const nunitoSB = await loadNunito("SemiBold");
  const dmSansRegular = await loadDMSans("Regular");

  const section = figma.createFrame();
  section.name = "Section / Footer";
  section.resize(SECTION_WIDTH, 100);
  section.layoutMode = "VERTICAL";
  section.primaryAxisSizingMode = "AUTO";
  section.counterAxisSizingMode = "FIXED";
  section.primaryAxisAlignItems = "CENTER";
  section.counterAxisAlignItems = "CENTER";
  section.fills = [solidPaint(colors["text-deep"])];
  section.clipsContent = true;

  // Wave SVG decoration at top
  const wave = figma.createNodeFromSvg(waveTopSvg(colors["text-deep"]));
  wave.name = "Wave Top";
  wave.resize(SECTION_WIDTH, 60);
  wave.layoutSizingHorizontal = "FILL";
  // Note: the wave blends the section above into this footer.
  // We position it at the very top of the footer.
  section.appendChild(wave);

  // Content area
  const content = figma.createFrame();
  content.name = "Footer Content";
  content.layoutMode = "VERTICAL";
  content.primaryAxisSizingMode = "AUTO";
  content.counterAxisSizingMode = "AUTO";
  content.primaryAxisAlignItems = "CENTER";
  content.counterAxisAlignItems = "CENTER";
  content.itemSpacing = 20;
  content.paddingTop = 40;
  content.paddingBottom = 48;
  content.paddingLeft = 40;
  content.paddingRight = 40;
  content.fills = [];

  // Logo row
  const logoRow = figma.createFrame();
  logoRow.name = "Logo";
  logoRow.layoutMode = "HORIZONTAL";
  logoRow.primaryAxisSizingMode = "AUTO";
  logoRow.counterAxisSizingMode = "AUTO";
  logoRow.counterAxisAlignItems = "CENTER";
  logoRow.itemSpacing = 8;
  logoRow.fills = [];

  const star = figma.createNodeFromSvg(starSvg("#FFFFFF", 2));
  star.resize(18, 18);
  logoRow.appendChild(star);

  const brandName = figma.createText();
  brandName.fontName = nunitoEB;
  brandName.fontSize = 18;
  brandName.characters = "craftgarden.studio";
  brandName.fills = [solidPaint("#FFFFFF")];
  brandName.lineHeight = { value: 24, unit: "PIXELS" };
  logoRow.appendChild(brandName);

  content.appendChild(logoRow);

  // Tagline EN
  const tagline = figma.createText();
  tagline.fontName = dmSansRegular;
  tagline.fontSize = 14;
  tagline.characters = "Plant ideas. Watch them grow. Have fun.";
  tagline.fills = [solidPaint("#FFFFFF", 0.7)];
  tagline.lineHeight = { value: 20, unit: "PIXELS" };
  tagline.textAlignHorizontal = "CENTER";
  content.appendChild(tagline);

  // Tagline JP
  const taglineJp = figma.createText();
  taglineJp.fontName = dmSansRegular;
  taglineJp.fontSize = 12;
  taglineJp.characters = "\u30A2\u30A4\u30C7\u30A2\u3092\u690D\u3048\u3066\u3001\u80B2\u3066\u3066\u3001\u697D\u3057\u3080\u3002";
  taglineJp.fills = [solidPaint("#FFFFFF", 0.5)];
  taglineJp.lineHeight = { value: 18, unit: "PIXELS" };
  taglineJp.textAlignHorizontal = "CENTER";
  content.appendChild(taglineJp);

  // Spacer
  const spacer1 = figma.createFrame();
  spacer1.name = "Spacer";
  spacer1.resize(10, 12);
  spacer1.fills = [];
  content.appendChild(spacer1);

  // Social links row
  const socialRow = figma.createFrame();
  socialRow.name = "Social Links";
  socialRow.layoutMode = "HORIZONTAL";
  socialRow.primaryAxisSizingMode = "AUTO";
  socialRow.counterAxisSizingMode = "AUTO";
  socialRow.counterAxisAlignItems = "CENTER";
  socialRow.itemSpacing = 24;
  socialRow.fills = [];

  const socialLinks = ["GitHub", "X / Twitter", "Blog"];
  for (const linkText of socialLinks) {
    const link = figma.createText();
    link.fontName = nunitoSB;
    link.fontSize = 13;
    link.characters = linkText;
    link.fills = [solidPaint("#FFFFFF", 0.6)];
    link.lineHeight = { value: 18, unit: "PIXELS" };
    socialRow.appendChild(link);
  }

  content.appendChild(socialRow);

  // Spacer
  const spacer2 = figma.createFrame();
  spacer2.name = "Spacer";
  spacer2.resize(10, 16);
  spacer2.fills = [];
  content.appendChild(spacer2);

  // Divider line
  const divider = figma.createRectangle();
  divider.name = "Divider";
  divider.resize(200, 1);
  divider.fills = [solidPaint("#FFFFFF", 0.1)];
  content.appendChild(divider);

  // Spacer
  const spacer3 = figma.createFrame();
  spacer3.name = "Spacer";
  spacer3.resize(10, 8);
  spacer3.fills = [];
  content.appendChild(spacer3);

  // Copyright
  const copyright = figma.createText();
  copyright.fontName = dmSansRegular;
  copyright.fontSize = 12;
  copyright.characters = "\u00A9 2024 craftgarden.studio. Crafted with care.";
  copyright.fills = [solidPaint("#FFFFFF", 0.35)];
  copyright.lineHeight = { value: 18, unit: "PIXELS" };
  copyright.textAlignHorizontal = "CENTER";
  content.appendChild(copyright);

  section.appendChild(content);

  return section;
}
