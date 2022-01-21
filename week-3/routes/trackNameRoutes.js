const express = require('express');
const trackNameController = require('../controllers/trackNameController');

const router = express.Router();

router
  .route('/')
  .get(trackNameController.visitPage)
  .post(trackNameController.signIn);

module.exports = router;
