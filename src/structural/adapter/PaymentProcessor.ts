export interface PaymentProcessor {
  processPayment(amount: number): boolean
}
