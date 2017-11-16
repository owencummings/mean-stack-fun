var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
  authorId: String,
  author: String,
  albumId: String,
  album: String,
  //publisher: String,
  //published_date: Date
  rating: Number,
  review: String,
  updated_at: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Review', ReviewSchema);
