const http = require("http");

const PORT = 3000

const server = http.createServer((req, res) => {
    res.end("Servidor rodando certinho!")
});

server.listen(PORT, ()=>{
    console.log("Servidor rodando na porta:", PORT)
})