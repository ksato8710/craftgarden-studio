"use strict";
(() => {
  // ../shared/designTokens.ts
  var colors = {
    // Background
    "bg-cream": "#FAFAF5",
    "bg-warm": "#F5F2EC",
    "bg-card": "#F0EDE6",
    // Text
    "text-deep": "#2D3B2E",
    "text-muted": "#5C7260",
    "text-light": "#8A9E8C",
    // Botanical accents
    "accent-leaf": "#6B8F71",
    "accent-sage": "#9BB09E",
    "accent-moss": "#4A7051",
    "accent-bark": "#8B7355",
    "accent-bloom": "#C4926B",
    // Plant-specific
    anzu: "#F08C28",
    "anzu-hot": "#FF9A1F",
    tsubaki: "#E05577",
    "tsubaki-hot": "#F0487A",
    kaede: "#D63E2F",
    "kaede-hot": "#E8442E",
    bark: "#7A5E3A",
    "bark-dark": "#5C4428",
    "leaf-dark": "#3D6B45",
    // Category
    "cat-product": "#6B8F71",
    "cat-tool": "#7E9AAB",
    "cat-content": "#B8956A"
  };
  var spacing = {
    "0": 0,
    "1": 4,
    "2": 8,
    "3": 12,
    "4": 16,
    "5": 20,
    "6": 24,
    "8": 32,
    "10": 40,
    "12": 48,
    "14": 56,
    "16": 64,
    "20": 80,
    "24": 96
  };
  var typography = {
    display: { family: "Nunito", size: 64, weight: 800, lineHeight: 1.15, letterSpacing: -0.025 },
    h2: { family: "Nunito", size: 40, weight: 800, lineHeight: 1.2, letterSpacing: -0.02 },
    h3: { family: "Nunito", size: 18, weight: 700, lineHeight: 1.3, letterSpacing: 0 },
    body: { family: "DM Sans", size: 16, weight: 400, lineHeight: 1.7, letterSpacing: 0 },
    small: { family: "DM Sans", size: 14, weight: 400, lineHeight: 1.6, letterSpacing: 0 },
    badge: { family: "Nunito", size: 11, weight: 700, lineHeight: 1.2, letterSpacing: 0.08 }
  };
  var radii = {
    card: 16,
    btn: 999
  };
  var shadows = {
    cardHover: {
      type: "DROP_SHADOW",
      color: { r: 45 / 255, g: 59 / 255, b: 46 / 255, a: 0.08 },
      offset: { x: 0, y: 12 },
      radius: 32,
      spread: 0,
      visible: true
    },
    ctaButton: {
      type: "DROP_SHADOW",
      color: { r: 107 / 255, g: 143 / 255, b: 113 / 255, a: 0.25 },
      offset: { x: 0, y: 4 },
      radius: 16,
      spread: 0,
      visible: true
    }
  };

  // ../shared/colorUtils.ts
  function hexToFigmaRgb(hex) {
    const h = hex.replace("#", "");
    const full = h.length === 3 ? h[0] + h[0] + h[1] + h[1] + h[2] + h[2] : h;
    return {
      r: parseInt(full.slice(0, 2), 16) / 255,
      g: parseInt(full.slice(2, 4), 16) / 255,
      b: parseInt(full.slice(4, 6), 16) / 255
    };
  }
  function solidPaint(hex, opacity = 1) {
    const { r, g, b } = hexToFigmaRgb(hex);
    return { type: "SOLID", color: { r, g, b }, opacity };
  }
  function figmaRGBA(hex, alpha = 1) {
    const { r, g, b } = hexToFigmaRgb(hex);
    return { r, g, b, a: alpha };
  }

  // src/tokens/index.ts
  function weightToStyle(weight) {
    switch (weight) {
      case 400:
        return "Regular";
      case 600:
        return "SemiBold";
      case 700:
        return "Bold";
      case 800:
        return "ExtraBold";
      default:
        return "Regular";
    }
  }
  async function loadFont(family, weight) {
    const style = weightToStyle(weight);
    try {
      await figma.loadFontAsync({ family, style });
      return { family, style };
    } catch {
      const fallbackStyle = weight >= 700 ? "Bold" : "Regular";
      await figma.loadFontAsync({ family: "Inter", style: fallbackStyle });
      return { family: "Inter", style: fallbackStyle };
    }
  }
  async function createColorVariables() {
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
  async function createSpacingVariables() {
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
  async function createTextStyles() {
    const entries = [
      ["Display", typography.display],
      ["H2", typography.h2],
      ["H3", typography.h3],
      ["Body", typography.body],
      ["Small", typography.small],
      ["Badge", typography.badge]
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
  async function createTokensAndStyles() {
    await createColorVariables();
    await createSpacingVariables();
    await createTextStyles();
  }

  // ../shared/svgPaths.ts
  var KAEDE_LEAF_PATH = "M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z";
  function kaedeLeafSvg(fill, opacity = 1) {
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="${KAEDE_LEAF_PATH}" fill="${fill}" opacity="${opacity}"/></svg>`;
  }
  function tsubakiFlowerSvg(fill, opacity = 1) {
    const petals = [0, 60, 120, 180, 240, 300].map(
      (r) => `<ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(${r} 50 50)" fill="${fill}" opacity="${opacity}"/>`
    ).join("");
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${petals}<circle cx="50" cy="50" r="6" fill="${fill}" opacity="${opacity * 0.4}"/></svg>`;
  }
  function anzuBlossomSvg(fill, opacity = 1) {
    const petals = [0, 72, 144, 216, 288].map(
      (r) => `<ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(${r} 50 50)" fill="${fill}" opacity="${opacity}"/>`
    ).join("");
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${petals}<circle cx="50" cy="50" r="5" fill="${fill}" opacity="${opacity * 0.35}"/></svg>`;
  }
  var STAR_PATH = "M12 22c1-4 4-7 8-8-4-1-7-4-8-8-1 4-4 7-8 8 4 1 7 4 8 8z";
  function starSvg(stroke, strokeWidth = 2) {
    return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="${STAR_PATH}"/></svg>`;
  }
  function sproutSvg(stroke, strokeWidth = 2) {
    return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M12 20v-8"/><path d="M12 12C12 8 8 4.5 3 4c0 6 3 9 9 8z"/><path d="M12 12c0-4 4-7.5 9-8 0 6-3 9-9 8z"/></svg>`;
  }
  function tulipSvg(stroke, strokeWidth = 2) {
    return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-5 7-11 8-11s8 6 8 11a7 7 0 0 1-7 7z"/><path d="M12 20V10"/></svg>`;
  }
  function sunSvg(stroke, strokeWidth = 2) {
    return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>`;
  }
  function nurtureSvg(stroke, strokeWidth = 1.5) {
    return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a9 9 0 0 0 9-9c0-3-1.5-5.5-4-7.5C14.5 3.5 12 2 12 2s-2.5 1.5-5 3.5C4.5 7.5 3 10 3 13a9 9 0 0 0 9 9z"/><path d="M12 22V12"/></svg>`;
  }
  function shipSvg(stroke, strokeWidth = 1.5) {
    return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>`;
  }
  function greenLeafSvg(fill, opacity = 1) {
    return `<svg viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C15 0 0 15 0 25C0 33 7 40 15 40C23 40 30 33 30 25C30 15 15 0 15 0Z" fill="${fill}" opacity="${opacity}"/></svg>`;
  }
  function waveTopSvg(fill) {
    return `<svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0,40 C240,60 480,10 720,40 C960,70 1200,10 1440,40 L1440,60 L0,60 Z" fill="${fill}"/></svg>`;
  }
  function vineDividerSvg(colors2) {
    return `<svg viewBox="0 0 600 40" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round"><defs><linearGradient id="vine-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="${colors2.kaede}"/><stop offset="35%" stop-color="${colors2.tsubaki}"/><stop offset="70%" stop-color="${colors2.anzu}"/><stop offset="100%" stop-color="${colors2.leaf}"/></linearGradient></defs><path d="M0 20 C100 15 150 25 200 20 C250 15 300 25 350 20 C400 15 450 25 500 20 C550 15 580 25 600 20" stroke="url(#vine-grad)" stroke-width="1.8"/><circle cx="120" cy="17" r="5" fill="${colors2.kaede}" opacity="0.5"/><circle cx="250" cy="23" r="6" fill="${colors2.tsubaki}" opacity="0.45"/><circle cx="380" cy="17" r="5" fill="${colors2.anzu}" opacity="0.5"/><circle cx="500" cy="21" r="4" fill="${colors2.leaf}" opacity="0.45"/></svg>`;
  }

  // src/components/botanicalMotifs.ts
  function createKaedeComponent() {
    const svg = figma.createNodeFromSvg(kaedeLeafSvg(colors.kaede, 0.9));
    const component = figma.createComponent();
    component.name = "Botanical / Kaede";
    component.resize(svg.width, svg.height);
    while (svg.children.length > 0) {
      component.appendChild(svg.children[0]);
    }
    svg.remove();
    return component;
  }
  function createTsubakiComponent() {
    const svg = figma.createNodeFromSvg(tsubakiFlowerSvg(colors.tsubaki, 0.9));
    const component = figma.createComponent();
    component.name = "Botanical / Tsubaki";
    component.resize(svg.width, svg.height);
    while (svg.children.length > 0) {
      component.appendChild(svg.children[0]);
    }
    svg.remove();
    return component;
  }
  function createAnzuComponent() {
    const svg = figma.createNodeFromSvg(anzuBlossomSvg(colors.anzu, 0.9));
    const component = figma.createComponent();
    component.name = "Botanical / Anzu";
    component.resize(svg.width, svg.height);
    while (svg.children.length > 0) {
      component.appendChild(svg.children[0]);
    }
    svg.remove();
    return component;
  }
  function createAllBotanicalComponents() {
    return {
      kaede: createKaedeComponent(),
      tsubaki: createTsubakiComponent(),
      anzu: createAnzuComponent()
    };
  }

  // src/components/shioriRibbon.ts
  var CATEGORY_COLORS = {
    Product: colors["cat-product"],
    Tool: colors["cat-tool"],
    Content: colors["cat-content"]
  };
  var RIBBON_WIDTH = 8;
  var RIBBON_HEIGHT = 58;
  var NOTCH_DEPTH = 5;
  function createShioriRibbon(category) {
    const color = CATEGORY_COLORS[category];
    const frame = figma.createFrame();
    frame.name = `Shiori / ${category}`;
    frame.resize(RIBBON_WIDTH, RIBBON_HEIGHT);
    frame.fills = [];
    frame.clipsContent = false;
    const bodyHeight = RIBBON_HEIGHT - NOTCH_DEPTH;
    const body = figma.createRectangle();
    body.name = "Ribbon Body";
    body.resize(RIBBON_WIDTH, bodyHeight);
    body.x = 0;
    body.y = 0;
    body.fills = [solidPaint(color)];
    body.opacity = 0.82;
    frame.appendChild(body);
    const notch = figma.createVector();
    notch.name = "Ribbon Notch";
    const hw = RIBBON_WIDTH / 2;
    notch.vectorPaths = [
      {
        windingRule: "EVENODD",
        data: `M 0 0 L ${hw} ${NOTCH_DEPTH} L ${RIBBON_WIDTH} 0 Z`
      }
    ];
    notch.resize(RIBBON_WIDTH, NOTCH_DEPTH);
    notch.x = 0;
    notch.y = bodyHeight;
    notch.fills = [solidPaint(color)];
    notch.opacity = 0.82;
    frame.appendChild(notch);
    return frame;
  }

  // src/components/categoryIcons.ts
  function createCategoryIcon(category, stroke = "#FFFFFF") {
    let svgString;
    switch (category) {
      case "Product":
        svgString = sproutSvg(stroke, 2);
        break;
      case "Tool":
        svgString = tulipSvg(stroke, 2);
        break;
      case "Content":
        svgString = sunSvg(stroke, 2);
        break;
    }
    const node = figma.createNodeFromSvg(svgString);
    node.name = `Icon / ${category}`;
    node.resize(20, 20);
    return node;
  }

  // src/components/cardComponent.ts
  var CARD_WIDTH = 296;
  var CATEGORY_COLORS2 = {
    Product: colors["cat-product"],
    Tool: colors["cat-tool"],
    Content: colors["cat-content"]
  };
  var CATEGORY_LABELS = {
    Product: "Product",
    Tool: "Tool",
    Content: "Content"
  };
  async function loadNunito(style) {
    try {
      await figma.loadFontAsync({ family: "Nunito", style });
      return { family: "Nunito", style };
    } catch {
      const fallback = style.includes("Bold") ? "Bold" : "Regular";
      await figma.loadFontAsync({ family: "Inter", style: fallback });
      return { family: "Inter", style: fallback };
    }
  }
  async function loadDMSans(style) {
    try {
      await figma.loadFontAsync({ family: "DM Sans", style });
      return { family: "DM Sans", style };
    } catch {
      await figma.loadFontAsync({ family: "Inter", style: "Regular" });
      return { family: "Inter", style: "Regular" };
    }
  }
  function createBotanicalStrip(category) {
    const strip = figma.createFrame();
    strip.name = "Botanical Strip";
    strip.resize(CARD_WIDTH, 48);
    strip.clipsContent = true;
    const catColor = hexToFigmaRgb(CATEGORY_COLORS2[category]);
    strip.fills = [
      {
        type: "GRADIENT_LINEAR",
        gradientStops: [
          { position: 0, color: { ...catColor, a: 0.12 } },
          { position: 1, color: { ...catColor, a: 0.04 } }
        ],
        gradientTransform: [
          [1, 0, 0],
          [0, 1, 0]
        ]
      }
    ];
    let svgString;
    switch (category) {
      case "Product":
        svgString = kaedeLeafSvg(CATEGORY_COLORS2[category], 0.15);
        break;
      case "Tool":
        svgString = tsubakiFlowerSvg(CATEGORY_COLORS2[category], 0.15);
        break;
      case "Content":
        svgString = anzuBlossomSvg(CATEGORY_COLORS2[category], 0.15);
        break;
    }
    const deco1 = figma.createNodeFromSvg(svgString);
    deco1.resize(32, 32);
    deco1.x = 12;
    deco1.y = 8;
    strip.appendChild(deco1);
    const deco2 = figma.createNodeFromSvg(svgString);
    deco2.resize(24, 24);
    deco2.x = CARD_WIDTH - 48;
    deco2.y = 12;
    strip.appendChild(deco2);
    return strip;
  }
  async function createCardVariant(category) {
    const nunitoBold = await loadNunito("Bold");
    const nunitoExtraBold = await loadNunito("ExtraBold");
    const dmSansRegular = await loadDMSans("Regular");
    const catColor = CATEGORY_COLORS2[category];
    const card = figma.createComponent();
    card.name = `Category=${category}`;
    card.resize(CARD_WIDTH, 1);
    card.layoutMode = "VERTICAL";
    card.primaryAxisSizingMode = "AUTO";
    card.counterAxisSizingMode = "FIXED";
    card.cornerRadius = radii.card;
    card.fills = [solidPaint(colors["bg-card"])];
    card.strokes = [solidPaint(colors["accent-leaf"], 0.08)];
    card.strokeWeight = 1;
    card.clipsContent = false;
    const strip = createBotanicalStrip(category);
    strip.layoutSizingHorizontal = "FILL";
    card.appendChild(strip);
    const content = figma.createFrame();
    content.name = "Content";
    content.layoutMode = "VERTICAL";
    content.primaryAxisSizingMode = "AUTO";
    content.counterAxisSizingMode = "FIXED";
    content.layoutSizingHorizontal = "FILL";
    content.paddingTop = 24;
    content.paddingBottom = 24;
    content.paddingLeft = 24;
    content.paddingRight = 24;
    content.itemSpacing = 12;
    content.fills = [];
    const iconBadge = figma.createFrame();
    iconBadge.name = "Icon Badge";
    iconBadge.resize(44, 44);
    iconBadge.cornerRadius = 12;
    iconBadge.fills = [solidPaint(catColor)];
    iconBadge.layoutMode = "HORIZONTAL";
    iconBadge.primaryAxisAlignItems = "CENTER";
    iconBadge.counterAxisAlignItems = "CENTER";
    iconBadge.primaryAxisSizingMode = "FIXED";
    iconBadge.counterAxisSizingMode = "FIXED";
    const icon = createCategoryIcon(category, "#FFFFFF");
    iconBadge.appendChild(icon);
    content.appendChild(iconBadge);
    const badge = figma.createText();
    badge.name = "Badge";
    badge.fontName = nunitoBold;
    badge.fontSize = typography.badge.size;
    badge.characters = CATEGORY_LABELS[category];
    badge.textCase = "UPPER";
    badge.letterSpacing = { value: 8, unit: "PERCENT" };
    badge.fills = [solidPaint(catColor)];
    badge.lineHeight = { value: typography.badge.size * typography.badge.lineHeight, unit: "PIXELS" };
    content.appendChild(badge);
    const title = figma.createText();
    title.name = "Title";
    title.fontName = nunitoBold;
    title.fontSize = typography.h3.size;
    title.characters = "Product Name";
    title.fills = [solidPaint(colors["text-deep"])];
    title.lineHeight = { value: typography.h3.size * typography.h3.lineHeight, unit: "PIXELS" };
    content.appendChild(title);
    const descEn = figma.createText();
    descEn.name = "Description EN";
    descEn.fontName = dmSansRegular;
    descEn.fontSize = typography.small.size;
    descEn.characters = "Product description in English";
    descEn.fills = [solidPaint(colors["text-muted"])];
    descEn.lineHeight = { value: typography.small.size * typography.small.lineHeight, unit: "PIXELS" };
    descEn.layoutSizingHorizontal = "FILL";
    content.appendChild(descEn);
    const descJp = figma.createText();
    descJp.name = "Description JP";
    descJp.fontName = dmSansRegular;
    descJp.fontSize = 12;
    descJp.characters = "Japanese description";
    descJp.fills = [solidPaint(colors["text-light"])];
    descJp.lineHeight = { value: 18, unit: "PIXELS" };
    descJp.layoutSizingHorizontal = "FILL";
    content.appendChild(descJp);
    const spacer = figma.createFrame();
    spacer.name = "Spacer";
    spacer.resize(10, 8);
    spacer.fills = [];
    spacer.layoutSizingHorizontal = "FILL";
    content.appendChild(spacer);
    const visitLink = figma.createText();
    visitLink.name = "Visit Link";
    visitLink.fontName = nunitoBold;
    visitLink.fontSize = 13;
    visitLink.characters = "Visit \u2192";
    visitLink.fills = [solidPaint(colors["accent-leaf"])];
    visitLink.lineHeight = { value: 20, unit: "PIXELS" };
    content.appendChild(visitLink);
    card.appendChild(content);
    const ribbon = createShioriRibbon(category);
    ribbon.x = CARD_WIDTH - 22 - 8;
    ribbon.y = -12;
    card.appendChild(ribbon);
    return card;
  }
  async function createCardComponentSet() {
    const productCard = await createCardVariant("Product");
    const toolCard = await createCardVariant("Tool");
    const contentCard = await createCardVariant("Content");
    const set = figma.combineAsVariants(
      [productCard, toolCard, contentCard],
      figma.currentPage
    );
    set.name = "Card / Product";
    return set;
  }

  // src/components/buttonComponents.ts
  async function loadNunito2(style) {
    try {
      await figma.loadFontAsync({ family: "Nunito", style });
      return { family: "Nunito", style };
    } catch {
      const fallback = style.includes("Bold") ? "Bold" : "Regular";
      await figma.loadFontAsync({ family: "Inter", style: fallback });
      return { family: "Inter", style: fallback };
    }
  }
  async function loadDMSans2(style) {
    try {
      await figma.loadFontAsync({ family: "DM Sans", style });
      return { family: "DM Sans", style };
    } catch {
      await figma.loadFontAsync({ family: "Inter", style: "Regular" });
      return { family: "Inter", style: "Regular" };
    }
  }
  async function createCtaButton(text) {
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
    component.effects = [{ ...shadows.ctaButton, blendMode: "NORMAL" }];
    const font = await loadNunito2("Bold");
    const label = figma.createText();
    label.fontName = font;
    label.fontSize = 16;
    label.characters = text;
    label.fills = [solidPaint("#FFFFFF")];
    label.lineHeight = { value: 24, unit: "PIXELS" };
    component.appendChild(label);
    return component;
  }
  async function createFilterButtonSet(text) {
    const font = await loadDMSans2("Medium");
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

  // src/components/navComponent.ts
  var NAV_WIDTH = 1440;
  var NAV_HEIGHT = 64;
  async function loadNunito3(style) {
    try {
      await figma.loadFontAsync({ family: "Nunito", style });
      return { family: "Nunito", style };
    } catch {
      const fallback = style.includes("Bold") ? "Bold" : "Regular";
      await figma.loadFontAsync({ family: "Inter", style: fallback });
      return { family: "Inter", style: fallback };
    }
  }
  async function createNavComponent() {
    const nunitoEB = await loadNunito3("ExtraBold");
    const nunitoSB = await loadNunito3("SemiBold");
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
      { type: "BACKGROUND_BLUR", blurType: "NORMAL", radius: 12, visible: true }
    ];
    const logoGroup = figma.createFrame();
    logoGroup.name = "Logo";
    logoGroup.layoutMode = "HORIZONTAL";
    logoGroup.primaryAxisSizingMode = "AUTO";
    logoGroup.counterAxisSizingMode = "AUTO";
    logoGroup.counterAxisAlignItems = "CENTER";
    logoGroup.itemSpacing = 8;
    logoGroup.fills = [];
    const starNode = figma.createNodeFromSvg(starSvg(colors["accent-leaf"], 2));
    starNode.name = "Star Icon";
    starNode.resize(20, 20);
    logoGroup.appendChild(starNode);
    const brandText = figma.createText();
    brandText.fontName = nunitoEB;
    brandText.fontSize = 18.4;
    brandText.characters = "craftgarden.studio";
    brandText.fills = [solidPaint(colors["text-deep"])];
    brandText.lineHeight = { value: 24, unit: "PIXELS" };
    logoGroup.appendChild(brandText);
    component.appendChild(logoGroup);
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

  // src/sections/navigation.ts
  async function generateNavigation() {
    const navComponent = await createNavComponent();
    navComponent.x = 0;
    navComponent.y = 0;
    const wrapper = figma.createFrame();
    wrapper.name = "Section / Navigation";
    wrapper.resize(1440, 64);
    wrapper.fills = [];
    wrapper.clipsContent = false;
    navComponent.x = 0;
    navComponent.y = 0;
    const instance = navComponent.createInstance();
    instance.x = 0;
    instance.y = 0;
    wrapper.appendChild(instance);
    navComponent.x = 1600;
    navComponent.y = 0;
    return wrapper;
  }

  // src/sections/hero.ts
  var HERO_WIDTH = 1440;
  var HERO_HEIGHT = 900;
  async function loadNunito4(style) {
    try {
      await figma.loadFontAsync({ family: "Nunito", style });
      return { family: "Nunito", style };
    } catch {
      const fallback = style.includes("Bold") ? "Bold" : "Regular";
      await figma.loadFontAsync({ family: "Inter", style: fallback });
      return { family: "Inter", style: fallback };
    }
  }
  async function loadDMSans3(style) {
    try {
      await figma.loadFontAsync({ family: "DM Sans", style });
      return { family: "DM Sans", style };
    } catch {
      await figma.loadFontAsync({ family: "Inter", style: "Regular" });
      return { family: "Inter", style: "Regular" };
    }
  }
  function createBotanicalBackground(parent) {
    const elements = [
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
      { svg: anzuBlossomSvg(colors.anzu, 0.04), x: 500, y: 800, size: 30, rotation: 15 }
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
  function createTsubakiTree(parent) {
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
      { x: 60, y: 450, size: 70, opacity: 0.1 },
      { x: 130, y: 380, size: 50, opacity: 0.08 }
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
  function createKaedeTree(parent) {
    const trunk = figma.createRectangle();
    trunk.name = "Kaede Trunk";
    trunk.resize(6, 180);
    trunk.x = 1300;
    trunk.y = 520;
    trunk.cornerRadius = 3;
    trunk.fills = [solidPaint(colors.bark, 0.12)];
    parent.appendChild(trunk);
    const positions = [
      { x: 1260, y: 380, size: 70, opacity: 0.1 },
      { x: 1290, y: 440, size: 55, opacity: 0.08 },
      { x: 1320, y: 400, size: 65, opacity: 0.09 },
      { x: 1270, y: 460, size: 45, opacity: 0.07 }
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
  function createAnzuCanopy(parent) {
    const positions = [
      { x: 500, y: 30, size: 40, opacity: 0.06 },
      { x: 600, y: 15, size: 50, opacity: 0.05 },
      { x: 700, y: 25, size: 35, opacity: 0.07 },
      { x: 800, y: 10, size: 45, opacity: 0.05 },
      { x: 900, y: 35, size: 30, opacity: 0.06 }
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
  async function generateHero() {
    const nunitoEB = await loadNunito4("ExtraBold");
    const nunitoBold = await loadNunito4("Bold");
    const dmSansRegular = await loadDMSans3("Regular");
    const hero = figma.createFrame();
    hero.name = "Section / Hero";
    hero.resize(HERO_WIDTH, HERO_HEIGHT);
    hero.fills = [solidPaint(colors["bg-cream"])];
    hero.clipsContent = true;
    createBotanicalBackground(hero);
    createTsubakiTree(hero);
    createKaedeTree(hero);
    createAnzuCanopy(hero);
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
          { position: 1, color: { ...creamRgb, a: 0 } }
        ],
        gradientTransform: [
          [1, 0, 0.5],
          [0, 1, 0.4]
        ]
      }
    ];
    hero.appendChild(overlay);
    const content = figma.createFrame();
    content.name = "Hero Content";
    content.layoutMode = "VERTICAL";
    content.primaryAxisSizingMode = "AUTO";
    content.counterAxisSizingMode = "AUTO";
    content.primaryAxisAlignItems = "CENTER";
    content.counterAxisAlignItems = "CENTER";
    content.itemSpacing = 24;
    content.fills = [];
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
    const jpSub = figma.createText();
    jpSub.name = "JP Subtitle";
    jpSub.fontName = dmSansRegular;
    jpSub.fontSize = 16;
    jpSub.characters = "\u30A2\u30A4\u30C7\u30A2\u3092\u690D\u3048\u3066\u3001\u80B2\u3066\u3066\u3001\u697D\u3057\u3080\u3002";
    jpSub.fills = [solidPaint(colors["text-light"])];
    jpSub.lineHeight = { value: 24, unit: "PIXELS" };
    jpSub.textAlignHorizontal = "CENTER";
    content.appendChild(jpSub);
    const body = figma.createText();
    body.name = "Body";
    body.fontName = dmSansRegular;
    body.fontSize = typography.body.size;
    body.characters = "A solo developer studio cultivating thoughtful software,\none project at a time.";
    body.fills = [solidPaint(colors["text-muted"])];
    body.lineHeight = { value: typography.body.size * typography.body.lineHeight, unit: "PIXELS" };
    body.textAlignHorizontal = "CENTER";
    content.appendChild(body);
    const cta = await createCtaButton("Explore the garden \u2192");
    const ctaInstance = cta.createInstance();
    content.appendChild(ctaInstance);
    cta.x = 1600;
    cta.y = 200;
    hero.appendChild(content);
    const contentWidth = content.width;
    const contentHeight = content.height;
    content.x = Math.round((HERO_WIDTH - contentWidth) / 2);
    content.y = Math.round((HERO_HEIGHT - contentHeight) / 2) - 20;
    return hero;
  }

  // src/sections/products.ts
  var SECTION_WIDTH = 1440;
  var CARD_WIDTH2 = 296;
  var CARD_GAP = 24;
  var COLUMNS = 3;
  var CONTENT_WIDTH = CARD_WIDTH2 * COLUMNS + CARD_GAP * (COLUMNS - 1);
  var SIDE_PADDING = Math.round((SECTION_WIDTH - CONTENT_WIDTH) / 2);
  var products = [
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
    { name: "API Catalog JP", descriptionEn: "Japanese API reference catalog", descriptionJp: "\u65E5\u672C\u8A9EAPI\u30AB\u30BF\u30ED\u30B0", category: "Content", url: "https://api-catalog-jp.craftgarden.studio" }
  ];
  async function loadNunito5(style) {
    try {
      await figma.loadFontAsync({ family: "Nunito", style });
      return { family: "Nunito", style };
    } catch {
      const fallback = style.includes("Bold") ? "Bold" : "Regular";
      await figma.loadFontAsync({ family: "Inter", style: fallback });
      return { family: "Inter", style: fallback };
    }
  }
  async function loadDMSans4(style) {
    try {
      await figma.loadFontAsync({ family: "DM Sans", style });
      return { family: "DM Sans", style };
    } catch {
      await figma.loadFontAsync({ family: "Inter", style: "Regular" });
      return { family: "Inter", style: "Regular" };
    }
  }
  function findTextNode(node, name) {
    if (node.type === "TEXT" && node.name === name) return node;
    if ("children" in node) {
      for (const child of node.children) {
        const found = findTextNode(child, name);
        if (found) return found;
      }
    }
    return null;
  }
  async function generateProducts() {
    const nunitoEB = await loadNunito5("ExtraBold");
    const nunitoBold = await loadNunito5("Bold");
    const dmSansRegular = await loadDMSans4("Regular");
    const dmSansMedium = await loadDMSans4("Medium");
    const cardSet = await createCardComponentSet();
    cardSet.x = 1600;
    cardSet.y = 400;
    const productVariant = cardSet.children.find(
      (c) => c.type === "COMPONENT" && c.name.includes("Product")
    );
    const toolVariant = cardSet.children.find(
      (c) => c.type === "COMPONENT" && c.name.includes("Tool")
    );
    const contentVariant = cardSet.children.find(
      (c) => c.type === "COMPONENT" && c.name.includes("Content")
    );
    const section = figma.createFrame();
    section.name = "Section / Products";
    section.resize(SECTION_WIDTH, 100);
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
    const grid = figma.createFrame();
    grid.name = "Card Grid";
    grid.layoutMode = "VERTICAL";
    grid.primaryAxisSizingMode = "AUTO";
    grid.counterAxisSizingMode = "AUTO";
    grid.itemSpacing = CARD_GAP;
    grid.fills = [];
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
        let variant;
        switch (product.category) {
          case "Product":
            variant = productVariant;
            break;
          case "Tool":
            variant = toolVariant;
            break;
          case "Content":
            variant = contentVariant;
            break;
        }
        if (!variant) continue;
        const instance = variant.createInstance();
        instance.name = product.name;
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

  // src/sections/philosophy.ts
  var SECTION_WIDTH2 = 1440;
  async function loadNunito6(style) {
    try {
      await figma.loadFontAsync({ family: "Nunito", style });
      return { family: "Nunito", style };
    } catch {
      const fallback = style.includes("Bold") ? "Bold" : "Regular";
      await figma.loadFontAsync({ family: "Inter", style: fallback });
      return { family: "Inter", style: fallback };
    }
  }
  async function loadDMSans5(style) {
    try {
      await figma.loadFontAsync({ family: "DM Sans", style });
      return { family: "DM Sans", style };
    } catch {
      await figma.loadFontAsync({ family: "Inter", style: "Regular" });
      return { family: "Inter", style: "Regular" };
    }
  }
  async function createValueIcons(parent) {
    const nunitoBold = await loadNunito6("Bold");
    const dmSansRegular = await loadDMSans5("Regular");
    const values = [
      { label: "Grow", jp: "\u80B2\u3064", svgFn: () => sproutSvg(colors["accent-leaf"], 1.5), color: colors["accent-leaf"] },
      { label: "Nurture", jp: "\u80B2\u3080", svgFn: () => nurtureSvg(colors["accent-sage"], 1.5), color: colors["accent-sage"] },
      { label: "Bloom", jp: "\u54B2\u304F", svgFn: () => anzuBlossomSvg(colors["accent-bloom"], 0.8), color: colors["accent-bloom"] },
      { label: "Ship", jp: "\u5C4A\u3051\u308B", svgFn: () => shipSvg(colors["accent-bark"], 1.5), color: colors["accent-bark"] }
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
      const label = figma.createText();
      label.fontName = nunitoBold;
      label.fontSize = 15;
      label.characters = val.label;
      label.fills = [solidPaint(colors["text-deep"])];
      label.lineHeight = { value: 20, unit: "PIXELS" };
      label.textAlignHorizontal = "CENTER";
      item.appendChild(label);
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
  async function generatePhilosophy() {
    const nunitoEB = await loadNunito6("ExtraBold");
    const dmSansRegular = await loadDMSans5("Regular");
    const section = figma.createFrame();
    section.name = "Section / Philosophy";
    section.resize(SECTION_WIDTH2, 100);
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
    const vine = figma.createNodeFromSvg(
      vineDividerSvg({
        kaede: colors.kaede,
        tsubaki: colors.tsubaki,
        anzu: colors.anzu,
        leaf: colors["accent-leaf"]
      })
    );
    vine.name = "Vine Divider";
    vine.resize(300, 20);
    vine.layoutSizingHorizontal = "FIXED";
    section.appendChild(vine);
    const star = figma.createNodeFromSvg(starSvg(colors["accent-leaf"], 2));
    star.name = "Star";
    star.resize(28, 28);
    section.appendChild(star);
    const heading = figma.createText();
    heading.fontName = nunitoEB;
    heading.fontSize = typography.h2.size;
    heading.characters = "A garden, not a factory";
    heading.fills = [solidPaint(colors["text-deep"])];
    heading.lineHeight = { value: typography.h2.size * typography.h2.lineHeight, unit: "PIXELS" };
    heading.letterSpacing = { value: typography.h2.letterSpacing * 100, unit: "PERCENT" };
    heading.textAlignHorizontal = "CENTER";
    section.appendChild(heading);
    const jpSub = figma.createText();
    jpSub.fontName = dmSansRegular;
    jpSub.fontSize = 15;
    jpSub.characters = "\u5DE5\u5834\u3067\u306F\u306A\u304F\u3001\u5EAD\u3067\u3042\u308A\u305F\u3044\u3002";
    jpSub.fills = [solidPaint(colors["text-light"])];
    jpSub.lineHeight = { value: 22, unit: "PIXELS" };
    jpSub.textAlignHorizontal = "CENTER";
    section.appendChild(jpSub);
    const body = figma.createText();
    body.fontName = dmSansRegular;
    body.fontSize = typography.body.size;
    body.characters = "Each project here grows at its own pace \u2014 planted with curiosity,\nnurtured with care, and shipped when it\u2019s ready to bloom.\nNo deadlines, no pressure. Just the joy of making things.";
    body.fills = [solidPaint(colors["text-muted"])];
    body.lineHeight = { value: typography.body.size * typography.body.lineHeight, unit: "PIXELS" };
    body.textAlignHorizontal = "CENTER";
    body.layoutSizingHorizontal = "FILL";
    section.appendChild(body);
    const spacer = figma.createFrame();
    spacer.name = "Spacer";
    spacer.resize(10, 16);
    spacer.fills = [];
    section.appendChild(spacer);
    await createValueIcons(section);
    const decoTsubaki = figma.createNodeFromSvg(
      tsubakiFlowerSvg(colors.tsubaki, 0.08)
    );
    decoTsubaki.name = "Deco Tsubaki";
    decoTsubaki.resize(120, 120);
    decoTsubaki.x = 40;
    decoTsubaki.y = 30;
    decoTsubaki.layoutPositioning = "ABSOLUTE";
    section.appendChild(decoTsubaki);
    const decoAnzu = figma.createNodeFromSvg(
      anzuBlossomSvg(colors.anzu, 0.07)
    );
    decoAnzu.name = "Deco Anzu";
    decoAnzu.resize(100, 100);
    decoAnzu.x = SECTION_WIDTH2 - 160;
    decoAnzu.y = section.height - 140;
    decoAnzu.layoutPositioning = "ABSOLUTE";
    section.appendChild(decoAnzu);
    const decoKaede = figma.createNodeFromSvg(
      kaedeLeafSvg(colors.kaede, 0.06)
    );
    decoKaede.name = "Deco Kaede";
    decoKaede.resize(80, 80);
    decoKaede.x = SECTION_WIDTH2 - 120;
    decoKaede.y = Math.round(section.height * 0.4);
    decoKaede.layoutPositioning = "ABSOLUTE";
    section.appendChild(decoKaede);
    return section;
  }

  // src/sections/footer.ts
  var SECTION_WIDTH3 = 1440;
  async function loadNunito7(style) {
    try {
      await figma.loadFontAsync({ family: "Nunito", style });
      return { family: "Nunito", style };
    } catch {
      const fallback = style.includes("Bold") ? "Bold" : "Regular";
      await figma.loadFontAsync({ family: "Inter", style: fallback });
      return { family: "Inter", style: fallback };
    }
  }
  async function loadDMSans6(style) {
    try {
      await figma.loadFontAsync({ family: "DM Sans", style });
      return { family: "DM Sans", style };
    } catch {
      await figma.loadFontAsync({ family: "Inter", style: "Regular" });
      return { family: "Inter", style: "Regular" };
    }
  }
  async function generateFooter() {
    const nunitoEB = await loadNunito7("ExtraBold");
    const nunitoSB = await loadNunito7("SemiBold");
    const dmSansRegular = await loadDMSans6("Regular");
    const section = figma.createFrame();
    section.name = "Section / Footer";
    section.resize(SECTION_WIDTH3, 100);
    section.layoutMode = "VERTICAL";
    section.primaryAxisSizingMode = "AUTO";
    section.counterAxisSizingMode = "FIXED";
    section.primaryAxisAlignItems = "CENTER";
    section.counterAxisAlignItems = "CENTER";
    section.fills = [solidPaint(colors["text-deep"])];
    section.clipsContent = true;
    const wave = figma.createNodeFromSvg(waveTopSvg(colors["text-deep"]));
    wave.name = "Wave Top";
    wave.resize(SECTION_WIDTH3, 60);
    wave.layoutSizingHorizontal = "FILL";
    section.appendChild(wave);
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
    const tagline = figma.createText();
    tagline.fontName = dmSansRegular;
    tagline.fontSize = 14;
    tagline.characters = "Plant ideas. Watch them grow. Have fun.";
    tagline.fills = [solidPaint("#FFFFFF", 0.7)];
    tagline.lineHeight = { value: 20, unit: "PIXELS" };
    tagline.textAlignHorizontal = "CENTER";
    content.appendChild(tagline);
    const taglineJp = figma.createText();
    taglineJp.fontName = dmSansRegular;
    taglineJp.fontSize = 12;
    taglineJp.characters = "\u30A2\u30A4\u30C7\u30A2\u3092\u690D\u3048\u3066\u3001\u80B2\u3066\u3066\u3001\u697D\u3057\u3080\u3002";
    taglineJp.fills = [solidPaint("#FFFFFF", 0.5)];
    taglineJp.lineHeight = { value: 18, unit: "PIXELS" };
    taglineJp.textAlignHorizontal = "CENTER";
    content.appendChild(taglineJp);
    const spacer1 = figma.createFrame();
    spacer1.name = "Spacer";
    spacer1.resize(10, 12);
    spacer1.fills = [];
    content.appendChild(spacer1);
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
    const spacer2 = figma.createFrame();
    spacer2.name = "Spacer";
    spacer2.resize(10, 16);
    spacer2.fills = [];
    content.appendChild(spacer2);
    const divider = figma.createRectangle();
    divider.name = "Divider";
    divider.resize(200, 1);
    divider.fills = [solidPaint("#FFFFFF", 0.1)];
    content.appendChild(divider);
    const spacer3 = figma.createFrame();
    spacer3.name = "Spacer";
    spacer3.resize(10, 8);
    spacer3.fills = [];
    content.appendChild(spacer3);
    const copyright = figma.createText();
    copyright.fontName = dmSansRegular;
    copyright.fontSize = 12;
    copyright.characters = "\xA9 2024 craftgarden.studio. Crafted with care.";
    copyright.fills = [solidPaint("#FFFFFF", 0.35)];
    copyright.lineHeight = { value: 18, unit: "PIXELS" };
    copyright.textAlignHorizontal = "CENTER";
    content.appendChild(copyright);
    section.appendChild(content);
    return section;
  }

  // src/sections/index.ts
  async function generateSections(options) {
    const { sections, onProgress } = options;
    const totalSteps = sections.length;
    let currentStep = 0;
    function progress(label) {
      currentStep++;
      onProgress?.(currentStep, totalSteps, label);
    }
    let yOffset = 0;
    const page = figma.createPage();
    page.name = "CraftGarden Design";
    figma.currentPage = page;
    for (const sectionId of sections) {
      switch (sectionId) {
        case "tokens": {
          progress("Creating tokens & text styles...");
          await createTokensAndStyles();
          break;
        }
        case "components": {
          progress("Creating reusable components...");
          const botanicals = createAllBotanicalComponents();
          botanicals.kaede.x = 1600;
          botanicals.kaede.y = 0;
          botanicals.tsubaki.x = 1720;
          botanicals.tsubaki.y = 0;
          botanicals.anzu.x = 1840;
          botanicals.anzu.y = 0;
          const navComp = await createNavComponent();
          navComp.x = 1600;
          navComp.y = 150;
          const ctaBtn = await createCtaButton("Button Label");
          ctaBtn.x = 1600;
          ctaBtn.y = 260;
          const filterSet = await createFilterButtonSet("Filter");
          filterSet.x = 1600;
          filterSet.y = 340;
          const cardSet = await createCardComponentSet();
          cardSet.x = 1600;
          cardSet.y = 440;
          break;
        }
        case "navigation": {
          progress("Generating navigation...");
          const nav = await generateNavigation();
          nav.x = 0;
          nav.y = yOffset;
          yOffset += nav.height;
          break;
        }
        case "hero": {
          progress("Generating hero section...");
          const hero = await generateHero();
          hero.x = 0;
          hero.y = yOffset;
          yOffset += hero.height;
          break;
        }
        case "products": {
          progress("Generating products section...");
          const prods = await generateProducts();
          prods.x = 0;
          prods.y = yOffset;
          yOffset += prods.height;
          break;
        }
        case "philosophy": {
          progress("Generating philosophy section...");
          const phil = await generatePhilosophy();
          phil.x = 0;
          phil.y = yOffset;
          yOffset += phil.height;
          break;
        }
        case "footer": {
          progress("Generating footer...");
          const footer = await generateFooter();
          footer.x = 0;
          footer.y = yOffset;
          yOffset += footer.height;
          break;
        }
      }
    }
    figma.viewport.scrollAndZoomIntoView(page.children);
  }

  // src/code.ts
  figma.showUI(__html__, { width: 360, height: 520 });
  figma.ui.onmessage = async (msg) => {
    if (msg.type === "generate" && msg.sections) {
      const sections = msg.sections;
      const totalSteps = sections.length;
      figma.ui.postMessage({
        type: "progress",
        step: 0,
        total: totalSteps,
        label: "Starting generation..."
      });
      try {
        await generateSections({
          sections,
          onProgress: (step, total, label) => {
            figma.ui.postMessage({
              type: "progress",
              step,
              total,
              label
            });
          }
        });
        figma.ui.postMessage({
          type: "complete",
          label: "Design generated successfully!"
        });
        figma.notify("CraftGarden design generated!");
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        figma.ui.postMessage({
          type: "error",
          label: `Error: ${message}`
        });
        figma.notify(`Error: ${message}`, { error: true });
      }
    }
    if (msg.type === "cancel") {
      figma.closePlugin();
    }
  };
})();
