const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end("Servidor rodando certinho!");
});

server.listen(PORT, () => {
//   setTimeout(() => {
//     console.warn("O servidor vai ser desligado...");
//     server.close((error) => {
//       if (error) {
//         console.error(error);
//         return
//       }
//       console.warn("O servidor foi fechado");
//     });
//   }, 5000);

  console.log("Servidor rodando na porta:", PORT);
});
