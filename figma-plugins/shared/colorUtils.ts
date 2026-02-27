/**
 * Color utility functions for Figma Plugin API.
 * Figma uses 0–1 float RGBA, not 0–255.
 */

export interface FigmaRGB {
  r: number;
  g: number;
  b: number;
}

export interface FigmaRGBA extends FigmaRGB {
  a: number;
}

/** Convert a hex color string (#RRGGBB or #RGB) to Figma RGB (0–1). */
export function hexToFigmaRgb(hex: string): FigmaRGB {
  const h = hex.replace("#", "");
  const full =
    h.length === 3
      ? h[0] + h[0] + h[1] + h[1] + h[2] + h[2]
      : h;
  return {
    r: parseInt(full.slice(0, 2), 16) / 255,
    g: parseInt(full.slice(2, 4), 16) / 255,
    b: parseInt(full.slice(4, 6), 16) / 255,
  };
}

/** Convert hex + alpha (0–1) to Figma RGBA paint-compatible object. */
export function hexToFigmaColor(hex: string, alpha = 1): FigmaRGBA {
  return { ...hexToFigmaRgb(hex), a: alpha };
}

/** Create a Figma SolidPaint from hex + opacity. */
export function solidPaint(hex: string, opacity = 1): SolidPaint {
  const { r, g, b } = hexToFigmaRgb(hex);
  return { type: "SOLID", color: { r, g, b }, opacity };
}

/** Create a Figma RGBA color (for variable bindings). */
export function figmaRGBA(hex: string, alpha = 1): RGBA {
  const { r, g, b } = hexToFigmaRgb(hex);
  return { r, g, b, a: alpha };
}

/**
 * Parse `rgba(r, g, b, a)` CSS string to Figma RGBA.
 */
export function cssRgbaToFigma(css: string): FigmaRGBA {
  const m = css.match(
    /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+))?\s*\)/
  );
  if (!m) throw new Error(`Cannot parse CSS color: ${css}`);
  return {
    r: parseFloat(m[1]) / 255,
    g: parseFloat(m[2]) / 255,
    b: parseFloat(m[3]) / 255,
    a: m[4] !== undefined ? parseFloat(m[4]) : 1,
  };
}
