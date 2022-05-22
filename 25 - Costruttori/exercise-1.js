class Person {
  // ... 
  name = '';
  surname = '';

  constructor (firstName, lastName){
    this.name= firstName;
    this.surname= lastName;
  }

  get firstName (){
    this.name;
  };

  set firstName (value){
    this.name = value;
  };

  get lastName (){
  this.surname;
  };

  set lastName(value){
    this.surname = value;
  };

  fullName(){
    return `${this.name} ${this.surname}`
  }
}

let john =  new Person ('john','doe'); 
console.log(john);


let simon = new Person('simon','collins');
console.log(simon);




console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins

