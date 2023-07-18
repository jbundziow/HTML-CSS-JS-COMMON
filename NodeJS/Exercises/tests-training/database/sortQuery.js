const { getDb } = require('./client');
const { db, collection } = require('./db-config')

const sortQuery = async (command, term) => {
    // id_near = inspection date from nearest
    // id_far = inspection date from farthest
    // md_near = last modified date from nearest
    // md_far = last modified date from farthest
    // lookfor = search for specified string

    let result;

    switch (command) {
        case 'id_near':
            result = await getDb(db, collection).find().sort({_id: -1}).toArray();
            break;

        case 'id_far':
            result = await getDb(db, collection).find().sort({_id: 1}).toArray();
            break;

        case 'md_near':
            result = await getDb(db, collection).find().sort({lastModified: -1}).toArray();
            break;


        case 'md_far':
            result = await getDb(db, collection).find().sort({lastModified: 1}).toArray();
            break;

        case 'lookfor':
            const regex = new RegExp(term, 'i');
            result = await getDb(db, collection).find({$or:[ {brand: regex}, {model: regex} ]}).sort({_id: -1}).toArray();
            break;


        default:
            result = await getDb(db, collection).find({brand: /op/}).toArray();
            break;
    }

    return result;
}


const areSortQueriesValidated = (queryObj) => {
    const allowedCommands = ['id_near', 'id_far', 'md_near', 'md_far', 'lookfor'];

    if(queryObj === undefined || typeof(sortQuery) !== 'object') {
    return false;
    }
    else if(!queryObj.hasOwnProperty('sort') || typeof(queryObj.sort) !== 'string') {
        return false;
    }
    else if(queryObj.sort === 'lookfor' && !queryObj.hasOwnProperty('term')) {
        return false;
    }
    else if(queryObj.sort === 'lookfor' && queryObj.hasOwnProperty('term') && queryObj.term === '') {
        return false;
    }
    else if(queryObj.hasOwnProperty('term') && typeof(queryObj.term) !== 'string') {
        return false;
    }
    else if(!allowedCommands.contains(queryObj.sort)) {
        return false;
    }
    }

module.exports = {sortQuery, areSortQueriesValidated};