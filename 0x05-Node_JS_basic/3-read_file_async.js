const fs = require('fs');
const { promisify } = require('util');

const fp = promisify(fs.readFile);

function countStudents(path) {
  return fp(path).then((data) => {
    data = data.toString();
    data = data.trim().split('\r\n');
    console.log(`Number of students: ${data.slice(1).length}`);
    const CS = [];
    const SWE = [];
    for (const dat of data) {
      const datArr = dat.split(',');
      if (datArr.includes('CS')) {
        CS.push(datArr[0]);
      } else if (datArr.includes('SWE')) {
        SWE.push(datArr[0]);
      }
    }
    console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
    console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
  })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
