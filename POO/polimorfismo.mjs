class Animal {
  barulho() {
    console.log("O animal faz barulho");
  }
}

class Cachorro extends Animal {
  barulho() {
    console.log("O cachorro late");
  }
}

class Gato extends Animal {
  barulho() {
    console.log("O gato mia");
  }
}

const mano = new Cachorro()
mano.barulho()

const panqueca = new Gato()
panqueca.barulho()
