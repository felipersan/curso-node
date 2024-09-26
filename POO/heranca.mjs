class Animal {
  name;
  especie;

  constructor(name, especie) {
    this.name = name;
    this.especie = especie;
  }

    barulho() {
    console.log(`${this.name} faz barulho`);
  }
}

class Cachorro extends Animal {
  constructor(name, especie) {
    super(name, especie);
  }

  #barulho() {
    console.log(`${this.name} late`);
  }
}

class Pato extends Animal {
  constructor(name, especie) {
    super(name, especie);
  }

  barulho() {
    console.log(`${this.name} quacka`);
  }
}

const bob = new Cachorro("Bob", "cachorro");
bob.barulho();

const thomas = new Pato("Thomas", "pato");
thomas.barulho();
