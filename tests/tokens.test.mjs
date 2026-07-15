import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = new URL("..", import.meta.url).pathname;

test("publishes the semantic token contract and default Win31 preset", () => {
  const index = readFileSync(join(root, "packages/tokens/src/index.css"), "utf8");
  const contract = readFileSync(join(root, "packages/tokens/src/tokens.css"), "utf8");
  const theme = readFileSync(join(root, "packages/tokens/src/themes/win31.css"), "utf8");

  assert.match(index, /@import url\("\.\/tokens\.css"\)/);
  assert.match(index, /@import url\("\.\/themes\/win31\.css"\)/);
  assert.match(contract, /--ds-space-100:/);
  assert.match(contract, /--ds-motion-duration-fast:/);
  assert.match(contract, /--ds-z-modal:/);
  assert.match(theme, /\[data-ds-theme="win31"\]/);

  for (const token of [
    "--ds-surface-canvas:",
    "--ds-surface-window:",
    "--ds-surface-control:",
    "--ds-text-primary:",
    "--ds-accent-primary:",
    "--ds-border-raised-highlight:",
    "--ds-font-ui:",
  ]) {
    assert.match(theme, new RegExp(token));
  }
});
