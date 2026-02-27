/**
 * Philosophy section generator.
 * "A garden, not a factory" section with decorative SVGs and value icons.
 */

import { colors, typography } from "@shared/designTokens";
import { solidPaint, hexToFigmaRgb } from "@shared/colorUtils";
import {
  tsubakiFlowerSvg,
  anzuBlossomSvg,
  kaedeLeafSvg,
  starSvg,
  sproutSvg,
  nurtureSvg,
  shipSvg,
  vineDividerSvg,
} from "@shared/svgPaths";

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

/* ── Value icons row ── */

async function createValueIcons(parent: FrameNode): Promise<void> {
  const nunitoBold = await loadNunito("Bold");
  const dmSansRegular = await loadDMSans("Regular");

  const values = [
    { label: "Grow", jp: "\u80B2\u3064", svgFn: () => sproutSvg(colors["accent-leaf"], 1.5), color: colors["accent-leaf"] },
    { label: "Nurture", jp: "\u80B2\u3080", svgFn: () => nurtureSvg(colors["accent-sage"], 1.5), color: colors["accent-sage"] },
    { label: "Bloom", jp: "\u54B2\u304F", svgFn: () => anzuBlossomSvg(colors["accent-bloom"], 0.8), color: colors["accent-bloom"] },
    { label: "Ship", jp: "\u5C4A\u3051\u308B", svgFn: () => shipSvg(colors["accent-bark"], 1.5), color: colors["accent-bark"] },
  ];

  const row = figma.createFrame();
  row.name = "Value Icons";
  row.layoutMode = "HORIZONTAL";
  row.primaryAxisSizingMode = "AUTO";
  row.counterAxisSizingMode = "AUTO";
  row.primaryAxisAlignItems = "CENTER";
  row.counterAxisAlignItems = "MIN";
  row.itemSpacing = 64;
  row.fills = [];

  for (const val of values) {
    const item = figma.createFrame();
    item.name = `Value / ${val.label}`;
    item.layoutMode = "VERTICAL";
    item.primaryAxisSizingMode = "AUTO";
    item.counterAxisSizingMode = "AUTO";
    item.primaryAxisAlignItems = "CENTER";
    item.counterAxisAlignItems = "CENTER";
    item.itemSpacing = 12;
    item.fills = [];

    // Icon circle
    const circle = figma.createFrame();
    circle.name = "Icon Circle";
    circle.resize(56, 56);
    circle.cornerRadius = 28;
    circle.fills = [solidPaint(val.color, 0.1)];
    circle.layoutMode = "HORIZONTAL";
    circle.primaryAxisAlignItems = "CENTER";
    circle.counterAxisAlignItems = "CENTER";
    circle.primaryAxisSizingMode = "FIXED";
    circle.counterAxisSizingMode = "FIXED";

    const icon = figma.createNodeFromSvg(val.svgFn());
    icon.resize(24, 24);
    circle.appendChild(icon);
    item.appendChild(circle);

    // Label
    const label = figma.createText();
    label.fontName = nunitoBold;
    label.fontSize = 15;
    label.characters = val.label;
    label.fills = [solidPaint(colors["text-deep"])];
    label.lineHeight = { value: 20, unit: "PIXELS" };
    label.textAlignHorizontal = "CENTER";
    item.appendChild(label);

    // JP label
    const jpLabel = figma.createText();
    jpLabel.fontName = dmSansRegular;
    jpLabel.fontSize = 12;
    jpLabel.characters = val.jp;
    jpLabel.fills = [solidPaint(colors["text-light"])];
    jpLabel.lineHeight = { value: 16, unit: "PIXELS" };
    jpLabel.textAlignHorizontal = "CENTER";
    item.appendChild(jpLabel);

    row.appendChild(item);
  }

  parent.appendChild(row);
}

/* ── Main philosophy generator ── */

