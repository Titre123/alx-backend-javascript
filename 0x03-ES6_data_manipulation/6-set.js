export default function setFromArray(array) {
    if (Array.isArray(array) == false) {
        throw new TypeError('Parameter is not an array');
    }
    return new Set(array);
}
