//Using constructor functions

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function() {
    console.log(2022 - this.birthYear);
};

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear) //We can define 'this' keyword with help of .call
    this.course = course;
};

Student.prototype = Object.create(Person.prototype); //linking two objects with object.create
//we have to create this connection before we add more methods to the prototype object of student

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2003, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); //true
console.log(mike instanceof Person); //true
console.log(mike instanceof Object); //true

Student.prototype.constructor = Student;

console.log(mike.__proto__.__proto__.__proto__);