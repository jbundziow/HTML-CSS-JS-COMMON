const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_KEY = 'a354e1a7e6f1a85637e40d5c9e07c2c8';

const btnClicked = () => {
    if (input.value === '') {
        warning.textContent = "Wpisz nazwę miasta!";
    }
    else {
        warning.textContent = '';
        getWeather(input.value);
    }
}

const convertCityNameToGeoCoordinates = async (city) => {
    const URL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`;
    const coordinates = [];
    await axios.get(URL)
    .then(response => coordinates.push(response.data[0].lat, response.data[0].lon))
    .catch(err => console.error(err))
    return coordinates;
}

const getWeather = async (city) => {
    const coordinates = await convertCityNameToGeoCoordinates(city);
    const lat = coordinates[0];
    const lon = coordinates[1];
    //null or empty = falsey value
    if (!lat || !lon) {
        warning.textContent = "Takie miasto nie istnieje!";
        return
    }
    else {
    console.log(lat);
    console.log(lon);
    }
}



button.addEventListener('click', btnClicked);