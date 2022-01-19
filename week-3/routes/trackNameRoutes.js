const express = require('express');
const trackNameController = require('../controller/trackNameController');

const router = express.Router();

router
  .route('/')
  .get(trackNameController.visitPage)
  .post(trackNameController.signIn);

module.exports = router;
