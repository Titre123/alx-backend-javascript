const fs = require('fs');
const { promisify } = require('util');
const fp = promisify(fs.readFile)

function countStudents(path) {
  return fp(path).then((data) => {
    data = data.toString();
    data = data.trim().split('\r\n');
    console.log('Number of students: ' + data.slice(1).length);
    const CS = [];
    const SWE = [];
    for (let dat of data) {
      const dat_arr = dat.split(',');
      if (dat_arr.includes('CS') ) {
        CS.push(dat_arr[0]);
      }
      else if (dat_arr.includes('SWE')) {
        SWE.push(dat_arr[0]);
      }
    }
    console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
    console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
  })
  .catch(() => {
    throw new Error('Cannot load the database');
  })
}


module.exports = countStudents
