const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if (persons.find(person => person.id === id)) {
        resolve(persons.find(person => person.id === id));
      }
      reject(new Error('Person not found'));
    }, 1000);
  });
}

fetchPersonById(1).then((person) => console.log(person));