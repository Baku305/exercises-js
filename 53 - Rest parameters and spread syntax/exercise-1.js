function sum(n) {
    let [...m] = n;
    partial = 0;
    for(let i = 0; i<m.length; i++){
    partial += m[i];
    }
    return partial;
}

console.log(sum([1, 2, 3, 4, 5]));

console.log(sum([1,2,1,3,5,2,4,5,2,3,5,8,5]))