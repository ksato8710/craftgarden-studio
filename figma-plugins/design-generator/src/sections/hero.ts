/**
 * Hero section generator.
 * Full viewport hero with scattered botanical SVGs, text content, and CTA.
 */

import { colors, typography } from "@shared/designTokens";
import { solidPaint, hexToFigmaRgb } from "@shared/colorUtils";
import {
  kaedeLeafSvg,
  tsubakiFlowerSvg,
  anzuBlossomSvg,
  greenLeafSvg,
  starSvg,
  sproutSvg,
} from "@shared/svgPaths";
import { createCtaButton } from "../components/buttonComponents";

const HERO_WIDTH = 1440;
const HERO_HEIGHT = 900;

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

/* ── Scatter botanical background elements ── */

function createBotanicalBackground(parent: FrameNode): void {
  const elements: { svg: string; x: number; y: number; size: number; rotation: number }[] = [
    // Kaede leaves
    { svg: kaedeLeafSvg(colors.kaede, 0.08), x: 80, y: 120, size: 60, rotation: -15 },
    { svg: kaedeLeafSvg(colors.kaede, 0.06), x: 1280, y: 200, size: 80, rotation: 25 },
    { svg: kaedeLeafSvg(colors["kaede-hot"], 0.05), x: 1100, y: 680, size: 50, rotation: -40 },
    // Tsubaki flowers
    { svg: tsubakiFlowerSvg(colors.tsubaki, 0.06), x: 160, y: 600, size: 70, rotation: 10 },
    { svg: tsubakiFlowerSvg(colors.tsubaki, 0.04), x: 350, y: 100, size: 45, rotation: -20 },
    // Anzu blossoms
    { svg: anzuBlossomSvg(colors.anzu, 0.07), x: 1300, y: 80, size: 55, rotation: 30 },
    { svg: anzuBlossomSvg(colors.anzu, 0.05), x: 200, y: 400, size: 40, rotation: -10 },
    // Green leaves
    { svg: greenLeafSvg(colors["accent-leaf"], 0.06), x: 1350, y: 500, size: 35, rotation: 45 },
    { svg: greenLeafSvg(colors["accent-sage"], 0.05), x: 60, y: 350, size: 28, rotation: -30 },
    { svg: greenLeafSvg(colors["accent-moss"], 0.07), x: 1200, y: 400, size: 32, rotation: 20 },
    // Additional scattered elements
    { svg: kaedeLeafSvg(colors.kaede, 0.04), x: 900, y: 750, size: 40, rotation: 55 },
    { svg: tsubakiFlowerSvg(colors.tsubaki, 0.03), x: 700, y: 50, size: 35, rotation: -45 },
    { svg: anzuBlossomSvg(colors.anzu, 0.04), x: 500, y: 800, size: 30, rotation: 15 },
  ];

  for (const el of elements) {
    const node = figma.createNodeFromSvg(el.svg);
    node.name = "Botanical Deco";
    node.resize(el.size, el.size);
    node.x = el.x;
    node.y = el.y;
    node.rotation = el.rotation;
    parent.appendChild(node);
  }
}

/* ── Simplified tree shapes ── */

function createTsubakiTree(parent: FrameNode): void {
  // Left side tree — a cluster of tsubaki blossoms on a trunk
  const trunk = figma.createRectangle();
  trunk.name = "Tsubaki Trunk";
  trunk.resize(6, 200);
  trunk.x = 120;
  trunk.y = 500;
  trunk.cornerRadius = 3;
  trunk.fills = [solidPaint(colors.bark, 0.15)];
  parent.appendChild(trunk);

  const positions = [
    { x: 85, y: 360, size: 80, opacity: 0.12 },
    { x: 110, y: 420, size: 60, opacity: 0.09 },
    { x: 60, y: 450, size: 70, opacity: 0.10 },
    { x: 130, y: 380, size: 50, opacity: 0.08 },
  ];

  for (const pos of positions) {
    const blossom = figma.createNodeFromSvg(
      tsubakiFlowerSvg(colors.tsubaki, pos.opacity)
    );
    blossom.resize(pos.size, pos.size);
    blossom.x = pos.x;
    blossom.y = pos.y;
    parent.appendChild(blossom);
  }
}

