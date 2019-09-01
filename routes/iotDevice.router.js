var express = require('express');
var router = express.Router();

var iotDevice_controller = require('../controllers/iotDevice.controller');

// All readings
router.get('/',iotDevice_controller.iot_devices_main);

// One paramater 
router.get('/facility/:facility',iotDevice_controller.iot_devices_main);
router.get('/type/:type',iotDevice_controller.iot_devices_main);
router.get('/dsn/:dsn',iotDevice_controller.iot_devices_main);

// Two paramaters
router.get('/facility/:facility/type/:type',iotDevice_controller.iot_devices_main);

// Date
router.get('/gte/:gte',iotDevice_controller.iot_devices_main);
router.get('/facility/:facility/gte/:gte',iotDevice_controller.iot_devices_main);
router.get('/type/:type/gte/:gte',iotDevice_controller.iot_devices_main);
router.get('/dsn/:dsn/gte/:gte',iotDevice_controller.iot_devices_main);
router.get('/facility/:facility/type/:type/gte/:gte',iotDevice_controller.iot_devices_main);

module.exports = router;