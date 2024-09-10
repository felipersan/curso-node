const {URL} = require("url");

const path = "https://sanfilippo.dev/data?ativo=true&idade=24"

const myURL = new URL(path)

console.log(myURL.hostname);
console.log(myURL.pathname);
console.log(myURL.href);
console.log(myURL.origin);