function createKaedeTree(parent: FrameNode): void {
  // Right side tree
  const trunk = figma.createRectangle();
  trunk.name = "Kaede Trunk";
  trunk.resize(6, 180);
  trunk.x = 1300;
  trunk.y = 520;
  trunk.cornerRadius = 3;
  trunk.fills = [solidPaint(colors.bark, 0.12)];
  parent.appendChild(trunk);

  const positions = [
    { x: 1260, y: 380, size: 70, opacity: 0.10 },
    { x: 1290, y: 440, size: 55, opacity: 0.08 },
    { x: 1320, y: 400, size: 65, opacity: 0.09 },
    { x: 1270, y: 460, size: 45, opacity: 0.07 },
  ];

  for (const pos of positions) {
    const leaf = figma.createNodeFromSvg(
      kaedeLeafSvg(colors.kaede, pos.opacity)
    );
    leaf.resize(pos.size, pos.size);
    leaf.x = pos.x;
    leaf.y = pos.y;
    parent.appendChild(leaf);
  }
}

function createAnzuCanopy(parent: FrameNode): void {
  // Top canopy — scattered anzu blossoms across the top
  const positions = [
    { x: 500, y: 30, size: 40, opacity: 0.06 },
    { x: 600, y: 15, size: 50, opacity: 0.05 },
    { x: 700, y: 25, size: 35, opacity: 0.07 },
    { x: 800, y: 10, size: 45, opacity: 0.05 },
    { x: 900, y: 35, size: 30, opacity: 0.06 },
  ];

  for (const pos of positions) {
    const blossom = figma.createNodeFromSvg(
      anzuBlossomSvg(colors.anzu, pos.opacity)
    );
    blossom.resize(pos.size, pos.size);
    blossom.x = pos.x;
    blossom.y = pos.y;
    parent.appendChild(blossom);
  }
}

/* ── Main hero generator ── */

