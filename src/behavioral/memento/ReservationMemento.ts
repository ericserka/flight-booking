import { ReservationState } from "./ReservationState";

export interface ReservationMemento {
  getState(): ReservationState
  getDate(): Date
  getDescription(): string
}
