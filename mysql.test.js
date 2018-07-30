const db = require('./models/mysqlUser');

afterAll(() => db.connection.end());

it('Should get expected users from the users table', (done) => {
  db.getUsersCB((data) => {
    expect(data[0].name).toBe('Bob');
    done();
  });
});
