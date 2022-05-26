function isAdult(person) {
  if (age >= 18){
    return age
  };
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

let {age,...other} = person;


console.log(isAdult(person));