const countStudents = require('./2-read_file');

const str = 'Number of students: 10\nNumber of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie\nNumber of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy'

countStudents("database.csv");
console.log(str)