'use strict'

const text = document.querySelector('.typing-animation')
const startBtn = document.querySelector('button');

let arr = ['The first text.', 'The second text.', 'The third text.'];
const endText = 'FINISH TEXT';


const animateText = (input, output) => {
    return new Promise((resolve,reject)=>{
    let i=0;
    output.textContent = '';
    const myDelay = setInterval(()=>{
        if (i<input.length) {
            output.textContent += input.charAt(i);
            i++;
    }
    else {
        clearInterval(myDelay);
        resolve();
    }
    },100)       
})
}


const wait = (milisec) => {
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve()}, milisec);
    });
}

startBtn.addEventListener('click', async () => {
    for (let i=0; i<arr.length; i++) {
    await animateText(arr[i], text);
    await wait(1000);
    }
    await wait(1500);
    await animateText(endText, text);
});


