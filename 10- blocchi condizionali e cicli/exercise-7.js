function sumUntil(maxValue) {
  // ..

  let i = 1; 
  let array = [];

  for(i ; i <= maxValue; i++) {
    (array.push(i));
  }

  const sum = array.reduce ((accumulator, total)=>{
    return accumulator + total;
  })

  return sum;
}


console.log(sumUntil(5));

function sumgabri (maxValue){
  let sum = 0
  for(let i=0;i<=maxValue;i++){
    sum = sum + i;
  }

  return sum;
}

console.log (sumgabri(5))