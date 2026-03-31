# Homelab Console Theme

A branded theme system for homelab dashboards, internal tools, and matching visual assets. The core look is a rugged, future-retro operations console: industrial without feeling grimy, technical without becoming sterile, and expressive without sacrificing readability.

This repository defines one shared design language with two skins:

- `frontier-ops-console`: the primary brand
- `light-modern-ops`: the bright companion variant

The system is token-driven. Components inherit from CSS custom properties so the same brand can be recreated across apps, mockups, dashboards, launch screens, documentation, and generated graphics.

## Brand Personality

- Industrial, maintained, and dependable
- Personal homelab energy rather than enterprise SaaS polish
- Future-retro control room feel with subtle wear, rivets, rails, and panel housings
- Dense with signal, but still calm and legible
- Technical labels feel instrument-grade; content still feels human

## Brand Keywords

- frontier
- ops
- console
- panelized
- machine-grade
- telemetry
- conduit
- service bay
- field notes
- maintained systems
- dark steel
- cool cyan glow

## Core Design Principles

- Use structure, framing, and texture for personality instead of relying on loud color alone.
- Surfaces should feel engineered: clipped corners, top stripes, rails, grooves, rivets, and inset highlights are all part of the language.
- Bright accents are used as signal, not decoration.
- Typography separates narrative voice from system voice: grotesk for UI/content, mono for labels, telemetry, and operational metadata.
- Motion should feel mechanical and deliberate: reveals, sheens, pulses, and progress fills rather than playful bounce.

## CSS Custom Properties

These are the shared token names used throughout the theme system.

```css
:root {
  --bg: #121a22;
  --surface: #273845;
  --surface-elevated: #334757;
  --primary: #67b7ff;
  --secondary: #5fd5e6;
  --accent-warm: #9aabc0;
  --success: #4ade80;
  --warning: #ffb027;
  --danger: #ff5a5a;
  --text: #edf5fb;
  --text-muted: #afbfce;
  --border: rgba(155, 178, 198, 0.24);
  --input-bg: rgba(21, 31, 40, 0.88);
  --focus-ring: rgba(103, 183, 255, 0.5);
  --shadow-sm: 0 10px 18px rgba(5, 9, 12, 0.2);
  --shadow-md: 0 18px 28px rgba(5, 9, 12, 0.25);
  --shadow-lg: 0 28px 44px rgba(5, 9, 12, 0.3);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --space-1: 0.4rem;
  --space-2: 0.7rem;
  --space-3: 1rem;
  --space-4: 1.4rem;
  --space-5: 1.8rem;
  --space-6: 2.4rem;
  --space-7: 3.2rem;
  --space-8: 4.5rem;
  --page-max: 1440px;
  --font-body: "Space Grotesk", "Segoe UI", sans-serif;
  --font-heading: "Space Grotesk", "Segoe UI", sans-serif;
  --font-mono: "IBM Plex Mono", "JetBrains Mono", monospace;
  --text-body: 1rem;
  --text-body-lg: 1.125rem;
  --text-caption: 0.78rem;
  --text-title-sm: 1.125rem;
  --text-title-md: 1.4rem;
  --text-title-lg: clamp(2.8rem, 5vw, 5rem);
}
```

## Theme Variants

### Frontier Ops Console

Primary brand skin. This is the default visual identity for the repo.

```css
"frontier-ops-console": {
  label: "Frontier Ops Console",
  description: "Future-retro command surfaces with warm industrial undertones, engineered housings, and subtle service-era wear.",
  tokens: {
    bg: "#111821",
    surface: "#24313d",
    "surface-elevated": "#314252",
    primary: "#67b7ff",
    secondary: "#5fd5e6",
    "accent-warm": "#d4a373",
    success: "#4ade80",
    warning: "#ffb027",
    danger: "#ff5a5a",
    text: "#edf5fb",
    "text-muted": "#bfd0de",
    border: "rgba(170, 193, 214, 0.28)",
    "input-bg": "rgba(18, 27, 35, 0.9)",
    "focus-ring": "rgba(103, 183, 255, 0.5)",
    "shadow-sm": "0 10px 18px rgba(5, 9, 12, 0.2)",
    "shadow-md": "0 18px 28px rgba(5, 9, 12, 0.25)",
    "shadow-lg": "0 28px 44px rgba(5, 9, 12, 0.3)",
    "radius-sm": "8px",
    "radius-md": "12px",
    "radius-lg": "16px",
    "radius-xl": "20px",
    "font-body": "\"Space Grotesk\", \"Segoe UI\", sans-serif",
    "font-heading": "\"Space Grotesk\", \"Segoe UI\", sans-serif",
    "font-mono": "\"IBM Plex Mono\", \"JetBrains Mono\", monospace",
    "button-primary-text": "#f4f8fb",
    "button-secondary-text": "#e6edf3",
    "button-ghost-text": "#e6edf3",
    "button-danger-text": "#fff5f5",
    "link-color": "#77b7ff",
    "service-stripe-opacity": "0.98",
    "scanline-opacity": "0.022"
  }
}
```

