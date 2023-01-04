export default function hasValuesFromArray(set, array) {
    if (set.constructor.name == 'Set' && Array.isArray(array)) {
        return array.map(item => {
            return set.has(item)
        }).reduce((a,b) => a && b);
    }
    throw new Error('Parameter of wrong datatype');
}
