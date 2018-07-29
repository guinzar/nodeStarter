const mongo = require('../models/mongoUser');

exports.getUsersCB = (req, res) => {
  mongo.getUsersCB(users => {
    console.log(users);
    res.json(users);
  });
};
exports.getUsersPromise = (req, res) => {
  mongo.getUsersPromise()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(404).send(err);
    });
};
exports.postUserCB = (req, res) => {
  const name = req.body.name;
  if (name && typeof name === 'string') {
    mongo.postUserCB(name, user => {
      console.log(user);
      res.send(`succesfully added ${name}`);
    });
  } else {
    res.status(400).send('invalid or no user name');
  }
};
exports.postUserPromise = (req, res) => {
  const name = req.body.name;
  if (name && typeof name === 'string') {
    mongo.postUserPromise(name)
      .then(user => {
        res.send(`succesfully added ${name}`);
      })
      .catch(err => {
        console.log(err);
        res.status(404).send(err);
      });
  } else {
    res.status(400).send('invalid or no user name');
  }
};