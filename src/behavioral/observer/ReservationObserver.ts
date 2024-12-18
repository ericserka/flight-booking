import { Reservation } from "../../core/models/Reservation";

export interface ReservationObserver {
  update(reservation: Reservation): void
}
