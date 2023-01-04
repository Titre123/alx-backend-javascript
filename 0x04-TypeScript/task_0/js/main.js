;
var student1 = { firstName: 'Taiwo', lastName: 'Ola-Balogun', age: 20, location: 'Lagos' };
var student2 = { firstName: 'Kehinde', lastName: 'Ola-Balogun', age: 20, location: 'Akungba' };
var studentsList = [student1, student2];
console.log('firstName' + '|' + 'location');
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var student = studentsList_1[_i];
    console.log("".concat(student.firstName, " | ").concat(student.location));
}
