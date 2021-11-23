const fetch = require("node-fetch");
const { JSDOM } = require("jsdom");

function extractRecipe({ document }) {
  const schemaOrgs = Array.from(
    document.querySelectorAll("script[type='application/ld+json']")
  );
  const recipes = schemaOrgs
    .map((s) => {
      if (s.textContent) {
        const c = JSON.parse(s.textContent);
        if (c["@type"] === "Recipe") {
          return c;
        }
      }
      return null;
    })
    .filter((c) => !!c);
  if (recipes.length > 0) {
    return recipes[0];
  }
}

exports.fetchRecipe = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "https://tldrecipe.app");

  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "GET");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    res.status(204).send("");
    return;
  } else if (req.method !== "POST") {
    res.statusi(405).end();
    return;
  }

  const url = req.query.url;
  const html = await fetch(url).then((r) => r.text());
  const dom = new JSDOM(html);
  const recipe = extractRecipe(dom.window);
  res.send({ recipe });
};
