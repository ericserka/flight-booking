import { Reservation } from "../../core/models/Reservation";
import { ReservationManager } from "../../creational/singleton/ReservationManager";
import { ReservationCommand } from "./ReservationCommand";

export class CreateReservationCommand implements ReservationCommand {
  constructor(private reservation: Reservation) { }

  execute() {
    ReservationManager.getInstance().addReservation(this.reservation)
  }

  undo() {
    console.log("undoing...")
  }
}
