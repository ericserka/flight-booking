export class SmsService {
  send(phone: string, message: string) {
    console.log(`sending message ${message} to ${phone}`)
  }
}