### Light Modern Ops

Light companion skin. Keeps the same construction and hierarchy, but swaps mood for brighter daytime readability.

```css
"light-modern-ops": {
  label: "Light Modern Ops",
  description: "A bright companion to Frontier Ops Console with the same measured structure, system framing, and cleaner daytime readability.",
  tokens: {
    bg: "#e6eef7",
    surface: "#fbfdff",
    "surface-elevated": "#ffffff",
    primary: "#1f5fd6",
    secondary: "#0f8f9c",
    success: "#1d8d53",
    warning: "#b8760c",
    danger: "#c8434f",
    text: "#142033",
    "text-muted": "#4d647d",
    border: "rgba(95, 126, 161, 0.24)",
    "input-bg": "rgba(255, 255, 255, 0.96)",
    "focus-ring": "rgba(31, 95, 214, 0.28)",
    "shadow-sm": "0 10px 24px rgba(80, 108, 139, 0.12)",
    "shadow-md": "0 18px 38px rgba(80, 108, 139, 0.14)",
    "shadow-lg": "0 28px 54px rgba(80, 108, 139, 0.17)",
    "radius-sm": "8px",
    "radius-md": "12px",
    "radius-lg": "18px",
    "radius-xl": "26px",
    "font-body": "\"Space Grotesk\", \"Segoe UI\", sans-serif",
    "font-heading": "\"Space Grotesk\", \"Segoe UI\", sans-serif",
    "font-mono": "\"IBM Plex Mono\", \"SFMono-Regular\", monospace",
    "button-primary-text": "#ffffff",
    "button-secondary-text": "#162235",
    "button-ghost-text": "#162235",
    "button-danger-text": "#fff8f8",
    "link-color": "#2563eb",
    "service-stripe-opacity": "0.92",
    "scanline-opacity": "0"
  }
}
```

## Typography

| Role | Treatment |
|------|-----------|
| Hero / identity heading | `clamp(2.8rem, 5vw, 5rem)`, weight 800, tight leading, slight negative tracking |
| Section heading | uppercase, bold, engineered feel |
| Component title | around `1.125rem`, bold |
| Body copy | `1rem`, line-height around `1.6` |
| Large body / intro copy | `1.125rem`, line-height around `1.7` |
| Labels / telemetry | mono, uppercase, 0.78rem, heavier weight, generous letter spacing |
| Code / terminal text | mono, around `0.92rem`, line-height around `1.55` |

- **Body and headings**: `"Space Grotesk", "Segoe UI", sans-serif`
- **System labels and telemetry**: `"IBM Plex Mono", "JetBrains Mono", monospace`
- Heading tone should feel compact, punchy, and mechanical.
- Supporting copy should stay readable and calm to balance the dense visual framing.

## Color Palette

### Frontier Ops Console Core

| Role | Hex / Value | Usage |
|------|-------------|-------|
| Background | `#111821` | App shell, atmospheric backdrop |
| Surface | `#24313d` | Standard panels and cards |
| Elevated surface | `#314252` | Raised housings and showcase cards |
| Primary accent | `#67b7ff` | Primary actions, glows, active signal |
| Secondary accent | `#5fd5e6` | Utility signal, rails, stripes, highlights |
| Warm accent | `#d4a373` | Industrial warmth, contrast against cool palette |
| Text | `#edf5fb` | Primary content |
| Muted text | `#bfd0de` | Notes, metadata, lower-priority guidance |
| Border | `rgba(170, 193, 214, 0.28)` | Panel seams, inputs, dividers |

### Semantic Status Colors

| State | Frontier Ops | Light Modern Ops | Usage |
|------|---------------|------------------|-------|
| Success | `#4ade80` | `#1d8d53` | Healthy, stable, complete |
| Warning | `#ffb027` | `#b8760c` | Caution, load, maintenance |
| Danger | `#ff5a5a` | `#c8434f` | Review needed, failure, offline |
| Info / primary | `#67b7ff` | `#1f5fd6` | Default signal and active emphasis |
| Secondary signal | `#5fd5e6` | `#0f8f9c` | Alternate progress, trims, glow |

## Materials, Texture, and Atmosphere

- Backgrounds use layered gradients, glows, and scanlines rather than flat fills.
- Panels often include a thin top stripe, inset highlight, dark seam, and subtle rivet detail.
- Corners are sometimes clipped rather than fully rounded to reinforce the fabricated-housing feel.
- Decorative motifs include rails, conduits, grooves, couplings, hazard stripes, and inspection labels.
- Texture should be subtle. It should read as engineered material, not noise.

## Spacing & Layout

- **Max width**: `1440px`
- **Base spacing scale**:
  - `--space-1`: `0.4rem`
  - `--space-2`: `0.7rem`
  - `--space-3`: `1rem`
  - `--space-4`: `1.4rem`
  - `--space-5`: `1.8rem`
  - `--space-6`: `2.4rem`
  - `--space-7`: `3.2rem`
  - `--space-8`: `4.5rem`
