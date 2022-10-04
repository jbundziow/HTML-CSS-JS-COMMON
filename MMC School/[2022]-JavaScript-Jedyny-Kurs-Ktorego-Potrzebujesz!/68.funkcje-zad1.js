let score;

isOdd = (x) => console.log(`Liczba ${x} jest nieparzysta`);
isEven = (x) => console.log(`Liczba ${x} jest parzysta`);

const add = (a,b) => {
  score = a+b;
  score%2 !== 0 ? isOdd(score) : isEven(score);
};

add(4,5);
console.log(score);



