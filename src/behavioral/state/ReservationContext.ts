import { PendingReservationState } from "./PendingReservationState";
import { ReservationState } from "./ReservationState";

export class ReservationContext {
  private state: ReservationState

  constructor() {
    this.state = new PendingReservationState()
  }

  // State operations
  setState(state: ReservationState): void {
    this.state = state;
  }

  getState(): ReservationState {
    return this.state;
  }

  // State transitions
  next(): void {
    this.state.next(this);
  }

  previous(): void {
    this.state.previous(this);
  }

  cancel(): void {
    this.state.cancel(this);
  }

  getStatus(): string {
    return this.state.getStatus();
  }
}

// Example of use

// const reservation = new ReservationContext();
// console.log(reservation.getStatus()); // PENDING

// // Confirm reservation
// reservation.next();
// console.log(reservation.getStatus()); // CONFIRMED

// // Check in
// reservation.next();
// console.log(reservation.getStatus()); // CHECKED_IN

// // Complete reservation
// reservation.next();
// console.log(reservation.getStatus()); // COMPLETED

// // Try to proceed from final state
// reservation.next(); // "This is the final state"

// // Create another reservation to test cancellation
// const reservation2 = new ReservationContext();
// console.log(reservation2.getStatus()); // PENDING

// reservation2.cancel();
// console.log(reservation2.getStatus()); // CANCELLED

// // Try to proceed with cancelled reservation
// reservation2.next(); // "Cannot proceed with cancelled reservation"
