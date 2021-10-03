var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var IoTFacilitySchema = new Schema(
    {
        _someId: String,
        id: String,
        name: String,
        geolocation: Schema.Types.Mixed,
        devices: Array,
    },
    {
        collection: process.env.FACILITY_COLLECTION,
    }
);

module.exports = mongoose.model("IoTFacilityModel", IoTFacilitySchema);
