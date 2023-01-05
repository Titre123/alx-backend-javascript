interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
}

class Director implements DirectorInterface {

    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

interface employeeInterface {
    (salary: number | string): any;
}

const createEmployee: employeeInterface = (salary: number | string) => {
    if(typeof salary === 'number') {
        if(salary < 500) {
            return new Teacher;
        }
        else {
            return new Director;
        }
    }
}

interface isDirectorInterface {
    (employee: any): boolean
}

function isDirector(employee: any): boolean {
    return employee.constructor.name === 'Director';
}

interface executeWorInterface {
    (employee: any): any
}

const executeWork: executeWorInterface = (employee: any) => {
    if (employee.constructor.name === 'Director') {
        employee.workDirectorTasks();
    }
    else if (employee.constructor.name === 'Teacher') {
        employee.workTeacherTasks();
    }
}