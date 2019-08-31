var IotDeviceModel = require('../models/iotDevice.model');


/**
 * Return all device readings from the database
 * @param {request} HTTP request object
 * @param {response} HTTP response object
 * @param {next} callback arg to the middleware function
 */
exports.iot_devices_all = (request, response, next) => {

    IotDeviceModel.find({}, (error, devices) => {
        if (error) { return next(error); }
        response.status(200).json(devices)
    })

}