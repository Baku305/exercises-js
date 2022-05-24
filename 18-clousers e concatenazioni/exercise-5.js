function memoize(fn) {
  let cache = {
  };
  // ...    
    /*if (n in cache) {             //con questa soluzione, aggiungendo le stringhe 'from cache' e 'calculated'
      return `${cache[n]}`;       //mi restituiva NaN come valore di 'n', ed ioltre la variabile 'res' è inutile 
    } else {                      //in questo caso. ragionandoci su ho risolto così
      let res = fn(n);
      cache[n] = res;
      return res;
    }*/

  return (n) => {

    if (n in cache) {
      return `From cache ${n}`;
    } else {
      cache[n] = fn(n);
      return `Calculated ${n}`
    }

  };


  //   return function() {
  //     var argsAsString = JSON.stringify(arguments);
  //     cache[argsAsString] = cache[argsAsString] || fn.apply(fn, arguments);
  //     return cache[argsAsString];
  //  };
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}


factorial = memoize(factorial);
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(10));

