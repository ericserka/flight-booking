import { PaymentProcessor } from "./PaymentProcessor";
import { StripePayment } from "./StripePayment";

export class StripePaymentAdapter implements PaymentProcessor {
  private stripePayment: StripePayment

  constructor(apiKey: string) {
    this.stripePayment = new StripePayment(apiKey)
  }

  processPayment(amount: number): boolean {
    return this.stripePayment.charge(amount)
  }
}
