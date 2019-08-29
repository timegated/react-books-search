const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    subtitle: String,
    authors: {
        type: [String],
        required: true
    },

    description: String,
    image: String,
    link: String,
    googleId: String
})

module.exports = mongoose.model('Book', bookSchema)