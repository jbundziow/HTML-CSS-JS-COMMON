const fetch = require('node-fetch');



//EXERCISE 1 - show in console fact about entered year
const year = process.argv[2]; //just type 'node app.js 1999', where 1999 means year
fetch(`http://numbersapi.com/${year}/year?json`)
.then(response => {return response.json()})
.then(data => console.log(data.text))
.catch(err => console.log(err));
//input: 'node app.js 1999'
//output: '1999 is the year that the brand new Mandalay Bay hotel and casino opens in Las Vegas on March 2nd'



