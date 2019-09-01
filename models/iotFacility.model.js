var mongoose = require('mongoose');
var config = require('../config');
var collection = config.facilityCollection;

var Schema = mongoose.Schema;

var IoTFacilitySchema = new Schema({
  _someId: String,
  name: String,
  geolocation: Schema.Types.Mixed,
  devices: Array
},
  { collection: collection });

module.exports = mongoose.model('IoTFacilityModel', IoTFacilitySchema);