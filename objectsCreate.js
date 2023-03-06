const PersonProto = { //adding methods we want PersonProto child objects to inherit
    calcAge() {
        console.log(2022 - this.birthYear);
    },

    init(firstName, birthYear) { // this is NOT the constructor function, because we don't uwe 'new' keyword
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto); //returns brand new object that is linked to the PersonProto

console.log(steven);

steven.name = 'Steven';
steven.birthYear = 1997;

steven.calcAge()

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);

sarah.init('Sarah', 2002);

sarah.calcAge();