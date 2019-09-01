var IotDeviceModel = require('../models/iotDevice.model');

/**
 * Return device readings from the database
 * @param {request} HTTP request object 
 * @param {response} HTTP response object
 * @param {next} callback arg to the middleware function
 */
exports.iot_devices_main = (request, response, next) => {

    // Accessor for the URL paramaters
    const prefix = request.params;

    // Create the finder object (pass to mongoose find())
    var finder = {};

    if (prefix.facility) {
        finder["facility"] = prefix.facility;
    }

    if (prefix.type) {
        finder["type"] = prefix.type;
    }

    if (prefix.dsn) {
        finder["dsn"] = prefix.dsn;
    }

    if (prefix.gte) {
        Object.assign(finder, { timestamp: { $gte: prefix.gte } });
    }

    // Get the data
    IotDeviceModel.find(finder, (error, devices) => {
        if (error) { return next(error); }
        response.status(200).json(devices)
    })

}