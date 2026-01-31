import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE_PATH = path.join(__dirname, "..", "temp-db.json");
const PORT = 3010;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/db", async (req, res) => {
  try {
    const raw = await fs.readFile(DATA_FILE_PATH, "utf-8");
    const data = JSON.parse(raw);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/db", async (req, res) => {
  try {
    const newData = req.body;
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(newData, null, 2), "utf-8");
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
