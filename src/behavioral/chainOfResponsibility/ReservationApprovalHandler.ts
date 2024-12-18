import { Reservation } from "../../core/models/Reservation"

export abstract class ReservationApprovalHandler {
  protected nextHandler?: ReservationApprovalHandler

  setNextHandler(handler: ReservationApprovalHandler): ReservationApprovalHandler {
    this.nextHandler = handler

    return handler
  }

  abstract process(reservation: Reservation): boolean
}

// Example of use

// const availabilityHandler = new AvailabilityHandler();
// const documentValidationHandler = new DocumentValidationHandler();
// const ageRestrictionHandler = new AgeRestrictionHandler();
// const paymentApprovalHandler = new PaymentApprovalHandler(
//   new StripePaymentAdapter("stripe-api-key")
// );

// // Sets the chain

// availabilityHandler
//   .setNextHandler(documentValidationHandler)
//   .setNextHandler(ageRestrictionHandler)
//   .setNextHandler(paymentApprovalHandler);

// const approvalChain = availabilityHandler;

// const isApproved = approvalChain.process(new Reservation());

// console.log(`Final result of approval chain: ${isApproved}`);
