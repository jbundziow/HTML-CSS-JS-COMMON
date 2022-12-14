const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_KEY = 'a354e1a7e6f1a85637e40d5c9e07c2c8';

input.focus();

const btnClicked = () => {
    if (input.value === '') {
        warning.textContent = "Wpisz nazwę miasta!";
    }
    else {
        warning.textContent = '';
        getWeather(input.value);
        input.focus();
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

const returnWeatherImg = (ID) => {
    if (ID >= 200 && ID < 300) { //thunderstorm
        return './img/thunderstorm.png';
    }
    else if (ID >= 300 && ID < 400) { //drizzle
        return './img/drizzle.png';
    }
    else if (ID >= 500 && ID < 600) { //rain
        return './img/rain.png';
    }
    else if (ID >= 600 && ID < 700) { //snow
        return './img/ice.png';
    }
    else if (ID >= 700 && ID < 800) { //atmosphere
        return './img/fog.png';
    }
    else if (ID === 800) { //clear
        return './img/sun.png';
    }
    else if (ID > 800 && ID < 900) { //clouds
        return './img/cloud.png';
    }
    else {
        return './img/unknown.png';
    }
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
        //console.log(response);
        cityName.textContent = response.data.name;
        weather.textContent = response.data.weather[0].main;
        temperature.textContent = `${response.data.main.temp}°C`;
        humidity.textContent = `${response.data.main.humidity}%`;

        const ID = response.data.weather[0].id;
        photo.setAttribute('src',returnWeatherImg(ID));
        input.value = '';
        })
    .catch(err => console.error('ERROR IN FUNCTION convertCityNameToGeoCoordinates(): ' + err));
    }
}


const enterKeyCheck = (e) => {
    if (e.key === 'Enter') {
        btnClicked();
    }
}
input.addEventListener('keyup', enterKeyCheck);
button.addEventListener('click', btnClicked);