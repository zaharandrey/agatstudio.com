// After `next build` (static export), the Ukrainian pages live in out/uk/.
// Ukrainian is the default language and is served WITHOUT a prefix
// (agatstudio.com/about), English stays under /en (agatstudio.com/en/about).
// This script moves out/uk/* to the root of out/ so the URLs match the links
// that localizeHref() already generates. It replaces the old proxy.ts rewrite.
import { cpSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const out = "out";
const uk = join(out, "uk");

if (!existsSync(uk)) {
  console.error("postbuild: out/uk not found — did `next build` run with output: 'export'?");
  process.exit(1);
}

cpSync(uk, out, { recursive: true, force: true });
rmSync(uk, { recursive: true, force: true });
console.log("postbuild: Ukrainian pages moved from /uk to the site root");
