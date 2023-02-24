const fs = require('fs');
const express = require('express');

const app = express();

const countStudents = (database) => new Promise((resolve, rejects) => {
  if (!fs.existsSync(database)) {
    rejects(new Error('Cannot load the database'));
  } else {
    fs.readFile(database, (err, data) => {
      if (err) rejects(new Error('Cannot load the database'));
      data = data.toString();
      data = data.trim().split('\r\n');
      const CS = [];
      const SWE = [];
      const output = [];
      for (const dat of data) {
        const datArr = dat.split(',');
        if (datArr.includes('CS')) {
          CS.push(datArr[0]);
        } else if (datArr.includes('SWE')) {
          SWE.push(datArr[0]);
        }
      }
      output.push(`Number of students: ${data.slice(1).length}`);
      output.push(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
      output.push(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
      resolve(output);
    });
  }
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(database).then((data) => {
    let str = 'This is the list of our students\n';
    for (const _ of data) {
      str = `${str + _}\n`;
    }
    res.send(str);
  });
});

module.exports = app;
