import { BaseSeat } from "./BaseSeat";
import { SeatCategory, SeatLocation } from "./Seat";

export class EconomyClassSeat extends BaseSeat {
  private readonly EXIT_ROW_EXTRA_COST = 50;
  private readonly WINDOW_SEAT_EXTRA_COST = 25;
  private isExitRow: boolean;

  constructor(
    seatNumber: string,
    location: SeatLocation,
    isExitRow: boolean = false
  ) {
    super(seatNumber, location, 100, SeatCategory.ECONOMY, isExitRow);

    this.isExitRow = isExitRow;

    this.amenities = ["Magazine rack", "Retractable table"];

    if (this.isExitRow) {
      this.amenities.push("Extra legroom (emergency row)");
    }
  }

  // concrete implementation of the abstract method
  getPrice() {
    if (this.isExitRow) {
      return this.basePrice + this.EXIT_ROW_EXTRA_COST;
    }

    if (this.location === SeatLocation.WINDOW) {
      return this.basePrice + this.WINDOW_SEAT_EXTRA_COST;
    }

    return this.basePrice;
  }

  // economy class seat specific methods

  isExitRowSeat() {
    return this.isExitRow;
  }

  // check if the seat is eligible for a discount
  canBeDiscounted() {
    return !this.isExitRow && this.location === SeatLocation.MIDDLE;
  }
}
