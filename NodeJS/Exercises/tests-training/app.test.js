const request = require('supertest');
const app = require('./app')


it('my-first-test', async () => {
    const response = await request(app).get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('hello world');
})


//run tests command: jest --watchAll