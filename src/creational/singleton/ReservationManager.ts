import { Reservation } from "../../core/models/Reservation";

export class ReservationManager {
  private static instance: ReservationManager

  private constructor(private reservations: Reservation[] = []) { }

  public static getInstance() {
    if (!ReservationManager.instance) {
      ReservationManager.instance = new ReservationManager()
    }

    return ReservationManager.instance
  }

  addReservation(reservation: Reservation) {
    this.reservations.push(reservation)
  }
}
