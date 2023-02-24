const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  } else {
    let data = fs.readFileSync(
      path,
      { encoding: 'utf8', flag: 'r' },
    );
    data = data.trim().split('\r\n');
    console.log(`Number of students: ${data.slice(1).length}`);
    const field = [];
    for (const dat of data.slice(1)) {
      const datArr = dat.split(',');
      field.push(datArr[3]);
    }
    const result = {};
    for (const dat of data) {
      for (const fild of new Set(field)) {
        const datArr = dat.split(',');
        if (datArr.includes(fild) && fild in result === false) {
          result[fild] = [];
          result[fild].push(datArr[0]);
        } else if (datArr.includes(fild) && fild in result === true) {
          result[fild].push(datArr[0]);
        }
      }
    }
    for (const key in result) {
      console.log(`Number of students in ${key}: ${result[key].length}. List: ${result[key].join(', ')}`);
    }
  }
}

module.exports = countStudents;
