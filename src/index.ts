/**
 * card-mod-ui – Visual configuration UI for lovelace-card-mod
 *
 * This is the main entry point bundled into dist/card-mod-ui.js.
 * It registers both the main card element and its editor element.
 */

import "./card-mod-ui.js";
import "./editor.js";

// Register the card with Home Assistant's custom card registry so it
// appears in the "Add Card" dialog when the file is loaded.
(window as unknown as Record<string, unknown>)["customCards"] ??= [];
(
  (window as unknown as Record<string, unknown>)["customCards"] as Array<{
    type: string;
    name: string;
    description: string;
    preview: boolean;
    documentationURL: string;
  }>
).push({
  type: "card-mod-ui",
  name: "Card Mod UI",
  description:
    "Visual CSS configuration editor for lovelace-card-mod. " +
    "Adjust colors, typography, spacing, borders and effects via sliders, " +
    "color pickers and dropdowns – then copy the generated card_mod YAML.",
  preview: true,
  documentationURL: "https://github.com/daniel-SCAU/Card-mod-ui",
});
