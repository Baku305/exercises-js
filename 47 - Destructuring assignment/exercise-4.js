const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

let { id, firstName, lastName, age } = person;

for (let [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// let {id, firstName, lastName, age} = person

// const print = (id, firstName, lastName, age) => {
//   this.id = id;
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;

//   return this
// }

// console.log(print('1','mario','rossi',25));
