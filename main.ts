// SPDX-License-Identifier: MIT
// The Meeting That Should Have Been One Line.
// Writes the single sentence that could have replaced an entire
// pointless meeting to /output/entry.txt. One sentence, no context,
// no explanation — just the line that kills the meeting.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. The line below is one sentence, 121 characters,
// and stands alone with no context or explanation.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sixty minutes, no decision, no owner, no deadline: this meeting ended before it started \u2014 we're just still sitting in it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${LINE}\n`, "utf8");
