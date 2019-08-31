var EnergyModel = require('../../models/devices/energy.model');

/**
 * Return all energy device readings from the database
 * @param {request} HTTP request object
 * @param {response} HTTP response object
 * @param {next} callback arg to the middleware function
 */
exports.energy_devices = (request,response,next) =>{

    EnergyModel.find({},(error,energy) =>{
        if (error) { return next(error); }
        response.status(200).json(energy)
    })

}