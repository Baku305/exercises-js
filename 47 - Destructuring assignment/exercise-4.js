const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

let {id, firstName, lastName, age} = person

for (let item of Object.entries(person)) {
  console.log(`${item[0]}: ${item[1]}`);
}