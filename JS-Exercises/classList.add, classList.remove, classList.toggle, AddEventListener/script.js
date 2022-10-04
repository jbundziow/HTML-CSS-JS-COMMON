//get buttons
const buttonAdd = document.querySelector('#button-add');
const buttonRemove = document.querySelector('#button-remove');
const buttonToggle = document.querySelector('#button-toggle');

//get 'p'
const myParagraph = document.querySelector('.flex-container > .my-paragraph');


//1st function
function addClass () {
myParagraph.classList.add('magic-class');
}

//2nd function - arrow function
const removeClass = () => {
    myParagraph.classList.remove('magic-class');
};

//3rd function
function toggleClass () {
    myParagraph.classList.toggle('magic-class');
}

//Event Listeners on buttons
buttonAdd.addEventListener('click', addClass);
buttonRemove.addEventListener('click', removeClass);
buttonToggle.addEventListener('click', toggleClass);
