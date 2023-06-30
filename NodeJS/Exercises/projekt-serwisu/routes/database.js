const { MongoClient } = require("mongodb");
const ObjectId = require('mongodb').ObjectId;

function database(uri, command, object) {
  

  const establishConnectionWithDatabase = () => {
    const client = new MongoClient(uri);
    const dbTest = client.db('test');
    const articles = dbTest.collection('articles');
    return {client, articles};
  }

  const insert = async (object) => {
    const {client, articles} = establishConnectionWithDatabase();

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

  const showAll = async () => {
    const {client, articles} = establishConnectionWithDatabase();

    try {
      const data = await articles.find().toArray();
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
    const {client, articles} = establishConnectionWithDatabase();

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
      const data = showAll().then(res => {return res})
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