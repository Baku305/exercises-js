class PersonClass {
  //   // ...
  name = "";
  surname = "";

  constructor(firstName, lastName) {
    this.name = firstName;
    this.surname = lastName;
  }

  get firstName() {
    this.name;
  }

  set firstName(value) {
    this.name = value;
  }

  get lastName() {
    this.surname;
  }

  set lastName(value) {
    this.surname = value;
  }

  fullName() {
    return `${this.name} ${this.surname}`;
  }
}


//--------------------------------------------------------------------------

function Person(firstName, lastName) {
  // ...
  this.name = firstName;
  this.surname = lastName;

  this.fullName = () =>  `${this.name} ${this.surname}`;
}

console.log('-----------------with constructor------------');

let john = new Person("john", "doe");
console.log(john);
console.log(john.fullName()); // John Doe

let simon = new Person("Simon", "collins");
console.log(simon);
console.log(simon.fullName()); // Simon Collins


console.log("-------------------with class-----------------");

let giovanni = new PersonClass("Giovanni", "domillo");
console.log(giovanni);
console.log(giovanni.fullName()); // John Doe

let simone = new PersonClass("Simone", "collinella");
console.log(simone);
console.log(simone.fullName()); // Simon Collins
