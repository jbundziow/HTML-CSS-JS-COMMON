const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const checkPasswordStrength = () => {
    if (pass.value.length > 0 && pass.value.length < minValue ) {
        p.textContent = 'Twoje hasło jest za krótkie.'
    }
    else if (pass.value.length == 0) {
        p.textContent = "Nie podałeś hasła..."
    }
    else if (!pass.value.match(letters)) {
        p.textContent = "Twoje hasło nie zawiera liter."
    }
    else if (!pass.value.match(numbers)) {
        p.textContent = "Twoje hasło nie zawiera cyfr."
    }
    else {
        if (pass.value.match(special)) {
            p.textContent = "Twoje hasło jest bardzo silne."
        }
        else {
        p.textContent = "Twoje hasło jest silne."
        }
    }
    // TODO: ADD 'COLOR' PROPERTY IN CSS
    // TODO: Check result with mmc school
}


pass.addEventListener('keyup', checkPasswordStrength);