import fetch from "node-fetch";
import { JSDOM } from "jsdom";
import jsonld from "jsonld";

export async function normalize(j) {
  const c = await jsonld.compact(j, j["@context"] || "https://schema.org");

  function doNormalize(j) {
    if (Array.isArray(j)) {
      return j.flatMap(doNormalize);
    } else if (j["@graph"]) {
      return doNormalize(j["@graph"]);
    } else {
      return j;
    }
  }

  return doNormalize(c);
}

export async function extractAll(url) {
  const html = await fetch(url).then((r) => r.text());
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const jsonLds = Array.from(
    doc.querySelectorAll("script[type='application/ld+json']")
  ).flatMap((el) => {
    const obj = JSON.parse(el.textContent);
    if (Array.isArray(obj)) {
      return { "@graph": obj };
    } else {
      return obj;
    }
  });
  return (await Promise.all(jsonLds.flatMap(normalize))).flat();
}
