import { BaseMeal } from "./BaseMeal";

export class StandardMeal extends BaseMeal {
  constructor() {
    super("Standard meal", "Simple meal served on economy class flights", 500, ["vegetarian"], 25)
  }

  // specific methods for specific standard meal behaviors

  isSnackAvailable(): boolean {
    return true
  }

  getComplementaryDrinks(): string[] {
    return ["water", "soda", "juice"]
  }
}
