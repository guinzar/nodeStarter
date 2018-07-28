const mysql = require('../models/mysqlUser');

exports.getUsersCB = (req, res) => {
  mysql.getUsersCB(users => {
    console.log(users);
    res.json(users);
  });
};
exports.postUserCB = (req, res) => {
  const name = req.body.name;
  if (name && typeof name === 'string') {
    mysql.postUserCB(name, user => {
      console.log(user);
      res.send(`succesfully added ${name}`);
    });
  }
};
