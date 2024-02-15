showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

// Ви маєте JS код, який необхідно розширити анотацією примітивів,
// масивів, об'єктів (за необхідності),
// подумати над використанням enum,
// а також реалізувати описані у вигляді коментарів властивості та методи.
// Крім цього є завдання з *, яке не є обов'язковим, але може вас зацікавити.

enum LecturerPosition {
    JUNIOR = 'Junior',
    MIDDLE = 'Middle',
    SENIOR = 'Senior',
}
enum AreaType {
    TYPESCRIPT = 'TypeScript',
    HTML_CSS = 'Html_Css',
    JavaScript = 'JavaScript',
}
interface Lecturer {
    name: string;
    surname: string;
    position: LecturerPosition;
    company: string;
    experience: number;
    courses: string[];
    contacts: string;
}

class School {
    // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

    _areas: AreaType[] = []
    _lecturers : Lecturer[] = []; // Name, surname, position, company, experience, courses, contacts

    addArea(newArea: AreaType): void {
        this._areas.push(newArea);
    }

    removeArea(areaToRemove: AreaType): void {
        this._areas = this._areas.filter(area => area !== areaToRemove);
    }

    addLecturer(newLecturer: Lecturer): void {
        this._lecturers.push(newLecturer);
    }

    // Видалення лектора
    removeLecturer(lecturerToRemove: Lecturer): void {
        this._lecturers = this._lecturers.filter(lecturer => lecturer !== lecturerToRemove);
    }

    get areas(): AreaType[] {
        return this._areas;
    }

    get lecturers(): Lecturer[] {
        return this._lecturers;
    }
}

class Area {
    // implement getters for fields and 'add/remove level' methods
    _levels: string[] = [];
    _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    get levels(): string[] {
        return this._levels;
    }

    addLevel(newLevel: string): void {
        this._levels.push(newLevel);
    }

    // Метод для видалення рівня
    removeLevel(levelToRemove: string): void {
        this._levels = this._levels.filter(level => level !== levelToRemove);
    }
}

class Level {
    // implement getters for fields and 'add/remove group' methods

    _groups: string[] = [];
    _name: string;
    _description: string;

    constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get groups(): string[] {
        return this._groups;
    }

    addGroup(newGroup: string): void {
        this._groups.push(newGroup);
    }

    // Метод для видалення групи
    removeGroup(groupToRemove: string): void {
        this._groups = this._groups.filter(group => group !== groupToRemove);
    }
}

class Group {
    // implement getters for fields and 'add/remove student' and 'set status' methods

    _area?: Area;
    _status: string = '';
    _students: Student[] = [];// Modify the array so that it has a valid toSorted method*
    directionName: string;
    levelName: string;

    constructor(directionName: string, levelName: string) {
        this.directionName = directionName;
        this.levelName = levelName;
    }

    get area(): Area | undefined {
        return this._area;
    }

    // Геттер для отримання статусу
    get status(): string {
        return this._status;
    }

    // Геттер для отримання студентів
    get students(): Student[] {
        return this._students;
    }

    addStudent(newStudent: Student): void {
        this._students.push(newStudent);
    }

    removeStudent(studentToRemove: Student): void {
        this._students = this._students.filter(student => student !== studentToRemove);
    }

    setStatus(newStatus: string): void {
        this._status = newStatus;
    }

    // showPerformance() {
    //     const sortedStudents = this._students.toSorted((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    //     return sortedStudents;
    // }
}
//
class Student {
    // implement 'set grade' and 'set visit' methods

    _firstName: string;
    _lastName: string;
    _birthYear: number;
    _grades: { workName: string, mark: number }[] = [];
    _visits: { lesson: string, present: boolean }[] = [];

    constructor(firstName: string, lastName: string, birthYear: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }

    get fullName(): string {
        return `${this._lastName} ${this._firstName}`;
    }

    set fullName(value: string) {
        [this._lastName, this._firstName] = value.split(' ');
    }

    setGrade(workName: string, mark: number): void {
        this._grades.push({ workName, mark });
    }

    setVisit(lesson: string, present: boolean): void {
        this._visits.push({ lesson, present });
    }

    get age(): number {
        return new Date().getFullYear() - this._birthYear;
    }

    getPerformanceRating(): number {
        const gradeValues = Object.values(this._grades);

        if (!gradeValues.length) return 0;

        const averageGrade = gradeValues.reduce((sum, grade) => sum + grade.mark, 0) / gradeValues.length;
        const attendancePercentage = (this._visits.filter(present => present).length / this._visits.length) * 100;

        return (averageGrade + attendancePercentage) / 2;
    }
}
