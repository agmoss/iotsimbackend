var mongoose = require('mongoose');
var config = require('../config');
var collection = config.collectionName;

var Schema = mongoose.Schema;

var IoTDeviceSchema = new Schema({
	_someId: String,
	id: String,
	data: Schema.Types.Mixed,
	timestamp: Number,
	dsn: String,
	geolocation: Schema.Types.Mixed,
	facility: String,
	type: String
},
	{
		collection: collection
	},
);



module.exports = mongoose.model('IoTDeviceModel', IoTDeviceSchema);