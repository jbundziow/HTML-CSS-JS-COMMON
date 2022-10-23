const obj1 = {
    name: 'John',
    age: 23
}

const obj2 = {
    car: 'Citroen',
    brand: 'C5'
}

// ********************************** CONNECTING OBJECTS **********************************
//UNWANTED EFFECT
/*
const connectedObjects = Object.assign(obj1,obj2);
console.log(obj1); //{name: 'John', age: 23, car: 'Citroen', brand: 'C5'}
console.log(obj2); //{car: 'Citroen', brand: 'C5'}
console.log(connectedObjects); //{name: 'John', age: 23, car: 'Citroen', brand: 'C5'}
*/

//OK
const connectedObjects = Object.assign({}, obj1, obj2);
console.log(obj1); //{name: 'John', age: 23}
console.log(obj2); //{car: 'Citroen', brand: 'C5'}
console.log(connectedObjects); //{name: 'John', age: 23, car: 'Citroen', brand: 'C5'}








// ********************************** COPYING OBJECTS **********************************
//UNWANTED EFFECT - change in copyOfObj1 avoids change in original obj1
/*
const copyOfObj1 = Object.assign(obj1);
copyOfObj1.name = 'Arthur';
console.log(obj1); //{name: 'Arthur', age: 23}
console.log(copyOfObj1); //{name: 'Arthur', age: 23}
*/

//OK
const copyOfObj1 = Object.assign({}, obj1);
copyOfObj1.name = 'Arthur';
console.log(obj1); //{name: 'John', age: 23}
console.log(copyOfObj1); //{name: 'Arthur', age: 23}