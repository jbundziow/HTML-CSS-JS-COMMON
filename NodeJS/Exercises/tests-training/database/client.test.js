const request = require('supertest');
const {connect, disconnect, drop, getDb} = require('./client');

it('create new database and collection, create one record in collection, check if length of collection is 1, drop database and check if length now is 0', async () => {
    let sizeAfterAdd, sizeAfterDrop;

    await connect();
    const db = getDb('test-database', 'test-collection');

    await db.insertOne({'testKey': 'testText'});
    const records = await db.find().toArray();
    sizeAfterAdd = records.length;

    await drop('test-database', 'test-collection');
    const recordsAfterDrop = await db.find().toArray();
    sizeAfterDrop = recordsAfterDrop.length;
    await disconnect();


    expect(sizeAfterAdd).toEqual(1);
    expect(sizeAfterDrop).toEqual(0);
})
