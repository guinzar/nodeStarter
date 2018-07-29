const mongo = require('./controllers/mongoData');
const mysql = require('./controllers/mysqlData');

module.exports = app => {
  app.get('/mongo/cb/users', mongo.getUsersCB);
  app.get('/mongo/promise/users', mongo.getUsersPromise);
  app.post('/mongo/cb/users', mongo.postUserCB);
  app.post('/mongo/promise/users', mongo.postUserPromise);
  app.get('/mysql/users/cb', mysql.getUsersCB);
  app.post('/mysql/users', mysql.postUserCB);
};
