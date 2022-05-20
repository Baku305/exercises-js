const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"

person2.firstName = "simon";

console.log(person1);
console.log(person2);

// modificando la proprietà in questo modo si nota come gli oggetti 
// si comportino diversamente dalle variabili. Infatti la modifica viene 
// fatta attraverso il riferimento dell'allocazione di memoria dedicata 
// a quella proprietà. non viene creata una copia dell'oggetto con un nuovo 
// nome a quella peroprietà. Ma direttamente cambiato il valore di quella 
// proprietà, che quindi verra cambiato anche nell'oggetto di origine. 
// A differenza delle variabili in cui il passaggio viene fatto per valore 
// e quindi creata una copia della variabile precende con dei nuovi valori.
