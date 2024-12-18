import { Reservation } from "../../core/models/Reservation";
import { ReservationApprovalHandler } from "./ReservationApprovalHandler";

export class DocumentValidationHandler extends ReservationApprovalHandler {
  process(reservation: Reservation): boolean {
    console.log("Validating passenger documents...");

    const passenger = reservation.getPassenger()

    if (!passenger) {
      console.log("❌ Error: passenger not specified");
      return false;
    }

    if (!passenger.getDocumentNumber()) {
      console.log("❌ Error: Document number not provided");
      return false;
    }

    console.log("✅ Documents validated");
    return this.nextHandler ? this.nextHandler.process(reservation) : true;
  }
}
