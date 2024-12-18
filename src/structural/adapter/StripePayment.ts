// Class representing the Stripe SDK
export class StripePayment {
  constructor(private apiKey: string) { }

  charge(amount: number): boolean {
    // Simulating a Stripe API call
    console.log(`Stripe: Using API key: ${this.apiKey}`)
    console.log(`Stripe: Processing payment of ${amount}`)

    const isSuccess = Math.random() > 0.1 // 90% chance of success

    return isSuccess
  }
}
