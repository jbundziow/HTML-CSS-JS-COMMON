// Example with comparison splice() and slice() methods which can be used on arrays


const cars = ['audi', 'dacia', 'mercedes', 'fiat', 'alfa romeo', 'bmw', 'honda'];
console.log('cars: ' + cars);

//slice() is non-destructive method
//using: slice(start_index, end_index);
console.log('\n--------------- slice() ---------------')
const newArr = cars.slice(2,4);
console.log('newArr: ' + newArr);
console.log('cars: ' + cars);
//CONCLUSION: 'cars' still looks the same


//splice() is destructive method
//using: splice(start_index, delete_count);
console.log('\n--------------- splice() ---------------')
const newArr2 = cars.splice(2,2);
console.log('newArr2: ' + newArr2);
console.log('cars: ' + cars);
//CONCLUSION: 'cars' changed


/*
RESULT:
cars: audi,dacia,mercedes,fiat,alfa romeo,bmw,honda

--------------- slice() ---------------
newArr: mercedes,fiat
cars: audi,dacia,mercedes,fiat,alfa romeo,bmw,honda

--------------- splice() ---------------
newArr2: mercedes,fiat
cars: audi,dacia,alfa romeo,bmw,honda
*/