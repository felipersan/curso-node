const fs = require("fs");

const path = "users/admin/mulheres";

fs.mkdir(path, { recursive: true }, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Pastas criadas com sucesso!");
  }
});
