const { db, collection } = require('./db-config')
const { connect, disconnect, getDb } = require('./client')
const ObjectId = require('mongoose').Types.ObjectId;


const isCarDataValidated = (object) => {
    if(typeof object !== 'object') {
        return false;
    }
    else if(Object.keys(object).length !== 3) {
        return false;
    }
    else if(!object.hasOwnProperty('brand') || !object.hasOwnProperty('model') || !object.hasOwnProperty('carInspectionDate')) {
        return false;
    }
    else if(typeof(object.brand) !== 'string' || typeof(object.model) !== 'string') {
        return false;
    }
    else if(object.brand === '' || object.model === '') {
        return false;
    }
    else if (isNaN(Date.parse(object.carInspectionDate)) || Date.parse(object.carInspectionDate) < 0 ) {
        return false;
    }
    else {
        return true;
    }
}

const isIDcorrect = (id) => ObjectId.isValid(id) ? true : false;


const isPutObjectValidated = (object) => {
    if(typeof object !== 'object') {
        return false;
    }
    else if(Object.keys(object).length !== 4) {
        return false;
    }
    else if(!object.hasOwnProperty('_id') || !object.hasOwnProperty('brand') || !object.hasOwnProperty('model') || !object.hasOwnProperty('carInspectionDate')) {
        return false;
    }

    const id = object._id;
    const dataObj = {brand: object.brand, model: object.model, carInspectionDate: object.carInspectionDate};

    if(!isIDcorrect(id)) {
        return false;
    }
    else if (!isCarDataValidated(dataObj)) {
        return false;
    }
    else {
        return true;
    }
}


module.exports={isCarDataValidated, isIDcorrect, isPutObjectValidated};