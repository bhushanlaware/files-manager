const express = require('express');

const router = express.Router();

const routes = [
  require('./vehiclesRoutes'),
  require('./tracksRoutes'),
];

router.use('/', routes);

module.exports = router;
