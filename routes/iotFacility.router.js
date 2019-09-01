var express = require('express');
var router = express.Router();

var iotFacility_controller = require('../controllers/iotFacility.controller');

// All readings
router.get('/',iotFacility_controller.iot_facilities);

module.exports = router;