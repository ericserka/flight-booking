import { BaseSeat } from "./BaseSeat";
import { SeatCategory, SeatLocation } from "./Seat";

export class BusinessClassSeat extends BaseSeat {
  private readonly WINDOW_PREMIUM = 100;
  private readonly AISLE_PREMIUM = 75;

  constructor(
    seatNumber: string,
    location: SeatLocation,
    private reclineDegreesAngle: number = 180,
    private hasPowerOutlet: boolean = true,
    private hasPrivacyScreen: boolean = true
  ) {
    super(seatNumber, location, 500, SeatCategory.BUSINESS, true);

    this.amenities = [
      "Premium entertainment system",
      "USB charger",
      "Premium amenity kit",
      "Premium blanket and pillow",
      "Noise-canceling headphones",
    ];

    if (this.hasPrivacyScreen) {
      this.amenities.push("Privacy screen");
    }

    if (this.reclineDegreesAngle > 0) {
      this.amenities.push("Reclining seat");
    }

    if (this.hasPowerOutlet) {
      this.amenities.push("Power outlet");
    }
  }

  // concrete implementation of the abstract method
  getPrice() {
    switch (this.location) {
      case SeatLocation.WINDOW:
        return this.basePrice + this.WINDOW_PREMIUM;

      case SeatLocation.AISLE:
        return this.basePrice + this.AISLE_PREMIUM;

      default:
        return this.basePrice;
    }
  }

  // business class seat specific methods

  getReclineDegreesAngle() {
    return this.reclineDegreesAngle;
  }

  getHasPowerOutlet() {
    return this.hasPowerOutlet;
  }

  getHasPrivacyScreen() {
    return this.hasPrivacyScreen;
  }

  setSleepMode() {
    // fully reclined
    this.reclineDegreesAngle = 180;
  }
}
