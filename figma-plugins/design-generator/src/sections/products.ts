/**
 * Products section generator.
 * Creates the "What's growing" section with filter buttons and
 * a 3-column grid of 12 product cards using real data.
 */

import { colors, typography, spacing } from "@shared/designTokens";
import { solidPaint } from "@shared/colorUtils";
import { createCardComponentSet } from "../components/cardComponent";
import { createFilterButtonSet } from "../components/buttonComponents";

const SECTION_WIDTH = 1440;
const CARD_WIDTH = 296;
const CARD_GAP = 24;
const COLUMNS = 3;
const CONTENT_WIDTH = CARD_WIDTH * COLUMNS + CARD_GAP * (COLUMNS - 1); // 936
const SIDE_PADDING = Math.round((SECTION_WIDTH - CONTENT_WIDTH) / 2);

type ProductCategory = "Product" | "Tool" | "Content";

interface ProductData {
  name: string;
  descriptionEn: string;
  descriptionJp: string;
  category: ProductCategory;
  url: string;
}

/* ── Inline product data (from products.ts) ── */
const products: ProductData[] = [
  { name: "AI PM Service", descriptionEn: "AI-powered task management for solo craft", descriptionJp: "AI\u30BF\u30B9\u30AF\u7BA1\u7406\u3067\u500B\u4EBA\u958B\u767A\u3092\u52A0\u901F", category: "Product", url: "https://ai-pm-service.craftgarden.studio" },
  { name: "History Quiz", descriptionEn: "Learn history through interactive quizzes", descriptionJp: "\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u306A\u6B74\u53F2\u30AF\u30A4\u30BA", category: "Product", url: "https://history-quiz-app.craftgarden.studio" },
  { name: "Product Hub", descriptionEn: "Project management dashboard for the studio", descriptionJp: "\u30B9\u30BF\u30B8\u30AA\u5168\u4F53\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u7BA1\u7406", category: "Tool", url: "https://product-hub.craftgarden.studio" },
  { name: "Essential Navigator", descriptionEn: "Essential discovery and navigation tool", descriptionJp: "Essential Navigator", category: "Tool", url: "https://essential-navigator.craftgarden.studio" },
  { name: "Content Studio", descriptionEn: "Content creation and management platform", descriptionJp: "\u30B3\u30F3\u30C6\u30F3\u30C4\u7BA1\u7406\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0", category: "Tool", url: "https://content-studio.craftgarden.studio" },
  { name: "Feedback Hub", descriptionEn: "Collect and analyze user feedback", descriptionJp: "\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u53CE\u96C6\u30FB\u5206\u6790", category: "Tool", url: "https://feedback-hub.craftgarden.studio" },
  { name: "Competitor UI Viewer", descriptionEn: "Competitor UI analysis and comparison", descriptionJp: "\u7AF6\u5408UI\u306E\u5206\u6790\u30FB\u6BD4\u8F03\u30D3\u30E5\u30FC\u30A2", category: "Tool", url: "https://competitor-ui-viewer.craftgarden.studio" },
  { name: "Agent Skill Search", descriptionEn: "Search and discover agent skills", descriptionJp: "\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u30B9\u30AD\u30EB\u691C\u7D22", category: "Tool", url: "https://agent-skill-search.craftgarden.studio" },
  { name: "AI Solo Craft", descriptionEn: "Blog for solo craft leveraging AI", descriptionJp: "AI\u6D3B\u7528\u30BD\u30ED\u958B\u767A\u8005\u5411\u3051\u30D6\u30ED\u30B0", category: "Content", url: "https://ai-solo-craft.craftgarden.studio" },
  { name: "Conf Hub", descriptionEn: "Curated tech conference listings", descriptionJp: "\u6280\u8853\u30AB\u30F3\u30D5\u30A1\u30EC\u30F3\u30B9\u4E00\u89A7", category: "Content", url: "https://conf-hub.craftgarden.studio" },
  { name: "Orcha", descriptionEn: "Development process comparison platform", descriptionJp: "\u958B\u767A\u30D7\u30ED\u30BB\u30B9\u6BD4\u8F03", category: "Content", url: "https://orcha.craftgarden.studio" },
  { name: "API Catalog JP", descriptionEn: "Japanese API reference catalog", descriptionJp: "\u65E5\u672C\u8A9EAPI\u30AB\u30BF\u30ED\u30B0", category: "Content", url: "https://api-catalog-jp.craftgarden.studio" },
];

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

/* ── Set text on a card instance's nested text nodes ── */

function findTextNode(node: SceneNode, name: string): TextNode | null {
  if (node.type === "TEXT" && node.name === name) return node;
  if ("children" in node) {
    for (const child of node.children) {
      const found = findTextNode(child, name);
      if (found) return found;
    }
  }
  return null;
}

/* ── Main generator ── */

