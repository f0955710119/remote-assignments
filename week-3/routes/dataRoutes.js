const express = require('express');
const router = express.Router();

const dataController = require('../controller/dataController');

router.route('/').get(dataController.getData);

module.exports = router;
