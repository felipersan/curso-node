const fs = require("fs");

const path = "diretorio";

fs.rm(path, {recursive: true, force: true} , (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Arquivo apagado!')
  }
});
