import { BookingMediatorInterface } from "./BookingMediatorInterface";

export interface BookingComponent {
  setMediator(mediator: BookingMediatorInterface): void
}
