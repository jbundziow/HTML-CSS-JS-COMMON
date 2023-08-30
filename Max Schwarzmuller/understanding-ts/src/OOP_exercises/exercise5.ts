// Exercise 5: School Management
/*
Build a basic school management system. Create a class Person with properties like name and age.
Derive classes like Student and Teacher from Person, adding relevant properties like grade and subject.
Implement a method to display information for each person.
*/

class Person {
    constructor(private name: string, private age: number) {}

    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    get personName(): string {
        return this.name;
    }
    get personAge(): number {
        return this.age;
    }
}

class Student extends Person {
    constructor(name: string, age: number, private grade: number) {
        super(name, age);
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Grade: ${this.grade}`);
    }
}

class Teacher extends Person {
    constructor(name: string, age: number, private subject: string) {
        super(name, age);
    }

    displayInfo(): void {
        console.log(`Name: ${this.personName}, Age: ${this.personAge}, Subject: ${this.subject}`);
    }
}


const student = new Student('Alice', 15, 10);
const teacher = new Teacher('Mr. Smith', 35, 'Math');

student.displayInfo();
teacher.displayInfo();
