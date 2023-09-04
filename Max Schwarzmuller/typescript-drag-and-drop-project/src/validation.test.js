import { describe, it, expect } from 'vitest';
import {validateInput} from './validation';


describe('validateInput() tests', () => {
    it('correct value 1', () => {
        const obj = {
            value: 'askdas'
        }

        const result = validateInput(obj);
        expect(result).toBeTruthy()
    })
    it('correct value 2', () => {
        const obj = {
            value: 'askdas',
            required: true
        }

        const result = validateInput(obj);
        expect(result).toBeTruthy()
    })
    it('correct value 3', () => {
        const obj = {
            value: 'askdas',
            required: false
        }

        const result = validateInput(obj);
        expect(result).toBeTruthy()
    })
    it('correct value 4', () => {
        const obj = {
            value: 'askdas',
            minLength: 6
        }

        const result = validateInput(obj);
        expect(result).toBeTruthy()
    })
    it('correct value 5', () => {
        const obj = {
            value: 'askdas',
            maxLength: 6
        }

        const result = validateInput(obj);
        expect(result).toBeTruthy()
    })
    it('correct value 6', () => {
        const obj = {
            value: 233,
            min: 232,
            maxLength: 3
        }

        const result = validateInput(obj);
        expect(result).toBeTruthy()
    })
    it('correct value 7', () => {
        const obj = {
            value: 233,
            min: 233,
            maxLength: 3,
            minLength: 2
        }

        const result = validateInput(obj);
        expect(result).toBeTruthy()
    })
    it('correct value 8', () => {
        const obj = {
            value: 23,
            max: 23
        }

        const result = validateInput(obj);
        expect(result).toBeTruthy()
    })








    it('uncorrect value 1', () => {
        const obj = {
            value: '    ',
            required: true
        }

        const result = validateInput(obj);
        expect(result).toBeFalsy()
    })
    it('uncorrect value 2', () => {
        const obj = {
            value: ''
        }

        const result = validateInput(obj);
        expect(result).toBeFalsy()
    })
    it('uncorrect value 3', () => {
        const obj = {
            value: 'sdsd',
            minLength: 23
        }

        const result = validateInput(obj);
        expect(result).toBeFalsy()
    })
    it('uncorrect value 4', () => {
        const obj = {
            value: 'asdasd',
            minLength: 20
        }

        const result = validateInput(obj);
        expect(result).toBeFalsy()
    })
    it('uncorrect value 5', () => {
        const obj = {
            value: 'asdasd',
            maxLength: 4
        }

        const result = validateInput(obj);
        expect(result).toBeFalsy()
    })
    it('uncorrect value 6', () => {
        const obj = {
            value: 23,
            minLength: 1,
            min: 24
        }

        const result = validateInput(obj);
        expect(result).toBeFalsy()
    })
    it('uncorrect value 7', () => {
        const obj = {
            value: 23,
            minLength: 2,
            max: 22
        }

        const result = validateInput(obj);
        expect(result).toBeFalsy()
    })
    it('uncorrect value 8', () => {
        const obj = {
            value: 'asdasd',
            min: 23
        }

        expect(() => {
            validateInput(obj);
        }).toThrowError();
    })
    it('uncorrect value 9', () => {
        const obj = {
            value: 'asdasd',
            max: 23
        }
        
        expect(() => {
            validateInput(obj);
        }).toThrowError();
        
    })
    it('uncorrect value 10', () => {
        const obj = {
            value: 'asdasd',
            maxLength: 0
        }
        
        expect(() => {
            validateInput(obj);
        }).toThrowError();
        
    })
    it('uncorrect value 11', () => {
        const obj = {
            value: 'asdasd',
            maxLength: -11
        }
        
        expect(() => {
            validateInput(obj);
        }).toThrowError();
        
    })
    it('uncorrect value 12', () => {
        const obj = {
            value: 'asdasd',
            minLength: 0
        }
        
        expect(() => {
            validateInput(obj);
        }).toThrowError();
        
    })
    it('uncorrect value 13', () => {
        const obj = {
            value: 'asdasd',
            minLength: -11
        }
        
        expect(() => {
            validateInput(obj);
        }).toThrowError();

    })

    // all below cannot be executed without typescript
    it('uncorrect value 14', () => {
        const obj = {
            
        }

        const result = validateInput(obj);
        expect(result).toBeFalsy()
    })
    it('uncorrect value 15', () => {
        const obj = {
            required: true
        }

        const result = validateInput(obj);
        expect(result).toBeFalsy()
    })
    it('uncorrect value 16', () => {
        const obj = {
            required: false
        }

        const result = validateInput(obj);
        expect(result).toBeFalsy()
    })

})