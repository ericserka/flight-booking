import { Reservation } from "../../core/models/Reservation";
import { Iterator } from "./Iterator";

export interface ReservationAggregator {
  // Retrieve an external iterator
  getIterator(): Iterator<Reservation>
}
