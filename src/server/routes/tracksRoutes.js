const express = require('express');
const tracksControllers = require('../controllers/tracksControllers')
const tracksValidator = require('../middlewares/validators/tracksValidator')
const router = express.Router();
/* GET tracks listing. */
router.get(
  '/place_interactions',
  tracksControllers.getVehiclesForTime,
);
router.get('/vehicle_activity',
  tracksControllers.getVehicleActivity);


module.exports = router;
