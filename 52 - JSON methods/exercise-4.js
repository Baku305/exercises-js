const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};


/*const objEntries = Object.entries(person);
console.log('-----OGGETTO CON ENTRIES------');
console.log(objEntries);

const filterNum = objEntries.filter(([key, value]) => typeof value === 'number')

console.log('-----OGGETTO FILTRATO------');
console.log(filterNum);

const arrToObj = Object.fromEntries(filterNum)*/

const objEntries = Object.entries(person).filter(([key,value]) => typeof value === 'number')
const arrToObj = Object.fromEntries(objEntries)
const json = JSON.stringify(arrToObj);




//console.log(json); // Should return: { id: 1, age: 25 }
console.log(arrToObj);