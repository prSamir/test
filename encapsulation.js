//Encapsulation: protected properties and methods
//encapsulation - keeping some properties and methods inside the class so they are not accesible outside of the class

//class fields
//1.public fields
//2.private fields
//3.public methods
//4. private methods
// there is also a static version

class Account {
    //1. public field (inctances)
    locale = navigator.language; //fields are not added to the prototype, they are added to instances
    
    //2. private fields (inctances)
    #movements = [];
    #pin; //"declaration"

    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin; //"inicialization"
        // this._movements = []; //protected property
        // this.locale = navigator.language;
    }

    //3. Public methods

    //Public interface
    getMovements() {
        return this.#movements;
    }

    deposit(value) {
        this.#movements.push(value);
    }

    withdraw(value) {
        this.deposit(-value);
    }

    //4.Private methods
    //#approveLoan(value) {
    _approveLoan(value) {
        return true;
    }

    requestLoan(value) {
        if(this._approveLoan(value)) {
            this.deposit(value);
            console.log('Loan approved');
        }
    }

    static helper() { // not available on the instances, but is available on the class itself
        console.log('Helper');
    }

}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(450);
acc1.withdraw(100);
acc1.requestLoan(1000);

Account.helper();