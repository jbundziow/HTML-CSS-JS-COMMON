'use strict'
import {convertSecondsToMinutesAndSeconds} from './timeCounting.js'

const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')

const infoBtn = document.querySelector('.fa-question')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')

const colorModalBtn = document.querySelector('.fa-palette')
const colorModal = document.querySelector('.modal-color')
const color1Btn = document.querySelector('.color1')
const color2Btn = document.querySelector('.color2')
const color3Btn = document.querySelector('.color3')

let elapsedSeconds = 0;
let intervalFunction;
let timesArr = [];



const handleStart = () => {
    hideHistory();
    clearInterval(intervalFunction)
    time.style.visibility = 'hidden';
    
    intervalFunction = setInterval(() => {
        elapsedSeconds ++;
        stopwatch.textContent = convertSecondsToMinutesAndSeconds(elapsedSeconds)
    }, 100);
}

const handlePause = () => {
    clearInterval(intervalFunction)
}

const handleStop = () => {
    hideHistory();
    if (stopwatch.textContent !== '0:00') {
    clearInterval(intervalFunction)
    time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`
    timesArr.push(stopwatch.textContent)
    time.style.visibility = 'visible'
    elapsedSeconds = 0;
    stopwatch.textContent = '0:00'
    }

}

const handleReset = () => {
    hideHistory();
    clearInterval(intervalFunction)
    time.style.visibility = 'hidden';
    elapsedSeconds = 0;
    stopwatch.textContent = '0:00'
    timesArr = []
}

const hideHistory = () => {
    timeList.textContent = ''
    historyState = false;
    historyBtn.style.backgroundColor = 'transparent';
}

let historyState = false;
const showHistory = () => {
    if (historyState === false) {
        timeList.style.display = 'flex';
        historyBtn.style.backgroundColor = 'red';
    }
    else {
        timeList.style.display = 'none';
        historyBtn.style.backgroundColor = 'transparent';
    }
    historyState = !historyState;
    
    let num = 1
    timeList.textContent = ''
    if (timesArr.length !== 0) {
    timesArr.forEach(time => {
        const newLi = document.createElement('li');
        newLi.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`
        timeList.append(newLi)
        num++
    })
    }
    else {
        timeList.textContent = 'Lista jest pusta!'
    }
}


const showModal = () => {
    modalShadow.style.display = 'block';

}

const hideModal = () => {
    modalShadow.style.display = 'none';
}

startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)
historyBtn.addEventListener('click', showHistory)
infoBtn.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', hideModal)

window.addEventListener('click', e => {
    if (modalShadow.style.display === 'block') {
        if (e.target === modalShadow) {hideModal()}
    }
})

const showModalColor = () => {
    colorModal.classList.toggle('modal-color-show')
}

const changeColor = (color) => {
    let colorRGB;
    switch (color) {
        case 1:
            colorRGB = 'rgb(250, 20, 6)';
            break;
            case 2:
            colorRGB = 'rgb(7, 230, 18)'
            break;
            case 3:
            colorRGB = 'rgb(4, 236, 201)'
            break;
    
        default:
            console.error('An issue with changeColor()')
            break;
    }
    document.documentElement.style.setProperty('--first-color', colorRGB);
    showModalColor()
}

colorModalBtn.addEventListener('click', showModalColor)
color1Btn.addEventListener('click', ()=>{changeColor(1)})
color2Btn.addEventListener('click', ()=>{changeColor(2)})
color3Btn.addEventListener('click', ()=>{changeColor(3)})