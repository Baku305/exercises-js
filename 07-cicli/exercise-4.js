function nicknameMap(persons) {
  // ...
  const composerNikName = persons.map(composer=>{
    return `${composer.name}-${composer.age}`;
  })
  return composerNikName
}

//ESERCIZIO SVOLTO SEGUENDO LA TRACCIA ALLA LETTERA 

function nicknameWithFor(persons) {
  const withFor= []
  for (let i = 0; i < persons.length; i++) {
    const name = persons[i].name;
    const age = persons[i].age;
    let nikname = `${name}-${age}`;
    withFor.push(nikname);
  }
  return withFor;
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

const nicknames = nicknameMap(persons);
const nickWithFor = nicknameWithFor(persons);
console.log(persons);
console.log(nicknames);
console.log (nickWithFor)