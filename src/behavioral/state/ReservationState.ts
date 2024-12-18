import { ReservationContext } from "./ReservationContext"

export interface ReservationState {
  next(reservationContext: ReservationContext): void
  previous(reservationContext: ReservationContext): void
  cancel(reservationContext: ReservationContext): void
  getStatus(): string
}
