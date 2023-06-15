const fetch = require('node-fetch');

//EXERCISE 2
//check 404 etc.
//trivia, math, year
//http://numbersapi.com/${number}/${type}?json'



let year;
year = process.argv[2];
if (year === '' || isNaN(year)) {
    throw Error('Entered year is empty or it is not a type Number.');
}

let type;
type = process.argv[3];
if (type !== 'trivia' || type !== 'math' || type !== 'year') {
    throw Error('Entered type is uncorrect. Type one of these: trivia, math, year.')
}
// console.log(type);
console.log('koniec')