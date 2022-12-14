import { LogEntry, Logger } from "./logger";
export interface Observer {
  notify(businessEvent: string, message: string): void;
}

/**
 * A Logger wrapper that implements the Observer interface.
 * Is a decorator that adds the notify method to the Logger class.
 */
export class LoggerObserver implements Observer {
  private logger: Logger = new Logger();

  public notify(businessEvent: string, message: string) {
    // * the callback logic
    const entry: LogEntry = {
      category: businessEvent === "exception" ? "error" : "info",
      message: businessEvent + " - " + message,
      timestamp: new Date(),
    };
    this.logger.log(entry);
  }
}

export class EmailObserver implements Observer {
  public notify(businessEvent: string, message: string) {
    console.log("Email sent to admin");
  }
}
