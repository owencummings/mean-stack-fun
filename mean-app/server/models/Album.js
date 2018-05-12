var mongoose = require('mongoose');

var AlbumSchema = new mongoose.Schema({
  title: String,
  artist: String,
  avgRating: Number,
  updated_at: { type: Date, default: Date.now }

  //maybe need some sort of ID field ?
});


module.exports = mongoose.model('Album', AlbumSchema);
