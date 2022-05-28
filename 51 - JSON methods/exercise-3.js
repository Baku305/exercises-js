const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};

const person2 = JSON.stringify(person1);
const newPerson = JSON.parse(person2)

newPerson.address.city = 'Milan';

console.log(person1);
console.log(newPerson);
console.log(typeof(newPerson));