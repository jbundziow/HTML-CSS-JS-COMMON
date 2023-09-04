interface Validatable {
value: string | number, //title/description or people
required?: boolean,
minLength?: number,
maxLength?: number,
min?: number,
max?: number
}


const validateInput = (input: Validatable): boolean => {
    let isValid = true;
    if (!input.value) {
        isValid = false; 
    }
    if(input.required) {
        isValid = isValid && (input.value.toString().trim().length > 0)
    }
    if(input.minLength || input.minLength === 0) {
        if(input.minLength <= 0) {
            throw new Error(`'minLength' cannot be 0 or negative number!`)
        }
        isValid = isValid && input.value.toString().length >= input.minLength
    }
    if(input.maxLength || input.maxLength === 0) {
        if(input.maxLength <= 0) {
            throw new Error(`'maxLength' cannot be 0 or negative number!`)
        }
        isValid = isValid && input.value.toString().length <= input.maxLength
    }
    if(input.min) {
        if(typeof input.value !== 'number') {
            throw new Error(`'min' parameter require value of type number!`)
        }
        isValid = isValid && input.value >= input.min;
    }
    if(input.max) {
        if(typeof input.value !== 'number') {
            throw new Error(`'max' parameter require value of type number!`)
        }
        isValid = isValid && input.value <= input.max;
    }

    return isValid;
}

export {validateInput};