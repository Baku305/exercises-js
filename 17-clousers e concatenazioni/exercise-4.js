function calculate() {
  // ...
  let calc = {
    
    result : 0,

    add: function (num){
      result += num;
      return this;
    }, 
    sub: function (num){
      result -= num;
      return this;
    }, 
    multiply: function (num){
      result *= num;
      return this;
    }, 
    divide: function (num){
      result /= num;
      return this;
    }, 
    printResult: function (){
      console.log(result);
      return result;
    }
  }
  return calc;
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7