export default function getStudentIdsSum(array) {
  if (Array.isArray(array) === false) {
    throw new TypeError('Parameter is not an array');
  }
  return array.map((item) => item.id).reduce((a, b) => a + b, 0);
}
