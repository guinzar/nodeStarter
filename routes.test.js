const request = require('supertest');

describe('GET /mongo/cb/users', () => {
  it('responds with json', (done) => {
    return request('http://localhost:3000')
      .get('/mongo/cb/users')
      .set('Accept', 'application/json')
      .expect(200, done)
  });
});
