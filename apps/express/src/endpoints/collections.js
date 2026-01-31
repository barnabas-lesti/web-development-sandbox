import { Router } from "express";

import { readDb } from "../core/readDb.js";
import { writeDb } from "../core/writeDb.js";
import { deepMerge } from "../core/deepMerge.js";
import { createUid } from "../core/createUid.js";

const router = Router();

async function ensureCollection(req, res, next) {
  const { collection } = req.params;

  try {
    const db = await readDb();

    if (!Array.isArray(db[collection])) {
      return res.status(404).json({
        error: `Collection '${collection}' does not exist`,
      });
    }

    req.db = db;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

router.get("/:collection", ensureCollection, (req, res) => {
  res.json(req.db[req.params.collection]);
});

router.get("/:collection/:id", ensureCollection, (req, res) => {
  const { collection, id } = req.params;

  const item = req.db[collection].find((i) => i.id === id);

  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  res.json(item);
});

router.put("/:collection", ensureCollection, async (req, res) => {
  const { collection } = req.params;

  const newItem = {
    id: createUid(),
    ...req.body,
  };

  req.db[collection].push(newItem);
  await writeDb(req.db);

  res.status(201).json(newItem);
});

router.post("/:collection/:id", ensureCollection, async (req, res) => {
  const { collection, id } = req.params;

  const index = req.db[collection].findIndex((i) => i.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  const existing = req.db[collection][index];
  const updated = deepMerge({}, existing, req.body, { id });

  req.db[collection][index] = updated;
  await writeDb(req.db);

  res.json(updated);
});

router.delete("/:collection/:id", ensureCollection, async (req, res) => {
  const { collection, id } = req.params;

  const index = req.db[collection].findIndex((i) => i.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  const [removed] = req.db[collection].splice(index, 1);
  await writeDb(req.db);

  res.json(removed);
});

export default router;
