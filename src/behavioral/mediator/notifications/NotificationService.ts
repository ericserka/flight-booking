import { Flight } from "../../../core/models/Flight"
import { Passenger } from "../../../core/models/passengers/Passenger"
import { Payment } from "../../../core/models/Payment"
import { Reservation } from "../../../core/models/Reservation"
import { EmailService } from "./EmailService"
import { PushNotificationService } from "./PushNotificationService"
import { SmsService } from "./SmsService"
import { WhatsappService } from "./WhatsAppService"

export type NotificationType = 'EMAIL' | 'SMS' | 'PUSH' | 'WHATSAPP'
export type NotificationFrequency = 'INSTANT' | 'DAILY' | 'WEEKLY'

export interface NotificationPreferences {
  channels: NotificationType[]
  frequency: NotificationFrequency
  language: string
}

export class NotificationService {
  private emailService: EmailService;
  private smsService: SmsService;
  private pushService: PushNotificationService;
  private whatsappService: WhatsappService;
  private readonly preferences: Map<string, NotificationPreferences>;

  constructor() {
    this.emailService = new EmailService();
    this.smsService = new SmsService();
    this.pushService = new PushNotificationService();
    this.whatsappService = new WhatsappService();
    this.preferences = new Map();
  }

  // system specific notifications

  notifyLowAvailability(flight: Flight): void {
    const message = this.createLowAvailabilityMessage(flight);
    const recipients = this.getInterestedParties(flight);

    recipients.forEach(recipient => {
      const prefs = this.getPreferences(recipient.getName());
      this.sendNotification(recipient, message, prefs);
    });
  }

  sendPaymentConfirmation(payment: Payment): void {
    const message = this.createPaymentConfirmationMessage(payment);
    const reservation = this.findReservationByPayment(payment);

    if (reservation) {
      const passenger = reservation.getPassenger() as Passenger
      const prefs = this.getPreferences(passenger?.getName());
      this.sendNotification(passenger, message, prefs);
    }
  }

  sendPaymentFailure(payment: Payment): void {
    const message = this.createPaymentFailureMessage(payment);
    const reservation = this.findReservationByPayment(payment);

    if (reservation) {
      const passenger = reservation.getPassenger() as Passenger
      const prefs = this.getPreferences(passenger.getName());
      this.sendNotification(passenger, message, prefs);

      // Notify finance team
      this.notifyFinanceTeam(payment);
    }
  }

  // Private helper methods
  private sendNotification(
    recipient: Passenger,
    message: string,
    preferences: NotificationPreferences
  ): void {
    const sendTo = recipient.getName()

    preferences.channels.forEach(channel => {
      switch (channel) {
        case 'EMAIL':
          this.emailService.send(sendTo, message);
          break;
        case 'SMS':
          this.smsService.send(sendTo, message);
          break;
        case 'PUSH':
          this.pushService.send(sendTo, message);
          break;
        case 'WHATSAPP':
          this.whatsappService.send(sendTo, message);
          break;
      }
    });
  }

  private getPreferences(passengerName: string): NotificationPreferences {
    return (
      this.preferences.get(passengerName) || {
        channels: ['EMAIL'],
        frequency: 'INSTANT',
        language: 'en-US'
      }
    );
  }

  // Message creation methods
  private createLowAvailabilityMessage(flight: Flight): string {
    return `Only ${flight.getAvailableSeats()} seats available for flight ${flight.getFlightNumber()}`;
  }

  private createPaymentConfirmationMessage(payment: Payment): string {
    return `Payment of ${payment.getAmount()} processed successfully`;
  }

  private createPaymentFailureMessage(payment: Payment): string {
    return `Failed to process payment of ${payment.getAmount()}`;
  }

  private findReservationByPayment(_payment: Payment): Reservation | null {
    // Implementation of reservation search
    return null;
  }

  private getInterestedParties(_flight: Flight): Passenger[] {
    // Implementation of the search for interested parties
    return [];
  }

  private notifyFinanceTeam(_payment: Payment): void {
    // Implementation of Finance Team Notification
  }
}
