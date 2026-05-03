import type { StyleSettings, CSSPropertyDescriptor } from "./types.js";
import { CSS_PROPERTY_GROUPS } from "./css-properties.js";

/**
 * Build a CSS block string from the current style settings.
 * Only includes properties whose value differs from the descriptor's default.
 */
export function buildCSSBlock(
  styles: StyleSettings,
  targetElement: string,
): string {
  const lines: string[] = [];

  for (const group of CSS_PROPERTY_GROUPS) {
    for (const prop of group.properties) {
      const value = getEffectiveValue(prop, styles);
      if (value !== undefined && value !== prop.default) {
        lines.push(`  ${prop.cssProperty}: ${value};`);
      }
    }
  }

  if (lines.length === 0) return "";

  return `${targetElement} {\n${lines.join("\n")}\n}`;
}

/**
 * Resolve the effective CSS value string for a property descriptor
 * given the current style settings.
 */
export function getEffectiveValue(
  prop: CSSPropertyDescriptor,
  styles: StyleSettings,
): string | undefined {
  const raw = styles[prop.id];
  if (raw === undefined || raw === "") return undefined;

  if (prop.type === "range" && prop.unit) {
    return `${raw}${prop.unit}`;
  }
  return raw;
}

/**
 * Generate the full card_mod YAML snippet for clipboard copying.
 */
export function generateCardModYAML(
  styles: StyleSettings,
  targetElement: string,
): string {
  const cssBlock = buildCSSBlock(styles, targetElement);
  if (!cssBlock) return "# No custom styles applied yet.";

  return `card_mod:\n  style: |\n${cssBlock
    .split("\n")
    .map((l) => `    ${l}`)
    .join("\n")}`;
}

/**
 * Build an inline style string suitable for the live preview element.
 * Includes all non-default values.
 */
export function buildInlineStyles(styles: StyleSettings): string {
  const declarations: string[] = [];

  for (const group of CSS_PROPERTY_GROUPS) {
    for (const prop of group.properties) {
      const value = getEffectiveValue(prop, styles);
      if (value !== undefined) {
        declarations.push(`${prop.cssProperty}: ${value}`);
      }
    }
  }

  return declarations.join("; ");
}
