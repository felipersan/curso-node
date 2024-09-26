class Pagamento {
  processaPagamento() {
    throw new Error(
      "pagamento genérico, sobrescreva esse método com um pagamento específico"
    );
  }
}

class PagamentoCredito extends Pagamento {
  processaPagamento(valor, numeroCartao, parcelas) {
    console.log(
      `Pagamento no valor de R$ ${valor} no cartão ${numeroCartao} sendo processado em ${parcelas} parcelas`
    );
  }
}

class PagamentoPix extends Pagamento {
  processaPagamento(valor, chave1, chave2) {
    console.log(
      `Pagamento pix no valor de ${valor} sendo enviado de ${chave1} para ${chave2}`
    );
  }
}

const pagamentoCredito = new PagamentoCredito();
pagamentoCredito.processaPagamento(1000, "1234", 2);

const pagamentoPix = new PagamentoPix()
pagamentoPix.processaPagamento(300, '8102w9q272', '11912810282')
