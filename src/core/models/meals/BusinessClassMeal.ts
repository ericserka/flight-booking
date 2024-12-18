import { BaseMeal } from "./BaseMeal";

export class BusinessClassMeal extends BaseMeal {
  private accompaniments: string[]
  private dessertOptions: string[]

  constructor() {
    super("Business Meal", "Gourmet meal served on business class flights", 800, ["gluten-free", "vegetarian", "kosher"], 75)

    this.accompaniments = ["Fresh bread", "Gourmet salad", "Cheese"]
    this.dessertOptions = ["Chocolate mousse", "Fruit pie", "Ice cream"]
  }

  getAccompaniments() {
    return this.accompaniments
  }

  getDessertOptions() {
    return this.dessertOptions
  }

  addAccompaniment(item: string): void {
    this.accompaniments.push(item)
  }

  chooseDessert(index: number): string {
    return index >= 0 && index < this.dessertOptions.length
      ? this.dessertOptions[index]
      : "no dessert";
  }

  // Overriding base method to add specific logic to add more complex pricing logic
  getPrice() {
    return this.price * 1.1 // 10% service fee
  }
}
