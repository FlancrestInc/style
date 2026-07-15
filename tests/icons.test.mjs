import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = new URL("..", import.meta.url).pathname;

test("ships original, color-inheriting SVG starter icons with provenance", () => {
  const iconRoot = join(root, "packages/icons");
  const manifest = JSON.parse(readFileSync(join(iconRoot, "package.json"), "utf8"));
  const provenance = readFileSync(join(iconRoot, "LICENSES.md"), "utf8");

  assert.match(provenance, /original/i);
  for (const icon of ["app-window.svg", "checkmark.svg"]) {
    const svg = readFileSync(join(iconRoot, "src", icon), "utf8");
    assert.match(svg, /viewBox="0 0 16 16"/);
    assert.match(svg, /currentColor/);
    assert.match(svg, /<title(?:\s|>)/);
    assert.equal(manifest.exports[`./${icon}`], `./dist/${icon}`);
  }
});
