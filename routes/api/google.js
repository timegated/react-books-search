const express = require('express');
const router = express.Router();
const googleController = require('../../controllers/google');


router.route('/').get(googleController.findAll);

module.exports = router;