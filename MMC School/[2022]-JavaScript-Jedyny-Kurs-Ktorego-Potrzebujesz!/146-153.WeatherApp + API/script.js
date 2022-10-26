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
    .catch(err => console.error('ERROR IN FUNCTION convertCityNameToGeoCoordinates(): ' + err))
    return coordinates;
}

const getWeather = async (city) => {
    const coordinates = await convertCityNameToGeoCoordinates(city);
    //null or empty = falsey value
    if (!coordinates[0] || !coordinates[1]) {
        warning.textContent = "Takie miasto nie istnieje!";
        return; //exit
    }
    else {
        const lat = coordinates[0];
        const lon = coordinates[1];

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pl&appid=${API_KEY}&units=metric`;
    await axios.get(URL)
    .then(response => {
        console.log(response);
        cityName.textContent = response.data.name;
        weather.textContent = response.data.weather[0].main;
        temperature.textContent = `${response.data.main.temp}°C`;
        humidity.textContent = `${response.data.main.humidity}%`;

        //https://openweathermap.org/weather-conditions
        let iicon = response.data.weather[0].icon;
        console.log(iicon);

        })
    .catch(err => console.error('ERROR IN FUNCTION convertCityNameToGeoCoordinates(): ' + err));
    }
}



button.addEventListener('click', btnClicked);