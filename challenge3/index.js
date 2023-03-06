const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(this.speed);
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(this.speed);
}

const EV = function(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} charge is ${this.charge}`)
}

EV.prototype.accelerate = function() {
    this.charge -=1;
    this.speed += 20;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`)
}

const tesla = new EV('Tesla', 140, 90);

tesla.accelerate(); //Ev.accelerate overrides Car.accelerate

tesla.brake();

tesla.chargeBattery(50);