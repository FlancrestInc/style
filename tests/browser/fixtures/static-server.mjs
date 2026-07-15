import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = new URL("../../..", import.meta.url).pathname;
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
};

const server = createServer(async (request, response) => {
  const requestPath = new URL(request.url, "http://127.0.0.1").pathname;
  const relativePath = requestPath === "/" ? "demo/index.html" : requestPath.replace(/^\/+/, "");
  const filePath = join(root, normalize(relativePath));
  if (!filePath.startsWith(root)) {
    response.writeHead(403).end();
    return;
  }

  try {
    const metadata = await stat(filePath);
    if (!metadata.isFile()) throw new Error("Not a file");
    response.writeHead(200, { "content-type": mimeTypes[extname(filePath)] ?? "application/octet-stream" });
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404).end("Not found");
  }
});

server.listen(4173, "127.0.0.1");
