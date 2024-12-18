import { BaseSeatProperties } from "./BaseSeatProperties"
import { BusinessClassSeatProperties } from "./BusinessClassSeatProperties"
import { EconomyClassSeatProperties } from "./EconomyClassSeatProperties"

export interface SeatFlyweight {
  getProperties(): BaseSeatProperties & (BusinessClassSeatProperties | EconomyClassSeatProperties)
}
