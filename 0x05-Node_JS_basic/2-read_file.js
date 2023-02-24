const fs = require('fs');


function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  else {
    let data = fs.readFileSync(path,
            {encoding:'utf8', flag:'r'});
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
  }
}

countStudents('datbase.csv')