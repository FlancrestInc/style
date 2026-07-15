import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = new URL("..", import.meta.url).pathname;

test("assembles tokens before reset, base, layout, and components", () => {
  const css = readFileSync(join(root, "packages/core/src/index.css"), "utf8");
  const imports = [
    "@flancrest/win31-tokens/index.css",
    "./reset.css",
    "./base.css",
    "./layout.css",
    "./components.css",
  ];

  let lastIndex = -1;
  for (const importedFile of imports) {
    const index = css.indexOf(importedFile);
    assert.ok(index > lastIndex, `${importedFile} must retain public import order`);
    lastIndex = index;
  }
});

test("provides accessible base styles and layout primitives", () => {
  const base = readFileSync(join(root, "packages/core/src/base.css"), "utf8");
  const layout = readFileSync(join(root, "packages/core/src/layout.css"), "utf8");

  assert.match(base, /:focus-visible/);
  assert.match(base, /forced-colors: active/);
  for (const className of [".ds-app-shell", ".ds-stack", ".ds-cluster", ".ds-grid", ".ds-table-wrap"]) {
    assert.match(layout, new RegExp(`\\${className}`));
  }
});
