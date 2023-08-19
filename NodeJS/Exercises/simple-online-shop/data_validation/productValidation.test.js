import {describe, it, expect} from 'vitest';
import { isProductDataValidated } from './productValidation';

describe('isProductDataValidated() - passing correct object', () => {
    it('should return true 1',() => {
        const obj = {
            title: 'sth',
            description: 'sth',
            price: 12,
        }
        expect(isProductDataValidated(obj)).toBeTruthy();
    })
    it('should return true 2',() => {
        const obj = {
            title: 'sth',
            description: 'sth',
            price: 12.22,
        }
        expect(isProductDataValidated(obj)).toBeTruthy();
    })
    it('should return true 3',() => {
        const obj = {
            title: 'jafjanfsjasfnjasfjn',
            description: '12142412',
            price: 0.11,
        }
        expect(isProductDataValidated(obj)).toBeTruthy();
    })
    it('should return true 4',() => {
        const obj = {
            title: 'stasdsadsadsdah',
            description: 'stsadadsh',
            price: 99999.99,
        }
        expect(isProductDataValidated(obj)).toBeTruthy();
    })
    it('should return true 5',() => {
        const obj = {
            title: 'x',
            description: 'x',
            price: 0.01,
        }
        expect(isProductDataValidated(obj)).toBeTruthy();
    })
    it('should return true 6',() => {
        const obj = {
            title: 'x',
            description: 'x',
            price: '12.99',
        }
        expect(isProductDataValidated(obj)).toBeTruthy();
    })
    it('should return true 7',() => {
        const obj = {
            title: 'x',
            description: 'x',
            price: 0,
        }
        expect(isProductDataValidated(obj)).toBeTruthy();
    })
    it('should return true 8',() => {
        const obj = {
            title: 'x',
            description: 'x',
            price: '0.00',
        }
        expect(isProductDataValidated(obj)).toBeTruthy();
    })
})





describe('isProductDataValidated() - passing uncorrect object', () => {
    it('should return false 1',() => {
        const obj = {
            title: 'sth',
            description: 'sth',
            price: '12.s2',
        }
        expect(isProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 2',() => {
        const obj = {
            title: '',
            description: 'sth',
            price: 12,
        }
        expect(isProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 3',() => {
        const obj = {
            title: 'sth',
            description: '',
            price: 12,
        }
        expect(isProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 4',() => {
        const obj = {
            title: 'sth',
            deon: 'sth',
            price: 12,
        }
        expect(isProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 5',() => {
        const obj = {
            title: 'sth',
            description: 'sth',
            price: 12.44,
            sth: 'sth'
        }
        expect(isProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 6',() => {
        const obj = {
            description: 'sth',
            price: 12,
        }
        expect(isProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 7',() => {
        const obj = {
            title: 'sth',
            description: 'sth',
            price: -11.22,
        }
        expect(isProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 8',() => {
        const obj = {
            title: 'sth',
            description: 'sth',
            price: -0.01,
        }
        expect(isProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 9',() => {
        const obj = {
            title: 'sth',
            description: 'sth',
            price: '-2.91',
        }
        expect(isProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 10',() => {
        const obj = {
            title: 'sth',
            description: 'sth',
            price: 'its_NaN',
        }
        expect(isProductDataValidated(obj)).toBeFalsy();
    })
   

})
