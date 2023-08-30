// Exercise 3: Animal Sounds
/*
Create a base class Animal with an abstract method makeSound().
Derive classes like Dog, Cat, and Cow, each with its own implementation of the makeSound() method.
Create an array of animals and loop through them, making them all produce their sounds.
*/

abstract class Animal {
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound(): void {
        console.log('Hau');
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log('Miau');
    }
}

class Cow extends Animal {
    makeSound(): void {
        console.log('Muuu');
    }
}

const dog = new Dog();
const cat = new Cat();
const cow = new Cow();

const arr = [dog, cat, cow];
arr.forEach(instance => instance.makeSound());