// make.fun — "Your Week in One Line"
// Writes one line summing up my week to /output/entry.txt.
// Deterministic: the text is a constant. No randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "Filed 137 bounty entries this week and won nothing; the cat-review one-liner outranked them all.";

// The gate allows 1-100 characters: fail loudly rather than submit an invalid line.
// It must also stay a single line: a newline would break the "one line" brief.
if (TEXT.length < 1 || TEXT.length > 100 || TEXT.includes("\n")) {
  throw new Error(`TEXT must be one line of 1-100 characters, got ${TEXT.length}`);
}

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, TEXT, "utf8");
