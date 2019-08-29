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
    getSaved: () => ajax.get('/api/books')
}