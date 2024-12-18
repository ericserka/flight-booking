import { Reservation } from "../../core/models/Reservation";
import { ReservationObserver } from "./ReservationObserver";
import { ReservationSubject } from "./ReservationSubject";

export class ConcreteReservationSubject implements ReservationSubject {
  private observers: ReservationObserver[]

  constructor() {
    this.observers = []
  }

  attach(observer: ReservationObserver): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('Observer has been attached already.');
    }

    this.observers.push(observer);
  }

  detach(observer: ReservationObserver): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Nonexistent observer.');
    }

    this.observers.splice(observerIndex, 1);
  }

  notify(reservation: Reservation) {
    this.observers.forEach(observer => observer.update(reservation))
  }
}
