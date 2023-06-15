const fetch = require('node-fetch');

//EXERCISE 2
//EXERCISE 1 - show in console trivia, math or year
//just type as 'node app2.js 2007 math'
let year;
year = process.argv[2];
if (year === '' || isNaN(year)) {
    throw Error('Entered year is empty or it is not a type Number.');
}

let type;
type = process.argv[3];
if (type !== 'trivia' && type !== 'math' && type !== 'year') {
    throw Error('Entered type is uncorrect. Type one of these: trivia, math, year.')
}

fetch(`http://numbersapi.com/${year}/${type}?json`)
.then (res => {
    console.log('status: ', res.status);
    console.log('statusText: ', res.statusText);
    return res.json()
})
.then(res => console.log(res.text))
.catch(err => console.log(err));