import readDatabase from "../utils";
import database from "../server";

class StudentsController {

  static getAllStudents(req, res) {
    const data = readDatabase('database.csv');
    let message = 'This is the list of our students\n';
    data.then(dat => {
      for (const [field, group] of Object.entries(dat)) {
        message += `Number of students in ${field}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}\n`
        }
        res.status(200);
        res.send(message);
      }).catch(err => {
          res.status(500);
          res.send('Cannot load the database');
      })
  }

  static getAllStudentsByMajor(req, res) {
    const parameter = req.params;
    if (parameter.major == 'CS' || parameter.major == 'SWE') {
      const data = readDatabase('database.csv');
      data.then(dat => {
        res.send( `List: ` + dat[parameter.major].map((student) => student.firstname).join(', '))
      }).catch(err => {
        res.status(500);
        res.send('Major parameter must be CS or SWE');
    })
    }
    else {
      res.status(500);
      res.send('Cannot load the database');
    }
  }
}

export default StudentsController;