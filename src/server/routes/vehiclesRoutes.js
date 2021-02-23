const express = require('express');
const vehicleController = require('../controllers/vehicleController')
const router = express.Router();
/* GET users listing. */
router.get('/get_all_vehicles', vehicleController.getAllVehicles);

module.exports = router;
