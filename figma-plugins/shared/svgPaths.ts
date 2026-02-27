/**
 * All SVG path data used across the site.
 * These are raw SVG strings for figma.createNodeFromSvg().
 */

/* ── Kaede (楓) maple leaf ── */
export const KAEDE_LEAF_PATH =
  "M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z";

export function kaedeLeafSvg(fill: string, opacity = 1): string {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="${KAEDE_LEAF_PATH}" fill="${fill}" opacity="${opacity}"/></svg>`;
}

/* ── Tsubaki (椿) camellia flower ── */
export function tsubakiFlowerSvg(fill: string, opacity = 1): string {
  const petals = [0, 60, 120, 180, 240, 300]
    .map(
      (r) =>
        `<ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(${r} 50 50)" fill="${fill}" opacity="${opacity}"/>`
    )
    .join("");
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${petals}<circle cx="50" cy="50" r="6" fill="${fill}" opacity="${opacity * 0.4}"/></svg>`;
}

/* ── Anzu (杏) apricot blossom ── */
export function anzuBlossomSvg(fill: string, opacity = 1): string {
  const petals = [0, 72, 144, 216, 288]
    .map(
      (r) =>
        `<ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(${r} 50 50)" fill="${fill}" opacity="${opacity}"/>`
    )
    .join("");
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${petals}<circle cx="50" cy="50" r="5" fill="${fill}" opacity="${opacity * 0.35}"/></svg>`;
}

/* ── Star icon (logo / decorative) ── */
export const STAR_PATH =
  "M12 22c1-4 4-7 8-8-4-1-7-4-8-8-1 4-4 7-8 8 4 1 7 4 8 8z";

export function starSvg(stroke: string, strokeWidth = 2): string {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="${STAR_PATH}"/></svg>`;
}

/* ── Arrow right ── */
export const ARROW_RIGHT_PATH = "M5 12h14M12 5l7 7-7 7";

export function arrowRightSvg(stroke: string, strokeWidth = 2.5): string {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="${ARROW_RIGHT_PATH}"/></svg>`;
}

/* ── Sprout (Product category icon) ── */
export function sproutSvg(stroke: string, strokeWidth = 2): string {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M12 20v-8"/><path d="M12 12C12 8 8 4.5 3 4c0 6 3 9 9 8z"/><path d="M12 12c0-4 4-7.5 9-8 0 6-3 9-9 8z"/></svg>`;
}

/* ── Tulip (Tool category icon) ── */
export function tulipSvg(stroke: string, strokeWidth = 2): string {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-5 7-11 8-11s8 6 8 11a7 7 0 0 1-7 7z"/><path d="M12 20V10"/></svg>`;
}

/* ── Sun (Content category icon) ── */
export function sunSvg(stroke: string, strokeWidth = 2): string {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>`;
}

/* ── Nurture drop ── */
export function nurtureSvg(stroke: string, strokeWidth = 1.5): string {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a9 9 0 0 0 9-9c0-3-1.5-5.5-4-7.5C14.5 3.5 12 2 12 2s-2.5 1.5-5 3.5C4.5 7.5 3 10 3 13a9 9 0 0 0 9 9z"/><path d="M12 22V12"/></svg>`;
}

/* ── Ship/package ── */
export function shipSvg(stroke: string, strokeWidth = 1.5): string {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>`;
}

/* ── Green leaf ── */
export function greenLeafSvg(fill: string, opacity = 1): string {
  return `<svg viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C15 0 0 15 0 25C0 33 7 40 15 40C23 40 30 33 30 25C30 15 15 0 15 0Z" fill="${fill}" opacity="${opacity}"/></svg>`;
}

/* ── Footer wave ── */
export function waveTopSvg(fill: string): string {
  return `<svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0,40 C240,60 480,10 720,40 C960,70 1200,10 1440,40 L1440,60 L0,60 Z" fill="${fill}"/></svg>`;
}

/* ── Vine divider ── */
export function vineDividerSvg(colors: { kaede: string; tsubaki: string; anzu: string; leaf: string }): string {
  return `<svg viewBox="0 0 600 40" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round"><defs><linearGradient id="vine-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="${colors.kaede}"/><stop offset="35%" stop-color="${colors.tsubaki}"/><stop offset="70%" stop-color="${colors.anzu}"/><stop offset="100%" stop-color="${colors.leaf}"/></linearGradient></defs><path d="M0 20 C100 15 150 25 200 20 C250 15 300 25 350 20 C400 15 450 25 500 20 C550 15 580 25 600 20" stroke="url(#vine-grad)" stroke-width="1.8"/><circle cx="120" cy="17" r="5" fill="${colors.kaede}" opacity="0.5"/><circle cx="250" cy="23" r="6" fill="${colors.tsubaki}" opacity="0.45"/><circle cx="380" cy="17" r="5" fill="${colors.anzu}" opacity="0.5"/><circle cx="500" cy="21" r="4" fill="${colors.leaf}" opacity="0.45"/></svg>`;
}
