import { Reservation } from "../../core/models/Reservation";
import { UserRole } from "../../core/types/UserRole";

export class SecureReservationProxy {
  constructor(private userRole: UserRole, private reservation: Reservation) { }

  canModifyReservation() {
    return ["admin", "customer"].includes(this.userRole)
  }

  modifyReservation() {
    if (this.canModifyReservation()) {
      console.log(`Modifying reservation... ${this.reservation.getCost()}`)
    }
    else {
      throw new Error("Unauthorized access")
    }
  }
}
