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
             //1) get all data to array
             result = await getDb(db, collection).find().toArray();

             //2) convert to a Date()
             result.map(record => {
                 const parts = record.carInspectionDate.split('.')
                 const formattedDateString = `${parts[2]}-${parts[1]}-${parts[0]}`;
                 record.carInspectionDate = new Date(formattedDateString);
             })
 
             //3) sort by date
             result.sort((a, b) => {
                 const dateA = new Date(a.carInspectionDate);
                 const dateB = new Date(b.carInspectionDate);
                 
                 return dateB - dateA;
             });
 
             //4) go back to the 'dd.mm.yyyy' format
             result.map(record => {
                 record.carInspectionDate = new Date(Date.parse(record.carInspectionDate)).toLocaleDateString('pl-PL');
             })

            break;

        case 'id_far':
            //1) get all data to array
            result = await getDb(db, collection).find().toArray();

            //2) convert to a Date()
            result.map(record => {
                const parts = record.carInspectionDate.split('.')
                const formattedDateString = `${parts[2]}-${parts[1]}-${parts[0]}`;
                record.carInspectionDate = new Date(formattedDateString);
            })

            //3) sort by date
            result.sort((a, b) => {
                const dateA = new Date(a.carInspectionDate);
                const dateB = new Date(b.carInspectionDate);
                
                return dateA - dateB;
            });

            //4) go back to the 'dd.mm.yyyy' format
            result.map(record => {
                record.carInspectionDate = new Date(Date.parse(record.carInspectionDate)).toLocaleDateString('pl-PL');
            })
            
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

    if(queryObj === undefined || typeof(queryObj) !== 'object') {
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
    else if(!allowedCommands.includes(queryObj.sort)) {
        return false;
    }
    else {
        return true;
    }
    }

module.exports = {sortQuery, areSortQueriesValidated};