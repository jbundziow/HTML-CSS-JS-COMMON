const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const checkPasswordStrength = () => {
    if (pass.value.length > 0 && pass.value.length < minValue ) {
        p.textContent = 'Twoje hasło jest za krótkie.'
        changeTextColor(p,'red');
    }
    else if (pass.value.length == 0) {
        p.textContent = "Nie podałeś hasła..."
        changeTextColor(p,'rgb(172, 169, 169)');
    }
    else if (!pass.value.match(letters)) {
        p.textContent = "Twoje hasło nie zawiera liter."
        changeTextColor(p,'orange');
    }
    else if (!pass.value.match(numbers)) {
        p.textContent = "Twoje hasło nie zawiera cyfr."
        changeTextColor(p,'orange');
    }
    else {
        if (pass.value.match(special)) {
            p.textContent = "Twoje hasło jest bardzo silne."
            changeTextColor(p,'greenyellow');
        }
        else {
        p.textContent = "Twoje hasło jest silne."
        changeTextColor(p,'aquamarine');
        }
    }
    // TODO: ADD 'COLOR' PROPERTY IN CSS
    // TODO: Check result with mmc school
}

const changeTextColor = (element, color) => {
element.style.color= color;
}


pass.addEventListener('keyup', checkPasswordStrength);