// Example with combining arrays

arr1 = [23, 9, 67];
arr2 = ['hey', 'hello', 'hi'];

//first method: using concat()
arr3 = arr1.concat(arr2);
console.log(arr3);

//second method: using spread operator (...) /(or spread syntax)
arr4 = [...arr1, ...arr2];
console.log(arr4);

//RESULT: arr3 = arr4
//[23, 9, 67, 'hey', 'hello', 'hi']