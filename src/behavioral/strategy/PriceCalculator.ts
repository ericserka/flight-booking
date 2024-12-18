import { DiscountStrategy } from "./DiscountStrategy";
import { EarlyBookingDiscount } from "./EarlyBookingDiscount";

export class PriceCalculator {
  constructor(private discountStrategy: DiscountStrategy = new EarlyBookingDiscount()) { }

  // Runtime strategy change
  setStrategy(strategy: DiscountStrategy): void {
    this.discountStrategy = strategy;
  }

  // Calculate final price using current strategy
  calculatePrice(basePrice: number): number {
    return this.discountStrategy.applyDiscount(basePrice);
  }
}

// Example of use

// const calculator = new PriceCalculator();
// const basePrice = 1000;

// // Using default strategy (Early Booking)
// console.log("Early booking price:", calculator.calculatePrice(basePrice));

// // Change to frequent flyer discount
// calculator.setStrategy(new FrequentFlyerDiscount());
// console.log("Frequent flyer price:", calculator.calculatePrice(basePrice));
