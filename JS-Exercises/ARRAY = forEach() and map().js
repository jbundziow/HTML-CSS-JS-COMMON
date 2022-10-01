// Example which shows difference between forEach() and map()

let arr = [2, 4, 9, 12, 24];

//map() - returns new array and doesn't modify original array
//description from mdn: method creates a new array populated with the results of calling a provided function on every element in the calling array.
let arr2 = arr.map(item => item*2);
console.log(arr2); //[4, 8, 18, 24, 48]
console.log(arr); //[2, 4, 9, 12, 24]

//forEach() method executes a provided function once for each array element
let arr3 = arr.forEach(item => item*2);
console.log(arr3); //undefined
//but...
arr.forEach(item => { console.log(item*10); });
/*
20
40
90
120
240
*/

//CONCLUSION: If you need to make operations on array and create a new array with that values use map()
//But if you only want to execute one function on array without saving any changes use forEach()