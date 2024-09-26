class Conta {
  #saldo;

  constructor(saldoInicial) {
    this.saldo = saldoInicial ?? 0;
  }

  depositar(valor) {
    this.saldo = this.saldo + valor;
    console.log("Saldo depositado com sucesso");
  }

  sacar(valor) {
    console.log("Saque em processamento...");
    const horarioValido = this.#checaHorario();

    if (!horarioValido) {
      return console.log("Não pode transferir essa hora");
    }

    const saldoSufisciente = this.#checaSaldo(valor);

    if (!saldoSufisciente) {
      return console.log("Saldo insufisciente");
    }

    const sucesso = this.#retiraDinheiro(valor);
    if (!sucesso) {
      return console.log("Algo deu errado");
    }

    return console.log("Dinheiro sacado com sucesso");
  }

  recuperarSaldo(){
    //validações
    return this.saldo
  }

  #checaSaldo(valor) {
    if (this.saldo < valor) {
      return false;
    }
    return true;
  }

  #checaHorario() {
    const hora = 19;
    if (hora > 20) {
      return false;
    }
    return true;
  }

  #retiraDinheiro(valor) {
    this.saldo = this.saldo - valor;
    return true;
  }
}

const conta = new Conta(1000);

conta.depositar(1000);

conta.sacar(500);

console.log(conta.recuperaSaldo())
