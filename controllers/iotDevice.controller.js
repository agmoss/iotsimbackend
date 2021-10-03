var IotDeviceModel = require("../models/iotDevice.model");

/**
 * Return device readings from the database
 * @param {request} HTTP request object
 * @param {response} HTTP response object
 * @param {next} callback arg to the middleware function
 */
exports.iot_devices_main = (request, response, next) => {
    // Accessor for the URL parameters
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

    if (!request.query.last === true) {
        // Get the data
        IotDeviceModel.find(finder, (error, devices) => {
            if (error) {
                return next(error);
            }

            var xCount = devices.length;

            response.header("Access-Control-Expose-Headers", "X-Total-Count");
            response.set({
                "X-Total-Count": xCount,
            });

            response.status(200).json(devices);
        });
    } else {
        // Get last record
        IotDeviceModel.findOne(finder)
            .sort({ timestamp: -1 })
            .exec((error, message) => {
                if (error) {
                    return next(error);
                }

                response.header(
                    "Access-Control-Expose-Headers",
                    "X-Total-Count"
                );
                response.set({
                    "X-Total-Count": 1,
                });

                response.status(200).json(message);
            });
    }
};
