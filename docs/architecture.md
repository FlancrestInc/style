# Universal Windows-Inspired Design System Architecture

## Decision

Turn this repository into a CSS-first, framework-neutral design-system package with an HTML demo/catalogue. The first consumer is Disc Steward's server-rendered Python UI, so the system must not require a JavaScript framework or client-side router. Framework adapters are optional packages added only when a real consumer needs them.

**Resolved implementation decisions (2026-07-14):** use the `@flancrestinc/win31-*` scope; begin with CSS only and defer React; use local packed/file artifacts during development and move to GitHub Packages after the API stabilizes; make the teal-workspace, neutral-gray-window, cobalt-title-bar treatment the default preset; ship only original or open-licensed assets; and begin implementation with tokens, base/reset, layout primitives, and Window/Button/Form/Table styling before overlay or routing enhancements.

`style` is currently a mixture of three things: a static Windows 3.1-inspired demonstration application (`index.html` plus `styles.css`), a theme specification (`THEME.md`), and a Jellyfin-specific override stylesheet (`jellyfin.css`). It is not yet a publishable package or component library. Disc Steward does not import it; it independently embeds a closely related Windows-inspired token set and component CSS in `disc_steward/web.py`.

## Recommended repository shape

Use a small npm workspace, with CSS as the primary public artifact:

```text
style/
  package.json                 # private workspace root; scripts and shared dev tools
  packages/
    tokens/                    # @flancrestinc/win31-tokens
      src/tokens.css           # semantic custom properties and theme contracts
      src/themes/default.css   # default Windows-inspired light theme
      src/themes/*.css         # optional named theme presets
    core/                      # @flancrestinc/win31-core
      src/reset.css
      src/base.css             # element defaults, type, accessibility utilities
      src/layout.css           # stack, cluster, grid, shell/workspace helpers
      src/components.css       # stable CSS component classes
      src/index.css            # documented aggregate entry point
    motion/                    # @flancrestinc/win31-motion
      src/motion.css           # keyframes, motion classes, reduced-motion policy
    icons/                     # @flancrestinc/win31-icons
      src/*.svg                # authored/open-license SVGs and licence metadata
      index.js                 # optional icon-name map, no framework dependency
  demo/                        # static catalogue; consumes published package entry points
  docs/                        # architecture, principles, inventory, adoption documentation
  adapters/                    # not created until justified
    react/                     # future: @flancrestinc/win31-react
```

Do not start with a separate `components` package. CSS components and their tokens are closely coupled, and Disc Steward needs a single linked stylesheet. Split `core/components.css` into `packages/components` only if independent versioning, a non-CSS implementation, or a second framework makes that boundary useful.

## Package boundaries and public API

| Package | Responsibility | Stable exports |
| --- | --- | --- |
| `@flancrestinc/win31-tokens` | Semantic token contract and theme values | `tokens.css`, `themes/default.css`; optional JSON token export later |
| `@flancrestinc/win31-core` | Reset, base type, utilities, layout primitives, component classes | `reset.css`, `base.css`, `layout.css`, `components.css`, `index.css` |
| `@flancrestinc/win31-motion` | Motion variables, keyframes, and opt-in state classes | `motion.css` |
| `@flancrestinc/win31-icons` | Own/openly licensed SVG assets and metadata | direct SVG paths; optional JS name map |
| future adapters | Framework ergonomics only; no visual source of truth | named components/hooks that render core classes and accessible behavior |

The CSS public API is semantic custom properties and prefixed component classes, for example `--ds-surface-window`, `--ds-border-raised-highlight`, `.ds-window`, `.ds-button`, `.ds-stack`, and `.ds-motion-enter-window`. No consumer should depend on selectors based on another application's DOM.

## Token model

Tokens use `--ds-` and semantic role names. A theme is applied with `data-ds-theme="win31"` on a scoped root; `:root` remains an optional global convenience for simple pages. Components must consume semantic tokens, not hard-coded colors.

