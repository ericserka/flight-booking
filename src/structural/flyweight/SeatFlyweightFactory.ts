import { BaseSeatProperties } from "./BaseSeatProperties";
import { BusinessClassSeatFlyweight } from "./BusinessClassSeatFlyweight";
import { BusinessClassSeatProperties } from "./BusinessClassSeatProperties";
import { EconomyClassSeatFlyweight } from "./EconomyClassSeatFlyweight";
import { EconomyClassSeatProperties } from "./EconomyClassSeatProperties";
import { SeatFlyweight } from "./SeatFlyweight";

export class SeatFlyweightFactory {
  private static flyweights: Map<string, SeatFlyweight> = new Map()

  private static generateHash(properties: BaseSeatProperties & (BusinessClassSeatProperties | EconomyClassSeatProperties)): string {
    // creates a unique hash based on seat properties
    return Object.entries(properties)
      .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
      .map(([key, value]) => `${key}:${value}`)
      .join('|')
  }

  static getBusinessClassFlyweight(properties: BaseSeatProperties & BusinessClassSeatProperties): SeatFlyweight {
    const hash = this.generateHash(properties)

    if (!this.flyweights.has(hash)) {
      console.log('Creating new flyweight for Business Class');
      this.flyweights.set(hash, new BusinessClassSeatFlyweight(properties));
    } else {
      console.log('Reusing existing flyweight for Business Class');
    }

    return this.flyweights.get(hash)!;
  }

  static getEconomyClassFlyweight(properties: BaseSeatProperties & EconomyClassSeatProperties): SeatFlyweight {
    const hash = this.generateHash(properties)

    if (!this.flyweights.has(hash)) {
      console.log('Creating new flyweight for Economy Class');
      this.flyweights.set(hash, new EconomyClassSeatFlyweight(properties));
    } else {
      console.log('Reusing existing flyweight for Economy Class');
    }

    return this.flyweights.get(hash)!;
  }
}
