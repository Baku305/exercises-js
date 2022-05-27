function calculate() {
  // ...
  let calc = {

    result : 0,

    add: function (num){
      this.result += num;
      return this;
    }, 
    sub: function (num){
      this.result -= num;
      return this;
    }, 
    multiply: function (num){
      this.result *= num;
      return this;
    }, 
    divide: function (num){
      this.result /= num;
      return this;
    }, 
    printResult: function (){
      console.log(this.result);
      return this.result;
    }
  }
  return calc;
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7