```css
[data-ds-theme="win31"] {
  --ds-surface-canvas: #008080;
  --ds-surface-window: #c8c8c8;
  --ds-surface-control: #e6e6e6;
  --ds-surface-sunken: #bdbdbd;
  --ds-text-primary: #101010;
  --ds-text-secondary: #3d3d3d;
  --ds-accent-primary: #0a3d9f;
  --ds-accent-primary-end: #2f77d6;
  --ds-status-success-surface: #d9efdb;
  --ds-border-width-control: 1px;
  --ds-border-raised-highlight: #fff;
  --ds-border-raised-shadow: #7f7f7f;
  --ds-border-strong: #111;
  --ds-space-100: .25rem;
  --ds-space-200: .5rem;
  --ds-space-300: .75rem;
  --ds-space-400: 1rem;
  --ds-font-ui: "MS Sans Serif", Tahoma, Geneva, sans-serif;
  --ds-font-mono: "Lucida Console", "Courier New", monospace;
  --ds-z-dropdown: 400;
  --ds-z-toast: 700;
  --ds-z-modal: 800;
  --ds-motion-duration-fast: 120ms;
  --ds-motion-duration-window: 180ms;
  --ds-motion-ease-mechanical: cubic-bezier(.2, .8, .2, 1);
}
```

Keep raw palette values private to each theme file. Only introduce a raw token namespace if a build-time token tool later needs it; component CSS should still consume semantic aliases. The existing names (`--bg`, `--surface`, `--title-start`) are useful migration inputs but are not the long-term public API.

## Configuration and extension

Applications choose a preset and may override documented semantic tokens on their own root:

```css
.disc-steward-theme {
  --ds-accent-primary: #124aa8;
  --ds-window-max-width: 88rem;
}
```

Application rules live after the package imports and must be namespaced to the application root, such as `.disc-steward-theme .ds-job-card`. They may compose primitives and add domain layout; they must not redefine `.ds-button`, `.ds-window`, or global element defaults. A new reusable pattern belongs upstream only after it has a general name, documented states, and at least two plausible consumers.

## Dependency, build, and release strategy

Use the `@flancrestinc/win31-*` npm scope and npm workspaces, with a CSS build step (for example PostCSS with autoprefixer and CSS nesting only if needed). Keep runtime JavaScript at zero for tokens/core/motion. Use `exports` maps to expose CSS entry points, ship source maps, and include only built CSS/SVG/docs in package tarballs. The demo imports package outputs, so it detects broken exports.

Phase 2 adds Stylelint, Playwright visual baselines at desktop and narrow viewports, axe-core checks for serious/critical issues, and `npm pack --dry-run` validation. These are development-only dependencies; package consumers receive CSS and SVG artifacts only.

For Disc Steward development, use a checked-in `file:` dependency to the local packed package, or a deterministic `npm pack` artifact copied into its static assets during the migration. Do not make Python import from an adjacent source checkout at runtime. After the API stabilizes, publish scoped packages to GitHub Packages or npm; use a Git dependency only for short-lived pre-release testing, not normal consumption.

Version with SemVer: patch for fixes and token-value adjustments that preserve contrast/meaning, minor for additive classes/tokens/components, and major for renamed or removed public classes/tokens. Changesets or a simple release manifest are sufficient initially. Pin applications to a compatible major and update deliberately.

## Alternatives considered

1. Copy a shared CSS file into each application. This is quickest but recreates the current drift and gives no stable upgrade path.
2. Start with React components. This would exclude the current server-rendered Disc Steward UI and makes framework behavior the source of truth. Do not choose it.
3. CSS-first packages with later adapters. This supports Disc Steward now, can be used in static HTML/Jellyfin overrides, and preserves a clean adapter boundary. Recommended.

## Testing and quality gates

Use stylelint, a CSS parser/build check, and package export smoke tests. Add a static demo served locally for Playwright screenshot tests at desktop and narrow widths; baseline critical state examples (default, hover/focus via test hooks, active, disabled, invalid, selected, modal, toast, reduced motion). Run axe-core against the demo and Disc Steward integration pages. Token checks should validate required semantic keys and contrast for documented text/surface pairs.
