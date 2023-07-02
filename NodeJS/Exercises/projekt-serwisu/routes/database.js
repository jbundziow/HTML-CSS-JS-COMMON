const { MongoClient } = require("mongodb");
const ObjectId = require('mongodb').ObjectId;

function database(uri, collection, command, object) {
  

  const establishConnectionWithDatabase = (collection) => {
    const client = new MongoClient(uri);
    const dbTest = client.db('test');
    const articles = dbTest.collection(collection);
    return {client, articles};
  }

  const insert = async (object) => {
    const {client, articles} = establishConnectionWithDatabase(collection);

    try {
      //TODO: make here validation of data
      await articles.insertOne(object);
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
    const {client, articles} = establishConnectionWithDatabase(collection);

    try {
      let data;
      if (object === 'descending') {
        data = await articles.find().sort({date: -1}).toArray();
      }
      else {
        data = await articles.find().toArray();
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
    const {client, articles} = establishConnectionWithDatabase(collection);

    try {
      await articles.deleteOne({_id: new ObjectId(id)});
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
  
    default:
      break;
  }
  
}

module.exports = database;