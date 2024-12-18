import { Meal } from "./Meal";

export abstract class BaseMeal implements Meal {
  constructor(
    protected name: string,
    protected description: string,
    protected calories: number,
    protected dietaryRestrictions: string[],
    protected price: number
  ) { }

  getName() {
    return this.name
  }

  getDescription() {
    return this.description
  }

  getCalories() {
    return this.calories
  }

  getDietaryRestrictions() {
    return this.dietaryRestrictions
  }

  getPrice() {
    return this.price
  }

  hasRestriction(restriction: string): boolean {
    return this.dietaryRestrictions.includes(restriction);
  }
}
