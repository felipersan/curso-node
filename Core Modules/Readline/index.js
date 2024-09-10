const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual o seu nome?", (nome) => {
  console.log(`Olá, ${nome}`);
  rl.close()
});

console.log("Digite alguma coisa");

rl.on("line", (data) => {
  if (data === "sair") {
    rl.close();
  }

  console.log(`você escreveu: ${data}`);
});
