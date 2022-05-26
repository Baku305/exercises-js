const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const id = person.id;
const personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age
};

/**associo id:id2 per mantenere il codice sopra ed evitare di commentarlo */
let {id:id2, ...personInfo2} = person

console.log(id, personInfo);
console.log(id2, personInfo2);