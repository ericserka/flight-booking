import { Flight } from "../../core/models/Flight";
import { Passenger } from "../../core/models/passengers/Passenger";
import { Payment, PaymentStatus } from "../../core/models/Payment";
import { Reservation } from "../../core/models/Reservation";
import { Seat } from "../../core/models/seats/Seat";
import { BookingMediatorInterface } from "./BookingMediatorInterface";
import { InventoryManager } from "./InventoryManager";
import { NotificationService } from "./notifications/NotificationService";

export class BookingMediator implements BookingMediatorInterface {
  private flights: Map<string, Flight>
  private seats: Map<string, Seat>

  constructor(private notificationService: NotificationService, private inventoryManager: InventoryManager) {
    this.flights = new Map()
    this.seats = new Map()
  }

  // register components

  registerFlight(flight: Flight) {
    flight.setMediator(this)
    this.flights.set(flight.getFlightNumber(), flight)
  }

  registerSeat(seat: Seat) {
    seat.setMediator(this)
    this.seats.set(seat.getSeatNumber(), seat)
  }

  // Notification methods - called by components

  notifyFlightUpdated(flight: Flight): void {
    this.inventoryManager.updateFlight(flight);

    if (flight.getAvailableSeats() < 10) {
      this.notificationService.notifyLowAvailability(flight);
    }
  }

  notifySeatUpdated(seat: Seat): void {
    const flight = this.findFlightBySeat(seat);
    if (flight) {
      const newAvailability = this.calculateFlightAvailability(flight);
      flight.updateAvailability(newAvailability);
    }
  }

  notifyPaymentProcessed(payment: Payment): void {
    if (payment.getStatus() === PaymentStatus.PROCESSED) {
      this.inventoryManager.confirmReservation();
      this.notificationService.sendPaymentConfirmation(payment);
    } else {
      this.notificationService.sendPaymentFailure(payment);
    }
  }

  // Private helper methods

  private findFlightBySeat(seat: Seat): Flight | null {
    return Array.from(this.flights.values())
      .find(flight => this.inventoryManager.flightHasSeat(flight, seat)) || null;
  }

  private calculateFlightAvailability(flight: Flight): number {
    return this.inventoryManager.getAvailableSeats(flight);
  }
}
