import { AdultPassenger } from "../../core/models/passengers/AdultPassenger";
import { ChildPassenger } from "../../core/models/passengers/ChildPassenger";
import { PassengerVisitor } from "./PassengerVisitor";

export class DiscountVisitor implements PassengerVisitor {
  visitAdultPassenger(passenger: AdultPassenger) {
    passenger.setDiscount(passenger.getAge() > 60 ? 0.1 : 0)
  }

  visitChildPassenger(passenger: ChildPassenger) {
    passenger.setDiscount(passenger.getAge() < 12 ? 0.5 : 0.2)
  }
}
