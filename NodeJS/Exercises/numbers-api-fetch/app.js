const fetch = require('node-fetch');



//EXERCISE 1
//process.argv
fetch('http://numbersapi.com/2022/year?json')
.then(response => {return response.json()})
.then(data => console.log(data))
.catch(err => console.log(err));


//EXERCISE 2
//trivia, math, year
//http://numbersapi.com/${number}/${type}?json'