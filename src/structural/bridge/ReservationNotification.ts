import { Notification } from "./Notification";

export class ReservationNotification extends Notification {
  send(message: string) {
    // some business logic for reservation notification....
    this.implementation.send(message)
  }
}
