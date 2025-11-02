const request = require('supertest');
const app = require('./index');


describe('API Tests', () => {

  test('GET /health should return ok status', async () => {
    const response = await request(app).get('/health');
	console.log(response);
    expect(response.body.status).toBe('ok');
  });

});