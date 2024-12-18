import { DiscountStrategy } from "./DiscountStrategy";

export class EarlyBookingDiscount implements DiscountStrategy {
  applyDiscount(price: number) {
    return price * 0.9
  }
}

