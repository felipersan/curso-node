class Pessoa {
  nome = "";
  idade = 0;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    this.falar(`Olá, meu nome é ${this.nome}`);
  }

  falar(fala) {
    console.log(fala);
  }
}

const felipe = new Pessoa("Felipe", 24);
const gabi = new Pessoa("Gabi", 21);

console.log(felipe.idade, gabi.idade);