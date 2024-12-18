import { Reservation } from "../../core/models/Reservation";
import { ReservationApprovalHandler } from "./ReservationApprovalHandler";

export class AvailabilityHandler extends ReservationApprovalHandler {
  process(reservation: Reservation) {
    console.log("Checking flight and seat availability...");

    if (!reservation.getFlight() || !reservation.getSeat()) {
      console.log("❌ Error: Flight or seat not specified");
      return false;
    }

    if (!reservation.getSeat()?.isAvailable()) {
      console.log("❌ Error: Seat not available");
      return false;
    }

    console.log("✅ Availability confirmed");
    return this.nextHandler ? this.nextHandler.process(reservation) : true;
  }
}
