import cors from "cors";
import express from "express";

import { extractAll } from "./jsonld.js";

// Create an Express object and routes (in order)
const app = express();

app.use(
  cors({
    origin: ["https://tldrecipe.app", "http://localhost:8080"],
    methods: ["POST"],
  })
);

app.post("*", async function (req, res) {
  const url = req.query.url;
  const jsonLds = await extractAll(url);
  const recipe = jsonLds.find((j) => j["type"] === "Recipe");
  res.send({ recipe });
});

export const fetchRecipe = app;
