import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = new URL("..", import.meta.url).pathname;

test("provides opt-in transform and opacity motion with reduced-motion support", () => {
  const css = readFileSync(join(root, "packages/motion/src/motion.css"), "utf8");

  for (const selector of [".ds-motion-enter-window", ".ds-motion-exit-window", ".ds-motion-enter-menu", ".ds-motion-enter-toast"]) {
    assert.match(css, new RegExp(`\\${selector}`));
  }

  assert.match(css, /opacity/);
  assert.match(css, /transform/);
  assert.match(css, /var\(--ds-motion-duration-window\)/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /animation: none/);
});
