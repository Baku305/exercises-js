//ESERCIZIO CORRETTO

function isAdult({age, firstName,lastName} = person) {
  if (age >= 18){
    return `${firstName} ${lastName} is an adult`;
  }else{
    return `${firstName} ${lastName} is not an adult`;    
  };
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));





// function isAdult(value) {
//   if (age >= 18){
//     return `${value.firstName} can get in`
//   }else{
//     return `${value.firstName} can't get in`
//   };
// }

// class Person {
//   constructor(id, firstName, lastName, age) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
// }

// const person = new Person(1, 'John', 'Doe', 17);

// let {age,...other} = person;

// console.log(isAdult(person));

