function adultFilter(persons) {
  // 
    const maggiorenni = persons.filter(function (obj) {
        return obj.age > 18;
      })
    return maggiorenni;
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

//ESERCIZIO SVOLTO SEGUENDO LA TRACCIA ALLA LETTERA 

function agefilter(persons){
const minorenni = [];
let calc; 
for (i = 0 ; i < persons.length; i++){
  calc = persons[i].age
  if (calc <= 18){
    minorenni.push(persons[i]);
  }
}
return minorenni
}



const adults = adultFilter(persons);
const age18 = agefilter(persons)
console.log(persons);
console.log(adults);
console.log(age18)



