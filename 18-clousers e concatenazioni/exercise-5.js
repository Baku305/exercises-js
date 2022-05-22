function memoize(fn) {
  let cache = {
  };
  // ...
  return function (n) {
    const res = fn(n);
    cache.result = 0;
    for (let key in cache) {
      if (key === res) {
        return(`ciao ${res}`);
      } else {
        cache.result = `${res}`;
      }
    }
    return cache.result
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
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(5));

