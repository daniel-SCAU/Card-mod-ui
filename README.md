# Card Mod UI

A [Home Assistant](https://www.home-assistant.io/) custom Lovelace card that provides a **visual CSS configuration editor** for [lovelace-card-mod](https://github.com/thomasloven/lovelace-card-mod).

Instead of writing CSS by hand in YAML, you can use sliders, color pickers, and dropdowns to style your Lovelace cards, then copy the generated `card_mod` YAML into your dashboard configuration.

---

## Features

| Category | Controls |
|---|---|
| 🎨 Colors | Background, text color, border color |
| 🔤 Typography | Font size, weight, letter-spacing, line-height |
| 📐 Spacing | Padding (all sides individually) |
| 🔲 Borders | Border radius, width, style |
| ✨ Effects | Opacity, box-shadow, transition, filter |

- **Live preview** – the sample card updates immediately as you change properties.
- **YAML output** – generates the exact `card_mod` snippet to paste into your dashboard YAML.
- **Copy button** – copies the YAML to the clipboard with one click.
- **Reset controls** – reset individual properties or all properties at once.
- **Target element** – configure which CSS selector the styles target (default: `ha-card`).

---

## Installation

### Via HACS (recommended)

1. Open HACS → **Frontend** → ⋮ menu → **Custom repositories**.
2. Add `https://github.com/daniel-SCAU/Card-mod-ui` as a **Lovelace** repository.
3. Search for **Card Mod UI** and install it.
4. Add the resource to your Lovelace dashboard (HACS does this automatically in most setups).

### Manual

1. Download `dist/card-mod-ui.js` from the latest release.
2. Copy it to `config/www/card-mod-ui.js` in your Home Assistant instance.
3. Add a **Lovelace resource**:

```yaml
resources:
  - url: /local/card-mod-ui.js
    type: module
```

---

## Usage

Add the card to your Lovelace dashboard:

```yaml
type: custom:card-mod-ui
title: My Style Editor
target_element: ha-card
styles: {}
```

Adjust styles visually in the UI, then copy the generated `card_mod` block and paste it into the card you want to style:

```yaml
type: custom:weather-card
card_mod:
  style: |
    ha-card {
      background-color: #1e3a5f;
      color: #e3f2fd;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
```

---

## Development

```bash
# Install dependencies
npm install

# Build (outputs dist/card-mod-ui.js)
npm run build

# Watch mode
npm run dev

# Type check only
npm run typecheck
```

Requires Node.js ≥ 20 and npm ≥ 9.

---

## License

MIT © daniel-SCAU
