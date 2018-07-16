// require mongoose and connect to database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tunely_test', { useNewUrlParser: true });

var Album = require('./album');
var Song = require('./song');

module.exports = {
  Album: Album,
  Song: Song
};
