import { Reservation } from "../../core/models/Reservation";
import { Iterator } from "./Iterator";
import { ReservationAggregator } from "./ReservationAggregator";
import { ReservationIterator } from "./ReservationIterator";

export class ReservationsCollection implements ReservationAggregator {
  constructor(private items: Reservation[] = []) { }

  public getItems() {
    return this.items
  }

  public getCount() {
    return this.items.length
  }

  public addItem(reservation: Reservation) {
    this.items.push(reservation)
  }

  public getIterator(): Iterator<Reservation> {
    return new ReservationIterator(this)
  }

  public getReverseIterator(): Iterator<Reservation> {
    return new ReservationIterator(this, true)
  }
}

// Examples of use

// const collection = new ReservationsCollection()

// collection.addItem(new Reservation())
// collection.addItem(new Reservation())
// collection.addItem(new Reservation())

// // Straight traversal
// const iterator = collection.getIterator()

// while (iterator.valid()) {
//   console.log(iterator.next());
// }

// // Reverse traversal
// const reverseIterator = collection.getReverseIterator();
// while (reverseIterator.valid()) {
//   console.log(reverseIterator.next());
// }
