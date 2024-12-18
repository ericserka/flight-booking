import { Flight } from "../../core/models/Flight";
import { Payment } from "../../core/models/Payment";
import { Seat } from "../../core/models/seats/Seat";

export interface BookingMediatorInterface {
  notifyFlightUpdated(flight: Flight): void;
  notifySeatUpdated(seat: Seat): void;
  notifyPaymentProcessed(payment: Payment): void;
}
