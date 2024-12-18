import { Reservation } from "../../core/models/Reservation";
import { BusinessClassSeat } from "../../core/models/seats/BusinessClassSeat";
import { StripePaymentAdapter } from "../../structural/adapter/StripePaymentAdapter";
import { BookingTemplate } from "./BookingTemplate";

export class BusinessBooking extends BookingTemplate {
  constructor(private reservation: Reservation) {
    super();
  }

  protected checkAvailability(): void {
    const flight = this.reservation.getFlight();
    const seat = this.reservation.getSeat();

    if (!flight || !seat) {
      throw new Error("Invalid flight or seat");
    }

    if (!(seat instanceof BusinessClassSeat)) {
      throw new Error("Invalid seat type for business class");
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

    // Do some Business class specific logic
  }

  protected processPayment(): void {
    const amount = this.reservation.getSeat()!.getPrice();
    const paymentProcessor = new StripePaymentAdapter("stripe-api-key");

    if (!paymentProcessor.processPayment(amount)) {
      throw new Error("Payment failed");
    }

    // Do some Business class specific logic
  }

  protected sendConfirmation(): void {
    const content = `Your business class reservation has been confirmed:\n
      Flight: ${this.reservation.getFlight()?.getFlightNumber()}\n
      Seat: ${this.reservation.getSeat()?.getSeatNumber()}\n
      Lounge Access: Included\n
      Priority Check-in: Yes`

    console.log(`sending ${content} email to ${this.reservation.getPassenger()?.getName()}`)

    // Business class specific: Send SMS

    console.log(`sending ${content} sms to ${this.reservation.getPassenger()?.getName()}`)
  }

  // Override hook method for business class specific error handling
  protected handleError(error: Error): void {
    super.handleError(error);
    // Notify VIP support team
    this.notifyVIPSupport(error);
  }

  private notifyVIPSupport(error: Error): void {
    // Logic for notifying VIP support team
    console.log(error.message)
  }
}
