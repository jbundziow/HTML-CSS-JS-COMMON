const modal = document.querySelector('.modal')
const input = document.querySelector('.modal-input')
const modalBtn = document.querySelector('.modal-btn')
const saveBtn = document.querySelector('.save-btn')
const text = document.querySelector('.text')
const errorMsg = document.querySelector('.error-msg')

let inputValue = 'To jest testowa wiadomość.'
let timeout;
let index = 1
let speed = 80

const typingAnimation = (txt) => {
    const letters = txt.slice(0,index);
    text.textContent = letters;
    index++;

    if (text.textContent.length !== txt.length) {
        timeout = setTimeout(() => {typingAnimation(txt)}, speed)
    }
    else {
        clearTimeout(timeout)
        index = 1;
    }
}



const showModal = () => {
    modal.classList.add('active')
    input.focus();
}

const closeModal = () => {
    if (input.value === '') {
        errorMsg.style.display = 'flex';
    }
    else {
        inputValue = input.value;
        typingAnimation(inputValue)
        resetValues();
    }
}

const resetValues = () => {
    errorMsg.style.display = 'none';
    modal.classList.remove('active')
    input.value = ''
}


modalBtn.addEventListener('click', showModal)
saveBtn.addEventListener('click', closeModal)
typingAnimation(inputValue)
