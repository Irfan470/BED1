class Appliance {
  constructor(brand, power) {
    this.brand = brand;
    this.power = power;
  }
  description() {
    return `${this.brand} consumes ${this.power} watts`;
  }
}
class Fridge extends Appliance {
    constructor(brand, power, temperature) {
      super(brand, power);
      this.temperature = temperature;
    }
    description() {
      return super.description() + ` and keeps a temperature of ${this.temperature} degrees`;
    }
}
const myFridge = new Fridge('Samsung', 500, 4);
console.log(myFridge.description()); // Samsung consumes 500 watts and keeps a temperature of 4 degrees

class Oven extends Appliance {
    constructor(brand, power, volume) {
      super(brand, power);
      this.volume = volume;
    }
    description() {
        return super.description() + ` and capacity up to ${this.volume} liters`; 
}
}

const myOven = new Oven('Whirlpool', 1500, 20);
console.log(myOven.description()); // Whirlpool consumes 1500 watts and heats up to 200 degrees