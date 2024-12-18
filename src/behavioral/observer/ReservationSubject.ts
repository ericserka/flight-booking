import { Reservation } from "../../core/models/Reservation"
import { ReservationObserver } from "./ReservationObserver"

export interface ReservationSubject {
  attach(observer: ReservationObserver): void
  detach(observer: ReservationObserver): void
  notify(reservation: Reservation): void
}
