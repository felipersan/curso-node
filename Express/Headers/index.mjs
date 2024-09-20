import express from "express";

const app = express();

app.use(express.json())

app.post("/user", (req, res) => {

    const body = req.body
    const token = req.headers.authorization

    if (!token || token !== '12345'){
      return res.status(401).json({
        message: "Usuário não autorizado"
      })
    }

    res.status(200).json({
      message: "Usuário cadastrado com sucesso!"
    })
});

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000");
});
