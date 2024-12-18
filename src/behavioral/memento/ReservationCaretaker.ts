import { ReservationMemento } from "./ReservationMemento";
import { ReservationOriginator } from "./ReservationOriginator";

export class ReservationCaretaker {
  private mementos: ReservationMemento[];

  constructor(private originator: ReservationOriginator) {
    this.mementos = [];
  }

  // Saves current state
  backup(description: string): void {
    this.mementos.push(this.originator.save(description));
  }

  // Restores last state
  undo(): void {
    if (!this.mementos.length) {
      return;
    }

    const memento = this.mementos.pop() as ReservationMemento;
    this.originator.restore(memento);
  }

  // Gets history of changes
  getHistory(): string[] {
    return this.mementos.map(memento =>
      `${memento.getDate().toLocaleString()}: ${memento.getDescription()}`
    );
  }
}

// Example of use

// Create initial reservation
// const reservation = new Reservation();

// // Create originator and caretaker
// const originator = new ReservationOriginator(reservation);
// const caretaker = new ReservationCaretaker(originator);

// // Save initial state
// caretaker.backup("Initial reservation");

// // Make some changes
// originator.updateState({price: 500});
// caretaker.backup("Price updated");

// originator.updateState({ 
//   seat: new BusinessClassSeat("2A", SeatLocation.WINDOW)
// });
// caretaker.backup("Seat upgraded");

// // Show history
// console.log("Reservation History:");
// console.log(caretaker.getHistory());

// // Undo last change
// caretaker.undo();
