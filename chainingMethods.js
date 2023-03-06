class Account {
    locale = navigator.language;
    
    #movements = [];
    #pin;

    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin; //"inicialization"
    }

    getMovements() {
        return this.#movements;
    }

    deposit(value) {
        this.#movements.push(value);
        return this; //current object
    }

    withdraw(value) {
        this.deposit(-value);
        return this;
    }

    _approveLoan(value) {
        return true;
    }

    requestLoan(value) {
        if(this._approveLoan(value)) {
            this.deposit(value);
            console.log('Loan approved');
        }
        return this;
    }

    static helper() {
        console.log('Helper');
    }

}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000); 
//we are returning 'this' in every function to make functions chainable