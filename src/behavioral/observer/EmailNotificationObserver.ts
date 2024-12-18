import { Reservation } from "../../core/models/Reservation";
import { ReservationObserver } from "./ReservationObserver";

export class EmailNotificationObserver implements ReservationObserver {
  update(reservation: Reservation) {
    console.log(`sending email notification for reservation ${reservation}`)
  }
}
