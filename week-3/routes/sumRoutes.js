const express = require('express');
const router = express.Router();

const sumController = require('../controllers/sumController');

router.route('/').get(sumController.visitSumPage);

module.exports = router;
