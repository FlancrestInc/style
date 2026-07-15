import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const entries = [
  { packageName: "tokens", source: "src/index.css", output: "dist/index.css" },
  { packageName: "core", source: "src/index.css", output: "dist/index.css" },
  { packageName: "motion", source: "src/motion.css", output: "dist/motion.css" },
];

async function sourceOrEmpty(path) {
  try {
    return await readFile(path, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") return "";
    throw error;
  }
}

async function bundleCss(path) {
  const source = await sourceOrEmpty(path);
  return source.replace(/@import url\("(.+?)"\);/g, (_match, relativePath) => {
    const importPath = relativePath.startsWith("@flancrest/win31-")
      ? join(root, "packages", relativePath.replace("@flancrest/win31-", "").replace("/index.css", ""), "src", "index.css")
      : resolve(dirname(path), relativePath);
    return `/* ${relativePath} */\n__WIN31_IMPORT_${importPath}__`;
  });
}

async function resolveImports(path) {
  let output = await bundleCss(path);
  const imports = [...output.matchAll(/__WIN31_IMPORT_(.+?)__/g)];
  for (const match of imports) {
    output = output.replace(match[0], await resolveImports(match[1]));
  }
  return output;
}

for (const entry of entries) {
  const packageRoot = join(root, "packages", entry.packageName);
  const outputPath = join(packageRoot, entry.output);
  await mkdir(dirname(outputPath), { recursive: true });
  const source = await resolveImports(join(packageRoot, entry.source));
  await writeFile(outputPath, `/* Generated from ${entry.source}; do not edit. */\n${source.trimEnd()}\n`, "utf8");
}

const iconsSource = join(root, "packages", "icons", "src");
const iconsOutput = join(root, "packages", "icons", "dist");
try {
  await cp(iconsSource, iconsOutput, { recursive: true });
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
