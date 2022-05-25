const person = {
  firstName: 'John',
  lastName: 'Doe',
  
  address : {
    city : 'New York'
  },

  fullName () {
    return `${this.firstName} ${this.lastName}`;
  },
}


console.log(person.address.city); // Argh! Cannot read property 'city' of undefined
console.log(person.fullName()); // Argh! Cannot read property 'fullName()' of undefined