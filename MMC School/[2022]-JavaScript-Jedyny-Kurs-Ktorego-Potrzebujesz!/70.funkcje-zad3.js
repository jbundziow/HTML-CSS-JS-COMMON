let num = 10;
let numbers = [];


for (let i=0; i<num; i++) {
  numbers.push(i);
}
console.log(numbers);


const isDivisibleBy3 = (number) => {
number%3 === 0 && number !== 0 ? console.log(`${number} jest podzielne przez 3`) : number !== 0 ? console.log(`${number} nie jest podzielne przez 3`) : console.log(`${number} jest 0`);
//ale wąż xDD
};


//forEach
numbers.forEach(isDivisibleBy3);