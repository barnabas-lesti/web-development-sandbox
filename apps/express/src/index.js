import express from "express";
import cors from "cors";

import collectionsEndpoints from "./endpoints/collections.js";
import { PORT } from "./config.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", collectionsEndpoints);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
