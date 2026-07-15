# Adoption Guide

## Install and configure

After publishing, install the CSS packages with the application's frontend tooling:

```sh
npm install @flancrest/win31-core @flancrest/win31-motion
```

Import the aggregate core stylesheet, optional motion, then application CSS:

```css
@import "@flancrest/win31-core/index.css";
@import "@flancrest/win31-motion/motion.css";
@import "./app-theme.css";
```

For a non-Node/server-rendered application, consume the generated CSS file from a pinned package artifact or a controlled static-asset copy. During local multi-repository development, use a packed `file:` artifact with an explicit version. Do not copy source CSS or make runtime paths depend on `~/projects/style`.

Apply a theme at the application root:

```html
<body class="my-app" data-ds-theme="win31">
  <main class="ds-app-shell ds-stack" tabindex="-1">
    <section class="ds-window">
      <header class="ds-titlebar"><h1>Library review</h1></header>
      <div class="ds-window__body">…</div>
    </section>
  </main>
</body>
```

## Extend without forking

Override semantic tokens at `.my-app`, then compose documented primitives. Place custom classes in an application stylesheet after package imports:

```css
.my-app {
  --ds-accent-primary: #17489b;
}

.my-app .job-lane {
  display: grid;
  gap: var(--ds-space-300);
}
```

Do not override package internals, use unprefixed global variables, or target another product's selectors. Propose an upstream component only when its markup, behavior, and tokens are broadly reusable.

## Consumer checklist

- Import the package once, establish a scoped theme root, and keep app CSS last.
- Use semantic HTML and package classes; retain native link, form, and control behavior.
- Test default, keyboard focus, pressed/selected, disabled, invalid, loading, empty, and error states.
- Verify 200% text zoom, narrow viewport, keyboard-only navigation, forced colors, and reduced motion.
- Pin a compatible major version; review release notes before minor/major upgrades.
- Add screenshots for the app's own composed flows; package visual tests do not replace product testing.

## Publishing workflow

Build package CSS, run lint/token/build tests, run demo screenshots and accessibility checks, generate changelog/version metadata, publish a prerelease, validate it in one consumer, then promote the release. Use the same tarball in CI and consumer smoke tests to prevent source-versus-published drift.

Before registry publishing is enabled, validate the local package outputs from the repository root:

```sh
npm run lint:css
npm run check
npm run test:visual
npm run test:a11y
npm run pack:check
```

`pack:check` runs `npm pack --dry-run` for every public package. GitHub Packages publishing remains intentionally deferred until one application has consumed a packed release artifact successfully.
