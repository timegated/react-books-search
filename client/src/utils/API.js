import axios from 'axios'


const ajax = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
})
//Basic crud operations go here
export default {
    //Searching API
    searchBooks: query => ajax.get('/api/google', {params: {q: query}}),
    
    //Saving books to database
    saveBook: data => ajax.post('/api/books', data),

    //Retrieving saved books
    getSaved: (bookData) => ajax.get('/api/books', bookData),

    //Delete book method
    deleteBooks: (id) => ajax.delete('/api/books/'+ id)
}