import { Flight } from "../../core/models/Flight";
import { Passenger } from "../../core/models/passengers/Passenger";
import { Seat } from "../../core/models/seats/Seat";

export interface ReservationState {
  passenger: Passenger
  flight: Flight
  seat: Seat
  price: number
}
