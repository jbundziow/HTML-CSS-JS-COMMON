'use strict'

const text = document.querySelector('.typing-animation')
const startBtn = document.querySelector('button');

let arr = ['Witam serdecznie.', 'Dzień dobry.', 'Hi guys.'];
const logo = 'Company name';


let i = 0;
let j = 0;
const startAnimation = () => {
    i=0;
    text.textContent = '';
    j = 0;

    const myDelay = setInterval(()=>{
        if (j<arr.length) {
        if (i<arr[j].length) {
            text.textContent += arr[j].charAt(i);
            i++;
    }
    else {
        i=0;
        j++;
    }
}
else {
    clearInterval(myDelay);
    arr = ['New text', 'Hello world!', 'Yess'];
}
    },100)

}


startBtn.addEventListener('click', startAnimation);


