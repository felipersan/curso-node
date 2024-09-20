import express from "express";

const app = express();

app.get("/user", (req, res) => {

    const {name, idade} = req.query

    res.send({
        name: name,
        idade: idade
    })
});

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000");
});
