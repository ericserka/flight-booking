import { Passenger } from "../../core/models/passengers/Passenger";

export abstract class PassengerCreator<T> {
  abstract createPassenger(params: T): Passenger
}
