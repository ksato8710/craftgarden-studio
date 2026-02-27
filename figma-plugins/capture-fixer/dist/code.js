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
  var ARROW_RIGHT_PATH = "M5 12h14M12 5l7 7-7 7";
  function arrowRightSvg(stroke, strokeWidth = 2.5) {
    return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="${ARROW_RIGHT_PATH}"/></svg>`;
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

  // src/fixers/svgReplacer.ts
  function walkTree(node, callback) {
    callback(node);
    if ("children" in node) {
      for (const child of node.children) {
        walkTree(child, callback);
      }
    }
  }
  function hasImageFill(node) {
    try {
      if ("fills" in node && Array.isArray(node.fills)) {
        return node.fills.some(
          (f) => f.type === "IMAGE"
        );
      }
    } catch {
    }
    return false;
  }
  function absoluteY(node) {
    let y = node.y;
    let parent = node.parent;
    while (parent && "y" in parent) {
      y += parent.y;
      parent = parent.parent;
    }
    return y;
  }
  function absoluteX(node) {
    let x = node.x;
    let parent = node.parent;
    while (parent && "x" in parent) {
      x += parent.x;
      parent = parent.parent;
    }
    return x;
  }
  function identifySvg(node) {
    const w = node.width;
    const h = node.height;
    const absY = absoluteY(node);
    if (w >= 12 && w <= 28 && h >= 12 && h <= 28 && absY < 80) {
      return "star-logo";
    }
    if (w >= 14 && w <= 28 && h >= 14 && h <= 28 && absY > 200) {
      return "arrow-right";
    }
    if (w >= 16 && w <= 40 && h >= 16 && h <= 40 && absY > 80) {
      const categoryText = findSiblingCategoryText(node);
      if (categoryText === "Product") return "category-sprout";
      if (categoryText === "Tool") return "category-tulip";
      if (categoryText === "Content") return "category-sun";
      return "category-sprout";
    }
    if (w >= 40 && h >= 40 && absY < 700) {
      const absX = absoluteX(node);
      if (absX < 400) return "kaede-hero";
      if (absX > 800) return "anzu-hero";
      return "tsubaki-hero";
    }
    return null;
  }
  function findSiblingCategoryText(node) {
    const parent = node.parent;
    if (!parent || !("children" in parent)) return null;
    for (const sibling of parent.children) {
      if (sibling.type === "TEXT") {
        const text = sibling.characters.trim();
        if (text === "Product" || text === "Tool" || text === "Content") {
          return text;
        }
      }
      if ("children" in sibling) {
        for (const grandchild of sibling.children) {
          if (grandchild.type === "TEXT") {
            const text = grandchild.characters.trim();
            if (text === "Product" || text === "Tool" || text === "Content") {
              return text;
            }
          }
        }
      }
    }
    const grandparent = parent.parent;
    if (grandparent && "children" in grandparent) {
      for (const uncle of grandparent.children) {
        if (uncle.type === "TEXT") {
          const text = uncle.characters.trim();
          if (text === "Product" || text === "Tool" || text === "Content") {
            return text;
          }
        }
      }
    }
    return null;
  }
  function buildSvgString(kind) {
    switch (kind) {
      case "star-logo":
        return starSvg(colors["accent-leaf"], 1.5);
      case "category-sprout":
        return sproutSvg(colors["cat-product"], 1.5);
      case "category-tulip":
        return tulipSvg(colors["cat-tool"], 1.5);
      case "category-sun":
        return sunSvg(colors["cat-content"], 1.5);
      case "arrow-right":
        return arrowRightSvg(colors["accent-leaf"], 2);
      case "kaede-hero":
        return kaedeLeafSvg(colors.kaede, 0.15);
      case "tsubaki-hero":
        return tsubakiFlowerSvg(colors.tsubaki, 0.12);
      case "anzu-hero":
        return anzuBlossomSvg(colors.anzu, 0.15);
      default:
        return null;
    }
  }
  async function fixSvgs(root) {
    const rasterNodes = [];
    walkTree(root, (node) => {
      if (hasImageFill(node)) {
        rasterNodes.push(node);
      }
    });
    let replacedCount = 0;
    for (const rasterNode of rasterNodes) {
      const kind = identifySvg(rasterNode);
      if (!kind) continue;
      const svgStr = buildSvgString(kind);
      if (!svgStr) continue;
      try {
        const vectorNode = figma.createNodeFromSvg(svgStr);
        vectorNode.x = rasterNode.x;
        vectorNode.y = rasterNode.y;
        vectorNode.resize(rasterNode.width, rasterNode.height);
        const parent = rasterNode.parent;
        if (parent && "children" in parent) {
          const index = parent.children.indexOf(rasterNode);
          if (index >= 0) {
            parent.insertChild(index, vectorNode);
          } else {
            parent.appendChild(vectorNode);
          }
        }
        rasterNode.remove();
        replacedCount++;
      } catch (err) {
        console.error(`[svgReplacer] Failed to replace ${kind}:`, err);
      }
    }
    return replacedCount;
  }

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

  // src/fixers/shioriAdder.ts
  var KNOWN_PRODUCTS = [
    "AI PM Service",
    "History Quiz",
    "Product Hub",
    "Essential Navigator",
    "Content Studio",
    "Feedback Hub",
    "Competitor UI Viewer",
    "Agent Skill Search",
    "AI Solo Craft",
    "Conf Hub",
    "Orcha",
    "API Catalog JP"
  ];
  var CATEGORY_COLORS = {
    Product: colors["cat-product"],
    // #6B8F71
    Tool: colors["cat-tool"],
    // #7E9AAB
    Content: colors["cat-content"]
    // #B8956A
  };
  function walkTree2(node, callback) {
    callback(node);
    if ("children" in node) {
      for (const child of node.children) {
        walkTree2(child, callback);
      }
    }
  }
  function collectText(node) {
    const texts = [];
    walkTree2(node, (n) => {
      if (n.type === "TEXT") {
        texts.push(n.characters.trim());
      }
    });
    return texts;
  }
  function isCardFrame(node) {
    if (node.type !== "FRAME") return false;
    const w = node.width;
    const h = node.height;
    if (w < 250 || w > 360 || h < 200 || h > 600) return false;
    const texts = collectText(node);
    const hasProductName = texts.some(
      (t) => KNOWN_PRODUCTS.some((p) => t.includes(p))
    );
    const hasCategoryBadge = texts.some(
      (t) => t === "Product" || t === "Tool" || t === "Content"
    );
    return hasProductName || hasCategoryBadge;
  }
  function detectCategory(cardNode) {
    const texts = collectText(cardNode);
    if (texts.includes("Product")) return "Product";
    if (texts.includes("Tool")) return "Tool";
    if (texts.includes("Content")) return "Content";
    const productCategories = {
      "AI PM Service": "Product",
      "History Quiz": "Product",
      "Product Hub": "Tool",
      "Essential Navigator": "Tool",
      "Content Studio": "Tool",
      "Feedback Hub": "Tool",
      "Competitor UI Viewer": "Tool",
      "Agent Skill Search": "Tool",
      "AI Solo Craft": "Content",
      "Conf Hub": "Content",
      "Orcha": "Content",
      "API Catalog JP": "Content"
    };
    for (const text of texts) {
      for (const [name, cat] of Object.entries(productCategories)) {
        if (text.includes(name)) return cat;
      }
    }
    return "Product";
  }
  function hasShioriAlready(cardNode) {
    for (const child of cardNode.children) {
      if (child.name === "shiori-ribbon" || child.name === "shiori") {
        return true;
      }
    }
    return false;
  }
  function createShioriRibbon(cardNode, category) {
    const ribbonColor = CATEGORY_COLORS[category] || CATEGORY_COLORS.Product;
    const shioriGroup = figma.createFrame();
    shioriGroup.name = "shiori-ribbon";
    shioriGroup.fills = [];
    shioriGroup.clipsContent = false;
    const ribbonWidth = 8;
    const ribbonHeight = 58;
    const notchHeight = 6;
    const overhang = 12;
    shioriGroup.x = cardNode.width - 22 - ribbonWidth;
    shioriGroup.y = -overhang;
    shioriGroup.resize(ribbonWidth, ribbonHeight + notchHeight);
    const ribbon = figma.createRectangle();
    ribbon.name = "ribbon-body";
    ribbon.x = 0;
    ribbon.y = 0;
    ribbon.resize(ribbonWidth, ribbonHeight);
    ribbon.fills = [solidPaint(ribbonColor)];
    ribbon.opacity = 0.82;
    ribbon.cornerRadius = 0;
    ribbon.bottomLeftRadius = 1.5;
    ribbon.bottomRightRadius = 1.5;
    ribbon.topLeftRadius = 0;
    ribbon.topRightRadius = 0;
    shioriGroup.appendChild(ribbon);
    const notchSvg = `<svg viewBox="0 0 ${ribbonWidth} ${notchHeight}" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,0 ${ribbonWidth},0 ${ribbonWidth / 2},${notchHeight}" fill="${ribbonColor}" opacity="0.82"/>
  </svg>`;
    try {
      const notchNode = figma.createNodeFromSvg(notchSvg);
      notchNode.name = "ribbon-notch";
      notchNode.x = 0;
      notchNode.y = ribbonHeight;
      notchNode.resize(ribbonWidth, notchHeight);
      shioriGroup.appendChild(notchNode);
    } catch {
      console.warn("[shioriAdder] Could not create notch triangle");
    }
    return shioriGroup;
  }
  async function fixShiori(root) {
    const cards = [];
    walkTree2(root, (node) => {
      if (isCardFrame(node)) {
        cards.push(node);
      }
    });
    let addedCount = 0;
    for (const card of cards) {
      if (hasShioriAlready(card)) continue;
      const category = detectCategory(card);
      card.clipsContent = false;
      const shiori = createShioriRibbon(card, category);
      card.appendChild(shiori);
      addedCount++;
    }
    return addedCount;
  }

  // src/fixers/buttonComponentizer.ts
  function walkTree3(node, callback) {
    callback(node);
    if ("children" in node) {
      for (const child of node.children) {
        walkTree3(child, callback);
      }
    }
  }
  function getTextContent(node) {
    const texts = [];
    walkTree3(node, (n) => {
      if (n.type === "TEXT") {
        texts.push(n.characters);
      }
    });
    return texts.join(" ").trim();
  }
  function isCtaButton(node) {
    const text = getTextContent(node).toLowerCase();
    return text.includes("explore the garden") || text.includes("explore") || text.includes("get started");
  }
  function isVisitLink(node) {
    const text = getTextContent(node).toLowerCase();
    return text === "visit" || text.includes("visit \u2192") || text.includes("visit");
  }
  function isLinkFrame(node) {
    if (node.type !== "FRAME") return false;
    if (node.name === "Link" || node.name === "link") return true;
    const text = getTextContent(node).toLowerCase();
    if (text.includes("explore") || text === "visit" || text.includes("visit \u2192")) {
      return true;
    }
    return false;
  }
  async function loadFont(family, style) {
    try {
      await figma.loadFontAsync({ family, style });
    } catch {
      try {
        await figma.loadFontAsync({ family: "Inter", style });
      } catch {
        console.warn(`[buttonComponentizer] Could not load font ${family} ${style}`);
      }
    }
  }
  async function styleCtaButton(frame) {
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
    frame.cornerRadius = radii.btn;
    frame.fills = [solidPaint(colors["accent-leaf"])];
    frame.effects = [{ ...shadows.ctaButton, blendMode: "NORMAL" }];
    await loadFont("Nunito", "Bold");
    walkTree3(frame, (n) => {
      if (n.type === "TEXT") {
        try {
          n.fills = [solidPaint("#FFFFFF")];
          n.fontSize = 16;
          n.fontName = { family: "Nunito", style: "Bold" };
          n.textAlignHorizontal = "CENTER";
        } catch {
        }
      }
    });
    frame.name = "CTA Button";
  }
  async function styleVisitLink(frame) {
    await loadFont("Nunito", "SemiBold");
    walkTree3(frame, (n) => {
      if (n.type === "TEXT") {
        try {
          n.fills = [solidPaint(colors["accent-leaf"])];
          n.fontSize = 13.3;
          n.fontName = { family: "Nunito", style: "SemiBold" };
        } catch {
        }
      }
    });
    frame.name = "Visit Link";
  }
  async function fixButtons(root) {
    const linkFrames = [];
    walkTree3(root, (node) => {
      if (isLinkFrame(node)) {
        linkFrames.push(node);
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

  // src/fixers/autoLayoutFixer.ts
  var KNOWN_PRODUCTS2 = [
    "AI PM Service",
    "History Quiz",
    "Product Hub",
    "Essential Navigator",
    "Content Studio",
    "Feedback Hub",
    "Competitor UI Viewer",
    "Agent Skill Search",
    "AI Solo Craft",
    "Conf Hub",
    "Orcha",
    "API Catalog JP"
  ];
  function walkTree4(node, callback) {
    callback(node);
    if ("children" in node) {
      for (const child of node.children) {
        walkTree4(child, callback);
      }
    }
  }
  function collectText2(node) {
    const texts = [];
    walkTree4(node, (n) => {
      if (n.type === "TEXT") {
        texts.push(n.characters.trim());
      }
    });
    return texts;
  }
  function isCardFrame2(node) {
    if (node.type !== "FRAME") return false;
    const w = node.width;
    const h = node.height;
    if (w < 250 || w > 360 || h < 200 || h > 600) return false;
    const texts = collectText2(node);
    const hasProductName = texts.some(
      (t) => KNOWN_PRODUCTS2.some((p) => t.includes(p))
    );
    const hasCategoryBadge = texts.some(
      (t) => t === "Product" || t === "Tool" || t === "Content"
    );
    return hasProductName || hasCategoryBadge;
  }
  function hasAutoLayout(frame) {
    return frame.layoutMode !== "NONE";
  }
  function isTopStrip(child, cardWidth) {
    if (child.type !== "FRAME" && child.type !== "RECTANGLE") return false;
    return child.width >= cardWidth - 4 && child.height >= 80 && child.height <= 200 && child.y <= 5;
  }
  function applyCardAutoLayout(card) {
    const cardWidth = card.width;
    card.layoutMode = "VERTICAL";
    card.primaryAxisSizingMode = "AUTO";
    card.counterAxisSizingMode = "FIXED";
    card.counterAxisAlignItems = "MIN";
    card.paddingTop = 0;
    card.paddingBottom = 0;
    card.paddingLeft = 0;
    card.paddingRight = 0;
    card.itemSpacing = 0;
    card.cornerRadius = radii.card;
    for (const child of card.children) {
      try {
        if ("layoutAlign" in child) {
          if (isTopStrip(child, cardWidth)) {
            child.layoutAlign = "STRETCH";
            child.layoutSizingHorizontal = "FILL";
            child.layoutSizingVertical = "FIXED";
          } else if (child.type === "FRAME") {
            child.layoutAlign = "STRETCH";
            child.layoutSizingHorizontal = "FILL";
            child.layoutSizingVertical = "HUG";
            if (child.height > 100 && child.children.length > 1) {
              child.layoutMode = "VERTICAL";
              child.primaryAxisSizingMode = "AUTO";
              child.counterAxisSizingMode = "FIXED";
              child.paddingTop = 24;
              child.paddingBottom = 24;
              child.paddingLeft = 24;
              child.paddingRight = 24;
              child.itemSpacing = 12;
            }
          }
        }
      } catch {
      }
    }
  }
  async function fixAutoLayout(root) {
    const cards = [];
    walkTree4(root, (node) => {
      if (isCardFrame2(node) && !hasAutoLayout(node)) {
        cards.push(node);
      }
    });
    let fixedCount = 0;
    for (const card of cards) {
      try {
        applyCardAutoLayout(card);
        fixedCount++;
      } catch (err) {
        console.error("[autoLayoutFixer] Failed to fix card:", err);
      }
    }
    return fixedCount;
  }

  // src/fixers/gradientFixer.ts
  function walkTree5(node, callback) {
    callback(node);
    if ("children" in node) {
      for (const child of node.children) {
        walkTree5(child, callback);
      }
    }
  }
  function absoluteY2(node) {
    let y = node.y;
    let parent = node.parent;
    while (parent && "y" in parent) {
      y += parent.y;
      parent = parent.parent;
    }
    return y;
  }
  function isSolidWhiteFill(fill) {
    if (fill.type !== "SOLID") return false;
    const { r, g, b } = fill.color;
    return r > 0.9 && g > 0.9 && b > 0.9;
  }
  function isHeroGradientCandidate(node) {
    if (node.type !== "RECTANGLE" && node.type !== "ELLIPSE" && node.type !== "FRAME") {
      return false;
    }
    if (node.width < 150 || node.height < 150) return false;
    const absY = absoluteY2(node);
    if (absY > 800) return false;
    try {
      if ("fills" in node && Array.isArray(node.fills)) {
        const fills = node.fills;
        return fills.some((f) => f.visible !== false && isSolidWhiteFill(f));
      }
    } catch {
    }
    return false;
  }
  function buildRadialGradient() {
    const cream = hexToFigmaRgb(colors["bg-cream"]);
    return {
      type: "GRADIENT_RADIAL",
      gradientTransform: [
        [1, 0, 0],
        [0, 1, 0]
      ],
      gradientStops: [
        {
          position: 0,
          color: { ...cream, a: 1 }
        },
        {
          position: 0.25,
          color: { ...cream, a: 1 }
        },
        {
          position: 0.4,
          color: { ...cream, a: 0.92 }
        },
        {
          position: 0.55,
          color: { ...cream, a: 0.5 }
        },
        {
          position: 0.68,
          color: { ...cream, a: 0.15 }
        },
        {
          position: 0.8,
          color: { ...cream, a: 0 }
        }
      ],
      visible: true,
      opacity: 1,
      blendMode: "NORMAL"
    };
  }
  async function fixGradients(root) {
    const candidates = [];
    walkTree5(root, (node) => {
      if (isHeroGradientCandidate(node)) {
        candidates.push(node);
      }
    });
    let fixedCount = 0;
    for (const node of candidates) {
      try {
        const fillableNode = node;
        const currentFills = fillableNode.fills.slice();
        const newFills = [];
        let replaced = false;
        for (const fill of currentFills) {
          if (fill.visible !== false && isSolidWhiteFill(fill) && !replaced) {
            newFills.push(buildRadialGradient());
            replaced = true;
          } else {
            newFills.push(fill);
          }
        }
        if (replaced) {
          fillableNode.fills = newFills;
          fillableNode.name = fillableNode.name || "hero-gradient-overlay";
          fixedCount++;
        }
      } catch (err) {
        console.error("[gradientFixer] Failed to fix gradient:", err);
      }
    }
    return fixedCount;
  }

  // src/fixers/backdropBlurFixer.ts
  function walkTree6(node, callback) {
    callback(node);
    if ("children" in node) {
      for (const child of node.children) {
        walkTree6(child, callback);
      }
    }
  }
  function isNavBar(node) {
    if (node.type !== "FRAME") return false;
    if (node.y > 10) return false;
    if (node.height < 40 || node.height > 100) return false;
    if (node.width < 800) return false;
    return true;
  }
  function containsNavContent(node) {
    let found = false;
    walkTree6(node, (n) => {
      if (n.type === "TEXT") {
        const text = n.characters.toLowerCase();
        if (text.includes("craftgarden") || text.includes("products") || text.includes("philosophy") || text.includes("tech stack")) {
          found = true;
        }
      }
    });
    return found;
  }
  function hasBackdropBlur(node) {
    try {
      return node.effects.some((e) => e.type === "BACKGROUND_BLUR");
    } catch {
      return false;
    }
  }
  async function fixBackdropBlur(root) {
    const navCandidates = [];
    if ("children" in root) {
      for (const child of root.children) {
        if (isNavBar(child)) {
          navCandidates.push(child);
        }
      }
    }
    if (navCandidates.length === 0) {
      walkTree6(root, (node) => {
        if (node.type === "FRAME" && node.height < 100 && node.height > 40) {
          if (containsNavContent(node)) {
            let absY = node.y;
            let parent = node.parent;
            while (parent && "y" in parent) {
              absY += parent.y;
              parent = parent.parent;
            }
            if (absY < 20) {
              navCandidates.push(node);
            }
          }
        }
      });
    }
    let fixedCount = 0;
    for (const nav of navCandidates) {
      if (hasBackdropBlur(nav)) continue;
      try {
        const existingEffects = [...nav.effects];
        const blurEffect = {
          type: "BACKGROUND_BLUR",
          blurType: "NORMAL",
          radius: 12,
          visible: true
        };
        nav.effects = [...existingEffects, blurEffect];
        nav.fills = [solidPaint(colors["bg-cream"], 0.9)];
        nav.name = nav.name === "Frame" ? "Navigation" : nav.name;
        fixedCount++;
      } catch (err) {
        console.error("[backdropBlurFixer] Failed to fix nav:", err);
      }
    }
    return fixedCount;
  }

  // src/fixers/index.ts
  async function runAllFixers(root, onProgress) {
    const fixers = [
      { name: "Backdrop Blur", fn: fixBackdropBlur },
      { name: "Gradient Fix", fn: fixGradients },
      { name: "Button Fix", fn: fixButtons },
      { name: "Auto Layout", fn: fixAutoLayout },
      { name: "Shiori Ribbons", fn: fixShiori },
      { name: "SVG Replace", fn: fixSvgs }
    ];
    const results = [];
    for (let i = 0; i < fixers.length; i++) {
      const fixer = fixers[i];
      onProgress(i + 1, fixers.length, fixer.name);
      try {
        const count = await fixer.fn(root);
        results.push({ name: fixer.name, count });
      } catch (err) {
        console.error(`[fixers] ${fixer.name} failed:`, err);
        results.push({ name: fixer.name, count: -1 });
      }
    }
    return results;
  }

  // src/code.ts
  figma.showUI(__html__, { width: 360, height: 440 });
  figma.ui.onmessage = async (msg) => {
    if (msg.type === "fix-selection") {
      await handleFixSelection();
    } else if (msg.type === "fix-page") {
      await handleFixPage();
    } else if (msg.type === "cancel") {
      figma.closePlugin();
    }
  };
  async function handleFixSelection() {
    const selection = figma.currentPage.selection;
    if (selection.length === 0) {
      figma.ui.postMessage({
        type: "error",
        message: "No selection. Please select a frame to fix."
      });
      return;
    }
    const root = selection[0];
    figma.ui.postMessage({ type: "started", target: root.name || "Selection" });
    const results = await runAllFixers(root, (step, total, label) => {
      figma.ui.postMessage({ type: "progress", step, total, label });
    });
    sendResults(results, root.name || "Selection");
  }
  async function handleFixPage() {
    const page = figma.currentPage;
    const children = page.children;
    if (children.length === 0) {
      figma.ui.postMessage({
        type: "error",
        message: "Current page is empty."
      });
      return;
    }
    figma.ui.postMessage({ type: "started", target: page.name });
    const aggregated = {};
    for (const child of children) {
      const results2 = await runAllFixers(child, (step, total, label) => {
        figma.ui.postMessage({ type: "progress", step, total, label });
      });
      for (const r of results2) {
        aggregated[r.name] = (aggregated[r.name] || 0) + r.count;
      }
    }
    const results = Object.entries(aggregated).map(
      ([name, count]) => ({ name, count })
    );
    sendResults(results, page.name);
  }
  function sendResults(results, target) {
    const totalFixes = results.reduce(
      (sum, r) => sum + Math.max(0, r.count),
      0
    );
    figma.ui.postMessage({
      type: "results",
      results,
      target,
      totalFixes
    });
    figma.notify(
      `Capture Fixer: ${totalFixes} fix${totalFixes !== 1 ? "es" : ""} applied to "${target}".`
    );
  }
})();
