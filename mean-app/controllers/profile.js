var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.profileRead = function(req, res) {

  //should probably add more cases (user not found!)

  // If no ID exists in the token return a 401
  if (!req.token._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  //otherwise do the right thing
  } else {
    User
      .findById(req.token._id)
      .exec(function(err, user) {
        res.status(200).json(user);
      });
  }

};
