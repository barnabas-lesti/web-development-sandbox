import fs from "fs/promises";

import { DB_FILE_PATH } from "../config.js";

export async function readDb() {
  const raw = await fs.readFile(DB_FILE_PATH, "utf-8");
  return JSON.parse(raw);
}
