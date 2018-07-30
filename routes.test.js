const request = require('supertest');

describe('GET /mongo/cb/users', () => {
  it('responds with json', (done) => {
    return request('http://localhost:3000')
      .get('/mongo/cb/users')
      .set('Accept', 'application/json')
      .expect(200)
      .then(data => {
        expect(data.body[0].name === 'Bob');
        done();
      });
  });
});
describe('POST /mongo/async/users', () => {
  it('responds with 200', (done) => {
    return request('http://localhost:3000')
      .post('/mongo/async/users')
      .send({name: 'testuser'})
      .set('Accept', 'application/json')
      .expect(200)
      .then(data => {
        done();
      });
  });
});
