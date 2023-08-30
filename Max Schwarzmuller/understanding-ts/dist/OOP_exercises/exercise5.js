"use strict";
// Exercise 5: School Management
/*
Build a basic school management system. Create a class Person with properties like name and age.
Derive classes like Student and Teacher from Person, adding relevant properties like grade and subject.
Implement a method to display information for each person.
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    get personName() {
        return this.name;
    }
    get personAge() {
        return this.age;
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Grade: ${this.grade}`);
    }
}
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Name: ${this.personName}, Age: ${this.personAge}, Subject: ${this.subject}`);
    }
}
const student = new Student('Alice', 15, 10);
const teacher = new Teacher('Mr. Smith', 35, 'Math');
student.displayInfo();
teacher.displayInfo();
