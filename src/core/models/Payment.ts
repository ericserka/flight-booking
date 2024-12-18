import { BookingComponent } from "../../behavioral/mediator/BookingComponent";
import { BookingMediatorInterface } from "../../behavioral/mediator/BookingMediatorInterface";
import { PaymentProcessor } from "../../structural/adapter/PaymentProcessor";

export enum PaymentStatus {
  PENDING = 'PENDING',
  PROCESSED = 'PROCESSED',
  FAILED = 'FAILED'
}

export class Payment implements BookingComponent {
  private mediator?: BookingMediatorInterface

  constructor(private amount: number, private paymentProcessor: PaymentProcessor, private status: PaymentStatus = PaymentStatus.PENDING) { }

  // 3.4 - MEDIATOR
  setMediator(mediator: BookingMediatorInterface) {
    this.mediator = mediator
  }

  process() {
    const paymentProcessed = this.paymentProcessor.processPayment(this.amount)

    this.status = paymentProcessed ? PaymentStatus.PROCESSED : PaymentStatus.FAILED

    this.mediator?.notifyPaymentProcessed(this)
  }

  getStatus() {
    return this.status
  }

  getAmount() {
    return this.amount
  }
}
