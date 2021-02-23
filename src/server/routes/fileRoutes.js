const express = require('express');
const fileControllers = require('../controllers/fileControllers')
const router = express.Router();
/* GET users listing. */
router.get('/get_all_files', fileControllers.getAllFiles);

module.exports = router;
