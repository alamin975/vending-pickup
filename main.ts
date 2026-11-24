import * as fs from "node:fs";
import * as path from "node:path";

// The line below must stay byte-for-byte: single line, no trailing newline.
const LINE =
  "Are you a vending machine? Because every time I see you, I lose all my change and still walk away happy.";

function writeEntry(): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync(path.join("/output", "entry.txt"), LINE, {
    encoding: "utf8",
  });
}

writeEntry();
