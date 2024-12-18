import { Reservation } from "../../core/models/Reservation";
import { ReservationDecorator } from "./ReservationDecorator";

export class ExtraLuggageDecorator extends ReservationDecorator {
  private readonly EXTRA_LUGGAGE_COST = 100

  constructor(reservation: Reservation) {
    super(reservation)
  }

  getCost() {
    return this.wrapped.getCost() + this.EXTRA_LUGGAGE_COST
  }
}

