const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});
const ModelClass = mongoose.model('user', userSchema);
module.exports = ModelClass;
