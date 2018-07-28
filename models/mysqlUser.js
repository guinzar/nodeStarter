const mysql = require('../mysql');

exports.getUsersCB = (cb) => {
  mysql.query('select name from users', (err, result) => {
    if (err) throw err;
    cb(result);
  });
};
