import { Reservation } from "../../core/models/Reservation";
import { PaymentProcessor } from "../../structural/adapter/PaymentProcessor";
import { ReservationApprovalHandler } from "./ReservationApprovalHandler";

export class PaymentApprovalHandler extends ReservationApprovalHandler {
  constructor(private paymentProcessor: PaymentProcessor) {
    super()
  }

  process(reservation: Reservation): boolean {
    console.log("Processing payment...");

    const totalCost = reservation.getCost();
    if (totalCost <= 0) {
      console.log("❌ Error: Invalid cost");
      return false;
    }

    const paymentSuccess = this.paymentProcessor.processPayment(totalCost);
    if (!paymentSuccess) {
      console.log("❌ Error: Payment processing failure");
      return false;
    }

    console.log("✅ Payment approved");
    return this.nextHandler ? this.nextHandler.process(reservation) : true;
  }
}
