import { Reservation } from "../../core/models/Reservation";
import { PayPalPaymentAdapter } from "../../structural/adapter/PayPalPaymentAdapter";
import { BookingTemplate } from "./BookingTemplate";

export class EconomyBooking extends BookingTemplate {

  constructor(private reservation: Reservation) {
    super();
  }

  protected checkAvailability(): void {
    const flight = this.reservation.getFlight();
    const seat = this.reservation.getSeat();

    if (!flight || !seat) {
      throw new Error("Invalid flight or seat");
    }

    if (!seat.isAvailable()) {
      throw new Error("Seat not available");
    }
  }

  protected reserveSeat(): void {
    const success = this.reservation.getSeat()?.reserve();
    if (!success) {
      throw new Error("Failed to reserve seat");
    }
  }

  protected processPayment(): void {
    const amount = this.reservation.getSeat()!.getPrice();
    const paymentProcessor = new PayPalPaymentAdapter("paypal-client-id", "paypal-client-secret");

    if (!paymentProcessor.processPayment(amount)) {
      throw new Error("Payment failed");
    }
  }

  protected sendConfirmation(): void {
    const content = `Your economy class reservation has been confirmed:\n
      Flight: ${this.reservation.getFlight()?.getFlightNumber()}\n
      Seat: ${this.reservation.getSeat()?.getSeatNumber()}`

    console.log(`sending ${content} email to ${this.reservation.getPassenger()?.getName()}`)
  }
}
