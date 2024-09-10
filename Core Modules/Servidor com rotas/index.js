const http = require("http");
const url = require("url");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true);
  const pathName = parsedURL.pathname;

  res.setHeader("Content-type", "text/plain; charset=utf-8");

  if (pathName === "/") {
    return res.end("Você esta na página de home");
  } else if (pathName === "/dados") {
    return res.end("Você acessou a página de dados");
  } else if (pathName === "/perfil") {
    return res.end("Você acessou a página de perfil");
  }

  return res.end("Página não encontrada");
});

server.listen(PORT, () => {
  console.log("Servidor rodando na porta: ", PORT);
});
