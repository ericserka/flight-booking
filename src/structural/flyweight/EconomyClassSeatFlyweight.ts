import { BaseSeatProperties } from "./BaseSeatProperties";
import { EconomyClassSeatProperties } from "./EconomyClassSeatProperties";
import { SeatFlyweight } from "./SeatFlyweight";

export class EconomyClassSeatFlyweight implements SeatFlyweight {
  constructor(private readonly properties: BaseSeatProperties & EconomyClassSeatProperties) { }

  getProperties() {
    // returning properties shallow copy to prevent client code from directly modifying the flyweight's internal properties
    return { ...this.properties }
  }
}

