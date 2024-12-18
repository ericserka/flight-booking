import { BookingComponent } from "../../../behavioral/mediator/BookingComponent";
import { BookingMediatorInterface } from "../../../behavioral/mediator/BookingMediatorInterface";
import { Seat, SeatCategory, SeatLocation } from "./Seat";

export abstract class BaseSeat implements Seat, BookingComponent {
  protected available: boolean;
  protected amenities: string[];
  protected mediator?: BookingMediatorInterface

  constructor(
    protected seatNumber: string,
    protected location: SeatLocation,
    protected basePrice: number,
    protected category: SeatCategory,
    protected extraLegroom: boolean = false
  ) {
    this.available = true;
    this.amenities = [];
  }

  getSeatNumber() {
    return this.seatNumber;
  }

  getLocation() {
    return this.location;
  }

  isAvailable() {
    return this.available;
  }

  reserve() {
    if (this.available) {
      this.available = false;
      this.mediator?.notifySeatUpdated(this)

      return true;
    }

    return false;
  }

  release() {
    if (!this.available) {
      this.available = true;
      this.mediator?.notifySeatUpdated(this)

      return true;
    }

    return false;
  }

  getAmenities() {
    return this.amenities;
  }

  getCategory() {
    return this.category;
  }

  hasExtraLegroom() {
    return this.extraLegroom;
  }

  // 1.4 PROTOTYPE
  clone(): Seat {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  abstract getPrice(): number;

  // 3.4 - MEDIATOR
  setMediator(mediator: BookingMediatorInterface) {
    this.mediator = mediator
  }
}
