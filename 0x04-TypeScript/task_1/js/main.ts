interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index:string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName: string, lastName:string) => {
    return `${firstName[0].toUpperCase()}. ${lastName}`;
};

interface StudentClassInter {
    workOnHomework(): string,
    displayName(): string
}

interface StudentClassConstructor {
    firstName: string,
    lastName: string
}

class StudentClass implements StudentClassInter {
    firstName: string;
    lastName: string;
    constructor (firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}