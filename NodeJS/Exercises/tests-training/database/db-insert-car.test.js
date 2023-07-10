const request = require('supertest');
const {isCarDataValidated} = require('./db-insert-car')


describe('isCarDataValidated function check', () => {
    it('correct data', () => {
        const data = {
            brand: 'Hyundai',
            model: 'i30',
            carInspectionDate: '2019-01-01T00:00:00'
        }

        const result = isCarDataValidated(data);
        expect(result).toBeTruthy();
    })
})