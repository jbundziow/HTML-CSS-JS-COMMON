/*
    Udemy, Mateusz Maj, [2022] JavaScript - Jedyny Kurs, Kt贸rego Potrzebujesz!
    Sekcja 3
    Odcinek 21. Zadanie ze stringami - moje rozwi膮zanie


    TRE艢膯 ZADANIA:

    Metody do wykorzystania:
    charAt()
    includes()
    replace()* podchwytliwe 馃檪 
    slice()
    split()
    toLowerCase()
    toUpperCase()

 
const text1 = 'powi臋ksz mnie!'
const text2 = 'ZAPISZ MNIE MA艁YMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na pocz膮tku!'
const text4 = 'sprawd藕, czy zawieram s艂owo "czy"'
const text5 = 'wyLoguj w konsoli tylko liter臋 "L", kt贸ra znajduje si臋 w wyrazie "Wyloguj"'
const text6 = 'pies zamie艅 ka偶de s艂owo pies, na s艂owo kot pies'
const text7 = 'podziel, ten, string, od, przecink贸w'
*/


//MOJE ROZWI膭ZANIE:
const text1 = 'powi臋ksz mnie!'
const text2 = 'ZAPISZ MNIE MA艁YMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na pocz膮tku!'
const text4 = 'sprawd藕, czy zawieram s艂owo "czy"'
const text5 = 'wyLoguj w konsoli tylko liter臋 "L", kt贸ra znajduje si臋 w wyrazie "Wyloguj"'
const text6 = 'pies zamie艅 ka偶de s艂owo pies, na s艂owo kot pies'
const text7 = 'podziel, ten, string, od, przecink贸w'

console.log(text1.toUpperCase());
console.log(text2.toLowerCase());
console.log(text3.slice(6));
console.log(text4.includes("czy"));
console.log(text5.charAt(2));
console.log(text6.replaceAll('pies','kot')); //samo .replace() zamieni tylko pierwszy wyraz
console.log(text7.split(','));

//*********************************************************************************
//DODATEK ODE MNIE
//Gdyby chcie膰 usun膮膰 spacje na pocz膮tkach i ko艅cach wyraz贸w przy text7:
function RemoveWhitespacesInArray(str) {
for (let i=0; i<str.length; i++) {
    str[i] = str[i].trim();
}
return str;
}
//trim() usuwa spacje na pocz膮tku, trimEnd() usuwa spacje na ko艅cu
console.log("\n\nEfekt wywo艂ania funkcji 'RemoveWhitespacesInArray():");
console.log(RemoveWhitespacesInArray(text7.split(',')));
//*********************************************************************************