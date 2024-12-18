import { PaymentProcessor } from "./PaymentProcessor";
import { PayPalPayment } from "./PayPalPayment";

export class PayPalPaymentAdapter implements PaymentProcessor {
  private paypalPayment: PayPalPayment

  constructor(clientId: string, clientSecret: string) {
    this.paypalPayment = new PayPalPayment(clientId, clientSecret)
  }

  processPayment(amount: number): boolean {
    const result = this.paypalPayment.makePayment(amount)

    return result.success
  }
}

