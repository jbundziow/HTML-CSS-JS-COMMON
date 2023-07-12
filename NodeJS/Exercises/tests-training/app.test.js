const request = require('supertest');
const app = require('./app')


it('mainpage-get', async () => {
    const response = await request(app).get('/');
    expect(response.status).toEqual(200);
})


//run tests command: jest --watchAll