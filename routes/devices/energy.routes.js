var express = require('express');
var router = express.Router();

var energy_controller = require('../../controllers/devices/energy.controller');

// Get all energy devices
router.get('/devices',energy_controller.energy_devices);

module.exports = router;