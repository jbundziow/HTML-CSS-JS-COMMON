// Examples with adding elements to arrays

let arr = [1, 'hehe', 82, true, 9, 12];
console.log(arr);
//RESULT: [1, 'hehe', 82, true, 9, 12]


//unshift() adds one or more elements TO THE BEGGINING of an array and returns the new length of the array
arr.unshift('new element on the beggining');
console.log(arr);
//RESULT: ['new element on the beggining', 1, 'hehe', 82, true, 9, 12]


//unshift() adds one or more elements TO THE END of an array and returns the new length of the array
arr.push('new element in the end of the array');
console.log(arr);
//RESULT: ['new element on the beggining', 1, 'hehe', 82, true, 9, 12, 'new element in the end of the array']


//shift() method removes the first element from an array and returns that removed element.
arr.shift();
console.log(arr);
//RESULT: [1, 'hehe', 82, true, 9, 12, 'new element in the end of the array']


//pop() method removes the last element from an array and returns that element
arr.pop();
console.log(arr);
//RESULT: [1, 'hehe', 82, true, 9, 12]


