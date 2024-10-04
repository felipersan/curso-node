import Credit from "../types/payments/credit.mjs";
import Debit from "../types/payments/debit.mjs";

export default class PaymentModel {
  processCredit(value, cardNumber, installments) {
    const credit = new Credit(value, cardNumber, installments);
    const creditResponse = credit.initPayment();
    return creditResponse;
  }

  processDebit(value, cardNumber) {
    const debit = new Debit(value, cardNumber);

    if (debit.balance < value) {
      throw new Error(
        JSON.stringify({
          status: 400,
          message: "Saldo insufisciente",
        })
      );
    }

    const debitResponse = debit.initPayment();
    return debitResponse;
  }
}
