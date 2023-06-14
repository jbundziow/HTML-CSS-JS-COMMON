const fetch = require('node-fetch');




fetch('http://numbersapi.com/2022/year?json')
.then(response => {return response.json()})
.then(data => console.log(data))
.catch(err => console.log(err));