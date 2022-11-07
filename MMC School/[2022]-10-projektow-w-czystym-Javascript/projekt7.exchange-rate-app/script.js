'use strict'

const amountOne = document.querySelector('.amount-one');
const currencyOne = document.querySelector('#currency-one');
const amountTwo = document.querySelector('.amount-two');
const currencyTwo = document.querySelector('#currency-two');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');

const calculate = () => {
    const URL = `https://api.exchangerate.host/convert?from=${currencyOne.value}&to=${currencyTwo.value}`;
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        const rate = data.result;
        rateInfo.textContent = `1 ${currencyOne.value} = ${rate.toFixed(4)} ${currencyTwo.value}`
        amountTwo.value = (amountOne.value * rate).toFixed(2);
    }
        )
    .catch(e => {console.error('ERROR WITH API:' + e)
                                rateInfo.textContent = 'API ERROR'
                                rateInfo.style.color = 'red'
                }
)
}

const swap = () => {
    const firstCurrency = currencyOne.value;
    const secondCurrency = currencyTwo.value;
    const secondAmount = amountTwo.value;

    currencyOne.value = secondCurrency;
    currencyTwo.value = firstCurrency;
    amountOne.value = secondAmount;
    calculate()
}


currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)
swapBtn.addEventListener('click', swap)
calculate()