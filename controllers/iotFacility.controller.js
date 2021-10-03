var IotFacilitiesModel = require("../models/iotFacility.model");

/**
 * Return facilities from database
 * @param {request} HTTP request object
 * @param {response} HTTP response object
 * @param {next} callback arg to the middleware function
 */
exports.iot_facilities = (request, response, next) => {
    // Get the data
    IotFacilitiesModel.find({}, (error, facilities) => {
        if (error) {
            return next(error);
        }

        var xCount = facilities.length;

        response.header("Access-Control-Expose-Headers", "X-Total-Count");
        response.set({
            "X-Total-Count": xCount,
        });

        response.status(200).json(facilities);
    });
};
