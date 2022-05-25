// Class definition
class Person{
    /*#name;
    #surname;

    constructor (firstName, lastName){
        this.name = firstName;
        this.surname = lastName;
    }

    get firstName(){
        return this.name
    }

    set firstName(value){
        this.name = value;
    }

    get lastName(){
        return this.surname
    }

    set lastName(value){
        this.surname = value;
    }*/

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const developer = new Person('Francesco', 'Cristini');
console.log(`${developer.firstName} ${developer.lastName}`);