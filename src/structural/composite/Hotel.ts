import { TravelComponent } from "./TravelComponent";

export class Hotel implements TravelComponent {
  getCost(): number {
    return 200;
  }
}