export async function generateProducts(): Promise<FrameNode> {
  const nunitoEB = await loadNunito("ExtraBold");
  const nunitoBold = await loadNunito("Bold");
  const dmSansRegular = await loadDMSans("Regular");
  const dmSansMedium = await loadDMSans("Medium");

  // Create the card component set first
  const cardSet = await createCardComponentSet();
  // Move component set to storage area
  cardSet.x = 1600;
  cardSet.y = 400;

  // Get the variant components
  const productVariant = cardSet.children.find(
    (c) => c.type === "COMPONENT" && c.name.includes("Product")
  ) as ComponentNode | undefined;
  const toolVariant = cardSet.children.find(
    (c) => c.type === "COMPONENT" && c.name.includes("Tool")
  ) as ComponentNode | undefined;
  const contentVariant = cardSet.children.find(
    (c) => c.type === "COMPONENT" && c.name.includes("Content")
  ) as ComponentNode | undefined;

  // Section frame
  const section = figma.createFrame();
  section.name = "Section / Products";
  section.resize(SECTION_WIDTH, 100); // height auto
  section.layoutMode = "VERTICAL";
  section.primaryAxisSizingMode = "AUTO";
  section.counterAxisSizingMode = "FIXED";
  section.primaryAxisAlignItems = "CENTER";
  section.counterAxisAlignItems = "CENTER";
  section.paddingTop = 96;
  section.paddingBottom = 96;
  section.paddingLeft = SIDE_PADDING;
  section.paddingRight = SIDE_PADDING;
  section.itemSpacing = 48;
  section.fills = [solidPaint(colors["bg-cream"])];

  // Header area
  const header = figma.createFrame();
  header.name = "Header";
  header.layoutMode = "VERTICAL";
  header.primaryAxisSizingMode = "AUTO";
  header.counterAxisSizingMode = "AUTO";
  header.primaryAxisAlignItems = "CENTER";
  header.counterAxisAlignItems = "CENTER";
  header.itemSpacing = 12;
  header.fills = [];

  const heading = figma.createText();
  heading.fontName = nunitoEB;
  heading.fontSize = typography.h2.size;
  heading.characters = "What\u2019s growing";
  heading.fills = [solidPaint(colors["text-deep"])];
  heading.lineHeight = { value: typography.h2.size * typography.h2.lineHeight, unit: "PIXELS" };
  heading.letterSpacing = { value: typography.h2.letterSpacing * 100, unit: "PERCENT" };
  heading.textAlignHorizontal = "CENTER";
  header.appendChild(heading);

  const subtitle = figma.createText();
  subtitle.fontName = dmSansRegular;
  subtitle.fontSize = typography.body.size;
  subtitle.characters = "Projects, tools, and content cultivated in this garden";
  subtitle.fills = [solidPaint(colors["text-muted"])];
  subtitle.lineHeight = { value: typography.body.size * typography.body.lineHeight, unit: "PIXELS" };
  subtitle.textAlignHorizontal = "CENTER";
  header.appendChild(subtitle);

  section.appendChild(header);

  // Filter buttons row
  const filtersRow = figma.createFrame();
  filtersRow.name = "Filter Buttons";
  filtersRow.layoutMode = "HORIZONTAL";
  filtersRow.primaryAxisSizingMode = "AUTO";
  filtersRow.counterAxisSizingMode = "AUTO";
  filtersRow.counterAxisAlignItems = "CENTER";
  filtersRow.itemSpacing = 8;
  filtersRow.fills = [];

  const filterLabels = ["All", "Product", "Tool", "Content"];
  for (let i = 0; i < filterLabels.length; i++) {
    const label = filterLabels[i];
    const isActive = label === "All";

    const btn = figma.createFrame();
    btn.name = `Filter / ${label}`;
    btn.layoutMode = "HORIZONTAL";
    btn.primaryAxisSizingMode = "AUTO";
    btn.counterAxisSizingMode = "AUTO";
    btn.paddingTop = 8;
    btn.paddingBottom = 8;
    btn.paddingLeft = 18;
    btn.paddingRight = 18;
    btn.cornerRadius = 999;

    if (isActive) {
      btn.fills = [solidPaint(colors["accent-leaf"])];
    } else {
      btn.fills = [solidPaint(colors["accent-leaf"], 0.08)];
    }

    const btnText = figma.createText();
    btnText.fontName = dmSansMedium;
    btnText.fontSize = 14;
    btnText.characters = label;
    btnText.fills = [solidPaint(isActive ? "#FFFFFF" : colors["text-muted"])];
    btnText.lineHeight = { value: 20, unit: "PIXELS" };
    btn.appendChild(btnText);

    filtersRow.appendChild(btn);
  }

  section.appendChild(filtersRow);

  // Card grid
  const grid = figma.createFrame();
  grid.name = "Card Grid";
  grid.layoutMode = "VERTICAL";
  grid.primaryAxisSizingMode = "AUTO";
  grid.counterAxisSizingMode = "AUTO";
  grid.itemSpacing = CARD_GAP;
  grid.fills = [];

  // Create rows of 3
  const rows = Math.ceil(products.length / COLUMNS);
  for (let row = 0; row < rows; row++) {
    const rowFrame = figma.createFrame();
    rowFrame.name = `Row ${row + 1}`;
    rowFrame.layoutMode = "HORIZONTAL";
    rowFrame.primaryAxisSizingMode = "AUTO";
    rowFrame.counterAxisSizingMode = "AUTO";
    rowFrame.itemSpacing = CARD_GAP;
    rowFrame.fills = [];

    for (let col = 0; col < COLUMNS; col++) {
      const idx = row * COLUMNS + col;
      if (idx >= products.length) break;

      const product = products[idx];
      let variant: ComponentNode | undefined;
      switch (product.category) {
        case "Product": variant = productVariant; break;
        case "Tool": variant = toolVariant; break;
        case "Content": variant = contentVariant; break;
      }

      if (!variant) continue;

      const instance = variant.createInstance();
      instance.name = product.name;

      // Update text content inside the instance
      const titleNode = findTextNode(instance, "Title");
      if (titleNode) {
        titleNode.characters = product.name;
      }

      const descEnNode = findTextNode(instance, "Description EN");
      if (descEnNode) {
        descEnNode.characters = product.descriptionEn;
      }

      const descJpNode = findTextNode(instance, "Description JP");
      if (descJpNode) {
        descJpNode.characters = product.descriptionJp;
      }

      rowFrame.appendChild(instance);
    }

    grid.appendChild(rowFrame);
  }

  section.appendChild(grid);

  return section;
}
