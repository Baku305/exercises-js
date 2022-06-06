let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// Variable swapping
let temp = num2;
num2 = num1;
num1 = temp;

console.log('After swap: ', num1, num2); // After swap: 20 10

//  dopo lo swap 'num1=20' 'num2=10'
let arr = [num1,num2]

let a = arr[0]
let b = arr[1]

console.log('with destructuration', a, b); 


// rivisitazione esercizio dopo la correzione del tutor

[num1,num2] = [num2,num1]

console.log('after correction', num1, num2);