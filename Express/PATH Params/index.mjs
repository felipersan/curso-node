import express from "express";

const app = express();

app.delete("/user/:id", (req, res) => {

    const {id} = req.params

    res.send({
        userId: id
    })
});

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000");
});
