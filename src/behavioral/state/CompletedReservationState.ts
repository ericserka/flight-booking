import { ReservationContext } from "./ReservationContext";
import { ReservationState } from "./ReservationState";

export class CompletedReservationState implements ReservationState {
  next(_reservation: ReservationContext): void {
    console.log("This is the final state");
  }

  previous(_reservation: ReservationContext): void {
    console.log("Cannot modify completed reservation");
  }

  cancel(_reservation: ReservationContext): void {
    console.log("Cannot cancel completed reservation");
  }

  getStatus(): string {
    return "COMPLETED";
  }
}
