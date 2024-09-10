const fs = require("fs");

const path = "users";

fs.readdir(path, { withFileTypes: true }, (error, files) => {
  if (error) {
    console.error(error);
  }

  if (files) {
    console.log("Temos arquivos");
    files.forEach((file) => {
      console.log(file.name, file.isDirectory());
    });
  }
});
