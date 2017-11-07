var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  join_Date: Date,
  //review: String,
  updated_at: { type: Date, default: Date.now }, //last logged in
});


module.exports = mongoose.model('User', UserSchema);
