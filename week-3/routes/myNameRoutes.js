const express = require('express');
const myNameController = require('../controllers/myNameController');

const router = express.Router();

router.route('/').get(myNameController.checkCookies);

module.exports = router;
