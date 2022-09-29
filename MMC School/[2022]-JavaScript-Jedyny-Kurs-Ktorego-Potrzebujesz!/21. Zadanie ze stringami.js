/*
    Udemy, Mateusz Maj, [2022] JavaScript - Jedyny Kurs, Którego Potrzebujesz!
    Sekcja 3
    Odcinek 21. Zadanie ze stringami - moje rozwiązanie


    TREŚĆ ZADANIA:

    Metody do wykorzystania:
    charAt()
    includes()
    replace()* podchwytliwe 🙂 
    slice()
    split()
    toLowerCase()
    toUpperCase()

 
const text1 = 'powiększ mnie!'
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
const text4 = 'sprawdź, czy zawieram słowo "czy"'
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
const text7 = 'podziel, ten, string, od, przecinków'
*/


//MOJE ROZWIĄZANIE:
const text1 = 'powiększ mnie!'
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
const text4 = 'sprawdź, czy zawieram słowo "czy"'
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
const text7 = 'podziel, ten, string, od, przecinków'

console.log(text1.toUpperCase());
console.log(text2.toLowerCase());
console.log(text3.slice(6));
console.log(text4.includes("czy"));
console.log(text5.charAt(2));
console.log(text6.replaceAll('pies','kot')); //samo .replace() zamieni tylko pierwszy wyraz
console.log(text7.split(','));

//*********************************************************************************
//DODATEK ODE MNIE
//Gdyby chcieć usunąć spacje na początkach i końcach wyrazów przy text7:
function RemoveWhitespacesInArray(str) {
for (let i=0; i<str.length; i++) {
    str[i] = str[i].trim();
}
return str;
}
//trim() usuwa spacje na początku, trimEnd() usuwa spacje na końcu
console.log("\n\nEfekt wywołania funkcji 'RemoveWhitespacesInArray():");
console.log(RemoveWhitespacesInArray(text7.split(',')));
//*********************************************************************************