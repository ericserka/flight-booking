export class PushNotificationService {
  send(deviceId: string, message: string) {
    console.log(`sending message ${message} to ${deviceId}`)
  }
}
