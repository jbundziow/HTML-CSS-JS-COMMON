'use strict'

//get elements
const price = document.querySelector('.price');
const people = document.querySelector('.people');
const tip = document.querySelector('.tip');
const btn = document.querySelector('button');
const resultInfo = document.querySelector('.result-info');
const errorInfo = document.querySelector('.error-info');
const finalCost = document.querySelector('.final-cost');

//functions
function isEmpty(str) {
    return !str.trim().length;
}

const inputsAreEmpty = () => {
    return isEmpty(price.value) || isEmpty(people.value) || parseFloat(tip.value) === 0 ? true : false;
}

const inputsValuesAreCorrect = () => {
    const val_price = parseFloat(price.value);
    const val_people = parseFloat(people.value);
    return val_price > 0 && Number.isInteger(val_people) && val_people > 0 ? true : false;
}


const countFinalCost = () => {
    if (inputsAreEmpty() || !inputsValuesAreCorrect()) {
        resultInfo.style.display = 'none';
        errorInfo.style.display = 'block';
    }
    else {
        const totalPrice = (1 + parseFloat(tip.value)) * parseFloat(price.value) / parseFloat(people.value);
        finalCost.textContent = totalPrice.toFixed(2);
        resultInfo.style.display = 'block';
        errorInfo.style.display = 'none';
    }
}



//addeventlisteners
btn.addEventListener('click', countFinalCost);