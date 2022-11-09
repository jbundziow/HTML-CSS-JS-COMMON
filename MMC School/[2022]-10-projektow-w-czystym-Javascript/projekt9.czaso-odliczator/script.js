'use strict'

const settingsBtn = document.querySelector('.settings-btn')
//settings panel
const settingsPanel = document.querySelector('.settings')
const eventNameInput = document.querySelector('#event-name')
const eventDayInput = document.querySelector('#event-day')
const eventMonthInput  = document.querySelector('#event-month')
const eventYearInput  = document.querySelector('#event-year')
eventYearInput.value = new Date().getFullYear() + 1
const eventImageInput  = document.querySelector('#event-image')
const saveEventBtn  = document.querySelector('.save')

//main window
const imageContainer = document.querySelector('.image-section')
const eventName = document.querySelector('.event')
const daysCounter = document.querySelector('.days-count')
const hoursCounter = document.querySelector('.hours-count')
const minutesCounter = document.querySelector('.minutes-count')
const secondsCounter = document.querySelector('.seconds-count')


const showSettingsPanel = () => {
    settingsPanel.classList.toggle('active')
}

const saveNewEvent = () => {
    if (enteredValuesAreCorrect()) {
        //set event name
        eventName.textContent = eventNameInput.value;

        //set new image
        imageContainer.style.backgroundImage = `url("${eventImageInput.value}")`
        // https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cec4e0dd-b697-4bbc-8ba8-03157f5c55be/dcp11s8-cc1cbe55-1012-4fdf-9540-5cf3e81d921f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NlYzRlMGRkLWI2OTctNGJiYy04YmE4LTAzMTU3ZjVjNTViZVwvZGNwMTFzOC1jYzFjYmU1NS0xMDEyLTRmZGYtOTU0MC01Y2YzZTgxZDkyMWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9i2PHei7B6h76bP6D3OG5tfFpbAx1N695H_jqXfB4A8

        console.log(Date.now()); //now
        console.log(new Date('2022-11-09').getTime()); //later
        //TODO: check if miliseconds are not a negative number
    }
}

const enteredValuesAreCorrect = () => {
    const day = parseFloat(eventDayInput.value);
    const month = parseFloat(eventMonthInput.value);
    const year = parseFloat(eventYearInput.value);

    if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(year)) {
        alert('Wprowadź liczby całkowite!')
        return false;
    }
    else if (year < 2022) {
        alert('Wprowadź poprawny rok!')
        return false;
    }
    else if (month < 1 || month > 12) {
        alert('Wprowadź poprawny miesiąc!')
        return false;
    }
    else if (day < 1 || day > daysInMonth(month, year)) {
        alert('Wprowadź poprawny dzień!')
        return false;
    }
    else if (eventNameInput.value === '') {
        alert('Wprowadź nazwę wydarzenia!')
        return false;
    }
    else if (eventImageInput.value === '') {
        alert('Wprowadź URL do obrazka!')
        return false;
    }
    else {
        return true; //OK
    }

}

const daysInMonth = (monthAsInt, yearAsInt) => {
    let result;
    switch (monthAsInt) {
        case 1:
            result = 31;
            break;
        case 2:
            if(yearAsInt % 4 === 0) {result = 29} else {result = 28}
            break;
        case 3:
            result = 31;
            break;
        case 4:
            result = 30;
            break;
        case 5:
            result = 31;
            break;
        case 6:
            result = 30;
            break;
        case 7:
            result = 31;
            break;
        case 8:
            result = 31;
            break;
        case 9:
            result = 30;
            break;
        case 10:
            result = 31;
            break;
        case 11:
            result = 30;
            break;
        case 12:
            result = 31;
            break;
        default:
            result = 'error';
            break;
    }
    return result;
}


const updateCounter = (miliseconds) => {
    //TODO - display days, hours, minutes, seconds on main screen
}

settingsBtn.addEventListener('click', showSettingsPanel)
saveEventBtn.addEventListener('click', saveNewEvent)
// setInterval(() => {updateCounter(?????????????)}, 1000);
