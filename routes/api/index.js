const express = require('express');
const router = express.Router();
const bookRoutes = require('./books');
const googleRoutes = require('./google');

router.use('/books', bookRoutes);

router.use('/google', googleRoutes);

module.exports = router;