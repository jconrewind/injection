class Bank {
  constructor() {
    this.cash = 0;
  }

  config({
    logger,
  }) {
    this.logger = logger;
  }

  deposit(amount) {
    this.cash += amount;

    if (this.logger) {
      this.logger.write(`deposit: ${amount}, current cash: ${this.cash}`);
    }

    return this.cash;
  }

  withdraw(amount) {
    if (amount <= this.cash) {
      this.cash -= amount;

      if (this.logger) {
        this.logger.write(`withdraw: ${amount}, current cash: ${this.cash}`);
      }

      return true;
    }
    if (this.logger) {
      this.logger.write('failed to withdraw!');
    }

    return false;
  }

  total() {
    if (this.logger) {
      this.logger.write(`check cash: ${this.cash}`);
    }

    return this.cash;
  }
}

module.exports = new Bank();
