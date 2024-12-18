import { StandardInsurance } from "../../core/models/insurances/StandardInsurance";
import { StandardMeal } from "../../core/models/meals/StandardMeal";
import { EconomyClassSeat } from "../../core/models/seats/EconomyClassSeat";
import {
  EconomyClassInsuranceParams,
  EconomyClassMealParams,
  EconomyClassSeatParams,
  ReservationComponentFactory,
} from "./ReservationComponentFactory";

export class EconomyClassReservationFactory
  implements
  ReservationComponentFactory<
    EconomyClassSeatParams,
    EconomyClassMealParams,
    EconomyClassInsuranceParams
  > {
  createSeat(params: EconomyClassSeatParams) {
    return new EconomyClassSeat(
      params.seatNumber,
      params.location,
      params.isExitRow
    );
  }

  createMeal(_params?: EconomyClassMealParams) {
    return new StandardMeal();
  }

  createInsurance(_params?: EconomyClassInsuranceParams) {
    return new StandardInsurance();
  }
}
