import { NotificationImplementation } from "./NotificationImplementation";

export class SmsNotification implements NotificationImplementation {
  send(message: string) {
    console.log(`Sms sent: ${message}`)
  }
}

