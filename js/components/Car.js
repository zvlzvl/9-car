class Car {
    constructor (tank, consumption) {
        this.engine = false;
        this.mileage = 0;
        this.tank = tank;            // litres
        this.consumption = consumption;  //litres/100km
        
    }
turnOn() {
    this.engine = true;
    console.log('Variklis ijungtas!');
}
turnOff() {
    this.engine = false;
    console.log('Variklis isjungtas!');
}

    drive(distance) {
        if (!this.engine) {
    console.log('Norint vaziuoti,reikia ijungti varikli.')
    return false
        }

        const maxDistanceAvailable = this.tank / this.consumption * 100;
        if (maxDistanceAvailable >= distance) {
            this.mileage += distance;
            this.tank -= distance * this.consumption /100;
            console.log('Nuvaziavo: ', distance);
        } else {
            this.mileage += this.maxDistanceAvailable;
            console.log('Nuvaziavo: ' );
            this.turnOff();
            this.tank = 0;
            console.log(`Bake per mazai norimam atstumui: nuvaziavo ${this.maxDistanceAvailable} ir liko nuvaziuoti ${distance - maxDistanceAvailable}`);
        }
    }
}



export { Car }