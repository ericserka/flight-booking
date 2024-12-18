import { ReservationMemento } from "./ReservationMemento";
import { ReservationState } from "./ReservationState";

export class ConcreteReservationMemento implements ReservationMemento {
  private date: Date
  private state: ReservationState

  constructor(state: ReservationState, private description: string) {
    this.date = new Date()
    this.state = { ...state }
  }

  getState() {
    return { ...this.state }
  }

  getDate(): Date {
    return this.date;
  }

  getDescription(): string {
    return this.description;
  }
}
