import Payment from "./payment.mjs";

export default class Debit extends Payment {
  cardNumber;
  balance = 1000;

  constructor(value, cardNumber) {
    super(value);
    this.cardNumber = cardNumber;
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
      message: "Pagamento no débito realizado com sucesso",
    };
  }
}
