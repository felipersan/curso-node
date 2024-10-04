import { Router } from "express";
import PaymentController from "../controllers/paymentController.mjs";

const router = Router();

const paymentController = new PaymentController();

router.post("/credit", (req, res) => {
  try {
    const { value, cardNumber, installments } = req.body;

    const creditResponse = paymentController.processCredit(
      value,
      cardNumber,
      installments
    );

    res.status(200).json(creditResponse);
  } catch (error) {
    const errorMessage = JSON.parse(error.message);

    res
      .status(errorMessage.status)
      .json({ message: errorMessage.message, success: false });
  }
});

router.post("/debit", (req, res) => {
  try {
    const { value, cardNumber } = req.body;

    const debitResponse = paymentController.processDebit(value, cardNumber)

    res.status(200).json(debitResponse)

  } catch (error) {
    const errorMessage = JSON.parse(error.message);

    res
      .status(errorMessage.status)
      .json({ message: errorMessage.message, success: false });
  }
});

export default router;
