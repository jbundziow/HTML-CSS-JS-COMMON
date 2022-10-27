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
let x = false;
setInterval(() => {
    if (x) {
        resultInfo.style.display = 'block';
        errorInfo.style.display = 'none';
        x = false;
    }
    else {
        resultInfo.style.display = 'none';
        errorInfo.style.display = 'block';
        x = true;
    }
}, 1000);
//! XXXXXXXXXXX

//functions
const inputsAreEmpty = () => {
    //TODO
}

const countFinalCost = () => {
    if (inputsAreEmpty()) {
        //empty
    }
    else {
        //count
    }
}



//addeventlisteners
btn.addEventListener('click', countFinalCost);