const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const { id, firstName: naming, lastName: surname, age: old } = person;
console.log(id, naming, surname, old);