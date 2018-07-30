const mongoose = require('mongoose');
const db = require('./models/mongoUser');
mongoose.connect('mongodb://localhost:27017/nodeStarter');

it('Should get expected users from the users table', (done) => {
  db.getUsersCB((data) => {
    expect(data[0].name).toBe('Bob');
    done();
  });
});
