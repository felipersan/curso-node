class Pessoa {
  altura = 180;
  nome = "Felipe";
  idade = 24;

  apresentar() {
    console.log("Olá, meu nome é Felipe");
  }

  falar(fala) {
    console.log(fala);
  }
}

const felipe = new Pessoa();

console.log(felipe.altura);
felipe.apresentar();
felipe.falar('Finalizando a aula de hoje!')
