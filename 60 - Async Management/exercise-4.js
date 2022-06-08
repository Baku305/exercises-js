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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here

const fetchPersonById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (persons.find(person => person.id === id)){
        resolve(persons.find(person => person.id === id));
      }
    })
  }
  );
}

const fetchJobById = (id) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if (jobs.find(job => job.id === id)){
        resolve (jobs.find(job => job.id === id));
      }
    })
  })
}

Promise.all([fetchPersonById(1),fetchJobById(1)]).then((values) => {
  console.log(values);
  const job = values.find(value => value.jobTitle);
  const person = values.find(value => value.firstName);
  console.log(`${person.firstName} ${person.lastName} is a ${job.jobTitle}`);
  })

