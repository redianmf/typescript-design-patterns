class Logger {
  private static instance: Logger;

  private constructor() {}

  public static create(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  public log(message: string): void {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`${timestamp} | ${message}`);
  }
}

export default function singleton() {
  createUser();
  checkoutItem();
}

function createUser(): void {
  const userLog = Logger.create();
  userLog.log('Create user success...');
}

function checkoutItem(): void {
  const productLog = Logger.create();
  productLog.log('Checkout product success');
}
