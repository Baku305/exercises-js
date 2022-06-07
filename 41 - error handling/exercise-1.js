class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    // throw an exception if amount is negative
    try{
      if (amount > 0) {
        this.#amount += amount;
        console.log(`${amount} added to account`);
      } else {
        throw new Error(`Amount must be positive, ${amount} is not a valid amount`);
      }
    } 
    catch (error) {
      console.log(error.message);
    };
    
  }
  

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
      try {
        if (amount > 0 && amount < 10000 && this.#amount >= amount) {
          this.#amount -= amount;
          console.log(`${amount} withdrawn from account`);
        }
        else if(amount >= 10000) {
          throw new Error(`You can't withdraw more than 10000`);
        }
        else if (this.#amount < amount) {
          throw new Error(`You don't have enough money in your account, can't withdraw more than ${this.#amount}`);
        }
        else {
          throw new Error(`Amount must be positive, ${amount} is not a valid amount`);
        }
      }
        catch(error) {
          console.log(error.message);
        } 
    } 


  

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(10000);
setTimeout(() => bankAccount.deposit(100) , 1000);
setTimeout(() => bankAccount.deposit(-500) , 1500);
setTimeout(() => bankAccount.deposit(500) , 2000);
setTimeout(() => bankAccount.withdraw(5000) , 2500);
setTimeout(() => bankAccount.withdraw(10000) , 3000); // This operation should not be possible, because you cannot withdraw more than the account balance
setTimeout(() => bankAccount.withdraw(7000) , 3500);
setTimeout(() => bankAccount.withdraw(-10) , 4000);
setTimeout(() => bankAccount.view() , 4500);

