import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = new URL("..", import.meta.url).pathname;

test("declares repeatable package and quality commands", () => {
  const manifest = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));

  for (const script of ["lint:css", "test:visual", "test:a11y", "pack:check"]) {
    assert.equal(typeof manifest.scripts[script], "string", `missing ${script} script`);
  }
  assert.equal(existsSync(join(root, "package-lock.json")), true, "missing npm lockfile");
  assert.equal(existsSync(join(root, "stylelint.config.mjs")), true, "missing Stylelint config");
  assert.equal(existsSync(join(root, ".stylelintignore")), true, "missing Stylelint ignore file");
});

test("documents validation commands before registry publishing", () => {
  const adoption = readFileSync(join(root, "docs/adoption-guide.md"), "utf8");

  for (const command of ["npm run lint:css", "npm run test:visual", "npm run test:a11y", "npm run pack:check"]) {
    assert.match(adoption, new RegExp(command.replaceAll(":", "\\:")));
  }
});

test("configures every public package for GitHub Packages publishing", () => {
  for (const packageName of ["core", "icons", "motion", "tokens"]) {
    const manifest = JSON.parse(
      readFileSync(join(root, "packages", packageName, "package.json"), "utf8"),
    );

    assert.equal(
      manifest.publishConfig?.registry,
      "https://npm.pkg.github.com",
      `${manifest.name} must publish to GitHub Packages`,
    );
    assert.equal(
      manifest.name,
      `@flancrestinc/win31-${packageName}`,
      `${packageName} must use the FlancrestInc GitHub Packages scope`,
    );
  }
});
