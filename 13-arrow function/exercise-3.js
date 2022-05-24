const sum = (a, b) => `(${a} + ${b})`;



const subtract = (a, b) => `(${a} - ${b})`;



const multiply = (a, b) => `${a} * ${b}`;



const divide = (a, b) =>  `${a} / ${b}`;



function log(a, b, c) {
  value = (divide(subtract((multiply(sum(a, b), sum(c, a))), a), c));
  return console.log(value);
} 
  



log('2', '4', '5')

                                        //OPERAZIONE MATEMATICA

console.log('--------------Math Operation---------------');

const sum2 = (a, b) => a + b;



const subtract2 = (a, b) => a - b;



const multiply2 = (a, b) => a * b;



const divide2 = (a, b) => a / b;



function log2(a, b, c) {
  value = (divide2(subtract2((multiply2(sum2(a,b),sum2(c,a))), a),c)); 
  return console.log(value);
}


log2(2, 4, 5)