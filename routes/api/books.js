const express = require('express');
const router = express.Router()
const booksController = require('../../controllers/books')

router
    .route('/')
    .get(booksController.findAll)
    

module.exports = router