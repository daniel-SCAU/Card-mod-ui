/** Configuration for a single card-mod-ui instance. */
export interface CardModUIConfig {
  type: string;
  title?: string;
  /** Name / selector for the CSS scope target element (default: "ha-card") */
  target_element?: string;
  /** Saved CSS property values keyed by CSS variable / property id */
  styles: StyleSettings;
}

/** Map of CSS property id → raw CSS value string */
export type StyleSettings = Record<string, string>;

/** Descriptor for one editable CSS property shown in the UI panel. */
export interface CSSPropertyDescriptor {
  /** Unique id matching the CSS property name (e.g. "background-color") */
  id: string;
  /** Human-readable label displayed next to the control */
  label: string;
  /** The actual CSS property string written to the stylesheet */
  cssProperty: string;
  /** Kind of control to render */
  type: "color" | "range" | "select" | "text";
  /** Default CSS value */
  default: string;
  /** For range: minimum value */
  min?: number;
  /** For range: maximum value */
  max?: number;
  /** For range: step */
  step?: number;
  /** For range: CSS unit appended to the numeric value (e.g. "px", "em", "%") */
  unit?: string;
  /** For select: available options */
  options?: string[];
}

/** A logical grouping of CSS properties shown as a tab. */
export interface CSSPropertyGroup {
  id: string;
  label: string;
  icon: string;
  properties: CSSPropertyDescriptor[];
}

/** Home Assistant object shape (minimal, for typing) */
export interface HomeAssistant {
  language: string;
  themes: {
    darkMode: boolean;
  };
}
