var mongoose = require("mongoose");
var Schema = mongoose.Schema;

console.log(process.env.COLLECTION_NAME)

var IoTDeviceSchema = new Schema(
    {
        _someId: String,
        id: String,
        data: Schema.Types.Mixed,
        timestamp: Number,
        dsn: String,
        geolocation: Schema.Types.Mixed,
        facility: String,
        type: String,
    },
    {
        collection: process.env.COLLECTION_NAME,
    }
);

module.exports = mongoose.model("IoTDeviceModel", IoTDeviceSchema);
