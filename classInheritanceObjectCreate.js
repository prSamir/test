const PersonProto = {
    calcAge() {
        console.log(2022 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.birthYear = birthYear;
        this.firstName = firstName;
    },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto); 
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function() {
    console.log(`Hello, my name is ${this.firstName}, I'm ${2022 - this.birthYear} years old and I'm studying ${this.course}`)
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2000, 'Computer Science');

jay.introduce();
jay.calcAge();
