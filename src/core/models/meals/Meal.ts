export interface Meal {
  getName(): string;
  getDescription(): string;
  getCalories(): number;
  getDietaryRestrictions(): string[];
  getPrice(): number;
}
