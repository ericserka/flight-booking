import { Passenger } from "./Passenger";
import { PassengerVisitor } from "../../../behavioral/visitor/PassengerVisitor";

export abstract class BasePassenger implements Passenger {
  protected frequentFlyerPoints: number
  protected specialNeeds: string[]
  protected acceptedTermsVersions: string[]
  protected discount: number

  constructor(protected name: string, protected age: number, protected documentNumber: string) {
    this.frequentFlyerPoints = 0
    this.specialNeeds = []
    this.acceptedTermsVersions = []
    this.discount = 0
  }

  getName() {
    return this.name
  }

  getAge() {
    return this.age
  }

  getDocumentNumber() {
    return this.documentNumber
  }

  getFrequentFlyerPoints() {
    return this.frequentFlyerPoints
  }

  setDiscount(discount: number) {
    this.discount = discount
  }

  getDiscount() {
    return this.discount
  }

  addFrequentFlyerPoints(points: number) {
    this.frequentFlyerPoints += points
  }

  acceptTerms(termsVersion: string): boolean {
    if (!this.acceptedTermsVersions.includes(termsVersion)) {
      this.acceptedTermsVersions.push(termsVersion)

      return true
    }

    return false
  }

  hasSpecialNeeds(): boolean {
    return this.specialNeeds.length > 0
  }

  addSpecialNeed(need: string): void {
    this.specialNeeds.push(need)
  }

  getSpecialNeeds() {
    return this.specialNeeds
  }

  // 1.4 PROTOTYPE 
  clone(): Passenger {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this)
  }

  abstract canTravelAlone(): boolean

  // 3.10 - VISITOR
  abstract accept(visitor: PassengerVisitor): void
}
