class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
    }

    brake() {
        this.speed -=5;
        console.log(this.speed);
        return this;
    }

    get speedUS() {
        console.log(this.speed/1.6)
        return this.speed / 1.6;
    }

    set speedUS(spd) {
        spd *= 1.6;
        this.speed = spd;
        console.log(this.speed)
    }
}

class EVCl extends Car {

    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(`${this.make} charge is ${this.#charge}`)
        return this;
    }

    accelerate() {
        this.#charge -=1;
        this.speed += 20;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}`);
        return this;
    }

}

let tesla = new EVCl('Tesla', 120, 60);

tesla.brake().accelerate().chargeBattery(90);
console.log(tesla)