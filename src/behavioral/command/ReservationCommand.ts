export interface ReservationCommand {
  execute(): void
  undo(): void
}
