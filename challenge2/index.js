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

let BMW = new Car('BMW', 100);

BMW.speedUS;    
BMW.speedUS = 70;

BMW.brake()
console.log(BMW)