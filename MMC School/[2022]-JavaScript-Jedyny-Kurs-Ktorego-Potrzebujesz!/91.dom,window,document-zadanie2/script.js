//MY SOLUTION:
const btn_hamburger = document.querySelector('.buttons > .btn1');
const btn_pizza = document.querySelector('.buttons > .btn2');
const square = document.querySelector('.square');
const p1 = document.querySelector('.text > .p1');
const p2 = document.querySelector('.text > .p2');


const greeting = () => {
console.log('cześć');
}

const changeColorOfElement = (element, color) => {
    const item = document.querySelector(element);
    item.style.backgroundColor = color;
}


function showAndHideParagraph() {
    p1.classList.toggle('show');
    p2.classList.toggle('show');
}



btn_hamburger.addEventListener('dblclick', greeting);
square.addEventListener('mouseenter', function () {changeColorOfElement('.square','red')});
square.addEventListener('mouseleave', function () {changeColorOfElement('.square','royalblue')});
btn_pizza.addEventListener('click', showAndHideParagraph);