export async function generateHero(): Promise<FrameNode> {
  const nunitoEB = await loadNunito("ExtraBold");
  const nunitoBold = await loadNunito("Bold");
  const dmSansRegular = await loadDMSans("Regular");

  const hero = figma.createFrame();
  hero.name = "Section / Hero";
  hero.resize(HERO_WIDTH, HERO_HEIGHT);
  hero.fills = [solidPaint(colors["bg-cream"])];
  hero.clipsContent = true;

  // Scattered botanical background
  createBotanicalBackground(hero);

  // Simplified trees
  createTsubakiTree(hero);
  createKaedeTree(hero);
  createAnzuCanopy(hero);

  // Text protection radial gradient overlay
  const overlay = figma.createRectangle();
  overlay.name = "Text Protection Overlay";
  overlay.resize(HERO_WIDTH, HERO_HEIGHT);
  overlay.x = 0;
  overlay.y = 0;
  const creamRgb = hexToFigmaRgb(colors["bg-cream"]);
  overlay.fills = [
    {
      type: "GRADIENT_RADIAL",
      gradientStops: [
        { position: 0, color: { ...creamRgb, a: 0.95 } },
        { position: 0.5, color: { ...creamRgb, a: 0.7 } },
        { position: 1, color: { ...creamRgb, a: 0 } },
      ],
      gradientTransform: [
        [1, 0, 0.5],
        [0, 1, 0.4],
      ],
    },
  ];
  hero.appendChild(overlay);

  // Content container (centered)
  const content = figma.createFrame();
  content.name = "Hero Content";
  content.layoutMode = "VERTICAL";
  content.primaryAxisSizingMode = "AUTO";
  content.counterAxisSizingMode = "AUTO";
  content.primaryAxisAlignItems = "CENTER";
  content.counterAxisAlignItems = "CENTER";
  content.itemSpacing = 24;
  content.fills = [];

  // Badge: "Solo Craft Garden"
  const badgeFrame = figma.createFrame();
  badgeFrame.name = "Badge";
  badgeFrame.layoutMode = "HORIZONTAL";
  badgeFrame.primaryAxisSizingMode = "AUTO";
  badgeFrame.counterAxisSizingMode = "AUTO";
  badgeFrame.counterAxisAlignItems = "CENTER";
  badgeFrame.itemSpacing = 6;
  badgeFrame.paddingTop = 6;
  badgeFrame.paddingBottom = 6;
  badgeFrame.paddingLeft = 14;
  badgeFrame.paddingRight = 14;
  badgeFrame.cornerRadius = 999;
  badgeFrame.fills = [solidPaint(colors["accent-leaf"], 0.08)];

  const sprout = figma.createNodeFromSvg(sproutSvg(colors["accent-leaf"], 1.5));
  sprout.resize(16, 16);
  badgeFrame.appendChild(sprout);

  const badgeText = figma.createText();
  badgeText.fontName = nunitoBold;
  badgeText.fontSize = 13;
  badgeText.characters = "Solo Craft Garden";
  badgeText.fills = [solidPaint(colors["accent-leaf"])];
  badgeText.lineHeight = { value: 18, unit: "PIXELS" };
  badgeFrame.appendChild(badgeText);

  content.appendChild(badgeFrame);

  // H1: Main heading
  const h1 = figma.createText();
  h1.name = "Heading";
  h1.fontName = nunitoEB;
  h1.fontSize = typography.display.size;
  h1.characters = "Plant ideas.\nWatch them grow.\nHave fun.";
  h1.fills = [solidPaint(colors["text-deep"])];
  h1.lineHeight = { value: typography.display.size * typography.display.lineHeight, unit: "PIXELS" };
  h1.letterSpacing = { value: typography.display.letterSpacing * 100, unit: "PERCENT" };
  h1.textAlignHorizontal = "CENTER";
  content.appendChild(h1);

  // JP subtitle
  const jpSub = figma.createText();
  jpSub.name = "JP Subtitle";
  jpSub.fontName = dmSansRegular;
  jpSub.fontSize = 16;
  jpSub.characters = "\u30A2\u30A4\u30C7\u30A2\u3092\u690D\u3048\u3066\u3001\u80B2\u3066\u3066\u3001\u697D\u3057\u3080\u3002";
  jpSub.fills = [solidPaint(colors["text-light"])];
  jpSub.lineHeight = { value: 24, unit: "PIXELS" };
  jpSub.textAlignHorizontal = "CENTER";
  content.appendChild(jpSub);

  // Body text
  const body = figma.createText();
  body.name = "Body";
  body.fontName = dmSansRegular;
  body.fontSize = typography.body.size;
  body.characters = "A solo developer studio cultivating thoughtful software,\none project at a time.";
  body.fills = [solidPaint(colors["text-muted"])];
  body.lineHeight = { value: typography.body.size * typography.body.lineHeight, unit: "PIXELS" };
  body.textAlignHorizontal = "CENTER";
  content.appendChild(body);

  // CTA Button
  const cta = await createCtaButton("Explore the garden \u2192");
  const ctaInstance = cta.createInstance();
  content.appendChild(ctaInstance);

  // Move the CTA component to component storage area
  cta.x = 1600;
  cta.y = 200;

  // Position content in center of hero
  hero.appendChild(content);
  // After appending, manually center the content frame
  const contentWidth = content.width;
  const contentHeight = content.height;
  content.x = Math.round((HERO_WIDTH - contentWidth) / 2);
  content.y = Math.round((HERO_HEIGHT - contentHeight) / 2) - 20;

  return hero;
}
