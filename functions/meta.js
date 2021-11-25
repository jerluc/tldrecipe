function metaToObj(meta) {
  return {
    name: meta.getAttribute("name") || meta.getAttribute("property"),
    value: meta.getAttribute("content"),
  };
}

function linkToObj(link) {
  return { rel: link.getAttribute("rel"), href: link.getAttribute("href") };
}

const sourceMapping = {
  name: ["og:site_name", "application-name"],
};

function summarize(metas, links) {
  const source = {};
  metas.forEach((meta) => {
    for (let [m, keys] of Object.entries(sourceMapping)) {
      for (let k of keys) {
        if (meta.name === k) {
          source[m] = meta.value;
        }
      }
    }
  });
  return source;
}

export async function extractAll(doc) {
  const metas = Array.from(doc.querySelectorAll("meta")).map(metaToObj);
  const links = Array.from(doc.querySelectorAll("link")).map(linkToObj);
  const source = summarize(metas, links);
  return { source, metas, links };
}
