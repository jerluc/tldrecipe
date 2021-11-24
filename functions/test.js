import * as jsonld from "./jsonld.js";

const url = process.argv[2];
console.log(await jsonld.extractAll(url));
