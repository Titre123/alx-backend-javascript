export default function getListStudentIds(array) {
  if (Array.isArray(array) == false) {
    return [];
  }
  else {
    return array.map(item => item.id);
  }
}
