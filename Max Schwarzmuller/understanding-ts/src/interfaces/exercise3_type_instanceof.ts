class CarA {
    drive() {
      console.log('Driving...');
    }
  }
  
  class TruckA {
    drive() {
      console.log('Driving a truck...');
    }
  
    loadCargo(amount: number) {
      console.log('Loading cargo ...' + amount);
    }
  }
  
  type VehicleA = CarA | TruckA;
  
  const v1 = new CarA();
  const v2 = new TruckA();
  
  function useVehicle(vehicle: VehicleA) {
    vehicle.drive();
    if (vehicle instanceof TruckA) {
      vehicle.loadCargo(1000);
    }
  }

  
  useVehicle(v1);
  useVehicle(v2);
  

  console.log('\n');
  // ***************************************************************************
  interface Bird {
    type: 'bird';
    flyingSpeed: number;
  }
  
  interface Horse {
    type: 'horse';
    runningSpeed: number;
  }
  
  type AnimalA = Bird | Horse;
  
  function moveAnimal(animal: AnimalA) {
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
  const myAnimal: AnimalA = {type: 'bird', flyingSpeed: 10}
  moveAnimal(myAnimal);

  console.log('\n');
  // ***************************************************************************

  type Admin = {
    name: string;
    privileges: string[];
  };
  
  type Employee = {
    name: string;
    startDate: Date;
  };

  const PersonA: Admin | Employee = {name: 'Donald', privileges: ['coffe-time']}
  const PersonB: Admin | Employee = {name: 'James', startDate: new Date()}

  const printData = (person: Admin | Employee) => {
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
    if ((person as Admin).privileges) {
      console.log((person as Admin).privileges);
    }
    else if ((person as Employee).startDate) {
      console.log((person as Employee).startDate);
    }
  }


  printData(PersonA);
  printData(PersonB);