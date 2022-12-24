export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand === 'string') {
      this._brand = brand;
    } else {
      throw new TypeError('Brand is not a string');
    }
    if (typeof motor === 'string') {
      this._motor = motor;
    } else {
      throw new TypeError('Motor is not a string');
    }
    if (typeof color === 'string') {
      this._color = color;
    } else {
      throw new TypeError('Color is not a string');
    }
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set brand(brand) {
    if (typeof brand === 'string') {
      this._brand = brand;
    } else {
      throw new TypeError('Brand is not a string');
    }
  }

  set motor(motor) {
    if (typeof motor === 'string') {
      this._motor = motor;
    } else {
      throw new TypeError('Motor is not a string');
    }
  }

  set color(color) {
    if (typeof color === 'string') {
      this._color = color;
    } else {
      throw new TypeError('Color is not a string');
    }
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
