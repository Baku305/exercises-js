function isAdult(value) {
  if (age >= 18){
    return `${value.firstName} can get in`
  }else{
    return `${value.firstName} can't get in`
  };
}

class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const person = new Person(1, 'John', 'Doe', 17);

let {age,...other} = person;

console.log(isAdult(person));
