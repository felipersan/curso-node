export default class Payment {
  value = 0;
  date = new Date();
  status = "open";

  constructor(value) {
    this.value = value;
  }

  initPayment(){
    this.status = "progress"
    return this.processPayment()
  }

  conclusePayment() {
    this.status = "success";
  }

  failPayment() {
    this.status = "fail";
  }

  processPayment(){
    throw new Error("Método sem aplicação")
  }
}
