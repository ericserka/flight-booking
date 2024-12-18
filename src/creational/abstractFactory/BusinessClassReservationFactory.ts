import { PremiumInsurance } from "../../core/models/insurances/PremiumInsurance";
import { BusinessClassMeal } from "../../core/models/meals/BusinessClassMeal";
import { BusinessClassSeat } from "../../core/models/seats/BusinessClassSeat";
import {
  BusinessClassInsuranceParams,
  BusinessClassMealParams,
  BusinessClassSeatParams,
  ReservationComponentFactory,
} from "./ReservationComponentFactory";

export class BusinessClassReservationFactory
  implements
  ReservationComponentFactory<
    BusinessClassSeatParams,
    BusinessClassMealParams,
    BusinessClassInsuranceParams
  > {
  createSeat(params: BusinessClassSeatParams) {
    return new BusinessClassSeat(
      params.seatNumber,
      params.location,
      params.reclineDegreesAngle,
      params.hasPowerOutlet,
      params.hasPrivacyScreen
    );
  }

  createMeal(_params?: BusinessClassMealParams) {
    return new BusinessClassMeal();
  }

  createInsurance(_params?: BusinessClassInsuranceParams) {
    return new PremiumInsurance();
  }
}
