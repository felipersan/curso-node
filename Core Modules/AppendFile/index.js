const fs = require("fs");

const log = "\nRegistro de log 3 com método appendFile()";
const nomeDoArquivo = "logs.txt";

fs.appendFile(nomeDoArquivo, log, "utf8", (error) => {
  if (error) {
    console.error("Erro ao somar o arquivo: ", error);
  } else {
    console.log("Arquivo somado com sucesso!");
  }
});
