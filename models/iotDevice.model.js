var mongoose = require('mongoose');
var config = require('../config');
var collection = config.collectionName;

var Schema = mongoose.Schema;

var IoTDeviceSchema = new Schema({
  _someId: String,
  data: Array,
  timestamp: Number,
  dsn: String,
  geolocation: Array,
  facility: String,
  type: String
},
  { collection: collection });

module.exports = mongoose.model('IoTDeviceModel', IoTDeviceSchema);