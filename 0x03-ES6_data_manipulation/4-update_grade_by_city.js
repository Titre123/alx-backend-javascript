export default function updateStudentGradeByCity(array, query, changes) {
    const san = array.filter(item => item.location == query);
    return san.map(item => {
        for (const i of changes) {
            if (item.id == i.studentId) {
                return {...item, grade: i.grade}
            }
            else{
                return {...item, grade: 'N/A'}
            }
        }
    })
}
