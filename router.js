const Data = require('./controllers/data');

module.exports = app => {
  app.get('/', Data.getData);
};
