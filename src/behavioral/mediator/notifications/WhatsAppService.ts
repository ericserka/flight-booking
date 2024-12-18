export class WhatsappService {
  send(phone: string, message: string) {
    console.log(`sending message ${message} to ${phone}`)
  }
}
