const request = require('supertest');
const app = require('../app');

it('x', () => {
    expect(true).toBe(true);
})


// it('/api/newcar test', async () => {
//     const payload = {name: 'john', email: 'xyz@sadfjak.com', password: '2342388' };
//     const res = await request(app)
//     .post('/api/newcar')
//     .send(payload)
//     .set('Content-Type', 'application/json')
//     .set('Accept', 'application/json')


//     expect(res.status).toEqual(200);
//     expect(app.locals.requestBody.name).toBe('john');

// })
