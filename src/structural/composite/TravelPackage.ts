import { TravelComponent } from "./TravelComponent";

export class TravelPackage implements TravelComponent {
  private components: TravelComponent[]

  constructor() {
    this.components = []
  }

  addComponent(component: TravelComponent) {
    this.components.push(component);
  }

  getCost(): number {
    return this.components.reduce((total, component) => total + component.getCost(), 0);
  }
}
