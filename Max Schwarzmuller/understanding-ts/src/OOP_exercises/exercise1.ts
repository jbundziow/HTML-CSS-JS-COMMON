// Exercise 1: Shape Hierarchy
/*
Create a hierarchy of shapes using classes in TypeScript. Start with an abstract class Shape that has a method to calculate area.
Then, create concrete classes like Circle, Rectangle, and Triangle that inherit from Shape and provide their specific implementations for calculating area.
*/


abstract class Shape {
    constructor(public a: number) {
        this.a = a;
    }
    abstract calculateArea(): number;
}

class Rectangle extends Shape {
    calculateArea(): number {
        return this.a;
    }
}


const x = new Rectangle(5);
const y = x.calculateArea();
console.log(y);
