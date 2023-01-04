interface Student {
  firstName: string;
  lastName: string;
  age: number,
  location: string
};

const student1: Student = {firstName: 'Taiwo', lastName: 'Ola-Balogun', age: 20, location: 'Lagos'};
const student2: Student = {firstName: 'Kehinde', lastName: 'Ola-Balogun', age: 20, location: 'Akungba'};
const studentsList = [student1, student2];
console.log('firstName' + '|' + 'location')
for (const student of studentsList) {
  console.log(`${student.firstName} | ${student.location}`)
}