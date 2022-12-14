// ! npm run 3-4-2

export class BookingTrip {
  public execute(destination: string): string {
    try {
      const paymentResult = "đ¸  Paying trip to " + destination;
      console.log("âšī¸  transaction processed");
      const businessResult = "đ Booking trip " + paymentResult;
      console.log("âšī¸  action done");
      console.log("đ§ Trip booked " + businessResult);
      console.log("âšī¸  notification sent");
      return businessResult;
    } catch (error) {
      console.log("âšī¸ đĩâđĢ error: " + error);
      return "";
    }
  }
}

export class CancelTrip {
  public execute(destination: string): string {
    try {
      const paymentResult = "đ¤  Refunding trip to " + destination;
      console.log("âšī¸  transaction processed");
      const businessResult = "đ­  Cancelling trip " + paymentResult;
      console.log("âšī¸  action done");
      console.log("â Done " + businessResult);
      console.log("âšī¸  notification sent");
      return businessResult;
    } catch (error) {
      console.log("âšī¸ đĩâđĢ error: " + error);
      return "";
    }
  }
}

export class Client {
  private booking = new BookingTrip();
  private cancel = new CancelTrip();
  public run(): void {
    this.booking.execute("The Moon");
    this.cancel.execute("The Moon");
  }
}

const client = new Client();
client.run();
