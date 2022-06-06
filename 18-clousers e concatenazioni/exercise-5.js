function memoize(fn) {
  let cache = {};
  // ...   
  return (n) => { 
    if (n in cache) {             
      return `${cache[n]}`;         
    } else {                      
      cache[n] = fn(n);
      return fn(n);
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

