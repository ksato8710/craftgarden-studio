/**
 * Navigation section generator.
 * Creates a full-width navigation bar instance on the page.
 */

import { createNavComponent } from "../components/navComponent";

export async function generateNavigation(): Promise<FrameNode> {
  const navComponent = await createNavComponent();

  // Position the component at the top of the page
  navComponent.x = 0;
  navComponent.y = 0;

  // Create an instance for the section and remove the component
  // (or keep both — the component is reusable)
  const wrapper = figma.createFrame();
  wrapper.name = "Section / Navigation";
  wrapper.resize(1440, 64);
  wrapper.fills = [];
  wrapper.clipsContent = false;

  // Move component into a component page section for organization
  navComponent.x = 0;
  navComponent.y = 0;

  // Create an instance of the nav component
  const instance = navComponent.createInstance();
  instance.x = 0;
  instance.y = 0;
  wrapper.appendChild(instance);

  // Store the component separately on the page for reference
  navComponent.x = 1600;
  navComponent.y = 0;

  return wrapper;
}
