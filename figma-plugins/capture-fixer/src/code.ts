/**
 * code.ts — Main entry point for the CraftGarden Capture Fixer plugin.
 *
 * Listens for messages from the UI panel and dispatches fix operations
 * on either the current selection or the entire page.
 */

import { runAllFixers, FixResult } from "./fixers";

/* ── Show the plugin UI ── */

figma.showUI(__html__, { width: 360, height: 440 });

/* ── Message handling ── */

figma.ui.onmessage = async (msg: { type: string }) => {
  if (msg.type === "fix-selection") {
    await handleFixSelection();
  } else if (msg.type === "fix-page") {
    await handleFixPage();
  } else if (msg.type === "cancel") {
    figma.closePlugin();
  }
};

/* ── Fix the current selection ── */

async function handleFixSelection(): Promise<void> {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.ui.postMessage({
      type: "error",
      message: "No selection. Please select a frame to fix.",
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

/* ── Fix the entire page ── */

async function handleFixPage(): Promise<void> {
  const page = figma.currentPage;
  const children = page.children;

  if (children.length === 0) {
    figma.ui.postMessage({
      type: "error",
      message: "Current page is empty.",
    });
    return;
  }

  figma.ui.postMessage({ type: "started", target: page.name });

  // Run fixers on each top-level child
  const aggregated: Record<string, number> = {};

  for (const child of children) {
    const results = await runAllFixers(child, (step, total, label) => {
      figma.ui.postMessage({ type: "progress", step, total, label });
    });

    for (const r of results) {
      aggregated[r.name] = (aggregated[r.name] || 0) + r.count;
    }
  }

  const results: FixResult[] = Object.entries(aggregated).map(
    ([name, count]) => ({ name, count })
  );

  sendResults(results, page.name);
}

/* ── Send results to UI ── */

function sendResults(results: FixResult[], target: string): void {
  const totalFixes = results.reduce(
    (sum, r) => sum + Math.max(0, r.count),
    0
  );

  figma.ui.postMessage({
    type: "results",
    results,
    target,
    totalFixes,
  });

  figma.notify(
    `Capture Fixer: ${totalFixes} fix${totalFixes !== 1 ? "es" : ""} applied to "${target}".`
  );
}
