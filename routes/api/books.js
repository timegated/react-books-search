const router = require('express').Router()
const express = require('express');
const booksController = require('../../controllers/books')

router
    .router('/')
    .get(booksController.findAll)
    .post(booksController.create)
    