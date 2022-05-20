function sum(a, b) {
  return `(${a} + ${b})`;
}


function subtract(a, b) {
  return `(${a} - ${b})`;
}


function multiply(a, b) {
  return `${a} * ${b}`;
}


function divide(a, b) {
  return `${a} / ${b}`;
}


function log(a, b, c) {
  value = (divide(subtract((multiply(sum(a,b),sum(c,a))), a),c)); 
  return console.log(value);
}


log('2', '4', '5')

                                        //OPERAZIONE MATEMATICA

function sum2(a, b) {
  return a + b;
}


function subtract2(a, b) {
  return a - b;
}


function multiply2(a, b) {
  return a * b;
}


function divide2(a, b) {
  return a / b;
}


function log2(a, b, c) {
  value = (divide2(subtract2((multiply2(sum2(a,b),sum2(c,a))), a),c)); 
  return console.log(value);
}


log2(2, 4, 5)