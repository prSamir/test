class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2022 - this.birthYear);
    }

    get age() {
        return 2022 - this.birthYear
    }

    set fullName(name) {
        if(name.includes(' ')) {
            this._fullName = name; //sets a new property name "_fullName instead of fullName"
        }
        else {
            alert('Given name is not a full name')
        }
    }

    get fullName() {
        return this._fullName; //used to make "fullName" again
    }

    static hey() {
        console.log('Hey there!')
    }
}

class StudentCl extends PersonCl{
    constructor(fullName, birthYear, course) {
        //Always need to happen first
        super(fullName, birthYear); //creates 'this' keyword in subclass
        this.course = course;
    }

    introduce() {
        console.log(`Hi! My name is ${this.fullName}, I am ${this.age} and I am studying ${this.course}`)
    }

    calcAge() {
        console.log(`I'm ${this.age}`)
    }

}

const martha = new StudentCl('Martha Jones', 2003, 'Computer Science');