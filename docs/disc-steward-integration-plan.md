# Disc Steward Integration Plan

## Current integration reality

Disc Steward does not consume `~/projects/style` directly. Its `page()` function in `disc_steward/web.py` embeds its own ~340-line theme stylesheet and duplicates style's current tokens: canvas/background, gray surfaces, cobalt title gradient, typography, bevel border colors, focus ring, and shadows. Both implementations are Windows-inspired, but their markup and component selectors differ. `jellyfin.css` is unrelated to Disc Steward runtime consumption; it is a separate product-specific override.

Disc Steward is Python 3.10+ with setuptools and uv lockfile, uses the standard-library `ThreadingHTTPServer`, renders HTML strings server-side, and uses native links/forms with POST/303 redirects. No JavaScript package manager, bundler, router, component framework, visual regression runner, linting configuration, or browser test suite exists. Pytest tests render HTML strings and assert content/behavioral output.

## Incremental migration phases

1. **Foundation in style (no Disc Steward change).** Create the workspace/packages, extract semantic tokens, base/reset, layout, and motion entries; rebuild the demo against those entries. Preserve the current static demo files until the new build has parity.
2. **Package verification.** Add CSS lint/build/export checks, demo screenshots, axe checks, and licensing inventory. Publish or pack a pre-release artifact.
3. **Disc Steward static asset seam.** Add a `disc_steward/static/` serving path and make `page()` link a versioned package-built stylesheet. Initially leave its inline stylesheet intact after the link so the application remains visually stable.
4. **Token bridge.** Replace duplicated root variables in `page()` with a small Disc Steward override file/import that maps only documented `--ds-*` tokens. Verify dashboard, job review, validation, transfer, errors, and narrow layouts. Do not alter HTML structure yet.
5. **Primitive conversion.** Move generic element rules, panels, buttons, form controls, tables, badges, details, and layout utilities to design-system classes or documented semantic markup. Keep `.dashboard-*`, `.job-*`, media preview, pipeline, and domain-specific rules under a Disc Steward namespace.
6. **Motion enhancement.** Add package motion and a tiny opt-in boot/route-entrance enhancer only after no-JS navigation is verified. Add dialogs/toasts only when replacing a real interaction, not as a visual exercise.
7. **Cleanup and release.** Delete only duplicate CSS demonstrated to be covered by the package, retain app-specific CSS, lock a compatible package version, and publish an adoption example.

The approved first implementation slice is phases 1–2 through the foundational components: tokens, reset/base, layout primitives, and Window/Button/Form/Table CSS. Modal, toast, client-side routing, and framework adapters remain follow-up work.

Each phase is independently deployable. Existing inline CSS remains the fallback until screenshot/axe/manual acceptance proves replacement coverage. Never rewrite the current review workflow or form actions as part of a theme phase.

## Disc Steward-specific boundaries

Keep these out of the universal package: job lanes, file classification fields, destination preview logic, pipeline state interpretation, media preview layout, automation queue semantics, and static report styling. The system provides the visual primitives; Disc Steward owns domain composition.

Add regression tests around `page()` stylesheet link/versioning and rendered class hooks, alongside existing Pytest HTML assertions. Add Playwright later against the running review UI for keyboard navigation, focus visibility, form submission/redirects, and screenshot baselines.

## Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Inline CSS is coupled to a 2,559-line renderer | Establish static asset loading first; migrate by primitive, not file rewrite |
| Full-page responses make exit transitions unreliable | Use entrance-only progressive enhancement; preserve native links/forms |
| Dense operational tables on narrow screens | Document overflow and responsive row strategy; screenshot at 320/768/1440 px |
| Retro contrast or small controls become inaccessible | Token contrast checks, axe, keyboard/manual testing, target-size review |
| Package build adds Node to a Python app | Build and package CSS in style CI; Disc Steward consumes compiled static artifacts only |
| Theme scope leaks into reports/Jellyfin | Scope interactive app theme; keep reports and Jellyfin adapters intentionally separate |
