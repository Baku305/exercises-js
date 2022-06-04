function isAdult(value) {
  if (age >= 18){
    return `${value.firstName} can get in`
  }else{
    return `${value.firstName} can't get in`
  };
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const person2 = {
  id: 2,
  firstName: 'Paolo',
  lastName: 'Bianchi',
  age: 17
}

var {age,...other} = person;

var {age,...other} = person2;



console.log(isAdult(person2));