import { PassengerVisitor } from "../../../behavioral/visitor/PassengerVisitor";
import { AdultPassenger } from "./AdultPassenger";
import { BasePassenger } from "./BasePassenger";

export class ChildPassenger extends BasePassenger {
  private guardianPassenger?: AdultPassenger
  private schoolGrade?: string

  constructor(name: string, age: number, documentNumber: string, private birthCertificateNumber: string) {
    super(name, age, documentNumber)

    // child passengers always need special needs
    this.addSpecialNeed("Boarding assistance")
    this.addSpecialNeed("In-flight monitoring")
  }

  // 3.10 VISITOR
  accept(visitor: PassengerVisitor): void {
    visitor.visitChildPassenger(this)
  }

  canTravelAlone() {
    return false
  }

  // child passenger specific methods
  setGuardianPassenger(guardian: AdultPassenger) {
    if (guardian instanceof AdultPassenger) {
      this.guardianPassenger = guardian
      guardian.addCompanionPassenger(this)
    }
    else {
      throw new Error("Only adult passengers can be responsible")
    }
  }

  getGuardianPassenger(): AdultPassenger | undefined {
    return this.guardianPassenger
  }

  getBirthCertificateNumber() {
    return this.birthCertificateNumber
  }

  setSchooldGrade(grade: string) {
    this.schoolGrade = grade
  }

  getSchoolGrade(): string | undefined {
    return this.schoolGrade
  }
}
