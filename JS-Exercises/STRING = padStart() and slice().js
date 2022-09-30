//REPLACE FIRST 12 CHARACTERS OF CARD NUMBER TO '*'
const initialNumber = "1234567890123456";
const last4Digits = initialNumber.slice(-4);
const newNumber = last4Digits.padStart(16,'*');
console.log(initialNumber);
console.log(newNumber);
//result:
//1234567890123456
//************3456


//REMOVE LAST 4 CHARS FROM STRING
const myStr = "Hello world!";
const newStr = myStr.slice(0, myStr.length - 4); //slice from 0 to 12-4=8
console.log(newStr);
//result:
//Hello wo
