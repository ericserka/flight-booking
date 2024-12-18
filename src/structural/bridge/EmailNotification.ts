import { NotificationImplementation } from "./NotificationImplementation";

export class EmailNotification implements NotificationImplementation {
  send(message: string) {
    console.log(`Email sent: ${message}`)
  }
}
