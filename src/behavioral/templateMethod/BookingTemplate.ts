export abstract class BookingTemplate {
  // Template method that defines the algorithm
  public bookReservation(): boolean {
    try {
      this.checkAvailability();
      this.reserveSeat();
      this.processPayment();
      this.sendConfirmation();
      return true;
    } catch (error: any) {
      this.handleError(error);
      return false;
    }
  }

  // Required abstract steps
  protected abstract checkAvailability(): void;
  protected abstract reserveSeat(): void;
  protected abstract processPayment(): void;
  protected abstract sendConfirmation(): void;

  // Optional hook method
  protected handleError(error: Error): void {
    console.error("Booking failed:", error.message);
  }
}
