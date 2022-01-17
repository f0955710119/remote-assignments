const express = require('express');
const router = express.Router();
const sumPageController = require('../controller/sumPageController');

router.route('/').get(sumPageController.visitSumPage);

module.exports = router;
