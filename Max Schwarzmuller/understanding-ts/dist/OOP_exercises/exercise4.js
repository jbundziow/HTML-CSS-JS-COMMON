"use strict";
// Exercise 4: Vehicle Inheritance
/*
Design a class hierarchy for vehicles. Start with a base class Vehicle with properties like make, model, and methods like startEngine().
Create subclasses like Car, Motorcycle, and Truck, each with specific methods or properties.
Demonstrate how polymorphism works by calling the startEngine() method on different types of vehicles.
*/
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    startEngine() {
        console.log(`${this.make} ${this.model}'s engine started.`);
    }
}
class Carr extends Vehicle {
    constructor(make, model) {
        super(make, model);
    }
    drive() {
        console.log('Car is driving.');
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model) {
        super(make, model);
    }
    wheelie() {
        console.log('Motorcycle is performing a wheelie.');
    }
}
class Truck extends Vehicle {
    constructor(make, model) {
        super(make, model);
    }
    loadCargo() {
        console.log('Truck is loading cargo.');
    }
}
const carr = new Carr('Toyota', 'Camry');
const motorcycle = new Motorcycle('Harley-Davidson', 'Sportster');
const truck = new Truck('Ford', 'F-150');
carr.startEngine();
carr.drive();
motorcycle.startEngine();
motorcycle.wheelie();
truck.startEngine();
truck.loadCargo();
