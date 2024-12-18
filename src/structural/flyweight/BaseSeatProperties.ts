import { SeatCategory, SeatLocation } from "../../core/models/seats/Seat"

export interface BaseSeatProperties {
  available: boolean
  amenities: string[]
  seatNumber: string
  location: SeatLocation
  basePrice: number
  category: SeatCategory
  extraLegroom: boolean
}
