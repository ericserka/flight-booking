import { Reservation } from "../../core/models/Reservation";
import { ReservationManager } from "../../creational/singleton/ReservationManager";
import { PaymentProcessor } from "../adapter/PaymentProcessor";
import { StripePaymentAdapter } from "../adapter/StripePaymentAdapter";

export class BookingFacade {
  private reservationManager: ReservationManager
  private paymentProcessor: PaymentProcessor

  constructor() {
    this.reservationManager = ReservationManager.getInstance()
    this.paymentProcessor = new StripePaymentAdapter("stripe-api-key")
  }

  bookReservation(reservation: Reservation) {
    this.reservationManager.addReservation(reservation)
    this.paymentProcessor.processPayment(reservation.getCost())
  }
}
