export class EmailService {
  send(email: string, message: string) {
    console.log(`sending message ${message} to ${email}`)
  }
}
