'use strict'

const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');


const showError = (input, msg) => {
    const formBox = input.closest('.form-box');
    formBox.classList.add('error');
    const errorText = formBox.querySelector('.error-text');
    errorText.textContent = msg;
}

const clearError = (input) => {
    const formBox = input.closest('.form-box');
    formBox.classList.remove('error');
}

const checkForm = (input) => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el, el.placeholder);
        }
        else {
            clearError(el);
        }
    })
    
}

sendBtn.addEventListener('click', e => {
    e.preventDefault();
    checkForm([username, pass, pass2, email]);
})

clearBtn.addEventListener('click', e => {
    e.preventDefault();

    [username, pass, pass2, email].forEach(el => {
        el.value = '';
        //el.closest('.form-box').classList.remove('error');
    });
});