const request = require('supertest');
const {isCarDataValidated, isIDcorrect, isPutObjectValidated} = require('./dataValidation')



describe('isCarDataValidated function check - pass correct object', () => {
    it('correct data 1', () => {
        const data = {
            brand: 'Hyundai',
            model: 'i30',
            carInspectionDate: '2019-01-01T23:59:22'
        }

        const result = isCarDataValidated(data);
        expect(result).toBeTruthy();
    })
	
	it('correct data 2', () => {
        const data = {
            brand: 'Citroen',
            model: 'C4',
            carInspectionDate: '2015-03-25'
        }

        const result = isCarDataValidated(data);
        expect(result).toBeTruthy();
    })
	
	it('correct data 3', () => {
        const data = {
            brand: 'Opel',
            model: 'Astra',
            carInspectionDate: 'Mar 25 2025'
        }

        const result = isCarDataValidated(data);
        expect(result).toBeTruthy();
    })
	
	it('correct data 4', () => {
        const data = {
            brand: 'peugeot',
            model: '308',
            carInspectionDate: 'January 25 2023'
        }

        const result = isCarDataValidated(data);
        expect(result).toBeTruthy();
    })
	
	it('correct data 5', () => {
        const data = {
            brand: 'TOYOTA',
            model: 'YARIS',
            carInspectionDate: '2024-12-02T12:00:00Z'
        }

        const result = isCarDataValidated(data);
        expect(result).toBeTruthy();
    })
})


describe('isCarDataValidated function check - pass uncorrect object', () => {
	
    it('uncorrect data 1', () => {
        const data = {
            brand: 'Mercedes-Benz',
            model: 'S Class',
            carInspectionDate: '209-01-01T07:54:00'
        }

        const result = isCarDataValidated(data);
        expect(result).toBeFalsy();
    })
	
	it('uncorrect data 2', () => {
        const data = {
            brand: 'Dacia',
            model: 'Duster 4x4',
            carInspectionDate: '2015-13-25'
        }

        const result = isCarDataValidated(data);
        expect(result).toBeFalsy();
    })
	
	it('uncorrect data 3', () => {
        const data = {
            brand: 'Honda',
            model: 'Civic',
            carInspectionDate: 'Ma 25 2025'
        }

        const result = isCarDataValidated(data);
        expect(result).toBeFalsy();
    })
	
	it('uncorrect data 4', () => {
        const data = {
            brand: 'Mitsubishi',
            model: 'Lancer',
            carInspectionDate: '1043-10-12'
        }

        const result = isCarDataValidated(data);
        expect(result).toBeFalsy();
    })
	
	it('uncorrect data 5', () => {
        const data = {
            brand: '',
            model: 'Polo',
            carInspectionDate: '2024-12-02T12:00:00Z'
        }

        const result = isCarDataValidated(data);
        expect(result).toBeFalsy();
    })
	
	it('uncorrect data 6', () => {
        const data = {
            brand: 'Kia',
            model: '',
            carInspectionDate: 'Jun 01 2029'
        }

        const result = isCarDataValidated(data);
        expect(result).toBeFalsy();
    })
	
	it('uncorrect data 7', () => {
        const data = {
            bnd: 'xxxx',
            model: 'xxxx',
            carInspectionDate: 'Dec 24 2032'
        }

        const result = isCarDataValidated(data);
        expect(result).toBeFalsy();
    })
	
	it('uncorrect data 8', () => {
        const data = {
            brand: 'xxxx',
            mol: 'xxxx',
            carInspectionDate: '2012-05-12'
        }

        const result = isCarDataValidated(data);
        expect(result).toBeFalsy();
    })
	
	it('uncorrect data 9', () => {
        const data = {
            brand: '1',
            model: '0',
            carInte: '2023-07-11'
        }

        const result = isCarDataValidated(data);
        expect(result).toBeFalsy();
    })
	
	it('uncorrect data 10', () => {
        const data = {
            brand: 'true',
            model: 'false',
            carInspectionDate: ''
        }

        const result = isCarDataValidated(data);
        expect(result).toBeFalsy();
    })
	
	it('uncorrect data 11', () => {
        const data = {
            brand: 'true',
            model: 'false',
            carInspectionDate: '22'
        }

        const result = isCarDataValidated(data);
        expect(result).toBeFalsy();
    })
	
	it('uncorrect data 12', () => {
        const data = {
            brand: 'xyz',
            model: 'x',
        }

        const result = isCarDataValidated(data);
        expect(result).toBeFalsy();
    })
	
	it('uncorrect data 13', () => {
		const data = {
			brand: 'XXX',
			carInspectionDate: '2022-01-01'
		}

		const result = isCarDataValidated(data);
		expect(result).toBeFalsy();
    })
	
	it('uncorrect data 14', () => {
		const data = {
			brand: 'XXX',
			carInspectionDate: '2019-01-01T00:00:00'
		}
	
		const result = isCarDataValidated(data);
		expect(result).toBeFalsy();
	})
	
	it('uncorrect data 15', () => {
		const data = {}
	
		const result = isCarDataValidated(data);
		expect(result).toBeFalsy();
	})
	
	it('uncorrect data 16', () => {
		const data = 23;

		const result = isCarDataValidated(data);
		expect(result).toBeFalsy();
	})
	
	it('uncorrect data 17', () => {
		const data = true;

		const result = isCarDataValidated(data);
		expect(result).toBeFalsy();
	})
	
	it('uncorrect data 18', () => {

		const result = isCarDataValidated();
		expect(result).toBeFalsy();
	})
	
	it('uncorrect data 19', () => {
		const data = [
		{
            brand: 'Opel',
            model: 'Astra',
            carInspectionDate: 'Mar 25 2025'
        }
		];

		const result = isCarDataValidated(data);
		expect(result).toBeFalsy();
	})
	
	it('uncorrect data 20', () => {
		const data = 'string'
		
		const result = isCarDataValidated(data);
		expect(result).toBeFalsy();
	})
	
});

describe('isIDcorrect function check', () => {
    it('correct id test 1', () => {
        expect(isIDcorrect('64ae36f09fb27147a123a471')).toBeTruthy();
    })
    it('correct id test 2', () => {
        expect(isIDcorrect('64adbc68be4ed2d6b9fd38f6')).toBeTruthy();
    })
    it('correct id test 3', () => {
        expect(isIDcorrect('64adbc19be4ed2d6b9fd38f4')).toBeTruthy();
    })
    it('correct id test 4', () => {
        expect(isIDcorrect('64adbbebbe4ed2d6b9fd38f3')).toBeTruthy();
    })
    it('correct id test 5', () => {
        expect(isIDcorrect(999888777666555444333222)).toBeTruthy();
    })

    it('uncorrect id test 1', () => {
        expect(isIDcorrect('64ae36f09fb27147a471')).toBeFalsy(); //to short
    })
    it('uncorrect id test 2', () => {
        expect(isIDcorrect('64adbc68be4ed2$$$9fd38f6')).toBeFalsy(); //special character
    })
    it('uncorrect id test 3', () => {
        expect(isIDcorrect()).toBeFalsy();
    })
    it('uncorrect id test 4', () => {
        expect(isIDcorrect('')).toBeFalsy();
    })
});