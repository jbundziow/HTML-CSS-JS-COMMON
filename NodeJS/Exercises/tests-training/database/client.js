const { MongoClient, ServerApiVersion } = require('mongodb');
const {login, password} = require('./db-config');
const {ObjectId} = require('mongodb');

const uri = `mongodb+srv://${login}:${password}@cluster0.bqorlqk.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });


  
  const connect = async () => {
    await client.connect();
  }
  const disconnect = async () => {
    await client.close();
  }

  const drop = async (database, collection) => {
    await getDb(database, collection).drop();
  }

  const getDb = (database, collection) => {
    return client.db(database).collection(collection);
  }

  const getObjectId = (idString) => new ObjectId(idString);


module.exports =  {connect, disconnect, drop, getDb, getObjectId}