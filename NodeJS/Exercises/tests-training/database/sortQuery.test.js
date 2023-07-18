const request = require('supertest');
const { areSortQueriesValidated } = require('./sortQuery')

describe('areSortQueriesValidated - pass correct object', () => {
    it('correct data 1', () => {
        const obj = {
            sort: 'id_near',
        }

        const result = areSortQueriesValidated(obj);
        expect(result).toBeTruthy();
    })

    it('correct data 2', () => {
        const obj = {
            sort: 'id_far',
        }

        const result = areSortQueriesValidated(obj);
        expect(result).toBeTruthy();
    })

    it('correct data 3', () => {
        const obj = {
            sort: 'md_near',
        }

        const result = areSortQueriesValidated(obj);
        expect(result).toBeTruthy();
    })

    it('correct data 4', () => {
        const obj = {
            sort: 'md_far',
        }

        const result = areSortQueriesValidated(obj);
        expect(result).toBeTruthy();
    })

    it('correct data 5', () => {
        const obj = {
            sort: 'lookfor',
            term: 'text'
        }

        const result = areSortQueriesValidated(obj);
        expect(result).toBeTruthy();
    })
})


describe('areSortQueriesValidated - pass uncorrect object', () => {
    it('uncorrect data 1', () => {
        const obj = {
            sort: 'adsfadfaf',
        }

        const result = areSortQueriesValidated(obj);
        expect(result).toBeFalsy();
    })

    it('uncorrect data 2', () => {
        const obj = {
            sort: '',
        }

        const result = areSortQueriesValidated(obj);
        expect(result).toBeFalsy();
    })

    it('uncorrect data 3', () => {
        const obj = {
            sot: 'md_near',
        }

        const result = areSortQueriesValidated(obj);
        expect(result).toBeFalsy();
    })

    it('uncorrect data 4', () => {
        const obj = {}
        

        const result = areSortQueriesValidated(obj);
        expect(result).toBeFalsy();
    })

    it('uncorrect data 5', () => {

        const result = areSortQueriesValidated();
        expect(result).toBeFalsy();
    })

    it('uncorrect data 6', () => {
        const obj = {
            sort: 'lookfor',
            term: ''
        }

        const result = areSortQueriesValidated(obj);
        expect(result).toBeFalsy();
    })

    it('uncorrect data 7', () => {
        const obj = {
            sort: 'lookfor',
            term: 123123
        }

        const result = areSortQueriesValidated(obj);
        expect(result).toBeFalsy();
    })

    it('uncorrect data 8', () => {
        const obj = {
            sort: 1221
        }

        const result = areSortQueriesValidated(obj);
        expect(result).toBeFalsy();
    })

    it('uncorrect data 9', () => {
        const obj = {
            sort: '',
            term: 'text'
        }

        const result = areSortQueriesValidated(obj);
        expect(result).toBeFalsy();
    })

    it('uncorrect data 10', () => {
        const obj = {
            sort: 'lookfor',
            tm: 'text'
        }

        const result = areSortQueriesValidated(obj);
        expect(result).toBeFalsy();
    })
})