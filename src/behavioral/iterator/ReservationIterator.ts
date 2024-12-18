import { Reservation } from "../../core/models/Reservation";
import { Iterator } from "./Iterator";
import { ReservationsCollection } from "./ReservationsCollection";

export class ReservationIterator implements Iterator<Reservation> {
  private position: number

  constructor(private collection: ReservationsCollection, private reverse: boolean = false) {
    this.position = this.rewoundPosition()
  }

  public rewind() {
    this.position = this.rewoundPosition()
  }

  public current() {
    return this.collection.getItems()[this.position]
  }

  public key() {
    return this.position
  }

  public next() {
    const item = this.current()

    this.position += this.reverse ? -1 : 1

    return item
  }

  public valid() {
    if (this.reverse) return this.position >= 0

    return this.position < this.collection.getCount()
  }

  private rewoundPosition() {
    return this.reverse ? this.collection.getCount() - 1 : 0
  }
}
