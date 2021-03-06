const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Book.find(req.query)
        .then(books => res.json(books))
        .catch(err => console.log(err))
    },
    create: (req, res) => {
        db.Book.create(req.body)
        .then(result => res.json(result))
        .catch(err => console.log(err))
    },
    delete: (req, res) => {
        db.Book.findById(req.params.id)
        .then(book => book.remove())
        .catch(result => res.json(result))
        .catch(err => console.log(err))
    }
}