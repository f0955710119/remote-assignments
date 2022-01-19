const express = require('express');
const homeController = require('../controller/homeController');

const router = express.Router();

router.route('/').get(homeController.visitHomePage);
router.route('/sum.html').get(homeController.visitSumPage);

module.exports = router;
