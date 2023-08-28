class Car {
    constructor (private readonly id: number, private readonly brand: string, protected model: string) {
        this.id = id;
        this.brand = brand;
        this.model = model;
    }

    printCar() {
        console.log(`ID: ${this.id}, BRAND: ${this.brand}, MODEL: ${this.model}`);
    }
}

class sportsCar extends Car {
    constructor (id: number, brand: string, model: string, private horsePower: number) {
        super(id, brand, model);
        this.horsePower = horsePower;
    }

    printCar() {
        super.printCar();
        console.log(`Horsepower: ${this.horsePower}`);
    }

    changeModel (model: string) {
        this.model = model; //IT IS ONLY POSSIBLE TO DO BECAUSE MODEL IS 'protected', NOT 'private' and 'readonly'!!!!!!!
    }
    changeHorsePower (hp: number) {
        this.horsePower = hp; //IT IS POSSIBLE ONLY INSIDE THIS CLASS BEACUSE IT IS 'private' AND IT IS NOT 'readonly'!
    }

    static sayHello = () => {
        console.log('hello sportscar! it\'s static function that doesn\'t need an instance of that class!');
    }
}


const car: Car = new Car(1, 'ford', 'focus');
car.printCar()


const sportscar: sportsCar = new sportsCar(1, 'ford', 'focus RS', 250);
sportscar.printCar()
sportscar.changeModel('mustang'); //IT IS ONLY POSSIBLE TO DO BECAUSE MODEL IS 'protected', NOT 'private' and 'readonly'!!!!!!!
sportscar.printCar()
sportscar.changeHorsePower(220);
sportscar.printCar();

sportsCar.sayHello(); //using static function

