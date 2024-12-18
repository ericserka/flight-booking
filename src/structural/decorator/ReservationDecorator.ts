import { Reservation } from "../../core/models/Reservation";

export abstract class ReservationDecorator extends Reservation {
  constructor(protected wrapped: Reservation) {
    super()
  }

  abstract getCost(): number
}

// client code example
//
// let reservation = new Reservation()
// reservation = new PriorityBoardingDecorator(reservation)
// reservation = new ExtraLuggageDecorator(reservation)
// will add the costs of priority boarding and extra baggage
// console.log(reservation.getCost())
