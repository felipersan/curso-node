const path = require("path");

const pathArquivo = path.join(
  "diretorio",
  "subdiretorio",
  "terceiroDiretorio",
  "arquivo.js"
);
console.log("Caminho unificado: ", pathArquivo);

const baseName = path.basename(pathArquivo);
console.log("Basename: ", baseName);

const extName = path.extname(pathArquivo);
console.log("Extensão: ", extName);

const dirName = path.dirname(pathArquivo);
console.log("Diretorio: ", dirName);

const parsedDir = path.parse(pathArquivo)
console.log('Analisado: ', parsedDir)