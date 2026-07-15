# Win31 CSS Foundation Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a CSS-first `@flancrestinc/win31-*` workspace with semantic tokens, base/layout/core component styles, motion primitives, and a demo consuming its public CSS entry points.

**Architecture:** The source of truth is small framework-neutral CSS packages. A dependency-free Node build script assembles their documented CSS exports into `dist/` for static consumers and verifies package output without introducing a runtime JavaScript dependency. The existing demo becomes a catalogue consumer; its previous standalone stylesheet remains in place until the new foundation verifies cleanly.

**Tech Stack:** npm workspaces, Node 26 built-in test runner, authored CSS custom properties, static HTML/CSS.

---

## Chunk 1: Package contract and token foundation

### Task 1: Establish workspace metadata and exports

**Files:**
- Create: `package.json`
- Create: `packages/tokens/package.json`
- Create: `packages/core/package.json`
- Create: `packages/motion/package.json`
- Create: `packages/icons/package.json`
- Create: `scripts/build-css.mjs`
- Test: `tests/workspace.test.mjs`

- [x] **Step 1: Write failing workspace-contract tests**

Assert the workspace lists the four scoped packages, package CSS exports exist, and `npm run build` writes the expected CSS artifacts.

- [x] **Step 2: Run the workspace test to verify it fails**

Run: `node --test tests/workspace.test.mjs`
Expected: FAIL because workspace metadata and build script do not exist.

- [x] **Step 3: Implement minimal workspace metadata and build script**

Use one root package with `build`, `test`, and `check` scripts. Keep all package runtimes dependency-free. Build each package by copying its public CSS source files to `dist/` and concatenate core's aggregate `index.css` from stable imports.

- [x] **Step 4: Run workspace tests**

Run: `npm test`
Expected: PASS.

### Task 2: Add semantic token source and default preset

**Files:**
- Create: `packages/tokens/src/tokens.css`
- Create: `packages/tokens/src/themes/win31.css`
- Create: `packages/tokens/src/index.css`
- Test: `tests/tokens.test.mjs`

- [x] **Step 1: Write failing token tests**

Assert the public token entry imports the contract/default preset and the default preset defines semantic canvas, window, control, text, accent, bevel, spacing, font, z-index, and motion tokens under `data-ds-theme="win31"`.

- [x] **Step 2: Run token tests to verify failure**

Run: `node --test tests/tokens.test.mjs`
Expected: FAIL because token files do not exist.

- [x] **Step 3: Implement minimal token files**

Define role-based `--ds-*` custom properties only; do not expose raw palette-step names or application-specific selectors.

- [x] **Step 4: Run the complete test suite**

Run: `npm test`
Expected: PASS.

## Chunk 2: Core CSS and motion primitives

### Task 3: Add reset, base, and layout public entries

**Files:**
- Create: `packages/core/src/reset.css`
- Create: `packages/core/src/base.css`
- Create: `packages/core/src/layout.css`
- Create: `packages/core/src/index.css`
- Test: `tests/core.test.mjs`

- [x] **Step 1: Write failing core-entry tests**

Assert the aggregate entry orders tokens before reset/base/layout/components, scoped theme support exists, focus-visible is explicit, and named layout primitives are present.

- [x] **Step 2: Run core tests to verify failure**

Run: `node --test tests/core.test.mjs`
Expected: FAIL because core CSS entry files do not exist.

- [x] **Step 3: Implement minimal reset, base, and layout CSS**

Provide box sizing, accessible body/type defaults, forced-colors-friendly focus styling, and `.ds-app-shell`, `.ds-stack`, `.ds-cluster`, `.ds-grid`, `.ds-table-wrap` primitives. Avoid component styling here.

- [x] **Step 4: Run tests**

Run: `npm test`
Expected: PASS.

### Task 4: Add Window, Button, Form, and Table component CSS

**Files:**
- Create: `packages/core/src/components.css`
- Modify: `packages/core/src/index.css`
- Test: `tests/components.test.mjs`

- [x] **Step 1: Write failing component-contract tests**

Assert public classes for window/titlebar/panel, button variants/states, fields/control invalid/disabled states, checkbox/radio accent behavior, and table/data-state are present and consume `--ds-*` tokens.

- [x] **Step 2: Run component tests to verify failure**

Run: `node --test tests/components.test.mjs`
Expected: FAIL because component CSS does not exist.

- [x] **Step 3: Implement minimal component styles**

Implement raised/inset border recipes, robust focus, semantic state variants, dense table treatment, responsive table wrapper compatibility, and no app-specific selectors.

- [x] **Step 4: Run tests and build**

Run: `npm test && npm run build`
Expected: PASS and generated `packages/*/dist` CSS outputs.

### Task 5: Add opt-in motion primitives

**Files:**
- Create: `packages/motion/src/motion.css`
- Test: `tests/motion.test.mjs`

- [x] **Step 1: Write failing motion tests**

Assert window/menu/toast entrance and exit classes use opacity/transform, durations/easing tokens, and an explicit reduced-motion policy disables decorative loops.

- [x] **Step 2: Run motion tests to verify failure**

Run: `node --test tests/motion.test.mjs`
Expected: FAIL because motion CSS does not exist.

- [x] **Step 3: Implement minimal motion CSS**

Provide opt-in `.ds-motion-*` state classes only. Do not add JavaScript, routing interception, or automatic page animation.

- [x] **Step 4: Run tests and build**

Run: `npm test && npm run build`
Expected: PASS.

## Chunk 3: Demo consumption and delivery checks

### Task 6: Create a package-consumer demo without deleting the existing demo

**Files:**
- Create: `demo/index.html`
- Create: `demo/demo.css`
- Test: `tests/demo.test.mjs`
- Modify: `README.md` if needed for local usage instructions

- [x] **Step 1: Write failing demo-contract tests**

Assert the demo links built token/core/motion CSS, applies `data-ds-theme="win31"`, and demonstrates Window, Button, Form, and Table elements without Disc Steward selectors.

- [x] **Step 2: Run demo tests to verify failure**

Run: `node --test tests/demo.test.mjs`
Expected: FAIL because `demo/index.html` does not exist.

- [x] **Step 3: Implement the static component catalogue**

Build one responsive catalogue page with semantic examples and no production application data. Keep the existing root `index.html` and `styles.css` unchanged.

- [x] **Step 4: Run full verification**

Run: `npm run check`
Expected: all Node tests pass, build output exists, and CSS source parses through the contract checks.

- [x] **Step 5: Review changed files**

Run: `git diff --check && git status --short`
Expected: no whitespace errors; only planned Phase 1 files plus pre-existing user changes.
