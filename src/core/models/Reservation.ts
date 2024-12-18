import { ReservationBuilder } from "../../creational/builder/ReservationBuilder";
import { Cloneable } from "../../creational/prototype/Cloneable";
import { Flight } from "./Flight";
import { Passenger } from "./passengers/Passenger";
import { Seat } from "./seats/Seat";

export class Reservation implements Cloneable<Reservation> {
  private basePrice: number

  constructor(private passenger?: Passenger, private seat?: Seat, private flight?: Flight) {
    this.basePrice = 0
  }

  // 1.4 - PROTOTYPE
  clone(): Reservation {
    const clonedPassenger = this.passenger?.clone()
    const clonedSeat = this.seat?.clone()
    const clonedFlight = this.flight?.clone()

    const clonedReservation = new Reservation(clonedPassenger, clonedSeat, clonedFlight)

    return clonedReservation
  }

  // 1.3 BUILDER
  static builder() {
    return new ReservationBuilder()
  }

  getCost() {
    return this.basePrice + (this.seat?.getPrice() || 0)
  }

  getPassenger() {
    return this.passenger
  }

  getSeat() {
    return this.seat
  }

  getFlight() {
    return this.flight
  }
}