export async function generatePhilosophy(): Promise<FrameNode> {
  const nunitoEB = await loadNunito("ExtraBold");
  const dmSansRegular = await loadDMSans("Regular");

  const section = figma.createFrame();
  section.name = "Section / Philosophy";
  section.resize(SECTION_WIDTH, 100);
  section.layoutMode = "VERTICAL";
  section.primaryAxisSizingMode = "AUTO";
  section.counterAxisSizingMode = "FIXED";
  section.primaryAxisAlignItems = "CENTER";
  section.counterAxisAlignItems = "CENTER";
  section.paddingTop = 120;
  section.paddingBottom = 120;
  section.paddingLeft = 200;
  section.paddingRight = 200;
  section.itemSpacing = 32;
  section.fills = [solidPaint(colors["bg-warm"])];
  section.clipsContent = true;

  // Decorative SVGs (positioned absolutely outside the auto layout)
  // We will add these after the auto-layout content

  // Gradient line decoration (vine divider)
  const vine = figma.createNodeFromSvg(
    vineDividerSvg({
      kaede: colors.kaede,
      tsubaki: colors.tsubaki,
      anzu: colors.anzu,
      leaf: colors["accent-leaf"],
    })
  );
  vine.name = "Vine Divider";
  vine.resize(300, 20);
  vine.layoutSizingHorizontal = "FIXED";
  section.appendChild(vine);

  // Star icon
  const star = figma.createNodeFromSvg(starSvg(colors["accent-leaf"], 2));
  star.name = "Star";
  star.resize(28, 28);
  section.appendChild(star);

  // Heading
  const heading = figma.createText();
  heading.fontName = nunitoEB;
  heading.fontSize = typography.h2.size;
  heading.characters = "A garden, not a factory";
  heading.fills = [solidPaint(colors["text-deep"])];
  heading.lineHeight = { value: typography.h2.size * typography.h2.lineHeight, unit: "PIXELS" };
  heading.letterSpacing = { value: typography.h2.letterSpacing * 100, unit: "PERCENT" };
  heading.textAlignHorizontal = "CENTER";
  section.appendChild(heading);

  // JP subtitle
  const jpSub = figma.createText();
  jpSub.fontName = dmSansRegular;
  jpSub.fontSize = 15;
  jpSub.characters = "\u5DE5\u5834\u3067\u306F\u306A\u304F\u3001\u5EAD\u3067\u3042\u308A\u305F\u3044\u3002";
  jpSub.fills = [solidPaint(colors["text-light"])];
  jpSub.lineHeight = { value: 22, unit: "PIXELS" };
  jpSub.textAlignHorizontal = "CENTER";
  section.appendChild(jpSub);

  // Body text
  const body = figma.createText();
  body.fontName = dmSansRegular;
  body.fontSize = typography.body.size;
  body.characters = "Each project here grows at its own pace \u2014 planted with curiosity,\nnurtured with care, and shipped when it\u2019s ready to bloom.\nNo deadlines, no pressure. Just the joy of making things.";
  body.fills = [solidPaint(colors["text-muted"])];
  body.lineHeight = { value: typography.body.size * typography.body.lineHeight, unit: "PIXELS" };
  body.textAlignHorizontal = "CENTER";
  body.layoutSizingHorizontal = "FILL";
  section.appendChild(body);

  // Spacer
  const spacer = figma.createFrame();
  spacer.name = "Spacer";
  spacer.resize(10, 16);
  spacer.fills = [];
  section.appendChild(spacer);

  // Value icons row
  await createValueIcons(section);

  // Now add decorative botanical SVGs (positioned manually outside auto layout bounds)
  // Tsubaki top-left
  const decoTsubaki = figma.createNodeFromSvg(
    tsubakiFlowerSvg(colors.tsubaki, 0.08)
  );
  decoTsubaki.name = "Deco Tsubaki";
  decoTsubaki.resize(120, 120);
  decoTsubaki.x = 40;
  decoTsubaki.y = 30;
  decoTsubaki.layoutPositioning = "ABSOLUTE";
  section.appendChild(decoTsubaki);

  // Anzu bottom-right
  const decoAnzu = figma.createNodeFromSvg(
    anzuBlossomSvg(colors.anzu, 0.07)
  );
  decoAnzu.name = "Deco Anzu";
  decoAnzu.resize(100, 100);
  decoAnzu.x = SECTION_WIDTH - 160;
  decoAnzu.y = section.height - 140;
  decoAnzu.layoutPositioning = "ABSOLUTE";
  section.appendChild(decoAnzu);

  // Kaede mid-right
  const decoKaede = figma.createNodeFromSvg(
    kaedeLeafSvg(colors.kaede, 0.06)
  );
  decoKaede.name = "Deco Kaede";
  decoKaede.resize(80, 80);
  decoKaede.x = SECTION_WIDTH - 120;
  decoKaede.y = Math.round(section.height * 0.4);
  decoKaede.layoutPositioning = "ABSOLUTE";
  section.appendChild(decoKaede);

  return section;
}
