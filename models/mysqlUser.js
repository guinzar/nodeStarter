const mysql = require('../mysql');

exports.getUsersCB = (cb) => {
  mysql.query('select name from users', (err, result) => {
    if (err) throw err;
    cb(result);
  });
};
exports.postUserCB = (name, cb) => {
  mysql.query(`insert into users (name) values ("${name}")`, (err, result) => {
    if (err) throw err;
    cb(result);
  });
};
