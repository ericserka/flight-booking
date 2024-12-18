import { PassengerVisitor } from "../../../behavioral/visitor/PassengerVisitor";
import { Cloneable } from "../../../creational/prototype/Cloneable";

export interface Passenger extends Cloneable<Passenger> {
  getName(): string
  getAge(): number
  getDocumentNumber(): string
  getFrequentFlyerPoints(): number
  getDiscount(): number
  acceptTerms(termsVersion: string): boolean
  canTravelAlone(): boolean
  hasSpecialNeeds(): boolean
  addSpecialNeed(need: string): void

  // visitor method for Visitor Pattern
  accept(visitor: PassengerVisitor): void
}
