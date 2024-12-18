import { ChildPassenger } from "../../core/models/passengers/ChildPassenger";
import { Reservation } from "../../core/models/Reservation";
import { ReservationApprovalHandler } from "./ReservationApprovalHandler";

export class AgeRestrictionHandler extends ReservationApprovalHandler {
  process(reservation: Reservation): boolean {
    console.log("Verifying age restrictions...");

    const passenger = reservation.getPassenger();

    // Check if the child has a guardian
    if (passenger instanceof ChildPassenger && !passenger.canTravelAlone()) {
      const guardian = passenger.getGuardianPassenger();
      if (!guardian) {
        console.log("❌ Error: Criança sem acompanhante registrado");
        return false;
      }
    }

    console.log("✅ Age restrictions validated");
    return this.nextHandler ? this.nextHandler.process(reservation) : true;
  }
}
