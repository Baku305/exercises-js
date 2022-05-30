class Person {
  // ...
  constructor(firstName, lastName, ages) {
    this.name = firstName;
    this.surname = lastName;
    this.age = ages;
  }

  // get firstName() {
  //   this.name;
  // }

  set firstName(value) {
    this.name = value;
  }

  // get lastName() {
  //   this.surname;
  // }

  set lastName(value) {
    this.surname = value;
  }

  // get ages() {
  //   this.age;
  // }

  set ages(value) {
    this.age = value;
  }

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);
console.log(person);
