import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = new URL("..", import.meta.url).pathname;

test("defines the approved core component contracts", () => {
  const css = readFileSync(join(root, "packages/core/src/components.css"), "utf8");

  for (const selector of [
    ".ds-window",
    ".ds-titlebar",
    ".ds-panel",
    ".ds-button",
    ".ds-button--primary",
    ".ds-field",
    ".ds-control",
    ".ds-table",
  ]) {
    assert.match(css, new RegExp(`\\${selector}`));
  }

  assert.match(css, /\.ds-button:disabled/);
  assert.match(css, /\.ds-control\[aria-invalid="true"\]/);
  assert.match(css, /input\[type="checkbox"\]/);
  assert.match(css, /\.ds-table\[data-density="compact"\]/);
  assert.match(css, /var\(--ds-surface-window\)/);
  assert.match(css, /var\(--ds-border-raised-highlight\)/);
});
