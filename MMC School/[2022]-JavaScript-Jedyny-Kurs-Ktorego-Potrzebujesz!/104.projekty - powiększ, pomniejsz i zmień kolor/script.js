const btnPlus = document.querySelector('.sizeUp');
const btnMinus = document.querySelector('.sizeDown');
const btnColor = document.querySelector('.color');
const text = document.querySelector('.text > p');
const textWithActualSize = document.querySelector('.text > .text-size');


const changeTextSize = (UpOrDown) => {
    let textFontSize = parseInt(window.getComputedStyle(text).fontSize); //returns number '36' when font-size is '36px'
    
    switch (UpOrDown) {
        case 'up':
            if (textFontSize < 48) {
                textFontSize += 2;
                text.style.fontSize = `${textFontSize}px`;
                textWithActualSize.textContent = `${textFontSize}px`; //show current size on screen
            }
        break;

        case 'down':
            if (textFontSize > 24) {
                textFontSize -= 2;
                text.style.fontSize = `${textFontSize}px`;
                textWithActualSize.textContent = `${textFontSize}px`; //show current size on screen
            }
        break;

        default:
            console.error('wrong parameter in changeTextSize()');
            break;
    }
}


const changeTextColor = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    randomColor = '#' + randomColor;
    
    text.style.color = randomColor;
}



btnPlus.addEventListener('click',() => {changeTextSize('up')});
btnMinus.addEventListener('click',() => {changeTextSize('down')});
btnColor.addEventListener('click', changeTextColor);