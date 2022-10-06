let isCelsiusToFahrenheit = true;

const btnConv = document.querySelector('.conv');
const btnReset = document.querySelector('.reset');
const btnChange = document.querySelector('.change');
const enteredValue = document.querySelector('#converter');
const resultParagraph = document.querySelector('.result');
const one = document.querySelector('.one');
const two = document.querySelector('.two');


//console.log(enteredValue.value);


//TODO: round to 2 numbers after . ; e.g. 25.23
const convertTemperatures = () => {
    if(enteredValue.value == "") {
        resultParagraph.textContent = "You have not entered any value!";
        resultParagraph.style.color = "red";
        //TODO: red border and shake element!!!
        return; //exit
    }
    let result;
        if (isCelsiusToFahrenheit) {
        result = 9/5*enteredValue.value+32;
        resultParagraph.textContent = `${enteredValue.value}°C equals ${result}°F`;
        }
        else {
            result = 5/9*(enteredValue.value-32);
            resultParagraph.textContent = `${enteredValue.value}°F equals ${result}°C`;
        }
}

const reset = () => {
enteredValue.value = null;
resultParagraph.textContent = null;
}

const changeUnit = () => {
    if (isCelsiusToFahrenheit) {
        one.textContent = '°F';
        two.textContent = '°C';
        //TODO: change min/max in number input in html (not out of range)
        //-273.15 C is minimum
        isCelsiusToFahrenheit = false;
    }
    else {
        one.textContent = '°C';
        two.textContent = '°F';
        //TODO: change min/max in number input in html (not out of range)
        isCelsiusToFahrenheit = true;
    }

    if (enteredValue.value !== "") {
        convertTemperatures();
    }
    else {
        reset();
    }
}

btnConv.addEventListener('click', convertTemperatures);
btnReset.addEventListener('click', reset);
btnChange.addEventListener('click', changeUnit);
