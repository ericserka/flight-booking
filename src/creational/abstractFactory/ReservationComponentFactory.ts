import { Insurance } from "../../core/models/insurances/Insurance";
import { Meal } from "../../core/models/meals/Meal";
import { Seat, SeatLocation } from "../../core/models/seats/Seat";

// Seat interfaces

export interface BaseSeatParams {
  seatNumber: string
  location: SeatLocation
}

export interface BusinessClassSeatParams extends BaseSeatParams {
  reclineDegreesAngle?: number
  hasPowerOutlet?: boolean
  hasPrivacyScreen?: boolean
}

export interface EconomyClassSeatParams extends BaseSeatParams {
  isExitRow?: boolean
}

// Meal interfaces

export interface BaseMealParams { } // marker interface - empty interface

export interface BusinessClassMealParams extends BaseMealParams { }

export interface EconomyClassMealParams extends BaseMealParams { }

// Insurance interfaces

export interface BaseInsuranceParams { } // marker interface - empty interface

export interface BusinessClassInsuranceParams extends BaseInsuranceParams { }

export interface EconomyClassInsuranceParams extends BaseInsuranceParams { }

// 1.2 - ABSTRACT FACTORY
export interface ReservationComponentFactory<
  TSeatParams extends BaseSeatParams,
  TMealParams extends BaseMealParams,
  TInsuranceParams extends BaseInsuranceParams
> {
  createSeat(params: TSeatParams): Seat;
  createMeal(params: TMealParams): Meal;
  createInsurance(params: TInsuranceParams): Insurance;
}
