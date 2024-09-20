import express from "express";

const PORT = 3000;

const app = express();

app.get("/perfil", (req, res) => {
  const { name, idade } = req.query;

  res.send(`Você acessou a página de perfil do ${name}, que tem ${idade} anos`);
});

app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
});
