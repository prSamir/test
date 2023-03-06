//f.e. Array.from method is attached to the whole constructor, that is why [1,2,3].from wouldn't work,
//also Number.parseFloat() and etc.

//instance (static) methods with constructor functions

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.hey = function() {
    console.log(`hey`); 
    console.log(this);                    // in that case keyword 'this' refers to an entire constructor function
}                                        // because it is used as PERSON.hey

let jessica = new Person('Jessica', 1992)

Person.hey(jessica)

//Static methods with classes

class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    //one way of adding method

    calcAge() {
        console.log(2022 - this.birthYear);
    }

    static hey() {
        console.log('hey');
        console.log(this); // refers to an entire Class
    }
}

PersonCl.hey();