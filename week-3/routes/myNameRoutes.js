const express = require('express');
const myNameController = require('../controller/myNameController');

const router = express.Router();

router.route('/').get(myNameController.checkCookies);

module.exports = router;
