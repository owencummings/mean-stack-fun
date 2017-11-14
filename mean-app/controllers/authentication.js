//this file is for registering a user
//to do that, we get the imported params and salt/hash the password and add the stuff to the user db

var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.register = function(req, res) {
  res.status(200);
  res.json({
    'token' : 'we did it'
  })

  /*

  //make new user object
  var user = new User();

  //would probably want to validate certain inputs here


  //set name and email
  user.username = req.body.username;
  user.email = req.body.email;
  user.join_Date = Date.now();

  //use setpassword function to generate the hashed password from User model
  //shouldn't we be doing something with this password?
  user.setPassword(req.body.password);


  //generate jwt token and send back to client
  user.save(function(err) {
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  });

  */
};




  module.exports.login = function(req, res) {

  passport.authenticate('local', function(err, user, info){
    var token;

    //catch error
    if (err) {
      res.status(404).json(err);
      return;
    }

    //if user is bc you may not get a user from the request
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      res.status(401).json(info);
    }
  })(req, res);
};
