class Pessoa {
  altura = 180;
  nome = "Felipe";
  idade = 24;

  apresentar() {
    this.falar(`Olá, meu nome é ${this.nome}`);
  }

  falar(fala) {
    console.log(fala);
  }
}

const felipe = new Pessoa();
const gabi = new Pessoa();

gabi.nome = "Gabi";

felipe.apresentar();
gabi.apresentar();
