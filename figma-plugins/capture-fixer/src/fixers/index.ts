/**
 * fixers/index.ts
 * Orchestrator that runs all capture fixers in sequence.
 *
 * Each fixer targets a specific class of issues introduced by the
 * MCP generate_figma_design capture tool. They are run in a carefully
 * ordered sequence to avoid conflicts between fixes.
 */

import { fixSvgs } from "./svgReplacer";
import { fixShiori } from "./shioriAdder";
import { fixButtons } from "./buttonComponentizer";
import { fixAutoLayout } from "./autoLayoutFixer";
import { fixGradients } from "./gradientFixer";
import { fixBackdropBlur } from "./backdropBlurFixer";

export interface FixResult {
  name: string;
  count: number;
}

/**
 * Run all fixers in sequence on the given root node.
 *
 * Order rationale:
 * 1. Backdrop Blur — modifies nav fills/effects (independent)
 * 2. Gradient Fix — replaces hero fills (independent of layout)
 * 3. Button Fix — restyling before layout changes
 * 4. Auto Layout — restructures cards (after button fixes are in place)
 * 5. Shiori Ribbons — appends children to cards (after layout is set)
 * 6. SVG Replace — replaces image nodes (last, since other fixers might
 *    reference the raster nodes for context during identification)
 */
export async function runAllFixers(
  root: SceneNode,
  onProgress: (step: number, total: number, label: string) => void
): Promise<FixResult[]> {
  const fixers = [
    { name: "Backdrop Blur", fn: fixBackdropBlur },
    { name: "Gradient Fix", fn: fixGradients },
    { name: "Button Fix", fn: fixButtons },
    { name: "Auto Layout", fn: fixAutoLayout },
    { name: "Shiori Ribbons", fn: fixShiori },
    { name: "SVG Replace", fn: fixSvgs },
  ];

  const results: FixResult[] = [];

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
