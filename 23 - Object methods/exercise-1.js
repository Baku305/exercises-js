const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

for (let prop in person){
  console.log (prop, person[prop]);
}

console.log (`${Object.keys(person)}`)
console.log (`${Object.entries(person)}`)

let objentries = Object.entries(person);
console.log (Object.fromEntries(objentries));
