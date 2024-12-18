import { CancelledReservationState } from "./CancelledReservationState";
import { CheckedInReservationState } from "./CheckedInReservationState";
import { PendingReservationState } from "./PendingReservationState";
import { ReservationContext } from "./ReservationContext";
import { ReservationState } from "./ReservationState";

export class ConfirmedReservationState implements ReservationState {
  next(reservation: ReservationContext): void {
    reservation.setState(new CheckedInReservationState());
  }

  previous(reservation: ReservationContext): void {
    reservation.setState(new PendingReservationState());
  }

  cancel(reservation: ReservationContext): void {
    reservation.setState(new CancelledReservationState());
  }

  getStatus(): string {
    return "CONFIRMED";
  }
}

