import { BaseInsurance } from "./BaseInsurance"

export class PremiumInsurance extends BaseInsurance {
  constructor() {
    const coverages = [
      "Cancellation with full refund",
      "International medical coverage",
      "Lost baggage with compensation",
      "24-hour assistance anywhere in the world",
      "Coverage for delays and missed connections"
    ]

    super(200, coverages)
  }
}
