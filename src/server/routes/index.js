const express = require('express');

const router = express.Router();

const routes = [
  require('./fileRoutes'),
];

router.use('/', routes);

module.exports = router;
