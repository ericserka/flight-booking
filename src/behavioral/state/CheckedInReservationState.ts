import { CompletedReservationState } from "./CompletedReservationState";
import { ConfirmedReservationState } from "./ConfirmedReservationState";
import { ReservationContext } from "./ReservationContext";
import { ReservationState } from "./ReservationState";

export class CheckedInReservationState implements ReservationState {
  next(reservation: ReservationContext): void {
    reservation.setState(new CompletedReservationState());
  }

  previous(reservation: ReservationContext): void {
    reservation.setState(new ConfirmedReservationState());
  }

  cancel(_reservation: ReservationContext): void {
    console.log("Cannot cancel after check-in");
  }

  getStatus(): string {
    return "CHECKED_IN";
  }
}
