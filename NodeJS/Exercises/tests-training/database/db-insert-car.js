const { db, collection } = require('./db-config')
const { connect, disconnect, getDb } = require('./client')


const carDataIsValidated = (object) => {
    if (Object.keys(object).length !== 3) {
        return false;
    }
    else {
        return true;
    }

    //check if keys are brand model and carInspectionDate

    //check if brand is string

    //check if model is string

    //check if carInspectionDate is date (date.parse)
}

module.exports={carDataIsValidated};