# Design Principles

## The intended character

This is a contemporary system that speaks with a recognizable Windows 3.1 accent. It is not a pixel-for-pixel recreation. Familiar signals—teal workspace, cobalt title bars, neutral gray housings, beveled controls, compact menus, and chunky progress indicators—provide personality. Modern semantics, readable typography, responsive reflow, and clear focus treatment make it usable.

The teal workspace, neutral gray windows, and cobalt title bars are the default preset. A lighter neutral companion preset can be added later without changing the semantic token contract.

1. **Tactile surfaces, calm information.** Raised and inset borders indicate interaction and grouping; content hierarchy comes from spacing, labels, typography, and section order rather than decorative chrome alone.
2. **Nostalgia is a layer, not an obstacle.** Never reproduce tiny hit targets, poor contrast, hover-only controls, fixed desktop widths, or inaccessible keyboard behavior just for historical accuracy.
3. **Semantic color carries meaning.** Gray is structural; blue is primary action/active context; success, warning, danger, and information are explicit roles. Color never supplies the only state cue.
4. **Dense but breathable.** Operations screens can use compact rows, tables, and toolbars, with a 40–44 px minimum target where touch is likely. Keep 8–12 px internal gaps around controls and preserve readable line-height.
5. **Windows are containers, not decoration.** Use title bars when a region is independently actionable, movable in concept, modal, or represents a major view. Do not wrap every paragraph in chrome.
6. **Responsive reflow beats miniature desktop emulation.** At narrow widths, retain hierarchy while stacking layouts, allowing horizontal table scroll with a visible cue, and collapsing secondary metadata. Do not scale the whole application down.
7. **The browser remains honest.** Links are links, submit buttons submit forms, dialogs use proper focus management, and status updates are announced. Visual style must not obscure native behavior.

## Typography and assets

Use a system-first UI stack: `"MS Sans Serif", Tahoma, Geneva, sans-serif` with modern fallbacks. It evokes the period without bundling an unlicensed proprietary font. A monospace fallback stack can support technical labels. Any webfont or period icon added later requires a documented licence, redistribution rights, and tested fallback.

Use original SVG icons, open-licensed icon sets with attribution where required, or simple CSS/Unicode marks only when their accessible name is clear. Do not redistribute Microsoft program icons, Windows UI artwork, or copyrighted fonts as theme assets.

## Accessibility baseline

- Meet WCAG 2.2 AA contrast for text and meaningful non-text indicators; test default, disabled, selected, and title-bar states.
- Preserve visible `:focus-visible`; use a high-contrast outline in addition to bevel changes.
- Use native controls first. Custom menus, selects, tabs, dialogs, and grids need documented keyboard support and ARIA behavior.
- Keep text zoom, browser zoom, forced colors, and high-contrast modes usable. Avoid communicating status only with texture, position, or color.
- All motion obeys `prefers-reduced-motion`; no essential state is conveyed solely by animation.
- Title bars and decorative icon boxes are not interactive unless they have real controls and accessible names.

## Naming conventions

Use `ds` for package-owned CSS: `--ds-*`, `.ds-*`, `data-ds-*`. Use role-oriented tokens (`--ds-text-danger`, `--ds-surface-sunken`) rather than palette steps. Components use a root class plus variants/states: `.ds-button`, `.ds-button--primary`, `.ds-button[data-state="pressed"]`. Application classes use the application namespace and never leak into packages.
