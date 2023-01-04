export default function createInt8TypedArray(length, position, value) {
    if (typeof length != 'number' || typeof position != 'number' || typeof value != 'number') {
        throw new TypeError('One of the paramenter is not of type Number')
    }
    if (position < 0 || position > length) {
        return new Error('Position outside range ')
    }
    else{
        const buffer = new ArrayBuffer(length);
        const int8 = new Int8Array(buffer);
        int8[position] = value;
        const object = new DataView(buffer)
        return object
    }
}
