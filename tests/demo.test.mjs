import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = new URL("..", import.meta.url).pathname;

test("demo consumes package artifacts and demonstrates the Phase 1 primitives", () => {
  const html = readFileSync(join(root, "demo/index.html"), "utf8");

  for (const href of [
    "../packages/core/dist/index.css",
    "../packages/motion/dist/motion.css",
    "./demo.css",
  ]) {
    assert.match(html, new RegExp(href.replaceAll(".", "\\.")));
  }

  assert.match(html, /data-ds-theme="win31"/);
  for (const className of ["ds-window", "ds-button", "ds-field", "ds-control", "ds-table"]) {
    assert.match(html, new RegExp(className));
  }
  assert.doesNotMatch(html, /disc-steward/i);
});
