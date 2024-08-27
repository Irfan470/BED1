class appliance {
  constructor(brand, power) {
    this.brand = brand;
    this.power = power;
  }
  description() {
    return `${this.brand} consumes ${this.power} watts`;
  }
}