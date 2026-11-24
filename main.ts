// Warning Label for Humans: One Line, Big Laugh
// Entry program: writes one single-line safety warning label to
// $MAKEFUN_OUTPUT_DIR/entry.txt (stdlib only, deterministic).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));

const entry =
  "WARNING: This human is 70% water, 30% unfinished tasks, and 100% convinced it could win an argument with a GPS.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");

// Keep repoDir referenced so the resolver stays honest: the entry text is
// self-contained and does not read anything from the repo at runtime.
void repoDir;
