var mongoose = require('mongoose');
var config = require('../../config');
var collection = config.collectionName;


var Schema = mongoose.Schema;

var EnergySchema = new Schema({
  _someId: String,
  watts: String,
  timestamp:String,
  dsn:String,
  geolocation: String,
  facility:String,
  type:String
},
{collection:collection});

module.exports = mongoose.model('EnergyModel', EnergySchema);