import { ReservationContext } from "./ReservationContext";
import { ReservationState } from "./ReservationState";

export class CancelledReservationState implements ReservationState {
  next(_reservation: ReservationContext): void {
    console.log("Cannot proceed with cancelled reservation");
  }

  previous(_reservation: ReservationContext): void {
    console.log("Cannot modify cancelled reservation");
  }

  cancel(_reservation: ReservationContext): void {
    console.log("Reservation is already cancelled");
  }

  getStatus(): string {
    return "CANCELLED";
  }
}
