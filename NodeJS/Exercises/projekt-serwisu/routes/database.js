const { MongoClient } = require("mongodb");
const ObjectId = require('mongodb').ObjectId;

function database(uri, collectionName, command, object) {
  

  const establishConnectionWithDatabase = (collectionName) => {
    const client = new MongoClient(uri);
    const dbTest = client.db('test');
    const collection = dbTest.collection(collectionName);
    return {client, collection};
  }

  const insert = async (object) => {
    const {client, collection} = establishConnectionWithDatabase(collectionName);

    try {
      //TODO: make here validation of data
      await collection.insertOne(object);
      showAll()
    }
    catch (e) {
      console.error(e);
    }
    finally {
      await client.close();
    }
  }

  const showAll = async (object) => {
    const {client, collection} = establishConnectionWithDatabase(collectionName);

    try {
      let data;
      if (object !== undefined && object.hasOwnProperty('search')) {
        data = await collection.find({ title: { $regex: object.search, $options: "i" } }).sort({date: -1}).toArray();
      }
      else if (object === 'descending') {
        data = await collection.find().sort({date: -1}).toArray();
      }
      else {
        data = await collection.find().toArray();
      }
      return data;
    }
    catch (e) {
      console.error(e);
    }
    finally {
      await client.close();
    }
  }

  const deleteRecord = async (id) => {
    const {client, collection} = establishConnectionWithDatabase(collectionName);

    try {
      await collection.deleteOne({_id: new ObjectId(id)});
    }
    catch (e) {
      console.error(e);
    }
    finally {
      await client.close();
    }
  }

  const updateRecord = async (key, newVal) => {
    const {client, collection} = establishConnectionWithDatabase(collectionName);

    try {
      const filter = { _id: new ObjectId('64a169dd5164efaa150226f1') };
      const update = { $set: { [key]: newVal } };
      await collection.updateOne(filter, update);
    }
    catch (e) {
      console.error(e);
    }
    finally {
      await client.close();
    }
  }



  switch (command) {
    case 'insert':
      insert(object);
      break;
    case 'showAll':
      const data = showAll(object).then(res => {return res})
      return data;
      break;
    case 'delete':
      deleteRecord(object);
      break;
    case 'update':
      updateRecord(object.key, object.value);
      break;
  
    default:
      break;
  }
  
}

module.exports = database;