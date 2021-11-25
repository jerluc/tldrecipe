import { JSDOM } from "jsdom";

export async function parse(url) {
  const html = await fetch(url).then((r) => r.text());
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  return doc;
}
