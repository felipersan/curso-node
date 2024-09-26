class Personagem {
  #arma;
  #escudo

  constructor(arma, escudo) {
    this.#arma = arma;
    this.#escudo = escudo
  }

  atacar() {
    this.#arma.atacar();
  }

  defender() {
    this.#escudo.atacar();
  }
}

class Espada {
  name = "espada";
  potencia = 7;

  atacar() {
    console.log(`${this.name} ataca com ${this.potencia} de poder`);
  }
}

class Adaga {
  name = "adaga";
  potencia = 5;

  atacar() {
    console.log(`${this.name} ataca com ${this.potencia} de poder`);
  }
}

class ArcoEFlexa {
  name = "arco de flexa";
  potencia = 9;

  atacar() {
    console.log(`${this.name} ataca com ${this.potencia} de poder`);
  }
}

const felipe = new Personagem(new Adaga(), new Espada());
felipe.atacar();
felipe.defender()
