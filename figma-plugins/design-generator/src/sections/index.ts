/**
 * Section orchestrator.
 * Generates selected sections in order and stacks them vertically.
 */

import { createTokensAndStyles } from "../tokens/index";
import { createAllBotanicalComponents } from "../components/botanicalMotifs";
import { createCardComponentSet } from "../components/cardComponent";
import { createCtaButton, createFilterButtonSet } from "../components/buttonComponents";
import { createNavComponent } from "../components/navComponent";
import { generateNavigation } from "./navigation";
import { generateHero } from "./hero";
import { generateProducts } from "./products";
import { generatePhilosophy } from "./philosophy";
import { generateFooter } from "./footer";

export interface GenerateOptions {
  sections: string[];
  onProgress?: (step: number, total: number, label: string) => void;
}

/**
 * Generate all selected sections onto the current page.
 * Sections are stacked vertically with no gap (they tile seamlessly).
 */
export async function generateSections(options: GenerateOptions): Promise<void> {
  const { sections, onProgress } = options;
  const totalSteps = sections.length;
  let currentStep = 0;

  function progress(label: string) {
    currentStep++;
    onProgress?.(currentStep, totalSteps, label);
  }

  let yOffset = 0;

  // Create a dedicated page
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
        // Create all components and place them in a "Components" area
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

  // Zoom to fit the generated content
  figma.viewport.scrollAndZoomIntoView(page.children);
}
