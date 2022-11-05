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

const infoBtn = document.querySelector('.info')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')

let elapsedSeconds = 0;
let intervalFunction;



const handleStart = () => {
    clearInterval(intervalFunction)

    intervalFunction = setInterval(() => {
        elapsedSeconds ++;
        stopwatch.textContent = convertSecondsToMinutesAndSeconds(elapsedSeconds)
    }, 1000);
}

const handlePause = () => {
    clearInterval(intervalFunction)
}

const handleStop = () => {
    clearInterval(intervalFunction)
    //save time
}


startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)