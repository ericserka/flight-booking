import { BookingComponent } from "../../behavioral/mediator/BookingComponent"
import { BookingMediatorInterface } from "../../behavioral/mediator/BookingMediatorInterface"
import { Cloneable } from "../../creational/prototype/Cloneable"
import { TravelComponent } from "../../structural/composite/TravelComponent"

export class Flight implements TravelComponent, Cloneable<Flight>, BookingComponent {
  private mediator?: BookingMediatorInterface

  constructor(private flightNumber: string, private availableSeats: number, private basePrice: number) { }

  getFlightNumber(): string {
    return this.flightNumber;
  }

  getAvailableSeats(): number {
    return this.availableSeats;
  }

  getBasePrice(): number {
    return this.basePrice;
  }

  // 2.3 - COMPOSITE
  getCost() {
    return 500
  }

  // 1.4 - PROTOTYPE
  clone(): Flight {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this)
  }

  // 3.4 - MEDIATOR

  setMediator(mediator: BookingMediatorInterface) {
    this.mediator = mediator
  }

  updateAvailability(newAvailableSeats: number) {
    this.availableSeats = newAvailableSeats
    this.mediator?.notifyFlightUpdated(this)
  }

  updatePrice(newPrice: number) {
    this.basePrice = newPrice
    this.mediator?.notifyFlightUpdated(this)
  }
} 
