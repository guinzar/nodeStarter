const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});
const User = mongoose.model('user', userSchema);

exports.getUsersCB = (cb) => {
  User.find({}, (err, result) => {
    if (err) throw err;
    cb(result);
  });
};
exports.postUserCB = (name, cb) => {
  const user = new User({
    name: name
  });
  user.save((err, user) => {
    if (err) throw err;
    cb(user);
  });
}
