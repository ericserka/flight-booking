import { Reservation } from "../../core/models/Reservation";
import { ReservationDecorator } from "./ReservationDecorator";

export class PriorityBoardingDecorator extends ReservationDecorator {
  private readonly PRIORITY_BOARDING_COST = 50

  constructor(reservation: Reservation) {
    super(reservation)
  }

  getCost() {
    return this.wrapped.getCost() + this.PRIORITY_BOARDING_COST
  }
}
