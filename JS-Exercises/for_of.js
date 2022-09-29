//EXAMPLE OF USING 'FOR OF' IN JS:

//FIRST EXAMPLE
const cars = ['Audi', 'Skoda', 'Dacia', 'Fiat', 'Mercedes', 'Lexus'];
for (item of cars) {
    console.log(item);
}
/*
OUTPUT:
Audi
Skoda
Dacia
Fiat
Mercedes
Lexus
*/



//SECOND EXAMPLE
const numbers = [2, 5, 1.1, 10, -5];
for (num of numbers) {
    console.log(num*2);
}
/*
OUTPUT:
4
10
2.2
20
-10
*/