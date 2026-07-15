# Win31 Package Hardening Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Win31 packages publishable and protect their demo with CSS linting, browser visual regression, accessibility coverage, and a traceable original-icon starter set.

**Architecture:** Package integrity remains dependency-free at runtime. Development tooling uses Stylelint plus Playwright/axe against the built static demo. Screenshot baselines live in the repository and target representative desktop and narrow viewports; the test server serves the repository after the CSS build. Icons are authored SVGs with explicit provenance documentation.

**Tech Stack:** npm workspaces, Stylelint, Playwright Test, axe-core Playwright integration, Node built-in tests, static HTML/CSS/SVG.

---

## Chunk 1: Packaging and lint contract

### Task 1: Add failing publish/lint contract tests

**Files:**
- Create: `tests/release-contract.test.mjs`
- Modify: `package.json`
- Test: `tests/release-contract.test.mjs`

- [x] Write tests requiring an npm lockfile, `lint:css`, `test:visual`, `test:a11y`, and `pack:check` scripts, plus package metadata required for publishable tarballs.
- [x] Run the test and confirm it fails because the scripts/configuration do not exist.
- [x] Add minimal package metadata, dev dependencies, and script contracts.
- [x] Run the release-contract test and the existing suite.

### Task 2: Add CSS lint configuration

**Files:**
- Create: `stylelint.config.mjs`
- Create: `.stylelintignore`
- Modify: `package.json`
- Test: `tests/release-contract.test.mjs`

- [x] Extend the failing contract test to require the config and ignore generated output.
- [x] Confirm the test fails.
- [x] Implement a narrow Stylelint configuration for authored CSS and run `npm run lint:css`.
- [x] Run all Node tests.

## Chunk 2: Icons and browser test harness

### Task 3: Add original icon assets and provenance

**Files:**
- Create: `packages/icons/src/app-window.svg`
- Create: `packages/icons/src/checkmark.svg`
- Create: `packages/icons/LICENSES.md`
- Create: `tests/icons.test.mjs`

- [x] Write tests that require accessible SVGs, `viewBox`, `currentColor`, and original-asset provenance.
- [x] Confirm test failure.
- [x] Add two original, simple SVG icons and a licence/provenance manifest.
- [x] Run all Node tests and package build.

### Task 4: Add Playwright and axe demo checks

**Files:**
- Create: `playwright.config.mjs`
- Create: `tests/browser/demo.spec.mjs`
- Create: `tests/browser/fixtures/static-server.mjs`
- Modify: `package.json`
- Test: `tests/browser/demo.spec.mjs`

- [x] Add browser tests that assert the component demo has no serious/critical axe violations and capture desktop/narrow screenshots.
- [x] Run the browser test and confirm it initially fails because the configuration/server/dependencies are absent.
- [x] Install the chosen dev dependencies, implement the static server/config/tests, and install Chromium if needed.
- [x] Generate reviewed screenshot baselines, then rerun visual/a11y checks.

## Chunk 3: Documentation and final verification

### Task 5: Document local release and visual-test workflow

**Files:**
- Modify: `docs/adoption-guide.md`
- Modify: `docs/architecture.md`
- Test: `tests/release-contract.test.mjs`

- [x] Write a failing assertion for documented local tarball validation and visual/a11y commands.
- [x] Confirm test failure.
- [x] Add concise commands for `lint:css`, `test:visual`, `test:a11y`, and `pack:check`; explain that registry publishing remains deferred.
- [x] Run `npm run check`, `npm run lint:css`, `npm run test:visual`, `npm run test:a11y`, `npm run pack:check`, and `git diff --check`.
