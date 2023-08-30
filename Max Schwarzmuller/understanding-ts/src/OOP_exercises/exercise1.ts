// Exercise 1: Shape Hierarchy
/*
Create a hierarchy of shapes using classes in TypeScript. Start with an abstract class Shape that has a method to calculate area.
Then, create concrete classes like Circle, Rectangle, and Triangle that inherit from Shape and provide their specific implementations for calculating area.
*/


abstract class Shape {
    abstract calculateArea(): number;
}

class Rectangle extends Shape {
    constructor (private readonly a: number, private readonly b: number) {
        super();
        if (a >= 0 && b >= 0) {
            this.a = a;
            this.b = b;
        }
        else {
            throw new Error('Rectangle cannot contain negative values!')
        }
        
    }

    calculateArea(): number {
        return this.a*this.b;
    }
}

class Circle extends Shape {
    constructor(private readonly r: number) {
        super();
        if (r >= 0) {
        this.r = r;
        }
        else {
            throw new Error('Radius cannot be negative!')
        }
    }

    calculateArea(): number {
        return Math.PI*Math.pow(this.r, 2);
    }
}

class Triangle extends Shape {
    constructor(private readonly a: number, private readonly h: number) {
        super();
        if (a >= 0 && h >= 0) {
        this.a = a;
        this.h = h;
        }
        else {
            throw new Error('Triangle cannot contain negative values!')
        }
    }

    calculateArea(): number {
        return this.a * this.h /2;
    }
}


const rectangle = new Rectangle(5,4);
console.log(rectangle.calculateArea());

const circle = new Circle(2);
console.log(circle.calculateArea());

const triangle = new Triangle(2,3);
console.log(triangle.calculateArea());
