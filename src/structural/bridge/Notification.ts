import { NotificationImplementation } from "./NotificationImplementation"

export abstract class Notification {
  constructor(protected implementation: NotificationImplementation) { }

  abstract send(message: string): void
}
