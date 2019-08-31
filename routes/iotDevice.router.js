var express = require('express');
var router = express.Router();

var iotDevice_controller = require('../controllers/iotDevice.controller');

// Get all energy devices
router.get('/all', iotDevice_controller.iot_devices_all);

module.exports = router;