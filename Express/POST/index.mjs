import express from "express";

const PORT = 3000;

const app = express();

app.use(express.json())

app.post("/perfil", (req, res) => {
  const { name, email } = req.body;

  res.send(`Perfil criado com sucesso!: ${name}, ${email}`);
});

app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
});
