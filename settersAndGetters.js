const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    //getter
    get latest() {
        return this.movements.slice(-1).pop();
    },

    //setter (always  need to have EXACTLY one parameter)
    set latest(movement) {
        this.movements.push(movement);
    }
}

//getter
console.log(account.latest);

//setter
account.latest = 50;


//Getters and Setters with classes

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
}

let jessica = new PersonCl('Jessica Davis', 1982);

console.log(jessica.age);
