function memoize(fn) {
  let cache = {};
  // ...
  return function holding(n){
    const res = fn(n)
    for (const key in cache){
      if (key === res){
        console.log (`direttamente dalla cache ${key}`)
      }else{
        cache.result = res;
      }
    }
    return cache.result
  }
}


function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(5));
