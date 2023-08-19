import {describe, it, expect} from 'vitest';
import { isOrderDataValidated } from './orderValidation';

describe('isOrderDataValidated() - passing the correct object', () => {
    it('should return true 1',() => {
        const obj = {
            name: 'John',
            surname: 'Smith',
            productIDsInCart: [22],
            productQtyInCart: [2]
        }
        expect(isOrderDataValidated(obj)).toBeTruthy();
    })
    it('should return true 2',() => {
        const obj = {
            name: 'John',
            surname: 'Smith',
            productIDsInCart: [22, 23, 21],
            productQtyInCart: [2, 4, 1]
        }
        expect(isOrderDataValidated(obj)).toBeTruthy();
    })
    it('should return true 3',() => {
        const obj = {
            name: 'John',
            surname: 'Smith',
            productIDsInCart: [22, 12, 99],
            productQtyInCart: [2, 4, 5]
        }
        expect(isOrderDataValidated(obj)).toBeTruthy();
    })

})


describe('isOrderDataValidated() - passing the uncorrect object', () => {
    it('should return false 1',() => {
        const obj = {
            name: 'John',
            sue: 'Smith',
            productIDsInCart: [22],
            productQtyInCart: [2]
        }
        expect(isOrderDataValidated(obj)).toBeFalsy();
    })
    it('should return false 2',() => {
        const obj = {
            name: 'John',
            surname: 'Smith',
            productIDsInCart: ['22'],
            productQtyInCart: [2]
        }
        expect(isOrderDataValidated(obj)).toBeFalsy();
    })
    it('should return false 3',() => {
        const obj = {
            name: 'John',
            surname: 'Smith',
            productIDsInCart: [25, 22, 1],
            productQtyInCart: [2, 0, 1]
        }
        expect(isOrderDataValidated(obj)).toBeFalsy();
    })
    it('should return false 4',() => {
        const obj = {
            name: 'John',
            surname: 'Smith',
            productIDsInCart: [25, 22, 1],
            productQtyInCart: [2, 4]
        }
        expect(isOrderDataValidated(obj)).toBeFalsy();
    })
    it('should return false 5',() => {
        const obj = {
            name: 'John',
            surname: 'Smith',
            productIDsInCart: 22,
            productQtyInCart: 1
        }
        expect(isOrderDataValidated(obj)).toBeFalsy();
    })
    it('should return false 6',() => {
        const obj = {
            name: 'John',
            surname: '',
            productIDsInCart: [23, 22, 82],
            productQtyInCart: [1, 1, 1]
        }
        expect(isOrderDataValidated(obj)).toBeFalsy();
    })
    it('should return false 7',() => {
        const obj = {
            name: '',
            surname: 'Smith',
            productIDsInCart: [23, 22, 82],
            productQtyInCart: [1, 1, 1]
        }
        expect(isOrderDataValidated(obj)).toBeFalsy();
    })
    it('should return false 8',() => {
        const obj = {
            name: 'John',
            surname: 'Smith',
            productQtyInCart: [2, 5]
        }
        expect(isOrderDataValidated(obj)).toBeFalsy();
    })
    it('should return false 9',() => {
        const obj = {
            name: 'John',
            surname: 'Smith',
            productIDsInCart: [23, 2],
        }
        expect(isOrderDataValidated(obj)).toBeFalsy();
    })
    it('should return false 10',() => {
        const obj = {
            name: 626,
            surname: 'Smith',
            productIDsInCart: [23, 21],
            productQtyInCart: [2, 4]
        }
        expect(isOrderDataValidated(obj)).toBeFalsy();
    })
    it('should return false 11',() => {
        const obj = {
            name: 'John',
            surname: 'Smith',
            productIDsInCart: [4, 4, 5], //products ids cannot duplicate
            productQtyInCart: [1, 2, 3]
        }
        expect(isOrderDataValidated(obj)).toBeFalsy();
    })
    it('should return false 12',() => {
    const obj = {
        name: 'John',
        surname: 'Smith',
        productIDsInCart: [22, 5, 7, 22], //products ids cannot duplicate
        productQtyInCart: [2, 4, 1, 2]
    }
        expect(isOrderDataValidated(obj)).toBeFalsy();
    })
    it('should return false 13',() => {
        const obj = {
            name: 'John',
            surname: 'Smith',
            productIDsInCart: [23, true, 82],
            productQtyInCart: [1, 1, 1]
        }
        expect(isOrderDataValidated(obj)).toBeFalsy();
    })
    it('should return false 14',() => {
        const obj = {
            name: 'John',
            surname: 'Smith',
            productIDsInCart: [23, 22, 82],
            productQtyInCart: [1, 3, true]
        }
        expect(isOrderDataValidated(obj)).toBeFalsy();
    })
    it('should return false 15',() => {
        const obj = {
            name: 'John',
            surname: 'Smith',
            productIDsInCart: [23, 22, 82],
            productQtyInCart: [1, 0, 1]
        }
        expect(isOrderDataValidated(obj)).toBeFalsy();
    })
    it('should return false 16',() => {
        const obj = {
            name: 'John',
            surname: 'Smith',
            productIDsInCart: [23, 22, 82],
            productQtyInCart: ['1', '0', '1']
        }
        expect(isOrderDataValidated(obj)).toBeFalsy();
    })

})