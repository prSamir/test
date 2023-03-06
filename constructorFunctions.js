'use strict'

const Person = function(firstName, birthYear) {
    //instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
    
    //Never do this!! Do not create a method inside a constructor function
    // this.calcAge = function() {
    //     console.log(2022 - birthYear)
    // };
};

const samir = new Person('Samir', 2003);
const anya = new Person('Anya', 2002);

console.log(samir, anya);

console.log(samir  instanceof Person);

//1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically returns {}

//Prototypes

//Every function in JS by default has a property called prototype

//Do this!!

Person.prototype.calcAge = function() {
    console.log(2022 - this.birthYear);
}

samir.calcAge();

console.log(samir.__proto__);

console.log(Person.prototype.isPrototypeOf(samir)) //true
console.log(Person.prototype.isPrototypeOf(Person)) //false
//                                            ^
  //                                          |
    //                                        |
//.prototypeOfLinkedObjects

Person.prototype.species = 'Homo sapiens';

//samir.species -- 'Homo sapiens' (Not its own property of the Object, own properties are the only ones
// that are declared directly on the Object itself)

console.log(samir.hasOwnProperty('birthYear')) //-- true
console.log(samir.hasOwnProperty('species')) //-- false

//all objects inherit methods from its prototype (inc. arrays and etc.)
// so? knowing that we can do :

let arr = [1, 2, 3, 6, 5, 6, 5, 3, 1];

Array.prototype.unique = function() {
    return[...new Set(this)];
}

console.log(arr.unique())

//and ALL arrays will inherit it. But, extending the prototype of a built-in object is not a good idea

