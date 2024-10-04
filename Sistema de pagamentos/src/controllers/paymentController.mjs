import PaymentModel from "../models/paymentModel.mjs";

export default class PaymentController {
  processCredit(value, cardNumber, installments) {
    if (!value || !cardNumber || !installments) {
      throw new Error(
        JSON.stringify({
          status: 400,
          message: "Envie todos os dados necessários",
        })
      );
    }

    const paymentModel = new PaymentModel();

    const creditResponse = paymentModel.processCredit(
      value,
      cardNumber,
      installments
    );

    return creditResponse;
  }

  processDebit(value, cardNumber) {
    if (!value || !cardNumber) {
      throw new Error(
        JSON.stringify({
          status: 400,
          message: "Envie todos os dados necessários",
        })
      );
    }

    const paymentModel = new PaymentModel();

    const debitResponse = paymentModel.processDebit(value, cardNumber);
    return debitResponse;
  }
}
