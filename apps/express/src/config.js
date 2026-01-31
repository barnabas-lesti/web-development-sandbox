import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const PORT = 3010;
export const DB_FILE_PATH = path.join(__dirname, "../../..", "temp/db.json");
