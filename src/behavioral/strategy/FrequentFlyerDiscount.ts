import { DiscountStrategy } from "./DiscountStrategy";

export class FrequentFlyerDiscount implements DiscountStrategy {
  applyDiscount(price: number) {
    return price * 0.8
  }
}
