/*
Exercise 1: Shape Area Calculator (TypeScript)
Create an interface called Shape with a single method area(): number.
Implement this interface for three different shapes: Circle, Rectangle, and Triangle.
Calculate and print the areas of one instance of each shape.
*/



interface ShapeA {
    area(): number;
}

class CircleA implements ShapeA {
    constructor (private readonly radius: number) {
        this.radius = radius;
    }

    area() {
        return Math.PI*Math.pow(this.radius,2);
    }
}

class RectangleA implements ShapeA {
    constructor (private readonly a: number, private readonly b: number) {
        this.a = a;
        this.b = b;
    }

    area() {
        return this.a*this.b;
    }
}

class TriangleA implements ShapeA {
    constructor (private readonly a: number, private readonly h: number) {
        this.a = a;
        this.h = h;
    }

    area() {
        return this.a*this.h/2;
    }
}


const circleA = new CircleA(2);
const rectangleA = new RectangleA(3,4);
const triangleA = new TriangleA(3,2);

console.log(circleA.area());
console.log(rectangleA.area());
console.log(triangleA.area());


// *******************************************************************************************
const myObject: ShapeA = {
    area() {
        console.log('Object also can use interface :)');
        return -1;
    }
}

myObject.area()

