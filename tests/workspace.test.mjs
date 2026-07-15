import assert from "node:assert/strict";
import { existsSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { execFileSync } from "node:child_process";

const root = new URL("..", import.meta.url).pathname;

test("declares the Win31 CSS workspace packages", () => {
  const manifest = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));

  assert.deepEqual(manifest.workspaces, ["packages/*"]);
  assert.equal(manifest.private, true);
  assert.equal(manifest.scripts.build, "node scripts/build-css.mjs");

  for (const name of ["tokens", "core", "motion", "icons"]) {
    const packagePath = join(root, "packages", name, "package.json");
    assert.equal(existsSync(packagePath), true, `missing ${packagePath}`);
    const packageManifest = JSON.parse(readFileSync(packagePath, "utf8"));
    assert.equal(packageManifest.name, `@flancrestinc/win31-${name}`);
  }
});

test("build emits the public CSS artifacts", () => {
  rmSync(join(root, "packages", "tokens", "dist"), { force: true, recursive: true });
  rmSync(join(root, "packages", "core", "dist"), { force: true, recursive: true });
  rmSync(join(root, "packages", "motion", "dist"), { force: true, recursive: true });

  execFileSync("node", ["scripts/build-css.mjs"], { cwd: root, stdio: "pipe" });

  for (const artifact of [
    "packages/tokens/dist/index.css",
    "packages/core/dist/index.css",
    "packages/motion/dist/motion.css",
  ]) {
    const artifactPath = join(root, artifact);
    assert.equal(existsSync(artifactPath), true, `missing ${artifact}`);
    assert.doesNotMatch(readFileSync(artifactPath, "utf8"), /\n\n$/);
  }
});
