const mongo = require('./controllers/mongoData');
const mysql = require('./controllers/mysqlData');

module.exports = app => {
  app.get('/mongo/users/cb', mongo.getUsersCB);
  app.post('/mongo/users', mongo.postUserCB);
  app.get('/mysql/users/cb', mysql.getUsersCB);
  app.post('/mysql/users', mysql.postUserCB);
};
