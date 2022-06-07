class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try {
      if (amount < 0) {
        throw new NegativeAmountError('The amount provided cannot be negative'); // Use custom Error class
      } else {
        this.#amount += amount;
      }
    } catch (error) {
      console.log(error.message);
    }

  }

  withdraw(amount) {
    try {
      if (amount < 0) {
        throw new NegativeAmountError('The amount provided cannot be negative'); // Use custom Error class
      }
  
      else if (this.#amount < amount) {
        throw new WithdrawNotPermittedError('You cannot withdraw more than account balance'); // Use custom Error class
      }

      else if (amount >= 10000){
        throw new WithdrawNotPermittedError('You cannot withdraw more than 10000'); // Use custom Error class
      }

      else {
        this.#amount -= amount;
      }
    } 
    catch (error) {
      console.log(error.message);
    }
  }

  view() {
    console.log(this.#amount);
  }
}

class NegativeAmountError extends Error {
  constructor(message){
    super(message);
    this.name = 'NegativeAmountError';
  }
}

class WithdrawNotPermittedError extends Error {
  constructor(message){
    super(message);
    this.name = 'NegativeAmountError';
  }
}


try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(20500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log('Something went wrong during bank account operations');
}