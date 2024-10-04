import Payment from "./payment.mjs";

export default class Credit extends Payment {
  cardNumber;
  installments;

  constructor(value, cardNumber, installments) {
    super(value);
    this.cardNumber = cardNumber;
    this.installments = installments;
  }

  processPayment() {
    const randomNumber = Math.random() * 100;

    if (randomNumber > 80) {
      this.failPayment();
      throw new Error(
        JSON.stringify({
          status: 500,
          message:
            "Erro ao processar pagamento, tente novamente em alguns minutos",
        })
      );
    }

    this.conclusePayment();

    return {
      sucess: true,
      message: "Pagamento no crédito realizado com sucesso",
    };
  }
}
