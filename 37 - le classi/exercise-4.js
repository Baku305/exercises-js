class BankAccount {
    #residuo = 0

    constructor (residuo){
        this.#residuo = residuo
    }

    deposit(value){
        let res = this.residuo + value
        this.#residuo = res
    }

    view(){
        return this.#residuo 
    }

    withdraw(value){
        let res = this.#residuo - value
        this.residuo = res
    }
}


const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();

console.log(bankAccount);