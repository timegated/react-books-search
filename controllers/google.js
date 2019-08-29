const axios = require('axios');
const db = require('../models');

const ajax = axios.create({
    headers: {
        'Content-Type' : 'application/json'
    }
})

module.exports = {
    // findAll: (req, res) => {
    //     const {query: params} = req
    //     const result = ajax.get('https://www.googleapis.com/books/v1/volumes', { params })
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))
        
    // }
    findAll: async function(req, res) {
        const {query: params} = req
        //Pulling form input from search.js
        ajax.get('https://www.googleapis.com/books/v1/volumes', { params })
        .then(result => res.json(result.data.items))
        .catch(err => console.log(err))
   
    }
}