const person = {
  // ...
  firstName : '',
  lastName : '',

  get getName (){
    this.firstName
  },

  set changeName (value){
    this.firstName = value
  },

  get getSurname (){
    this.lastName
  },

  set changeSurname (value){
    this.lastName = value
  },

  fullName () {
    return `${this.firstName} ${this.lastName}`;
  },
}

// // getting property
// Object.defineProperty(person, "getName", {
//   get : function () {
//       return this.firstName;
//   }
// });

// // setting property
// Object.defineProperty(person, "changeName", {
//   set : function (value) {
//       this.firstName = value;
//   }
// });

// // getting property
// Object.defineProperty(person, "getSurname", {
//   get : function () {
//       return this.lastName;
//   }
// });

// // setting property
// Object.defineProperty(person, "changeSurname", {
//   set : function (value) {
//       this.lastName = value;
//   }
// });


const john = Object.create(person);
john.changeName = 'john'
john.changeSurname = 'doe'

const simon = Object.create(person)
simon.changeName = 'simon'
simon.changeSurname = 'collins'


console.log(john);
console.log(john.fullName()); // John Doe
console.log(simon);
console.log(simon.fullName()); // Simon Collins