function calculateAverageAge(persons) {
// ...
const mapping = persons.map((ageSum) => {
return ageSum.age;
})

const sum = mapping.reduce((total, amount) => {
  return total + amount;
})

return sum / persons.length
}

//ESERCIZIO SVOLTO SEGUENDO LA TRACCIA ALLA LETTERA  

function calculateWithFor(persons) {
  let media;
  let sum = 0;
  for(i=0;i<persons.length;i++){
    sum = sum + persons[i].age;
  }

  media = sum/persons.length;
  return media;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const averageAge = calculateAverageAge(persons);
const withFor = calculateWithFor(persons);
console.log(persons);
console.log(averageAge);
console.log (withFor);