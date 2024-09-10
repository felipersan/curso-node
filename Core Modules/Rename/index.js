const fs = require("fs");

const nomeAntigo = "user.json";
const nomeNovo = "usuario.json";

fs.rename(nomeAntigo, nomeNovo, (error) => {
  if (error) {
    console.error("Erro ao renomear o arquivo: ", error);
  } else {
    console.log("Arquivo renomeado com sucesso!");
  }
});
