import express from "express"

const app = express()

app.get('/', (req, res)=>{
    res.status(404)
    return res.send('rota de barra')
})

app.listen(3000, ()=>{
    console.log('servidor rodando na porta 3000')
})