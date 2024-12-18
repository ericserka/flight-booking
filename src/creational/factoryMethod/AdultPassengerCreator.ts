import { AdultPassenger } from "../../core/models/passengers/AdultPassenger";
import { Passenger } from "../../core/models/passengers/Passenger";
import { PassengerCreator } from "./PassengerCreator";

export interface AdultPassengerParams {
  name: string,
  age: number,
  documentNumber: string,
  profession: string
}

export class AdultPassengerCreator extends PassengerCreator<AdultPassengerParams> {
  createPassenger(params: AdultPassengerParams): Passenger {
    return new AdultPassenger(params.name, params.age, params.documentNumber, params.profession)
  }
}
