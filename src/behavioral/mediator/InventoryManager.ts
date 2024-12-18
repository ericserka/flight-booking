import { Flight } from "../../core/models/Flight";
import { Seat } from "../../core/models/seats/Seat";

export type InventoryStatus = 'AVAILABLE' | 'LOW_STOCK' | 'SOLD_OUT'

export class InventoryManager {
  // Maps to store flight and seat data
  private flightInventory: Map<string, number>;
  private seatAllocations: Map<string, Map<string, string>>;

  constructor() {
    this.flightInventory = new Map();
    this.seatAllocations = new Map();
  }

  // Updates flight availability in the inventory
  updateFlight(flight: Flight): void {
    this.flightInventory.set(
      flight.getFlightNumber(),
      flight.getAvailableSeats()
    );
  }

  // Confirms a reservation 
  confirmReservation(): void {
    console.log("reservation confirmed")
  }

  // Gets the number of available seats for a flight
  getAvailableSeats(flight: Flight): number {
    return this.flightInventory.get(flight.getFlightNumber()) || 0;
  }

  // Checks if a seat belongs to a specific flight
  flightHasSeat(flight: Flight, seat: Seat): boolean {
    const flightSeats = this.seatAllocations.get(flight.getFlightNumber());
    return flightSeats?.has(seat.getSeatNumber()) ?? false;
  }
}
