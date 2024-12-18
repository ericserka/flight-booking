import { BaseInsurance } from "./BaseInsurance";

export class StandardInsurance extends BaseInsurance {
  constructor() {
    const coverages = [
      "Cancellation",
      "Lost baggage",
      "Limited medical assistance"
    ]

    super(50, coverages)
  }
}
