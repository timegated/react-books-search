const axios = require('axios');
const db = require('../models');

const ajax = axios.create({
    headers: {
        'Content-Type' : 'application/json'
    }
})

module.exports = {
    findAll: (req, res) => {
        const {query: params} = req
        const result = ajax.get('https://www.googleapis.com/books/v1/volumes', { params })
        .then(data => res.json(data.data.items))
        .catch(err => console.log(err))
        
    }
}