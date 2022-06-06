class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    // throw an exception if amount is negative
    try {
      if (amount > 0) {
        this.#amount += amount;
      } else {
        throw new Error('Amount must be positive'+ ', ' + `${amount}` + ' ' + 'is not a valid amount');
      }
    }
    catch (error) {
      console.log(error.message);
    }
  }

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    try {
      if (amount > 0 && amount < 10000) {
        this.#amount -= amount;
      } else {
        throw new Error(`Amount must be positive and less than 10000, ${amount} is not a valid amount`);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(-500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();