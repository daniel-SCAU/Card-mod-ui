import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { CardModUIConfig, HomeAssistant } from "./types.js";

/**
 * Editor panel shown inside the Home Assistant "Edit Card" dialog.
 * It exposes a simple form for configuring the card-mod-ui card itself
 * (title and target element).  The main CSS editing happens inside the
 * card-mod-ui element rendered on the dashboard.
 */
@customElement("card-mod-ui-editor")
export class CardModUIEditor extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private _config?: CardModUIConfig;

  static styles = css`
    :host {
      display: block;
      padding: 16px;
      font-family: var(--primary-font-family, "Roboto", sans-serif);
    }

    .row {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-bottom: 16px;
    }

    label {
      font-size: 12px;
      color: var(--secondary-text-color, #757575);
      font-weight: 500;
    }

    input[type="text"] {
      padding: 8px 10px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      font-size: 14px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #212121);
    }

    input[type="text"]:focus {
      outline: none;
      border-color: var(--primary-color, #03a9f4);
    }

    .hint {
      font-size: 11px;
      color: var(--secondary-text-color, #9e9e9e);
      margin-top: 2px;
    }
  `;

  setConfig(config: CardModUIConfig): void {
    this._config = config;
  }

  private _valueChanged(key: keyof CardModUIConfig, value: string): void {
    if (!this._config) return;
    const updated: CardModUIConfig = { ...this._config, [key]: value };
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: updated },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    if (!this._config) return nothing;

    return html`
      <div class="row">
        <label>Card title</label>
        <input
          type="text"
          .value=${this._config.title ?? ""}
          placeholder="Card Mod UI"
          @change=${(e: Event) =>
            this._valueChanged("title", (e.target as HTMLInputElement).value)}
        />
      </div>

      <div class="row">
        <label>Target CSS element</label>
        <input
          type="text"
          .value=${this._config.target_element ?? "ha-card"}
          placeholder="ha-card"
          @change=${(e: Event) =>
            this._valueChanged(
              "target_element",
              (e.target as HTMLInputElement).value,
            )}
        />
        <span class="hint">
          The CSS selector to target in the generated card_mod stylesheet.
          Typical values: <code>ha-card</code>, <code>.card-content</code>
        </span>
      </div>
    `;
  }
}
