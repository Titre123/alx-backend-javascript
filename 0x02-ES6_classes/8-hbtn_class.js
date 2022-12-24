export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') {
      this._size = size;
    } else {
      throw TypeError('Size is not a number');
    }
    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw TypeError('Location is not a string');
    }
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](hunch) {
    if (typeof hunch === 'number' || typeof hunch === 'string') {
      if (hunch === 'number') {
        return this.size;
      }
      return this.location;
    }

    throw TypeError('hunch is not of type string or number');
  }
}
