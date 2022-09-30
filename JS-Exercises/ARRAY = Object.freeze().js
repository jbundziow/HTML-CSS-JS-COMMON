// Example 'Object.freeze' which allows to protect const objects

//1st step
let x = 7;
x = 9; //OK

//2nd step
const y = 5;
//y=10; //ERROR: You can't modify 'const'


//3rd step - array is an object and can be modifed
const arr = [5, 2, 9, 4];
console.log(arr); //RESULT: [ 5, 2, 9, 4 ]
arr.push(99); //it's allowed even 'arr' is declared as 'const'
console.log(arr); //RESULT: [ 5, 2, 9, 4, 99 ] //as you can see arr can be modified even it's declared as const!

//but...
Object.freeze(arr);
//arr.push(123); //ERROR: Cannot add property 5, object is not extensible


//CONCLUSION: If you don't want to allow modify your object use 'Object.freeze'



