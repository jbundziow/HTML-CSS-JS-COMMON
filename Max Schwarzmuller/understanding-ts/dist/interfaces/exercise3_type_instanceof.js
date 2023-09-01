"use strict";
class CarA {
    drive() {
        console.log('Driving...');
    }
}
class TruckA {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo ...' + amount);
    }
}
const v1 = new CarA();
const v2 = new TruckA();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof TruckA) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
console.log('\n');
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
}
const myAnimal = { type: 'bird', flyingSpeed: 10 };
moveAnimal(myAnimal);
console.log('\n');
const PersonA = { name: 'Donald', privileges: ['coffe-time'] };
const PersonB = { name: 'James', startDate: new Date() };
const printData = (person) => {
    console.log(person.name);
    // console.log(person.privileges); //not exist in Employee = ERROR
    //1 METHOD
    if ('privileges' in person) {
        console.log(person.privileges);
    }
    else if ('startDate' in person) {
        console.log(person.startDate);
    }
    //2 METHOD
    console.log(person.name);
    if (person.privileges) {
        console.log(person.privileges);
    }
    else if (person.startDate) {
        console.log(person.startDate);
    }
};
printData(PersonA);
printData(PersonB);
