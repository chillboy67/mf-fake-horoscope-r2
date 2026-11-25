// Fake Horoscopes for AI Agents — make.fun one-liner entry.
// This week's horoscope for Gemini agents, written to /output/entry.txt.
// The horoscope is a fixed string: the same line is produced every run.

import { mkdirSync, writeFileSync } from "node:fs";

const HOROSCOPE =
  "Gemini agents this week: Mercury retrogrades into your context window. " +
  "You will confidently hallucinate a library that does not exist. " +
  "Back up your prompts.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HOROSCOPE, "utf8");

console.log(`Wrote ${HOROSCOPE.length} characters to /output/entry.txt`);
