const request = require('request');
const fs = require('fs');


// EXERCISE 3
//use request and show currencies rates from nbp api
//save data to .txt file

const validCodes = ['usd', 'eur', 'gbp', 'chf'];
const isValid = validCodes.includes(process.argv[2]);
let code;
if(isValid) {
    code = process.argv[2];
}
else {
    throw Error('Źle wpisałeś symbol waluty!');
}

const url = `http://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`;

request(url ,{json:true}, (err,res,body) => {

    if(res.statusCode !== 200) {
        throw Error('Zła odpowiedż serwera. Błąd: ', res.statusCode);
    }
    else if (err) {
        throw Error('Wystąpił błąd! ', err);
    }

    else {
        const message = `Kurs waluty ${body.currency} [${body.code}] z dnia ${body.rates[0].effectiveDate} wynosi ${body.rates[0].mid.toFixed(2)} złotych.`;
        
        fs.appendFile('currencies.txt', message + '\n', (err) => {
            if (!err) {
                console.log('Dane zostały dodane do pliku.');
            }
            else {
                console.log('Błąd dodawania danych do pliku: ', err);
            }
        })
        console.log('Treść dodana do pliku: ', message);
    }
})
