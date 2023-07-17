const { getDb } = require('./client');
const { db, collection } = require('./db-config')

const sortQuery = async (command) => {
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
            result = await getDb(db, collection).find({$or:[ {brand: /$Op/i}, {model: /Op/i} ]}).toArray();
            break;


        default:
            result = await getDb(db, collection).find({brand: /op/}).toArray();
            break;
    }

    return result;
}

module.exports = {sortQuery};