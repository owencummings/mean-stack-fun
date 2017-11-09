var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  join_Date: Date,
  //review: String,
  updated_at: { type: Date, default: Date.now }, //last logged in
});


UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

UserSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET");
};




module.exports = mongoose.model('User', UserSchema);
