const { MongoClient } = require("mongodb");

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
      console.log(data.length);
      return data;
    }
    catch (e) {
      console.error(e);
    }
    finally {
      await client.close();
    }
  }


let data;
  switch (command) {
    case 'insert':
      insert(object);
      break;
    case 'showAll':
      data = showAll().then(res => {return res})
      return data;
      break;
  
    default:
      break;
  }
  
}

module.exports = database;