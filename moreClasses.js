class Account {
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;
    }

    deposit(value) {
        this.movements.push(value);
    }

    withdraw(value) {
        this.deposit(-value);
    }

    approveLoan(value) {
        return true;
    }

    requestLoan(value) {
        if(this.approveLoan(val)) {
            this.deposit(value);
            console.log('Loan approved');
        }
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(450);
acc1.withdraw(100);
acc1.requestLoan(1000);