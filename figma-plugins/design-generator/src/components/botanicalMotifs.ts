/**
 * Botanical motif components: Kaede, Tsubaki, Anzu.
 * Each creates a reusable Figma ComponentNode from SVG paths.
 */

import { colors } from "@shared/designTokens";
import { kaedeLeafSvg, tsubakiFlowerSvg, anzuBlossomSvg } from "@shared/svgPaths";

/**
 * Create a Kaede (maple leaf) component.
 */
export function createKaedeComponent(): ComponentNode {
  const svg = figma.createNodeFromSvg(kaedeLeafSvg(colors.kaede, 0.9));
  const component = figma.createComponent();
  component.name = "Botanical / Kaede";
  component.resize(svg.width, svg.height);

  // Move children from SVG frame into component
  while (svg.children.length > 0) {
    component.appendChild(svg.children[0]);
  }
  svg.remove();

  return component;
}

/**
 * Create a Tsubaki (camellia flower) component.
 */
export function createTsubakiComponent(): ComponentNode {
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

/**
 * Create an Anzu (apricot blossom) component.
 */
export function createAnzuComponent(): ComponentNode {
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

/**
 * Create all botanical components and return them.
 */
export function createAllBotanicalComponents(): {
  kaede: ComponentNode;
  tsubaki: ComponentNode;
  anzu: ComponentNode;
} {
  return {
    kaede: createKaedeComponent(),
    tsubaki: createTsubakiComponent(),
    anzu: createAnzuComponent(),
  };
}
