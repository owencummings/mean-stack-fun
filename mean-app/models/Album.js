var mongoose = require('mongoose');

var AlbumSchema = new mongoose.Schema({
  title: String,
  artist: String,
  publisher: String,
  published_date: Date,
  updated_at: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Album', AlbumSchema);
