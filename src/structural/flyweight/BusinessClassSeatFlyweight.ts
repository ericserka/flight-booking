import { BaseSeatProperties } from "./BaseSeatProperties";
import { BusinessClassSeatProperties } from "./BusinessClassSeatProperties";
import { SeatFlyweight } from "./SeatFlyweight";

export class BusinessClassSeatFlyweight implements SeatFlyweight {
  constructor(private readonly properties: BaseSeatProperties & BusinessClassSeatProperties) { }

  getProperties() {
    // returning properties shallow copy to prevent client code from directly modifying the flyweight's internal properties
    return { ...this.properties }
  }
}
