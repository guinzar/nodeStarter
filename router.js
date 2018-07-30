const mongo = require('./controllers/mongoData');
const mysql = require('./controllers/mysqlData');
const api = require('./controllers/externalApi');

module.exports = app => {
  app.get('/mongo/cb/users', mongo.getUsersCB);
  app.get('/mongo/promise/users', mongo.getUsersPromise);
  app.get('/mongo/async/users', mongo.getUsersAsync);
  app.post('/mongo/cb/users', mongo.postUserCB);
  app.post('/mongo/promise/users', mongo.postUserPromise);
  app.post('/mongo/async/users', mongo.postUserAsync);
  app.get('/mysql/users/cb', mysql.getUsersCB);
  app.post('/mysql/users', mysql.postUserCB);

  app.get('/api', api);
};
