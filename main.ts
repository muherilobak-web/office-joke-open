// Office Joke Open — one single-line office joke for the make.fun bounty
// u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232
// The meeting that could have been an email reproduces: it ends early, so
// another one is booked to investigate the miracle.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "The meeting that could have been an email ended early, so we scheduled another one to find out why.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
