import { PassengerVisitor } from "../../../behavioral/visitor/PassengerVisitor";
import { BasePassenger } from "./BasePassenger";
import { ChildPassenger } from "./ChildPassenger";
import { Passenger } from "./Passenger";

export class AdultPassenger extends BasePassenger {
  private companionPassengers: Passenger[]
  private travelDocuments: string[]

  constructor(name: string, age: number, documentNumber: string, private profession: string) {
    super(name, age, documentNumber)
    this.companionPassengers = []
    this.travelDocuments = []
  }

  // 3.10 VISITOR
  accept(visitor: PassengerVisitor): void {
    visitor.visitAdultPassenger(this)
  }

  canTravelAlone() {
    return true
  }

  // adult passenger specific methods
  addCompanionPassenger(passenger: Passenger): void {
    if (passenger instanceof ChildPassenger) {
      this.companionPassengers.push(passenger)
    }
    else {
      throw new Error("Only child passengers can be accompanied")
    }
  }

  getCompanionPassengers() {
    return this.companionPassengers
  }

  getProfession() {
    return this.profession
  }

  addTravelDocument(document: string): void {
    this.travelDocuments.push(document)
  }

  getTravelDocuments() {
    return this.travelDocuments
  }
}
