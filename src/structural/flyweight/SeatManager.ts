import { SeatCategory, SeatLocation } from "../../core/models/seats/Seat"
import { BaseSeatProperties } from "./BaseSeatProperties"
import { BusinessClassSeatProperties } from "./BusinessClassSeatProperties"
import { EconomyClassSeatProperties } from "./EconomyClassSeatProperties"
import { SeatFlyweight } from "./SeatFlyweight"
import { SeatFlyweightFactory } from "./SeatFlyweightFactory"

// Context - Seat Manager
export class SeatManager {
  private seats: Map<string, SeatFlyweight>

  constructor() {
    this.seats = new Map()
  }

  getSeatInfo(seatNumber: string) {
    const seat = this.seats.get(seatNumber)

    if (!seat) return undefined

    return seat.getProperties()
  }

  addBusinessClassSeat(
    seatNumber: string,
    location: SeatLocation,
    basePrice: number,
    extraLegroom: boolean,
    reclineDegreesAngle: number,
    hasPowerOutlet: boolean,
    hasPrivacyScreen: boolean,
    amenities: string[] = []
  ) {
    const properties: BaseSeatProperties & BusinessClassSeatProperties = {
      available: true,
      seatNumber,
      location,
      basePrice,
      category: SeatCategory.BUSINESS,
      extraLegroom,
      amenities,
      reclineDegreesAngle,
      hasPowerOutlet,
      hasPrivacyScreen
    }

    const flyweight = SeatFlyweightFactory.getBusinessClassFlyweight(properties)
    this.seats.set(seatNumber, flyweight)
  }

  addEconomyClassSeat(
    seatNumber: string,
    location: SeatLocation,
    basePrice: number,
    extraLegroom: boolean,
    isExitRow: boolean,
    amenities: string[] = []
  ) {
    const properties: BaseSeatProperties & EconomyClassSeatProperties = {
      available: true,
      seatNumber,
      location,
      basePrice,
      category: SeatCategory.ECONOMY,
      extraLegroom,
      amenities,
      isExitRow
    }

    const flyweight = SeatFlyweightFactory.getEconomyClassFlyweight(properties)
    this.seats.set(seatNumber, flyweight)
  }
}

// Example of use
// const seatManager = new SeatManager();

// // Adding business class seats with different configurations
// seatManager.addBusinessClassSeat(
//   '1A',
//   SeatLocation.WINDOW,
//   1200,
//   true,
//   180,
//   true,
//   true, // Privacy screen
//   ['Premium Meals', 'Champagne Service']
// );

// seatManager.addBusinessClassSeat(
//   '1B',
//   SeatLocation.AISLE,
//   1200,
//   true,
//   180,
//   true,
//   false, // Not privacy screen
//   ['Premium Meals', 'Champagne Service']
// );

// // Adding economy class seats with different configurations
// seatManager.addEconomyClassSeat(
//   '15A',
//   SeatLocation.WINDOW,
//   300,
//   false,
//   true, // Exit row
//   ['Standard Meal']
// );

// seatManager.addEconomyClassSeat(
//   '16A',
//   SeatLocation.WINDOW,
//   300,
//   false,
//   false, // Not exit row
//   ['Standard Meal']
// );

// // Consulting information
// console.log(seatManager.getSeatInfo('1A'));
// console.log(seatManager.getSeatInfo('1B'));
// console.log(seatManager.getSeatInfo('15A'));
// console.log(seatManager.getSeatInfo('16A'));
