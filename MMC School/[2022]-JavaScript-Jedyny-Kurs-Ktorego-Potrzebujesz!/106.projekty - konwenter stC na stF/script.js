let isCelsiusToFahrenheit = true;

const btnConv = document.querySelector('.conv');
const btnReset = document.querySelector('.reset');
const btnChange = document.querySelector('.change');
const enteredValue = document.querySelector('#converter');
const resultParagraph = document.querySelector('.result');
const one = document.querySelector('.one');
const two = document.querySelector('.two');




// **************************** FUNCTIONS ****************************

const convertTemperatures = () => {
    if(enteredValue.value == "") {
        resultParagraph.textContent = "You have not entered any value!";
        ColorRedAndShakeInput();
        return; //exit
    }
    let result;
        if (isCelsiusToFahrenheit) {
            if (enteredValue.value < -273.15) {
                resultParagraph.textContent = '-273.15°C is an "absolute zero".';
                ColorRedAndShakeInput();
            }
            else {
        result = 9/5*enteredValue.value+32;
        resultParagraph.textContent = `${enteredValue.value}°C equals ${result.toFixed(2)}°F`;
        resultParagraph.style.color = "white";
            }
        }
        else {
            if (enteredValue.value < -459.67) {
                resultParagraph.textContent = '-459.67°F is an "absolute zero".';
                ColorRedAndShakeInput();
            }
            else {
            result = 5/9*(enteredValue.value-32);
            resultParagraph.textContent = `${enteredValue.value}°F equals ${result.toFixed(2)}°C`;
            resultParagraph.style.color = "white";
            }
        }
}

const reset = () => {
enteredValue.value = null;
resultParagraph.textContent = null;
removeBoxShadow();
}

const changeUnit = () => {
    removeBoxShadow();

    if (isCelsiusToFahrenheit) {
        one.textContent = '°F';
        two.textContent = '°C';
        isCelsiusToFahrenheit = false;
    }
    else {
        one.textContent = '°C';
        two.textContent = '°F';
        isCelsiusToFahrenheit = true;
    }

    if (enteredValue.value !== "") {
        convertTemperatures();
    }
    else {
        reset();
    }
}

const ColorRedAndShakeInput = () => {
    resultParagraph.style.color = "red";
    enteredValue.classList.add('wrongValueShake');
    enteredValue.classList.add('wrongValueBoxShadow');
    setTimeout(() => {enteredValue.classList.remove('wrongValueShake');}, 300);
}

const removeBoxShadow = () => enteredValue.classList.remove('wrongValueBoxShadow');

// **************************** end FUNCTIONS ****************************



btnConv.addEventListener('click', convertTemperatures);
btnReset.addEventListener('click', reset);
btnChange.addEventListener('click', changeUnit);
enteredValue.addEventListener('click', removeBoxShadow);
