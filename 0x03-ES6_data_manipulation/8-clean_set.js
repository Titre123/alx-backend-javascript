export default function cleanSet(set, startstring) {
  if (set.constructor.name !== 'Set' || typeof startstring !== 'string') {
    throw new Error('Parameter of wrong datatype');
  } else if (startstring === '') {
    return '';
  }
  let result = '';
  set.forEach((item) => {
    if (item.includes(startstring)) {
      const string = item.replace(startstring, '-');
      result += string;
    } else {
      const string = item.replace(item, '');
      result += string;
    }
  });
  return result.substring(1);
}
