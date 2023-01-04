export default function getStudentsByLocation(array, query) {
  return array.filter(item => item.location == query);
}
