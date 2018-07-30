const mongoose = require('mongoose');
const db = require('./models/mongoUser');
mongoose.connect('mongodb://localhost:27017/nodeStarter');

describe('mongo tests', () => {
  it('Should get expected users from the users table', (done) => {
    db.getUsersCB((data) => {
      expect(data[0].name).toBe('Bob');
      done();
    });
  });
  // it('Should get be able to post a user', async (done) => {
  //   let users = await db.getUsersPromise();
  //   let initialLen = users.length;
  //   await db.postUserPromise('newuser');
  //   users = await db.getUsersPromise();
  //   let finalLen = users.length;
  //   expect(initialLen).toBe(finalLen - 1);
  //   done();
  // });
});
