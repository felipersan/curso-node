const fs = require("fs");

const user = {
  name: "Felipe",
  idade: 24,
  cidade: "sp",
};
const nomeDoArquivo = "user.json";

const userString = JSON.stringify(user, null, 2);

fs.writeFile(nomeDoArquivo, userString, "utf8", (error) => {
  if (error) {
    console.error("Erro ao gravar o arquivo: ", error);
  } else {
    console.log("Arquivo gravado com sucesso!");
  }
});
