import { AdultPassenger } from "../../core/models/passengers/AdultPassenger"
import { ChildPassenger } from "../../core/models/passengers/ChildPassenger"

// 3.10 VISITOR
export interface PassengerVisitor {
  visitAdultPassenger(passenger: AdultPassenger): void
  visitChildPassenger(passenger: ChildPassenger): void
}