- **Comfortable density** is the default.
- **Dense mode** compresses the spacing scale without changing the overall component language.
- Panels and cards generally use medium-to-generous internal padding so the visual framing has room to breathe.

## Radius & Shadow

- **Radii**:
  - Small: `8px`
  - Medium: `12px`
  - Large: `16px` to `18px`
  - Extra large: `20px` to `26px`
- **Shadow language**:
  - Low, broad, cool-dark shadows
  - Frequent inset top highlight plus inset bottom seam
  - Elevation should feel weighty and metallic, not soft or fluffy

## Components

### Panels and Cards

- Built from `--surface` and `--surface-elevated`
- Bordered with low-opacity cool seams
- Often include:
  - top accent stripe
  - clipped corner silhouette
  - rivet detail
  - conduit-style side rail
  - inset highlight and shadow
- Hover behavior lifts slightly and intensifies shadow

### Buttons

| Variant | Background | Border | Text |
|--------|------------|--------|------|
| Primary | Blue gradient from `--primary` | tinted primary border | `--button-primary-text` |
| Secondary | Elevated surface gradient | secondary-tinted border | `--button-secondary-text` |
| Ghost | Translucent surface fill | base border | `--button-ghost-text` |
| Danger | danger-tinted surface | danger-tinted border | `--button-danger-text` |

- Buttons feel like machine controls, not flat web buttons.
- Corners are rounded but firm.
- Hover uses lift and stronger glow-shadow.

### Inputs and Selects

- Height is roughly `3rem`
- Use `--input-bg` with subtle gradient
- 1px cool border, inset highlight, strong readability
- Focus state uses `--focus-ring`

### Switches

- Pill-shaped housing with metallic knob
- On state shifts to primary-tinted track
- Motion should feel like a mechanical slide

### Tabs

- Rounded pill format
- Mono uppercase labels
- Active tab lifts slightly and becomes brighter

### Badges

- Full pill radius
- Mono type
- Tinted fills based on semantic state
- Used for health, automation, queue, and status labels

### Alerts

- Softly tinted surface panels
- Warning and danger alerts add stronger top-strip treatment
- Danger and warning can use hazard-strip cues

### Progress Bars

- Rounded track with inset depth
- Fill uses `--primary` or `--secondary`
- Fine internal scanline texture reinforces instrumentation feel

### Tables and Terminal Blocks

- Tables use mono uppercase headers and restrained row hover
- Terminal/code blocks are dark instrument panels with metadata chips
- Decorative labels like `PRESSURE LOG` fit the brand voice

### Navigation

- Sidebar selections use a primary-tinted selected state
- Top nav links stay restrained until hover
- Navigation should feel embedded into the panel system, not like detached website chrome

## Motion

- Reveal motion uses upward fades with slight scale correction
- Progress bars animate from the left edge
- Theme switching uses a quick sheen / retheme pass
- Favorite or active states can pulse briefly
- Orb drift and indicator pulses are acceptable ambient motion
- Easing should feel deliberate and polished, not bouncy

Recommended easing families:

- `cubic-bezier(0.25, 1, 0.5, 1)`
- `cubic-bezier(0.16, 1, 0.3, 1)`
- `cubic-bezier(0.22, 1, 0.36, 1)`

Respect `prefers-reduced-motion` by disabling reveal and decorative animation.

## Asset Direction

When recreating matching branded assets, use these rules:

- Favor control panels, housings, instrumentation, rails, and viewport framing.
- Use cool steel-charcoal foundations with cyan and blue signal light.
- Add a small amount of warm industrial contrast where needed.
- Use mono labels for coordinates, diagnostics, specs, and metadata.
- Prefer clipped plates, bolts, grooves, and layered materials over glassmorphism.
- Surfaces should feel fabricated and maintained, not dystopian or damaged.
- Avoid generic neon cyberpunk, glossy gaming UI, or purple sci-fi tropes.

## Do / Don't

### Do

- Build from tokens first
- Keep strong hierarchy between narrative text and telemetry labels
- Use texture and framing sparingly but consistently
- Let accents behave like status signals
- Preserve the "maintained machine" feeling

### Don't

- Don't flatten the system into plain SaaS cards
- Don't overuse accent colors as large fills
- Don't replace mono utility text with soft marketing typography
- Don't introduce playful rounded toy-like controls
- Don't make the industrial details so strong that readability suffers

## Short Prompt for Recreating the Brand

> Design a homelab operations console theme with a future-retro industrial control-room aesthetic. Use dark steel-charcoal surfaces, cool blue and cyan signal accents, mono telemetry labels, clipped panel corners, rivet and conduit details, restrained hazard-strip cues, and readable Space Grotesk typography. The interface should feel maintained, reliable, personal, and technical rather than corporate, dystopian, or flashy.
