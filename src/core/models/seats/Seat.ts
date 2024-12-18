import { BookingMediatorInterface } from "../../../behavioral/mediator/BookingMediatorInterface"
import { Cloneable } from "../../../creational/prototype/Cloneable"

export enum SeatLocation {
  WINDOW = 'WINDOW',
  MIDDLE = 'MIDDLE',
  AISLE = 'AISLE'
}

export enum SeatCategory {
  ECONOMY = 'ECONOMY',
  BUSINESS = 'BUSINESS'
}

export interface Seat extends Cloneable<Seat> {
  getSeatNumber(): string
  getLocation(): SeatLocation
  isAvailable(): boolean
  getPrice(): number
  reserve(): boolean
  release(): boolean
  getAmenities(): string[]
  getCategory(): SeatCategory
  hasExtraLegroom(): boolean
  setMediator(mediator: BookingMediatorInterface): void
}
