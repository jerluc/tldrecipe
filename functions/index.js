import compression from "compression";
import cors from "cors";
import express from "express";
import * as dom from "./dom.js";
import * as meta from "./meta.js";
import * as jsonld from "./jsonld.js";

// Create an Express object and routes (in order)
const app = express();

app.use(compression());

app.use(
  cors({
    origin: [
      "https://tldrecipe.app",
      "https://jerluc.ngrok.io",
      "http://localhost:5173",
      "http://jerluc-laptop.local:5173",
      "http://jerluc-laptop:5173",
    ],
    methods: ["POST"],
  }),
);

function isRecipe(schema_type) {
  return Array.isArray(schema_type)
    ? schema_type.filter((t) => t === "Recipe").length > 0
    : schema_type === "Recipe";
}

app.post("*", async function (req, res) {
  const url = req.query.url;
  const doc = await dom.parse(url);
  const [metas, jsonLds] = await Promise.all([
    meta.extractAll(doc),
    jsonld.extractAll(doc),
  ]);
  const recipe = jsonLds.find((j) => isRecipe(j["type"]));
  res.send({ meta: metas, recipe });
});

export const fetchRecipe = app;
