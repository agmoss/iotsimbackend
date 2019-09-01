var IotFacilitiesModel = require('../models/iotFacility.model');

/**
 * Return facilities from database
 * @param {request} HTTP request object 
 * @param {response} HTTP response object
 * @param {next} callback arg to the middleware function
 */
exports.iot_facilities = (request, response, next) => {

    // Get the data
    IotFacilitiesModel.find({}, (error, devices) => {
        if (error) { return next(error); }
        response.status(200).json(devices)
    })

}