const mongo = require('../models/mongoUser');

exports.getUsersCB = (req, res) => {
  mongo.getUsersCB(users => {
    console.log(users);
    res.json(users);
  });
};
exports.postUserCB = (req, res) => {
  const name = req.body.name;
  if (name && typeof name === 'string') {
    mongo.postUserCB(name, user => {
      console.log(user);
      res.send(`succesfully added ${name}`);
    });
  }
};