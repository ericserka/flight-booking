import { CancelledReservationState } from "./CancelledReservationState";
import { ConfirmedReservationState } from "./ConfirmedReservationState";
import { ReservationContext } from "./ReservationContext";
import { ReservationState } from "./ReservationState";

export class PendingReservationState implements ReservationState {
  next(reservation: ReservationContext): void {
    reservation.setState(new ConfirmedReservationState());
  }

  previous(_reservation: ReservationContext): void {
    console.log("Cannot go back from pending state");
  }

  cancel(reservation: ReservationContext): void {
    reservation.setState(new CancelledReservationState());
  }

  getStatus(): string {
    return "PENDING";
  }
}
