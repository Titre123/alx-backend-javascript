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
  }
}

module.exports = countStudents;
