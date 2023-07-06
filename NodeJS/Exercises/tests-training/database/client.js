const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = process.env.DBNAME || 'tests-training-cars';



let client = null;

const resetClient = () => {
    client = null;
}

const getClient = () => {
    if (client === null) {
        throw new Error('Not connected to the database!')
    }
    else {
        return client;
    }
}

const getDb = () => {
    return getClient().db(dbName);
}

const connect = async () => {
    client = await MongoClient.connect(url, {useNewUrlParser: true});
}

const disconnect = async () => {
    await getClient().close();
    resetClient();
}

const drop = async () => {
    await getDb().dropDatabase();
}

const main = async () => {
    await connect();
    const db = getDb().collection('cars');
    await db.insertOne({name: "test"});
    console.log(await db.find().toArray())
    // await drop();
    await disconnect();
}

// main();

module.exports =  {resetClient, getClient, getDb, connect, disconnect, drop, main}