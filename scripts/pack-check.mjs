import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const packages = ["tokens", "core", "motion", "icons"];

for (const packageName of packages) {
  const packageRoot = join(root, "packages", packageName);
  const manifest = JSON.parse(readFileSync(join(packageRoot, "package.json"), "utf8"));
  if (!manifest.name || !manifest.version || !manifest.files) {
    throw new Error(`${packageName} is missing publishable package metadata`);
  }
  execFileSync("npm", ["pack", "--dry-run", "--json"], { cwd: packageRoot, stdio: "inherit" });
}
