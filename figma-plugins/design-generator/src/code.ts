/**
 * CraftGarden Design Generator — Main plugin entry.
 *
 * Shows a UI panel with section checkboxes and generates the full
 * craftgarden.studio design directly in Figma.
 */

import { generateSections } from "./sections/index";

figma.showUI(__html__, { width: 360, height: 520 });

figma.ui.onmessage = async (msg: { type: string; sections?: string[] }) => {
  if (msg.type === "generate" && msg.sections) {
    const sections = msg.sections;
    const totalSteps = sections.length;

    figma.ui.postMessage({
      type: "progress",
      step: 0,
      total: totalSteps,
      label: "Starting generation...",
    });

    try {
      await generateSections({
        sections,
        onProgress: (step, total, label) => {
          figma.ui.postMessage({
            type: "progress",
            step,
            total,
            label,
          });
        },
      });

      figma.ui.postMessage({
        type: "complete",
        label: "Design generated successfully!",
      });

      figma.notify("CraftGarden design generated!");
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      figma.ui.postMessage({
        type: "error",
        label: `Error: ${message}`,
      });
      figma.notify(`Error: ${message}`, { error: true });
    }
  }

  if (msg.type === "cancel") {
    figma.closePlugin();
  }
};
