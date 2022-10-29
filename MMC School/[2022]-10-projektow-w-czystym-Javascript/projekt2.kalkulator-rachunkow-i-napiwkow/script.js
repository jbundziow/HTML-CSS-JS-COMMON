'use strict'

//get elements
const price = document.querySelector('.price');
const people = document.querySelector('.people');
const tip = document.querySelector('.tip');
const btn = document.querySelector('button');
const resultInfo = document.querySelector('.result-info');
const errorInfo = document.querySelector('.error-info');
const finalCost = document.querySelector('.final-cost');

//! DELETE IT
// let x = false;
// setInterval(() => {
//     if (x) {
//         resultInfo.style.display = 'block';
//         errorInfo.style.display = 'none';
//         x = false;
//     }
//     else {
//         resultInfo.style.display = 'none';
//         errorInfo.style.display = 'block';
//         x = true;
//     }
// }, 1000);
//! XXXXXXXXXXX

//functions
function isEmpty(str) {
    return !str.trim().length;
}

const inputsAreEmpty = () => {
    return isEmpty(price.value) || isEmpty(people.value) || parseFloat(tip.value) === 0 ? true : false;
}
//TODO: function to check if values are correct (price minimum 0; people === int)
const countFinalCost = () => {
    if (inputsAreEmpty()) {
        resultInfo.style.display = 'none';
        errorInfo.style.display = 'block';
        //TODO: shake form
    }
    else {
        const totalPrice = (1 + parseFloat(tip.value)) * parseFloat(price.value) / parseFloat(people.value);
        finalCost.textContent = totalPrice;
        resultInfo.style.display = 'block';
        errorInfo.style.display = 'none';
    }
}



//addeventlisteners
btn.addEventListener('click', countFinalCost);