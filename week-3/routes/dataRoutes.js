const express = require('express');
const router = express.Router();

const dataController = require('../controller/dataController');

router.route('/').post(dataController.getData);

module.exports = router;
