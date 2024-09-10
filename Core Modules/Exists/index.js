const fs = require("fs");

const path = "diretorio";

const fileExists = fs.existsSync(path);

if (fileExists) {
  fs.rm(path, { recursive: true, force: true });
}