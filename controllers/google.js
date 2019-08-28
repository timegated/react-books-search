const axios = require('axios');
const db = require('../models');

const ajax = axios.create({
    headers: {
        'Content-Type' : 'application/json'
    }
})

module.exports = {
    findAll: async function(req, res) {
        const {query: params} = req
        try {
            const results = await ajax.get(
                'https://www.googleapis.com/books/v1/volumes',
                { params }
            )

            const apiBooks = results.data.items.filter(
                result => 
                    result.volumeInfo.title &&
                    result.volumeInfo.infoLink &&
                    result.volumeInfo.authors &&
                    result.volumeInfo.description &&
                    result.volumeInfo.imageLinks &&
                    result.volumeInfo.imageLinks.thumbnail
            );

            const dbBooks = await db.Book.find()

            const books = apiBooks.filter(apiBook => 
                dbBooks.every((dbBook) => dbBook.googleId.toString() !== apiBook.id)
            )
           return res.json(books)
        } catch (e) {
            return res.status(422).json(e)
        }
    },
}