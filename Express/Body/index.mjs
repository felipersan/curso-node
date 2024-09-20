import express from "express";

const app = express();

app.use(express.json())

app.post("/user", (req, res) => {

    const body = req.body

    res.send(body)
});

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000");
});
