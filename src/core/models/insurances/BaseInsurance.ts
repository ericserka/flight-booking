import { Insurance } from "./Insurance";

export abstract class BaseInsurance implements Insurance {
  constructor(protected price: number, protected coverages: string[]) { }

  getCoverage() {
    return this.coverages.join(", ")
  }

  getPrice() {
    return this.price
  }
}
