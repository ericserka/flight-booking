import { Flight } from "../../core/models/Flight";
import { Passenger } from "../../core/models/passengers/Passenger";
import { Reservation } from "../../core/models/Reservation";
import { Seat } from "../../core/models/seats/Seat";

export class ReservationBuilder {
  private passenger!: Passenger
  private seat!: Seat
  private flight!: Flight

  build(): Reservation {
    return new Reservation(this.passenger, this.seat, this.flight)
  }

  setPassenger(passenger: Passenger) {
    this.passenger = passenger
    return this
  }

  setSeat(seat: Seat) {
    this.seat = seat
    return this
  }

  setFlight(flight: Flight) {
    this.flight = flight
    return this
  }
}
