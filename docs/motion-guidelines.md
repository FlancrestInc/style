# Motion Guidelines

## Motion contract

Motion confirms a state change; it never delays ordinary work. Default UI durations should be 100–180 ms, with a practical maximum of 240 ms for a modal/window entrance. Animate `opacity` and `transform`; avoid width, height, top/left, margins, filters, and repeated box-shadow animation on routine interactions. Keyframes live in `@flancrestinc/win31-motion`; core components remain usable without importing it.

| Context | Treatment | Do not use |
| --- | --- | --- |
| Full document navigation | Browser navigation, optionally a brief initial-load window entrance | a closing animation that postpones a link/form navigation |
| Client-side route change | outgoing content fades 80–120 ms only when preloaded; incoming active window rises/fades 140–180 ms | intercepting unready routes, animation on history restore, or confusing shared-layout motion |
| Modal/dialog | backdrop fade plus window scale/translate entrance; closing reverse at 120–160 ms | animating after focus should already be available, or a full-screen bounce |
| Expandable panel/details | small opacity/translate reveal if height can be measured safely; otherwise instant native disclosure | forcing a costly height animation for long content |
| Menu/dropdown/context menu | 80–120 ms opacity + 2–4 px transform | delayed opening, animated focus movement, or motion that hides the menu's origin |
| Button | pressed bevel immediately; optional 1 px transform | long easing or disabling rapid repeat actions |
| Toast | 160–200 ms enter/exit; stack without layout jumps | auto-dismiss for errors/actions that require acknowledgement |
| Progress/loading | transform-based fill for determinate work; restrained indeterminate sweep | fake progress, nonstop decorative motion, or flashing |

## Disc Steward navigation recommendation

Disc Steward currently serves complete documents from `BaseHTTPRequestHandler`: `GET /` and `GET /jobs/{id}`, plus POST/redirect actions. Keep that model in the first migration. It protects deep links, browser history, screen-reader navigation, server rendering, simple performance, and no-JS form operation.

Use a short entrance animation on the new document's main window only after the document loads. Do not attempt a reliable exit animation for ordinary links or POST submissions: it would delay navigation and is fragile for modifier-clicks, keyboard activation, cached pages, and network failures. Browser back/forward should restore immediately; suppress entrance motion on bfcache/history restores when detectable.

If Disc Steward later adds a deliberately small progressive enhancement layer, it may intercept same-origin plain left-click links only after route content is prefetched or immediately available. It must preserve `href`, allow modified clicks/new tabs, use `history.pushState`, set document title, move focus to the new `<main>`/`h1`, announce navigation, restore scroll/history state, and fall back to a normal navigation on error. This is not a prerequisite for the visual system.

External links and `target="_blank"` links are never intercepted. Modal windows are not routes unless they need a shareable/deep-linkable state; expandable panels remain native `<details>` and do not use route transitions.

## Reduced motion

`@media (prefers-reduced-motion: reduce)` removes nonessential animation and transitions, leaves instant visual state changes, disables indefinite decorative loops, and prevents smooth scrolling. The existing `0.01ms` pattern is acceptable as a temporary migration aid, but the package should explicitly set `animation: none` for decorative loops and retain opacity/visibility semantics needed for display.
