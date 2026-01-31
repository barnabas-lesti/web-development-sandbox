import fs from "fs/promises";

import { DB_FILE_PATH } from "../config.js";

export async function writeDb(db) {
  await fs.writeFile(DB_FILE_PATH, JSON.stringify(db, null, 2), "utf-8");
}
