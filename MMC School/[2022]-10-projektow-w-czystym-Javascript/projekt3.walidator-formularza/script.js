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

const checkLength = (input, min) => {
    if (input.value.length < min) {
        const formBox = input.closest('.form-box');
        const label = formBox.querySelector('label');
        showError(input, `${label.innerHTML.slice(0,-1)} składa się z min. ${min} znaków.`)
    }
}

const checkPassword = (pass1, pass2) => {
    if (pass1.value !== pass2.value) {
        showError(pass2, 'Oba hasła muszą być takie same!');
    }
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

const checkMail = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(email.value)) {
        clearError(email);
    }
    else {
        showError(email, 'Wpisz poprawnie adres email!')
    }
}

const checkErrors = () => {
    const formBoxes = document.querySelectorAll('.form-box');
    let countErrors = 0;

    formBoxes.forEach(el => {
        if (el.classList.contains('error')) {
            countErrors++;
        }
    })

    if (countErrors === 0) {
        popup.classList.add('show-popup');
    }
}

sendBtn.addEventListener('click', e => {
    e.preventDefault();
    checkForm([username, pass, pass2, email]);
    checkLength(username, 3);
    checkLength(pass, 8);
    checkPassword(pass,pass2);
    checkMail(email);
    checkErrors();
})

clearBtn.addEventListener('click', e => {
    e.preventDefault();

    [username, pass, pass2, email].forEach(el => {
        el.value = '';
        //el.closest('.form-box').classList.remove('error');
        clearError(el);
    });
});