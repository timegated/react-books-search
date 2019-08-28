const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Book.find(req.query)
        .then(books => res.json(books))
        .catch(err => console.log(err))
    }
}