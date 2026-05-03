import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { CSS_PROPERTY_GROUPS } from "./css-properties.js";
import { generateCardModYAML, buildInlineStyles } from "./yaml-generator.js";
import type {
  CardModUIConfig,
  StyleSettings,
  CSSPropertyDescriptor,
  HomeAssistant,
} from "./types.js";

@customElement("card-mod-ui")
export class CardModUI extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private _config?: CardModUIConfig;
  @state() private _activeGroup = "colors";
  @state() private _copied = false;
  @state() private _styles: StyleSettings = {};
  @state() private _targetElement = "ha-card";

  static styles = css`
    :host {
      --cmu-bg: #f5f5f5;
      --cmu-surface: #ffffff;
      --cmu-border: #e0e0e0;
      --cmu-primary: #03a9f4;
      --cmu-primary-dark: #0288d1;
      --cmu-text: #212121;
      --cmu-text-secondary: #757575;
      --cmu-radius: 12px;
      --cmu-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
      display: block;
      font-family: var(--primary-font-family, "Roboto", sans-serif);
    }

    .card-wrapper {
      background: var(--cmu-surface);
      border-radius: var(--cmu-radius);
      box-shadow: var(--cmu-shadow);
      overflow: hidden;
    }

    /* ── Header ──────────────────────────────────────────────── */
    .header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 16px 20px;
      background: linear-gradient(135deg, var(--cmu-primary) 0%, var(--cmu-primary-dark) 100%);
      color: #fff;
    }

    .header-icon {
      font-size: 22px;
      line-height: 1;
    }

    .header h1 {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.3px;
    }

    .header p {
      margin: 2px 0 0;
      font-size: 12px;
      opacity: 0.85;
    }

    /* ── Layout ─────────────────────────────────────────────── */
    .editor-layout {
      display: grid;
      grid-template-columns: 200px 1fr;
      grid-template-rows: 1fr auto;
      min-height: 420px;
    }

    /* ── Sidebar ─────────────────────────────────────────────── */
    .sidebar {
      grid-row: 1 / 3;
      border-right: 1px solid var(--cmu-border);
      background: var(--cmu-bg);
      padding: 12px 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .sidebar-label {
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: var(--cmu-text-secondary);
      padding: 4px 8px 8px;
    }

    .group-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 9px 12px;
      border: none;
      border-radius: 8px;
      background: transparent;
      cursor: pointer;
      font-size: 13px;
      color: var(--cmu-text);
      text-align: left;
      transition: background 0.15s, color 0.15s;
    }

    .group-btn:hover {
      background: rgba(0, 0, 0, 0.06);
    }

    .group-btn.active {
      background: var(--cmu-primary);
      color: #fff;
      font-weight: 500;
    }

    .group-icon {
      font-size: 16px;
      line-height: 1;
      flex-shrink: 0;
    }

    /* ── Properties Panel ────────────────────────────────────── */
    .properties-panel {
      padding: 20px 24px;
      overflow-y: auto;
      max-height: 400px;
    }

    .panel-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--cmu-text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.6px;
      margin-bottom: 16px;
    }

    .property-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8px;
      margin-bottom: 14px;
    }

    .property-label {
      font-size: 13px;
      color: var(--cmu-text);
    }

    .property-control {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    input[type="color"] {
      width: 40px;
      height: 32px;
      border: 1px solid var(--cmu-border);
      border-radius: 6px;
      padding: 2px;
      cursor: pointer;
      background: none;
    }

    input[type="range"] {
      flex: 1;
      accent-color: var(--cmu-primary);
      cursor: pointer;
    }

    .range-value {
      min-width: 38px;
      text-align: right;
      font-size: 12px;
      color: var(--cmu-text-secondary);
      font-variant-numeric: tabular-nums;
    }

    select {
      flex: 1;
      padding: 6px 8px;
      border: 1px solid var(--cmu-border);
      border-radius: 6px;
      background: var(--cmu-surface);
      font-size: 13px;
      cursor: pointer;
      color: var(--cmu-text);
    }

    input[type="text"] {
      flex: 1;
      padding: 6px 8px;
      border: 1px solid var(--cmu-border);
      border-radius: 6px;
      background: var(--cmu-surface);
      font-size: 13px;
      color: var(--cmu-text);
    }

    .reset-btn {
      width: 24px;
      height: 24px;
      border: none;
      border-radius: 4px;
      background: transparent;
      cursor: pointer;
      color: var(--cmu-text-secondary);
      font-size: 14px;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: background 0.15s;
    }

    .reset-btn:hover {
      background: rgba(0, 0, 0, 0.08);
    }

    /* ── Preview ─────────────────────────────────────────────── */
    .preview-section {
      padding: 20px 24px;
      border-top: 1px solid var(--cmu-border);
      background: var(--cmu-bg);
    }

    .preview-title {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      color: var(--cmu-text-secondary);
      margin-bottom: 12px;
    }

    .preview-card {
      background: #ffffff;
      border-radius: 12px;
      padding: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      max-width: 320px;
      transition: all 0.2s ease;
    }

    .preview-card-title {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .preview-card-content {
      font-size: 12px;
      color: var(--cmu-text-secondary);
      line-height: 1.5;
    }

    /* ── Output ──────────────────────────────────────────────── */
    .output-section {
      padding: 16px 24px;
      border-top: 1px solid var(--cmu-border);
    }

    .output-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    .output-title {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      color: var(--cmu-text-secondary);
    }

    .copy-btn {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 6px 12px;
      border: none;
      border-radius: 6px;
      background: var(--cmu-primary);
      color: #fff;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.15s, transform 0.1s;
    }

    .copy-btn:hover {
      background: var(--cmu-primary-dark);
    }

    .copy-btn:active {
      transform: scale(0.97);
    }

    .copy-btn.copied {
      background: #4caf50;
    }

    .reset-all-btn {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 6px 12px;
      border: 1px solid var(--cmu-border);
      border-radius: 6px;
      background: transparent;
      color: var(--cmu-text-secondary);
      font-size: 12px;
      cursor: pointer;
      transition: background 0.15s;
      margin-right: 8px;
    }

    .reset-all-btn:hover {
      background: rgba(0, 0, 0, 0.06);
    }

    pre.yaml-output {
      margin: 0;
      padding: 12px 14px;
      background: #1e1e2e;
      color: #cdd6f4;
      border-radius: 8px;
      font-size: 12px;
      font-family: "Fira Code", "Cascadia Code", "Consolas", monospace;
      line-height: 1.6;
      overflow-x: auto;
      white-space: pre;
      max-height: 180px;
      overflow-y: auto;
    }

    /* ── Target selector ─────────────────────────────────────── */
    .target-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 24px;
      border-bottom: 1px solid var(--cmu-border);
      background: var(--cmu-bg);
      font-size: 13px;
    }

    .target-row label {
      color: var(--cmu-text-secondary);
      flex-shrink: 0;
    }

    .target-row input {
      flex: 1;
      max-width: 200px;
      padding: 5px 8px;
      border: 1px solid var(--cmu-border);
      border-radius: 6px;
      font-size: 13px;
      font-family: monospace;
      background: var(--cmu-surface);
      color: var(--cmu-text);
    }

    /* ── Responsive ──────────────────────────────────────────── */
    @media (max-width: 500px) {
      .editor-layout {
        grid-template-columns: 1fr;
      }

      .sidebar {
        grid-row: auto;
        border-right: none;
        border-bottom: 1px solid var(--cmu-border);
        flex-direction: row;
        flex-wrap: wrap;
        padding: 8px;
      }

      .sidebar-label {
        display: none;
      }

      .group-btn {
        padding: 7px 10px;
        font-size: 12px;
      }
    }
  `;

  setConfig(config: CardModUIConfig): void {
    this._config = config;
    this._styles = { ...(config.styles ?? {}) };
    this._targetElement = config.target_element ?? "ha-card";
  }

  static getConfigElement(): HTMLElement {
    return document.createElement("card-mod-ui-editor");
  }

  static getStubConfig(): CardModUIConfig {
    return {
      type: "custom:card-mod-ui",
      styles: {},
    };
  }

  getCardSize(): number {
    // Card renders roughly 650 px; HA masonry uses ~50 px per unit.
    return 13;
  }

  private _handleGroupClick(groupId: string): void {
    this._activeGroup = groupId;
  }

  private _handlePropertyChange(propId: string, value: string): void {
    this._styles = { ...this._styles, [propId]: value };
    this._fireConfigChanged();
  }

  private _resetProperty(propId: string): void {
    const next = { ...this._styles };
    delete next[propId];
    this._styles = next;
    this._fireConfigChanged();
  }

  private _resetAll(): void {
    this._styles = {};
    this._fireConfigChanged();
  }

  private _handleTargetChange(e: Event): void {
    const raw = (e.target as HTMLInputElement).value.trim();
    this._targetElement = raw || "ha-card";
    this._fireConfigChanged();
  }

  private _fireConfigChanged(): void {
    if (!this._config) return;
    const cfg = this._config;
    const event = new CustomEvent("config-changed", {
      detail: {
        config: {
          ...cfg,
          type: cfg.type ?? "custom:card-mod-ui",
          styles: this._styles,
          target_element: this._targetElement,
        } satisfies CardModUIConfig,
      },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  private async _copyYAML(): Promise<void> {
    const yaml = generateCardModYAML(this._styles, this._targetElement);
    try {
      await navigator.clipboard.writeText(yaml);
    } catch {
      // Fallback for environments without clipboard API
      const ta = document.createElement("textarea");
      ta.value = yaml;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    this._copied = true;
    setTimeout(() => {
      this._copied = false;
    }, 2000);
  }

  private _renderColorControl(prop: CSSPropertyDescriptor) {
    const value = this._styles[prop.id] ?? prop.default;
    return html`
      <div class="property-control">
        <input
          type="color"
          .value=${value}
          @input=${(e: InputEvent) =>
            this._handlePropertyChange(
              prop.id,
              (e.target as HTMLInputElement).value,
            )}
        />
        <button
          class="reset-btn"
          title="Reset to default"
          @click=${() => this._resetProperty(prop.id)}
        >↺</button>
      </div>
    `;
  }

  private _renderRangeControl(prop: CSSPropertyDescriptor) {
    const raw = this._styles[prop.id] ?? prop.default;
    const displayValue = `${raw}${prop.unit ?? ""}`;
    return html`
      <div class="property-control">
        <input
          type="range"
          min=${prop.min ?? 0}
          max=${prop.max ?? 100}
          step=${prop.step ?? 1}
          .value=${String(raw)}
          @input=${(e: InputEvent) =>
            this._handlePropertyChange(
              prop.id,
              (e.target as HTMLInputElement).value,
            )}
        />
        <span class="range-value">${displayValue}</span>
        <button
          class="reset-btn"
          title="Reset to default"
          @click=${() => this._resetProperty(prop.id)}
        >↺</button>
      </div>
    `;
  }

  private _renderSelectControl(prop: CSSPropertyDescriptor) {
    const value = this._styles[prop.id] ?? prop.default;
    return html`
      <div class="property-control">
        <select
          .value=${value}
          @change=${(e: Event) =>
            this._handlePropertyChange(
              prop.id,
              (e.target as HTMLSelectElement).value,
            )}
        >
          ${(prop.options ?? []).map(
            (opt) => html`<option value=${opt} ?selected=${opt === value}>${opt}</option>`,
          )}
        </select>
        <button
          class="reset-btn"
          title="Reset to default"
          @click=${() => this._resetProperty(prop.id)}
        >↺</button>
      </div>
    `;
  }

  private _renderTextControl(prop: CSSPropertyDescriptor) {
    const value = this._styles[prop.id] ?? prop.default;
    return html`
      <div class="property-control">
        <input
          type="text"
          .value=${value}
          placeholder=${prop.default}
          @change=${(e: Event) =>
            this._handlePropertyChange(
              prop.id,
              (e.target as HTMLInputElement).value,
            )}
        />
        <button
          class="reset-btn"
          title="Reset to default"
          @click=${() => this._resetProperty(prop.id)}
        >↺</button>
      </div>
    `;
  }

  private _renderPropertyControl(prop: CSSPropertyDescriptor) {
    switch (prop.type) {
      case "color":
        return this._renderColorControl(prop);
      case "range":
        return this._renderRangeControl(prop);
      case "select":
        return this._renderSelectControl(prop);
      case "text":
        return this._renderTextControl(prop);
      default:
        return nothing;
    }
  }

  render() {
    if (!this._config) return nothing;

    const activeGroup = CSS_PROPERTY_GROUPS.find(
      (g) => g.id === this._activeGroup,
    );
    const inlineStyles = buildInlineStyles(this._styles);
    const yamlOutput = generateCardModYAML(this._styles, this._targetElement);
    const title = this._config.title ?? "Card Mod UI";

    return html`
      <div class="card-wrapper">
        <!-- Header -->
        <div class="header">
          <span class="header-icon">🎨</span>
          <div>
            <h1>${title}</h1>
            <p>Visual CSS editor for lovelace-card-mod</p>
          </div>
        </div>

        <!-- Target element selector -->
        <div class="target-row">
          <label>Target element:</label>
          <input
            type="text"
            .value=${this._targetElement}
            placeholder="ha-card"
            @change=${this._handleTargetChange}
          />
        </div>

        <!-- Main editor layout -->
        <div class="editor-layout">
          <!-- Sidebar: group tabs -->
          <nav class="sidebar">
            <div class="sidebar-label">Properties</div>
            ${CSS_PROPERTY_GROUPS.map(
              (group) => html`
                <button
                  class="group-btn ${this._activeGroup === group.id
                    ? "active"
                    : ""}"
                  @click=${() => this._handleGroupClick(group.id)}
                >
                  <span class="group-icon">${group.icon}</span>
                  ${group.label}
                </button>
              `,
            )}
          </nav>

          <!-- Properties panel -->
          <div class="properties-panel">
            <div class="panel-title">
              ${activeGroup?.icon} ${activeGroup?.label}
            </div>
            ${activeGroup?.properties.map(
              (prop) => html`
                <div class="property-row">
                  <span class="property-label">${prop.label}</span>
                  ${this._renderPropertyControl(prop)}
                </div>
              `,
            )}
          </div>

          <!-- Preview -->
          <div class="preview-section">
            <div class="preview-title">Live Preview</div>
            <div class="preview-card" style=${inlineStyles || ""}>
              <div class="preview-card-title">Example Card</div>
              <div class="preview-card-content">
                This preview shows how your card will look with the applied
                styles. Adjust the properties on the right to see changes in
                real time.
              </div>
            </div>
          </div>
        </div>

        <!-- YAML Output -->
        <div class="output-section">
          <div class="output-header">
            <span class="output-title">Generated card_mod YAML</span>
            <div style="display:flex;align-items:center">
              <button class="reset-all-btn" @click=${this._resetAll}>
                ↺ Reset all
              </button>
              <button
                class="copy-btn ${this._copied ? "copied" : ""}"
                @click=${this._copyYAML}
              >
                ${this._copied ? "✓ Copied!" : "📋 Copy YAML"}
              </button>
            </div>
          </div>
          <pre class="yaml-output">${yamlOutput}</pre>
        </div>
      </div>
    `;
  }
}
