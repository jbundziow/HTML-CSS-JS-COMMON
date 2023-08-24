import {describe, it, expect} from 'vitest';
import { isProductDataValidated, isEditProductDataValidated } from './productValidation';

describe('isProductDataValidated() - passing the correct object', () => {
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





describe('isProductDataValidated() - passing the uncorrect object', () => {
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
    it('should return false 11',() => {
        const obj = 'not object'
        expect(isProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 12',() => {
        const obj = {
            title: 'sth',
            description: true,
            price: 22,
        }
        expect(isProductDataValidated(obj)).toBeFalsy();
    })

})
















describe('isEditProductDataValidated() - passing the correct object', () => {
    it('should return true 1',() => {
        const obj = {
            id: 1,
            title: 'sth',
            description: 'sth',
            price: 12,
        }
        expect(isEditProductDataValidated(obj)).toBeTruthy();
    })
    it('should return true 2',() => {
        const obj = {
            id: 2,
            title: 'sth',
            description: 'sth',
            price: 12.22,
        }
        expect(isEditProductDataValidated(obj)).toBeTruthy();
    })
    it('should return true 3',() => {
        const obj = {
            id: '3',
            title: 'jafjanfsjasfnjasfjn',
            description: '12142412',
            price: 0.11,
        }
        expect(isEditProductDataValidated(obj)).toBeTruthy();
    })
    it('should return true 4',() => {
        const obj = {
            id: 999,
            title: 'stasdsadsadsdah',
            description: 'stsadadsh',
            price: 99999.99,
        }
        expect(isEditProductDataValidated(obj)).toBeTruthy();
    })
    it('should return true 5',() => {
        const obj = {
            id: 122,
            title: 'x',
            description: 'x',
            price: 0.01,
        }
        expect(isEditProductDataValidated(obj)).toBeTruthy();
    })
    it('should return true 6',() => {
        const obj = {
            id: 55,
            title: 'x',
            description: 'x',
            price: '12.99',
        }
        expect(isEditProductDataValidated(obj)).toBeTruthy();
    })
    it('should return true 7',() => {
        const obj = {
            id: 99,
            title: 'x',
            description: 'x',
            price: 0,
        }
        expect(isEditProductDataValidated(obj)).toBeTruthy();
    })
    it('should return true 8',() => {
        const obj = {
            id: 12,
            title: 'x',
            description: 'x',
            price: '0.00',
        }
        expect(isEditProductDataValidated(obj)).toBeTruthy();
    })
    it('should return true 9',() => {
        const obj = {
            id: '12',
            title: 'x',
            description: 'x',
            price: 12.99,
        }
        expect(isEditProductDataValidated(obj)).toBeTruthy();
    })
    it('should return true 10',() => {
        const obj = {
            id: '999',
            title: 'x',
            description: 'x',
            price: '222',
        }
        expect(isEditProductDataValidated(obj)).toBeTruthy();
    })
})





describe('isEditProductDataValidated() - passing the uncorrect object', () => {
    it('should return false 1',() => {
        const obj = {
            id: 4,
            title: 'sth',
            description: 'sth',
            price: '12.s2',
        }
        expect(isEditProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 2',() => {
        const obj = {
            id: 4,
            title: '',
            description: 'sth',
            price: 12,
        }
        expect(isEditProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 3',() => {
        const obj = {
            title: 'sth',
            description: '',
            price: 12,
        }
        expect(isEditProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 4',() => {
        const obj = {
            title: 'sth',
            deon: 'sth',
            price: 12,
        }
        expect(isEditProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 5',() => {
        const obj = {
            id: 4,
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
        expect(isEditProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 7',() => {
        const obj = {
            id: 4,
            title: 'sth',
            description: 'sth',
            price: -11.22,
        }
        expect(isEditProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 8',() => {
        const obj = {
            title: 'sth',
            description: 'sth',
            price: -0.01,
        }
        expect(isEditProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 9',() => {
        const obj = {
            id: 4,
            title: 'sth',
            description: 'sth',
            price: '-2.91',
        }
        expect(isEditProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 10',() => {
        const obj = {
            id: 4,
            title: 'sth',
            description: 'sth',
            price: 'its_NaN',
        }
        expect(isEditProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 11',() => {
        const obj = {
            id: 4.5,
            title: 'sth',
            description: 'sth',
            price: 12.99,
        }
        expect(isEditProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 12',() => {
        const obj = {
            id: -40,
            title: 'sth',
            description: 'sth',
            price: 12.99,
        }
        expect(isEditProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 13',() => {
        const obj = {
            title: 'sth',
            description: 'sth',
            price: 25.29,
        }
        expect(isEditProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 14',() => {
        const obj = {
            id: '22.4',
            title: 'sth',
            description: 'sth',
            price: 22,
        }
        expect(isEditProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 15',() => {
        const obj = {
            id: 'not_number',
            title: 'sth',
            description: 'sth',
            price: 22,
        }
        expect(isEditProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 16',() => {
        const obj = {
            id: 22,
            title: 'sth',
            description: 'sth',
            priceeeeeee: 22,
        }
        expect(isEditProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 17',() => {
        const obj = {
            id: 22,
            title: true,
            description: 'sth',
            price: 22,
        }
        expect(isEditProductDataValidated(obj)).toBeFalsy();
    })
    it('should return false 18',() => {
        const obj = 'not obj'
        expect(isEditProductDataValidated(obj)).toBeFalsy();
    })
   

})