import { Flight } from "../../core/models/Flight";
import { Passenger } from "../../core/models/passengers/Passenger";
import { Reservation } from "../../core/models/Reservation";
import { Seat } from "../../core/models/seats/Seat";
import { ConcreteReservationMemento } from "./ConcreteReservationMemento";
import { ReservationMemento } from "./ReservationMemento";
import { ReservationState } from "./ReservationState";

export class ReservationOriginator {
  private passenger: Passenger;
  private flight: Flight;
  private seat: Seat;
  private price: number;

  constructor(reservation: Reservation) {
    this.passenger = reservation.getPassenger() as Passenger
    this.flight = reservation.getFlight() as Flight
    this.seat = reservation.getSeat() as Seat
    this.price = this.calculatePrice()
  }

  // Updates reservation state
  updateState(
    updates: Partial<ReservationState>
  ): void {
    Object.assign(this, updates);
  }

  // Creates a memento
  save(description: string): ReservationMemento {
    return new ConcreteReservationMemento(
      {
        passenger: this.passenger,
        flight: this.flight,
        seat: this.seat,
        price: this.price
      },
      description
    );
  }

  // Restores from memento
  restore(memento: ReservationMemento): void {
    const state = memento.getState();
    this.passenger = state.passenger;
    this.flight = state.flight;
    this.seat = state.seat;
    this.price = state.price;
  }

  // Gets current state as Reservation
  getReservation(): Reservation {
    const reservation = new Reservation(this.passenger, this.seat, this.flight);
    return reservation;
  }

  private calculatePrice(): number {
    return this.flight.getBasePrice() + this.seat.getPrice();
  }
}
