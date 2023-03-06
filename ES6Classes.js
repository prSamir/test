//class Expression

// const PersonCl = class {

// }

//class Declaration

class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    //one way of adding method

    calcAge() {
        console.log(2022 - this.birthYear);
    }
}

let jessica = new PersonCl('Jessica', 1982);

jessica.calcAge();

//another way of adding method

PersonCl.prototype.greet = function() {
    console.log('Hello, ' + this.firstName);
}

jessica.greet();

//1. classes are not hoisted
//2. classes are first-class citizens (we can pass and return in to the function)
//3. Classes are ALWAYS executed in strict mode