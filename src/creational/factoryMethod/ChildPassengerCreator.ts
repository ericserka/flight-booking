import { ChildPassenger } from "../../core/models/passengers/ChildPassenger";
import { Passenger } from "../../core/models/passengers/Passenger";
import { PassengerCreator } from "./PassengerCreator";

export interface ChildPassengerParams {
  name: string,
  age: number,
  documentNumber: string,
  birthCertificateNumber: string
}

export class ChildPassengerCreator extends PassengerCreator<ChildPassengerParams> {
  createPassenger(params: ChildPassengerParams): Passenger {
    return new ChildPassenger(params.name, params.age, params.documentNumber, params.birthCertificateNumber)
  }
}

