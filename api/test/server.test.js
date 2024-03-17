const request = require('supertest');
const { app, server } = require('../src/app.js');

afterAll((done) => {
    server.close(done);
});

describe('API', () => {
    it('should return a JSON object with a random number between 0 and 100', async () => {
        const response = await request(app).get('/api/number');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('number');
        expect(response.body.number).toBeGreaterThanOrEqual(0);
        expect(response.body.number).toBeLessThanOrEqual(100);
    });
});

describe('Invalid Routes' , () => {
    it('should return status 404' , async () => {
        const response = await request(app).post('/images');
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('message');
    });
});